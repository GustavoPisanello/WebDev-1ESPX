import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nivel: "avancado",
      tempoxp: "4 Anos",
      color: "blue"
    },
    {
      titulo: "CSS",
      nivel: "básico",
      tempoxp: "1 Anos",
      color: "red"
    },
    {
      titulo: "React",
      nivel: "quase nada",
      tempoxp: "3 semanas",
      color: "green"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
          <Card data={habilidades}/>
    </div>
  );
}

export default Skills;