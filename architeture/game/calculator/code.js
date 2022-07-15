
function display(value){
    document.getElementById("textarea").value +=value;
}

function press(){
    let nubr =document.getElementById("textarea").value;
   if(nubr.charAt(nubr.length-1)==='/'){
    alert("It is not valid");
   }
   else{
    document.getElementById("textarea").value +="0";
   }
}

function sol()
{
    var val = document.getElementById("textarea").value;
    var ans=eval(val);
    document.getElementById("textarea").value=ans;

}

function clr(){
    document.getElementById("textarea").value ='';

}