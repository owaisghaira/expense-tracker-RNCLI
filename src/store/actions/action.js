export const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })

    }
}

export const delete_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "DELETEDATA", data: data })

    }
}