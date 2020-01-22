

let check= document.getElementById("numbOne");
let checkTwo=document.getElementById("numbTwo")
check.onchange=function(){
    if (check && checkTwo.checked){
        document.getElementById("alertbox").innerHTML="<div class='alert alert-success'>Take it easy,you can't be in two places at once!</div>";
}
else{

}
}
    