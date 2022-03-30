import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

//Компонент Header

function Header(){
    return(
        <div className="Header">
            <Link to="/"><img src="images\Header\Header_phone.png" alt="phone" width="60px"/></Link>
            <Button variant="contained">Text</Button>

        </div>

    )
}

export default Header