import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Particles from "react-tsparticles";
import MainTime from "./components/MainTime";
import TimeCard from "./components/Cards";
import { options } from "./particles";
import { Timezones } from "./timezones";
import { styles } from "./styles";

const Home = () => (
  <div>
    <Particles options={options} />

    <MainTime />

    <Header style={styles.tipText} textAlign="center">
      Pro tip: Hover/tap on any card to know more
    </Header>

    <Grid container centered columns={4} stackable style={styles.stackableGrid}>
      <TimeCard
        name={Timezones.Nieu.name}
        tz={Timezones.Nieu.tz}
        offset={Timezones.Nieu.offset}
        alt={Timezones.Nieu.alt}
      />
      <TimeCard
        name={Timezones.Honululu.name}
        tz={Timezones.Honululu.tz}
        offset={Timezones.Honululu.offset}
        alt={Timezones.Honululu.alt}
      />
      <TimeCard
        name={Timezones.Anchorage.name}
        tz={Timezones.Anchorage.tz}
        offset={Timezones.Anchorage.offset}
        alt={Timezones.Anchorage.alt}
      />
      <TimeCard
        name={Timezones.LosAngeles.name}
        tz={Timezones.LosAngeles.tz}
        offset={Timezones.LosAngeles.offset}
        alt={Timezones.LosAngeles.alt}
      />
      <TimeCard
        name={Timezones.Denver.name}
        tz={Timezones.Denver.tz}
        offset={Timezones.Denver.offset}
        alt={Timezones.Denver.alt}
      />
      <TimeCard
        name={Timezones.CostaRica.name}
        tz={Timezones.CostaRica.tz}
        offset={Timezones.CostaRica.offset}
        alt={Timezones.CostaRica.alt}
      />
      <TimeCard
        name={Timezones.Toronto.name}
        tz={Timezones.Toronto.tz}
        offset={Timezones.Toronto.offset}
        alt={Timezones.Toronto.alt}
      />
      <TimeCard
        name={Timezones.Caracas.name}
        tz={Timezones.Caracas.tz}
        offset={Timezones.Caracas.offset}
        alt={Timezones.Caracas.alt}
      />
      <TimeCard
        name={Timezones.BuenosAires.name}
        tz={Timezones.BuenosAires.tz}
        offset={Timezones.BuenosAires.offset}
        alt={Timezones.BuenosAires.alt}
      />
      <TimeCard
        name={Timezones.London.name}
        tz={Timezones.London.tz}
        offset={Timezones.London.offset}
        alt={Timezones.London.alt}
      />
      <TimeCard
        name={Timezones.Paris.name}
        tz={Timezones.Paris.tz}
        offset={Timezones.Paris.offset}
        alt={Timezones.Paris.alt}
      />
      <TimeCard
        name={Timezones.Athens.name}
        tz={Timezones.Athens.tz}
        offset={Timezones.Athens.offset}
        alt={Timezones.Athens.alt}
      />
      <TimeCard
        name={Timezones.Moscow.name}
        tz={Timezones.Moscow.tz}
        offset={Timezones.Moscow.offset}
        alt={Timezones.Moscow.alt}
      />
      <TimeCard
        name={Timezones.Tehran.name}
        tz={Timezones.Tehran.tz}
        offset={Timezones.Tehran.offset}
        alt={Timezones.Tehran.alt}
      />
      <TimeCard
        name={Timezones.Dubai.name}
        tz={Timezones.Dubai.tz}
        offset={Timezones.Dubai.offset}
        alt={Timezones.Dubai.alt}
      />
      <TimeCard
        name={Timezones.Kabul.name}
        tz={Timezones.Kabul.tz}
        offset={Timezones.Kabul.offset}
        alt={Timezones.Kabul.alt}
      />
      <TimeCard
        name={Timezones.Delhi.name}
        tz={Timezones.Delhi.tz}
        offset={Timezones.Delhi.offset}
        alt={Timezones.Delhi.alt}
      />
      <TimeCard
        name={Timezones.Dhaka.name}
        tz={Timezones.Dhaka.tz}
        offset={Timezones.Dhaka.offset}
        alt={Timezones.Dhaka.alt}
      />
      <TimeCard
        name={Timezones.Bangkok.name}
        tz={Timezones.Bangkok.tz}
        offset={Timezones.Bangkok.offset}
        alt={Timezones.Bangkok.alt}
      />
      <TimeCard
        name={Timezones.Beijing.name}
        tz={Timezones.Beijing.tz}
        offset={Timezones.Beijing.offset}
        alt={Timezones.Beijing.alt}
      />
      <TimeCard
        name={Timezones.Tokyo.name}
        tz={Timezones.Tokyo.tz}
        offset={Timezones.Tokyo.offset}
        alt={Timezones.Tokyo.alt}
      />
      <TimeCard
        name={Timezones.Adelaide.name}
        tz={Timezones.Adelaide.tz}
        offset={Timezones.Adelaide.offset}
        alt={Timezones.Adelaide.alt}
      />
      <TimeCard
        name={Timezones.Sydney.name}
        tz={Timezones.Sydney.tz}
        offset={Timezones.Sydney.offset}
        alt={Timezones.Sydney.alt}
      />
      <TimeCard
        name={Timezones.Auckland.name}
        tz={Timezones.Auckland.tz}
        offset={Timezones.Auckland.offset}
        alt={Timezones.Auckland.alt}
      />
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
