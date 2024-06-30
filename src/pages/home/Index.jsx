import React ,{useState,useCallback}from 'react';
import { useNavigate}from 'react-router-dom'

const HomePage = ()=>{
    const[value,setValue] =useState();

    const navigate =useNavigate()

    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`);

    },[navigate, value]); 
    return ( 

        <div>
            <input 
            Value={value}
            onChange={(e)=>setValue(e.target.value)}
            type="text" placeholder='Enter the Video Meeting ' />
            <button onClick={handleJoinRoom}>Conect To Bonding</button>
        </div>
    );
};
export default HomePage;