import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { message } from "antd";

const useLogin = () => {
    const {login} = useAuth();
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(null);
    
    const loginUser=async(values)=>{
        try{
            setError(null);
            setLoading(true);
            const res=await fetch('https://adapted-1-back.onrender.com/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(values),
            });
            const data=await res.json();
            if(res.status===200){
                message.success(data.message);
                login(data.toke,data.user);
            } else if(res.status===400){
                setError(data.message);
            } else{
                message.error('Login failed');
            }
        }catch(error)
        {
            message.error(error);
        }finally{
            setLoading(false);
        }
    };
    return {loading,error,loginUser};
}

export default useLogin