import Header from '../../components/Header'
import React, { Component } from 'react'
import ChatbotPopup from '../../components/Chatbot/ChatbotPopup'
import Link from 'next/link'
const aminoacid = () => (
    <div><Header />

        <div className='mt-5'>
            <div className='diseasecomponent'>
                <div className="jumbotron">
                    <div className='container'>
                        <div className='row'>

                            <div id='diseaseHeader' className='col-sm-12 col-md-12 col-lg-12'>
                                <h2><strong>กรดอะมิโน</strong></h2>
                            </div>

                            <div id='disease-sub' className='col-sm-12 col-md-12 col-lg-12 pt-3 pl-4'>
                                <div className='row'>
                                    <h4 className='pt-2'>กรดอะมิโน เรียกได้ว่าเป็นเสมือนก้อนอิฐที่ใช้สำหรับสร้างชีวิตเลยดีเดียว</h4>
                                    <p className='pt-2'>
                                        ร่างกายสามารถได้รับกรดอะมิโนในปริมาณเพียงพอกับที่ต้องการได้จากการรับประทานอาหารที่
                                        ประกอบด้วยกรดอะมิโนเหล่านั้น กรดอะมิโน เป็นสารที่ใช้ในการสร้างโปรตีน สามารถพบได้ทั่ว
                                        ไปในร่างกาย กรดอะมิโนเหล่านี้ เรียกได้ว่าเป็นก้อนอิฐแห่งชีวิตเลยก็ว่าได้  กรดอะมิโนมีความ
                                        จำเป็นในการสร้างเอนไซม์ หรือน้ำย่อยต่าง ๆ ร่วมถึงฮอร์โมน และสารสื่อประสาท นอกจากนี้
                                        ยังเกี่ยวข้องกับกระบวนการทางเมตะบอลิสม หรือกระบวนการย่อยสลายสารอาหารภายในเซลล์
                                        ทั่วร่างกาย คุณจะได้รับกรดอะมิโนนี้จากการกินอาหาร
                                    </p>
                                    <p className='pt-2'>
                                        หลังจากที่ร่างกายของคุณย่อยโปรตีนแล้ว โปรตีนเหล่านั้นจะอยู่ในรูปของกรดอะมิโน ซึ่งจะนำไป
                                        ใช้ในกระบวนการต่าง ๆ ของร่างกาย ดังนี้
                                    </p>
                                    <p>
                                        <ul className='col-sm-12 col-md-12 col-lg-12 '>
                                            <li>ย่อยสลายอาหาร</li>
                                            <li>สร้างเนื้อเยื่อ และซ่อมแซมส่วนที่สึกหรอ</li>
                                            <li>เป็นแหล่งพลังงาน</li>
                                            <li>ช่วยให้การทำงานของระบบต่าง ๆ ในร่างกายเป็นไปได้อย่างปกติ</li>
                                        </ul>
                                    </p>
                                    
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ChatbotPopup />
    </div>


)
export default aminoacid
