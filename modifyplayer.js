var maindiv = document.createElement('span');
maindiv.setAttribute('class','main');
document.body.appendChild(maindiv);


var heading=document.createElement('h1');
heading.textContent="Modify player";
maindiv.appendChild(heading);
var selectPlayer_div = document.createElement('div');

var players=document.createElement('label');
players.textContent="Select Player";
players.setAttribute('class','text');


var dropdown=document.createElement('select');
dropdown.setAttribute('id','player');
dropdown.setAttribute("onchange","myFunction()" );

var option=document.createElement('option');
option.textContent="Select";

var option1=document.createElement('option');
option1.setAttribute("value","player1");
option1.textContent="player 1";


var option2=document.createElement('option');
option2.setAttribute("value","player2");
option2.textContent="player 2";

maindiv.appendChild(selectPlayer_div);
selectPlayer_div.appendChild(players);
selectPlayer_div.appendChild(dropdown);
dropdown.appendChild(option);
dropdown.appendChild(option1);
dropdown.appendChild(option2);

var team_div = document.createElement('div');
maindiv.appendChild(team_div);

var players=document.createElement('label');
players.textContent="Change Team :";
players.setAttribute('class','text');

var teambox = document.createElement('input');
teambox.setAttribute('type','text');
teambox.setAttribute('id','team');

team_div.appendChild(players);
team_div.appendChild(teambox);


var type_div = document.createElement('div');

var type=document.createElement('label');
type.textContent=" Player type";
type.setAttribute('class','text');

var typeDropDown=document.createElement('select');
typeDropDown.setAttribute('id','type');

var type_option=document.createElement('option');
type_option.textContent="Select";

var type_option1=document.createElement('option');
type_option1.textContent="Caption";

var type_option2=document.createElement('option');
type_option2.textContent="marquee";

var type_option3=document.createElement('option');
type_option3.textContent="beginner";

maindiv.appendChild(type_div);
type_div.appendChild(type);
type_div.appendChild(typeDropDown);
typeDropDown.appendChild(type_option);
typeDropDown.appendChild(type_option1);
typeDropDown.appendChild(type_option2);
typeDropDown.appendChild(type_option3);



var matchesPlayed_div = document.createElement('div');
maindiv.appendChild(matchesPlayed_div);

var matches=document.createElement('label');
matches.textContent="Matches Played :";
matches.setAttribute('class','text');

var matchesbox = document.createElement('input');
matchesbox.setAttribute('type','number');
matchesbox.setAttribute('id','matches');

matchesPlayed_div.appendChild(matches);
matchesPlayed_div.appendChild(matchesbox);


var position_div = document.createElement('div');
maindiv.appendChild(position_div);

var position=document.createElement('label');
position.textContent="Position :";
position.setAttribute('class','text');

var position_box = document.createElement('input');
position_box.setAttribute('type','number');
position_box.setAttribute('id','position');

position_div.appendChild(position);
position_div.appendChild(position_box);

var status_div = document.createElement('div');


var setstatus=document.createElement('label');
setstatus.textContent="Bid status :";
setstatus.setAttribute('class','text');

var status_dropdown=document.createElement('select');
status_dropdown.setAttribute('id','bid');

var status_option=document.createElement('option');
status_option.textContent="Select";

var status_option1=document.createElement('option');
status_option1.textContent="sold";

var status_option2=document.createElement('option');
status_option2.textContent="unsold";

maindiv.appendChild(status_div);
status_div.appendChild(setstatus);
status_div.appendChild(status_dropdown);
status_dropdown.appendChild(status_option);
status_dropdown.appendChild(status_option1);
status_dropdown.appendChild(status_option2);


//  option1.onselect=display();
//  function display(){
//      var img_div = document.createElement('div');
//      var logo=document.createElement('img');
//        logo.setAttribute('class','logo');
//       logo.src="images.jpeg";
//       img_div.appendChild(logo); 
//       maindiv.appendChild(img_div);
       

//   }

 function myFunction(){
  
  var x = player.value;
  console.log(x);
   if(x=="player1"){
     var img_div = document.createElement('div');
     var logo=document.createElement('img');
       logo.setAttribute('class','logo');
       
      logo.src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JX6BROWNF4I6TDA4PSHOPBNYKU.jpg&w=767";
   
       img_div.appendChild(logo); 
      document.body.appendChild(img_div);
       
   } 
   else{
    var img_div = document.createElement('span');
    var image=document.createElement('img');
    image.setAttribute('class','logo');
    image.src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnBzOGTbXSCq4IJh3ZpoSSPGNF4aMjpWTo4LoDJox1vN6L22zbw&s";
     img_div.appendChild(image); 
     document.body.appendChild(img_div);
   } 
  }

//  option1.onselect=display();
//  function display(){
//      var x=$.parseHTML(createTemplate());
//      maindiv.appendChild(x);
    
//  }
//   function createTemplate(){
//      const template = 
//  `<div id= "playerImage">
//  <img src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnBzOGTbXSCq4IJh3ZpoSSPGNF4aMjpWTo4LoDJox1vN6L22zbw&s">
//  </div>`;
//  return template;
//   }