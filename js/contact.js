const submitBtn = document.getElementById("submit");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const mail = document.getElementById("email");
const msg = document.getElementById("message");


const checkBtn = () => {
    submitBtn.disabled = !(
        name.value && 
        phone.value && 
        mail.value &&
        msg.value
     )
}


name.addEventListener("keyup", checkBtn )
phone.addEventListener("keyup", checkBtn )
mail.addEventListener("keyup", checkBtn )
msg.addEventListener("keyup", checkBtn )
