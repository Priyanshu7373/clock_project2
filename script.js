 
 var hey=()=>
  {
    
 var today = new Date();
var zate =  today.getDate()+ ' -' +  (today.getMonth() + 1)  +' -' +today.getFullYear();
var zime = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
var ime= zime;
var ate= zate;
    
var a = document.getElementById("time");
var b = document.getElementById("date");
a.innerHTML=ime;
b.innerHTML=ate;
    // a.append(ime);
// b.append(ate);
// var p = document.getElementById("time").innerHTML;
// var q = document.getElementById("date").innerHTML;
// p.remove();
// q.remove();
    // console.log(p,q)
// console.log(a,b);
} 
 // hey();
  setInterval(hey,1000);
