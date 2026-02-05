import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/login/login';
import Home from '../components/home/home.js';
import { PrivateRoute } from './privateRoute.tsx';
import ClassRoom from '../components/class/classroom.js';
import NewClassRoom from '../components/class/newClassroom/newClassRoom.js';
import NewStudent from '../components/newStudent/newStudent.js';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* pública */}
        <Route path="/login" element={<Login />} />

        {/* privada */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* rota raiz: só redireciona */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* privada */}
        <Route element={<PrivateRoute />}>
          <Route path="/classroom" element={<ClassRoom />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/newClassRoom" element={<NewClassRoom />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/newStudent" element={<NewStudent />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
