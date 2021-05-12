function ruleta(){
    var mensaje="";
    var nombre=document.getElementById("nomb").value;
    var x1=Math.trunc(Math.random()*10)+1;
    var x2=Math.trunc(Math.random()*10)+1;
    var x3=Math.trunc(Math.random()*10)+1;

switch(x1){
    case 1:
        document.getElementById("box1").innerHTML="<img src='imgs/canario.jpg'>";
    break;
        case 2:
        document.getElementById("box1").innerHTML="<img src='imgs/conejo.jpg'>";
    break;
        case 3:
        document.getElementById("box1").innerHTML="<img src='imgs/gallina.jpg'>";
    break;
        case 4:
        document.getElementById("box1").innerHTML="<img src='imgs/gato.jpg'>";
    break;
        case 5:
        document.getElementById("box1").innerHTML="<img src='imgs/hamster.jpg'>";
    break;
        case 6:
        document.getElementById("box1").innerHTML="<img src='imgs/iguana.jpg'>";
    break;
        case 7:
        document.getElementById("box1").innerHTML="<img src='imgs/pato.jpg'>";
    break;
        case 8:
        document.getElementById("box1").innerHTML="<img src='imgs/perro.jpg'>";
    break;
        case 9:
        document.getElementById("box1").innerHTML="<img src='imgs/pez.jpg'>";
    break;
        case 10:
        document.getElementById("box1").innerHTML="<img src='imgs/tortuga.jpg'>";
    break;
}
    
switch(x2){
    case 1:
        document.getElementById("box2").innerHTML="<img src='imgs/canario.jpg'>";
    break;
        case 2:
        document.getElementById("box2").innerHTML="<img src='imgs/conejo.jpg'>";
    break;
        case 3:
        document.getElementById("box2").innerHTML="<img src='imgs/gallina.jpg'>";
    break;
        case 4:
        document.getElementById("box2").innerHTML="<img src='imgs/gato.jpg'>";
    break;
        case 5:
        document.getElementById("box2").innerHTML="<img src='imgs/hamster.jpg'>";
    break;
        case 6:
        document.getElementById("box2").innerHTML="<img src='imgs/iguana.jpg'>";
    break;
        case 7:
        document.getElementById("box2").innerHTML="<img src='imgs/pato.jpg'>";
    break;
        case 8:
        document.getElementById("box2").innerHTML="<img src='imgs/perro.jpg'>";
    break;
        case 9:
        document.getElementById("box2").innerHTML="<img src='imgs/pez.jpg'>";
    break;
        case 10:
        document.getElementById("box2").innerHTML="<img src='imgs/tortuga.jpg'>";
    break;
}
   
switch(x3){
    case 1:
        document.getElementById("box3").innerHTML="<img src='imgs/canario.jpg'>";
    break;
        case 2:
        document.getElementById("box3").innerHTML="<img src='imgs/conejo.jpg'>";
    break;
        case 3:
        document.getElementById("box3").innerHTML="<img src='imgs/gallina.jpg'>";
    break;
        case 4:
        document.getElementById("box3").innerHTML="<img src='imgs/gato.jpg'>";
    break;
        case 5:
        document.getElementById("box3").innerHTML="<img src='imgs/hamster.jpg'>";
    break;
        case 6:
        document.getElementById("box3").innerHTML="<img src='imgs/iguana.jpg'>";
    break;
        case 7:
        document.getElementById("box3").innerHTML="<img src='imgs/pato.jpg'>";
    break;
        case 8:
        document.getElementById("box3").innerHTML="<img src='imgs/perro.jpg'>";
    break;
        case 9:
        document.getElementById("box3").innerHTML="<img src='imgs/pez.jpg'>";
    break;
        case 10:
        document.getElementById("box3").innerHTML="<img src='imgs/tortuga.jpg'>";
    break;
}
   

if(x1==x2 && x1==x3)
   mensaje="¡Tercias!";
else if (x1==x2 || x1==x3 || x2==x3)
mensaje="¡Pares!";
    else
       mensaje="¡Sin igualdad!";
    
    
    document.getElementById("salida").innerHTML="¡Hola "+nombre+"! Tu resultado es: ";
    document.getElementById("resultado").innerHTML=mensaje;    
    
}

function mouseOver() {
  document.getElementById("boton").style.color = "white";
  document.getElementById("boton").style.backgroundColor= "red";
}

function mouseOut() {
  document.getElementById("boton").style.backgroundColor= "#138D75";
  document.getElementById("boton").style.color="black";
}
