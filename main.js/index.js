// TICKET PRICES IN USD
var AVIA_TICKET_PRISE_POLSHA = 350; 
var AVIA_TICKET_PRISE_ENGLAND = 550;
var AVIA_TICKET_PRISE_RUSSIA = 250;

// PAYMANT FOR UNVERSITYS:STUDY AT UNIVERSITY
var CONTRACT_PRISE_POLSHA = 3000;
var CONTRACT_PRISE_ENGLAND = 20000;
var CONTRACT_PRISE_RUSSIA = 2800;

// PAYMANT FOR UNVERSITYS:STUDY AT HOME
var CONTACRT_AT_HOME_POLSHA = 1000;
var CONTRACT_AT_HOME_ENGLAND = 10000;
var CONTRASCT_AT_HOME_RUSSIA = 800;

var USD_IN_USZ = 10700.5;
var CURRENT_YEAR = 2021;

// Called HTML elements: Form elements
var elForm = document.querySelector('.form-js');
var elName = document.querySelector('.name-js');
var elBorthday = document.querySelector('.birthday-js')
var elSurename = document.querySelector('.sure-name-js');
var elMessage = document.querySelector('.check-message');
var elSection = document.querySelector('.check-section')


elForm = addEventListener("submit", function (evt) {
  evt.preventDefault();

  elSection.style.display = 'block'

  var elCountry = document.querySelector(".country-select-js").value;
  var elHow = document.querySelector(".how-study-js").value;

  var age = CURRENT_YEAR - parseInt(elBorthday.value.trim().substr(0.4));

  if (age >= 18) {
    elMessage.textContent = `Hurmatli ${elName.value} ${elSurename.value} jadvalda sizning o'qish xarajatingiz yozilgan.`
  } else {
    elMessage.textContent = `Hurmatli ${elName.value} ${elSurename.value} sizning yoshingiz Universiteda o'qish uchun hali yetarli emas!`
  }

  var contractPrisez;
  if (elCountry === "pl" && elHow === "of") {
    document.querySelector('.contract-sell-js').textContent = `${CONTRACT_PRISE_POLSHA}`;
    document.querySelector(".ticket-sell-js").textContent = `${AVIA_TICKET_PRISE_POLSHA}`
    document.querySelector(".all-prise").textContent = `${CONTRACT_PRISE_POLSHA + AVIA_TICKET_PRISE_POLSHA}`
  }

  if (elCountry === "en" && elHow === "of"){
    document.querySelector('.contract-sell-js').textContent = `${CONTRACT_PRISE_ENGLAND}`
    document.querySelector(".ticket-sell-js").textContent = `${AVIA_TICKET_PRISE_ENGLAND}`
    document.querySelector(".all-prise").textContent = `${CONTRACT_PRISE_ENGLAND + AVIA_TICKET_PRISE_ENGLAND}`
  }

  if (elCountry === "ru" && elHow === "of"){
    document.querySelector(".contract-sell-js").textContent = `${CONTRACT_PRISE_RUSSIA}`
    document.querySelector(".contract-sell-js").textContent = `${AVIA_TICKET_PRISE_RUSSIA}`
    document.querySelector(".all-prise").textContent = `${CONTRACT_PRISE_RUSSIA + AVIA_TICKET_PRISE_RUSSIA}`
  }

  // ===========

  if (elCountry === "pl" && elHow === "on") {
    document.querySelector(".contract-sell-js").textContent = `${CONTACRT_AT_HOME_POLSHA}`
  }

  if (elCountry === "en" && elHow === "on") {
    document.querySelector(".contract-sell-js").textContent = `${CONTRACT_AT_HOME_ENGLAND}`
  }

  if (elCountry === "ru" && elHow === "on") {
    document.querySelector(".contract-sell-js").textContent = `${CONTRASCT_AT_HOME_RUSSIA}`
  }

 

});