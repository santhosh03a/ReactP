import React, { Component } from 'react';
import axios from 'axios';
import './allusers.css'
class Users extends Component {
constructor(props) {
super(props);
this.state = {
std:[],
errors:''
}
}
componentDidMount(){
axios.get('http://localhost:8080/Users').
then(res=>{
console.log(res.data);
this.setState({
std:res.data,
})
console.log(res);
}).
catch(error=>{
//console.log(error);
this.setState({
errors:'Unable to fetch the information'
})
})

}
//execute nly once throughout life cycle of program
render(){
  const{std,errors}=this.state
  return(
  <div>
      <div>
<h1>User Details</h1><hr></hr>
    <table>
       
    <thead>
        <tr>
            <th>Id</th>
            {/* <br></br> */}
            <th>firstname</th>
            {/* <br></br> */}
            <th>lastname</th>
            <th>emailid</th>
        
            <th>mobile no</th>
     
        </tr>
    </thead>
    <tbody>
        {std.length ? std.map(stds=>(<tr key={stds.id}> <td>{stds.id} </td> <td>{stds.firstname} </td>
        <td>{stds.lastname} </td> <td>{stds.email} </td>
         <td>{stds.mobile}</td> </tr>)): null}
    { errors ? <h2>{errors}</h2> :null}
    </tbody>
    </table>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      </div>
  );
}
}
export default Users;