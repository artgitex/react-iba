import  {createSlice} from "@reduxjs/toolkit";
import {ADMIN_ROLE, USER_ROLE, ADMIN_EMAIL, ADMIN_PASS} from '../../constants/global';

const signinSlice = createSlice({
    name: 'loging',

    initialState: {        
        submitted: sessionStorage.getItem('submitted'),
        username: sessionStorage.getItem('username'),
        password: '',
        userrole: sessionStorage.getItem('userrole')
    },

    reducers: {
        signin: (state, action) => {
            const user = action.payload;            
            state.submitted = user.signedin;
            
            state.username = user.username;
            state.password = user.password;

            if (state.username === ADMIN_EMAIL && state.password === ADMIN_PASS) {
                state.userrole = ADMIN_ROLE;
            } else {
                state.userrole = USER_ROLE;
            }

            sessionStorage.setItem('submitted', user.signedin);
            sessionStorage.setItem('username', user.username);            
            sessionStorage.setItem('userrole', state.userrole);                       
            
        },
        signout: (state, action) => {
            state.submitted = false;
            state.username = '';            
            state.password = '';
            state.userrole = ''; 
            
            sessionStorage.removeItem('submitted');
            sessionStorage.removeItem('username');            
            sessionStorage.removeItem('userrole');
        },
    }
})

export const { signin, signout } = signinSlice.actions;

export default signinSlice.reducer;