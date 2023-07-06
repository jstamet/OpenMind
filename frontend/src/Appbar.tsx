import { Box, Icon, Popover } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material";
import YourLogo from "/brain_icon.png";
import { useNavigate } from "react-router-dom";
import { NestedMenuItem } from "mui-nested-menu";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const pages = ["About", "Login"];

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    navigate("/" + page.toLowerCase().replace(" ", "-"));
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    page: string
  ) => {
    if (page === "Mushroom Research") {
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Icon sx={{ display: { s: "none", md: "flex" }, mr: 1 }}>
              <img src={YourLogo} height={25} width={25} />
            </Icon>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OpenMind
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem  key={page} onClick={() => handleCloseNavMenu(page)} onMouseEnter={(e) =>handlePopoverOpen(e,page)}
                  onMouseLeave={handlePopoverClose}
                  >
                    
                    <Typography textAlign="center">{page}</Typography>
                    {(page==="Mushroom Research" && open) && <CustomizedMenus anchorEl={anchorEl}></CustomizedMenus>}
                    

                  </MenuItem>
                ))} */}

                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                    onMouseEnter={(e) => handlePopoverOpen(e, page)}
                    onMouseLeave={handlePopoverClose}
                  >
                    {page}
                    {/* {(page==="Mushroom Research" && open) && <CustomizedMenus anchorEl={anchorEl}></CustomizedMenus>} */}
                  </Button>
                ))}
                <NestedMenuItem label="Research" parentMenuOpen={true}>
                  <MenuItem onClick={() => handleCloseNavMenu("citizen")}>
                    Citizen Science
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseNavMenu("neuroscience")}>
                    Neuroscience
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseNavMenu("health")}>
                    Mental Health
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseNavMenu("agriculture")}>
                    Sustainable Agriculture
                  </MenuItem>
                </NestedMenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OpenSpores
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 0, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
              <NestedMenuItem label="Research" parentMenuOpen={true}>
                <MenuItem onClick={() => handleCloseNavMenu("citizen")}>
                  Citizen Science
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu("neuroscience")}>
                  Neuroscience
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu("health")}>
                  Mental Health
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu("agriculture")}>
                  Sustainable Agriculture
                </MenuItem>
              </NestedMenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="OpenMind" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={false}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
