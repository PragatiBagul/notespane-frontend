import React from "react";
import CardContent from "@mui/material/CardContent";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Card from "@mui/material/Card";

export default function MotivationalMusic() {
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  return (
    <div style={{}}>
      <h4>How to create Music Player UI in ReactJS?</h4>
      <Card
        style={{
          width: 400,
          display: "flex",
          backgroundColor: "whitesmoke",
          boxShadow: "4px 4px 4px gray",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            style={{
              flex: "1 0 auto",
            }}
          >
            <Typography component="h5" variant="h5">
              Music Title
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Singer Name
            </Typography>
          </CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 1,
              paddingBottom: 1,
            }}
          >
            <IconButton aria-label="previous">
              {useTheme().direction !== "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon
                style={{
                  height: 38,
                  width: 38,
                }}
                onClick={playAudio}
              />
            </IconButton>
            <IconButton aria-label="next">
              {useTheme().direction !== "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
          </div>
        </div>
        <CardMedia
          style={{
            width: 151,
          }}
          image="https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
        />
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </Card>
    </div>
  );
}
