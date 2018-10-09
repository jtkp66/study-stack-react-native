export const selectedLibrary = (libraryId) => { //action creator
    return {
        type: 'select_Library',
        payload: libraryId
    };
};

// We have an object with a type property 
// An object with a type property is an action
// An action is how we cause our reducers to update the data
// that they produce
// action is wrapped by a function 
// Function is an action creator
// whenever we call this action creator 
// the returned action will automatically be dispatched
// and sent off to all of our reducers 
