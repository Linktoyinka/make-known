const submitBtn = document.getElementById("submit");
const formText = document.querySelector(".box");

formText.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submitBtn.disabled = false;

    if (value === "") {
        submitBtn.disabled = true;
    }
});
