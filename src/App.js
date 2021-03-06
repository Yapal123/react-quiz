import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import axios from 'axios';
import Result from './Result';
const obj = [
  {
    q: 'Feel restless or fidgety?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Any difficulty concentrating on what people are saying to you even when they are speaking to you directly?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Distracted by unrelated thoughts',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Postpone boring or difficult tasks',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Any difficulty unwinding and relaxing when you have time to yourself?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Forgetful in daily activities? Maybe forget keys, agenda etc?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Avoid public gatherings, symposiums, lectures, church etc?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Feeling restless or agitated inside?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'When you’re in a conversation, do you find yourself finishing the sentences of the people you are talking to before they can finish them themselves?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Having the feeling that you have to be doing something',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: ' Lose a lot of time searching for things, or losing notes, lists or telephone numbers',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Happens to put things off until the last minute?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Fear of failure in terms of starting new things?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Relationship problems, lots of arguments, lack of intimacy?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Do you depend on others to keep your life in order and attend to details?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Difficulty in patiently waiting in a queue, or in the traffic/traffic jams, or jumping the queue?',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Easily distracted by unnecessary issues',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Repetitive restless actions, such as tapping with a pen, or playing with something, or fiddling with hair/biting nails, etc',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },
  {
    q: 'Difficulty initiating social contacts',
    a: [
      {
        answ: 'Never',
        pts: 0
      },
      {
        answ: 'Rarely',
        pts: 1
      },
      {
        answ: 'Sometimes',
        pts: 2
      },
      {
        answ: 'Often',
        pts: 3
      },
      {
        answ: 'Very Often',
        pts: 4
      },
    ]
  },


];
let answ = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      q: 0,
      finalText: "",
      qStatus: false,
      isStart: true,
      isEmailStep: false,
      formData: {
        name:'',
        email:'',
        number:'',
        result:''
      }
    };
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.end = this.end.bind(this);
    this.toStart = this.toStart.bind(this);
    this.start = this.start.bind(this);
    this.finish = this.finish.bind(this);
  }

  getPicked(step) {
    const checks = document.getElementsByName("questions");
    console.log(checks);
    let flag = 0;
    checks.forEach((el) => {
      console.log(`answer is - ${answ[step]} and el.value is - ${el.value}`);

      if (el.value == answ[step]) {
        el.checked = true;
        flag++;
        console.log(`Found`);
      }
    });
    if (flag == 0) {
      this.uncheckAll();
      console.log("uncheked");
    }
  }

  uncheckAll() {
    const checks = document.getElementsByName("questions");
    checks.forEach((el) => {
      el.checked = false;
    });
  }

  saveChecked(val, step) {
    console.log("val=" + val);
    if (val == undefined) {
      answ[this.state.step] = 0.000001;
    } else {
      answ[step] = val;
    }
  }

  forward(e) {
    if (answ[this.state.step] == undefined) {
      answ[this.state.step] = 0.000001;
    }
    this.setState((state) => ({
      step: state.step + 1,
    }));
    // this.getPicked(this.state.step + 1);
  }

  backward(e) {
    if (this.state.isEmailStep != false || this.state.qStatus != false) {
      this.setState({
        isEmailStep: false,
        qStatus: false,
        finalText: "",
        step: this.state.step,
      });
      // this.getPicked(this.state.step);
    } else {
      this.setState((state) => ({
        step: state.step - 1,
      }));
      // this.getPicked(this.state.step - 1);
    }
  }
  end() {
    this.setState({
      qStatus: true,
    });
    if (answ[this.state.step] == undefined) {
      answ[this.state.step] = 0.000001;
    }

    let sum = 0;
    answ.forEach((el) => {
      sum = sum + Number(el);
    });
    let zeroCount = 0;
    console.log(answ);

    answ.forEach((el) => {
      if (el == 0.000001) {
        zeroCount++;
      }
    });

    if (zeroCount >= 10) {
      this.setState((state) => ({
        finalText: `You answered only ${
          obj.length - zeroCount
        } questions from ${
          obj.length
        } total. This reduces the potential value of the screening test. Suggested: please answer all the questions to improve the quality of the quiz. `,
      }));
    } else {
      console.log("sum=" + sum);
      console.log("obj.length=" + obj.length);
      let q = sum / obj.length;
      if (q < 0.7) {
        this.setState((state) => ({
          finalText: `Your result is: unusual pattern, very low `,
        }));
      }
      if (q > 0.7 && q < 2.05) {
        this.setState((state) => ({
          finalText: `Your result is: No`,
        }));
      }
      if (q > 2.05 && q < 2.5) {
        this.setState((state) => ({
          finalText: `Your result is: usual`,
        }));
      }
      if (q > 2.5 && q < 3.05) {
        this.setState((state) => ({
          finalText: `Your result is: usual +`,
        }));
      }
      if (q > 3.05 && q < 3.9) {
        this.setState((state) => ({
          finalText: `Your result is: very high`,
        }));
      }
      if (q >= 3.9) {
        this.setState((state) => ({
          finalText: `Your result is: unusual pattern, very high`,
        }));
      }
    }
    this.setState({
      isEmailStep: false,
      formData: {
        name: document.getElementById("username").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("number").value,
      },
    });
  }
  toStart() {
    answ.length = 0;

    this.setState({
      finalText: "",
      step: 0,
      qStatus: false,
      isEmailStep:false
    });
  }
  start() {
    this.setState({
      isStart: false,
    });
  }
  finish() {
    this.setState({
      isEmailStep: true,
    });
  }
  render() {
    let back;
    let next;
    let displayQuiz = { display: "none" };
    let displayStart = { display: "flex" };
    if (this.state.isStart != true) {
      displayQuiz.display = "flex";
      displayStart.display = "none";
    }
    if (this.state.step > 0) {
      back = <button onClick={this.backward}>Prev</button>;
    } else {
      back = "";
    }
    if (this.state.step != obj.length - 1) {
      next = <button onClick={this.forward}>Next</button>;
    } else {
      next = <button onClick={this.finish}>Finish</button>;
    }
    let qBlock;
    let results;

    if (this.state.qStatus == true) {
      results = (
        <Result data={this.state.formData} result={this.state.finalText}/>
      );
      back = <button onClick={this.backward}>Prev</button>;
      qBlock = '';
      next = <button onClick={this.toStart}>Restart</button>;
    } else {
      results = '';
      qBlock = (
        <div id="quizBlock" className="show">
          <div className="wrapper_quest">
            <p className="quest">
              {this.state.step + 1}. {obj[this.state.step].q}
            </p>
          </div>
          <Test
            func={this.saveChecked}
            step={this.state.step}
            radios={obj[this.state.step].a}
            answ={answ[this.state.step]}
          />
        </div>
      );
    }
      this.getPicked(this.state.step);

    console.log(this.state.step);
    if (this.state.isEmailStep == true) {
      qBlock = (
        <div className="input-group">
          <p className="input-info">
            Before reading the result, please be reminded that this DIY
            self-questionnaire quiz is NOT (and never intended to be) a
            substitute to a professional opinion. You told us that if you
            suspect there is any (mental) health problem, you would seek a
            professional advice, via NHS or privately. Before you press the
            button to continue, as part of our service, you can provide your
            email and/or the phone, where we can contact you for any
            clarifications.
          </p>
          <div className="inputs">
            <label id="name">
              Enter your name
              <br />
              <input type="text" name="username" id="username" />
            </label>
            <label id="name">
              Enter your email
              <br />
              <input type="email" name="email" id="email" />
            </label>
            <label id="name">
              Enter your phone number
              <br />
              <input type="text" name="number" id="number" />
            </label>
          </div>
        </div>
      );
      next = <button onClick={this.end} style={{width:'16%'}}>button to continue</button>;
    }
    console.log("q=" + this.state.q);

    return (
      <div className="wrapper_main">
        <div className="header">
          <h3>
            The following questions refer to how you have felt and what have
            happened to you over the past 6 months
          </h3>
        </div>
        <div className="start-wrapper" style={displayStart}>
          <p className="start-text">
            Before you continue, you must read and fully accept the following: I
            understand that the questionnaire cannot be a substitute to an
            expert opinion. If I suspect that there is any problem, I should
            seek a professional advice
          </p>
          <div className="buttons">
            <button onClick={this.start} style={{ width: "8%" }}>
              I accept
            </button>
          </div>
        </div>
        <div className="question-wrapper" style={displayQuiz}>
          {qBlock}
          {results}
          <div className="buttons">
            {back}
            {next}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
