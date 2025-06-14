import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './app/components/auth/Login';
import CoachDashboard from './app/components/coach/Coach';
import ClientDashboard from './app/components/client/Client';
import AdminDashboard from './app/components/admin/Admin';
import ExerciseManagement from './app/components/admin/Exercise';
import CoachManagement from './app/components/admin/Coach';
import PaymentManagement from './app/components/admin/Payment';
import Header from './app/components/Header';
import { Role } from './types';
import Register from './app/components/auth/Register';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const PrivateRoute: React.FC<{
  element: React.ReactElement;
  allowedRoles?: Role[];
}> = ({ element, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      {element}
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute
                  element={
                    <Navigate
                      to={
                        useAuth().user?.role === Role.coach
                          ? '/coach'
                          : useAuth().user?.role === Role.admin
                          ? '/admin'
                          : '/client'
                      }
                    />
                  }
                />
              }
            />
            <Route
              path="/coach/*"
              element={
                <PrivateRoute
                  element={<CoachDashboard />}
                  allowedRoles={[Role.coach]}
                />
              }
            />
            <Route
              path="/client/*"
              element={
                <PrivateRoute
                  element={<ClientDashboard />}
                  allowedRoles={[Role.client]}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <PrivateRoute
                  element={<AdminDashboard />}
                  allowedRoles={[Role.admin]}
                />
              }
            />
            <Route
              path="/admin/exercises"
              element={
                <PrivateRoute
                  element={<ExerciseManagement />}
                  allowedRoles={[Role.admin]}
                />
              }
            />
            <Route
              path="/admin/coaches"
              element={
                <PrivateRoute
                  element={<CoachManagement />}
                  allowedRoles={[Role.admin]}
                />
              }
            />
            <Route
              path="/admin/payments"
              element={
                <PrivateRoute
                  element={<PaymentManagement />}
                  allowedRoles={[Role.admin]}
                />
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 