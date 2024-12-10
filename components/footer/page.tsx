"use client"

export default function Footer(){
  function handleScroll(element: HTMLElement ){
    element.scrollIntoView({ behavior: "smooth"});
  }
    return(
         <footer className="footer">
      <div className="footer-content">
      <a onClick={(e)=>{
          e.preventDefault()
          const element=document.getElementById("home") as HTMLElement
          handleScroll(element)
        }}><div className="footerLogo">
        UBAID<span> QURESHI</span>
      </div></a>
        <nav className="footer-nav">
          <a onClick={(e)=>{
          e.preventDefault()
          const element=document.getElementById("about") as HTMLElement
          handleScroll(element)
        }}>About</a>
          <a onClick={(e)=>{
          e.preventDefault()
          const element=document.getElementById("project") as HTMLElement
          handleScroll(element)
        }}>Projects</a>
          <a onClick={(e)=>{
          e.preventDefault()
          const element=document.getElementById("home") as HTMLElement
          handleScroll(element)
        }}>Contact</a>
        </nav>
        <div className="footer-info">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}