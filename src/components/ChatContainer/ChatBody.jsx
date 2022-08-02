import * as React from "react";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Button, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 10,
  padding: "6px 6px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#7D5DFE",
});

export default function ChatBody() {
 
  // const [enteredText, setEnteredText] = useState({ text: "" });
  // const [submittedText, setSubmittedText] = useState([]);


  // const textChangeHandler = (e) => {
  //   const newInput = (data) => ({ ...data, text: e.target.value });
  //   setEnteredText(newInput);
    
  // };
  
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const checkEmptyInput = !Object.values(enteredText).every(
  //     (res) => res === ""
  //   );
  //   if (checkEmptyInput) {
  //     const newData = () => [enteredText];
  //     setSubmittedText(newData);
  //     // const emptyInput = { text: "" };
  //     // setEnteredText(emptyInput);
  //   }
    
  const [data,setData]=useState("")
  const [print,setPrint]=useState(false)

  const textChangeHandler=(e)=>{
    setData(e.target.value)
    setPrint(false)
    
  }


const submitHandler=(e)=>{
  e.preventDefault();
  setPrint(true);
  
  console.log("you typed:", data) 
}

const today = new Date(),

time = today.getHours() + ':' + today.getMinutes();


  return (

    
    <div>
      <Card container>
        <Grid item xs={12}>
          <List className="messageArea">
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  {print ? <ListItemText
                    align="right"
                    primary={data}   //submittedText.map(data => data.text)
                  ></ListItemText> : null}
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary={time}></ListItemText>
                </Grid>
              </Grid>
            </ListItem> 
            
          </List>
        </Grid>
        <Grid container style={{ padding: "10px" }}>
          <Grid item xs={12}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Type a messege"
              inputProps={{ "aria-label": "Type a messege" }}
              onChange={textChangeHandler}
              // value={data}
            />
          </Grid>
        </Grid>

        <Grid container style={{ padding: "10px" }}>
          <Grid item xs={12} align="right">
            <BootstrapButton
              variant="contained"
              disableRipple
              onClick={submitHandler}
            >
              Send
            </BootstrapButton>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
