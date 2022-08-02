import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import ChatBody from './ChatContainer/ChatBody';
import ChatMenu from './ChatMenu/ChatMenu';
import ChatContainer from './ChatContainer/ChatContainer';


const ChatApp = () => {
  

  return (

    <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} md={5}  >
            <ChatMenu/>
          </Grid>

          <Grid item xs={8} md={7} >
          <ChatContainer/>
          </Grid>
        </Grid>
    </Container>

  );
}

export default ChatApp;