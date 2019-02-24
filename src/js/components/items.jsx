/* global chrome */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { CardActionArea } from '@material-ui/core';


const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
  },
};

class items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    chrome.storage.sync.get({ itemUrls: [] }, (result) => {
      this.setState({ urls: result.itemUrls });
    });
  }

  removeItem(url) {
    window.open(url);
    const { urls } = this.state; // array of state
    const index = urls.findIndex(x => x.url === url);
    urls.splice(index, 1);
    this.setState({ urls });
    chrome.storage.sync.set({ itemUrls: urls });
  }

  render() {
    const { classes } = this.props;
    const { urls } = this.state;
    return (
      <Grid
        container
        spacing={8}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={6} />
        {urls.map(value => (
          <Grid key={value} item xs zeroMinWidth>
            <Card className={classes.card}>
              <CardActionArea onClick={() => {
                this.removeItem(value.url);
              }}
              >
                <CardContent className={classes.cContent}>
                  <Tooltip title={(
                    <Typography variant="subheading" component="h3">
                      {value.title}
                    </Typography>
)}
                  >
                    <Typography gutterBottom variant="h5" component="h2" noWrap>
                      {value.title}
                    </Typography>
                  </Tooltip>
                  <Typography component="p" noWrap>
                    {value.url}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
items.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(items);
