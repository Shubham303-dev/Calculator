let currentDisplayValue = '';
    let display=document.querySelector('#display');
    display.value='';

    function deleteActionPerform(){
      currentDisplayValue =display.value.slice(0,currentDisplayValue.length-1);
      display.value=currentDisplayValue;
    }

    function resetActionPerform(){
      currentDisplayValue='';
      document.querySelector('#display').value=currentDisplayValue;
    }

    function digitActionPerform(buttonInput){
      currentDisplayValue+=buttonInput;
      display.value=currentDisplayValue;
    }

    function operatorActionPerform(operator){
      if(display.value=='' && (operator=='+' || operator=='-')){
        currentDisplayValue+=operator;
        display.value=currentDisplayValue;
      }
      else if(display.value!=''){
        if(!display.value.endsWith('+') && !display.value.endsWith('-') && !display.value.endsWith('*') && !display.value.endsWith('/') && !display.value.endsWith('.')){
          currentDisplayValue+=operator;
          display.value=currentDisplayValue;
        }
      }
      
    }

    function equalsActionPerform(){
      currentDisplayValue=eval(currentDisplayValue);
      document.querySelector('#display').value=currentDisplayValue;
    }