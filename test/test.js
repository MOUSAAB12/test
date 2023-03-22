let countEl = document.getElementById("demo")
let count = 0
function increase(){
 count = count + 1
 countEl.innerText = count

 if(count>10){
    document.body.style.background = "red ";
    if(count>20){
        document.body.style.background = "white ";
       
     }if(count>30){
        document.body.style.background = "green ";
        
     }
   
 }  else {
    document.body.style.background = "#293447 ";
 }
}
function decrease(){
    
    count = count - 1
    countEl.innerHTML = count
   }
   function reset(){
    count = 0
    countEl.innerText = count
   }
