import * as data from './fake_data.json'
import { app, db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

//USAGE
//import { getEventList } from "../EventClient"
//var eventList = getEventList();

export function getEventList() {
    return data;
}

export async function getFirebaseEvents() {
    const querySnapshot = await getDocs(collection(db, 'events'));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}