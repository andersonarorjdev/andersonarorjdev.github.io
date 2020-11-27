const NextSlide = _ =>{
  let Slidder = document.getElementById('MainSlider');
      Slidder.style.backgroundImage = "url('../images/RunnerModal.svg')";
}

const PreviousSlide = _ =>{
  let Slidder = document.getElementById('MainSlider');
      let background1 = "url('../images/MainBanner.svg')";
      let background2 = "url('../images/BannerNewCollection.svg')";
      Slidder.style.backgroundImage = background1;
}