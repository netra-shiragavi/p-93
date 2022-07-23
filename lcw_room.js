const firebaseConfig = {
      apiKey: "AIzaSyA_nXT740HNr0JlDRCL0jpae5-MZ6Il2L0",
      authDomain: "chatapp-6691f.firebaseapp.com",
      databaseURL: "https://chatapp-6691f.firebaseio.com",
      projectId: "chatapp-6691f",
      storageBucket: "chatapp-6691f.appspot.com",
      messagingSenderId: "380277340914",
      appId: "1:380277340914:web:f9799ea4b6413ae58bee6b",
      measurementId: "G-RL3D9J7PG4"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
