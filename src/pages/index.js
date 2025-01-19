import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { Box, Grid, TextField, Typography, Avatar, useMediaQuery } from "@mui/material";

export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "rgb(18, 161, 239)", overflow: "hidden" }}>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isSmallScreen ? "space-between" : "space-between", // Adjust for small screens
          p: 2,
          bgcolor: "rgb(67, 169, 237)", // Background color for the navbar
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect for depth
          borderBottom: "3px solid #000", // Border for the navbar
        }}
      >
        {/* Brand Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#000",
            position:"relative",
            marginLeft: isSmallScreen ? "0" : "200px", // Align to the left for small screens
            position: isSmallScreen ? "relative" : "static", // Adjust position for small screens
          }}
        >
          Brand Name
        </Typography>

        {/* Search Bar */}
        {!isSmallScreen && (
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{
              flex: 1,
              maxWidth: "400px",
              marginLeft: "1px",
              position: "relative", // Enable manual positioning
              left: "-200px", // Adjust this to move the bar
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* Profile */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#007BFF", mr: 1 }}>J</Avatar>
          <Typography variant="body1">John</Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ p: 2, height: "calc(100vh - 64px)", overflow: "auto" }}>
        {isSmallScreen ? (
          // Small Screen Layout (Unchanged)
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Box
                sx={{
                  height: "600px",
                  bgcolor: "rgb(48, 160, 230)", // Background color for the screen
                  border: "2px solid #000", // Border for the screen
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px", // Rounded corners
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect for depth
                }}
              >
                <Typography variant="h6">Screen 1</Typography>
              </Box>
            </Grid>
          </Grid>
        ) : (
          // Large Screen Layout
          <Grid container spacing={2}>
            {/* First Screen in the Center */}
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                mt: 0,
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  height: "650px",
                  bgcolor: "rgb(72, 123, 241)", // Background color for the screen
                  border: "2px solid #000", // Border for the screen
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "350px",
                  marginBottom:"700px",
                  borderRadius: "10px", // Rounded corners
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect for depth
                }}
              >
                <Typography variant="h6"></Typography>
              </Box>
            </Grid>

            {/* Second Screen on the Right Under Profile */}
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  height: "500px",
                  bgcolor: "rgb(43, 116, 232)", // Background color for the screen
                  border: "2px solid #000", // Border for the screen
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px", // Rounded corners
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect for depth
                }}
              >
                <Typography variant="h6"></Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
