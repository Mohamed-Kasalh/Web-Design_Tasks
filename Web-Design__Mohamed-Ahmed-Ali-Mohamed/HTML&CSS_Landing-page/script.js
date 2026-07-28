var myForm = document.querySelector(".contact-form");

myForm.addEventListener("submit", validateForm);

function validateForm(e) {
  var nameInput = document.getElementById("name");
  var nameVal = nameInput.value;

  var emailInput = document.getElementById("email");
  var emailVal = emailInput.value;

  var chkList = document.querySelectorAll('input[name="services"]');

  if (nameVal === "" || nameVal.length === 0) {
    alert("Please enter your name!");
    e.preventDefault();
    return;
  }

  if (emailVal === "" || !emailVal.includes("@")) {
    alert("Please enter a valid email!");
    e.preventDefault();
    return;
  }

  var chk1 = false;
  for (var i = 0; i < chkList.length; i++) {
    if (chkList[i].checked === true) {
      chk1 = true;
    }
  }

  if (chk1 === false) {
    alert("Please select at least one service!");
    e.preventDefault();
    return;
  }

  console.log("form looks good, submitting...");
  e.preventDefault();
  alert("Thanks! Your message has been sent (demo only).");
}
