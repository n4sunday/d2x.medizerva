import home_img from '../img/Home.jpg'
import Service from '../components/home/service'
const home =()=>(
    <div>
        <img id='home_img' src={home_img} width="100%" height="100%"></img>
        <Service/>
    </div>
)
export default home