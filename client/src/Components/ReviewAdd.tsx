import React  from 'react';
// import React, { useState, useEffect }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReviewRating from './ReviewRating';

export default function SignUp() {
 /*  const [reviewData, setReviewData] = useState({
    reviewName: "",
    reviewType: "",
    reviewClass: "",
  });
  
  const [valid, setValid] = useState(false);
   */
/*   useEffect(() => {
    if (reviewData.reviewName && reviewData.reviewType && reviewData.reviewClass) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [reviewData]); */
  
  /*   const handleChange = (e) => {
    setReviewData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewData.reviewName || !reviewData.reviewType || !reviewData.reviewClass)
      return alert(
        "Dear Friend! Would you be so kind as to privide us with full information?"
      );
    if (valid) {
      createReview(reviewData);
      setReviewData({ reviewName: "", reviewType: "", reviewClass: "" });
    }
  }; */
  
  
  const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  }));
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md" >
      <CssBaseline />
      <div className={classes.paper} style={{background: "lightblue"}}>
        <Avatar className={classes.avatar}>
          <ContactMailIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Add Review
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="cname"
                name="customerName"
                variant="outlined"
                required
                fullWidth
                id="customerName"
                label="Customer Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Text of review"
                name="description"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ReviewRating score={0}></ReviewRating>
            </Grid>
       
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Review
          </Button>

        </form>
      </div>
    </Container>
  )
}
