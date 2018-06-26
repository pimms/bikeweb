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

import Clear from '@material-ui/icons/Clear';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
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
                <Card className="card">
                    <CardHeader
                        avatar = {
                            <Avatar className={classes.avatar}>L</Avatar>
                        }
                        action={
                            <IconButton onClick={()=>alert('TODO, remove station')}>
                                <Clear/>
                            </IconButton>
                        }
                        title={this.props.title}
                        subheader={this.props.subtitle}/>
                    <div>
                        {this.props.content}
                    </div>
                </Card>
            </div>

        );
    }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
