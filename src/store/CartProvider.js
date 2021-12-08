import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    total: 0
}

//action은 'ADD'일 경우 추가하는 item, 'REMOVE'일 경우 삭제되는 item의 데이터
//action은 이것을 사용하는 dispatch 함수에서 넘겨주는 데이터 자체
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotal = state.total + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        //만약 state 즉 기존에 존재하는 아이템들 중 어떤 아이템의 아이디가 현재 추가하려는 아이템의 아이디와 같다면 해당 아이템의 인덱스를 저장

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem, amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            //updateItems에 기존에 있던 아이템들을 일단 다 담아놓고 그 다음 구해놓은 인덱스를 사용해서
            //이미 카트 아이템에 있지만 amount를 더 추가하려는 아이템을 찾아서 amount 값을 업데이트 해놓은 updatedItem과 같게 해줌
        } else {
            updatedItems = state.items.concat(action.item);
            //카트에 없는 새로운 아이템을 추가하고자 한다면 concat()함수를 사용해서 추가할 아이템을 items에 추가하여 updatedItems를 새로운 배열로 만들어줌
        }

        return {
            items: updatedItems,
            total: updatedTotal
        }
    }

    if(action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

        const existingItem = state.items[existingItemIndex];

        const updatedTotal = state.total - existingItem.price;

        let updatedItems;

        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {
                ...existingItem, amount: existingItem.amount - 1
            }

            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            total: updatedTotal
        }
    }
    
    if(action.type === 'CREAR') {
        return defaultCartState;
    }

    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemToCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }
    
    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'})
    }

    const cartContext = {
        items: cartState.items,
        total: cartState.total,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: clearCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
