import React from 'react';

class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            first : '',
            last : '',
            addr : ''
        }

    }

    handleChange = (event) =>{
        // console.log(event.target.value);
        var {name,value} = event.target;
        this.setState({[name] : value})

    }
    render(){
        return (
            
            <div>
                <table border = '1px' cellSpacing ='4px' cellPadding = '5px' width  = '100%' >
                    <tbody>
                    <tr>
                        <td><label>Firstname</label></td>
                        <td><input type = "text" name ="first"  onChange ={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>Lastname</label></td>
                        <td><input type = "text" name ="last"  onChange ={this.handleChange} /></td>
                    </tr>
                    </tbody>
                </table>
                <h1>FulllName - {this.state.first.charAt(0).toUpperCase()}{this.state.first.slice(1)}{' '}{this.state.last}</h1>

            </div>


        )}
}

export default App2;
