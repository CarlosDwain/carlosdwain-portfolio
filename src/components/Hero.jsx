import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Carlos' personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Carlos 👋</h1>
        <p>
          I am a dual major graduate in Electronics Engineering and Physics from Mapúa University, passionate about data and semiconductor technology. I thrive on transforming complex information into practical solutions and exploring innovations in next-generation electronic devices.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/CarlosDwain"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/CarlosDwain"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-dwain-sorallo-54a596154/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;