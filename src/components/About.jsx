import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>My passion for data sparked when I took my Data Science and Artificial Intelligence classes when I was 
            in my 4th year in college. Before that, I have no idea on how Python works, I only know c++ back then because
            I was in a Science High School where I have robotics class. After that, I took my thesis and it was all 
            about training a deep learning model. I took Coursera courses and joined the Huawei Certified ICT 
            Associate - Artificial Intelligence (HCIA-AI) just to widen my understanding on data.  
          </p>
          <p>Fast forward today, I learned a lot and I plan to continue growing. I am taking the Datacamp courses on 
          the data engineering track. It has been a year or two now when I first embark my journey on data. Until now, 
          data still amazes me and I think I just found my passion. Well, let's see on how far I can take this passion. 
          Thank you for reading!</p> 
        </div>
        <div className="about-img">
          <Image src='/images/profile2.jpg' className="profile-img" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;