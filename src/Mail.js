import React from "react";
import "./Mail.css";
import { Icon, IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Mail() {
  const history = useHistory();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>

          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>

          <IconButton>
            <MailOutlineIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleOutlineIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight"></div>
      </div>
    </div>
  );
}

export default Mail;
