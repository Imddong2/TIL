import React, {Component, Fragment} from 'react';

class App extends Component{
    render(){
        return(
        //태그 닫아주기
        //div중복 fragment사용
        <Fragment>
            <div>hello</div>
            <div>bye</div>
        </Fragment>
        );
    }
}
export default App;
