import React, { useState } from 'react';
import './Login.scss';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/constants';

const Login = () => {
    const navigate = useNavigate();

    const navigateToDestination = (state) => {
        navigate(PAGE_ROUTES.HOME, { state })
    }

    const [username, setUsername] = useState('');


    const login = (e) => {
        e.preventDefault();

        const body = {
            username
        }
        navigateToDestination(body)
    }

    return (
        <div className='container'>
            <Input
                type="text"
                placeholder="Enter UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required = {true}
            />
            <Button onClick={login}>Login</Button>
        </div>
    );
}

export default Login;