

function AddUser({setUser}){
    
    return(
        <div>
            <h3>Add User</h3>
            <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Enter User Name" />
            <hr />
        </div>
    )
}
export default AddUser;