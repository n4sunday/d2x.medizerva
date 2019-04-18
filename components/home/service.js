import hours24 from '../../img/home/hours24.svg';
import diagnose from '../../img/home/diagnose.svg';
import pills from '../../img/home/pills.svg';
import hospital from '../../img/home/hospital.svg';

const service = () => (
	<div className="servicecomponent d-flex justify-content-center align-items-center">
		<div className="container">
			<div className="row">
				<div id="service-name" className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
					<p className="h2">บริการของเรา</p>
				</div>

				<div id="" className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
					<div className="container-fluid">
						<div className="row">
							<div id="service-content" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
								<div className="pl-1 pr-1 pt-1 pb-4">
									<div className="box pl-5 pb-3 pt-3 pl-5 pb-3 pt-3">
										<img src={hours24} width="120px" alt="Cinque Terre" />
										<p className="h4">บริการช่วยเหลือ 24 ชั่วโมง</p>
									</div>
								</div>
							</div>

							<div id="service-content" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<div className="pl-1 pr-1 pt-1 pb-4">
									<div className="box pl-5 pb-3 pt-3">
										<img src={diagnose} width="120px" alt="Cinque Terre" />
										<p className="h4">วินิจฉัยอาการออนไลน์</p>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div id="service-content" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<div className="pl-1 pr-1 pt-1 pb-4">
									<div className="box pl-5 pb-3 pt-3">
										<img src={pills} width="120px" alt="Cinque Terre" />
										<p className="h4">บริการจัดส่งยารักษา</p>
									</div>
								</div>
							</div>

							<div id="service-content" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<div className="pl-1 pr-1 pt-1 pb-4">
									<div className="box pl-5 pb-3 pt-3">
										<img src={hospital} width="120px" alt="Cinque Terre" />
										<p className="h4">ค้นหาโรงพยาบาลใกล้เคียง</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default service;

/**/
