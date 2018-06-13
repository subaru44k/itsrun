import Vue from 'vue'

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import PaginationComponent from './components/pagination'
import ManageScheculeComponent from './components/manage/manage_schedule';
import StadiumSelectorComponent from './components/manage/stadiumselector';
import SelectableConditionalStatus from './components/manage/selectable_conditional_status';
import { StadiumInfo } from './model/stadiuminfo';
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
const stadiumInfoArray: StadiumInfo[] = [];
const timeRange: string[] = [];
const dateList: string[] = [];
const statusArray: number[][] = []
let weekIndex: number = 0;
let stadiumId: string = '0';
const schedule = new Vue({
  el: '#app',
  data: {
    timeSlots: timeRange,
    dates: dateList,
    status: statusArray,
    stadiums: stadiumInfoArray,
  },
  beforeCreate: function() {
    tableVariableOperator = new TableVariableOperator(firebase);
    tableVariableOperator.initializeTableData(weekIndex, timeRange, dateList, statusArray);
  },
  created: function() {
    tableVariableOperator.updateStadiumInfo(stadiumInfoArray);
  },
  methods: {
    handlePreviousWeek: function() {
      weekIndex--;
      tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
    },
    handleNextWeek: function() {
      weekIndex++;
      tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
    },
    handleScheduleChanged: function(dateIndex: number, timeIndex: number, value: number) {
      console.log('value[' + dateIndex + '][' + timeIndex  + ']=' + value);
      tableVariableOperator.updateStatusArray(dateIndex, timeIndex, value, statusArray);
    },
    handleStadiumSelected(id: string) {
      console.log('handleStadiumSelected')
      stadiumId = id;
      tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
    },
    handleSubmit() {
      tableVariableOperator.putStatusToDb(stadiumId, weekIndex, statusArray);
    }
  },
  components: {
    'pagination': PaginationComponent,
    'manage-schedule': ManageScheculeComponent,
    'stadium-selector': StadiumSelectorComponent 
  }
});
