import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Carlos' Portfolio
        </Link>
      </div>
      <a href="resume/resume.pdf" target='_blank' className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;