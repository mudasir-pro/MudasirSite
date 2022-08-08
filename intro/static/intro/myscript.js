// Basic Navbar Function 
const body=document.querySelector("*");
const navbar=document.querySelector(".navbar");
const menu=document.querySelector(".menu-list");
const cancelbtn=document.querySelector(".cancel-btn");
const menubtn=document.querySelector(".menu-btn");

menubtn.onclick = ()=>{
    menubtn.classList.add("hide");
    menu.classList.add("show");
    body.classList.add("disabled");}

function menuBtn(){
    menubtn.classList.add("hide");
    menu.classList.add("show");
    body.classList.add("disabled");}



cancelbtn.onclick = ()=>{
    menubtn.classList.remove("hide");
    menu.classList.remove("show");
    body.classList.remove("disabled");}

function cancelBtn(){
    menubtn.classList.remove("hide");
    menu.classList.remove("show");
    body.classList.remove("disabled");}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");}










// About Image Function
function imageSwip(){
    let index=0;
    let indexTwo=1;
    const imageSrcOne=document.getElementById("imageAboutOne");
    const imageSrcTwo=document.getElementById("imageAboutTwo");
    var x = window.matchMedia("(min-width: 768px)");
    const data=["static/intro/images/html.png","static/intro/images/css.png","static/intro/images/javascript.png","static/intro/images/django.png","static/intro/images/react.png"];


    imagesSwipFinal();
    function imagesSwipFinal(){
    if (x.matches){
        imageSrcOne.style.display="block";
        imageSrcTwo.style.display="none";
        if (index>=data.length){
            index=0;
        }
            imageSrcOne.src=data[index];
            index++;
        }
        else{
            imageSrcOne.style.display="block";
            imageSrcTwo.style.display="block";
            if (index>=data.length){
                index=0;
            }
            if (indexTwo>=data.length){
                indexTwo=0;
            } 
            imageSrcOne.src=data[index];
            imageSrcTwo.src=data[indexTwo];
            index++; 
            indexTwo++;
        }
    setTimeout(imagesSwipFinal,3000);
    }
}







// myproject Function
function next(){
    const main=document.getElementById("main");
    const images=main.getElementsByClassName("image");
    main.append(images[0]);
}

function pre(){
    const main=document.getElementById("main");
    const images=main.getElementsByClassName("image");
    main.prepend(images[images.length-1])
}

function swip(x){
    const mainSlider=document.getElementById("mainSlider");
    mainSlider.style.opacity="0%";
    
    setTimeout(()=>{
        mainSlider.src=x.src;
        mainSlider.style.opacity="100%";},400);
    const proText=document.getElementById("projectText");
    const textData=["This is First Web","This is Second Web","This is three Web","This is four Web","This is five Web","This is Six Web","This is Seven Web","This is Eight Web","This is Nine Web","This is Ten Web","This is Eleven Web","This is Twelve Web"];
    proText.innerHTML="";
    typePro(textData[x.id]);
}

function typePro(strPro){
    let proIndex=0;
    typefinal();
    function typefinal(){
    const proText=document.getElementById("projectText");
    if (proIndex<=strPro.length){
    proText.innerHTML+=strPro.charAt(proIndex);
    proIndex++;
    setTimeout(typefinal,50)}
    else{
        proIndex=0;
    }
}
    
}


// Client Comment Function
function client(){

    const clientPic=document.getElementById("pic");
    const clientName=document.getElementById("name");
    const clientComment=document.getElementById("commentText");
    const clientOnText=document.getElementById("onText");
    const clientStar=document.getElementsByClassName("star");
    const clientData=[["static/intro/images/ClientOne.jpg","clearinvestors","Amazing! knowledge and communication are exceptional. Would highly recommend to anyone looking for someone to help with their project.","On Fiver",5],
    ["static/intro/images/ClientTwo.jpg","cleakingjalen620","very quick and easy will def be working again","On Fiver",4],
    ["static/intro/images/ClientThree.jpg","steniasantos","Excellent professional, delivers much more than expected. Very satisfied, we will be working again soon.","On Upwork",5],
    ["static/intro/images/ClientFour.jpg","tsmith12","Sam is top notch hands down here on Fiverr! I will be doing more business with him soon. Highly recommend!","On Fiver",5]];
    let clientIndex=0;
    clientFinal();
    function clientFinal(){
    if(clientIndex>=clientData.length){
        clientIndex=0;
    }
    else{
        clientPic.src=clientData[clientIndex][0];
        clientName.innerHTML=clientData[clientIndex][1];
        clientComment.innerHTML=clientData[clientIndex][2];
        clientOnText.innerHTML=clientData[clientIndex][3];
        for (let i = 0; i < clientStar.length; i++) {
            clientStar[i].src="static/intro/images/star.png";    
          }
        for (let i = 0; i < clientData[clientIndex][4]; i++) {
            clientStar[i].src="static/intro/images/starActive.png";    
          }
    
        clientIndex++;
        }
        setTimeout(clientFinal,5000);
    }
}


// Header Function
function initailType(){

    const headerText=document.getElementById("headerText");
    const textArray=["I am Mudasir","Welcome To Site"];
    let textCounter=0;
    let charCounter=0;

    function type(){
        if(charCounter<textArray[textCounter].length){
        headerText.innerHTML+=textArray[textCounter].charAt(charCounter);
        charCounter++;
        setTimeout(type,200)
        }
        else{
        setTimeout(erase,1000);   
        }
    }



    function erase(){
        if (0 < charCounter){
        headerText.textContent=textArray[textCounter].substring(0,charCounter-1);
        charCounter--;
        setTimeout(erase,100);
        }
        else{
            textCounter++;
            if (textCounter===2){
                textCounter=0;}
            setTimeout(type,1000);
        }
    }
    type();
}

// Form Validaiton function
function formValidation(){
    let validity=true;
    const fName=document.forms["myForm"]["fName"].value;
    const lName=document.forms["myForm"]["lName"].value;
    const email=document.forms["myForm"]["email"].value;
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

function headerPic(){
    pictureHeaderOne=document.getElementById('headerpic');
    let transValueX=Math.floor(Math.random()*(19)-1);
    let transValueY=Math.floor(Math.random()*(19)-1);
    let valueX=transValueX.toString()
    let valueY=transValueY.toString()
    pictureHeaderOne.style.transform="translate(" + valueX + "px," + valueY + "px)";
    // picMove(pictureHeaderOne)
    setTimeout(headerPic,2000)
}
function headerbackPic(){
    pictureHeaderOne=document.getElementById('headerBackpic');
    let transValueX=Math.floor(Math.random()*(49)-1);
    let transValueY=Math.floor(Math.random()*(49)-1);
    let valueX=transValueX.toString()
    let valueY=transValueY.toString()
    pictureHeaderOne.style.transform="translate(" + valueX + "px," + valueY + "px)";
    // picMove(pictureHeaderOne)
    setTimeout(headerbackPic,5000)
}
function picMove(picture){
    let transValueX=Math.floor(Math.random()*(49)-1);
    let transValueY=Math.floor(Math.random()*(49)-1);
    let valueX=transValueX.toString()
    let valueY=transValueY.toString()
    picture.style.transform="translate(" + valueX + "px," + valueY + "px)";

    // console.log(transValue)
    setTimeout(picMove,5000);
}
headerPic();
headerbackPic()
