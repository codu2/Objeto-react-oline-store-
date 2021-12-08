import React, { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const validEmail = value => value.includes('@');
const validPostalCode = value => value.trim().length === 5;

const Checkout = props => {
    const [formValidity, setFormValidity] = useState({
        name: true,
        email: true,
        postalCode: true,
        address: true
    })
    //입력하기 전에는 form이 유효하지 않으나 에러 상태를 알려주기 위한 상태이므로 default 값을 모두 true로 함

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const postalCodeInputRef = useRef();
    const addressInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const isValidName = !isEmpty(enteredName);
        const isValidEmail = validEmail(enteredEmail);
        const isValidPostalCode = validPostalCode(enteredPostalCode);
        const isValidAddress = !isEmpty(enteredAddress);

        setFormValidity({
            name: isValidName,
            email: isValidEmail,
            postalCode: isValidPostalCode,
            address: isValidAddress
        })

        const formIsValid = isValidName && isValidEmail && isValidPostalCode && isValidAddress;
        
        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            email: enteredEmail,
            postalCode: enteredPostalCode,
            address: enteredAddress
        })
    };

    const nameInputClasses = `${classes['checkout-input']} ${formValidity.name ? '' : classes.invalid}`;
    const emailInputClasses = `${classes['checkout-input']} ${formValidity.email ? '' : classes.invalid}`;
    const postalCodeInputClasses = `${classes['checkout-input']} ${formValidity.postalCode ? '' : classes.invalid}`;
    const addressInputClasses = `${classes['checkout-input']} ${formValidity.address ? '' : classes.invalid}`;

    return (
        <form className={classes['checkout-form']} onSubmit={confirmHandler}>
            <h1>Order Sheet</h1>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" autoComplete="off" ref={nameInputRef} />
                {!formValidity.name && <p className={classes['error-message']}>Please enter a valid name!</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" autoComplete="off" ref={emailInputRef} />
                {!formValidity.email && <p className={classes['error-message']}>Please enter a valid email (includes '@')!</p>}
            </div>
            <div className={postalCodeInputClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" autoComplete="off" ref={postalCodeInputRef} />
                {!formValidity.postalCode && <p className={classes['error-message']}>Please enter a valid postal code (5 characters long)!</p>}
            </div>
            <div className={addressInputClasses}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" autoComplete="off" ref={addressInputRef} />
                {!formValidity.address && <p className={classes['error-message']}>Please enter a valid Address!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel} className={classes.cancel}>Cancel</button>
                <button className={classes.confirm}>Confirm</button>
            </div>
        </form>
    )
};

export default Checkout;