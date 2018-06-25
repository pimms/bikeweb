import React, { Component } from 'react';

import SimpleCard from './simplecard';
import Graph from './graph';
import StationData from './stationdata.js';

class StationCard extends Component {
    state = {
        graphData: {}
    };


    componentDidMount() {
        console.log('Mounted StationCard for ', this.props.station.title);
        const graphData = new StationData().getGraphJsData();
        this.setState({
            graphData: graphData
        });
    }

    render() {
        console.log('Graphdata: ', this.state.graphData);
        return (
            <SimpleCard
                title = {this.props.station.title}
                subtitle = {this.props.station.subtitle}
                content={
                    <Graph
                        data={new StationData().getGraphJsData()}
                        options={null}
                        width = "1000"
                        height="300"/>
                }
            />
        )
    }
}

export default StationCard;
