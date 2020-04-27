import React from "react";
import axios from 'axios';
import './App.css';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
       const params = new URLSearchParams();
       params.append("name", this.props.data.name);
       params.append("email", this.props.data.email);
       params.append("phone", this.props.data.phone);
       params.append("result", this.props.result);
       axios.post("/smtp.php", params).then(function (response) {
         console.log(response);
       });
    console.log(this.props.data);
    console.log("mounted");
  }

 
  render() {
    
    return (
      <div className="result">
        <p>{this.props.result}</p>
      </div>
    );
  }
}

export default Result;
