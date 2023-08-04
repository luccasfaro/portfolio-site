var menuNavUl = document.querySelector('.menu-nav-header ul');
var menuTrigger = document.querySelector('.menu-trigger');
var menuTriggerIcon = document.querySelector('.menu-trigger i');

menuTrigger.addEventListener("click", function menuShow() {
   if (menuNavUl.classList.contains('open')) {
      menuNavUl.classList.remove('open');
      menuTriggerIcon.classList.remove('menu-open');
   } else {
      menuNavUl.classList.add('open');
      menuTriggerIcon.classList.add('menu-open');
   }
})