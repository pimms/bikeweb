import React, { Component } from 'react';

import SimpleCard from './simplecard';
import Graph from './graph';
import StationData from './stationdata.js';

class StationCard extends Component {
    state = {
        graphData: null,
    };



    createHistoryUrl() {
        let dateString = new Date().toUTCString();
        dateString = dateString.split(' ').slice(0, 4).join(' ');
        const from = new Date(dateString).toISOString();
        const to = new Date(dateString + ' 23:59:59').toISOString();
        return 'http://bikeapi.stienjoa.kim/stations/history?from='+from+'&to='+to+'&id='+this.props.station.id+'&dsm=15';
    }

    createPredictionUrl() {
        return 'http://bikeapi.stienjoa.kim/stations/prediction?id='+this.props.station.id+'&dsm=15';
    }

    handleBikeApiResult(history, prediction) {
        const historyRoot = history[0];
        const sdata = new StationData(historyRoot, prediction);
        this.setState({
            graphData: sdata.getGraphJsData(),
        })
    }

    componentDidMount() {
        const histUrl = this.createHistoryUrl();
        console.log('Fetching history from URL: ', histUrl);
        fetch(histUrl)
            .then((res) => res.json())
            .then((history) => {
                const predUrl = this.createPredictionUrl();
                console.log('Fetching prediction from URL: ', predUrl);
                fetch(predUrl)
                    .then((r) => r.json())
                    .then((pred) => {
                        this.handleBikeApiResult(history, pred);
                    }, (err) => {
                        console.error('Failed to load prediction for ', this.props.station, 'error: ', err);
                    })
            }, (err) => {
                console.error('Failed to load history for ', this.props.station, ', error: ', err);
            });
    }

    getGraphElem() {
        if (!this.state.graphData) {
            return (
                <div><h1>Loading :)</h1></div>
            );
        } else {
            return (
                <Graph
                    data={this.state.graphData}
                    options={null}
                    />
            );
        }
    }

    render() {
        const graphElem = this.getGraphElem();

        return (
            <SimpleCard
                title = {this.props.station.title}
                subtitle = {this.props.station.subtitle}
                content={
                    graphElem
                }
            />
        )
    }
}

export default StationCard;
