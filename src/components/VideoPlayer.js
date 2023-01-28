import React from "react";
import { Player, BigPlayButton, ForwardControl, ControlBar } from "video-react";
import { useLocation } from "react-router-dom";

export default function VideoPlayer() {
  const movieURL =
    "http://192.168.29.88:8000/" + useLocation().pathname.substring(7);

  return (
    <Player playsInline preload="auto" src={movieURL}>
      <BigPlayButton position="center" />
      <ControlBar autoHide={true}>
        <ForwardControl seconds={5} order={3.1} />
        <ForwardControl seconds={10} order={3.2} />
        <ForwardControl seconds={30} order={3.3} />
      </ControlBar>
    </Player>
  );
}
