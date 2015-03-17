var http = require('http');
var JSONobject={outcome:'Win',
wins:'1',
loses:'2',
ties:'3'};
var win=0,lose=0,tie=0;
var string=['rock','paper','scissors','lizard','spock'];
 
http.createServer(function (req, res) {
  // set up some routes
  switch(req.url) {
    case '/':
  // show the user a simple form
  
  res.writeHead(200, "OK", {'Content-Type': 'text/html'});
  res.write('<html><head><title>Assignment 5</title></head><body>');
  res.write('<form method="post" action="/play/rock">');
  res.write('<input type="submit" value="Rock" />');
  res.write('</form>');
  
  res.write('<form method="post" action="/play/paper">');
  res.write('<input type="submit" value="Paper" />');
  res.write('</form>');
  
  res.write('<form method="post" action="/play/scissors">');
  res.write('<input type="submit" value="Scissors" />');
  res.write('</form>');
  
  res.write('<form method="post" action="/play/lizard">');
  res.write('<input type="submit" value="Lizard" />');
  res.write('</form>');
  
  res.write('<form method="post" action="/play/spock">');
  res.write('<input type="submit" value="Spock" />');
  res.write('</form>');
  
  
  res.write('</body></html>');
  res.end();
  break;
    
	case '/play/rock':
      if (req.method == 'POST') {
    
    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString()); 
    });
    
    req.on('end', function() {
      var random = string[Math.floor(Math.random()*string.length)];
      
      res.writeHead(200);
      switch(random){
    
        case 'rock':
        JSONobject.outcome='Tie';
        tie=tie+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        res.end();        
        break;
        
        case 'paper':
                
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;
        
        case 'spock':

        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        case 'scissors':
                
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;

        case 'lizard':
           
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
      }
    });
    
  } 
  break;
  
  case '/play/paper':
      if (req.method == 'POST') {
    
      
    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
    });
    
    req.on('end', function() {
      var random = string[Math.floor(Math.random()*string.length)];
      
      res.writeHead(200);
      switch(random){
    
        case 'rock':
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        res.end();        
        break;
        
        case 'paper':
                
        JSONobject.outcome='Tie';
        tie=tie+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;
        
        case 'spock':

        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        case 'scissors':
                
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;

        case 'lizard':
           
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
      } 


    });
    
  } 
  break;
  
  case '/play/scissors':
      if (req.method == 'POST') {
    
      
    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
    });
    
    req.on('end', function() {
     var random = string[Math.floor(Math.random()*string.length)];
      
      res.writeHead(200);
      switch(random){
    
        case 'rock':
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        res.end();        
        break;
        
        case 'paper':
                
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;
        
        case 'spock':

        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        case 'scissors':
                
        JSONobject.outcome='Tie';
        tie=tie+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;

        case 'lizard':
           
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
      }



    });
    
  } 
  break;
  
  case '/play/lizard':
      if (req.method == 'POST') {
    
      
    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
    });
    
    req.on('end', function() {
      var random = string[Math.floor(Math.random()*string.length)];
      
      res.writeHead(200);
      switch(random){
    
        case 'rock':
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        res.end();        
        break;
        
        case 'paper':
                
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;
        
        case 'spock':

        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        case 'scissors':
                
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;

        case 'lizard':
           
        JSONobject.outcome='Tie';
        tie=tie+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
      }



    });
    
  } 
  break;
  
  case '/play/spock':
      if (req.method == 'POST') {
    
      
    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
    });
    
    req.on('end', function() {
     var random = string[Math.floor(Math.random()*string.length)];
      
      res.writeHead(200);
      switch(random){
    
        case 'rock':
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        res.end();        
        break;
        
        case 'paper':
                
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;
        
        case 'spock':

        JSONobject.outcome='Tie';
        tie=tie+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        case 'scissors':
                
        JSONobject.outcome='Win';
        win=win+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
        
        res.end();
        break;

        case 'lizard':
           
        JSONobject.outcome='Lose';
        lose=lose+1;
        JSONobject.wins=win;
        JSONobject.loses=lose;
        JSONobject.ties=tie;
        res.write(JSON.stringify(JSONobject));
      } 



    });
    
  } 
  break;
	
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      
  };
}).listen(3000);
console.log("Server running on port 3000");
