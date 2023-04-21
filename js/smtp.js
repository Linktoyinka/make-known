Email.send({
  SecureToken : "5b007ee8-5810-42e3-b17f-cd0945fccc02",
  To : 'afolabi2401@gmail.com',
  From : document.getElementById("email").value,
  Subject : "MakeKnown New Contact Form Enquiry",
  Body : "Name: " +
  document.getElementById("name").value +
  "<br> Email: " +
  document.getElementById("email").value +
  "<br> Phone Number: " +
  document.getElementById("phone").value +
  "<br> Company: " +
  document.getElementById("company").value +
  "<br> Message: " +
  document.getElementById("message").value
}).then(
message => alert(message)
);