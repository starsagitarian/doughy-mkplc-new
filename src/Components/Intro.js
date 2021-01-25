import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "../Styles/App.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  dialog: {
    margin: 0,
    height: 400,
    width: 600,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  large: {
    width: 50,
    height: 50,
  },
}));

export default function Intro() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        style={{ color: "white", height: 30, margin: 8 }}
        onClick={handleClickOpen}
      >
        Repo5
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className={classes.root}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          <p style={{ fontSize: "2.8rem", margin: 5 }}>
            REPO
            <span
              className='customized-dialog-text'
              style={{ color: "white", backgroundColor: "darkRed" }}
            >
              5
            </span>
          </p>
        </DialogTitle>

        <DialogContent
          style={{
            height: 400,
            background: "orange",
            display: "flex",
            flexDirection: "column",
          }}
          dividers
        >
          <div className='dialog-content'>
            <Typography
              gutterBottom
              style={{
                color: "black",
                height: 30,
                margin: 8,
                fontSize: "3.4rem",
                fontFamily: "Arial",
                fontWeight: 800,
              }}
            >
              <p>
                YOUR REMOTE RE
                <span
                  className='customized-dialog-text'
                  style={{ color: "darkRed" }}
                >
                  FUCK
                </span>
                TORING PARTNER.
              </p>
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar
                className={classes.large}
                alt='Team Member'
                src={"/images/baiju.jpg"}
              ></Avatar>
            </Grid>
            <Grid item>
              <Avatar
                className={classes.large}
                alt='Team Member'
                src={"/images/connor.jpg"}
              ></Avatar>
            </Grid>
            <Grid item>
              <Avatar
                className={classes.large}
                alt='Team Member'
                src={"/images/wladimir.jpg"}
              ></Avatar>
            </Grid>
          </Grid>

          <Typography>Baiju - Connor - Wladimir</Typography>
          <Button autoFocus onClick={handleClose} color='primary'>
            Hire Us!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
