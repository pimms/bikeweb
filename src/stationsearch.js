import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

class List extends Component {
    getUnselectedElems() {
        return this.props.items
            .filter((item) => {
                return !item.selected;
            })
            .map((item) => {
                return (
                    <li className="list-group-item searchListItem"
                        category="station"
                        onClick={(e) => {this.props.itemClicked(e, item)}}
                        key={item.id}
                    >
                        {item.title}
                        <div className="searchResultSubtitle">
                            {item.subtitle}
                        </div>
                    </li>
                )
            });
    }

    getSelectedElems() {
        return this.props.items
            .filter((item) => {
                return item.selected;
            })
            .map((item) => {
                return  (
                    <li className="list-group-item searchListItem selectedSearchListItem"
                        category="station"
                        onClick={(e) => {this.props.itemRemoved(e, item)}}
                        key={item.id}
                    >
                        {item.title}
                        <div className="searchResultSubtitle">
                            {item.subtitle}
                        </div>
                    </li>
                )
            });
    }

    render() {
        return (
            <ul className="list-group searchList">
                {this.getSelectedElems()}
                {this.getUnselectedElems()}
            </ul>
        );
    }
}

class StationSearch extends Component {
    state = {
        initialItems: [],
        filteredItems: [],
    }


    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.itemClicked = this.itemClicked.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
    }

    componentDidMount() {
        fetch("http://bikeapi.stienjoa.kim/api/stations")
            .then(res => res.json())
            .then((res) => {
                res.forEach(i => {
                    i.selected = false;
                })
                this.setState({
                    initialItems: res,
                    filteredItems: res
                });
            }, (err) => {
                alert('Error: ' + err)
            }
        );
    }

    textChanged(event) {
        const filter = event.target.value.toLowerCase();

        const updatedList = this.state.initialItems.filter((item) => {
            const title = item.title.toLowerCase();
            const subtitle = item.subtitle.toLowerCase();
            return title.search(filter) !== -1 || subtitle.search(filter) !== -1;
        });


        this.setState({
            filteredItems: updatedList,
        });
    }

    itemClicked(event, item) {
        console.log('item clicked! ', item.title);
        item.selected = true;
        this.setState({});
        this.props.stationChanged(item);
    }

    itemRemoved(event, item) {
        console.log('item removed! ', item.title);
        item.selected = false;
        this.setState({});
        this.props.stationChanged(item);
    }

    render() {
        return (
            <div className="filter-list searchWrapper">
                <div className="searchBoxWrapper">
                    <form>
                        <fieldset className="form-group">
                            <input  type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Search"
                                    onChange={this.textChanged}/>
                        </fieldset>
                    </form>
                </div>
                <List items={this.state.filteredItems}
                      itemClicked={this.itemClicked}
                      itemRemoved={this.itemRemoved}/>
            </div>
        )
    }

}

export default StationSearch;
