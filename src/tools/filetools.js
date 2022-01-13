import react from 'react'
import {firebase} from '@firebase/app'
import uuid from 'react-uuid'
import '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDV8mW8bweN6YOg0OKgRZ9umOVs_UUN-pA",
    authDomain: "primecs-1cbfc.firebaseapp.com",
    projectId: "primecs-1cbfc",
    storageBucket: "primecs-1cbfc.appspot.com",
    messagingSenderId: "33832366036",
    appId: "1:33832366036:web:cc0d5c26b3c1b4690ff041",
    measurementId: "G-ETGHB4KYQF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default class FileTool {
    static upload = async(file) => {
        let returnvalue = '' 
        console.log(file)
        const storageRef = firebase.storage().ref().child(uuid());
      
        const querySnapshot = await storageRef.put(file)
        const url = await querySnapshot.ref.getDownloadURL()
        if(url){
            return url 
        }else{
            return "Something went wrong"
        }
    }
}