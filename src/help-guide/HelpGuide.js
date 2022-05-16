import { List, ListItem, Box } from "@mui/material";
import helpGuideData from "./helpGuideData.json";
import { Container } from "@mui/material";
const HelpGuide = () => {
  return (
    <Container>
      <div>
        <h1>Help Guide Here</h1>
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
                        backgroundColor: "#f3e5f5",
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
    </Container>
  );
};

export default HelpGuide;
