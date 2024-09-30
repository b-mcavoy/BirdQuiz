function getResults(answer){
  if(answer=="Ostrich"){
    location.replace("correct.html");
  }
  else{
    location.replace("wrong.html");
  }
}

function retry(){
  location.replace("index.html");
}