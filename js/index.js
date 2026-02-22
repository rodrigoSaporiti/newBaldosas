const menu = document.getElementById("menu");//icono menu
const pathMenu = document.getElementById("pathMenu");// svg donde esta la imagen del icono 
const menuCelularComun = document.getElementById("menuCelularComun")// menu simple donde muestra el primer menu selector

const back = document.getElementById("back");// boton para ir para atras

const segundoMenu = document.getElementById("segundoMenu");// este es el segundo menu que se despliega mostrando cards



// evento click para abrir el primer menu selector

menu.addEventListener("click",()=>{


    menuCelularComun.classList.toggle("scale-x-0")
    menuCelularComun.classList.toggle("scale-x-100")


    if(pathMenu.getAttribute ("d") == "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"){
         pathMenu.setAttribute("d", "M6 18L18 6M6 6l12 12");
       
    }else{
        pathMenu.setAttribute("d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12")
    }


})





// creo una funcion para abir y cerrar los menu 

function abrirSegundoMenu(producto, productoMenu, back, menu, segundoMenu){

producto.addEventListener("click", ()=>{

  productoMenu.classList.toggle("hidden")

    back.classList.toggle("opacity-0");
    back.classList.toggle("opacity-100");
   
    back.classList.add("duration-300")
     back.classList.remove("duration-0")

    menu.classList.add("hidden");

     
   setTimeout(() => {

     segundoMenu.classList.toggle("scale-x-0")
    segundoMenu.classList.toggle("scale-x-100")

  }, 10); // 10ms es imperceptible para el humano, pero oro puro para el navegador

})

}

// productos
const productos = document.getElementById("productos"); // link o boton productos

const productosMenu = document.getElementById("productosMenu") //productos donde estan las card




abrirSegundoMenu(productos, productosMenu, back, menu,segundoMenu);


// galeria seccion


const galeriaSeccion = document.getElementById("galeriaSeccion"); // link button galeria de secciones

const galeriaSeccionMenu = document.getElementById("galeriaSeccionMenu"); // donde estan las card de galaeria de secciones



abrirSegundoMenu(galeriaSeccion, galeriaSeccionMenu, back, menu,segundoMenu);


//galeria color

const galeriaColor = document.getElementById("galeriaColor"); // link button galeria de secciones

const galeriColornMenu = document.getElementById("galeriaColorMenu"); // donde estan las card de galaeria de secciones



abrirSegundoMenu(galeriaColor, galeriaColorMenu, back, menu,segundoMenu);



//catalogos menu

const catalogos = document.getElementById("catalogos"); // link button galeria de secciones

const catalogoMenu = document.getElementById("catalogoMenu"); // donde estan las card de galaeria de secciones



abrirSegundoMenu(catalogos, catalogoMenu, back, menu,segundoMenu);







back.addEventListener("click", ()=>{

     
  
  productosMenu.classList.add("hidden")
  galeriaSeccionMenu.classList.add("hidden")
  galeriColornMenu.classList.add("hidden")
  catalogoMenu.classList.add("hidden")

     segundoMenu.classList.add("scale-x-0")
    segundoMenu.classList.remove("scale-x-100")
    

     back.classList.remove("duration-300")
    back.classList.add("duration-0")
       back.classList.add("opacity-0");
    back.classList.remove("opacity-100");

    menu.classList.remove("hidden")
 



})




// touch ipad pro  nav

if (window.matchMedia('(hover: none)').matches) {

  const triggers = document.querySelectorAll('.mega-trigger');

  triggers.forEach(btn => {

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const menu = btn.nextElementSibling;
      const isOpen = menu.classList.contains('scale-y-100');

      // cerrar todos
      document.querySelectorAll('.megaMenu').forEach(m => {
        m.classList.remove('scale-y-100');
      });

      // si estaba cerrado → abrirlo
      if (!isOpen) {
        menu.classList.add('scale-y-100');
      }

    });

  });

}