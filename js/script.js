$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


document.getElementById('fileInput').onchange = function () {

  //short name
  document.getElementById('file-name').innerHTML = this.files[0].name;

  //long name
  // document.getElementById('file-name').innerHTML = this.value;
};