import { useEffect, useRef } from "react"

function MessagePass({passwordRegister}){
  const letter = useRef();
  const capital = useRef();
  const number = useRef();
  const len = useRef();
  const nonWord = useRef();
  useEffect(()=>{
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordRegister.match(lowerCaseLetters)) {
      letter.current.style = 'display:none;';
    } else {
      letter.current.style = 'display:block;';
    }
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
      if(passwordRegister.match(upperCaseLetters)) {
        capital.current.style = 'display:none;';
      } else {
        capital.current.style = 'display:block;';
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(passwordRegister.match(numbers)) {  
        number.current.style = 'display:none;';
      } else {
        number.current.style = 'display:block;';
      }
      var nonWords = /\W/g;
      if(passwordRegister.match(nonWords)){
        nonWord.current.style = 'display:none;';
      }else{
        nonWord.current.style = 'display:block;';
      }
      // Validate length
      if(passwordRegister.length >= 8) {
        len.current.style = 'display:none;';
      } else {
        len.current.style = 'display:block;';
      }
    }
,[passwordRegister])
    return(
      <span className='messagePass'>
      <ul>
      <li ref={letter}>A lowercase letter. </li>
      <li ref={capital}>A capital (uppercase) letter. </li>
      <li ref={number}>A number. </li>
      <li ref={nonWord}>A special character. </li>
      <li ref={len}>Minimum 8 characters.</li>
      </ul>
      </span>
  )
}
export default MessagePass