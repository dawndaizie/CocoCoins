import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div>
            <Link
            to="/login"
            className="text-2xl">
                TO LOGIN
            </Link>
        </div>
    )
}
export default Landing