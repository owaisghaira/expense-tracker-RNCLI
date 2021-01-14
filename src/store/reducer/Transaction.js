const INTITIAL_STATE = {
    transaction: [
        { id: 1, title: 'lunch', price: -150 },
        // { id: 2, title: 'tea', price: -40 },
        // { id: 3, title: 'income', price: 1000 },
        // { id: 4, title: 'dinner', price: -130 },
    ]
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                transaction: [...state.transaction, action.data]
            })
            case "DELETEDATA":
            return ({
                ...state,
                transaction:state.transaction.filter((trnt)=> trnt.id !== action.data)
            })
    }
    return state;
}