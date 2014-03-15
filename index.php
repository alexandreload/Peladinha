<!DOCTYPE html>
<html>
  <head>
    <title>Peladinha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="http://code.jquery.com/jquery-latest.js"></script>   
        <script src="js/bootstrap.js"></script>
        <link href="css/bootstrap-responsive.css" rel="stylesheet" media="screen"/>
        <link href="css/bootstrap.css" rel="stylesheet" media="screen"/>
        <link href="css/style.css" rel="stylesheet" />
  </head>
<body>
<div class="navbar">
  <div class="navbar-inner">
    <div class="container-fluid">
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      
      <div class="nav-collapse collapse">
        <ul class="nav">
          <li class="active"><a href="index.php"><i class="icon-home"></i> Home</a></li>

          <li><a href="agenda.php"><i class="icon-book"></i> Agenda</a></li>

          <li><a href="https://www.facebook.com/groups/158842980915134/" target="_blank"><i class="icon-thumbs-up"></i> Facebook</a></li>
        </ul>
        <div class="btn-group pull-right">
          <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
            <i class="icon-user"></i> admin <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#"><i class="icon-wrench"></i> Settings</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="icon-share"></i> Logout</a></li>
          </ul>
        </div>
      </div>
      <!--/.nav-collapse -->
    </div>
    <!--/.container-fluid -->
  </div>
  <!--/.navbar-inner -->
</div>
    <div class="well cor1">
      
          <img src="img/logo_1.png"/>
    
    </div> 
    <form class="well" id="time" method="post" action="tira_time.php">
    <fieldset>
    <!-- Form Name -->
      <div class="span8-fluid">
    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 1</label>
      <div class="controls controls-row">
        <input id="jogador" name="jogador1" type="text" placeholder="nome" class="span2">
        
      </div>
    

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 2</label>
      <div class="controls controls-row">
        <input id="jogador" name="jogador2" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 3</label>
      <div class="controls">
        <input id="jogador" name="jogador3" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 4</label>
      <div class="controls">
        <input id="jogador" name="jogador4" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 5</label>
      <div class="controls">
        <input id="jogador" name="jogador5" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 6</label>
      <div class="controls">
        <input id="jogador" name="jogador6" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 7</label>
      <div class="controls">
        <input id="jogador" name="jogador7" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 8</label>
      <div class="controls">
        <input id="jogador" name="jogador8" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 9</label>
      <div class="controls">
        <input id="jogador" name="jogador9" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Text input-->
    <div class="control-group">
      <label class="control-label">Jogador 10</label>
      <div class="controls">
        <input id="jogador" name="jogador10" type="text" placeholder="nome" class="span2">
        
      </div>
    </div>

    <!-- Button (Double) -->
      <div class="control-group">
        
        <div class="controls">
          <button id="button1id" name="Submit" class="btn btn-success" type="submit">JOGAR</button>
          <button id="button2id" name="reset" class="btn btn-danger" type="reset">LIMPAR</button>
        </div>
      </div>
    </div>
    </div>
    </fieldset>
    </div>
    </form>
 
    </body>
    </html>