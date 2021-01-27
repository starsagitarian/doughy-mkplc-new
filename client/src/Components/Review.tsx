import React from 'react';
import ReviewRating from './ReviewRating';
import IReview from "../Interfaces/IReview";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 700,
    margin: 20,
  },
  title: {
    fontSize: "2rem",
  },
  desc: {
    fontSize: "1.2rem",
  },
  pos: {
    marginBottom: 6,
  },
  large:{
    height: 60,
    width: 60,
    margin: 10,
  }
});

interface Headerprops{
   review: IReview;
}

// this Component is added to test TypeScript

export default function Review (props: Headerprops) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <p>Current Score:{props.review.score}</p>
      
      <CardContent>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        {props.review.bakery}
        </Typography>
      <ReviewRating score={props.review.score}/>
        <Typography className={classes.desc}  color="textSecondary">
        {props.review.description}
        </Typography>
        <Avatar
                className={classes.large}
                alt='Team Member'
                src={"/images/"+ props.review.customer  +".jpg"}
              ></Avatar>
                      <Typography className={classes.pos} color="textSecondary">
        {props.review.customer}  
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" style={{height: 30}} >Learn More</Button>
      </CardActions>
    </Card>
  );
}