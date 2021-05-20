import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../GlobalState/StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../GlobalState/reducer";

function Header() {
  const [
    {
      user: { user },
    },
    dispatch,
  ] = useStateValue();

  const signOut = () => {
    dispatch({ type: actionTypes.SET_USER, payload: null });
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={signOut}
        />
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search..." type="text" />
      </div>

      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
