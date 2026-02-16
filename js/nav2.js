

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

const megaMenuCelular = document.querySelector(".megaMenuCelular"); // abre el menu secundario con productos


const megaProductos = document.querySelector(".megaProductos") // megaProductos es el contenedor que se abre secundario de productos y muestra lisas mosaicos etc
console.log(megaProductos)

//Secciones a activar
const productosCelular = document.getElementById("productosCelular")
const productosSeccion = document.getElementById("productosSeccion")
const productosColor = document.getElementById("productosColor")
const productosCalogo = document.getElementById("productosCatalogo")


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




const galeriaSeccionCelular = document.querySelector(".galeriaSeccionCelular");// cuando se hace click en galeria seccion 

console.log(galeriaSeccionCelular)

// 👉 llamada a la función (AFUERA)
menuFuncionar(
  galeriaSeccionCelular,
  menuCelular,
  megaMenuCelular,
  productosSeccion
);


const galeriaColorCelular = document.querySelector(".galeriaColorCelular");

menuFuncionar(
  galeriaColorCelular,
  menuCelular,
  megaMenuCelular,
  productosColor
)


const catalogoCelular = document.querySelector(".catalogoCelular");

menuFuncionar(
  catalogoCelular,
  menuCelular,
  megaMenuCelular,
  productosCalogo
)



const back = document.querySelector(".back");

back.addEventListener("click", () => {
  megaMenuCelular.classList.remove("active");
  menuCelular.classList.add("active");
   megaProductos.classList.remove("active");
   productosSeccion.classList.remove("active");
   productosColor.classList.remove("active");
   productosCalogo.classList.remove("active");
});




let lastScroll = window.scrollY;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Bajando
    nav.classList.add("nav-hidden");
  } else {
    // Subiendo
    nav.classList.remove("nav-hidden");
  }

  lastScroll = currentScroll;
});
