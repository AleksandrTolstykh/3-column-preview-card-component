import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled } from '@material-ui/core/styles';
import styles from 'styled-components';

const useStyles = makeStyles({
  image: {
    width: '20%',
    margin: '15px',
  },
  title: {
    color: 'hsl(0, 0%, 95%)',
    fontFamily: 'Big Shoulders Display',
    fontWeight: 700,
    fontSize: '30px',
  },
  content: {
    color: 'hsla(0, 0%, 100%, 0.75)',
    fontFamily: 'Lexend Deca',
    fontWeight: 400,
    fontSize: '15px',
  },
  padding: {
    padding: '30px',
  },
});

function Car(props) {
  const classes = useStyles();

  const ColorCard = styled(Card)(innerProps => ({
    backgroundColor: props.color,
    borderTopLeftRadius: props.position === 'left' ? '15px' : 0,
    borderTopRightRadius: props.position === 'right' ? '15px' : 0,
    borderBottomLeftRadius: props.position === 'left' ? '15px' : 0,
    borderBottomRightRadius: props.position === 'right' ? '15px' : 0,
    [innerProps.theme.breakpoints.down('xs')]: {
      borderTopLeftRadius: props.position === 'left' ? '15px' : 0,
      borderTopRightRadius: props.position === 'left' ? '15px' : 0,
      borderBottomLeftRadius: props.position === 'right' ? '15px' : 0,
      borderBottomRightRadius: props.position === 'right' ? '15px' : 0,
    },
  }));

  const ColorButton = styles(Button)`
    background-color: hsl(0, 0%, 95%);
    border: solid 3px;
    border-radius: 40px;
    color: ${props.color};
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15px;
    margin: 30px 0 15px 0;
    text-transform: none;
    &:hover {
      background-color: ${props.color};
      color: hsl(0, 0%, 95%);
    }
  `;

  return (
    <ColorCard className={props.style + ' ' + classes.padding}>
      <CardMedia
        className={classes.image}
        src={'images/' + props.image}
        component='img'
      />
      <CardHeader
        title={
          <Typography className={classes.title} variant='inherit'>
            {props.title}
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <div>{props.content}</div>
        <ColorButton variant='contained'>Learn More</ColorButton>
      </CardContent>
    </ColorCard>
  );
}

export default Car;
