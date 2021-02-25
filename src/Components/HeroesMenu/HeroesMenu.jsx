import React, {useEffect} from 'react'
import './HeroesMenu.css';
import Paginator from "./Paginator";
import {NavLink} from "react-router-dom";

const HeroesMenu = (props) => {
    useEffect(() => {
        props.loadHeroesThunk(parseInt(props.match.params.page))
    }, [props.match.params.page])

    const deleteHero = (nickname) => () => {
        props.deleteHeroThunk(nickname)
    }
    return <div className={'main'}>
        {props.count > 5 && <Paginator count={props.count}/>}
        {
            props.heroes ? props.heroes.map((hero) => {
                    return <div className={'wrapMain'}>
                        <img src={hero.images[0]} alt="hero image"/>
                        <span>{hero.nickname}</span>
                        <NavLink to={'/edithero/' + hero._id}>
                            Edit
                        </NavLink>
                        <button onClick={deleteHero(hero.nickname)}>Delete</button>
                    </div>
                })
                : "No heroes added, add at least one hero"
        }
    </div>
}

export default HeroesMenu;