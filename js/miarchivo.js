let identificacion = [];

for(let i = 0; i < 1; i++){
    let nombre = prompt("ingrese su nombre");
    identificacion.push(nombre);
    let apellido = prompt("ingrese su apellido");
    identificacion.push(apellido);
}
if(identificacion != ""){
    alert("hola " + " " +identificacion);
}
const carritoCompras = [];

class producto{
    constructor(nombre,precio,espacio){
       this.nombre = nombre;
       this.precio = precio;
       this.espacio = espacio;
    }
}


const ps4 = new producto("ps4",80000,"500mb");
console.log(ps4);
const nintendo = new producto("nintendo switch",90000,"500mb");
console.log(nintendo);
const xbox = new producto("xbox series S",100000,"1tb");
console.log(xbox);
const ps5 = new producto("ps5",150000,"1tb");
console.log(ps5);



const ryzen3 = new producto("ryzen 3",80000,"-");
console.log(ryzen3);
const ryzen7 = new producto("ryzen 7",100000,"-");
console.log(ryzen7);
const intel3 = new producto("intel core i 3", 90000,"-");
console.log(intel3);
const intel7 = new producto("intel core i 7", 110000,"-");
console.log(intel7);






function main (){

    alert("indique el tipo de producto");

let tipodeproducto = prompt("1.consolas 2.procesadores ");
if(tipodeproducto == 1){
    alert("1.consolas")


    let opcionCompra = prompt("1.ps4 $80.000 | 2.nintendo switch $90.000 | 3.xbox series S 100.000 | 4.ps5 150.000");
    if(opcionCompra == 1){
        alert("se agrego ps4 al carrito");
        carritoCompras.push("ps4");
        let pregunta = prompt("desea seguir comprando? 1.si 2.no")
        if(pregunta == 2){

           alert("su carrito de compras: " + carritoCompras);
        }
        else if (pregunta == 1){

            main();
        }
        
        


        carritoCompras.push(ps4);
        console.log(carritoCompras);
        document.write(carritoCompras);
    }
    else if (opcionCompra ==2){

        alert("se agrego Nintendo switch al carrito");
        carritoCompras.push("nintendo switch");
        let pregunta = prompt("desea seguir comprando? 1.si 2.no")
        if(pregunta == 2){

           alert("su carrito de compras: " + carritoCompras);
        }
        else if (pregunta == 1){

            main();
        }
        
        
        console.log(carritoCompras);
    }
    else if(opcionCompra == 3){

        alert("se agrego Xbox series S al carrito");
        carritoCompras.push("xbox series S");
        let pregunta = prompt("desea seguir comprando? 1.si 2.no")
        if(pregunta == 2){

           alert("su carrito de compras: " + carritoCompras);
        }
        else if (pregunta == 1){

            main();
        }

        
        
        console.log(carritoCompras);
    }
    else if(opcionCompra == 4){
        alert("se agrego ps5 al carrito");
        carritoCompras.push(ps5);
        let pregunta = prompt("desea seguir comprando? 1.si 2.no")
        if(pregunta == 2){

           alert("su carrito de compras: " + carritoCompras);
        }
        else if (pregunta == 1){

            main();
        }

        
    
    console.log(ps5);
}}
  if(tipodeproducto == 2){
    alert("2. procesadores")
        let opcionCompra2 = prompt("1.ryzen 3 $80000 | 2.ryzen 7 $100000 | 3.intel core i3 $90000 | 4.intel core i 7 110000");
     if(opcionCompra2 == 1){
        alert("se agrego ryzen3 al carrito");
        carritoCompras.push("ryzen 3");
        let pregunta = prompt("desea seguir comprando? 1.si 2.no")
        if(pregunta == 2){

           alert("su carrito de compras: " + carritoCompras);
        }
        else if (pregunta == 1){

            main();
        }



        
        console.log(carritoCompras);
        
     }
     else if(opcionCompra2 == 2){
        alert("se agrego ryzen 7 al carrito");
        carritoCompras.push("ryzen 7");
        let pregunta = prompt("desea seguir comprando? 1.si 2.no")
        if(pregunta == 2){

           alert("su carrito de compras: " + carritoCompras);
        }
        else if (pregunta == 1){

            main();
        }
    }
    else if(opcionCompra2 == 3){
            alert("se agrego intel core i3 al carrito");
            carritoCompras.push("inter core i3");
            let pregunta = prompt("desea seguir comprando? 1.si 2.no")
            if(pregunta == 2){
    
               alert("su carrito de compras: " + carritoCompras);
            }
            else if (pregunta == 1){
    
                main();
            }
    
        }
    else if (opcionCompra2 == 4){
            alert("se agrego intel core i7 al carrito");
            carritoCompras.push("intel core i7");
            let pregunta = prompt("desea seguir comprando? 1.si 2.no")
            if(pregunta == 2){
    
               alert("su carrito de compras: " + carritoCompras);
            }
            else if (pregunta == 1){
    
                main();
            }
    
        }
     }
    }
  



main()








/*la idea es hacer un catalogo de productos y un carrito de compras que guarde los productos seleccionados por el
const productos = [
    {
        nombre : "ps4",
        precio : 80.000,
        espacio : "500mb"
    },
    {
        nombre : "nintendo switch",
        precio : 90.000,
        espacio : "500mb"
    },
    {
        nombre : "xbox series S",
        precio : 100.000,
        espacio : "1tb"
    },
    {
        nombre : "ps5",
        precio : 150.000,
        espacio : "1tb"
    }
]

usuario
mediante preguntas que digan si esta seguro de guardar un producto en el carrito
el carrito seria un array vacio y los productos serian objetos */