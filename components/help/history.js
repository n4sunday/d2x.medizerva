import React, { Component } from 'react'
import { connect } from 'react-redux'
var i = 0
class History extends Component {
    //renderNumHistory
    rnh(x) {
        return (<li> <p>{this.props.history.hsd[x].hsd1}</p> </li>)
    }

    renderHistory() {
        if (this.props.history.hsd[i]) {
            switch (this.props.history.count) {
                case 0: return (< ul className="timeline" > {this.rnh(0)}  </ul>)
                case 1: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)} </ul>)
                case 2: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)} </ul>)
                case 3: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)} </ul>)
                case 4: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)} </ul>)
                case 5: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)} </ul>)
                case 6: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)} </ul>)
                case 7: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)} </ul>)
                case 8: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)} </ul>)
                case 9: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)} </ul>)
                case 10: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)}{this.rnh(10)} </ul>)
                case 11: return (< ul className="timeline" > {this.rnh(0)}{this.rnh(1)}{this.rnh(2)}{this.rnh(3)}{this.rnh(4)}{this.rnh(5)}{this.rnh(6)}{this.rnh(7)}{this.rnh(8)}{this.rnh(9)}{this.rnh(10)}{this.rnh(11)} </ul>)
            }
        }
    }
    render() {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                        {this.renderHistory()}
                    </div>
                </div>
            </div>
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        history: state.history,
    }
}

export default connect(mapStateToProps)(History)


