import { StadiumInfo } from '../model/stadiuminfo';

export class FirebaseControl {
    private db: any;
    private defaultCollectionName: string = 'default';
    private stadiumCollectionName: string = 'stadium_info';
    private availabilityCollectionName: string = 'availability';
    private dateCollectionName: string = 'date';
    constructor(private firebase: any) {
        this.db = firebase.firestore()
    }

    getDefaultPageId(): Promise<string> {
        return this.db.collection(this.defaultCollectionName).doc('0').get().then(document => {
            if (document.exists) {
                return document.data()['alias_id'];
            } else {
                console.warn('cannot find default id');
                return '0';
            }
        })
    }

    getTimeRange(id: string): Promise<Array<string>> {
        return this.getStadiumDocument(id).get().then(document => {
            if (document.exists) {
                return document.data()['time_range'];
            } else {
                console.warn('stadium not found. id: ' + id);
                return [];
            }
        })
    }

    getStatusInRange(id: string, dateId: string, rangeIndex: number): Promise<number> {
        return this.getDateDocument(id).doc(dateId).get().then(document => {
            if (document.exists) {
                return Number(document.data()['status'][rangeIndex]);
            } else {
                return 0;
            }
        }).catch((err) => {
            console.warn(err);
            return 0;
        });
    }

    getStadiumInfo(): Promise<StadiumInfo[]> {
        return this.db.collection(this.stadiumCollectionName).get().then(querySnapShot => {
            let infoArray: StadiumInfo[] = [];
            querySnapShot.forEach(doc => {
               infoArray.push(new StadiumInfo(doc.id, doc.data()['common_name']));
            });
            return infoArray;
        })
    }

    putStatus(id: string, dateId: string, values: number[]): Promise<void> {
        if (values.length != 3) {
            return Promise.reject(new Error('Size of status value is not correct.'));
        }
        return this.getDateDocument(id).doc(dateId).set({
            status: [
                values[0],
                values[1],
                values[2]
            ]
        })
    }

    private getDateDocument(id: string) {
        return this.db.collection(this.availabilityCollectionName).doc(id).collection(this.dateCollectionName);
    }

    private getStadiumDocument(id: string) {
        return this.db.collection(this.stadiumCollectionName).doc(id);
    }
}