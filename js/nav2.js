const menu = document.getElementById("menu");
const menuCelular = document.querySelector(".menuCelular");
const productosCelular = document.getElementById("productosCelular");
const megaMenuCelular = document.querySelector(".megaMenuCelular");

function bloquearScroll() {
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");
}

function liberarScroll() {
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}


menu.addEventListener("click", () => {
  menuCelular.classList.toggle("active");
  

  if (menuCelular.classList.contains("active")) {
    bloquearScroll();
  } else {
    liberarScroll();
  }

  if(megaMenuCelular.classList.contains("active")){

    megaMenuCelular.classList.remove("active")
   

  }
});


productosCelular.addEventListener("click", (e) => {
  e.preventDefault();
  menuCelular.classList.add("active");
  megaMenuCelular.classList.add("active");
  bloquearScroll();
});



const back = document.querySelector(".back");

back.addEventListener("click", () => {
  megaMenuCelular.classList.remove("active");
  menuCelular.classList.add("active");
});
