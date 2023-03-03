import axios from 'axios'

const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data)
    }
    catch(err){
        console.log('Error while calling add user Api', err);
    }
}

export const getUser = async () => {
    try{
     return await axios.get(`${URL}/all`)
    }catch(error){
        console.log('Error while calling getUser API', error)
    }
}