const RecuperaPosicao = _ =>{
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition, ErrorTakePosition);
          }
      else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
      }

      const ErrorTakePosition = error =>{
          if(error.PERMISSION_DENIED){
            console.log('Recusou!');
          }
      }
      const showPosition = position =>{
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          
          axios({
              url:
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
              ,
              method:'get',
              data:{
                  format: 'json',
                  lat:latitude,
                  lon:longitude,
                  addressdetails:1,
                  'accept-language':'pt-BR'
                }        
            },
            document.getElementById('LOADING').style.display = 'flex'
            )
            .then((response) => {
                let state = response.data.address.state;
                let city = null;
                
                if(response.data.address.town == undefined){
                    city = response.data.address.city;   
                }
                else{
                    city = response.data.address.town;
                }
                
                let street = response.data.address.road;
                let StateSymbol = null;
                console.log('Ok')
                console.log(state, city, street);
                console.log(response);
                
                if(state == 'Acre'){
                    StateSymbol = 'AC';
                }if(state == 'Alagoas'){
                        StateSymbol = 'AL';
                    }if(state == 'Amapá' || state == 'Amapa'){
                        StateSymbol = 'AP';
                    }if(state == 'Amazonas'){
                        StateSymbol = 'AM';
                    }if(state == 'Bahia'){
                        StateSymbol = 'BA';
                    }if(state == 'Ceará' || 'Ceara'){
                        StateSymbol = 'CE';
                    }if(state == 'Distrito Federal'){
                        StateSymbol = 'DF';
                    }if(state == 'Espirito Santo' || 'Espírito Santo'){
                        StateSymbol = 'ES';
                    }if(state == 'Goias' || state == 'Goiás'){
                        StateSymbol = 'GO';
                    }if(state == 'Maranhão' ||  'Maranhao'){
                        StateSymbol = 'MA';
                    }if(state == 'Mato Grosso'){
                        StateSymbol = 'MT';
                    }if(state == 'Mato Grosso do Sul' || 'Mato Grosso Do Sul'){
                        StateSymbol = 'MS';
                    }if(state == 'Minas Gerais'){
                        StateSymbol = 'MG';
                    }if(state == 'Para' || state == 'Pará'){
                        StateSymbol = 'PA';
                    }if(state == 'Paraiba' || state == 'Paraíba'){
                        StateSymbol = 'PB';
                    }if(state == 'Paraná' || state == 'Parana'){
                        StateSymbol = 'PR';
                    }if(state == 'Pernambuco'){
                        StateSymbol = 'PE';
                    }if(state == 'Piaui' || state == 'Piauí'){
                        StateSymbol = 'PI';
                    }if(state == 'Rio de Janeiro'){
                        StateSymbol == 'RJ';
                    }if(state == 'Rio Grande do Norte'){
                        StateSymbol = 'RN';
                    }if(state == 'Rio Grande do Sul'){
                        StateSymbol = 'RS';
                    }if(state == 'Rondônia' || state == 'Rondonia'){
                        StateSymbol = 'RO';
                    }if(state == 'Roraima'){
                        StateSymbol = 'RR';
                    }if(state == 'Santa Catarina'){
                        StateSymbol = 'SC';
                    }if(state == 'São Paulo' || state == 'Sao Paulo'){
                        StateSymbol = 'SP';
                    }if(state == 'Sergipe'){
                        StateSymbol = 'SE';
                    }if(state == 'Tocantins'){
                        StateSymbol = 'TO';
                    }else{
                        console.log('Localização não encontrada!');
                    }
                    
                    axios({
                        url: `https://viacep.com.br/ws/${StateSymbol}/${city}/${street}/json`,
                        method: 'get',
                    })
                    .then((response) =>{
                        console.log(response);
                        let cep = response.data[0].cep;
                        console.log(cep);

                        let CEPTAG = document.getElementById('CEP');
                        let STREETAG = document.getElementById('STREET');
                        let CITYTAG = document.getElementById('CITY');
                        let ButtonsCopy = document.querySelectorAll('.CopyButton');
                        let LOADINGIF = document.getElementById('LOADING');

                        for(let i = 0; i < ButtonsCopy.length; i++){
                            LOADINGIF.style.display = 'none';
                            ButtonsCopy[i].style.display = 'block';
    
                            CEPTAG.innerHTML = cep;
                            STREETAG.innerHTML = street;
                            CITYTAG.innerHTML = city;
                        }


                    })
                    
                    
                })
                
  }