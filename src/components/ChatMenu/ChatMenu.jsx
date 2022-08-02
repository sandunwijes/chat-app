import React from 'react'
import ChatList from './ChatList'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import SearchBar from "./SearchBar";


function ChatMenu() {
  return (
    <div>
        <Card>
          <Grid container xs={12}>
            <Grid item xs={12} sx={{ p: 2 }}>
              <SearchBar />
            </Grid>

            <Grid item xs={12}> 
              <List>
              <ChatList/>
              </List>
            </Grid>
            
          </Grid>
        </Card>
      </div>
  )
}

export default ChatMenu