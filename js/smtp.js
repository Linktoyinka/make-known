// function sendEmail() {

// Email.send({
//     SecureToken: "5b007ee8-5810-42e3-b17f-cd0945fccc02",
//     To: "afolabi2401@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "MakeKnown New Contact Form Enquiry",
//     Body:
//       "Name: " +
//       document.getElementById("name").value +
//       "<br> Email: " +
//       document.getElementById("email").value +
//       "<br> Phone Number: " +
//       document.getElementById("phone").value +
//       "<br> Company: " +
//       document.getElementById("company").value +
//       "<br> Message: " +
//       document.getElementById("message").value,
//   }).then((message) => alert(message));
// }

function sendEmail() {
  Email.send({
    SecureToken: "806ed3d2-7aca-4a3e-a1b1-523a4d51e7c0",
    // Username: "linktoyinka@gmail.com",
    // Password: "5CAA65F24CE36E2FDA9A865CF85D40DAAE9C",
    To: "afolabi2401@gmail.com",
    From: "linktoyinka@gmail.com",
    Subject: "MakeKnown New Contact Form Enquiry",
    Body: 
    "Name: " +
    document.getElementById("name").value +
    "<br> Email: " +
    document.getElementById("email").value +
    "<br> Message: " +
    document.getElementById("message").value + "<br> Phone: " + document.getElementById("phone").value
  }).then((message) => alert(message));
}


