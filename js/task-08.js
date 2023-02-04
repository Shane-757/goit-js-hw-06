

let loginInfo = [];

const addInfo = (event) => {
    if (document.getElementsByName('email')[0].value === "" || document.getElementsByName('password')[0].value === "") {
    alert ("all fields must be filed");
} else{

    event.preventDefault();

    let emailInput = {

        email: document.getElementsByName('email')[0].value,
        password: document.getElementsByName('password')[0].value  

    }

    loginInfo.push(emailInput);
    document.querySelector('form').reset();
    console.log(loginInfo);
}}

    document.querySelector('button').addEventListener('click', addInfo);

