import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            A detail-oriented individual with a strong work ethic who wants to consistently deliver results. 
            Eager to apply my skills and knowledge in computer networking, IT, AI, electronics and sciences 
            in real-world applications.</p>
          {/* <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to
            complex enterprise-level applications. I am experienced in working with a variety of development
            tools and frameworks, including React, Angular, Vue.js, Node.js, and Laravel. I am always eager
            to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.</p> */}
        </div>
        <div className="about-img">
          <Image src='/images/profile.jpg' className="profile-img" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;