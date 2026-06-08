import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p>
          <strong>CONTACT US</strong>
        </p>
        <p>
          Email: orbitinitiatives@gmail.com &nbsp;|&nbsp; I.G @orbitinitiatives &nbsp;|&nbsp; X (formerly Twitter) @orbitinitiative
        </p>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#initiatives">Initiatives</a>
          <a href="#contact">Support</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://x.com/Orbitinitiative"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.16 4.7a4.28 4.28 0 0 0 1.33 5.71 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19 4.27 4.27 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97 8.58 8.58 0 0 1-5.31 1.83A8.76 8.76 0 0 1 2 19.54 12.1 12.1 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.36 8.36 0 0 0 22.46 6Z"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8.5V12h2.01V9.81c0-2 1.2-3.1 3-3.1.87 0 1.78.15 1.78.15v1.96h-1c-1 0-1.3.61-1.3 1.24V12h2.22l-.35 2.88H13V21.9A10 10 0 0 0 22 12Z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/orbitinitiatives"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.584.01 4.85.07 1.17.06 1.8.24 2.22.4.54.21.92.46 1.32.86.4.4.65.78.86 1.32.16.42.34 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.8-.4 2.22a3.72 3.72 0 0 1-.86 1.32 3.72 3.72 0 0 1-1.32.86c-.42.16-1.05.34-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.4a3.72 3.72 0 0 1-1.32-.86 3.72 3.72 0 0 1-.86-1.32c-.16-.42-.34-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.8.4-2.22.21-.54.46-.92.86-1.32.4-.4.78-.65 1.32-.86.42-.16 1.05-.34 2.22-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 2.1c-3.1 0-3.47.01-4.7.07-.96.05-1.48.22-1.83.37-.46.19-.8.42-1.15.77-.35.35-.58.7-.77 1.15-.15.35-.32.87-.37 1.83-.06 1.23-.07 1.6-.07 4.7s.01 3.47.07 4.7c.05.96.22 1.48.37 1.83.19.46.42.8.77 1.15.35.35.7.58 1.15.77.35.15.87.32 1.83.37 1.23.06 1.6.07 4.7.07s3.47-.01 4.7-.07c.96-.05 1.48-.22 1.83-.37.46-.19.8-.42 1.15-.77.35-.35.58-.7.77-1.15.15-.35.32-.87.37-1.83.06-1.23.07-1.6.07-4.7s-.01-3.47-.07-4.7c-.05-.96-.22-1.48-.37-1.83-.19-.46-.42-.8-.77-1.15-.35-.35-.7-.58-1.15-.77-.35-.15-.87-.32-1.83-.37-1.23-.06-1.6-.07-4.7-.07Zm0 3.5a6.3 6.3 0 1 1 0 12.6 6.3 6.3 0 0 1 0-12.6Zm0 2.1a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm5.4-2.48a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/orbit-initiatives"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.64h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21H17v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.15 1.45-2.15 2.95V21h-4V9Z"/>
            </svg>
          </a>
        </div>
     
      </div>

    </footer>
  )
}

export default Footer
