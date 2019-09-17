import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.person.map((person, index)=>{
        return <Person 
                  key={person.id} 
                  click={() => props.clicked(index)}
                  change={(event)=>props.changed(event ,person.id)}
                  name={person.name} 
                  age={person.age}
                  isAuth ={props.isAuthenticated}
                  />
      })

      export default persons;
