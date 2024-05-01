import { Link } from "react-router-dom";
import { tokens } from "../../themes";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";

export default function Item({title, to, icon, selected, setSelected}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
      active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    )
  }