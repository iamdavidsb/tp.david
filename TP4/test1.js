function test_age(){
    let age = prompt("Quelle est votre âge ?");
    if (age<18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    else {

    document.write("Vous êtes majeur");
    document.body.style.backgroundColor="green";
    }
}


function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");
    {
}
if(moyenne<10){
    document.write("Vous n'etes pas admis")
    document.body.style.backgroundColor="red"
}
else {
    document.write("Felicitation ! Vous êtes admis");
    document.body.style.backgroundColor="green";
   }
}

function test_couleur() {
    let couleur = prompt("Donner une couleur");

    if (couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor="red"
}
else if (couleur == "bleu" || couleur == "blue") {
    document.body.style.backgroundColor = "blue"
 }

 else if (couleur == "vert" || couleur == "green") {
    document.body.style.backgroundColor = "green"
 }
 else if (couleur == "rose" || couleur == "pink") {
    document.body.style.backgroundColor = "pink"
 }
 else {
    alert("Couleur non comprise")
 }
}

function calcul_moyenne() {
    var n1 = prompt("Nombre 1")
    var n2 = prompt("Nombre 2")
    var n3 = prompt("Nombre 3")
  
    var somme = Number(n1) + Number(n2) + Number(n3)
  
    document.write("Somme: " + somme + "<br>")
    var moyenne = somme / 3
    document.write("Moyenne: " + moyenne + "<br>")
  
    if (moyenne > 20 || moyenne < 0) {
      document.write("<hr>Moyenne invalide")
      document.body.style.backgroundColor = "red"
      return
    }
  
    if (moyenne < 10) {
      document.write("Refusé <hr>Redoublant")
      document.body.style.backgroundColor = "red"
    } else {
      document.write("Accepté <hr>")
      document.body.style.backgroundColor = "green"
      if (moyenne > 14) {
        document.write("Mention bien")
      } else {
        document.write("Mention passable")
      }
    }
  
  }