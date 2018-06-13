declare const stadiumId: string;

import Vue from 'vue'
import moment from 'moment';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import PaginationComponent from './components/pagination'
import ScheduleSmartphoneComponent from './components/schedule_phone';
import SchedulePcComponent from './components/schedule_pc';
import { FirebaseControl } from './firebase/FirebaseControl';
import { TableVariableOperator } from './model/TableVariableOperator';

firebase.initializeApp({
  apiKey: "AIzaSyCSsO3dn7qPHhGDt4MfXSeiPrk-pF51m-g",
  authDomain: "itsrun-aaf42.firebaseapp.com",
  databaseURL: "https://itsrun-aaf42.firebaseio.com",
  projectId: "itsrun-aaf42",
  storageBucket: "itsrun-aaf42.appspot.com",
  messagingSenderId: "337135752630"
});
const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

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
