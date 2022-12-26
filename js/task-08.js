const form = document.querySelector(".login-form");
form.addEventListener(`submit`, formSubmit);
function formSubmit(event) {
    event.preventDefault();
    const formInput = event.currentTarget.elements;
    const mail = formInput.email.value;
    const password = formInput.password.value;
    const result = {
        mail,
        password,
    };
    if (mail && password !== ``) {
        console.log(result);
        form.reset();     
    } else {
        alert(`Fill in all fields of the form`);
    };
};
