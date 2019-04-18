import Link from 'next/link'
import { connect } from 'react-redux'
import { store } from '../../pages/_app'
import React, { PureComponent } from 'react'
import c1 from '../../img/disease/c1.svg'
import c2 from '../../img/disease/c2.svg'
import p1 from '../../img/disease/p1.svg'
import p2 from '../../img/disease/p2.svg'
import ButtomDisease from './button'
import dynamic from 'next/dynamic'
const C1 = dynamic(() => import('./c1'))
const C2 = dynamic(() => import('./c2'))

class disease extends PureComponent {
	renderContent() {
		if (this.props.disease == 'C1') {
			return (<div><C1 /></div>)
		}
		else if (this.props.disease == 'C2') {
			return (<div><C2 /></div>)
		}
		else if (this.props.disease == 'P1') {
			return (<div className="gears">
				<img src="https://goo.gl/fpC7Oh" alt="gear" className="big" />
				<img src="https://goo.gl/qL1pnV" alt="gear" className="small" />
				<h1>Developing</h1>
			</div>
			)
		}
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="diseasecomponent">
					<div className="row"></div>
					<h2 onClick={this.StateButton} className="header-disease pt-5 pb-5 pl-5 pr-5">
						<strong>โรคและวิธีการรักษา</strong>
					</h2>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
							<div className="container-fluid">
								<div className="row pt-5">
									<ButtomDisease name='การผ่าตัดลำไส้ใหญ่ออก' status='C1' img={c1}/>
									<ButtomDisease name='นิ่วในไต' status='C2' img={c2}/>
									<ButtomDisease name='ยาระบาย' status='P1' img={p1}/>
									<ButtomDisease name='ยาขับปัสสาวะ' status='P2' img={p2}/>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
							{this.renderContent()}
						</div>
					</div>
				</div>
			</div>

		)
	}
}
const mapStateToProps = (state) => {
	return {
		disease: state.disease,
	}
}
export default connect(mapStateToProps)(disease)



// const item = () => {
// 	return (<div>X</div>)
// }

// const loop = () => {
// 	var i=0
// 	while(i<5){
// 		return (<div>{item()}</div>)
// 		i++
// 	}
// }

//export default loop

{
	/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ภาวะไม่ทนต่อน้ำตาลแลคโตส</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">อาการแพ้น้ำตาลแลคโตส</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">คออักเสบ</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ตับอ่อน</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">คอหอย</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ถุงน้ำตับอ่อน</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ภาวะไม่ทนต่อน้ำตาลแลคโตส</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ริดสีดวงทวารหนัก</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">แผลในทางเดินอาหาร</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ภาวะการย่อยแลคโตสผิดปกติ</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ภาวะอุจจาระอุดตัน</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">นิ่วในไต</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">ท้องผูก</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">นิ่วในไต</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">เยื่อบุช่องท้องอักเสบ</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">อาการแพ้น้ำตาลแลคโตส</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">โรคกรดไหลย้อน</h5>
								</div>
							</div>
	
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
								<div id="disease-content" className="border pl-1 pr-1 pt-1">
									<h5 className="pt-2 pl-2 pb-2">อาการแพ้น้ำตาลแลคโตส</h5>
								</div>
							</div> */
}
