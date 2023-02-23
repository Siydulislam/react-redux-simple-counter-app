import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    // pass action
    return next(action);
};

// Currying function
function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
curriedMultiply(1)(2)(3);

export default myLogger;