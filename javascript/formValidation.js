const validationForm = (event) => {
    let formInputs = document.forms[`post_info-form`];
    let nameInput = formInputs.name.value;
    if (nameInput == "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack.")
        event.preventDefault();
        return false;
    }
    let new_name = document.getElementById("name").value;
    let new_email = document.getElementById("email").value;
    let new_phone = document.getElementById("phone").value;
    let new_body = document.getElementById("field").value;

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
            name: new_name,
            email: new_email,
            phone: new_phone,
            body: new_body
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.json);
        })
        .catch((err) => { console.error(err); });
    let formulario = document.getElementById("post_info-form");
    formulario.reset();
    event.preventDefault();
    return true;
}

document.getElementById("post_info-form").addEventListener("submit", validationForm);


