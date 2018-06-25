import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    position: "right",
    margin: "auto",
    width: "900px",
  }
};

class Bar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            Bike
                        </IconButton>

                        <TextField
                            className={classes.search}
                            id="search"
                            label="Search field"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            />

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


Bar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
