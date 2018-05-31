declare const firebase: any;
declare const stadiumId: string;

import Vue from 'vue'
import moment from 'moment';

import PaginationComponent from './components/pagination'
import ScheduleSmartphoneComponent from './components/schedule_phone';
import SchedulePcComponent from './components/schedule_pc';
import { FirebaseControl } from './firebase/FirebaseControl';

moment.locale('ja');

const timeRange: string[] = [];
const dateList: string[] = [];
const statusArray: number[][] = []
let firebaseControl;
let weekIndex: number = 0;
const schedule = new Vue({
  el: '#app',
  data: {
    timeSlots: timeRange,
    dates: dateList,
    status: statusArray
  },
  beforeCreate: function() {
    firebaseControl = new FirebaseControl(firebase);
    initializeTableData(weekIndex, timeRange, dateList, statusArray);
  },
  created: function() {
    updateTableContent(weekIndex, timeRange, dateList, statusArray);
  },
  methods: {
    handlePreviousWeek: function() {
      weekIndex--;
      updateTableContent(weekIndex, timeRange, dateList, statusArray);
    },
    handleNextWeek: function() {
      weekIndex++;
      updateTableContent(weekIndex, timeRange, dateList, statusArray);
    }
  },
  components: {
    'pagination': PaginationComponent,
    'schedule-phone': ScheduleSmartphoneComponent,
    'schedule-pc': SchedulePcComponent,
  }
});

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