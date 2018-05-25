declare const firebase: any;
declare const stadiumId: any;

import Vue from 'vue'
import moment from 'moment';

import PaginationComponent from './components/pagination'
import ScheduleSmartphoneComponent from './components/schedule_phone';
import SchedulePcComponent from './components/schedule_pc';
import ConditionalStatus from './components/conditional_status';
import { FirebaseControl } from './firebase/FirebaseControl';

moment.locale('ja');

// register component globally, but should register locally...
Vue.component('conditional-status', ConditionalStatus
)

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
  },
  created: function() {
    setTableData(weekIndex, timeRange, dateList, statusArray);
  },
  methods: {
    handlePreviousWeek: function() {
      weekIndex--;
      resetData(timeRange, dateList, statusArray);
      setTableData(weekIndex, timeRange, dateList, statusArray);
    },
    handleNextWeek: function() {
      weekIndex++;
      resetData(timeRange, dateList, statusArray);
      setTableData(weekIndex, timeRange, dateList, statusArray);
    }
  },
  components: {
    'pagination': PaginationComponent,
    'schedule-phone': ScheduleSmartphoneComponent,
    'schedule-pc': SchedulePcComponent,
  }
});

function resetData(timeRange: string[], dateList: string[], statusArray: number[][]) {
  timeRange.splice(0, timeRange.length);
  dateList.splice(0, dateList.length);
  statusArray.splice(0, statusArray.length);
}
function setTableData(weekIndex: number, timeRange: string[], dateList: string[], statusArray: number[][]) {
  getAndSetDateList(weekIndex, dateList);
  if (stadiumId === 0) {
    firebaseControl.getDefaultPageId().then((id) => {
      getAndSetTimeRange(id, timeRange);
      getAndSetStatus(id, weekIndex, statusArray);
    })
  } else {
    getAndSetTimeRange(stadiumId, timeRange);
    getAndSetStatus(stadiumId, weekIndex, statusArray);
  }
}

function getAndSetTimeRange(id: string, timeRange: string[]) {
  firebaseControl.getTimeRange(id).then((ranges) => {
      ranges.forEach(range => {
          timeRange.push(range);
      })
  });
}

function getAndSetStatus(id: string, weekIndex: number, statusArray: number[][]) {
  getDateListForFirebaseId(weekIndex).forEach(dateId => {
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
    statusArray.push(statusInADay);
  });
}

function getAndSetDateList(weekIndex: number, dateList: string[]) {
  return getDateMomentList(weekIndex).forEach((date) => {
    dateList.push(date.format('MM/DD(ddd)'));
  });
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