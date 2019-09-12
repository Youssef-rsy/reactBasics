import React , {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state ={
    person : [
      {id:1, name:'Youssef' , age:24},
      {id:2, name:'Max' , age:28},
      {id:3, name:'Stephanie' , age:26},
    ],
    showPerson:false
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
    this.setState({
      person : persons,
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

  render(){
    const style= {
      backgroundColor:'blue',
      font:'inherit',
      border:'1px solid blue',
      padding :'8px',
      cursor:'pointer'
    }

    let persons = null;
    if( this.state.showPerson ){
      persons = ( <div>
        { 
          this.state.person.map((person, index)=>{
          return <Person 
          key={person.id} 
          click={() => this.deletePerson(index)}
          change={(event)=>this.setNewName(event ,person.id)}
          name={person.name} 
          age={person.age}/>
        })}
      </div>);
      style.backgroundColor = 'red';
    }
    
    let classes = ['red','bold'].join(' ');//red bold
      

    return (
      <div className="App">
        <h1> Hi i'm REact App</h1>
        <p className={classes}>This.is really working</p>
        <button 
          style={style}
          onClick={this.showPersones}> Switch</button>
          {persons}
          
      </div>
    );
  }
}

export default App;
