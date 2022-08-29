function reveal() {
    var reveals = document.querySelectorAll(".reveal, .cond_reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  
  var toggle = document.getElementsByClassName("theme-switch");

  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
  
  
  toggle.onclick = function() {
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var targetTheme = "light";
  
      if (currentTheme === "light") {
          targetTheme = "dark";
      }
  
      document.documentElement.setAttribute('data-theme', targetTheme)
      localStorage.setItem('theme', targetTheme);
  };
  
  