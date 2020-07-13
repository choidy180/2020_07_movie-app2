import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    console.log("hello");
  }
  state = {
    count: 0
  };
  plus = () => {
    console.log("plus")
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus")
    this.setState({count: this.state.count - 1});
  };
  // 컴포넌트 렌더링 할때
  componentDidMount(){
    console.log("component render");
  }
  // 업데이트시 
  componentDidUpdate(){
    console.log("I just update");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>I number is {this.state.count}</h1>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}

export default App;
