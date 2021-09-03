const firebaseConfig = {
      apiKey: "AIzaSyAwi1jyvBO5MryEh_39f7ICckDsgrKfITY",
      authDomain: "kwitter-881df.firebaseapp.com",
      databaseURL: "https://kwitter-881df-default-rtdb.firebaseio.com",
      projectId: "kwitter-881df",
      storageBucket: "kwitter-881df.appspot.com",
      messagingSenderId: "218527669674",
      appId: "1:218527669674:web:05b21606ea780c7fb6dfd3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
