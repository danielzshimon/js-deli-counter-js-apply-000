var katzDeli  = [];
var numLine = 0;

function takeANumber(katzDeliLine, name){
<<<<<<< HEAD
  numLine++;
  katzDeliLine.push(numLine);
    return (`You are number ${numLine}.);
=======
<<<<<<< HEAD
=======
  if (katzDeliLine => 0);
>>>>>>> 80041cab3da14c80666da9e846ff852791e05c82
  katzDeliLine.push(name);
    return ("Welcome, "  + name +  ". You are number " + (katzDeliLine.length)+  " in line.");
>>>>>>> f8dc18e1705013533e22ebb22eacade7455084fd
}

function  nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return ("Currently serving " +katzDeliLine.splice(0, 1) + ".");
    }
}

function  currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return ("The line is currently empty.");
  } else {
      var numName = [];
      for(var i = 0; i < katzDeliLine.length; i++ ){
        numName.push( (i + 1) + ". " + katzDeliLine[i]);
      }
    return ("The line is currently: " + numName.join(", "));
<<<<<<< HEAD
     }
=======
      }
>>>>>>> 80041cab3da14c80666da9e846ff852791e05c82
}




