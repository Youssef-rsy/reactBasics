import React , {Component ,useState} from 'react';
import './containers/App.css';
import Person from './components/Persons/Person/Person';

const AppUseState = (props) =>  {

  // useStae Hooks return always 2 element 
  const [personState , setPersonSate] = useState({
    person : [
      {name:'Youssef' , age:24},
      {name:'Max' , age:28},
      {name:'Stephanie' , age:26},
    ]
  });


  const [dummyData , setDumyData] = useState({
    title:'React Tuto' 
  });


  const swithchAge = ()=>{
    setDumyData({
        title:'React Tuto !!!!!' 
      });
    setPersonSate({
      person : [
        {name:'Youssef Rossamy ' , age:24},
        {name:'Maxumiaum nava' , age:28},
        {name:'Stephanie okh' , age:26},
      ]
    });
    
  }
  
    return (
      <div className="App">
        <h1> Welcom to the "{dummyData.title}"</h1>
        <button onClick={swithchAge}> Switch</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}>and I love : Code</Person>
        <Person name={personState.person[2].name} age={personState.person[2].age}/>
      </div>
    );
  }


export default AppUseState;
