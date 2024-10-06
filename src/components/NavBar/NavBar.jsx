import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness7,
  Brightness4,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Sidebar } from "..";

const NavBar = () => {
  const classes = useStyles();
  // To check for the mobile devices
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />{" "}
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src="data:image/jpeg;base64,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"
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keyMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
