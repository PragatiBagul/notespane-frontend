import {
  Button,
  List,
  ListItem,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";


const HelpGuide = () => {
  return (<h1>Help Guide Here</h1>)
};

export default HelpGuide;

    /*
    <List>
            {helpGuide.map((card,index)=>(<ListItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image=""
            />
            <CardContent>{helpGuide.title}</CardContent>
            <CardActions>
              <Link
                to={helpGuide.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  Visit &emsp;
                  <PublicIcon />
                </Button>
              </Link>
            </CardActions>
          </Card>}
        </ListItem>
))
    </List>}</>



    */