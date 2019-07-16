import React, {Component} from 'react';
import "./jsx3.css"

class App extends Component{
    render(){
        //새로운 객체를 만들어서 스타일 넣기
        const style ={
            //문자열로 입력
            backgroundColor:'black',
            padding:'16px',
            color:'white',
            fontSize:5+10+"px"
        };
        //css불러오기_import
        return <div className="jsx3">안녕하세요</div>;
    }
}
export default App;
