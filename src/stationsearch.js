import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

class List extends Component {
    render() {
        const listItems = this.props.items.map((item) => {
            return <li  className="list-group-item searchListItem"
                        category="station"
                        onClick={(e) => {this.props.itemClicked(e, item)}}
                        key={item.id}>
                {item.title}
                <div className="searchResultSubtitle">
                    {item.subtitle}
                </div>
            </li>
        });

        return (
            <ul className="list-group searchList">
                {listItems}
            </ul>
        );
    }
}

class StationSearch extends Component {
    state = {
        initialItems: [],
        items: [],
        focus: false,
    }


    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.itemClicked = this.itemClicked.bind(this);
    }

    componentDidMount() {
        fetch("http://bikeapi.stienjoa.kim/stations")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    initialItems: res,
                    items: res
                });
            }, (err) => {
                alert('Error: ' + err)
            }
        );
    }

    onFocus(event) {
        this.setState({
            focus: true,
        });
    }

    itemClicked(event, item) {
        console.log('item clicked! ', item.title);
        this.setState({
            focus: false,
        })
    }

    textChanged(event) {
        const filter = event.target.value.toLowerCase();

        const updatedList = this.state.initialItems.filter((item) => {
            const title = item.title.toLowerCase();
            const subtitle = item.subtitle.toLowerCase();
            return title.search(filter) !== -1 || subtitle.search(filter) !== -1;
        });


        this.setState({
            items: updatedList,
        });
    }

    render() {
        let listDom = '';
        if (this.state.focus)
            listDom = <List items={this.state.items} itemClicked={this.itemClicked} />

        return (
            <div className="filter-list searchWrapper">
                <div className="searchBoxWrapper">
                    <form>
                        <fieldset className="form-group">
                            <input  type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Search"
                                    onFocus={this.onFocus}
                                    onChange={this.textChanged}/>
                        </fieldset>
                    </form>
                </div>
                {listDom}
            </div>
        )
    }

}

export default StationSearch;
