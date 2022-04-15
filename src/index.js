import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserObject from "./js/userObject";

$(document).ready(function() {
  let newUser;

  

  $("#name-age").on("click", function() {
    let name = $("#name-input").val().trim();
    let age = $("#age").val();
    newUser = new UserObject(name, age);
    $("#info").toggle("hidden");
    $("#planetary-age").toggle("hidden");
    newUser.mercury().venus().mars().jupiter();
    $("#merc").text(newUser.mercAge);
  });


});