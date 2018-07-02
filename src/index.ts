declare const stadiumId: string;
declare const firebase: any;

import Vue from 'vue'

import PaginationComponent from './components/pagination.vue'
import ScheduleSmartphoneComponent from './components/schedule_phone.vue';
import SchedulePcComponent from './components/schedule_pc.vue';
import { TableVariableOperator } from './model/TableVariableOperator';

let tableVariableOperator: TableVariableOperator;
const timeRange: string[] = [];
const dateList: string[] = [];
const statusArray: number[][] = []
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
