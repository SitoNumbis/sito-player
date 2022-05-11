// own components
import Container from "../../components/Container/Container";

// codememe2share
import MemeShare from "codememe2share";

// layouts
import Playlist from "../../layouts/Playlist/Playlist";
import Player from "../../layouts/Player/Player";
import Login from "../../layouts/Login/Login";
import BlackShape from "../../layouts/BlackShape/BlackShape";

const Home = () => {
  return (
    <MemeShare background="random">
      <BlackShape />
      <Login />
      <Container>
        <Player />
        <Playlist />
      </Container>
    </MemeShare>
  );
};

export default Home;
