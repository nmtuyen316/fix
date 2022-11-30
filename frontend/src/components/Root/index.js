// import axios from "axios";
import Logout from "../../helpers/handleAuth/Logout"
export default function Root() {
    return (
        <button onClick={Logout}>Logout</button>
    )
}