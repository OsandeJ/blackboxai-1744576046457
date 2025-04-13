import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setError('Username and password are required.');
            return;
        }
        // Handle login logic here
        setError('');
        console.log('Logging in with:', { username, password });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#0d1b2a]">
            <div className="bg-[#1b263b] p-8 rounded-lg shadow-lg">
                <h1 className="text-[#e0e1dd] text-2xl font-bold mb-4">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input 
                    type="text" 
                    placeholder="Username" 
                    className="mb-4 p-2 rounded border border-[#415a77] w-full" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="mb-4 p-2 rounded border border-[#415a77] w-full" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className="w-full bg-[#415a77] text-[#e0e1dd] p-2 rounded hover:bg-[#778da9]"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
