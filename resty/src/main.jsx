
import React from 'react';
import './main.scss';
import Superagent from 'superagent';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
        method:''
      }
    }
    handleUrl = e =>{
        let url = e.target.value;
        this.setState ({url})
    };

    // handleClick =async (e) =>{
    //     e.preventDefault ()
    //     let method = this.method;
    //     let raw = await Superagent.get(this.state.url,{})
    //     let headers={headers:raw.headers}
    //     let results={results:raw.body.results}
    //     this.props.handler(raw.body.count,results,headers)
    // }
    // handleClick =e=>{
    //   // e.preventDefault()
    //   // let method =e.target.value;
    //   // this.setState({method})
    // }

    handelMethod=(e)=>{
      // this.setState({method:e.target.value})
      e.preventDefault()
      let method =e.target.value;
      this.setState({method})
    }
    handleSubmit =async e =>{
      e.preventDefault();
      let req=this.state.url;
      let raw=await fetch(req);
      let header =await fetch(req).then((res)=>{
        for(let pair of res.headers.entries()){
          let str='';
          for(let i=0;i<pair.length;i++){
if(i%2===0){
  str=str+pair[i]+ ': '+pair[i+1]
}
          }return str;
        }
      });
      let data=await raw.json()
      console.log('header',header);
      const count=data.count;
      const results=data.results;
      this.props.handler(results,count,header)
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>URL: </label>
              <input type="text"onChange={this.handleUrl}/>
              <button type="submit">Go!</button>
            </form>
            <div id="buttonDiv">
            <button onClick={this.handelMethod} value="GET">GET</button>
            <button onClick={this.handelMethod} value="POST">POST</button>
            <button onClick={this.handelMethod} value="PUT">PUT</button>
            <button onClick={this.handelMethod} value="DELETE">DELETE</button>
            </div>
            <section id="section">
          <p> {this.state.method} : {this.state.url} </p>
            </section>
        </div>
      );
    }
  }

  export default Main;