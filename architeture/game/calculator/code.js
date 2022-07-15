
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
// function removechar(){
//     let value =document.getElementById("texrarea").value;
   
//    let newstr= value.replace('value.charAt(value.length-1)','');
//    document.getElementById("textarea").value =newstr;

// }