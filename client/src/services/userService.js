import axios from 'axios';
const API_URL= '/api/users';
const register = async(userData,  thunkAPI) => {
    try {
      const response = await axios.post(API_URL, userData);
      if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data;
    } catch (error) {
        const errors = error.response && error.response.data.errors;
        return thunkAPI.rejectWithValue(errors);
    }
}


const login = async(userData, thunkAPI) => {
  try {
      const response = await axios.post(API_URL, userData);
      localStorage.setItem('token', response.data.token);
      return response.data;
  } catch (error) {
        const errors = error.response && error.response.data.errors;
        return thunkAPI.rejectWithValue(errors);
  }
}


const authService = {
    register,
    login
}


export default authService;