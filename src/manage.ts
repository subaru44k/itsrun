declare const firebase: any;

import Vue from 'vue'
import moment from 'moment';

import PaginationComponent from './components/pagination'
import ManageScheculeComponent from './components/manage/manage_schedule';
import StadiumSelectorComponent from './components/manage/stadiumselector';
import SelectableConditionalStatus from './components/manage/selectable_conditional_status';
import { FirebaseControl } from './firebase/FirebaseControl';
import { StadiumInfo } from './model/stadiuminfo';

moment.locale('ja');

const stadiumInfoArray: StadiumInfo[] = [];
const timeRange: string[] = [];
const dateList: string[] = [];
const statusArray: number[][] = []
let firebaseControl;
let weekIndex: number = 0;
let stadiumId: string = '0';
let propertyChanged: number[][] = [];
const schedule = new Vue({
  el: '#app',
  data: {
    timeSlots: timeRange,
    dates: dateList,
    status: statusArray,
    stadiums: stadiumInfoArray,
  },
  beforeCreate: function() {
    firebaseControl = new FirebaseControl(firebase);
    initializeTableData(weekIndex, timeRange, dateList, statusArray);
  },
  created: function() {
    updateStadiumInfo(stadiumInfoArray);
  },
  methods: {
    handlePreviousWeek: function() {
      weekIndex--;
      updateTableContent(weekIndex, timeRange, dateList, statusArray);
    },
    handleNextWeek: function() {
      weekIndex++;
      updateTableContent(weekIndex, timeRange, dateList, statusArray);
    },
    handleScheduleChanged: function(dateIndex: number, timeIndex: number, value: number) {
      console.log('value[' + dateIndex + '][' + timeIndex  + ']=' + value);
      updateStatusArray(dateIndex, timeIndex, value);
    },
    handleStadiumSelected(id: string) {
      console.log('handleStadiumSelected')
      stadiumId = id;
      updateTableContent(weekIndex, timeRange, dateList, statusArray);
    },
    handleSubmit() {
      putStatusToDb(stadiumId, statusArray);
    }
  },
  components: {
    'pagination': PaginationComponent,
    'manage-schedule': ManageScheculeComponent,
    'stadium-selector': StadiumSelectorComponent 
  }
});

function updateStadiumInfo(stadiumInfoArray: StadiumInfo[]) {
  firebaseControl.getStadiumInfo().then(stadiumArray => {
    stadiumArray.forEach(stadium => {
      stadiumInfoArray.push(stadium);
    })
  })
}

function updateStatusArray(dateIndex: number, timeIndex: number, value: number) {
  let timeArray: number[] = statusArray[dateIndex];
  Vue.set(timeArray, timeIndex, value);
}

function initializeTableData(weekIndex: number, timeRange: string[], dateList: string[], statusArray: number[][]) {
  initializeDateList(weekIndex, dateList);
  initializeTimeRange(timeRange);
  initializeStatus(statusArray);
}

function updateTableContent(weekIndex: number, timeRange: string[], dateList: string[], statusArray: number[][]) {
  updateDateList(weekIndex, dateList);
  if (stadiumId === '0') {
    firebaseControl.getDefaultPageId().then((id) => {
      updateTimeRange(id, timeRange);
      updateStatus(id, weekIndex, statusArray);
      stadiumId = id;
    })
  } else {
    updateTimeRange(stadiumId, timeRange);
    updateStatus(stadiumId, weekIndex, statusArray);
  }
}

function initializeTimeRange(timeRange: string[]) {
  timeRange.push('00:00');
  timeRange.push('00:00');
  timeRange.push('00:00');
}

function initializeStatus(statusArray: number[][]) {
  statusArray.push([0, 0, 0]);
  statusArray.push([0, 0, 0]);
  statusArray.push([0, 0, 0]);
  statusArray.push([0, 0, 0]);
  statusArray.push([0, 0, 0]);
  statusArray.push([0, 0, 0]);
  statusArray.push([0, 0, 0]);
}

function updateTimeRange(id: string, timeRange: string[]) {
  firebaseControl.getTimeRange(id).then((ranges) => {
      ranges.forEach((range, index) => {
          timeRange.splice(index, 1, range);
      })
  });
}

function updateStatus(id: string, weekIndex: number, statusArray: number[][]) {
  getDateListForFirebaseId(weekIndex).forEach((dateId, index) => {
    let statusInADay: number[] = [];
    firebaseControl.getStatusInRange(id, dateId, 0).then((timeRange) => {
      statusInADay.push(timeRange);
    });
    firebaseControl.getStatusInRange(id, dateId, 1).then((timeRange) => {
      statusInADay.push(timeRange);
    });
    firebaseControl.getStatusInRange(id, dateId, 2).then((timeRange) => {
      statusInADay.push(timeRange);
    });
    statusArray.splice(index, 1, statusInADay);
  });
}

function putStatusToDb(id: string, statusArray: number[][]) {
  let dateMomentList = getDateMomentList(weekIndex);
  return Promise.all(
    statusArray.map((statudInADay, index) => {
      return firebaseControl.putStatus(id, dateMomentList[index].format('YYYYMMDD'), statudInADay);
    })
  ).then(() => {
    console.log('update completed')
  });
}

function initializeDateList(weekIndex: number, dateList: string[]) {
  return getDateMomentList(weekIndex).forEach((date) => {
    dateList.push(date.format('MM/DD(ddd)'));
  });
}

function updateDateList(weekIndex: number, dateList: string[]) {
  return getDateMomentList(weekIndex).forEach((date, index) => {
    dateList.splice(index, 1, date.format('MM/DD(ddd)'));
  })
}

function getDateListForFirebaseId(weekIndex: number) {
  return getDateMomentList(weekIndex).map((date) => {
    return date.format('YYYYMMDD');
  })
}

function getDateMomentList(weekIndex: number) {
  return [
    moment().add(7 * weekIndex, 'days'),
    moment().add(7 * weekIndex + 1, 'days'),
    moment().add(7 * weekIndex + 2, 'days'),
    moment().add(7 * weekIndex + 3, 'days'),
    moment().add(7 * weekIndex + 4, 'days'),
    moment().add(7 * weekIndex + 5, 'days'),
    moment().add(7 * weekIndex + 6, 'days'),
  ];
}