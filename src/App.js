import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Particles from "react-tsparticles";
import MainTime from "./components/MainTime";
import TimeCard from "./components/Cards";
import { options } from "./particles";
import { styles } from "./styles";

const Home = () => (
  <div>
    <Particles options={options} />

    <MainTime />

    <Header style={styles.tipText} textAlign="center">
      Pro tip: Hover/tap on any card to know more
    </Header>

    <Grid container centered columns={4} stackable style={styles.stackableGrid}>
      <TimeCard />
    </Grid>

    <Header style={styles.footerText} textAlign="center">
      Developed by Savio Xavier. Find me on
      {" "}
      <a
        href="http://github.com/savioxavier"
        alt="Link to my Github"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </Header>
  </div>
);

function App() {
  return <Home />;
}

export default App;
