function mostrar(personaje) {
  let titulo=document.getElementById("titulo");
  let texto=document.getElementById("texto");
  let caja=document.getElementById("descripcion");
  if (personaje=="papa") {
    titulo.innerHTML="Papa Noel"
    texto.innerHTML="Es el personaje que reparte regalos a los ninos en navidad"
  }
  else if (personaje=="rodolfo") {
     titulo.innerHTML="Rodolfo"
     texto.innerHTML="Es el reno de nariz roja que ayuda a papa noel"
  }
  else if (personaje=="nieve") {
     titulo.innerHTML="Muneco de nieve"
     texto.innerHTML="Es una figura tradicional del invierno hecha de nieve"
    
  }
  else if (personaje=="duende") {
     titulo.innerHTML="Duende"
     texto.innerHTML="Ayuda a papa noel a preparar los regal0s"
    
  }
  caja.style.display="block"
   
}
function agregarregalo(){
  let regalo=document.getElementById("regalo").value;
  if (regalo === "") {
    alert("Escribe un regalo");
  }
  else{
    let lista=document.getElementById("listaregalos");
    let elemento=document.createElement("li");
    elemento.textContent=regalo;
    let boton=document.createElement("button");
    boton.textContent="Eliminar";
    boton.onclick=function(){
      elemento.remove();   
    };
    elemento.appendChild(boton);
    lista.appendChild(elemento);
    document.getElementById("regalo").value="";
  }
}
let totalCompra = 0;

function agregarComida(nombre, precio) {

    let lista = document.getElementById("listaComida");

    let elemento = document.createElement("li");

    elemento.textContent = nombre + " - Bs " + precio + " ";

    let boton = document.createElement("button");

    boton.textContent = "Eliminar";

    boton.onclick = function() {

        totalCompra = totalCompra - precio;

        elemento.remove();

        document.getElementById("total").innerHTML =
        "Total: Bs " + totalCompra;

    };

    elemento.appendChild(boton);

    lista.appendChild(elemento);

    totalCompra = totalCompra + precio;

    document.getElementById("total").innerHTML =
    "Total: Bs " + totalCompra;

}