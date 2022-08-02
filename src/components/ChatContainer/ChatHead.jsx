import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

function ChatHead() {
  return (
    <div>
       <Grid item xs={12}>
          <Typography
            sx={{
              color: "black",
              display: "inline",
              fontWeight: "bold",
              fontFamily: "Arial",
              fontSize: 14,
              padding: 2,
            }}
          >
            Brian Cox
          </Typography>
          <Typography
            sx={{ ml: 2 }}
            variant="caption"
            display="block"
            gutterBottom
          >
            Active
          </Typography>
        </Grid> 


    </div>
  )
}

export default ChatHead