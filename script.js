document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let firstname = document.getElementById("firstname").value.trim();
  // let middlename = document.getElementById("middlename").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let email = document.getElementById("email").value.trim();
  let contact = document.getElementById("contact").value.trim();
  // let age = document.getElementById("age").value.trim();
  let description = document.getElementById("description").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');

   const studentClass = document.getElementById("class").value;
  const dob = document.getElementById("dob").value;


  const classError = document.getElementById("classError");
  const dobError = document.getElementById("dobError");
  classError.textContent = "";
  dobError.textContent = "";

  let isValid = true;

   if (studentClass === "") {
    classError.textContent = "Please select your class.";
    isValid = false;
  }

 
  if (dob === "") {
    dobError.textContent = "Please select your Date of Birth.";
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
   if(email===""){
    document.getElementById("emailError").textContent="Email field cannot be empty"
    isValid=false;
   }else if(!emailPattern.test(email)){
     document.getElementById("emailError").textContent = "Enter valid email";
    isValid = false;
   }



  
 
  let contactPattern = /^[0-9]{10}$/;
  if(contact===""){
    document.getElementById("contactError").textContent="Phone Number cannot be empty"
    isValid=false
  }else if(!contactPattern.test(contact)){
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
    document.getElementById("userForm").reset();
  }

});