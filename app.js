let numeros=[ "A" , "2","3","4","5","6","7","8","9","J","Q","K"]
let pintas=["♦", "♥", "♠", "♣"]

const div=document.getElementById("card")
div.classList.add("id","card")



function cartaRandom(){


  let numeroaleatorio = Math.floor(Math.random() * numeros.length);
  let iconoaleatorio = Math.floor(Math.random() * pintas.length);

  document.getElementById("pintaup").innerHTML = pintas[iconoaleatorio];
  document.getElementById("numero").innerHTML = numeros[numeroaleatorio];
  document.getElementById("pintadown").innerHTML = pintas[iconoaleatorio];


  if (iconoaleatorio == 0 || iconoaleatorio == 1) {
    document.getElementById("pintaup").style.color = "red";
    document.getElementById("pintadown").style.color = "red";
    document.getElementById("numero").style.color="red"
  }
}

const randomsuit=pintas[cartaRandom()];

/* funcion para el sort*/

let draw=document.getElementById("draw");
const sort=document.getElementById("sort");


draw.addEventListener("click", cliker)
function cliker(){

const div=document.createElement("div")
div.classList.add("card")
document.getElementById("bodydraw").innerHTML=div




    console.log("funciona")
}






 