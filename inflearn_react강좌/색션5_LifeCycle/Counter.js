import React, { Component } from 'react';


class Counter extends Component {
  state = {
    number: 0
  }

  // constructor-> 컴포넌트가 새로 생설될 때 마다 호출
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  //등록했던 이벤트 제거
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }
  
  //외부라이브러리 연동,컴포넌트에 필요한 데이터 요청,DOM에 관련된 작업
  componentDidMount() {
    console.log('componentDidMount');
  }
   
  //Virtual DOM에 리렌더링 하는 것도 불필요한 경우를 위해 사용
  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  //더이상 사용x
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  ///render()다음 발생, 이전값 조회가능
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  //componentDidCatch->에러가 발생하면 잡아줄 수 있음
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;