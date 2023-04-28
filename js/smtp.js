// smtpJS set up for contact form
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


// pop-up function for sucessful form submission
function popUp() {
    modal.style.display = "block";
    body.classList.add('popup-active')    
}

// cancle button on pop-up
span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove('popup-active')
}





