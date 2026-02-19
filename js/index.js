const menu = document.getElementById("menu");
const pathMenu = document.getElementById("pathMenu");
const menuCelularComun = document.getElementById("menuCelularComun")

menu.addEventListener("click",()=>{


    menuCelularComun.classList.toggle("scale-x-0")
    menuCelularComun.classList.toggle("scale-x-100")


    if(pathMenu.getAttribute ("d") == "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"){
         pathMenu.setAttribute("d", "M6 18L18 6M6 6l12 12");
       
    }else{
        pathMenu.setAttribute("d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12")
    }


})



const productos = document.getElementById("productos");
const productosMenu = document.getElementById("productosMenu");
const back = document.getElementById("back");


productos.addEventListener("click", ()=>{

    back.classList.toggle("opacity-0");
    back.classList.toggle("opacity-100");
   
    back.classList.add("duration-300")
     back.classList.remove("duration-0")

    menu.classList.add("hidden");

     
   setTimeout(() => {

     productosMenu.classList.toggle("scale-x-0")
    productosMenu.classList.toggle("scale-x-100")

  }, 10); // 10ms es imperceptible para el humano, pero oro puro para el navegador

})


back.addEventListener("click", ()=>{

      setTimeout(() => {

     productosMenu.classList.add("scale-x-0")
    productosMenu.classList.remove("scale-x-100")
    

     back.classList.remove("duration-300")
    back.classList.add("duration-0")
       back.classList.add("opacity-0");
    back.classList.remove("opacity-100");

    menu.classList.remove("hidden")
 
  }, 10); // 10ms es imperceptible para el humano, pero oro puro para el navegador



})