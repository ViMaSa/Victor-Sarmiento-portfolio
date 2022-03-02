let currentImgIndex = 0;
let numOfImages = $('.carousel-images').children().length - 1;

$('.next').on('click', () => {
  let $currImg = $('.carousel-images').children().eq(currentImgIndex);
  let $currCapt = $('.caption-container').children().eq(currentImgIndex)
  $currImg.css('display', 'none');
  $currCapt.css('display', 'none');

  if(currentImgIndex < numOfImages) {
    currentImgIndex++;
  }
  else {
    currentImgIndex = 0;
  }

  $currImg = $('.carousel-images').children().eq(currentImgIndex);
  $currImg.css('display', 'block');
  $currCapt = $('.caption-container').children().eq(currentImgIndex)
  $currCapt.css('display', 'block');
});

$('.previous').on('click', () => {
  let $currImg = $('.carousel-images').children().eq(currentImgIndex);
  $currImg.css('display', 'none');

  if(currentImgIndex >= 0) {
    currentImgIndex--;
  }
  else {
    currentImgIndex = numOfImages - 1;
  }

  $currImg = $('.carousel-images').children().eq(currentImgIndex);
  $currImg.css('display', 'block');
});