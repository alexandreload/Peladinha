<html>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="http://code.jquery.com/jquery-latest.js"></script>   
        <script src="js/bootstrap.js"></script>
        <link href="css/bootstrap-responsive.css" rel="stylesheet" media="screen"/>
        <link href="css/bootstrap.css" rel="stylesheet" media="screen"/>
        
</html>
<div class="well">
<?php

$j1=$_POST['jogador1'];
$j2=$_POST['jogador2'];
$j3=$_POST['jogador3'];
$j4=$_POST['jogador4'];
$j5=$_POST['jogador5'];
$j6=$_POST['jogador6'];
$j7=$_POST['jogador7'];
$j8=$_POST['jogador8'];
$j9=$_POST['jogador9'];
$j10=$_POST['jogador10'];



$arr = array($j1,$j2,$j3,$j4,$j5,$j6,$j7,$j8,$j9,$j10);
$array = array_slice($arr, 0, 10); 

//print_r(array_chunk($array, 5));

shuffle($array);
//print_r($array);


$i=0;
foreach ($array as $value) 
{
if($i<5)
{
echo 

<<<HTML
     
      <div class="row-fluid">
           <div class="span6 offset1">
                <p><font color="#FF0000"><strong><h4>$value</h4></strong></font></p>
           </div>
      </div>
HTML;
}

else{
    
 
echo 
<<<HTML

        <div class="row-fluid">
             <div class="span6 offset4">
                <p><font color="#00FF00"><strong><h4>$value</h4></strong></font></p>
             </div>
        </div>
    
HTML;
}
$i++;
    
}

?>

</div>
