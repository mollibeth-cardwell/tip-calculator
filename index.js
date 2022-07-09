var billAmount = 0;
var numPeople = 0;
var tipPercent = 0;

$(".percent-button").click(function (event) {
  var clickedButton = this.value;
  tipPercent = clickedButton / 100;
  $("#" + clickedButton + "-btn").addClass("percent-button-clicked");
  $(".percent-button").not(this).removeClass("percent-button-clicked");
  calculateTip(tipPercent);
});

$(".custom-button").change(function (event) {
  tipPercent = this.value / 100;
  calculateTip(tipPercent);
});

$("#total-bill-amt").change(function (event) {
  billAmount = Number(this.value);
  calculateTip(tipPercent);
});

$("#num-of-people").change(function (event) {
  numPeople = this.value;
  calculateTip(tipPercent);
});

$(".reset-button").click(function () {
  location.reload();
});

function calculateTip (percent) {
  if (billAmount != 0 && numPeople != 0) {
    var totalTip = billAmount * percent;
    var totalBill = totalTip + billAmount;
    var tipPerPerson = (totalTip / numPeople).toFixed(2);
    var totalPerPerson = (totalBill / numPeople).toFixed(2);
    $(".tip-pp").text("$" + tipPerPerson);
    $(".total-per-p").text("$" + totalPerPerson);
    $(".reset-button").addClass("reset-button-active");
  } else {
    console.log(billAmount, numPeople);
  }
};
