import {Redirect, Route} from "react-router-dom";
import React from "react";
import HeroesMenuContainer from "../Containers/HeroesMenuContainer";
import CreateHeroContainer from "../Containers/CreateHeroContainer";
import EditHeroContainer from "../Containers/EditHeroContainer";

class RouteController extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <Route path={'/'} render={() => <Redirect to={'/main/1'}/>}/>
                <Route exact path={'/main/:page?'} render={() => <HeroesMenuContainer/>}/>
                <Route path={'/createhero'} render={() => <CreateHeroContainer/>}/>
                <Route path={'/edithero/:id?'} render={() => <EditHeroContainer/>}/>
            </div>
        )
    }
}

export default RouteController;
