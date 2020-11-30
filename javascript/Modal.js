const LaunchModal =  setTimeout( () => {
  let ModalGreat = document.getElementById('Modal');
  let ModalSmall = document.getElementById('SmallModal');
  let WindowSize = window.innerWidth;
    if(WindowSize < 1000){
      ModalSmall.style.display = "flex";
    }
    else{
      ModalGreat.style.display = "flex";
    }
}, 2000);


const CloseModal = _ =>{
  let Modal = document.getElementById('Modal');
      Modal.style.display = "none";
}