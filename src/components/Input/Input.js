import React from 'react';
import './Input.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = ['InputElement'];
    
  if (props.invalid && props.touched) {
    inputClasses.push('Invalid');
  }  

  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
      break;
    default:
      inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
  }
  
  return (
    <div>
      <label className='Label'>{props.elementConfig.label}</label>
      {inputElement}
    </div>
  );
}

export default input;