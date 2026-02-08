

function bloquearScroll() {
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");
}

function liberarScroll() {
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}


const menu = document.getElementById("menu"); // icono que se hace click

const menuCelular = document.querySelector(".menuCelular"); //menu principal donde estan los enlaces


const productosCelular = document.getElementById("productosCelular"); // donde se hace click en productos
const megaMenuCelular = document.querySelector(".megaMenuCelular"); // abre el menu secundario con productos

menu.addEventListener("click", () => {
  menuCelular.classList.toggle("active");
  

  if (menuCelular.classList.contains("active")) {
    bloquearScroll();
  } else {
    liberarScroll();
  }

  if(megaMenuCelular.classList.contains("active")){

    megaMenuCelular.classList.remove("active")
    megaProductos.classList.remove("active");
   

  }
});

const megaProductos = document.querySelector(".megaProductos") // megaProductos es el contenedor que se abre secundario de productos y muestra lisas mosaicos etc
console.log(megaProductos)


productosCelular.addEventListener("click", (e) => {
  e.preventDefault();
  menuCelular.classList.add("active");
  megaMenuCelular.classList.add("active");
  megaProductos.classList.toggle("active");
  bloquearScroll();
});

function menuFuncionar(x, y, z, a) {

  x.addEventListener("click", (e) => {
    e.preventDefault();

    y.classList.add("active");
    z.classList.add("active");
    a.classList.toggle("active");

    bloquearScroll();
  });

}




const galeriaSeccionCelular = document.querySelector(".galeriaSeccionCelular");
const megaSecciones = document.querySelector(".megaSecciones");
console.log(megaSecciones)

// 👉 llamada a la función (AFUERA)
menuFuncionar(
  galeriaSeccionCelular,
  menuCelular,
  megaMenuCelular,
  megaSecciones
);



const back = document.querySelector(".back");

back.addEventListener("click", () => {
  megaMenuCelular.classList.remove("active");
  menuCelular.classList.add("active");
   megaProductos.classList.remove("active");
   megaSecciones.classList.remove("active");
});
