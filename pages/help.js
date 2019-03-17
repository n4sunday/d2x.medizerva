import Header from '../components/Header'
import HelpQandA from '../components/helpQandA'
const help = () => (
    <div><Header />
        <div className='container-fluid' id='help'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-3 col-xl-4'>
                    Help Popular
                </div>

                <div className='col-xs-12 col-sm-12 col-md-6 col-xl-4'>
                    <HelpQandA/>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-3 col-xl-4'>
                    Conclude
                </div>
            </div>
        </div>
    </div>
)
export default help