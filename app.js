(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

// // Collect the form data.
// var name = document.querySelector("input[name='name']").value;
// var email = document.querySelector("input[name='email']").value;
// var subject = document.querySelector("input[name='subject']").value;
// var message = document.querySelector("textarea[name='message']").value;

// // Send the form data to a server.
// var xhr = new XMLHttpRequest();
// xhr.open("POST", "/contact");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.send(
//   JSON.stringify({
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//   })
// );

// // Process the form data on the server.
// // xhr.onload = function () {
// //   if (xhr.status === 200) {
// //     // The form data was successfully submitted.
// //     alert("Thank you for your message! I will get back to you soon.");
// //   } else {
// //     // An error occurred.
// //     alert("There was an error submitting your message. Please try again.");
// //   }
// // };

// // Process the form data on the server.
// xhr.onload = function () {
//   // The form data was not successfully submitted.
//   console.log("The form data was not successfully submitted.");
// };
