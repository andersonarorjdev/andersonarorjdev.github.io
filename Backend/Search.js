const pesquisa = _ =>{
    let cep = document.getElementById('InputSearcher').value;
        axios.get(`https://viacep.com.br/ws/${cep}/json/unicode`)
            .then((response) => {
                /*Campos que vai ter na busca:
                    -bairro
                    -cep
                    -complemento
                    -ddd
                    -ibge
                    -localidade
                    -logradouro
                    -siafi
                    -uf
                */

                console.log(response.data);
                
                let cidade = response.data.localidade;
                document.getElementById('city').innerText = cidade;


                })
            .catch((error) =>{
                console.log(error)
                })
}
