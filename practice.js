var firebaseConfig = {
    apiKey: "AIzaSyDklJqFZcl1ybxpH8rGhE1Y3m5GB-WjnZ0",
    authDomain: "practise-df213.firebaseapp.com",
    databaseURL: "https://practise-df213-default-rtdb.firebaseio.com",
    projectId: "practise-df213",
    storageBucket: "practise-df213.appspot.com",
    messagingSenderId: "908355942218",
    appId: "1:908355942218:web:8e49cf243db3cb8818f3b3",
    measurementId: "G-BB7HR42B0S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function AddUser() {
    Name=document.getElementById("Test").value
    firebase.database().ref("/").child(Name).update({
     purpose:"Adding Names"
    });
}