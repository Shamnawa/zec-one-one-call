import React from 'react';
import {useParams} from 'react-router-dom';

import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () => {
    const {roomId}= useParams();

    const Mymeeting = async (element) =>{
        const appID = 1813752091;
        const serverSecret = "2af92762532ddb474340eb5f75a57b40";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,serverSecret,roomId, Date.now().toString(),"Shamnawa19"
        );
        const zc =ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom ({
            container:element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:`http://localhost:3000/room/${roomId}`,
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: false,
        })


    }
    return <div>
        <div ref ={Mymeeting}/>
    </div>
};
export default RoomPage;