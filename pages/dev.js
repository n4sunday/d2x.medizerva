// import Header from '../components/Header'
// import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
// import { connect } from 'react-redux'
// import React, { Component } from 'react';
// class dev extends Component {
//     rnh(x) {
//         return (<li><em>{this.props.history.hsd[x].hsd1}</em></li>)
//     }
//     renderHistory() {
//         if (this.props.history.hsd[0]) {
//             switch (this.props.history.count) {
//                 case 0: return (<div> {this.rnh(0)}  </div>)
//                 case 1: return (<div> {this.rnh(0)}{this.rnh(1)} </div>)
//                 case 2: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)} </div>)
//                 case 3: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)} </div>)
//                 case 4: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)} </div>)
//                 case 5: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)} </div>)
//                 case 6: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)} </div>)
//                 case 7: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)} </div>)
//                 case 8: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)} </div>)
//                 case 9: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)} </div>)
//                 case 10: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)}{this.rnh(10)} </div>)
//                 case 11: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)}{this.rnh(10)}{this.rnh(11)} </div>)
//             }
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <div className='container-fluid'>
//                     <div className='row align-items-center'>
//                         <div id='conclusion-sheet' className='col-lg-4 offset-md-4 mt-5 mb-5 pt-4 pb-3 border bg-light'>
//                             <div className='card'>
//                                 <div class="card-body">
//                                     <h3><strong>สรุปผลการวินิจฉัย</strong></h3>
//                                     <h5><strong>ข้อมูลผู้ป่วย</strong></h5>
//                                     <div id='data-user'><p>ชื่อ : <em>นาย รักชาติ ณ สงขลา</em></p><p>อายุ :  <em>23 ปี</em></p></div>
//                                      <h5><strong>อาการที่แสดง</strong></h5>
//                                      <div id='symptom-user'>

//                                         {this.renderHistory()}<br />
//                                     </div>
//                                     <h5><strong>คำแนะนำของแพทย์</strong></h5>
//                                     <div id='doctor-advice'><p><em>คุณควรนอนหลับผักผ่อนเยอะ ๆ และไปตรวจสุขภาพประจำปีบ้าง และออกกำลังกายอย่างสม่ำเสมอ และไปพบปะพูดคุยกับผู้คนในสังคม</em></p></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <ChatbotPopup />
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         history: state.history,
//     }
// }
// export default connect(mapStateToProps)(dev)

import React, { Component } from 'react';
import $ from 'jquery'
class dev extends Component {
    constructor(props) {
        super(props)
        this.state = { store: '' }
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default dev

