function proximosCampos() {
  // Variaveis dos inputs da primeira tela
  var razao_social = document.getElementById('input_razao_social')
  var nome_fantasia = document.getElementById('input_nome_fantasia')
  var cnpj = document.getElementById('input_cnpj')

  // Variaveis dos inputs da segunda tela
  var usuario = document.getElementById('input_usuario')
  var senha = document.getElementById('input_senha')
  var telefone = document.getElementById('input_telefone')

  // variaveis dos botões
  var continuar = document.getElementById('button_continuar')
  var logar = document.getElementById('button_logar')

  // variaveis do p´s
  var razao = document.getElementById('p_razao')
  var nome = document.getElementById('p_nome')
  var cnpj_p = document.getElementById('p_cnpj')
  var email = document.getElementById('p_email')
  var senha_p = document.getElementById('p_senha')
  var telefone_p = document.getElementById('p_telefone')

  // variaveis pegando valores dos inputs da primeira tela
  var campoRazao = razao_social.value
  var campoNome = nome_fantasia.value
  var campoCNPJ = cnpj.value

  // limpar mensagens de erro
   erro_razao.classList.add('hidden');
   erro_nome.classList.add('hidden');
   erro_cnpj.classList.add('hidden');

   var erro = false;

   if(campoRazao == "" || campoNome == '' || campoCNPJ == '') {

            div_erro.style.animation = 'surgir 0.5s ease-in-out forwards';
            container.style.opacity = '60%';
            input_razao_social.disabled = true;
            input_nome_fantasia.disabled = true;
            input_cnpj.disabled = true;
            button_continuar.disabled = true;
            erro = true;

   }
   
   
   //continua com o código que esconde a primeira tela e mostra a segunda

   if (erro){
   
    return false;
   }
    // ao entrar neste else some os inputs e botões da primeira tela e aparecem os inputs e botões da segunda tela
    razao_social.classList.add('hidden')
    nome_fantasia.classList.add('hidden')
    cnpj.classList.add('hidden')
    usuario.classList.remove('hidden')
    senha.classList.remove('hidden')
    telefone.classList.remove('hidden')

    razao.classList.add('hidden')
    nome.classList.add('hidden')
    cnpj_p.classList.add('hidden')
    email.classList.remove('hidden')
    senha_p.classList.remove('hidden')
    telefone_p.classList.remove('hidden')

    continuar.classList.add('hidden')
    logar.classList.remove('hidden')
  }


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

function cadastrar() {
  var usuario = document.getElementById('input_usuario').value;
  var senha = document.getElementById('input_senha').value;
  var telefone = document.getElementById('input_telefone').value;
  var razao_social = document.getElementById('input_razao_social').value;
  var nome_fantasia = document.getElementById('input_nome_fantasia').value;
  var cnpj = document.getElementById('input_cnpj').value;

  var erro_usuario = document.getElementById('erro_usuario');
  var erro_senha = document.getElementById('erro_senha');
  var erro_telefone = document.getElementById('erro_telefone');

  var erro = false;

  //Limpa mensagens anteriores
  erro_usuario.innerHTML = "";
  erro_senha.innerHTML = "";
  erro_telefone.innerHTML = "";

  erro_usuario.classList.add('hidden');
  erro_senha.classList.add('hidden');
  erro_telefone.classList.add('hidden');


  //Verifica se os campos estão vazios

  if(usuario == "" || senha == "" || telefone == '') {

          div_erro.style.animation = 'surgir 0.5s ease-in-out forwards';
          container.style.opacity = '60%';
          span_erro.innerHTML = 'Preencha todos os campos!'
            span_tipo.innerHTML = 'Login Inválido!';
              btn_again.style.display = 'flex';
             img_erro.className = 'img_erro';
             input_usuario.disabled = true;
            input_senha.disabled = true;
            input_telefone.disabled = true;
            button_logar.disabled = true;
             span_tipo.style.fontSize = '25px';
          erro = true;

  }else if( !usuario.includes('@')){

    div_erro.style.animation = 'surgir 0.5s ease-in-out forwards';
          container.style.opacity = '60%';
             input_usuario.disabled = true;
             span_erro.innerHTML = 'Email deve conter @..';
              span_tipo.innerHTML = 'Login Inválido!';
            input_senha.disabled = true;
            input_telefone.disabled = true;
             span_tipo.style.fontSize = '25px';
            btn_again.style.display = 'flex';
             img_erro.className = 'img_erro';
            button_logar.disabled = true;
          erro = true;

  }


  // Impede o envio do formulário se houver erro

    if (erro) {

      return false;
    }

    
  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          cnpjServer: cnpj,
          razaoSocial: razao_social,
          nomeFantasia: nome_fantasia,
          email: usuario,
          senhaServer: senha,
          telefoneServer: telefone
      }),
  })
      .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {

              div_erro.style.animation = 'surgir 0.5s ease-in-out forwards';
             container.style.opacity = '60%';
             span_tipo.innerHTML = 'Cadastro Realizado com Sucesso!';
             span_tipo.style.fontSize = '18px';
             span_erro.innerHTML = 'Você será redirecionado para o login';
             btn_again.style.display = 'none';
             img_erro.className = 'img_acerto';


              setTimeout(() => {
                  window.location = "login.html";
              }, "5000");

              limparFormulario();
              finalizarAguardar();
          } else {

              throw new Error ("Erro no cadastro!");

          }
      })
      .catch(function (erro) {
          console.error(`#ERRO: ${erro}`);
          exibirMensagem("Erro ao realizar o cadastro. Tente novamente.", "erro")
          finalizarAguardar();
      });

  return false;
}

