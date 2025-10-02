import Wrapper from "./Wrapper"
import Wrapper2 from "./Wrapper2"
function WrapperDemo(){
    return(
        <div>
            <h1>Props in react</h1>
            <Wrapper />
            <Wrapper2>
                 <h3>Hello</h3>
            </Wrapper2>
        </div>
    )
}
export default WrapperDemo