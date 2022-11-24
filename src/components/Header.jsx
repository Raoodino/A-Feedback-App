import React from "react"
import PropTypes from 'prop-types'


function Header({ text, bgColor, textColor }) { //props为在App.js中写入的 Hello World
  
    //把style汇总放到这里
  const headerStyles ={
    backgroundColor: bgColor,
    color: textColor,

  }
    return (
   <header style={ headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
   </header>
 
  )
}

//默认的props放在此处
//如果前面App.js中没有写就默认是显示这里的props
Header.defaultProps = {
    text: 'Feedback UI', 
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes ={
    text: PropTypes.string,  //可以用来检查前面在App.js中放的格式对不对
    bgColor: PropTypes.string,
    textColor: PropTypes.string

}
export default Header