import React from "react";
import {NavLink} from "react-router-dom";

const Paginator = props => {
    return (
        <div>
            {
                [...Array(Math.ceil(props.count / 5)).keys()].map((_, i) => {
                    return <NavLink to={'/main/' + (i + 1)}>{i + 1}</NavLink>
                })
            }
        </div>
    )
}

export default Paginator;