import firebase from '../Config/Firebase/Firebase'

const cashData = (obj) => {
    delete obj.warning
    return dispatch => {
        firebase.firestore().collection('CashPaymentUsers').add(obj).then(() => {
            dispatch({ type: 'CASH_DATA_ADD_SUCCESS', payload: 'Thanks For Donation' })
            setTimeout(() => {
                dispatch({ type: 'RESET', payload: '' })
            }, 3000);
        }).catch(err => {
            dispatch({ type: 'ERR', payload: err.message })
        })
    }
}


const cardData = (obj) => {
    delete obj.warning
    return dispatch => {
        firebase.firestore().collection('CardPaymentUsers').add(obj).then(() => {
            dispatch({ type: 'CARD_DATA_ADD_SUCCESS', payload: 'Thanks For Donation' })
            setTimeout(() => {
                dispatch({ type: 'RESET', payload: '' })
            }, 3000);
        }).catch(err => {
            dispatch({ type: 'ERR', payload: err.code })
        })
    }
}


const foodData = (obj) => {
    delete obj.warning

    return dispatch => {
        firebase.firestore().collection('FoodUsers').add(obj).then(() => {
            dispatch({ type: 'FOOD_DATA_ADD_SUCCESS', payload: 'Thanks For Donation' })
            setTimeout(() => {
                dispatch({ type: 'RESET', payload: '' })
            }, 3000);
        }).catch(err => {
            dispatch({ type: 'ERR', payload: err.message })
        })
    }
}

const landData = (obj) => {
    delete obj.warning
    return dispatch => {
        firebase.firestore().collection('LandUsers').add(obj).then(() => {
            dispatch({ type: 'LAND_DATA_ADD_SUCCESS', payload: 'Thanks For Donation' })
            setTimeout(() => {
                dispatch({ type: 'RESET', payload: '' })
            }, 3000);
        }).catch(err => {
            dispatch({ type: 'ERR', payload: err.message })
        })
    }
}

const goodsData = (obj) => {
    delete obj.warning
    return dispatch => {
        firebase.firestore().collection('GoodsUsers').add(obj).then(() => {
            dispatch({ type: 'GOODS_DATA_ADD_SUCCESS', payload: 'Thanks For Donation' })
            setTimeout(() => {
                dispatch({ type: 'RESET', payload: '' })
            }, 3000);
        }).catch(err => {
            dispatch({ type: 'ERR', payload: err.message })
        })
    }
}


const contactData = (obj) => {

    delete obj.warning
    return dispatch => {
        firebase.firestore().collection('contacts').add(obj).then(() => {
            dispatch({ type: 'CONTACT_DATA_ADD_SUCCESS', payload: 'Thanks For Contact us' })
            setTimeout(() => {
                dispatch({ type: 'RESET', payload: '' })
            }, 3000);
        }).catch(err => {
            dispatch({ type: 'ERR', payload: err.message })
        })
    }
}


export {
    cashData,
    cardData,
    foodData,
    landData,
    goodsData,
    contactData
}