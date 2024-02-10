import skillsData from './skillsData'; // Adjust the path as needed

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        {skillsData.map((skill, index) => (
          <div key={index} className={`skill-card ${skill.name.toLowerCase()}`}>
            <i className={skill.iconClass}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
