import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ children }: { children: Element }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  
  if (!token) {
    return <Navigate to="/" replace ></Navigate>;
  }
  
  return children;
};

export default ProtectedRoute;
