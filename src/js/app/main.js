  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let phone = document.getElementById("tel")
  let fio = document.querySelectorAll("input[type=text]")
  let messageCloud = document.querySelector(".validationMassage")
  let message = document.getElementsByClassName("massage")[0];
  let submit = document.querySelector("input[type=submit]")
 


    email.addEventListener("input",emailValid);
    password.addEventListener("input",passwordValid);
    phone.addEventListener("input",phoneValidate);
    fio.forEach((e)=>e.addEventListener("input",function(){
        if(!e.value.search(/[a-z]*[a-zA-Z][^\W*\d]{1,20}$/g)){
            validationProgress.fio = true;
          messageCloud.classList.remove("show");
      }else{
          validationProgress.fio = false;
        messageCloud.classList.add("show");
          message.innerHTML =  "Name must contain only letters!"
      }
      }))

  function emailValid(){
    if(!email.value.search(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/m)){
      messageCloud.classList.remove("show");
      validationProgress.email = true;
    }else{
        validationProgress.email = false;
      messageCloud.classList.add("show");
      message.innerHTML = "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'!"
    }
    }

    function passwordValid(){
      if(!password.value.search(/^(?=.*\d).{5,10}$/m)){
        messageCloud.classList.remove("show");
        validationProgress.password = true;
    }else{
       validationProgress.password = false;
      messageCloud.classList.add("show");
        message.innerHTML =  "Password must contain at least 5 characters. Including numbers and letters!"
    }
    }

    function phoneValidate(){
      if(!phone.value.search(/(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/g)){
        messageCloud.classList.remove("show");
        validationProgress.phone = true;
    }else{
      messageCloud.classList.add("show");
      validationProgress.phone = false;
        message.innerHTML =  "Phone number is not valid. Please entri phone in format +12345678910!";
    }
    }
  
    let validationProgress = {
        email:false,
        password:false,
        phone:false,
        fio:false
    }

    let form = document.querySelector("form")
    submit.addEventListener("click",checkValidation);
   
    function checkValidation(e){
        let count = 0;
        e.preventDefault();
        for (let values in validationProgress){
            if(validationProgress[values] == true){
                messageCloud.classList.remove("show");
                 count++
                 if(count == 4){
                    form.submit();
                 }
            }else{
                messageCloud.classList.add("show");
                message.innerHTML = "Please entri correct information!";
                break
            }
           
        }
    }


let anchors = document.querySelectorAll("a[href*='#']");
let gate = document.querySelector(".gate");
let gate_bottom = document.querySelector(".gate_bottom")
let iframe = document.querySelector(".map")
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      setTimeout(()=>{iframe.classList.add("hiden")},400)
      setTimeout(()=>{gate.style.top = "-48vh"},400)
      setTimeout(()=>{gate_bottom.style.top="48vh"},40)
      setTimeout(()=>{
        const blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'auto'
      })
      },1000)
      setTimeout(()=>{gate.style.top = "-110vh"},1500)
      setTimeout(()=>{gate_bottom.style.top="200vh"},1500)
      setTimeout(()=>{iframe.classList.remove("hiden")},1680)
    });
  }


   

    

    