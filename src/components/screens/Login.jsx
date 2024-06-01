import React from 'react';
import '../../styles/loginsignup.css';
import { Form, Input, Button, Spin} from 'antd';
import { Link } from 'react-router-dom';
import Alert from 'antd/es/alert/Alert';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const {loading, error, loginUser}=useLogin();
    const handleLogin = async (values) => {
        await loginUser(values);
    };

    return (
        <div className='login-container'>
            <div className="header">
                <div className="heading1">LOGIN</div>   
                <div className="heading2">Welcome back!</div>              
            </div>
            <Form onFinish={handleLogin} autoComplete='off'>
                <Form.Item
                name="email"
                className='input'
                rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input type="email" placeholder="Email" />
                </Form.Item>
                
                <Form.Item
                name="password"
                className='input'
                rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input type="password" placeholder="Password" />
                </Form.Item>
                   
                {error && (
                        <Alert
                            description={error} 
                            type="error" 
                            showIcon
                            closable 
                            className="alert"/>
                    )
                } 

                <div className="submit-container">
                    <Form.Item>
                        <Button type={`${loading?'':'primary'}`} htmlType="submit" className="submit1">
                            {loading?<Spin/>:'Login'}
                        </Button>
                    
                    <Link to='/signup'>
                        <div className="submit2">New Registration</div>
                    </Link>
                    </Form.Item>
                </div>
            </Form>

            <div className="termscond">
                <div className="text">
                    By clicking continue, you agree to our <span>Terms of Services</span> and <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
