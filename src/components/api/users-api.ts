import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

export const usersAPI = {
    getAllUsers: (searchQuery: string):Promise<AxiosResponse> => {
        return instance.get(`?term=`+searchQuery.toLowerCase());
    },
}