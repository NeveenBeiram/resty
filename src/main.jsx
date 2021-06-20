
import React from 'react';
import './main.scss';
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: 'http://localhost:3000',
        method:'GET'
      }
    }
    handleUrl = e =>{
        let url = e.target.value;
        this.setState ({url})
    };

    handleClick = e =>{
        e.preventDefault ()
        let method = e.target.value;
        this.setState ({method})
    }
  
    render() {
      return (
        <div>
            <form>
                <label>URL: </label>
              <input type="text"onChange={this.handleUrl}/>
              <button>Go!</button>
            </form>
            <div id="buttonDiv">
            <button onClick={this.handleClick} value="GET">GET</button>
            <button onClick={this.handleClick} value="POST">POST</button>
            <button onClick={this.handleClick} value="PUT">PUT</button>
            <button onClick={this.handleClick} value="DELETE">DELETE</button>
            </div>
            <section id="section">
          <p> {this.state.method} : {this.state.url} </p>
            </section>
        </div>
      );
    }
  }

  export default Main;