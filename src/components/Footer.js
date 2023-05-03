import { Link, useLocation } from "react-router-dom"


const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2023</p>
        
        {useLocation().pathname !== '/about' && (
          <Link className="link" to="/about">About</Link>
        )}
    </footer>
  )
}

export default Footer