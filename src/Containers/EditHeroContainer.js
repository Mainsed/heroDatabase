import {connect} from 'react-redux';
import React from "react";
import EditHero from "../Components/EditHero/EditHero";
import {withRouter} from "react-router-dom";
import {setHero, photoDelete, photoAdd, confirmChangesThunk} from "../Redux/superHeroPageReducer";

const mapStateToProps = (state) => {
    return {
        hero: state.superHeroPage.hero,
    }
}
const EditHeroContainer = connect(mapStateToProps,
    {setHero, photoDelete, photoAdd, confirmChangesThunk})
(withRouter(EditHero));
export default EditHeroContainer
