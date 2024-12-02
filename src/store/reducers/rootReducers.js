const initState = {
    users: [
        { id: 1, name: 'Ro' },
        { id: 2, name: 'abc' },
        { id: 3, name: 'van' },
        { id: 4, name: 'hoa' },
        { id: 5, name: 'nam' },

    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            // code block
            console.log("DELETE USER: ", action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            // code block
            let id = Math.floor(Math.random() * 10000)
            let user = {
                id: id,
                name: `random - ${id}`
            }
            return {
                ...state,
                users: [...state.users, user]
            };

        default:
            // code block
            return state
    }
}

export default rootReducer;