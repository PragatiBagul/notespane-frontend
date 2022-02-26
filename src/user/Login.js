import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../hooks/useAuth";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import { Card, CardActions, List, ListItem } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
const Login = () => {
  const { SendSignInLinkToEmail, googleSignIn, githubSignIn, facebookSignIn } =
    useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    try {
      await githubSignIn();
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await SendSignInLinkToEmail(email);
      setEmailSent(true);
      console.log("email sent");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  return (
    <Card style={{width:"fit-content"}}>
      <CardActions>
        <List>
          {error && <ListItem><Alert severity="error">{error}</Alert></ListItem>}
        {emailSent && (
          <ListItem><Alert severity="success">Check your email to complete login</Alert></ListItem>
        )}
        <form onSubmit={handleEmailSignIn}>
          <ListItem>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={email}
                onInput={(e) => setEmail(e.target.value)}
                fullWidth
          />
          </ListItem>
          <ListItem>
          <Button variant="outlined" type="submit" size="large" fullWidth>
            <EmailIcon color="primary"/>&emsp;Send Link to email 
          </Button>
          </ListItem>
            </form>
          <ListItem>
          <GoogleLoginButton variant="outlined" onClick={handleGoogleSignIn}/>
          </ListItem>
          <ListItem>
          <GithubLoginButton onClick={handleGithubSignIn}/>
          </ListItem>
          <ListItem>
          <FacebookLoginButton onClick={handleFacebookSignIn}/>
          </ListItem>
        </List>
      </CardActions>
</Card>
  );
};

export default Login;
