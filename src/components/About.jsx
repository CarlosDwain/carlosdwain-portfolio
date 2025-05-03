import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          My interests lie at the intersection of data and electronics. During my undergraduate years at Mapúa University, I discovered a strong passion for data while exploring courses in Data Science and Artificial Intelligence. 
          This pushed me to learn Python from scratch, complementing my background in C++ and robotics from Science High School.
          </p>
          <p>
          Alongside this, I maintained a deep fascination with electronics and semiconductor technology. 
          My thesis focused on the simulation and modeling of All-Spin Logic Devices—an emerging spintronic technology aimed at low-power, high-efficiency computing. 
          This research solidified my appreciation for the physics behind next-generation semiconductor devices.
          </p>
          <p>
          To deepen my understanding of data, I pursued certifications like the Huawei Certified ICT Associate – Artificial Intelligence (HCIA-AI) and completed multiple online courses on Coursera. 
          I’m currently following the Data Engineering track on DataCamp to expand my skills in building scalable, data-driven systems.
          </p>
          <p>
          Whether it's unlocking insights from data or diving into the physics of nanoscale devices, I find energy in solving complex problems. 
          I'm excited to explore where this dual passion in data and semiconductors will take me.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/profile2.jpg' className="profile-img" width={700} height={900}/>
        </div>
      </div>
    </div>
  )
}

export default About;