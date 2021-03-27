import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDwGepAmUptQ3qaNw5v-uCbC_vs8592hzA',
  authDomain: 'project-58-3cdb2.firebaseapp.com',
  databaseURL: 'https://project-58-3cdb2-default-rtdb.firebaseio.com',
  projectId: 'project-58-3cdb2',
  storageBucket: 'project-58-3cdb2.appspot.com',
  messagingSenderId: '619231560387',
  appId: '1:619231560387:web:176e21c273f1e051da1876',
  measurementId: 'G-TCZWR1891M',
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
