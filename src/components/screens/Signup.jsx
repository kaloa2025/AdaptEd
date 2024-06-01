import React from 'react';
import '../../styles/loginsignup.css';
import { Form, Input, Button, Spin, Alert } from 'antd';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const {loading,error,registerUser}=useSignup();
    const handleRegister = (values) => {
        registerUser(values);
    };

    return (
        <div className='login-container'>
            <div className="header">
                <div className="heading1">Create an Account</div>
                <div className="heading2">Enter your email to sign up for this app</div>
            </div>
            <Form onFinish={handleRegister} autoComplete='off'>
                        <Form.Item
                            name="email"
                            className='input'
                            rules={[
                                { required: true, message: 'Enter valid Email' },
                                { type: 'email', message: 'This is not a valid Email' },
                            ]}
                        >
                            <Input type="email" placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            className='input'
                            rules={[
                                { required: true, message: 'Please enter your Password' },
                            ]}
                        >
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                
                {
                    error && (
                        <Alert
                            description={error} 
                            type='error' 
                            showIcon
                            closable 
                            className="alert"/>
                    )
                } 
               
                <div className="submit-container">
                    <Form.Item>
                        {/* <Button type="primary" htmlType="submit" className="submit1">
                            Sign up with email
                        </Button>
                    */}
                    
                    <Button type={`${loading ? '' : 'primary'}`} htmlType="submit" className="submit1">
                        {loading ? <Spin/> : 'Sign up with email'} 
                    </Button> 
                   
                    <Link to='/login'>
                        <div className="submit2">Login</div>
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

export default Signup;
