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
        storageBucket: "",
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

        var nameInput = $("#nameInput").val().trim();
        var destInput = $("#destInput").val().trim();
        var firstTrainInput = $("#firstTrainInput").val().trim();
        var freqInput = $("#freqInput").val().trim();
       // var monthsWorked = firebase.database.ServerValue.TIMESTAMP;
      //  if (nameInput === "") {
      //   alert("Please enter in a train name.");
      //   return false;
      // }

      // if (destInput === "") {
      //     alert("Please enter in a destination.");
      //     return false;
      //   }
  
      // if (firstTrainInput === "") {
      //     alert("Please enter in the first train time.");
      //     return false;
      //   }
      // //need to make an if statement to ensure that the time entered is correct
      // if (freqInput === "") {
      //     alert("Please enter in a frequency.");
      //     return false;
      //   }

    //Stores it in a JSON object called newTrain
    var newTrain = {
        nameInput: nameInput,
        destInput: destInput,
        firsTrainInput: firstTrainInput,
        freqInput: freqInput
    };

    database.ref().push(newTrain);
    console.log(newTrain);

    alert("New train added!");

       //Clears the form
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#destinationInput").val("");
    $("#frequencyInput").val("");

  });

  //Firebase event
    database.ref().on("child_added", function(childSnapshot) {

    //Storing the firebase snapshot into a variable
    var nameInput = childSnapshot.val().nameInput;
    var destInput = childSnapshot.val().destInput;
    var firstTrainInput = childSnapshot.val().firsTrainInput;
    var freqInput = childSnapshot.val().freqInput;
          
    // var tMinutesTillTrain = 0;

      // //show an update current time. setInterval method udpates time
      // function displayRealtime() {
      //   setInterval(function () {
      //     $('#current-time').html(moment().format('hh:mm A'))
      //     }, 1000);
      //   } 

      //   // displayRealTime();

      // var tRow = "";
      // var getKey = "";

      //   //Click event for the submit button. When user clicks Submit button to add a train to the schedule...
      // $("#submit").on("click", function() {
	    //     // Prevent form from submitting
      //     event.preventDefault();

      //     //Grab the values that the user enters in the text boxes in the "Add train" section. Store the values in variables.
      //     var nameInput = $("#nameInput").val().trim();
      //     var destInput = $("#destInput").val().trim();
      //     var firstTrainInput = $("#firsTrainInput").val().trim();
      //     var freqInput = $("#freqInput").val().trim();
      //     //Print the values that the user enters in the text boxes to the console for debugging purposes.
      //       console.log(nameInput);
      //       console.log(destInput);
      //       console.log(firstTrainInput);
      //       console.log(freqInput);

      //     //Form validation for user input values. To add a train, all fields are required.
	    //     //Check that all fields are filled out.
	    //     if (nameInput === "" || destInput === "" || firstTrainInput === "" || freqInput === ""){
	  	//     $("#firsTrainInput").empty();
		  //     $("#missing-field").html("ALL fields are required to add a train to the schedule.");
		  // return false;		
	    // }
      //     })

      //     //If form is valid, perform time calculations and add train to the current schedule.
      // else {
      //   $("#not-military-time").empty();
      //   $("#missing-field").empty();
      //   $("#not-a-number").empty();
          
    // //current time
    // var currentTime = moment();

    // //This subtracts the first train by a year to make sure it's before the current time (moment)
    // var firstTrainConverted = moment(firstTrainInput, "hh:mm").subtract("1, years");
    // // This calculates the difference between the current time and the first train
    // var difference = currentTime.diff(moment(firstTrainConverted), "minutes");
    // var remainder = difference % frequency;
    // var minutesAway = frequency - remainder;
    // var nextArrival = moment().add(minutesAway, "minutes").format("HH:mm");

    //create the new rows and data cells
    var newRow = $("<tr>").append(
        $("<td>").text(nameInput),
        $("<td>").text(destInput),
        $("<td>").text(freqInput),
        // $("<td>").text(nextArrival),
      //   $("<td>").text(minutesAway),
      // );

      //append to the table
      $("#trainTable > tbody").append(newRow));

    });
    

//define firebase storage bucket

      // var tMinutesTillTrain = 0;

      // //show an update current time. setInterval method udpates time
      // function displayRealtime() {
      //   setInterval(function () {
      //     $('#current-time').html(moment().format('hh:mm A'))
      //     }, 1000);
      //   } 

      //   // displayRealTime();

      // var tRow = "";
      // var getKey = "";

      //   //Click event for the submit button. When user clicks Submit button to add a train to the schedule...
      // $("#submit").on("click", function() {
	    //     // Prevent form from submitting
      //     event.preventDefault();

      //     //Grab the values that the user enters in the text boxes in the "Add train" section. Store the values in variables.
      //     var nameInput = $("#nameInput").val().trim();
      //     var destInput = $("#destInput").val().trim();
      //     var firstTrainInput = $("#firsTrainInput").val().trim();
      //     var freqInput = $("#freqInput").val().trim();
      //     //Print the values that the user enters in the text boxes to the console for debugging purposes.
      //       console.log(nameInput);
      //       console.log(destInput);
      //       console.log(firstTrainInput);
      //       console.log(freqInput);

      //     //Form validation for user input values. To add a train, all fields are required.
	    //     //Check that all fields are filled out.
	    //     if (nameInput === "" || destInput === "" || firstTrainInput === "" || freqInput === ""){
	  	//     $("#firsTrainInput").empty();
		  //     $("#missing-field").html("ALL fields are required to add a train to the schedule.");
		  // return false;		
	    // }
      //     })

      //     //If form is valid, perform time calculations and add train to the current schedule.
      // else {
      //   $("#not-military-time").empty();
      //   $("#missing-field").empty();
      //   $("#not-a-number").empty();
          
        
  
      