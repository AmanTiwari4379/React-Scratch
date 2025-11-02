import { Link } from "react-router"
export default function Pagenotfound(){
    return(
        <div style={{textAlign:'center'}}>
            <div>
                <Link to='/'>Go to home page</Link>
            </div>
            <img src="https://png.pngtree.com/png-vector/20220103/ourmid/pngtree-404-error-page-not-found-png-image_4181763.png" alt="" />
        </div>
    )
}
