var menuNavUl = document.querySelector('.menu-nav-header ul');
var menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener("click", function menuShow() {
   if (menuNavUl.classList.contains('open')) {
      menuNavUl.classList.remove('open');
   } else {
      menuNavUl.classList.add('open');
   }
})