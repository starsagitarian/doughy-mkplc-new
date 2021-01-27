import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 600,
    display: 'flex',
    alignItems: 'center',
  },
});

interface Headerprops{
  score: number
}

export function test(){
  return "something";
}

export default function ReviewRating(props: Headerprops) {
  
  React.useEffect(() => {
    setValue(props.score);}, []);

  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const HandleReset=()=>{setValue(0);};

  return (
    <div className={classes.root}>
      <p>
      <button data-testid='reset-button' style={{background: "darkblue", color: "whitesmoke"}} onClick={() => HandleReset()}>RESET</button>
      <p style={{background: "darkgreen", color: "whitesmoke"}}>VALUE:{value}</p>
      <br/>
      </p>
      <Rating data-testid='test-rating'
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={1}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}