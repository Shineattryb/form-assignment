
function error(element,msg){
    element.style.border='3px red solid';
    const parent=element.parentElement;
    const p=parent.querySelector('p');
    p.textContent=msg;
    p.style.visibility='visible';
}

function success(element,msg){
    element.style.border='3px green solid';
    const parent=element.parentElement;
    const p=parent.querySelector('p');

    p.style.visibility='hidden';
}
  const form=document.querySelector(".login-form")
  form.addEventListener("submit",(e)=>{
    // console.log("submitting form")
  })
        const userName=document.querySelector('#name');
        const email=document.querySelector('#email');
        const phone=document.querySelector('#phone');
        const submit=document.querySelector('#submit'); 
        const checkbox=document.querySelector('#terms1'); 

        submit.addEventListener('click',(event)=>{
            event.preventDefault();
            //name validation
            // var nameRegex = /^[a-zA-Z]/;
           var nameRegex= /^[a-zA-Z][a-zA-Z\s]*$/;
            if(userName.value.trim()==''){
                error(userName,'name cannot be empty');
            }
            else if(!nameRegex.exec(userName.value)){
                // console.log("")
                error(userName,'name should contain alphabets')
              }
              else{
               success(userName,'name should contain alphabets')
              }
            

        if(email.value.trim()==="" || !email.value.trim().includes('@') ){
            error(email,'email format:-abc@gmail.com');
        }else {
            success(email,'correct');
        }

      if(phone.value.trim()===""){
        error(phone,'phone-number is empty');
      }else if( phone.value.match(/\d/g).length>10 ||phone.value.match(/\d/g).length<10  ){
        error(phone,'phone-number must be of 10 digits');
      }else {
        success(phone,'correct');
      }
      
     
    })
   
    checkbox.addEventListener('click',()=>{
        console.log(checkbox.checked);
        if(checkbox.checked){
        
            document.querySelector("#submit").disabled=false;
      }else {
        console.log("entering into this true")
        document.querySelector("#submit").disabled=true;
      }
    })
            