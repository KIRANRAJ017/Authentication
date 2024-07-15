import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './login';

function Oauth({ onLogin }) {
    return (
        <div>
            <GoogleOAuthProvider clientId="560381808705-pev2klro11t7t9f5ht7dt6987ae1po77.apps.googleusercontent.com">
                <Login onLogin={onLogin} />
            </GoogleOAuthProvider>
        </div>
    );
}

export default Oauth;
