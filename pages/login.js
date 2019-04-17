import React, { Component } from 'react'
import LoginBG from './../img/access/login.jpg'
import logo_img from '../img/Logo_td2x.png'
import Link from 'next/link';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
    apiKey: "AIzaSyBHV43rBiJT-3ITJvLfhzdYXvaqoWYePVY",
    authDomain: "t-d2x-78677.firebaseapp.com",
})

const loginStyle = {
    backgroundImage: `url(${LoginBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //filter: 'brightness(50%)',
    height: '100vh ',
}
const profile = {
    height: '250px',
}

class login extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (
            <div className='container-fluid' style={loginStyle}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-xs-12 col-lg-12 pl-0 pr-0 '>
                        <div className='login'>
                            {/* <input type="username" className="form-control mt-2" placeholder="Username" />
                            <input type="password" className="form-control mt-2" placeholder="Password" />
                            <div className='btLoging mt-2'>เข้าสู่ระบบ</div>
                            <div className='btFacebook mt-2 '>Facebook</div>
                            <div className='btGoogle mt-2'>Google</div> */}
                            {this.state.isSignedIn ? (
                                <span>
                                    <button onClick={() => firebase.auth().signOut()} className="btn btn-secondary pr-5 pl-5 mb-3">Sign out!</button>
                                    <h5>ชื่อ {firebase.auth().currentUser.displayName}</h5>
                                    <img alt="profile picture" style={profile} src={firebase.auth().currentUser.photoURL}/>
                                   
                                </span>
                            ) : (
                                    <div>
                                        <Link href="/"><h1 className='pb-5'>T-D2X</h1></Link>
                                        <StyledFirebaseAuth
                                            uiConfig={this.uiConfig}
                                            firebaseAuth={firebase.auth()}
                                        />
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default login
