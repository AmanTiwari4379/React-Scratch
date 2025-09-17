import { useState } from "react";
function HandleRatioDropdown(){
   const [gender, setGender] = useState();
    return(
        <div>
        <h3>Handle Radio and Dropdown</h3>
        <h4>Select Gender</h4>
        <input type="radio" onChange={(e)=> setGender(e.target.value)} name="gender" id="Male" value={"Male"} />
        <label htmlFor="Male">Male</label>
        <input type="radio"onChange={(e)=> setGender(e.target.value)} name="gender" id="Female" value={"Female"} />
        <label htmlFor="Female">Female</label>
        <h4>Selected Gender: {gender}</h4>
        <h4>Select City</h4>
        <select defaultValue={"delhi"}>
            <option value="noida">Noida</option>
            <option value="gurgaon">Gurgaon</option>
            <option value="delhi">Delhi</option>
        </select>
        </div>
    )
}
export default HandleRatioDropdown;