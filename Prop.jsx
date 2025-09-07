function Prop({user,myname,myage}){
    return(
        <div>
            <h2>First Method:</h2>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <h2>Second Method:</h2>
            <h4>Name: {myname}</h4>
            <h4>Age: {myage}</h4>
        </div>
    )
}
export default Prop;