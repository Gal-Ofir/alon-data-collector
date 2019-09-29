import React from 'react';
import {getRandomCandidates, getChartHeaders} from '../utils/http';
import ChartTable from "./ChartTable";

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartHeaders: {},
            randomCandidates: [],
        };
    }

    getHeaders = () => {
        getChartHeaders()
            .then(response => {
                this.setState({chartHeaders: response.data});
            });
    };

    getRandCandidates = (candidateCount) => {
        getRandomCandidates(candidateCount)
            .then(response => {
                this.setState({randomCandidates: response.data});
            });
    };

    componentDidMount() {
        this.getHeaders();
        this.getRandCandidates(10);
    }

    render() {
        return <ChartTable
            randomCandidates={this.state.randomCandidates}
            chartHeaders={this.state.chartHeaders}/>;
    }
}

export default Chart;