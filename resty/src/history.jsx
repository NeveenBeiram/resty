import React from 'react';



class History extends React.Component {

    hisClickHandler = e =>{
      let method = e.target.method.value;
      let url = e.target.url.value;
      let body = e.target.body.value;
      this.props.historyHandler(method, url ,body);

        
        }
    
    render (){
        return (
            <React.Fragment>
            <ul>
               {
                   this.props.arr.map(item=>{
                    let str = item.split(',')
                    let method = str[0];
                    let url = str[1];
                    let body = str[2] 
                    return (
                        <form onSubmit={this.hisClickHandler}>
                        <input type="hidden" value={str[0]} name="method"/>
                        <input type="hidden" value={str[1]} name="url"/>
                        <input type="hidden" value={str[2]} name="body"/>
                        <li><button type='submit'>{method}</button>   {url} , body is {body}</li>
                        </form>
                    )
                   })

                }
            </ul>
            </React.Fragment>
        )
    }
}  





export default History;
