import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss'
class Results extends React.Component{

render(){
    return(
        // https://swapi.dev/api/people'
        <React.Fragment>
        <div>
        <p>Headers : <JSONPretty data= {this.props.headers}></JSONPretty></p>
                    <p>count is {this.props.count}</p>
                    <p>Results : <JSONPretty  data={this.props.results}></JSONPretty> </p>
        </div>
        </React.Fragment>
    )
}

}

export default Results;
