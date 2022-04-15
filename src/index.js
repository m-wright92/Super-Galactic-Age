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
    $("#user-data").toggle("hidden");
    $("#planetary-age").toggle("hidden");
    newUser.mercury().venus().mars().jupiter();
    $("#merc").text(newUser.mercAge);
    $("#ven").text(newUser.venAge);
    $("#mar").text(newUser.marAge);
    $("#jup").text(newUser.jupAge);
  });

  $("#life").on("click", function() {
    let mercResult = newUser.lifeExpect(newUser.mercAge);
    let venResult = newUser.lifeExpect(newUser.venAge);
    let marResult = newUser.lifeExpect(newUser.marAge);
    let jupResult = newUser.lifeExpect(newUser.jupAge);
    $("#merc-exp").text(mercResult + " on Mercury!");
    $("#ven-exp").text(venResult + " on Venus");
    $("#mar-exp").text(marResult + " on Mars");
    $("#jup-exp").text(jupResult + "on Jupiter");
    $("p.hidden").toggle("hidden");
  });
});