import './App.scss';
import React from 'react';
import Header from './header';
import Main from './main';
import Results from './results';
import Footer from './footer';
import History from './history';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:[],
      headers:'',
      count : 0 ,
      array:[],
      method:'',
      url:'',
      body:{} 
    }
    this.handelForm=this.handelForm.bind(this);
    this.handleHistory=this.handleHistory.bind(this);
  }
  
  handelForm=(results , count ,headers,array )=>{
    this.setState({results,count,headers,array})
  }

  handleHistory(method,url,body){
    this.setState({method:method,url:url,body:body})
  }

  render(){
    return(
      <React.Fragment>  
      <Header/>
      <History historyHandler={this.handleHistory} arr={this.state.array} />
      <Main handler = {this.handelForm} method={this.state.method}url={this.state.url} body={this.state.body}/>
      <Results count = {this.state.count} results={this.state.results} headers={this.state.headers}/>
      <Footer/>
      </React.Fragment>
    )
  }
}

// function App() {
//   return (
//     <React.Fragment>
//       <Header />
//       <Main />
//       <Footer />
//     </React.Fragment>
//   );
// }

export default App;
