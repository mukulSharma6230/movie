import axios from "axios";
const UrlUser="http://localhost:9090/api/users/";

class MovieService{
    

    createUser(user){
        const url ="http://localhost:9090/api/users/register"
        return axios.post(url,user);

        
    }
    loginUser(user){
        const url ="http://localhost:9090/api/users/login"
        return axios.post(url,user);
    }
}
export default new MovieService()