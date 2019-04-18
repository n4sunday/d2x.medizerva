import ChatbotPopup from '../../components/Chatbot/ChatbotPopup'
import { connect } from 'react-redux'
import React, { Component } from 'react';
class conclusion extends Component {
    rnh(x) {
        return (<li>{this.props.history.hsd[x].hsd1}</li>)
    }
    renderHistory() {
        if (this.props.history.hsd[0]) {
            switch (this.props.history.count) {
                case 0: return (<div> {this.rnh(0)}  </div>)
                case 1: return (<div> {this.rnh(0)}{this.rnh(1)} </div>)
                case 2: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)} </div>)
                case 3: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)} </div>)
                case 4: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)} </div>)
                case 5: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)} </div>)
                case 6: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)} </div>)
                case 7: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)} </div>)
                case 8: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)} </div>)
                case 9: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)} </div>)
                case 10: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)}{this.rnh(10)} </div>)
                case 11: return (<div> {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)}{this.rnh(10)}{this.rnh(11)} </div>)
            }
            // for(let i=0;i<12;i++) {
            //     return( <div> {this.rnh(i)}</div>)
            // }
        }
    }

    render() {
        return (
            <div className='container conclusion mt-5'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='conclusion-sheet d-block '>
                        <div className='d-flex justify-content-center'>
                            <div className='clip-leg d-block justify-content-center'>
                                <div className='clip-leg-x'></div>
                            </div>
                        </div>

                        <div className='sheet d-inline-block'>
                            <div className='d-flex justify-content-center'>
                                <div className='clip-body'></div>
                            </div>

                            <div className='paper-sheet d-inline-block'>

                                <p className='conclusion-h'>สรุปผลการวินิจฉัย</p>

                                <div className='conclusion-sh'>ข้อมูลผู้ป่วย</div>
                                <div className='allcontent content-profile'>
                                    <ul class="list-unstyled">
                                        <li>ชื่อ : นาย โรเบิร์ด บาราเทียน</li>
                                        <li>อายุ : 42 ปี</li>
                                    </ul>
                                </div>

                                <div className='conclusion-sh'>อาการที่แสดง</div>
                                <div className='symptom-user'>
                                    {this.renderHistory()}<br />
                                </div>
                                <div className='conclusion-sh'>คำแนะนำของแพทย์</div>
                                <div className='allcontent doctor-advice'>
                                    <p>
                                        คุณควรนอนหลับผักผ่อนเยอะๆ และไปตรวจสุขภาพประจำปีบ้าง และออกกำลังกายอย่างสม่ำเสมอ และไปพบปะพูดคุยกับผู้คนในสังคม
                                    </p>
                                </div>

                                <div className='conclusion-sh'>ยาสำหรับรักษาอาการ</div>
                                <div className='allcontent'>
                                    <li>ยาธาตุน้ำขาว</li>
                                    <li>ยาพาราเซตามอล</li>
                                    <li>ยาพาราเซตามอล</li>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.history,
    }
}
export default connect(mapStateToProps)(conclusion)
