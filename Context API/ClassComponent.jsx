import Student from "./Student";

export default function ClassComponent(){
    return(
        <div  style={{backgroundColor: 'blue', padding: 10}}>
            <h3>Class Component</h3>
            <Student />
        </div>
    )
}