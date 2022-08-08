function formValidation(){
    let validity=true;
    const fName=document.forms["myForm"]["fName"].value;
    const lName=document.forms["myForm"]["lName"].value;
    const email=document.forms["myForm"]["email"].value;
    const message=document.forms["myForm"]["message"].value;
    console.log(fName);
    eraseErrors();

    if (fName.length<=2 || fName.length>12){
        Errors("fName","Enter Valid First Name");
        validity=false;
    }

    if (lName.length<=2 || lName.length>12){
        Errors("lName","Enter Valid Last Name");
        validity=false;
    }
    if (email.length>30){
        Errors("email","Enter Valid Email");
        validity=false;
    }


    return validity;
    // location.reload(true)
    
}
function eraseErrors(){
    let elements=document.getElementsByClassName("jsform");
    for (let elem of elements){
        elem.querySelector('small').style.visibility="hidden";
    }
}

function Errors(id,error){
    const element=document.getElementById(id);
    element.querySelector('small').innerHTML=error;
    element.querySelector('small').style.visibility="visible";
}