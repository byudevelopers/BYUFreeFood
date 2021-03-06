import { app, db } from './firebase'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'

export class Cache {
    static instance = null;
    static eventTimer = null;
    static events = []

    static getInstance() {
        
        if(this.instance == null) {
            this.instance = new Cache();
        }
        return this.instance;
    }

    async retrieveEvents(refreshEvents) {
        this.events = []
        const querySnapshot = await getDocs(collection(db, 'events'));

        querySnapshot.forEach((doc) => {
            this.events.push(doc.data());
        });
        refreshEvents(this.events);
        return this.events;
    } 

    getAllEvents(refreshEvents) {
        if (this.eventTimer == null || Math.abs((new Date().getTime() - this.eventTimer.getTime()) / 1000) > 30) {
            this.retrieveEvents(refreshEvents);
            this.eventTimer = new Date();
        } else {
            console.log("not enough time has passed to refresh");
        }
    }
}