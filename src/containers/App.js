import React , {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClassHOC';
import Aux from '../hoc/Auxillaire';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context'
class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js Constructor] ");

  }

  static getDerivedStateFromProps(props,state){
    console.log("[App.js getDerivedStateFromProps]" , props);
    return state;
  }
  state ={
    person : [
      {id:1, name:'Youssef' , age:'24'},
      {id:2, name:'Max' , age:28},
      {id:3, name:'Stephanie' , age:26},
    ],
    showPerson:false,
    changeCounter :0,
    authenticated:false
    }

  showPersones = ()=>{
    this.setState({
      showPerson : !this.state.showPerson
    })
  }
  setNewName= (event,id)=> {
    const persons = [...this.state.person];
    const personIndex =persons.findIndex(p=> {
      return p.id===id
    })
    persons[personIndex].name = event.target.value;
    
    this.setState((prevState , props)=>{
        return {
        person : persons,
        changeCounter: prevState.changeCounter + 1
        }
  })
  }
  deletePerson = (personIndex)=>{ 
    console.log("let's delet this shit indexed by "+personIndex);
    //const persons = this.state.person.slice(); 
    //equivalant in ES6 
    const persons = [...this.state.person]; // the spreads operation
    persons.splice(personIndex,1);
    this.setState({
      person:persons
    })
  }

  componentDidMount(){
    console.log("[App.js componentDidMount]");
  }

  //insecure will  be removed  componentWillMount

  authenticationHandler=()=>{
    this.setState({
      authenticated:true
    })
  }

  render(){
    console.log('[App.js render]');

    let persons = null;
    if( this.state.showPerson ){
      persons = ( 
          <Persons 
            person={this.state.person}
            clicked={this.deletePerson}
            changed={this.setNewName} 
            />);
    }

    return (

      <Aux>
        <AuthContext.Provider
          value={{
            authenticated : this.state.authenticated,
            login : this.authenticationHandler
        }}>
        
            <Cockpit showPersones={this.showPersones} />
            {persons}
        
       </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App,"App");
