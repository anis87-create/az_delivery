import axios from 'axios';
const API_URL= '/api/users';
const register = async(userData,  thunkAPI) => {
    try {
      const response = await axios.post(API_URL, userData);
      if(response.data){
        localStorage.setItem('user', response.data)
      }
      return response.data;
    } catch (error) {
        const errors = error.response && error.response.data.errors;
        return thunkAPI.rejectWithValue(errors);
    }
}


const authService = {
    register
}


export default authService;