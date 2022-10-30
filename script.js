
function go(){

const data=document.getElementById("inputdata").value;

if (data===" "){
    alert("please enter a massage");
}else{
    const para = document.createElement("p");
    para.id="para"; 
    para.innerHTML=data;
    para.contentEditable="true";
    document.getElementById("div").append(para);
    document.getElementById("inputdata").value=' ';
};
}
