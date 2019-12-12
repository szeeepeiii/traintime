
var config = {
    apiKey: "AIzaSyDtJAV732ZkQjI3eyXPKPFNfYf_hAWcrLQ",
    authDomain: "fir-intro-87342.firebaseapp.com",
    databaseURL: "https://fir-intro-87342.firebaseio.com",
    projectId: "fir-intro-87342",
    storageBucket: "fir-intro-87342.appspot.com",
    messagingSenderId: "990201426382",
    appId: "1:990201426382:web:18da6591987f0caa797b9f"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#button").on("click", function(event) {
event.preventDefault();

var traName = $("#trainName").val().trim();
var destina = $("#destination").val().trim();
var traTime = moment($("#trainTime").val().trim(),"HH:mm").format("");
var freque = $("#frequency").val().trim();

var trainData = {
    Name: traName,
    Destination: destina,
    Time: traTime,
    Frequency: freque,
}

database.ref().push(trainData);

alert ("Train successfully added! ");

$("#trainName").val("");
$("#destination").val("");
$("#trainTime").val("");
$("frequency").val(""); 

return false;
});

database.ref().on("child_added",function(childSnapshot){

var traName = childSnapshot.val().Name;
var destina = childSnapshot.val().Destination;
var traTime = childSnapshot.val().Time;
var freque = childSnapshot.val().Frequency;

var trainTimeFormat= moment(firstTime, "HH:mm").subtract(1,"years");

var currentTime = moment();

var diffTime = moment ().diff(moment(firstTimeFormat), "minutes");

var tRemainder = diffTime % freque;

var trainComing = freque - tRemainder;

var newRow = $("<tr>").append(
    $("<td>").text(traName),
    $("<td>").text(destina),
    $("<td>").text(traTime),
    $("<td>").text(freque),
  );
  $("#train-table > tbody").append(newRow);

});

