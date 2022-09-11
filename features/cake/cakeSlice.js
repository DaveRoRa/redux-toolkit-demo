const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

//Create a slice per modular division with toolkit createSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  /*Create the reducers for the slice*/
  reducers: {
    /*Directly change the value of the state, don't return it*/
    ordered: (state) => {
      state.numOfCakes--;
    },
    /*Use the payload that is in the action*/
    restocked: (state, action) => {
      state.numOfCakes += action.payload || 1;
    },
  },
});

//Export both the slice reducer (as default) and the actions (as name export)
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
