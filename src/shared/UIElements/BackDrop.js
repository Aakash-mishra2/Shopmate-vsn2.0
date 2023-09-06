import './Backdrop.css';
import { ReactDOM } from 'react';
export default function BackDrop(props) {
    return ReactDOM.createPortal(<div className='backdrop' onClick={props.onClick}></div>, document.getElementById('backdrop'));
}