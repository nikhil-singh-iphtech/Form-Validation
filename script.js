document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let firstname = document.getElementById("firstname").value.trim();
  let middlename = document.getElementById("middlename").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let email = document.getElementById("email").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let age = document.getElementById("age").value.trim();
  let description = document.getElementById("description").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');

  let isValid = true;

 
  if (firstname === "") {
    document.getElementById("firstnameError").textContent = "First name is required";
    isValid = false;
  }

  if (middlename === "") {
    document.getElementById("middlenameError").textContent = "Middle name is required";
    isValid = false;
  }

  if (lastname === "") {
    document.getElementById("lastnameError").textContent = "Last name is required";
    isValid = false;
  }


  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter valid email";
    isValid = false;
  }


  let contactPattern = /^[0-9]{10}$/;
  if (!contactPattern.test(contact)) {
    document.getElementById("contactError").textContent = "Enter valid 10-digit number";
    isValid = false;
  }


  if (age === "" || age < 1 || age > 120) {
    document.getElementById("ageError").textContent = "Enter valid age";
    isValid = false;
  }

 
  if (!gender) {
    document.getElementById("genderError").textContent = "Select gender";
    isValid = false;
  }

  
  if (description === "") {
    document.getElementById("descriptionError").textContent = "Description cannot be empty";
    isValid = false;
  }

  if (isValid) {
    let userData = {
      firstname,
      middlename,
      lastname,
      email,
      contact,
      age,
      gender: gender.value,
      description
    };

    console.log("User Data:", userData);
    alert("Form submitted successfully! Check console.");
    document.getElementById("userForm").reset();
  }

});