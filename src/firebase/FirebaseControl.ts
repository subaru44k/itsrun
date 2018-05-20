export class FirebaseControl {
    private db: any;
    private stadiumCollectionName: string = 'stadium_info';
    constructor(private firebase: any) {
        this.db = firebase.firestore()
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

    private getStadiumDocument(id: string) {
        return this.db.collection(this.stadiumCollectionName).doc(id);
    }
}