import  * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';





var firebaseConfig = {
    apiKey: "AIzaSyDDv0WaOhqx0KBVm_yvjcBKjsCjOYi_88g",
    authDomain: "react-todo-f42de.firebaseapp.com",
    databaseURL: "https://react-todo-f42de.firebaseio.com",
    projectId: "react-todo-f42de",
    storageBucket: "react-todo-f42de.appspot.com",
    messagingSenderId: "380644384578",
    appId: "1:380644384578:web:317e06216fe89a9b2d72db",
    measurementId: "G-GC0LWVFPP8"
  };
  // Initialize Firebase
   export default firebase.initializeApp(firebaseConfig);