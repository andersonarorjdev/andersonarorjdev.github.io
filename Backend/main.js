 getDadosEnderecoPorCep = cep => {
    let url = 'https://viacep.com.br/ws/'+cep+'/json/unicode/';


    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            let status =  xmlHttp.responseText;
            let DadosJson = JSON.parse(status);
            console.log(DadosJson);
            //Para acessar cada dado de forma separada preciso acessa a variavel DadosJson.

            document.getElementById('Endereco').value = DadosJson.logradouro;
            document.getElementById('Bairro').value = DadosJson.bairro;
            document.getElementById('Cidade').value = DadosJson.localidade;
            document.getElementById('UF').value = DadosJson.uf;
            document.getElementById('Complemento').value = DadosJson.complemento;
            document.getElementById('DD').value = DadosJson.ddd;
        }
        
        // Se for encontrado resultado para os respectivos campos, ele vai formatar de acordo com a resposta.
        //Endereço
        if(document.getElementById('Endereco').value === undefined || document.getElementById('Endereco').value === ''){
             document.getElementById('Endereco').value = 'Não encontrado!';
             document.getElementById('Endereco').style.border = '3px solid red';
        }
        else{
            document.getElementById('Endereco').style.border = '3px solid green';
        }


        //Bairro
        if(document.getElementById('Bairro').value === undefined || document.getElementById('Bairro').value === ''){
            document.getElementById('Bairro').value = 'Não encontrado!';
            document.getElementById('Bairro').style.border = '3px solid red';
       }
       else{
            document.getElementById('Bairro').style.border = '3px solid green';
       }


       //Cidade
       if(document.getElementById('Cidade').value === undefined || document.getElementById('Cidade').value === ''){
             document.getElementById('Cidade').value = 'Não encontrado!';
             document.getElementById('Cidade').style.border = '3px solid red';
        }
        else{
                document.getElementById('Cidade').style.border = '3px solid green';
        }


        //UF
        if(document.getElementById('UF').value === undefined || document.getElementById('UF').value === ''){
            document.getElementById('UF').value = 'Não encontrado!';
            document.getElementById('UF').style.border = '3px solid red';
       }
       else{
            document.getElementById('UF').style.border = '3px solid green';
       }


       //Complemento
       if(document.getElementById('Complemento').value === undefined || document.getElementById('Complemento').value === ''){
            document.getElementById('Complemento').value = 'Não encontrado!';
            document.getElementById('Complemento').style.border = '3px solid red';
        }
        else{
                document.getElementById('Complemento').style.border = '3px solid green';
        }

   //DD
        if(document.getElementById('DD').value === undefined || document.getElementById('DD').value === ''){
            document.getElementById('DD').value = 'Não encontrado!';
            document.getElementById('DD').style.border = '3px solid red';
        }
        else{
            document.getElementById('DD').style.border = '3px solid green';
        }

    }
    xmlHttp.send();
}

LimpaCampos = () =>{
    document.getElementById('Pesquisa').value = '';
    document.getElementById('Endereco').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('Complemento').value = '';
    document.getElementById('DD').value = '';

    //limpar os campos que estão com bordas

    //Endereco
    if(document.getElementById('Endereco').style.border = '3px solid red'){
        document.getElementById('Endereco').style.border = 'none';
    }

    //Bairro
    if(document.getElementById('Bairro').style.border = '3px solid red'){
        document.getElementById('Bairro').style.border = 'none';
    }

    //Cidade
    if(document.getElementById('Cidade').style.border = '3px solid red'){
        document.getElementById('Cidade').style.border = 'none';
    }

    //UF
    if(document.getElementById('UF').style.border = '3px solid red'){
        document.getElementById('UF').style.border = 'none';
    }

    //Complemento
    if(document.getElementById('Complemento').style.border = '3px solid red'){
        document.getElementById('Complemento').style.border = 'none';
    }

    //DD
    if(document.getElementById('DD').style.border = '3px solid red'){
        document.getElementById('DD').style.border = 'none';
    }
}

RecuperaEndereco = () =>{
    const campo = document.getElementById('Endereco');
    campo.select();
    document.execCommand('copy');
}

RecuperaBairro = () =>{
    const campo = document.getElementById('Bairro');
    campo.select();
    document.execCommand('copy');
}

RecuperaCidade = () =>{
    const campo = document.getElementById('Cidade');
    campo.select();
    document.execCommand('copy');
}

RecuperaUf = () =>{
    const campo = document.getElementById('UF');
    campo.select();
    document.execCommand('copy');
}

RecuperaComplemento = () =>{
    const campo = document.getElementById('Complemento');
    campo.select();
    document.execCommand('copy');
}

RecuperaDD = () =>{
    const campo = document.getElementById('DD');
    campo.select();
    document.execCommand('copy');
}


Teste = () =>{
    alert('Ta funcionando')
}

Contato = endereco =>{
    window.location.href = endereco;
}
