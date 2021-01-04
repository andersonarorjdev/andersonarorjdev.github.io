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
                  let state = response.data.address.state;
                  let city = null;

                    if(response.data.address.town == undefined){
                       city = response.data.address.city;
                    }
                    else{
                        city = response.data.address.town;
                    }

                  let street = response.data.address.road;
                      console.log(state, city, street);
                      console.log(response);
                     switch (state) {
  
                          case 'Acre':
                              axios({
                                  url: `https://viacep.com.br/ws/AC/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                          case 'Alagoas':
                              axios({
                                  url: `https://viacep.com.br/ws/AL/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                          case 'Amapá' || 'Amapa':
                              axios({
                                  url: `https://viacep.com.br/ws/AP/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                          case 'Amazonas':
                              axios({
                                  url: `https://viacep.com.br/ws/AM/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Bahia':
                              axios({
                                  url: `https://viacep.com.br/ws/BA/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Ceará' || 'Ceara':
                              axios({
                                  url: `https://viacep.com.br/ws/CE/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Espirito Santo' || 'Espírito Santo':
                              axios({
                                  url: `https://viacep.com.br/ws/ES/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Goiás' || 'Goias':
                              axios({
                                  url: `https://viacep.com.br/ws/GO/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                          case 'Maranhão' || 'Maranhao':
                              axios({
                                  url: `https://viacep.com.br/ws/MA/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Mato Grosso':
                              axios({
                                  url: `https://viacep.com.br/ws/MT/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Mato Grosso do Sul' || 'Mato Grosso Do Sul':
                              axios({
                                  url: `https://viacep.com.br/ws/MS/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Minas Gerais':
                              axios({
                                  url: `https://viacep.com.br/ws/MG/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Pará' || 'Para':
                              axios({
                                  url: `https://viacep.com.br/ws/PA/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Paraiba' || 'Paraíba':
                              axios({
                                  url: `https://viacep.com.br/ws/PB/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                           case 'Paraná' || 'Parana':
                              axios({
                                  url: `https://viacep.com.br/ws/PR/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                          case 'Pernambuco':
                              axios({
                                  url: `https://viacep.com.br/ws/PE/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                              break;
  
                          case 'Piauí' || 'Piaui':
                              axios({
                                  url: `https://viacep.com.br/ws/PI/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                          case 'Rio de Janeiro':
                              axios({
                                  url: `https://viacep.com.br/ws/RJ/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                          case 'Rio Grande do Norte' || 'Rio grande do norte':
                              axios({
                                  url: `https://viacep.com.br/ws/RN/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
                          
                          case 'Rio Grande do Sul' || 'Rio Grande Do Sul':
                              axios({
                                  url: `https://viacep.com.br/ws/RS/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                          case 'Rondônia' || 'Rondonia':
                              axios({
                                  url: `https://viacep.com.br/ws/RO/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                          case 'Roraima':
                              axios({
                                  url: `https://viacep.com.br/ws/RR/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                         case 'Santa Catarina':
                              axios({
                                  url: `https://viacep.com.br/ws/SC/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                  })
                             break;
  
                          case 'São Paulo' || 'Sao Paulo':
                              axios({
                                  url: `https://viacep.com.br/ws/SP/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                          case 'Sergipe':
                              axios({
                                  url: `https://viacep.com.br/ws/SE/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;                                    })
                              break;
  
                          case 'Tocantins':
                              axios({
                                  url: `https://viacep.com.br/ws/TO/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break;
  
                          case 'Distrito Federal':
                              axios({
                                  url: `https://viacep.com.br/ws/DF/${city}/${street}/json`,
                                  method: 'get',
                                  })
                                  .then((response) =>{
                                      console.log(response);
                                      let cep = response.data[0].cep;
                                      console.log(cep);
                                      x.innerHTML = `Seu CEP é : ${cep}, cidade: ${city}, estado: ${state}`;
                                      })
                              break
                     
                          default:
                              console.log('Localização não encontrada!');
                             break;
                     }
                  
              })
  
  }