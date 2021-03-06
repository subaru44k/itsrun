import Vue from 'vue'
import moment from 'moment';
import { FirebaseControl } from '../firebase/FirebaseControl';
import { StadiumInfo } from './stadiuminfo';

moment.locale('ja')

export class TableVariableOperator {
  firebaseControl: FirebaseControl;
  constructor(firebase) {
    this.firebaseControl = new FirebaseControl(firebase);
  }
  updateStadiumInfo(stadiumInfoArray: StadiumInfo[]) {
    this.firebaseControl.getStadiumInfo().then(stadiumArray => {
      stadiumArray.forEach(stadium => {
        stadiumInfoArray.push(stadium);
      })
    })
  }
  
  updateStatusArray(dateIndex: number, timeIndex: number, value: number, statusArray: number[][]) {
    let timeArray: number[] = statusArray[dateIndex];
    Vue.set(timeArray, timeIndex, value);
  }
  
  initializeTableData(weekIndex: number, timeRange: string[], dateList: string[], statusArray: number[][]) {
    this.initializeDateList(weekIndex, dateList);
    this.initializeTimeRange(timeRange);
    this.initializeStatus(statusArray);
  }
  
  updateTableContent(stadiumId: string, weekIndex: number, timeRange: string[], dateList: string[], statusArray: number[][]) {
    this.updateDateList(weekIndex, dateList);
    if (stadiumId === '0') {
      this.firebaseControl.getDefaultPageId().then((id) => {
        this.updateTimeRange(id, timeRange);
        this.updateStatus(id, weekIndex, statusArray);
      })
    } else {
      this.updateTimeRange(stadiumId, timeRange);
      this.updateStatus(stadiumId, weekIndex, statusArray);
    }
  }
  
  initializeTimeRange(timeRange: string[]) {
    timeRange.push('00:00');
    timeRange.push('00:00');
    timeRange.push('00:00');
  }
  
  initializeStatus(statusArray: number[][]) {
    statusArray.push([-1, -1, -1]);
    statusArray.push([-1, -1, -1]);
    statusArray.push([-1, -1, -1]);
    statusArray.push([-1, -1, -1]);
    statusArray.push([-1, -1, -1]);
    statusArray.push([-1, -1, -1]);
    statusArray.push([-1, -1, -1]);
  }

  updateStatusToInitialValue(statusArray: number[][]) {
    statusArray.forEach((statusInADay, index) => {
      statusArray.splice(index, 1, [-1, -1, -1]);
    });
  }
  
  updateTimeRange(id: string, timeRange: string[]) {
    this.firebaseControl.getTimeRange(id).then((ranges) => {
        ranges.forEach((range, index) => {
            timeRange.splice(index, 1, range);
        })
    });
  }
  
  updateStatus(id: string, weekIndex: number, statusArray: number[][]) {
    Promise.all(this.getDateListForFirebaseId(weekIndex).map(dateId => {
      return this.firebaseControl.getStatus(id, dateId);
    })).then((statuses) => {
      statusArray.forEach((statusInADay, index) => {
        statusArray.splice(index, 1, statuses[index]);
      });
    });
  }

  putStatusToDb(id: string, weekIndex: number, statusArray: number[][], successCallback: Function, errorCallback: Function) {
    let dateMomentList = this.getDateMomentList(weekIndex);
    return Promise.all(
      statusArray.map((statudInADay, index) => {
        return this.firebaseControl.putStatus(id, dateMomentList[index].format('YYYYMMDD'), statudInADay);
      })
    ).then(() => {
      console.log('update completed')
      successCallback();
    }).catch((err) => {
      console.warn('error on update');
      console.warn(err);
      errorCallback();
    });
  }
  
  initializeDateList(weekIndex: number, dateList: string[]) {
    return this.getDateMomentList(weekIndex).forEach((date) => {
      dateList.push(date.format('MM/DD(ddd)'));
    });
  }
  
  updateDateList(weekIndex: number, dateList: string[]) {
    return this.getDateMomentList(weekIndex).forEach((date, index) => {
      dateList.splice(index, 1, date.format('MM/DD(ddd)'));
    })
  }
  
  getDateListForFirebaseId(weekIndex: number) {
    return this.getDateMomentList(weekIndex).map((date) => {
      return date.format('YYYYMMDD');
    })
  }
  
  getDateMomentList(weekIndex: number) {
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

}