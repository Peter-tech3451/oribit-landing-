import './Navbar.css'
import logoImg from '../assets/orbit logo 1.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">
          <img src={logoImg} alt="Orbit logo" />
        </div>
      </div>

      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#initiatives">Initiatives</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="btn-donate">Donate Now</a>
    </nav>
  )
}

export default Navbar
