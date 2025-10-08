function App(){
    const userData = [
    {
        name: "Aman",
        email: "aman@gmail.com",
        id: 1
    },
    {
        name: "Arjun",
        email: "arjun@gmail.com",
        id: 2
    },
    {
        name: "Abhimanyu",
        email: "abhimanyu@gmail.com",
        id: 3
    }
]
    return(
        <div>
            <h2>Loop in jsx with Map Function</h2>
            <table border="1">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default App;