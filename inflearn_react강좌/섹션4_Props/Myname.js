import React, {Component}from 'react';
/*class Myname extends Component{
    정의안되있을때!
    static defaultProps = {
        name: '기본이름'
    }
  render(){
    return(
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}*/
//함수형 컴포넌트
//비구조화 할당
const Myname = ({name})=>{
    return <div>안녕하세요! 제 이름은 {name}입니다.</div>;   
};

Myname.defaultProps ={
    name:'현진'
}

export default Myname;