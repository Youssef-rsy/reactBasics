import React , { Component,useEffect , useState ,Fragment } from 'react';

import PropTypes from "prop-types";

import './Person.css';
import Aux from '../../../hoc/Auxillaire';
import withClass from '../../../hoc/withClassHOC';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    componentDidMount(){
       // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log("using contextType now i can access my context in my componnet for example the authenticated value is :" ,this.context.authenticated);
    }
     /*
    //takes method as arguments , get executed for every method cycle 
    useEffect(()=>{
        console.log('[Person.js useEffect ...]');
        //Http Request ..... 
    }
    ,[props.name] //run when ever the props.name Change
    // use [] to make it run once === componentDidMount
    );
        */
       
   
    // <Aux> is the same as <Fragment> from React.Fragment
    render(){
        console.log('[Person.js rendering ...]');
        return (
            <Aux> 
                <AuthContext.Consumer>
                    { (context)=>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please logIn !</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and i have {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    ref ={(inputEl)=>{this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    onChange={this.props.change} 
                    value={this.props.name}/>
                
            </Aux>
        )
    }
    
};

Person.propTypes ={
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    change :PropTypes.func

}
export default withClass(Person , "");