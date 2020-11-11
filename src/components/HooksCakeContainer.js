import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BuyCakeAction} from '../redux';

function HooksCakeContainer() {
    const [orderCake, setOrderCake] = useState(0);
    const NumOfCakes = useSelector(state => state.NumOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {NumOfCakes}</h2>
            <input type="text" placeholder="Order cake amount"
             value={orderCake} onChange={e => setOrderCake(e.target.value)} />
            <button onClick={() => dispatch(BuyCakeAction(orderCake))}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
