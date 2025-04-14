import { FaReact } from "react-icons/fa";
import { DiNodejs, DiScrum } from "react-icons/di";
import { SiMongodb, SiExpress, SiGooglecloud, SiGithub, SiTypescript } from "react-icons/si";
import "./TechGrid.css";

const TechGrid = () => {
  const icons = [
    { id: 1, icon: <FaReact />, name: "React" },
    { id: 2, icon: <SiTypescript />, name: "TypeScript" },
    { id: 3, icon: <SiExpress />, name: "Express" },
    { id: 4, icon: <DiNodejs />, name: "Node.js" },
    { id: 5, icon: <SiMongodb />, name: "MongoDB" },
    { id: 6, icon: <SiGooglecloud />, name: "Google Cloud" },
    { id: 7, icon: <SiGithub />, name: "GitHub" },
    { id: 8, icon: <DiScrum />, name: "Scrum" },
  ];

  return (
    <section className="section-tech" id="tech">
      <h5>Mi stack</h5>
      <h2>de desarrollo</h2>
      <div className="container grid-container">
        {icons.map(({ id, icon, name }) => (
          <div key={id} className="icon-card">
            <div className="icon">{icon}</div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechGrid;
