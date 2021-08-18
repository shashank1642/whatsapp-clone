import { Avatar } from '@material-ui/core';
import React,{useEffect ,useState} from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons'


import "./Chat.css";

function Chat() {
    const [seed, setSeed] =useState("");
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random() *5000));
    },[]);
    return (
        <div className="chat">
            
        <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="chat_headerInfo">
            <h3>Room name</h3>
            <p> lAST SEEN</p>

            </div>
         <div className="chat_headerRight">
                <IconButton>
                <SearchOutlined/>
                </IconButton>
                <IconButton>
                <AttachFileIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
             
        </div>   
        </div>
        <div className="chat_body">
            
        </div>
        <div className="chat_footer">

        </div>
        </div>
    )
}

export default Chat;
