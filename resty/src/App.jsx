import './App.scss';
import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      results:[],
      url:'',
      headers:{}
       
    }
  }
  handelForm=(results , count ,headers , url)=>{
    this.setState({results, count,headers,url})
  }

  render(){
    return(
      <React.Fragment>  
      <Header/>
      <Footer/>
      <Main handler = {this.handelForm} />
      {/* <Results res = {this.state}/> */}
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
