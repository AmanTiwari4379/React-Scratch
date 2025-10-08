import { useState } from "react";
function App(){
    const [skills, setSkills] = useState([]);
    const handleSkills = (event)=>{ 
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
        <h3>Select Your Skills</h3>
        <input type="checkbox" id="php" value="PHP" onClick={handleSkills}/>
        <label htmlFor="php">PHP</label>
        <br /><br />

        <input type="checkbox" id="js" value="JS" onClick={handleSkills}/>
        <label htmlFor="js">JS</label>
        <br /><br />

        <input type="checkbox" id="node" value="Node" onClick={handleSkills}/>
        <label htmlFor="node">Node</label>
        <br /><br />

        <input type="checkbox" id="java" value="Java" onClick={handleSkills}/>
        <label htmlFor="java">Java</label>
        <br /><br />
        <h3>{skills.toString()}</h3>
        </div>
    )
}
export default App;