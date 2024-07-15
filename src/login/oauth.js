import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './login';

function Oauth({ onLogin }) {
    return (
        <div>
            <GoogleOAuthProvider clientId="CLIENT_ID">
                <Login onLogin={onLogin} />
            </GoogleOAuthProvider>
        </div>
    );
}

export default Oauth;
