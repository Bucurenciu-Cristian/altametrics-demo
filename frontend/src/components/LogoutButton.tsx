import { useDispatch } from 'react-redux';
import { clearToken } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/');
  };
  
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
