function sayHello(){
          var response =prompt("What is your name");
          alert("Hello,"+response +", have a good day!");
}

function showTopic(){
  var x =document.getElementById("小野子");
  x.style.fontSize="25px";
  x.style.color="blue";
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,30));