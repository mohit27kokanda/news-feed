import React from 'react'
import './Button.css'

// const STYLES =['btn--primary','btn--outline','btn--test'];
//  const SIZES = ['btn--medium','btn--large'];
export const Button =({
    children, type,onClick, buttonStyle,buttonSize
}) =>{
    // const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    // const checkButtonSizes =SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
       <a href="/sign" className="btn-mobile">
           <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
           onClick={onClick}
           type={type}

           >

               {children}
           </button>
       </a> 
    )
};