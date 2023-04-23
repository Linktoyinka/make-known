
// function sendEmail() {
//   Email.send({
//     SecureToken: "806ed3d2-7aca-4a3e-a1b1-523a4d51e7c0",
//     To: "afolabi2401@gmail.com",
//     From: "linktoyinka@gmail.com",
//     Subject: "MakeKnown New Contact Form Enquiry",
//     Body: 
//     "Name: " +
//     document.getElementById("name").value +
//     "<br> Email: " +
//     document.getElementById("email").value +
//     "<br> Message: " +
//     document.getElementById("message").value + "<br> Phone: " + document.getElementById("phone").value
//   }).then((message) => alert(message));
// }



// const form = document.getElementById('myForm');
const modal = document.getElementById("myModal1");
const btn = document.getElementById("modal1");
const span = document.getElementsByClassName("close-1")[0];
const body = document.getElementById("body");

function sendEmail() {
  Email.send({
    SecureToken: "9e9950cf-77a3-4e50-afc6-8eb948f35a7f",
    To: "enquiries@makeknown.ca",
    From: "makeknownca@gmail.com",
    Subject: "MakeKnown New Contact Form Enquiry",
    Body: 
    "Name: " +
    document.getElementById("name").value +
    "<br> Email: " +
    document.getElementById("email").value +
    "<br> Message: " +
    document.getElementById("message").value + "<br> Phone: " + document.getElementById("phone").value
  }).then((popUp));

  


}

function popUp() {
  // btn.onclick = function() {
    modal.style.display = "block";
    body.classList.add('popup-active')

    
}

span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove('popup-active')
}





