import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>My passion for data began in my fourth year of college when I took Data Science and Artificial Intelligence courses. 
          At the time, I had no experience with Python—my only programming background was in C++, which I learned in Science High School through a robotics class. 
          That turning point opened a new world for me.</p>
          <p>During my thesis, I dove deeper by training a deep learning model, which fueled my curiosity even more. 
          To expand my knowledge, I took online courses on Coursera and earned the Huawei Certified ICT Associate – Artificial Intelligence (HCIA-AI) certification.</p>
          <p>Since then, I’ve continued to grow in the field. I’m currently taking the Data Engineering track on DataCamp to sharpen my skills and deepen my understanding. 
          Data continues to amaze me, and I’m excited to see where this passion will take me next.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/profile2.jpg' className="profile-img" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;