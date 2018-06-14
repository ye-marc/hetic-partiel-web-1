var burger = document.querySelector('.burger');
var burgerTop = document.querySelector('.bar-top');
var burgerBot = document.querySelector('.bar-bot');
var menu = document.querySelector('.container-menu');
var menuContent = document.querySelector('.container-menu-txt');
var counter = 0;




burger.addEventListener('click', function() {
  if (counter == 0) {

  burgerTop.style.transform = "rotate(-45deg)";
  burgerTop.style.marginTop = "17px";
  burgerBot.style.transform = "rotate(45deg)";
  burgerBot.style.marginTop = "-12px";
  // menu.style.visibility = "visible";
  // menu.style.opacity = "1";
  // menuContent.style.opacity = "1";
  // menuContent.style.transform = 'translateY(-50%)';
  counter = 1;

} else {
  burgerTop.style.transform = "rotate(-0deg)";
  burgerTop.style.marginTop = "12px";
  burgerBot.style.transform = "rotate(0deg)";
  burgerBot.style.marginTop = "10px";
  // menuContent.style.transform = '';
  // menuContent.style.opacity = "0";
  // menu.style.opacity = "0";
  // menu.style.visibility = "hidden";

  counter = 0;
}
});
