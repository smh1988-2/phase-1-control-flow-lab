

function scuberGreetingForFeet(distance){
  if (distance < 400) {
    return "This one is on me!";
  } else if (distance >= 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (distance > 2500) {
    return "No can do."
  }
};

scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);



function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
 switch(tip) {
 case "generous":
 return "Thank you so much.";
 break;
 case "not as generous":
 return "Thank you.";
 break;
 case "thanks for everything":
 return "Bye.";
 break;
}
}