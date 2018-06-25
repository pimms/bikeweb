import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '30px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SimpleCard extends Component {
    state = { content: '' };

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar = {
                            <Avatar className={classes.avatar}>L</Avatar>
                        }
                        action={
                            <IconButton>
                            </IconButton>
                        }
                        title="Lodalen"
                        subheader="Dyvekes vei"/>
                    <CardMedia>
                        {this.props.content}
                    </CardMedia>
                </Card>
            </div>

        );
    }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
