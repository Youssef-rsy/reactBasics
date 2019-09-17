import React , { useRef , useEffect,useContext } from 'react';
import Aux from '../../hoc/Auxillaire';
import AuthContext from '../../context/auth-context';

const cockpit = (props)=>{
/*
    const toggleBtn = useRef(null);

   useEffect(() => {
     toggleBtn.current.click();
     console.log("using contextType now i can access my context in my componnet for example the authenticated value is :" ,this.authContext.authenticated);
     return () => {
      console.log(" useEffect cleanUp ")
     };
   }, []);
 

   const authContext  = useContext(AuthContext);
*/
    const style= {
        backgroundColor:'blue',
        font:'inherit',
        border:'1px solid blue',
        padding :'8px',
        cursor:'pointer'
      }

    let classes = ['red','bold'].join(' ');//red bold
   
    return (
     
        <Aux>
            <h1> Hi i'm REact App</h1>
            <p className={classes}>This.is really working</p>
            <button 
            style={style}
            onClick={props.showPersones}
            //ref={toggleBtn}
            > Switch</button>
            <AuthContext.Consumer>
              {(context)=><button onClick={context.login}>LogIn</button>}
            </AuthContext.Consumer>
      </Aux>
    );
}

export default React.memo(cockpit);