import Navbar from '@/components/layout/navbar';
import { SessionProvider } from '@hono/auth-js/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthPage from './pages/auth';
import ChatbotPage from './pages/chatbot';
import EmailVerificationPage from './pages/emailverification';
import ForgotPasswordPage from './pages/forgotpass';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ResponsePage from './pages/response';

// import ClientExample from './client-example';

const AppContent: React.FC = () => {
    const theme = localStorage.getItem('theme') || 'light';
    const [isDarkMode, setIsDarkMode] = React.useState(theme === 'dark');

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className="h-[calc(100vh-4rem)] bg-white dark:bg-[#121212]">
                <Router>
                    <div className="container mx-auto p-4">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <LandingPage isDarkMode={isDarkMode} />
                                }
                            />
                            <Route path="/chat" element={<ChatbotPage />} />
                            <Route path="/auth" element={<AuthPage />} />
                            <Route
                                path="/response"
                                element={<ResponsePage />}
                            />
                            <Route
                                path="/forgotpassword"
                                element={<ForgotPasswordPage />}
                            />
                            <Route
                                path="/emailverify"
                                element={<EmailVerificationPage />}
                            />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <SessionProvider>
            <AppContent />
        </SessionProvider>
    );
};

export default App;
