let formulario = document.getElementById("post_info-form");
let new_name = document.getElementById("name");
let new_email = document.getElementById("email");
let new_phone = document.getElementById("phone");
let new_body = document.getElementById("field");

const submitAndPostForm = (event) => {
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
            name: new_name.value,
            email: new_email.value,
            phone: new_phone.value,
            body: new_body.value
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
    return true;

}

const validationForm = () => {
    let formInputs = document.forms[`post_info-form`];
    let nameInput = formInputs.name.value;
    checkIsEmpty([new_name, new_email, new_phone, new_body]);
    if (nameInput == "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack.")
        new_name.style.boxShadow = '0 0 5px var(--error)';
        return false;
    } else if (checkIsEmpty([new_name, new_email, new_phone, new_body]) == false) {
        return false
    } else {

        return true;
    }
}

//check if there is empty fields
function checkIsEmpty(inputArr) {
    let boolean;
    inputArr.forEach(function (input) {
        if (input.value.trim() == '') {
            input.style.boxShadow = '0 0 5px var(--error)';
            return boolean = false;
        } else {
            input.style.boxShadow = '0 0 5px var(--gray1)';
            return boolean == true;
        }
    });
    if (boolean == false) {
        return false
    } else {
        return true
    }
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validationForm() && checkIsEmpty([new_name, new_email, new_phone, new_body])) {
        submitAndPostForm();
        formulario.reset();
    }

});

