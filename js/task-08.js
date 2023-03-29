

let loginInfo = [];


document.addEventListener('keypress', function (event) {
    let key = event.keyCode;
    if (key === 32) {
        event.preventDefault();
    }
});


const addInfo = (event) => { 
    if (document.getElementsByName('email')[0].value === "" || document.getElementsByName('password')[0].value === "")
    {
     return alert ("all fields must be filed without spaces");
} 

    event.preventDefault();

    let emailInput = {

        email: document.getElementsByName('email')[0].value,
        password: document.getElementsByName('password')[0].value  
    }

        
        
    loginInfo.push(emailInput);
    document.querySelector('form').reset();
    console.log(loginInfo);
}

    document.querySelector('button').addEventListener('click', addInfo);

