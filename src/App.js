import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomeData from './App1'
import axios from 'axios';

function ServerData(props){
  console.log(props);
  return(

    <div>
      {props.data.map(item =>{
         return item.title
      })}
      </div>
  )
  
}

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          name: 'react',
          data: []
      }
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
          console.log(res);
          console.log(res.data);

          let data = res.data;

          this.setState({ data });
          console.log('state data', this.state.data);
      })
      .catch((err) => {
          console.log(err);
      })
  }

  // handleOnChangeEvent = (event) => {
  //     console.log(event.target.value);

  //     var value = event.target.value;

  //     this.setState({ name: value });
  // }

  render(props) {
     

      console.log('render will be called');
      console.log(this.props);


      let { data } = this.state;

      return (
          <div className="App">
              We are now using the class component!
              
              <h1>I'm {this.props.name}</h1>
              
              <div>
              <ServerData data={this.state.data}/>
              </div>


              <input type="text" onChange={this.handleOnChangeEvent} />

              <div>
                <h1>
                  <SomeData/>
                </h1>
              </div>
              {/* <ul>
                  {
                      data.map((item,index) => {
                          return (
                              <li key={index}>{item.title}</li>
                          )
                      })
                  }
              </ul> */}
          </div>
      )
  }
}

export default App;
