import Reat from 'react';

const withClass = (props)=> {
    return <div className={props.class}>
        {props.children}
    </div>
    
}
export default withClass;