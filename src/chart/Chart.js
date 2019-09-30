import React from 'react';
import {getRandomCandidates, getChartHeaders, saveCandidates} from '../utils/http';
import {Button, Container, Col, Row, Form} from "react-bootstrap";
import ChartTable from "./ChartTable";

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartHeaders: {},
            randomCandidates: [],
            candidateCount: 10
        };
    }

    getHeaders = () => {
        getChartHeaders()
            .then(response => {
                this.setState({chartHeaders: response.data});
            });
    };

    getRandCandidates = () => {
        getRandomCandidates(this.state.candidateCount)
            .then(response => {
                this.setState({randomCandidates: response.data});
            });
    };

    handleOnInsuranceClicked = (insuranceType, candidateIndex) => {

        const randomCandidates = this.state.randomCandidates;

        randomCandidates[candidateIndex][insuranceType] = !randomCandidates[candidateIndex][insuranceType];

        this.setState({randomCandidates});

    };

    handleSaveCandidates = () => {

        saveCandidates(this.state.randomCandidates).then((response) => {
            console.log(response);
            alert(response.data.error ? 'Error: ' + response.data.error : 'Saved candidates');
            return response.data.error;
        })
            .then(hasError => {
                if (!hasError) {
                    this.getRandCandidates();
                }
            })
    };

    handleCandidateCountOnChange = (event) => {
        this.setState({candidateCount: event.target.value})
    };

    handleCandidateCountSubmit = () => {
        this.setState({
            randomCandidates: []
        }, () => {
            this.getRandCandidates();
        })
    };

    componentDidMount() {
        this.getHeaders();
        this.getRandCandidates();
    }

    render() {
        return (
            <Container>
                <Row>
                    <ChartTable
                        randomCandidates={this.state.randomCandidates}
                        chartHeaders={this.state.chartHeaders}
                        handleOnInsuranceClicked={this.handleOnInsuranceClicked}/>
                </Row>
                <Row className="control-group">
                    <Col/>
                    <Col xs={8}>
                        <Row>
                            <Button variant="primary" onClick={this.handleSaveCandidates}>
                                Save
                            </Button>
                            <Button variant="secondary" onClick={this.handleSaveCandidates}>
                                Reset
                            </Button>
                            <Form inline>
                                <Form.Group controlId="formCandidateCount">
                                    <Form.Label>Rows:</Form.Label>
                                    <Form.Control min={0} max={50} type="number" value={this.state.candidateCount}
                                                  onChange={this.handleCandidateCountOnChange}/>
                                </Form.Group>
                            </Form>
                            <Button variant="light" onClick={this.handleCandidateCountSubmit}>
                                Go
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>);
    }
}

export default Chart;