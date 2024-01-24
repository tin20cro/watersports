  document.addEventListener('DOMContentLoaded', function () {
      const menuIcon = document.querySelector('.menu-icon');
      const nav = document.querySelector('nav');
      const mainContent = document.querySelector('.main-content');
    
      menuIcon.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        mainContent.classList.toggle('menu-open');
      });
      });

    var animateButton = function(e) {

      e.preventDefault();
      //reset animation
      e.target.classList.remove('animate');
      
      e.target.classList.add('animate');
      setTimeout(function(){
        e.target.classList.remove('animate');
      },700);
    };
    
    var bubblyButtons = document.getElementsByClassName("bubbly-button");
    
    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }

    