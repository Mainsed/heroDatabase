import {connect} from 'react-redux';
import React from "react";
import HeroesMenu from '../Components/HeroesMenu/HeroesMenu';
import {createHeroThunk, loadHeroesThunk, deleteHeroThunk} from "../Redux/superHeroesReducer";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        heroes: state.superHeroes.heroes,
        count: state.superHeroes.count,
        curPage: state.superHeroes.currentPage,
    }
}

const HeroesMenuContainer = connect(mapStateToProps,
    {createHeroThunk, loadHeroesThunk, deleteHeroThunk})(withRouter(HeroesMenu))
export default HeroesMenuContainer;