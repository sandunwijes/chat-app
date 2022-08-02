import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import { Typography } from "@mui/material";


const ChatList = () => {

  const CONTACTS =[
    {name:'Melody Macy',email:'melody@altbox.com',img:'https://material-ui.com/static/images/avatar/9.jpg'},
    {name:'Max Smith',email:'max@kt.com',img:'https://material-ui.com/static/images/avatar/5.jpg'}, 
    {name:'Sean Bean',email:'sean@dellito.com',img:'https://material-ui.com/static/images/avatar/2.jpg'},
    {name:'Brian Cox',email:'brian@exchange.com',img:'https://material-ui.com/static/images/avatar/1.jpg'}, 
    {name:'Mikaela Coliins',email:'mikela@pexcom.com',img:'https://material-ui.com/static/images/avatar/9.jpg'},
    {name:'Francis Mitcham',email:'f.mitcham@kpmg.com.au',img:'https://material-ui.com/static/images/avatar/6.jpg'}, 
    {name:'Olivia Wild',email:'olivia@corpmail.com',img:'https://material-ui.com/static/images/avatar/9.jpg'},
    {name:'Neil Owen',email:'owen.neil@gmail.com',img:'https://material-ui.com/static/images/avatar/8.jpg'}, 
    {name:'Dan Wilson',email:'dan@consilting.com',img:'https://material-ui.com/static/images/avatar/2.jpg'}, 
    {name:'Emma Bold',email:'emma@intenso.com',img:'https://material-ui.com/static/images/avatar/10.jpg'}
]

  let CONTACTS_LIST = []
  for (let i = 0; i < 10 ; i++){

    CONTACTS_LIST.push( <ListItem alignItems="flex-start" button key={CONTACTS[i].name}>
    <ListItemAvatar>
      <Avatar
        alt={CONTACTS[i].name}
        src={CONTACTS[i].img}
      />
    </ListItemAvatar>
    <ListItemText
      primary={
        <React.Fragment>
          <Typography
            sx={{
              color: "black",
              display: "inline",
              fontWeight: "bold",
              fontFamily: "Arial",
              fontSize: 14,
            }}
          >
            {CONTACTS[i].name}
          </Typography>
        </React.Fragment>
      }
      secondary={CONTACTS[i].email}
    ></ListItemText>
    </ListItem>)
  }




    return (
      <div>
        {CONTACTS_LIST}
      </div>
    );
  };




export default ChatList;
