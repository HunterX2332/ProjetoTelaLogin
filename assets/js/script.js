document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botao foi clicado!')

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('Passou o mouse!')

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('Saiu o mouse!')

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email: email,
        password: password
    }

    /*
    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);
    */

    if(!json.email){
        console.error("O campo deve ser preenchido!");
    }else if(json.password){
        console.error("O campo deve ser preenchido!");
    }else{
        console.info("Dados validados com sucesso!");
    }
});