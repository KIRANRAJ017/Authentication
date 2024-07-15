import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginPage from './loginpage';
import "./login.css";
import Userhome from '../userhome/userhome';

function Login({ onLogin }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
        scope: 'profile email'
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    onLogin(user, res.data); 
                    navigate('/user');
                })
                .catch((err) => console.log(err));
        }
    }, [user, onLogin, navigate]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
    };
    return (
        <div>
            {profile ? (
                <div>
                    <Userhome name={profile.name} picture={profile.picture} email={profile.email} onLogout={logOut} />
                </div>
            ) : (
                <div className="user-login">
                    <div className="user-login-in">
                        <LoginPage />
                        <button onClick={login} className="user-login-btn">Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
