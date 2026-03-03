const form = document.getElementById("userForm");

const textFields = [
  "firstname",
  "lastname",
  "email",
  "contact",
  "description"
];

textFields.forEach(id => {
  const field = document.getElementById(id);
  const errorField = document.getElementById(id + "Error");

  field.addEventListener("input", function () {
    if (field.value.trim() !== "") {
      errorField.textContent = "";
    }
  });
});

const classField = document.getElementById("class");
classField.addEventListener("change", function () {
  if (classField.value !== "") {
    document.getElementById("classError").textContent = "";
  }
});

const dobField = document.getElementById("dob");
dobField.addEventListener("change", function () {
  if (dobField.value !== "") {
    document.getElementById("dobError").textContent = "";
  }
});

const genderFields = document.querySelectorAll('input[name="gender"]');
genderFields.forEach(radio => {
  radio.addEventListener("change", function () {
    document.getElementById("genderError").textContent = "";
  });
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let firstname = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let email = document.getElementById("email").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let description = document.getElementById("description").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let studentClass = classField.value;
  let dob = dobField.value;

  let isValid = true;

  if (studentClass === "") {
    document.getElementById("classError").textContent = "Please select your class.";
    isValid = false;
  }

  if (dob === "") {
    document.getElementById("dobError").textContent = "Please select your Date of Birth.";
    isValid = false;
  }

  if (firstname === "") {
    document.getElementById("firstnameError").textContent = "First name is required";
    isValid = false;
  }

  if (lastname === "") {
    document.getElementById("lastnameError").textContent = "Last name is required";
    isValid = false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email field cannot be empty";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter valid email";
    isValid = false;
  }

  let contactPattern = /^[0-9]{10}$/;
  if (contact === "") {
    document.getElementById("contactError").textContent = "Phone Number cannot be empty";
    isValid = false;
  } else if (!contactPattern.test(contact)) {
    document.getElementById("contactError").textContent = "Enter valid 10-digit number";
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
    const userData = {
      firstname,
      lastname,
      studentClass,
      email,
      contact,
      dob,
      gender: gender.value,
      description
    };

    console.log("User Data:", userData);
    alert("Form submitted successfully! User data is in console.");
    form.reset();
  }
});