<html>
    <body>
    <?php
    @include("connexion.php");       
    $requete="select nom, email from clients";
    $resultat=mysqli_query($conn,$requete);
    ?>

    <center>
         <table border="1">
    <tr>
        <td>Nom client</td>
        <td>Email client </td>
</tr>
    <?php while($enreg=mysqli_fetch_array($resultat))
    {?>
    <tr>
        <td><?php echo $enreg["nom"];?></td>
        <td><?php echo $enreg["email"];?></td>
    </tr>
    <?php }?>
    </table></center>
    <br><br>
    <center><a href="index.html">Retour Acceuil</a></center>
<?php
    mysqli_close($conn);?>
    </body>
</html>