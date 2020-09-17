const MudaTexto = () =>{
   VerficaTempoMuda = () =>{
      setInterval(() => {
         let contador = 0;
         

         if(contador == 0){
            document.getElementById('animacao').innerHTML = '';
         }
         if(contador == 1){
            document.getElementById('animacao').innerHTML = '.'
         }
         else{
            contador = 0;
         }
         contador++
      }, 1000);
   }
}

window.onload = MudaTexto();