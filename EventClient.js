import * as data from './fake_data.json'
import { app, db } from './firebase'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'
import uuid from 'react-native-uuid';

//USAGE
//import { getEventList } from "../EventClient"
//var eventList = getEventList();

export function getEventList() {
    return data;
}

export async function getBuildingEvents(building) {
  var eventList = await getFirebaseEvents();
  var buildingEvents = eventList.filter(event => event["building"] === building);
  console.log("here are the building events");
  console.log(buildingEvents);
  return buildingEvents;
}

export async function getFirebaseEvents() {
    const querySnapshot = await getDocs(collection(db, 'events'));
    let events = []
    console.log("This is the database:");
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        events.push(doc.data());
    });
    console.log(querySnapshot.docs.map(doc => doc.data()));
    console.log("here are the events")
    console.log(events);
    return events
}

export async function uploadEvent(event) {

    console.log("Uploading event...")
    console.log(event);
    let id = uuid.v4();
    await setDoc(doc(db, "events", id), event);
}
