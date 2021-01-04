// const pesquisa = _ =>{
//     let cep = document.getElementById('cep').value;
//         axios.get(`https://viacep.com.br/ws/${cep}/json/unicode`)
//             .then((response) => {
//                 /*Campos que vai ter na busca:
//                     -bairro
//                     -cep
//                     -complemento
//                     -ddd
//                     -ibge
//                     -localidade
//                     -logradouro
//                     -siafi
//                     -uf
//                 */

//                 console.log(response.data);
                
//                 let cidade = response.data.localidade;
//                 document.getElementById('city').innerText = cidade;


//                 })
//             .catch((error) =>{
//                 console.log(error)
//                 })
// }



const RecuperaPosicao = _ =>{
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
        }
    else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
    }
    const showPosition = position =>{
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        axios({
            url:`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            method:'get',
            data:{
                format: 'json',
                lat:latitude,
                lon:longitude,
                addressdetails:1,
                'accept-language':'pt-BR'
                }        
            })
            .then((response) => {
                let cep = response.data.address.postcode;
                if(cep === undefined){
                    console.log('Não foi possivel recuperar sua localização')
                    x.innerHTML = "Não foi possível recuperar sua localização, contate o desenvolvedor :)!";
                }
                else{
                    console.log(cep);
                    x.innerHTML = cep;
                }
            })

        
//   x.innerHTML="Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude; 
}