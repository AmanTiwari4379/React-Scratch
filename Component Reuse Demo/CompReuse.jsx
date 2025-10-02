import User from "./User";

function CompReuse(){
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
            <h3>Reuse Component in Logo</h3>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <User data={user}/>
                    </div>
                ))
            }
        </div>
    )
}
export default CompReuse;