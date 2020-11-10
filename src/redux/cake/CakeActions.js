import {BUY_CAKE_TYPE} from './CakeTypes';

export const BuyCakeAction = (NUMCAKE) => {
    return {
        type: BUY_CAKE_TYPE,
        payload: NUMCAKE,
        info: "Order # of cakes"
    }
}