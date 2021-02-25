import {createHero, deleteHero, getHeroes} from "../Api/api";

const CREATE_HERO = "CREATE_HERO";
const DELETE_HERO = "DELETE_HERO";
const SET_HEROES = "LOAD_HEROES";

const superHeroesReducer = (state = {currentPage: 1}, action) => {
    switch (action.type) {
        case SET_HEROES: {
            return {...state, heroes: action.heroes && [...action.heroes], count: action.count}
        }
        case CREATE_HERO: {
            return {...state, heroes: [...state.heroes, action.hero]}
        }
        case DELETE_HERO: {
            return {...state, heroes: [...state.heroes.filter((hero) => hero.nickname !== action.nickname)]}
        }
        default:
            return state;
    }
}

export default superHeroesReducer;

export const setHeroes = (heroes, count) => {
    return {type: SET_HEROES, heroes, count}
}
export const heroDelete = (nickname) => {
    return {type: DELETE_HERO, nickname}
}
export const createHeroThunk = (heroInfo) => async (dispatch) => {
    await createHero(heroInfo);
}
export const loadHeroesThunk = (page = 1) => async (dispatch) => {
    const resp = await getHeroes(page);
    dispatch(setHeroes(resp.data.heroes, resp.data.count));
}
export const deleteHeroThunk = (nickname) => async (dispatch) => {
    await deleteHero(nickname);
    dispatch(heroDelete(nickname));
}