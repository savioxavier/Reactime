import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Container, Grid, Header } from 'semantic-ui-react';
import { styles } from '../styles';

const MainTime = () => {
  const init = dayjs();
  const [date, setDate] = useState(init);

  const tick = () => {
    setDate(dayjs());
  };

  useEffect(() => {
    const timerID = setTimeout(() => tick(), 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [date]);

  const format = dayjs().format('h:mm:ss A');
  const titleFormat = dayjs().format('h:mm A');

  document.title = `Reactime • ${titleFormat}`;

  return (
    <Container style={styles.mainContainer}>
      <Grid textAlign="center" style={styles.mainContainerGrid}>
        <Grid.Column style={styles.mainContainerGridColumn}>
          <Header style={styles.introText} textAlign="center">
            The time is
          </Header>
          <Header textAlign="center" style={styles.mainHeader}>
            {format}
          </Header>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MainTime;
