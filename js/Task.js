// variables nav
const  openNav =document.getElementById("openNav");
const closeNav =document.getElementById("closeNav");

// variables form
var passError =document.querySelector(".passError")
var password =document.getElementById("password")

var EmailError =document.querySelector(".EmailError")
var Email =document.getElementById("Email")

var iconPassWord =document.getElementById("icon-password")
// End form


// ============================================================

const myul =document.querySelector(".myul");
openNav.onclick=function(){
   openNav.classList.toggle("fa-xmark")
   myul.classList.toggle("showw")

}


var love  =document.querySelectorAll(".fa-heart");
love.forEach((lovee)=>{
   lovee.addEventListener("click" , function(e){
   lovee.classList.toggle("tog")

const content =e.target.parentElement.parentElement.parentElement.getElementsByClassName("love")[0]
var count =content.innerHTML
if(lovee.classList.contains("tog")){
count++
   content.innerHTML = count
}else{
   count--
   content.innerHTML = count

}
   })



})


var navbar =document.querySelector(".navbar")
var myUl =document.querySelector(".myul")


window.onscroll = function(){
   if(scrollY > 200){
       navbar.classList.add('showww');
       myUl.classList.add("specialUl")

      }
   else{
       navbar.classList.remove('showww');
       myUl.classList.remove("specialUl")

      }
}




//  start  simple validation 


function validEmail (){


   
   if(Email.value.indexOf("@") == -1 || Email.value.length <=0 ){
      EmailError.style.display ="block"
      EmailError.innerHTML=" please Enter avalid Email"

  }
  else if (Email.value.indexOf("@") != -1 && Email.value.length > 0){
   EmailError.style.display ="none"
   EmailError.innerHTML=""

  }
}

function validPass(){

   if(password.value.length < 7){
      passError.style.display ="block"
      passError.innerHTML="Password should be of minumum 8 characters length"
  
  
  }
  
  else{
      passError.innerHTML=""
      passError.style.display ="none"
  
  }
  
}

iconPassWord.addEventListener("click" , function(){
   if(password.type==="password"){
      password.type="text"
      iconPassWord.classList.remove("fa-eye-slash")
      iconPassWord.classList.add("fa-eye")
   }
   else{
      password.type="password"
      iconPassWord.classList.add("fa-eye-slash")
   }
   
})

var textError = document.querySelector(".textError");
var text =document.getElementById("text").value
var btnBooking=document.querySelector(".btn-booking")

btnBooking.addEventListener("click" , function(){
   console.log("a")
   if(text ===""){
      textError.style.display ="block"
      textError.innerHTML="name is required"
   } if(password.value  === ""){
      passError.style.display ="block"
      passError.innerHTML=" Password is required"

   }

   if(Email.value === ""){
      EmailError.style.display ="block"
      EmailError.innerHTML=" Emial is required"

   }
})

// End vsimple validation
