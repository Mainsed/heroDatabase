import {editHero} from "../Api/api";

const SET_HERO = "LOAD_HERO";
const DELETE_PHOTO = "DELETE_PHOTO";
const ADD_PHOTO = "ADD_PHOTO";

const superHeroPageReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_HERO: {
            return {...state, hero: action.hero}
        }
        case DELETE_PHOTO: {
            return {
                ...state,
                hero: {
                    ...state.hero, images: state.hero.images
                        .filter((_, index) => index !== action.index)
                }
            }
        }
        case ADD_PHOTO: {
            return {...state, hero: {...state.hero, images: [...state.hero.images, action.src]}}
        }
        default:
            return state;
    }
}

export default superHeroPageReducer;

export const setHero = (hero) => {
    return {type: SET_HERO, hero}
}
export const photoDelete = (index) => {
    return {type: DELETE_PHOTO, index}
}
export const photoAdd = (src) => {
    return {type: ADD_PHOTO, src}
}
export const confirmChangesThunk = (hero) => async (dispatch) => {
    await editHero(hero);
}