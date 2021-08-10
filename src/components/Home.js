import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
      <Typography variant="h6" gutterBottom>
        Info
      </Typography>
      <Typography>
        Enter your email address
      </Typography>
       <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="taem@checkforpatent.com"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
        Product 1
      </Typography>
        <Typography>
        Enter main keyword for the product
      </Typography>
       <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="for example, sylicon wine cup"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        </Grid>   
      <Typography>
        Enter link to the similar product as a referance
      </Typography>
       <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="http://..."
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        </Grid>
        <div className={classes.root}>
        
      <Button color="primary">  Add more products</Button>
      <Typography>
        We offer discount up to 36% for multiple cheks
      </Typography>
      <Button variant="contained" color="primary">
       Submit and Pay 24.99 USD
      </Button>
    </div>
      </Container>
    </React.Fragment>
  );
}
