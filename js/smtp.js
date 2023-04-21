
function sendEmail() {
  Email.send({
    SecureToken: "806ed3d2-7aca-4a3e-a1b1-523a4d51e7c0",
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


