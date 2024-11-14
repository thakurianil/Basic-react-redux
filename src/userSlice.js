import{createSlice} from "@reduxjs/toolkit";

const initialState = {
    userList: ['asd','asd']
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        setUserList : (state, action) = >{
            state.userList = [..state.userList,
            action.payload];
        }
    }

})

const { reducer, actions } = userSlice

export default reducer;