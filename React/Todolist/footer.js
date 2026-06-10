import React from 'react'
import "./Footer.css"

const Footer = () => {
    let footerStyle={
        
   position: "relative",
  top:"50vh",
  width: "100%"

    }
  return (
    <footer className="bg-dark text-light text-center py-3" style={footerStyle}>
     <p className="mb-0"> Copyright &copy; 2023 Mytodolist.com</p>
    </footer>
  )
}

export default Footer
