
   var getName = document.getElementById("name")

   var getEmail = document.getElementById("email")
   var getPassword = document.getElementById("password")
   var getPrePassword = document.getElementById("pre-password")

   
   var getForm = document.getElementById("form__login")
   getForm.addEventListener("submit", function(e){
     e.preventDefault();
      const nameValue = getName.value;
      const passwordValue = getPassword.value;
      const emailValue = getEmail.value;
      const passworPreValue = getPrePassword.value;
      console.log("emailValue",emailValue)
      console.log("passworPreValue",passworPreValue)
      if(nameValue === ""){
      setError(getName,"vui lòng điền đầy đủ thông tin")
      }
      else{
        setSuccess(getName)
      }
      if(passwordValue === ""){
      setError(getPassword,"vui lòng điền đầy đủ thông tin")
      }
      else{
        setSuccess(getPassword)
      }
      if(passworPreValue === ""){
        setError(getPrePassword,"vui lòng điền đầy đủ thông tin")
        }
        else{
          setSuccess(getPrePassword)
        }
      if(passworPreValue !== passwordValue){
        setError(getPrePassword,"password không giống nhau")
      }
      else{
      setSuccess(getPrePassword)
      }
      if(isEmail(emailValue)){
        setSuccess(getPrePassword)
      }
      else{
        setError(getEmail,"vui lòng điền đầy đủ thông tin")
      }
   })

   
  
   
 
 function getParent(input,selector){
  while(input.parentElement){
    if(input.parentElement.matches(selector)){
      return input.parentElement;
    }
    input = input.parentElement;
  }
 }
 function setError(input,message){
  var form = getParent(input,".form__group")
  var small = form.querySelector("small");
  small.innerHTML = message;
  form.classList.add("error")

 }
 function setSuccess(input){
  var form = getParent(input,".form__group")
  form.classList.add("success");
 }
 function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}