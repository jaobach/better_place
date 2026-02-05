import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../services/auth.tsx';

export function PrivateRoute() {
  return 1===1 ? <Outlet /> : <Navigate to="/login" replace />;
}
