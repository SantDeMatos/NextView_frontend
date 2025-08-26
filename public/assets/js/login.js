function modoDark() {

    body.style.backgroundColor = '#191919';
    seed.style.color = '#FFFFFF'
    inovacao.style.color = '#FFFFFF'
    sol.style.display = 'none'
    lua.style.display = 'flex'

}

function modoWhite() {
    body.style.backgroundColor = '#FFFFFF';
    lua.style.display = 'none'
    sol.style.display = 'flex'
    seed.style.color = '#6D3718'
    inovacao.style.color = '#000000'

}


function autenticar() {

    var emailVar = document.getElementById('input_usuario');
    var senhaVar = document.getElementById('input_senha');


    console.log("Senha:", senhaVar.value);

    if(senhaVar.value == '' || emailVar == ''){

        span_erro.innerHTML = `Preencha todos os campos!`;
    }else{

        span_erro.innerHTML = `Email ou senha incorretos!`;

    }

   

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar.value,
            senhaServer: senhaVar.value
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                localStorage.setItem("idEmpresa", json.id);
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                
            if(emailVar.value == 'seedtech@suporte.com' && senhaVar.value == 'suporte474@'){

                         window.location = "suporte.html";

                }else{

                     window.location = "dashboard.html"
               

                }
            
            });

            window.location = "dashboard.html"


        } else {

            console.log("Houve um erro ao tentar realizar o login!");

             div_erro.style.animation = 'surgir 0.5s ease-in-out forwards';
             container_cont.style.opacity = '60%';
             input_usuario.disabled = true;
             input_senha.disabled = true;
             btn_login.disabled = true;
            
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}