const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/iceCream/iceCreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

//This autoexecutable function is for being able to wait
//for an asynchronous action
(async () => {
console.log("Initial State", store.getState());
/*Subscribe to execute the callback function everytime
  a dispatch is triggered*/
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

/*Run a slice action inside the store dispatch*/
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
//The payload is the action function argument
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));

//It has to wait for fetchUsers cuz it's a asynchronous action,
//otherwise the app unsubscribes before the action is fulfilled
await store.dispatch(fetchUsers());
unsubscribe();
})();
