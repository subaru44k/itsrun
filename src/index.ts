declare const firebase: any;
declare const stadiumId: string;

import Vue from 'vue'
import moment from 'moment';

import PaginationComponent from './components/pagination'
import ScheduleSmartphoneComponent from './components/schedule_phone';
import SchedulePcComponent from './components/schedule_pc';
import { FirebaseControl } from './firebase/FirebaseControl';
import { TableVariableOperator } from './model/TableVariableOperator';

let tableVariableOperator: TableVariableOperator;
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
    tableVariableOperator = new TableVariableOperator(firebase);
    tableVariableOperator.initializeTableData(weekIndex, timeRange, dateList, statusArray);
  },
  created: function() {
    tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
  },
  methods: {
    handlePreviousWeek: function() {
      weekIndex--;
      tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
    },
    handleNextWeek: function() {
      weekIndex++;
      tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
    }
  },
  components: {
    'pagination': PaginationComponent,
    'schedule-phone': ScheduleSmartphoneComponent,
    'schedule-pc': SchedulePcComponent,
  }
});
