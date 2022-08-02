import { IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div>
      {" "}
      <IconButton type="submit" sx={{ ml: 3 }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1 }}
        placeholder="Search by username"
        inputProps={{ "aria-label": "Search by username" }}
      />
    </div>
  );
}

export default SearchBar;





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