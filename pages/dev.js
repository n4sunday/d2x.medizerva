// import Header from '../components/Header'
// import React, { Component } from 'react';
// class dev extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { store: '' }
//     }
    
//     render() {
//         return (
//             <div>
//                 <Header />
//                <div className='mt-5 pt-5 '>SSS</div>
//             </div>
//         );
//     }
// }

// export default dev

import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed 
                    strings={['สวัสดีชาวโลก']} 
                    typeSpeed={40} 
                />
                <br/>

                <Typed 
                strings={[
                    'สวัสดีชาวโลก',
                    'วันนี้วันอะไร',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50} 
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
            </div>
        );
    }
}
export default MyComponent
