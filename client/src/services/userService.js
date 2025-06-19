import axios from 'axios';
const API_URL= 'http://localhost:5000/api/users';
const register = async(userData,  thunkAPI) => {
    try {
      const response = await axios.post(API_URL+'/register', userData);
      if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data;
    } catch (error) {
        const errors = error.response && error.response.data.errors;
        console.log(errors);
        
        return thunkAPI.rejectWithValue(errors);
    }
}


const login = async(userData, thunkAPI) => {
  try {
      const response = await axios.post(API_URL+'/login', userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAuth', true);
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