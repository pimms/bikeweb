class StationData {
    constructor() {
        this.labels = ['1', '2', '3', '4'];

        this.bikes = [4, 6, 2, 0];
        this.locks = [6, 4, 8, 10];
    }

    getGraphJsData() {
        return {
            labels: this.labels,
            datasets: [
                {
                    label: 'Free bikes',
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.bikes
                },
                {
                    label: "Free locks",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.locks
                }
            ]
        };
    }
}

export default StationData;
