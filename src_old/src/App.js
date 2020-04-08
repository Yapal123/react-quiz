import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
const obj = [
  {
    q:'Quest 1',
    a:1,
    b:2,
    c:3
  },
   {
    q:'Quest 2',
    a:1,
    b:2,
    c:3
  },
   {
    q:'Quest 3',
    a:1,
    b:2,
    c:3
  },
   {
    q:'Quest 4',
    a:1,
    b:2,
    c:3
  },
   {
    q:'Quest 5',
    a:1,
    b:2,
    c:3
  },
   {
    q:'Quest 6',
    a:1,
    b:2,
    c:3
  },

];
let answ = [];
class App extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    step:0
};
  this.forward = this.forward.bind(this);
  this.backward = this.backward.bind(this);
  this.end = this.end.bind(this);


}
 getPicked(step){
  if(answ[this.state.step] != undefined){
    const checks = document.getElementsByName('questions');
    let flag = 0;
      checks.forEach((el) => {
        if (el.value ==  answ[step]) {
          el.checked = true;
          flag++;
        }
        
      });
      if (flag == 0) {
          this.uncheckAll();
          console.log('uncheked');
        }
  }
 } 
 uncheckAll(){
  const checks = document.getElementsByName('questions');
  checks.forEach((el) => {
    el.checked = false;
  });
 }
 //TODO: не оставлять пустых значений, а вставлять болванку, иначе габела
 saveChecked(){
  const checks = document.getElementsByName('questions');
  checks.forEach((el) => {
    if (el.checked ) {
      answ[this.state.step] = el.value;
    }
  });
}
forward(e){
  this.saveChecked();
  this.setState(state =>({
    step: state.step + 1
  }));
  this.getPicked(this.state.step + 1);
}
backward(e){
  this.setState(state =>({
    step: state.step - 1
  }));
  this.getPicked(this.state.step - 1);
}
end(){
  this.saveChecked();
  console.log(answ);
}
fun(arg){
  console.log(arg);
}
  render(){
    let back;
    let next;
    if (this.state.step > 0) {
      back = <button onClick={this.backward}>prev</button>;
    } else {
      back = '';
    }
    if (this.state.step != obj.length-1) {
      next = <button onClick={this.forward}>next</button>;
    } else {
      next = next = <button onClick={this.end}>end</button>;;
    }
    console.log(answ);
    console.log(this.state.step);
    console.log(answ[this.state.step]);
    return(
      <div>
        <p>
          {obj[this.state.step].q}
        </p>
        <input type="radio" name="questions" value={obj[this.state.step].a}/>a
        <input type="radio" name="questions" value={obj[this.state.step].b}/>b 
        <input type="radio" name="questions" value={obj[this.state.step].c}/>c 
        {back}{next}
      <Test func = {this.fun} />

      </div>
      );
  }
}

export default App;
