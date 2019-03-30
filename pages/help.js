import Header from '../components/Header'
import HelpQandA from '../components/help/helpQandA'
import History from '../components/help/history'
const help = () => (
    <div><Header />
        <div className='container-fluid mt-5 pt-5' id='help'>
            <div className='row '>
                <div className='col-xs-12 col-sm-12 col-md-3 col-xl-4'>
                    Help Popular
                </div>

                <div className='col-xs-12 col-sm-8 col-md-6 col-xl-4'>
                    <HelpQandA />
                </div>

                <div className='col-xs-12 col-sm-4 col-md-3 col-xl-4'>
                    <History />
                </div>
            </div>
        </div>
    </div>
)
export default help