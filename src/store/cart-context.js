import React from 'react';

const CartContext = React.createContext({
    items: [],
    total: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

//디폴트 데이터를 만들어줌
//그 다음 변수로 저장해줌 - 사용할 수 있도록

export default CartContext;