declare const firebase: any;
declare const weekIndex: any;

import Vue from 'vue'
import moment from 'moment';

import ScheduleSmartphoneComponent from './components/schedule_phone';
import SchedulePcComponent from './components/schedule_pc';
import ConditionalStatus from './components/conditional_status';
import { FirebaseControl } from './firebase/FirebaseControl';

moment.locale('ja');

// register component globally, but should register locally...
Vue.component('conditional-status', ConditionalStatus
)

const timeRange: string[] = [];
const statusArray: number[][] = []
const schedule = new Vue({
  el: '#app',
  data: {
    timeSlots: timeRange,
    dates: getDateList(weekIndex),
    status: statusArray
  },
  components: {
    'schedule-phone': ScheduleSmartphoneComponent,
    'schedule-pc': SchedulePcComponent,
  }
});


const firebaseControl = new FirebaseControl(firebase);
firebaseControl.getDefaultPageId().then((id) => {
  setTimeRange(id, timeRange);
  getStatus(id, statusArray);
})


function setTimeRange(id: string, timeRange: string[]) {
  firebaseControl.getTimeRange(id).then((ranges) => {
      ranges.forEach(range => {
          timeRange.push(range);
      })
  });
}

function getStatus(id: string, statusArray: number[][]) {
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

function getDateList(weekIndex: number) {
  return getDateMomentList(weekIndex).map((date) => {
    return date.format('MM/DD(ddd)');
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