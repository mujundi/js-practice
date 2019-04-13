const form = document.querySelector("#loan-form");

form.addEventListener("submit", function(e) {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "block";

  setTimeout(calculateResults, 1250);

  e.preventDefault();
});

function calculateResults() {
  const amount = parseFloat(document.querySelector("#amount").value);
  const interest = parseFloat(document.querySelector("#interest").value);
  const years = parseFloat(document.querySelector("#years").value);

  const monthlyInterest = interest / 100 / 12;
  const monthlyPayment =
    (monthlyInterest * amount) / (1 - Math.pow(1 + monthlyInterest, years * -12));

  const totalPayment = monthlyPayment * years * 12;
  const totalInterest = totalPayment - amount;

  if (isFinite(monthlyPayment)) {
    document.querySelector("#monthly-payment").value = monthlyPayment.toFixed(2);
    document.querySelector("#total-payment").value = totalPayment.toFixed(2);
    document.querySelector("#total-interest").value = totalInterest.toFixed(2);
    document.querySelector("#loading").style.display = "block";

    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "block";
  } else {
    showError("Please check your numbers.");
    document.querySelector("#loading").style.display = "none";
  }
}

function showError(error) {
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
