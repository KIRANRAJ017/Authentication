import "./login.css"
import {FcGoogle} from "@react-icons/all-files/fc/FcGoogle"

function LoginPage(){
    return(
        <div className="google-signin">
            <div className="goog-sign">
                <p className='signin-logo'><FcGoogle/></p>
                <p><span style={{fontSize:'22px'}}>Signin</span><br/>
                with your Google Account</p><br/><br/>
                <input placeholder="Enter your name" className="sign-name"/><br/>
            </div>
        </div>
    )
}

export default LoginPage