import { useState } from "react";

import logo from "../logo.svg";

// own components
import Container from "../../components/Container/Container";

// audio lib
var jsmediatags = window.jsmediatags;

const Player = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("unknow");
  const [artist, setArtist] = useState("unknow");
  const [album, setAlbum] = useState("unknow");
  const [genre, setGenre] = useState("unknow");
  const handleInput = (e) => {
    const file = e.target.files[0];

    jsmediatags.read(file, {
      onSuccess: function (tag) {
        console.log(tag);
        // Array buffer to base64
        const data = tag.tags.picture.data;
        const format = tag.tags.picture.format;
        let base64String = "";
        for (let i = 0; i < data.length; i++) {
          base64String += String.fromCharCode(data[i]);
        }
        // Output media tags
        document.querySelector(
          "#cover"
        ).style.backgroundImage = `url(data:${format};base64,${window.btoa(
          base64String
        )})`;

        setTitle(tag.tags.title);
        setArtist(tag.tags.artist);
        setAlbum(tag.tags.album);
        setGenre(tag.tags.genre);
      },
      onError: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <Container>
      <img src={logo} className="App-logo" alt="logo" />
      <input
        type="file"
        id="input"
        accept=".mp3, .wav"
        onChange={handleInput}
      />
      <div id="cover"></div>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{genre}</p>
    </Container>
  );
};

export default Player;
