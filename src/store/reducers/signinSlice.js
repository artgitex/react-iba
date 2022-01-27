import  {createSlice} from "@reduxjs/toolkit";

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

            if (state.username === 'testAdmin@gmail.com' && state.password === '12345yuiopp') {
                state.userrole = 'Admin';
            } else {
                state.userrole = 'User';
            }

            sessionStorage.setItem('submitted', user.signedin);
            sessionStorage.setItem('username', user.username);
            //sessionStorage.setItem('password', user.password);
            sessionStorage.setItem('userrole', state.userrole);                       
            
        },
        signout: (state, action) => {
            state.submitted = false;
            state.username = '';            
            state.password = '';
            state.userrole = ''; 
            
            sessionStorage.removeItem('submitted');
            sessionStorage.removeItem('username');
            //sessionStorage.removeItem('password');
            sessionStorage.removeItem('userrole');
        },
    }
})

export const { signin, signout } = signinSlice.actions;

export default signinSlice.reducer;