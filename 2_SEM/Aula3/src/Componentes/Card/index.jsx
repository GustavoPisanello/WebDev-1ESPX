export default function Card({data}){
    return (
        <>
        {
            data.map(skill => (
                <div className="skill-card" style={{backgroundColor: skill.color}}>
                    <h3>{skill.titulo}</h3>
                    <p>{skill.nivel}</p>
                    <p>{skill.tempoxp}</p>
                </div>
            ))
        }
        
        </>
    )
}