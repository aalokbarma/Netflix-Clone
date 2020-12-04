import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyB_WSNCt6N2FfJQN-aNyie3XHLs_blAIwE",
    authDomain: "netflix-clone-e6727.firebaseapp.com",
    databaseURL: "https://netflix-clone-e6727.firebaseio.com",
    projectId: "netflix-clone-e6727",
    storageBucket: "netflix-clone-e6727.appspot.com",
    messagingSenderId: "380881015026",
    appId: "1:380881015026:web:66449d505d52e35c28006b",
    measurementId: "G-C1WFNHTFMQ"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export {firebase};