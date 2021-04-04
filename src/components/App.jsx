import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Car from './Car';
import Footer from './Footer';
import cars from '../cars';

const useStyles = makeStyles({
  root: {
    marginTop: '10%',
  },
  footer: {
    textAlign: 'center',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        {cars.map(car => {
          return (
            <Grid item xs={12} sm={4}>
              <Car
                image={car.image}
                title={car.title}
                content={car.content}
                color={car.color}
                position={car.position}
              />
            </Grid>
          )
        })}
      </Grid>
      <Container className={classes.footer}>
        <Footer />
      </Container>
    </Container>
  );
}

export default App;
