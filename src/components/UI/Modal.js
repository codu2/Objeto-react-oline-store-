import React from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
       {props.children}
    </div>
};

const Modal = props => {
    return <React.Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
    </React.Fragment>
}

export default Modal;

//React.portal을 이용하기 위해서 public - index.html의 <div id="root"></div> 위에
//<div id="overlays"></div>를 추가해줌
//Backdrop component와 ModalOverlay component를 Modal component에 넣어서 같이
//<div id="overlays"></div>의 위치로 이동시킬 것임

//그 다음 react-dom에서 ReactDom을 import 시킨 다음
//portal 시킬 component들을 {ReactDom.createPortal()}에 넣어줌 