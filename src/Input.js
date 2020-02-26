import React from 'react';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            first : '',
            last : '',
            addr : '',
            phone : '',
            email : ''
        }

    }
    handleFirst = (first) =>{
        // console.log(event.target.value);
        var v = first.target.value;
        this.setState({first :v})

    }

    handlelast = (last) =>{
        // console.log(event1.target.value);
        var v1 = last.target.value;
        this.setState({last :v1})

    }
    handleaddr = (addr) =>{
        // console.log(event1.target.value);
        var v1 = addr.target.value;
        this.setState({addr :v1})

    }
    handlephone = (phone) =>{
        // console.log(event1.target.value);
        var v1 = phone.target.value;
        this.setState({phone :v1})

    }
    handleemail = (email) =>{
        // console.log(event1.target.value);
        var v1 = email.target.value;
        this.setState({email :v1})

    }
    
    render(){
        return (
            
            <div>
                <table border = '1px' cellSpacing ='4px' cellPadding = '5px' width  = '100%' >
                    <tbody>
                    <tr>
                        <td><label>Firstname</label></td>
                        <td><input type = "text" name ="first"  onChange ={this.handleFirst}/></td>
                    </tr>
                    <tr>
                        <td><label>Lastname</label></td>
                        <td><input type = "text" name ="last"  onChange ={this.handlelast} /></td>
                    </tr>
                    <tr>
                        <td><label>Address</label></td>
                        <td><input type = "text" name ="addr" onChange ={this.handleaddr} /></td>
                    </tr>
                    <tr>
                        <td><label>Phone</label></td>
                        <td><input type = "text" name ="phone" onChange ={this.handlephone} /></td>
                    </tr>
                    <tr>
                        <td><label>Address</label></td>
                        <td><input type = "text" name ="email" onChange ={this.handleemail} /></td>
                    </tr>
                    </tbody>
                </table>
                
                
                
                


        <h1>FulllName - {this.state.first.charAt(0).toUpperCase()}{this.state.first.slice(1)}{' '}{this.state.last}</h1>
        <h1>Address - {this.state.addr} </h1>    
        <h1>Phone - {this.state.phone} </h1>
        <h1>Email - {this.state.email} </h1>    



            </div>
            
        )
    }
}
