import * as axios from "axios";

export const getHeroes = async (page) => {
    return await axios.post('/api/superhero/get', {page})
}
export const createHero = async (heroInfo) => {
    return await axios.post('/api/superhero/add', {...heroInfo});
}
export const getHero = (id) => {
    return axios.post('/api/superhero/find', {id}).then((resp) => {
        return resp.data.hero;
    });
}
export const editHero = async (hero) => {
    return await axios.post('/api/superhero/edit', {...hero})
}
export const deleteHero = async (nickname) => {
    return await axios.post('/api/superhero/delete', {nickname})
}
