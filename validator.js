function Validator(option){
 
  // cấu trúc tìm thẻ cha của 1 thẻ con bất kì
  function getParent(element,selector){
    while(element.parentElement){
      if(element.parentElement.matches(selector)){//so sánh element.ParentElement có  bằng với selector hay không
        return element.parentElement;
      }
      element  = element.parentElement;// gán input đầu vào bằng input vừa kiểm tra xong
    }

  }
  /**************************************************************************** */
  function Validate(inputElement,rule){
    
    var errorMessage = rule.test(inputElement.value);
     // cách lấy thẻ cha từ thẻ con là  var errorElement = inputElement.parentElements;
    var errorElement = getParent(inputElement,option.formGroupSelector).querySelector('.form-message');
        if(errorMessage){
          
          errorElement.innerText = errorMessage;
          getParent(inputElement,option.formGroupSelector).classList.add('invalid')// dùng để thêm hiệu ứng khi nhập sai yêu cầu invalid dc viết trong file css
        }
        else{
          errorElement.innerText = '';
          
          getParent(inputElement,option.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;
  }
  //lấy element của form cần tìm 
  var formElement = document.querySelector(option.form);
  if(formElement){

    // nút nhấn
    formElement.onsubmit = function(e){
      e.preventDefault();//tắt chuyển trang đi
      var isFormValid = true;
      option.rules.forEach(function(rule){
        var inputElement = formElement.querySelector(rule.selector);
       
        var isValid =  Validate(inputElement,rule);
        if(!isValid){
          isFormValid = false;
        }
      });
      if(isFormValid){
        if(typeof option.onSubmit === 'function'){
          var enableInput = formElement.querySelectorAll('[name]')
          
          var formValues = Array.from(enableInput).reduce(function(value,input){
            value[input.name]=  input.value 
            return value;
          },{});
          option.onSubmit(formValues)
        }
      }

      
    }
  
    //
    option.rules.forEach(function (rule){
      var inputElement = formElement.querySelector(rule.selector);
      
     
     
     if(inputElement){
       inputElement.onblur = function () {
        // console.log(inputElement.value); lấy giá trị từ input khi ta blur ra ngoài
        Validate(inputElement,rule);
      }
      // xử lý mỗi khi người dùng nhập vào input thì nó sẽ mất chữ đỏ hiện lỗi
      inputElement.oninput = function(){
        var errorElement = getParent(inputElement,option.formGroupSelector).querySelector('.form-message');
        errorElement.innerText = ' ';
        getParent(inputElement,option.formGroupSelector).classList.remove('invalid');
      }

     }

    })
  }

}

Validator.isRequired = function(selector){
  return {
    selector:selector,// selector #fullName
    test: function(value) {
      
      return value.trim() ? undefined : 'vui lòng nhập tên đầy đủ';

    }
  };
}
Validator.isEmail = function(selector){
  return {
    selector:selector,
    test: function(value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : 'vui lòng nhập Email';
    }
  };
}
Validator.minLenght = function(selector,min){
  return {
    selector:selector,
    test: function(value) {
     
      return value.length >= min ? undefined : `vui lòng nhập tối thiểu ${min} ký tự` ;
    }
  };
}
Validator.isConfirmed = function(selector, getConfirmValue, message){
  return{

    selector:selector,
    test: function(value){
      return value === getConfirmValue() ? undefined :message ||'giá trị nhập vào không chính xác'
    }
  }
}