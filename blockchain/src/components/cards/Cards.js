import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import Owner from '../images/Distributer.jpg';
import Distributer from '../images/Distributer.jpg';
import Supplier from '../images/Supplier1.jpg';
import Manufacturer from '../images/Manufacturer1.jpg';
import Transporter from '../images/Transporter2.jpg';
import Wholesaler from '../images/Wholesaler.jpg';

import SignIn from '../login/SignIn';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root1: {
    maxWidth: 350,
    marginLeft: 80,
    marginBottom: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  root2: {
    marginTop: 30,
    marginBottom: 10,
    maxWidth: 350,
    marginLeft: 80,
  },
  root3: {
    marginTop: 30,
    marginBottom: 10,
    maxWidth: 350,
    marginLeft: 80,
  },
  root4: {
    marginTop: 30,
    marginBottom: 40,
    maxWidth: 350,
    marginLeft: 80,
  },
  root5: {
    marginTop: 30,
    marginBottom: 40,
    maxWidth: 350,
    marginLeft: 80,
  },
  root6: {
    marginTop: 30,
    marginBottom: 40,
    maxWidth: 350,
    marginLeft: 80,
  },
  media: {
    //height: "100%",
    height: 350,
    objectFit: "cover",
    paddingLeft: 20,

  },
});

const handleClick = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
}
function Cards() {
  const classes = useStyles();

  return (
    <Router>
      <Grid container>
        <Grid item md={4}>
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Owner} title="Owner" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">Owner </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: 10, paddingTop: 0, marginBottom: 20 }} >
              <Button href="/owner" variant='contained' size="small" color="primary" disableElevation>  Click Here </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root2}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Supplier} title="Supplier" style={{ borderRadius: "20px" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">Supplier</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: 10, paddingTop: 0, marginBottom: 20 }}>
              <Button href="/supplier" variant='contained' size="small" color="primary" disableElevation>Click Here</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root3}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Transporter} title="Transporter" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">Transporter</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: 10, paddingTop: 0, marginBottom: 20 }}>
              <Button href="/transporter" variant='contained' size="small" color="primary" disableElevation>Click Here</Button>
            </CardActions>
          </Card>
        </Grid>

        <br />
        <Grid item md={4}>
          <Card className={classes.root4}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Manufacturer} title="Manufacturer" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">Manufacturer</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: 10, paddingTop: 0, marginBottom: 20 }}>
              <Button href="/manufacturer" variant='contained' size="small" color="primary" disableElevation>Click Here</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root5}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Wholesaler} title="Wholesaler" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">Wholesaler</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: 10, paddingTop: 0, marginBottom: 20 }}>
              <Button href="/wholesaler" variant='contained' size="small" color="primary" disableElevation>Click Here</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root6}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Distributer} title="Distributor" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">Distributor</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: 10, paddingTop: 0, marginBottom: 20 }}>
              <Button href="/distributor" variant='contained' size="small" color="primary" disableElevation>Click Here</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Router>



  );
}
export default Cards