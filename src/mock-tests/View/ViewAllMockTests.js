import { useState, useEffect } from "react";
import MockTestThumbnail from "./MockTestThumbnail";
import { Container, Grid, Fab, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { fetchMockTests, fetchPublicMockTests } from "../../utils/RequestEndPoints";
import Preloader from "../../preloader/Preloader";
const ViewAllMockTests = ({ setView, setId }) => {
    const [mockTests, setMockTests] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [publicMockTests, setPublicMockTests] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        var fetch = async () => {
            var response = await fetchMockTests();
            return response;
        };
        setTimeout(async () => {
            const response = await fetch();
            console.log(response);
            setMockTests(response);
        }, 1000);
        var fetch = async () => {
            var response = await fetchPublicMockTests();
            return response;
        };
        setTimeout(async () => {
            const response = await fetch();
            setPublicMockTests(response);
            setIsPending(false);
        }, 1000);
        setRefresh(true);
    }, [refresh]);

    return (
        <>
            {isPending && <Preloader />}
            {!isPending && (
                <Container>
                    <Grid container spacing={2}>{!isPending && mockTests.map((mockTest, index) => (
                        <MockTestThumbnail key={index} mockTest={mockTest} setView={setView} setId={setId} />
                    ))}</Grid>
                    <Divider />
                    <Grid container spacing={2}>{!isPending && publicMockTests.map((mockTest, index) => (
                        <MockTestThumbnail key={index} mockTest={mockTest} setView={setView} setId={setId} />
                    ))}</Grid>
                    <Fab color="primary" aria-label="add" style={{ position: "absolute", right: "0", bottom: "0", margin: "2.5%" }} onClick={() => setView("create")}>
                        <AddIcon />
                    </Fab>
                </Container>
            )}</>);
}

export default ViewAllMockTests;