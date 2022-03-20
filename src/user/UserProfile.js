import { Box, Card, CardContent, Typography, TextField, Button, Grid, CardActions } from "@mui/material";
import { useEffect } from "react";
import { fetchUserProfile } from "../utils/RequestEndPoints";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
const UserProfile = () => {
    const { Logout, user, isAuthenticating } = useAuth();
    const [email, setEmail] = useState();
    const [uid, setUid] = useState();
    const [name, setName] = useState();
    const [lastLogin, setLastLogin] = useState();
    const [websiteURL, setWebsiteURL] = useState();
    const [facebookURL, setFacebookURL] = useState();
    const [linkedInURL, setLinkedInURL] = useState();
    const [pronoun, setPronoun] = useState();
    const [qualification, setQualification] = useState();
    const [userState, setUserState] = useState(false);

    useEffect(async () => {
        if (!isAuthenticating) {
            const res = await fetchUserProfile(user);
            setEmail(res.email);
            setUid(res.uid);
            setName(res.name);
            setLastLogin(res.lastLogin);
            setWebsiteURL(res.websiteURL);
            setLinkedInURL(res.linkedInURL);
            setFacebookURL(res.facebookURL);
            setPronoun(res.pronoun);
            setQualification(res.qualification);
            setUserState(true);
        }
    }, [userState]);

    const updateDetails = () => {
        const userProfile = {
            "uid": uid,
            "email": email,
            "name": name,
            
        }
    }
    return (
        <Box>
            <br />
            <br />
            <br />
            {userState && (
                <Card raised="true">
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>Name</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField variant="standard" size="medium" value={name} onChange={(e) => setName(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>Email</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth></TextField>
                            </Grid>

                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>Pronoun</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={pronoun} onChange={(e) => setPronoun(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>Qualification</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={qualification} onChange={(e) => setQualification(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>Website URL</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={websiteURL} onChange={(e) => setWebsiteURL(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>LinkedIn URL</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={linkedInURL} onChange={(e) => setLinkedInURL(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" fullWidth>Facebook URL</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField variant="standard" value={facebookURL} onChange={(e) => setFacebookURL(e.target.value)} fullWidth></TextField>
                            </Grid>
                        </Grid>
                        <CardActions>
                            <Button variant="contained" onClick={updateDetails}>Save</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            )}
        </Box>);
}

export default UserProfile;