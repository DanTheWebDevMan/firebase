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
        storageBucket: "Firebase HW",
        messagingSenderId: "763004003824",
        appId: "1:763004003824:web:51f742b02e3ac99c"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var database = firebase.storage();
        
  
      // Sample code of how to add a new Table Row
      $("#submit").click(function(){
          var nameInput = $("#nameInput").val();
          var destInput = $("#destInput").val();
          var timeInput = $("#timeInput").val();
          var freqInput = $("#freqInput").val();
         // var monthsWorked = firebase.database.ServerValue.TIMESTAMP;
        
        // code for handling the push
        database.ref().push({
          trainName: nameInput,
          destInput: destInput,
          timeInput: timeInput,
          freqInput: freqInput,
          //monthsWorked: monthsWorked,
        })
  
          console.log("Adding new row!");
          
          
          var newRow = "<tr>" + 
              nameInput + "<td>" + 
              roleInput + "<td>" + 
              startInput + "<td>" + 
              monthsWorked + "<td>" + 
              rateInput + "<td>";
             
          $("#contentox").append(newRow); 
      });
    
      database.ref().on("value", function(snapshot){
        var newRow = $("<th>");
        snapshot.val().array.forEach(element => {
          console.log(element.name);
        });
        Object.keys(obj).forEach(function(key) {
          console.log(key, obj[key]);
        })
  
        var currentName = $("<td>");
        currentName.text(database);
       // console.log(snapshot.val(name));
        var currentDestination = $("<td>");
        var currentTrainTime = $("<td>");
        var currentFrequency = $("<td>");
        newRow.append(currentName, currentDestination, currentTrainTime, currentFrequency);
        var currentName = $("<td>");
        console.log(snapshot.val());
  
        
      });
  
  
  // })
  //define firebase storage bucket