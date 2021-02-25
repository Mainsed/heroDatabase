import {connect} from 'react-redux';
import React from "react";
import {createHeroThunk} from "../Redux/superHeroesReducer";
import CreateHero from "../Components/CreateHero/CreateHero";

const mapStateToProps = (state) => {
    return {}
}

const CreateHeroContainer = connect(mapStateToProps, {createHeroThunk})(CreateHero)
export default CreateHeroContainer;