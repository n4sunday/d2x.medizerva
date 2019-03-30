import home_img from '../img/Home02.jpg'
import home_img1 from '../img/Home01.jpg'
//import Service from '../components/home/service'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Service = dynamic(() => import('../components/home/service'))


const home = () => (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide mt-5" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img id='home_img' src={home_img} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <div id='content-img' class="d-flex justify-content-center align-items-center" >
                            <section >
                                <h1 class="display-4 font-weigth-bold">ให้คำปรึกษาและวินิจฉัยอาการ</h1>
                                <h5 class="font-weigth-bold">บริการ 24 ชั่วโมง</h5>
                                <Link href="/help"><button type="button" class="btn btn-outline-light rounded-0 text-uppercase font-weigth-bold btn-lg">ถามหมอ</button></Link>
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