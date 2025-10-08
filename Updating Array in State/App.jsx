import { useState } from "react";

function App(){
    const [data,setData] = useState(['Aman', 'Abhimanyu', 'Arjun', 'Ashwatthama'])
    const handleUsers=(name)=>{
        data[data.length - 1] = name;
        console.log(data);
        setData([...data])
    }
    const [dataDetail,setDataDetail] = useState([
        {name: 'Aman', age: 23},
        {name: 'Angad', age: 25}
    ])
    const handleAge=(name)=>{
        dataDetail[dataDetail.length - 1].age = age ;
        console.log(dataDetail);
        setDataDetail([...dataDetail])
    }
    return(
        <div>
            <h3>Updating Array in State</h3>
            <input type="text" placeholder="Enter Last User Name" onChange={(e)=>handleUsers(e.target.value)} />
            {
                data.map((item,index)=>(
                    <h3 key={index}>{item}</h3>
                ))
            }
            <hr />
            <input type="text" placeholder="Enter Last User Name" onChange={(e)=>handleAge(e.target.value)} />
            {
                dataDetail.map((item,index)=>(
                    <h3 key={index}>{item.name},{item.age}</h3>
                ))
            }
        </div>
    )
}
export default App;