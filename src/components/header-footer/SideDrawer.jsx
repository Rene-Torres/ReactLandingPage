import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("perro")}>
          Event starts In
        </ListItem>
        <ListItem button onClick={() => console.log("perro")}>
          Info
        </ListItem>
        <ListItem button onClick={() => console.log("perro")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("perro")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("perro")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
