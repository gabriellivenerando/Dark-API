import React from 'react';
import api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cast: [] };

  }


  async componentDidMount() {

    const response = await api.get("17861/cast");

    console.log(response.data)
    this.setState({cast: response.data });
  }

  
  render() {
    const {cast} = this.state;
    return (
      <div className="App">
          {cast.map(cast => {
            return <>
                    <p>{cast.person.name}</p>
                    <p>{cast.character.name}</p>
                    
                   
                    </>
           
           
           
           
           
          })}

         
       </div>
    
      
    );
  }
};

export default App;
