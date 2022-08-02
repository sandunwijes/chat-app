import React from 'react'
import ChatBody from './ChatBody'
import ChatHead from './ChatHead'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";


function ChatContainer() {
  return (
    <div>
        <Card>
          <Grid container xs={12}>
            <Grid item xs={12} sx={{ p: 2 }}>
              <ChatHead/>
            </Grid>

            <Grid item xs={12}> 
              <ChatBody/>
            </Grid>
            {/* <Grid item xs={12}> 
              <ChatInput/>
            </Grid> */}
            
          </Grid>
        </Card>

    </div>
  )
}

export default ChatContainer