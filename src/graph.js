import React, { Component } from 'react';
import StationData from './stationdata';
var LineChart = require("react-chartjs").Line;

class Graph extends Component {
    render() {
        return (
            <div className="chartWrapper">
                <LineChart
                    data={this.props.data}
                    options={{responsive:true, maintainAspectRatio:false}}
                    width={this.props.width}
                    height={this.props.height}/>
            </div>
        );
    }
}

export default Graph;
