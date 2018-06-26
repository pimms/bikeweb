class StationData {
    constructor(history, prediction) {
        this.labels = [];
        this.bikes = [];
        this.locks = [];
        this.bikesPred = [];
        this.locksPred = [];

        let historyMap = this._createFlatmap(history);
        let predMap = this._createFlatmap(prediction);

        const hkeys = Object.keys(historyMap).sort();
        const pkeys = Object.keys(predMap).sort();

        let keys = hkeys.concat(pkeys).sort();
        keys = keys.filter((i, p) => {
            return keys.indexOf(i) == p;
        });


        keys.forEach((k) => {
            this.labels.push(this._timeStringFromTimestamp(k));

            if (k in historyMap) {
                this.bikes.push(historyMap[k].bikes);
                this.locks.push(historyMap[k].locks);
                this.bikesPred.push(null);
                this.locksPred.push(null);
            } else {
                this.bikes.push(null);
                this.locks.push(null);
                this.bikesPred.push(predMap[k].bikes);
                this.locksPred.push(predMap[k].locks);
            }
        });
    }

    _createFlatmap(json) {
        let map = {};

        json.freeBikes.dataPoints.forEach((dp) => {
            map[dp.ts] = { bikes: dp.val };
        });

        json.freeLocks.dataPoints.forEach((dp) => {
            if (map[dp.ts] !== undefined) {
                map[dp.ts].locks = dp.val;
            }
        });

        return map;
    }

    _timeStringFromTimestamp(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        return hours + ':' + minutes.substr(-2);
    }

    getGraphJsData() {
        return {
            labels: this.labels,
            datasets: [
                {
                    label: "Free locks",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,0.5)",
                    pointColor: "rgba(220,220,220,0.5)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,0.8)",
                    data: this.locks
                },
                {
                    label: 'Free bikes',
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.bikes
                },
                {
                    label: "Free locks (est)",
                    fillColor: "rgba(255,255,0,0.2)",
                    strokeColor: "rgba(255,255,0,1)",
                    pointColor: "rgba(255,255,0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,255,0,1)",
                    data: this.locksPred
                },
                {
                    label: "Free bikes (est)",
                    fillColor: "rgba(255,0,255,0.2)",
                    strokeColor: "rgba(255,0,255,1)",
                    pointColor: "rgba(255,0,255,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,0,255,1)",
                    data: this.bikesPred
                }
            ]
        };
    }
}

export default StationData;
