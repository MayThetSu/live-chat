import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA2tx0NcZqY6g_toKshllEtp-E1_t7GvOo",
    authDomain: "vue-blog-d3383.firebaseapp.com",
    projectId: "vue-blog-d3383",
    storageBucket: "vue-blog-d3383.appspot.com",
    messagingSenderId: "390170526176",
    appId: "1:390170526176:web:92fe0c92ed59cbb173eb85"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};