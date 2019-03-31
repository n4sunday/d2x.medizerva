import React, { Component } from 'react'
import { store } from "../../pages/_app"
import docter from '../../img/doctor_man.svg'
import people_no from '../../img/people_no.svg'
import people_yes from '../../img/people_yes.svg'
import { getAPI, select, set, reset, resetQA, engineHistory, resetHistory } from '../../redux/actions'
import { connect } from 'react-redux'

class helpQandA extends Component {

    componentDidMount = () => {
        this.props.getAPI(),
        this.props.resetHistory()
    }

    //-------------------------IMG_IF_ELSE----------------------------------------------
    renderImg() {
        console.log('this.props.api.symptom.U1.title=', this.props.api.symptom.U1.title);

        if (this.props.api.symptom.U1.title == 'ใช้')
            return (
                <div>
                    <img className='yes' src={people_yes} width='60px' alt="Cinque Terre" />
                </div>)
        else if (this.props.api.symptom.U1.title == 'ไม่ใช้')
            return (
                <div>
                    <img className='no' src={people_no} width='60px' alt="Cinque Terre" />
                </div>)
    }
    //---------------------------END IMG_IF_ELSE----------------------------------------
    select1 = () => (
        store.dispatch(select(this.props.api.symptom.U1.nextOrder)),
        store.dispatch(engineHistory(this.props.api,1))
    )
    select2 = () => (
        store.dispatch(select(this.props.api.symptom.U2.nextOrder)),
        store.dispatch(engineHistory(this.props.api,2))
    )
    getNew = () => (
        this.props.getAPI(),
        this.props.resetHistory()
    )

    renderAPI() {
        if (this.props.api && this.props.selectStatus == true && this.props.api.state < 11)
            return (
                <div>
                    <div>
                        <div className='container-fluid' id='doctor' onClick={() => this.props.getAPI()}>
                            <div className='row'>
                                <div id='question' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
                                    <img src={docter} width='60px' alt="Cinque Terre"
                                         />
                                </div>
                                <div id='question' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
                                    <p id='question'>{this.props.api.title}</p>
                                </div>
                            </div>
                        </div>

                        <div className='container-fluid' id='doctor' onClick={this.select1} >
                            <div className='row'>
                                <div id='answer' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
                                    <p>{this.props.api.symptom.U1.title}</p>
                                </div>
                                <div id='answer' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
                                    <img className='yes' src={people_yes} width='60px' alt="Cinque Terre"
                                        />
                                </div>
                            </div>
                        </div>

                        <div className='container-fluid' id='doctor' onClick={this.select2}>
                            <div className='row'>
                                <div id='answer' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
                                    <p>{this.props.api.symptom.U2.title}</p>
                                </div>
                                <div id='answer' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
                                    <img className='no' src={people_no} width='60px' alt="Cinque Terre"
                                        />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        // else if (this.props.api && this.props.selectStatus == false)
        //     return (
        //         <div>
        //             <div className='container-fluid' id='doctor'>
        //                 <div className='row'>
        //                     <div id='question' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
        //                         <img src={docter} width='60px' alt="Cinque Terre" />
        //                     </div>
        //                     <div id='question' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
        //                         <p id='question'>{this.props.api.title}</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='container-fluid' id='doctor'>
        //                 <div className='row'>
        //                     <div id='answer' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
        //                         <p>{this.props.api.choice}</p>
        //                     </div>
        //                     <div id='answer' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
        //                         <img className='yes' src={people_yes} width='60px' alt="Cinque Terre"
        //                              />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='container-fluid' id='doctor'>
        //                 <div className='row'>
        //                     <div id='answer' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
        //                         <p>เริ่มถามหมอใหม่</p>
        //                     </div>
        //                     <div id='answer' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
        //                         <img className='no' src={people_no} width='60px' alt="Cinque Terre"
        //                             onClick={this.getNew} />
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     )
        else if (this.props.api.state >= 10)
            return <div className='mt-5 pt-5'>SUN</div>
    }

    render() {
        return (
            <div>{this.renderAPI()}</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        api: state.api,
        selectStatus: state.main

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAPI: () => store.dispatch(getAPI()),
        select: () => store.dispatch(select()),
        engineHistory: () => store.dispatch(engineHistory()),
        resetHistory: () => store.dispatch(resetHistory()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(helpQandA)