 const RecuperaPosicao = _ =>{
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition, ErrorTakePosition);
          }
      else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
      }

      const ErrorTakePosition = error =>{
          if(error.PERMISSION_DENIED){
            console.log('Recusou!');

            document.getElementById('LOADING').style.display = 'none';
            document.getElementById('AllowDIV').style.display = 'block';

          }
      }
   const showPosition  = async (position) =>{
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          
         axios({
              url:
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`       
            },document.getElementById('LOADING').style.display = 'flex')
            .then((response)  => {
                let state = response.data.address.state;
                let city;
                
                if(response.data.address.town == undefined){
                    city = response.data.address.city;   
                }
                else{
                    city = response.data.address.town;
                }
                
                let street = response.data.address.road;
                let Country = response.data.address.country;
                let Municipality = response.data.address.municipality;
                let region = response.data.address.region;

                //Debugs
                console.log('Ok')
                console.log(state, city, street, Country, Municipality, region);
                console.log(response);
                
                let StateSymbol = null;
                switch (state) {
                    case 'Acre':
                        StateSymbol = 'AC';
                    break;

                    case 'Alagoas':
                        StateSymbol = 'AL';
                    break;

                    case 'Amapá':
                        StateSymbol = 'AP';
                    break;

                    case 'Amazonas':
                        StateSymbol = 'AM';
                    break;

                    case 'Bahia':
                        StateSymbol = 'BA';
                    break;

                    case 'Ceará':
                        StateSymbol = 'CE';
                    break;

                    case 'Distrito Federal':
                        StateSymbol = 'DF';
                    break;

                    case 'Espírito Santo':
                        StateSymbol = 'ES';
                    break;

                    case 'Goiás':
                        StateSymbol = 'GO';
                    break;

                    case 'Maranhão':
                        StateSymbol = 'MA';
                    break;

                    case 'Mato Grosso':
                        StateSymbol = 'MT';
                    break;

                    case 'Mato Grosso do Sul':
                        StateSymbol = 'MS';
                    break;

                    case 'Minas Gerais':
                        StateSymbol = 'MG';
                    break;

                    case 'Pará':
                        StateSymbol = 'PA';
                    break;

                    case 'Paraíba':
                        StateSymbol = 'PB';
                    break;

                    case 'Paraná':
                        StateSymbol = 'PR';
                    break;

                    case 'Pernambuco':
                        StateSymbol = 'PE';
                    break;

                    case 'Piauí':
                        StateSymbol = 'PI';
                    break;

                    case 'Rio de Janiero':
                        StateSymbol = 'RJ';
                    break;

                    case 'Rio Grande do Norte':
                        StateSymbol = 'RN';
                    break;

                    case 'Rio Grande do Sul':
                        StateSymbol = 'RS';
                    break;

                    case 'Rondônia':
                        StateSymbol = 'RO';
                    break;

                    case 'Roraima':
                        StateSymbol = 'RR';
                    break;

                    case 'Santa Catarina':
                        StateSymbol = 'SC';
                    break;

                    case 'São Paulo':
                        StateSymbol = 'SP';
                    break;

                    case 'Sergipe':
                        StateSymbol = 'SE';
                    break;

                    case 'Tocantins':
                        StateSymbol = 'TO';
                    break;
                    default:
                        console.log('Erro')
                        break;
                }
            
                 axios({
                        url: `https://viacep.com.br/ws/${StateSymbol}/${city}/${street}/json`,})
                    .then((response) =>{
                        console.log(response);

                        let DD = response.data[0].ddd;
                        let cep = response.data[0].cep;


                        let LOADINGIF = document.getElementById('LOADING');

                        let CEPTAG = document.getElementById('CEP');
                        let STREETAG = document.getElementById('STREET');
                        let CITYTAG = document.getElementById('CITY');
                        let COUNTRYTAG = document.getElementById('Country');
                        let REGIONTAG = document.getElementById('Region');
                        let COUNTRYREGIONTAG = document.getElementById('CountryRegion');
                        let DDTAG = document.getElementById('DD');

                        let ButtonsCopy = document.querySelectorAll('.CopyButton');
                        



                        for(let i = 0; i < ButtonsCopy.length; i++){
                            LOADINGIF.style.display = 'none';
                            ButtonsCopy[i].style.display = 'block';
    
                            CEPTAG.innerHTML = `O seu CEP é: ${cep}.`;
                            STREETAG.innerHTML = `Rua: ${street}.`;
                            CITYTAG.innerHTML = `Cidade: ${city}.`;
                            COUNTRYTAG.innerHTML = `País: ${Country}.`;
                            REGIONTAG.innerHTML = `Região: ${region}.`;
                            COUNTRYREGIONTAG.innerHTML = `Região do País: ${Municipality}`;
                            DDTAG.innerHTML = `O seu DD é: (${DD}).`;
                        }


                    })
                    
                    
                })
                
  }