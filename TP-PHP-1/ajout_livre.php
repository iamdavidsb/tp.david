<?php

@include ("connecte.php");
$ref = $_POST ['ref'];
$nb_page = $_POST ["nb_page"];
$auteur = $_POST ['auteur'];
$date_publication = $_POST ['date_publication']
$genre = $_POST ['genre'];
$disponibilite = $_POST ['disponibilite'];
$nb_emprunts = $_POST ['nb_emprunts'];
$etat = $_POST ['etat'];
$nb_exemplaire = $_POST ['nb_exemplaire'];

$requete = "INSERT INTO livres VALUES ('$ref','$nb_page','$auteur','$date_publication','$genre','$disponibilite','$nb_emprunts','$etat','$nb_exemplaire')";

$rl= mysqli_query($conn,$requete);

echo "<center><p>Ajout Ok</p></center>";
echo '<center><a href="index.html">Retour</a></center>';

mysqli_close($conn)

?>