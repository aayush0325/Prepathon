import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SessionProvider } from '@hono/auth-js/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/auth.tsx';
import ChatbotPage from './pages/chatbot.tsx';
import EmailVerficationPage from './pages/emailverification.tsx';
import ForgotPasswordPage from './pages/forgotpass.tsx';
import HistoryPage from './pages/history.tsx';
import LandingPage from './pages/landing.tsx';
import LoginPage from './pages/login.tsx';
import ResponsePage from './pages/response.tsx';
import ComputationsPage from './pages/computations.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/chat',
        element: <ComputationsPage />,
    },
    {
        path: '/history',
        element: <HistoryPage />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
    {
        path: '/response',
        element: <ResponsePage />,
    },
    {
        path: '/forgotpassword',
        element: <ForgotPasswordPage />,
    },
    {
        path: '/emailverify',
        element: <EmailVerficationPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SessionProvider>
            <RouterProvider router={router} />
        </SessionProvider>
    </StrictMode>
);
