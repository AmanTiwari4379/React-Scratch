import Login,{Profile,Setting, UserId}  from "./UserComponent";
function App(){
    return(
        <div>
            <h2>Importing Components</h2>
            <Login />
            <Profile />
            <Setting />
            <h3>{UserId}</h3>
        </div>
    )
}
export default App;