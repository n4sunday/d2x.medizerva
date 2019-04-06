import home_img from '../img/Home02.jpg';
import home_img1 from '../img/Home01.jpg';
//import Service from '../components/home/service'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Footer from '../components/Footer';
const Tophome = dynamic(() => import('../components/home/tophome'));
const Service = dynamic(() => import('../components/home/service'));
const Doctor = dynamic(() => import('../components/home/doctor'));
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

const home = () => (
	<div>
		<Tophome />
		<Service />
		<Doctor />
	</div>
);
export default home;

// const home = () => (
// 	<div>

// 		<Fullpage>
// 			<FullPageSections>
// 				<FullpageSection>
// 					<Tophome />
// 				</FullpageSection>
// 				<FullpageSection>
// 					<Service />
// 				</FullpageSection>
// 				<FullpageSection>
// 					<Doctor />
// 				</FullpageSection>
// 			</FullPageSections>

// 		</Fullpage>

//         <Footer/>
// 	</div>
// );
// export default home
