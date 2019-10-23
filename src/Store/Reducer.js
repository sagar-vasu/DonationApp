const initialState = {
    success: '',
    err: ''

}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CASH_DATA_ADD_SUCCESS":
            return { ...state, success: action.payload.concat() }

        case "CARD_DATA_ADD_SUCCESS":
            return { ...state, success: action.payload.concat() }

        case "GOODS_DATA_ADD_SUCCESS":
            return { ...state, success: action.payload.concat() }

        case "FOOD_DATA_ADD_SUCCESS":
            return { ...state, success: action.payload.concat() }

        case "LAND_DATA_ADD_SUCCESS":
            return { ...state, success: action.payload.concat() }

        case "CONTACT_DATA_ADD_SUCCESS":
            return { ...state, success: action.payload.concat() }

        case "RESET":
            return { ...state, success: action.payload.concat() }

        case "ERR":
            return { ...state, err: action.payload.concat() }

        default: return state
    }


}

export default Reducer