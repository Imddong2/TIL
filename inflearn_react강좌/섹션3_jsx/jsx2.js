import React, {Component, Fragment} from 'react';

class App extends Component{
    render(){
        //var->더이상쓰지x const->한번 선언 후 고정적인 값 let->유동적인값 (블록단위범위)
        const name="hjinny"
        return(
        //함수-> 함수선언시 바로 호출해줘야함\
        //화살표함수
        <div>
            {
               (()=>{
                   if(value===1)return<div>1이다</div>
                   if(value===2)return<div>2다</div>
                   return<div>없다</div>
               })()
            }
        </div>
        );
    }
}
export default App;
