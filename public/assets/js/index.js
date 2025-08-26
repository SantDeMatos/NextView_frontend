function enviar(){

    var nome = input_cont_1.value;
    var email = input_cont_2.value;
    var telefone = input_cont_3.value;
    var mensagem = input_cont_4.value;



    telefone = telefone.replaceAll(" ", "");
    telefone = telefone.replaceAll("-", "");

    if( nome != '' && email.includes('@') && telefone.length == 11 && mensagem != ''){
  
            alert('Mensagem enviada com sucesso! Logo entraremos em contato!');

        input_cont_1.value = '';
        input_cont_2.value = '';
        input_cont_3.value = '';
        input_cont_4.value = '';

    }else{

        alert('Insira todos os dados de forma válida!');

    }

}

    function limpar(){

        input_cont_1.value = '';
        input_cont_2.value = '';
        input_cont_3.value = '';
        input_cont_4.value = '';


    }

 
    function simulador(){
        window.location = 'simulador.html'
    }

    function login(){
        window.location = `login.html`
    }

    function cadastro(){
        window.location = `cadastro.html`
    }

    function temadark(){

        // Mudança nos estilos e display para modo dark

        link_menu_1.className = 'dark_menu';
        link_menu_2.className = 'dark_menu';
        link_menu_3.className = 'dark_menu';
        link_menu_4.className = 'dark_menu';
        link_menu_5.className = 'dark_menu';
        btn_branco.style.display = "none";
        btn_preto.style.display = 'flex';
        div_triangulos.style.filter = 'brightness(20%)';
        body.style.backgroundColor = '#191919';
        menu.style.backgroundColor = '#191919';
        btn_log.className = 'dark_btn_login';
        span_seed.className = 'black_span_text';
        span_div.style.color = '#87502F';
        span_div_3.style.color = '#87502F';
        span_div_4.style.color = '#87502F';
        img_tri.style.filter = 'brightness(5.5%)';
        container_quem.style.backgroundColor = '#191919';
        span_text_titulo_quem.style.color = '#82E670';
        img_esq.style.filter = 'brightness(5.5%)';
        span_text_quem.style.backgroundColor = '#191919';
        span_text_quem.style.color = '#82E670';
        div_pessoa_quem.style.backgroundColor = '#333333';
        img_trian_quem.style.filter= 'brightness(5.5%)';
        div_text_projeto_1.style.color= '#82E670';
        container_proj.style.backgroundColor = '#0D0D0D';
        span_titulo_cultura.style.color='#82E670';
        span_card_1_tit.style.color = '#82E670';
        span_card_2_tit.style.color = '#82E670';
        span_card_3_tit.style.color = '#82E670';
        card_cult_1.style.backgroundColor = '#282828';
        card_cult_2.style.backgroundColor = '#282828';
        card_cult_3.style.backgroundColor = '#282828';
        span_text_cult_1.style.color  ='#82E670';
        span_text_cult_2.style.color  ='#82E670';
        span_text_cult_3.style.color  ='#82E670';
        img_conju_tri.style.filter = 'brightness(5.5%)';
        div_text_projeto_2.style.color = '#FFFFFF';

        div_contato_text.style.backgroundColor = '#0D0D0D';
        div_form_contato.style.backgroundColor = '#0D0D0D';
        span_form_cont_1.style.color ='#82E670';
        span_form_cont_3.style.color = '#82E670';
        span_form_1.style.color = '#82E670';
        span_form_2.style.color = '#82E670';
        span_form_3.style.color = '#82E670';
        span_form_4.style.color = '#82E670';
        span_form_4.style.backgroundColor = '#2E2E2E';
        span_form_4.style.border = 'solid 1px #191919';
        input_cont_1.style.backgroundColor = '#2E2E2E';
        input_cont_2.style.backgroundColor = '#2E2E2E';
        input_cont_3.style.backgroundColor = '#2E2E2E';
        input_cont_4.style.backgroundColor = '#2E2E2E';
        input_cont_1.style.color = 'white';
        input_cont_2.style.color = 'white';
        input_cont_3.style.color = 'white';
        input_cont_4.style.color = 'white';
        div_text_projeto_3.style.color = '#FFFFFF';
        div_card_2.style.backgroundColor = '#9A5A36';
       
       
       
       
        

    }

    function temawhite(){

        // Mudança nos estilos e display para modo white

        link_menu_1.className = 'a_menu';
        link_menu_2.className = 'a_menu';
        link_menu_3.className = 'a_menu';
        link_menu_4.className = 'a_menu';
        link_menu_5.className = 'a_menu';
        btn_branco.style.display = "flex";
        btn_preto.style.display = 'none';
        div_triangulos.style.filter = 'brightness(100%)';
        body.style.backgroundColor = 'white';
        menu.style.backgroundColor = '#F3F3F3';
        span_seed.className = 'span_text';
        btn_log.className = 'btn_login';
        span_div.style.color = 'black';
        span_div_3.style.color = 'black';
        span_div_4.style.color = 'black';
        img_tri.style.filter = 'brightness(100%)';
        div_text_projeto_1.style.color= 'black';
        container_proj.style.backgroundColor = '#F3F3F3';
        div_text_projeto_2.style.color = 'black';
        span_titulo_cultura.style.color='black';
        span_card_1_tit.style.color = '#858585';
        span_card_2_tit.style.color = '#858585';
        span_card_3_tit.style.color = '#858585';
        card_cult_1.style.backgroundColor = '#E4E4E4';
        card_cult_2.style.backgroundColor = '#E4E4E4';
        card_cult_3.style.backgroundColor = '#E4E4E4';
        span_text_cult_1.style.color  ='white';
        span_text_cult_2.style.color  ='white';
        span_text_cult_3.style.color  ='white';
        img_conju_tri.style.filter = 'brightness(100%)';
        container_quem.style.backgroundColor = 'white';
        span_text_titulo_quem.style.color = 'black';
        span_text_quem.style.backgroundColor = 'white';
        img_esq.style.filter = 'brightness(100%)';
        span_text_quem.style.color = 'black';
        div_pessoa_quem.style.backgroundColor = '#D9D9D9';
        img_trian_quem.style.filter= 'brightness(100%)';
        div_contato_text.style.backgroundColor = '#F3F3F3';
        div_form_contato.style.backgroundColor = '#F3F3F3';
        span_form_cont_1.style.color ='black';
        span_form_cont_3.style.color = 'black';
        span_form_1.style.color = 'black';
        span_form_2.style.color = 'black';
        span_form_3.style.color = 'black';
        span_form_4.style.color = 'black';
        span_form_4.style.backgroundColor = '#DEDEDE';
        span_form_4.style.border = 'solid 1px white';
        input_cont_1.style.backgroundColor = '#DEDEDE';
        input_cont_2.style.backgroundColor = '#DEDEDE';
        input_cont_3.style.backgroundColor = '#DEDEDE';
        input_cont_4.style.backgroundColor = '#DEDEDE';
        input_cont_1.style.color = 'black';
        input_cont_2.style.color = 'black';
        input_cont_3.style.color = 'black';
        input_cont_4.style.color = 'black';
        div_text_projeto_3.style.color = 'black';
        div_card_2.style.backgroundColor = '#2D2D2D';
       
      


    }