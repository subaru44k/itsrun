declare const firebase: any;

import Vue from 'vue'

import firebaseNative from 'firebase';
import PaginationComponent from './components/pagination.vue'
import ManageScheculeComponent from './components/manage/manage_schedule.vue';
import StadiumSelectorComponent from './components/manage/stadiumselector.vue';
import { StadiumInfo } from './model/stadiuminfo';
import { TableVariableOperator } from './model/TableVariableOperator';

const provider: firebaseNative.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    activateManagementConsole();
    return;
  }
  firebase.auth().signInWithRedirect(provider).then(result => {
  }).catch(err => {
    console.log(err);
  });
})

const activateManagementConsole = () => {
  let tableVariableOperator: TableVariableOperator;
  const stadiumInfoArray: StadiumInfo[] = [];
  const timeRange: string[] = [];
  const dateList: string[] = [];
  const statusArray: number[][] = []
  let weekIndex: number = 0;
  let stadiumId: string = '0';
  let statusMessage = ['Show message here for letting know the status.'];

  const schedule = new Vue({
    el: '#app',
    data: {
      timeSlots: timeRange,
      dates: dateList,
      status: statusArray,
      stadiums: stadiumInfoArray,
      statusMessage: statusMessage,
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
        tableVariableOperator.updateStatusToInitialValue(statusArray);
        tableVariableOperator.updateTableContent(stadiumId, weekIndex, timeRange, dateList, statusArray);
      },
      handleNextWeek: function() {
        weekIndex++;
        tableVariableOperator.updateStatusToInitialValue(statusArray);
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
        tableVariableOperator.putStatusToDb(stadiumId, weekIndex, statusArray,
        () => {
          statusMessage.splice(0, 1, 'Success to update data.');
        },
        () => {
          statusMessage.splice(0, 1, 'Error on updating data. Maybe insufficient permission.');
        });
      }
    },
    components: {
      'pagination': PaginationComponent,
      'manage-schedule': ManageScheculeComponent,
      'stadium-selector': StadiumSelectorComponent 
    }
  });
}
