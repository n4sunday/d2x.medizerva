import home_img from '../img/Home02.jpg'
import home_img1 from '../img/Home01.jpg'
//import Service from '../components/home/service'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Service = dynamic(() => import('../components/home/service'))


const home = () => (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img id='home_img' src={home_img} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <div id='content-img' className="d-flex justify-content-center align-items-center" >
                            <section >
                                <h1 className="display-4 font-weigth-bold ">ให้คำปรึกษาและวินิจฉัยอาการ</h1>
                                <h5 className="font-weigth-bold">บริการ 24 ชั่วโมง</h5>
                                <Link href="/help"><button type="button" className="btn btn-outline-light rounded-0 text-uppercase font-weigth-bold btn-lg animated heartBeat slow">ถามหมอ</button></Link>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Service />
    </div>
)
export default home