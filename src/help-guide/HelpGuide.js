import { List, ListItem, Box } from "@mui/material";
import helpGuideData from "./helpGuideData.json";
import { Typography, Container } from "@mui/material";
import { purple } from "@mui/material/colors";
import "../css/general.css";
import useWindowDimensions from "../utils/useWindowDimensions";
const HelpGuide = () => {
  const { height, width } = useWindowDimensions();
  return (
    <Box className="infinitescroll" style={{ width: "100%", height: height, padding: 2 }}>
      <div>
        <Typography variant="h3" sx={{ color: "#4a148c", padding: 2 }}>Help Guide Here</Typography>
        {helpGuideData.map((value, key) => {
          return (
            <div>
              <List>
                <ListItem>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      width: 1,
                      "&:hover": {
                        backgroundColor: "white",
                        boxShadow: 8
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "text.primary",
                        fontSize: 24,
                        fontWeight: "light",
                      }}
                    >
                      {value.title}
                    </Box>

                    <Box
                      sx={{
                        color: "text.secondary",
                        display: "inline",
                        fontSize: 18,
                      }}
                    >
                      <a href={value.link} target="blank">
                        {value.link}
                      </a>
                    </Box>
                  </Box>
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default HelpGuide;
