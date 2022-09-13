import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";
import EditIcon from "@mui/icons-material/Edit";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import EventNoteIcon from "@mui/icons-material/EventNote";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<EditIcon />}
        fontSize="large"
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarBorderIcon} title="Starred" number={5} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={10} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={18} />
      <SidebarOption Icon={NearMeIcon} title="Send" number={70} />
      <SidebarOption Icon={EventNoteIcon} title="Drafts" number={1} />
      <SidebarOption
        Icon={KeyboardDoubleArrowRightIcon}
        title="Categories"
        number={8}
      />
    </div>
  );
}

export default Sidebar;
