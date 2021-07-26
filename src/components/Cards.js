import React, { useState, useEffect } from "react";
import { Grid, Card, Reveal } from "semantic-ui-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import advanced from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import { styles } from "../styles";

const TimeCard = ({ name, tz, offset, alt }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(advanced);

  const init = dayjs();
  const [date, setDate] = useState(init);

  const tick = () => {
    setDate(dayjs());
  };

  useEffect(() => {
    const millisecondsInAMinute = 1000 * 60;

    const timerID = setTimeout(() => tick(), millisecondsInAMinute);
    return () => {
      clearTimeout(timerID);
    };
  }, [date]);

  let altDisplay;

  if (!alt.length) {
    altDisplay = "No major places";
  } else {
    altDisplay = alt.map((v) => `${v}, `);
  }

  const format = dayjs().tz(tz).format("h:mm A");

  return (
    <Grid.Column>
      <Reveal animated="move" style={styles.reveal}>
        <Reveal.Content visible>
          <Card style={styles.timeCard}>
            <Card.Content style={styles.timeCardContent}>
              <Card.Header style={styles.timeCardContent}>{name}</Card.Header>
              <Card.Meta style={styles.timeCardContent}>
                <span className="date">{`UTC ${offset}`}</span>
              </Card.Meta>
              <Card.Description style={styles.timeCardContent}>
                {format}
              </Card.Description>
            </Card.Content>
          </Card>
        </Reveal.Content>

        <Reveal.Content hidden>
          <Card style={styles.timeCard}>
            <Card.Content style={styles.timeCardContent}>
              <Card.Header style={styles.timeCardContent}>
                Other major places:
              </Card.Header>
              <Card.Meta style={styles.timeCardContent}>
                <span className="date">{`UTC ${offset}`}</span>
              </Card.Meta>
              <Card.Description style={styles.timeCardContent}>
                {altDisplay}
              </Card.Description>
            </Card.Content>
          </Card>
        </Reveal.Content>
      </Reveal>
    </Grid.Column>
  );
};

export default TimeCard;
