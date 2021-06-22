import './App.scss';
import React from 'react';
import Header from './header';
import Main from './main';
import Results from './results';
import Footer from './footer';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:[],
      headers:'',
      count : 0  
    }
    this.handelForm=this.handelForm.bind(this);
  }
  
  handelForm=(results , count ,headers )=>{
    this.setState({results,count,headers})
  }

  render(){
    return(
      <React.Fragment>  
      <Header/>
      <Main handler = {this.handelForm} />
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
