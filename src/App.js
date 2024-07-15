import './App.css';
import Home from './home/home';
import Oauth from './login/oauth';
import Userhome from './userhome/userhome'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedProfile = localStorage.getItem('profile');
        if (storedUser && storedProfile) {
            setIsAuthenticated(true);
            setUserProfile(JSON.parse(storedProfile));
        }
    }, []);

    const handleLogin = (user, profile) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('profile', JSON.stringify(profile));
        setIsAuthenticated(true);
        setUserProfile(profile);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
        setIsAuthenticated(false);
        setUserProfile(null);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={!isAuthenticated ? <Oauth onLogin={handleLogin} /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/user"
                        element={
                            isAuthenticated ? 
                            <Userhome onLogout={handleLogout} name={userProfile?.name} picture={userProfile?.picture} /> : 
                            <Navigate to="/" />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
