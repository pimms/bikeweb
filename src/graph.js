import React, { Component } from 'react';
import StationData from './stationdata';
var LineChart = require("react-chartjs").Line;

class Graph extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <LineChart
                    data={this.props.data}
                    options={this.props.options}
                    width={this.props.width}
                    height={this.props.height}/>
            </div>
        );
    }
}

export default Graph;
