const NextSlide = _ =>{
  let Slidder = document.getElementById('MainSlider');
  let Radio1 = document.getElementById('Radio1');
  let Radio2 = document.getElementById('Radio2');
      Slidder.style.backgroundImage = "url('../images/RunnerModal.svg')";
      Radio2.style.backgroundColor = "#FAA500";
}

const PreviousSlide = _ =>{
  let Slidder = document.getElementById('MainSlider');
      let background1 = "url('../images/MainBanner.svg')";
      let background2 = "url('../images/BannerNewCollection.svg')";
      Slidder.style.backgroundImage = background1;
}