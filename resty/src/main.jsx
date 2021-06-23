
import React from 'react';
import './main.scss';
import Superagent from 'superagent';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
        method:'',
        body:{},
        array:[]
      }
      this.handleSubmit=this.handleSubmit.bind(this);
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
      let textBody = e.target.body.value;
      let req=this.state.url;
      // let raw=await fetch(req);
      let raw;
        if ((this.state.method === 'PUT' || this.state.method === 'POST') ){
            raw = await fetch(req , {method : this.state.method , body :  textBody ,mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },});

        }else if (this.state.method === 'GET' || this.state.method === 'DELETE' ) {

           raw = await fetch(req , {method : this.state.method});
        }
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
      let data=await raw.json();
      let array=[];
      if(data){
        let str=`${this.state.method},${this.state.url},${textBody}`;
        let oldR=JSON.parse(localStorage.getItem('request'))
        if(oldR){
          Object.values(oldR).map((item)=>{
            if(!array.includes(item)){
              array.push(item)
            }
          })
        }
        if(!array.includes(str)){
          array.push(str)
          localStorage.setItem('request',JSON.stringify(array));
        }
      }
      console.log('data',data);
      console.log('header',header);
      let results;
        if (data.results){
            results  = data.results;
        }else {
            results = data
        }
        let count;
        if (data.count){    
            count = data.count;
        }else {
            count = data.length
        }
      // const count=data.count;
      // const results=data.results;
      this.props.handler(results,count,header,array)
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>URL: </label>
              <input type="text"onChange={this.handleUrl}/>
              <button type="submit">Go!</button>
            <textarea rows="4" cols="50" id="textarea" name="body" placeholder="please enter a json body"></textarea>
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