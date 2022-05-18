import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
const Footer = () => {
    return (<Box sx={{ bgcolor: purple[50], p: 6, pb: 12, bottom: 0 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            That's all
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            You have scrolled to the end
        </Typography>
    </Box >);
}

export default Footer;