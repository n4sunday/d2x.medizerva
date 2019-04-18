import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Dropdown,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import Header from '../components/Header';
import React from 'react';
import { render } from 'react-dom';
import logo_img from '../img/Logo_td2x.png';
import Link from 'next/link';
import { Progress } from 'reactstrap'
class App extends React.Component {

	render() {
		return (
			<div>
				<Header t="barB" c="barT" />
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
											<ul>
												<li>คุณมีอาการถ่ายบ่อย และเหลวมากกว่า 3 ครั้งต่อวัน</li>
												<li>คุณมีอาการถ่ายบ่อย และเหลวมากกว่า 3 ครั้งต่อวัน</li>
												<li>คุณมีอาการถ่ายบ่อย และเหลวมากกว่า 3 ครั้งต่อวัน</li>
												<li>คุณมีอาการถ่ายบ่อย และเหลวมากกว่า 3 ครั้งต่อวัน</li>
												<li>คุณมีอาการถ่ายบ่อย และเหลวมากกว่า 3 ครั้งต่อวัน</li>
											</ul>
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
							x
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
