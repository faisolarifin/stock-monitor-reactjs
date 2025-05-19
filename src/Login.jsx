import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { FcGoogle } from 'react-icons/fc';

function Login({ onLogin }) {
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    onLogin(result.user);
  };

  return (
    <div className="login-container">
      <button className="login-button" onClick={handleLogin}>
        <FcGoogle size={20} style={{ marginRight: '8px' }} />
        Login with Google
      </button>
    </div>
  );
}

export default Login;
