/* The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

*/
// Your web app's Firebase configuration
 
// $(document).ready(function(){

    //code from firebase
var firebaseConfig = {
  apiKey: "AIzaSyBRewoSnUpE_oDGOmM4FVVsWCrPJHYPkgE",
  authDomain: "fir-hw-e5ffa.firebaseapp.com",
  databaseURL: "https://fir-hw-e5ffa.firebaseio.com",
  projectId: "fir-hw-e5ffa",
  storageBucket: "gs://fir-hw-e5ffa.appspot.com",
  messagingSenderId: "763004003824",
  appId: "1:763004003824:web:51f742b02e3ac99c"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//create database variable to create to firebase.database()
var database = firebase.database();

// Sample code of how to add a new Table Row
$("#submit").on("click", function(event){
  event.preventDefault();

//grab user input
  var trainName = $("#nameInput").val().trim();
    console.log(trainName);
  var destination = $("#destInput").val().trim();

  // Shows time with format of "HH:mm", and convert the amount of time passed into seconds.
  var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").format("X"); 
  console.log(firstTrain);

  var frequency = $("#freqInput").val().trim();





//Stores it in a JSON object called newTrain
  var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
  };
  console.log(newTrain);

  //upload new train to database
  database.ref().push(newTrain);
  console.log(newTrain);
  // database.ref().on("value", function(snapshot){
  //   console.log(snapshot.val());
  // })

  alert(newTrain.name + " added!");

  // Clears the form
  $("#trainNameInput").val("");
  $("#firstTrainInput").val("");
  $("#destinationInput").val("");
  $("#frequencyInput").val("");

});

//Firebase event for added trains then add to html
database.ref().on("child_added", function(childSnapshot) {

  //Storing the firebase snapshot into a variable
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;
      
  // Calculates the Difference between Now and the First Train time in Seconds (by unix), and convert the Seconds into Minutes / Frequency
  var tRemainder = moment().diff(moment.unix(firstTrain), "minutes") % frequency;
    console.log(tRemainder);

  // Calculates minutes until next train
  var tMinutes = frequency - tRemainder;

    // To calculate the arrival time, add the tMinutes to the currrent time
  var tArrival = moment().add(tMinutes, "m").format("hh:mm A");


  //create the new rows and data cells
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    // $("<td>").text(firstTrain),
    $("<td>").text(tArrival),
    $("<td>").text(tMinutes),
  );

  //append to the table
  $("#trainTable > tbody").append(newRow);

});
