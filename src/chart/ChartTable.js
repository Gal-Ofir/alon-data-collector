import React from 'react';
import {Table} from 'react-bootstrap'

class ChartTable extends React.Component {

    getHeaders = () => {
        const headers = Object.keys(this.props.chartHeaders).map((headerKey, i) => {
            return <th key={i} id={'th-' + headerKey}>{this.props.chartHeaders[headerKey]}</th>
        });
        return <thead>
        <tr>
            {headers}
        </tr>
        </thead>
    };

    getTableRows = () => {
        return this.props.randomCandidates.map((candidate, i) => {
            return <tr key={i}>
                <td name="age" data={candidate.age}>{candidate.age}</td>
                <td name="area" data={candidate.area.value}>{candidate.area.text}</td>
                <td name="profession" data={candidate.profession.value}>{candidate.profession.text}</td>
                <td name="activeIncome" data={candidate.activeIncome}>{candidate.activeIncome}</td>
                <td name="passiveIncome" data={candidate.passiveIncome}>{candidate.passiveIncome}</td>
                <td name="smoking" data={candidate.smoking.toString()}>{candidate.smoking.toString()}</td>
                <td name="maritalStatus" data={candidate.maritalStatus.value}>{candidate.maritalStatus.text}</td>
                <td name="numOfChildren" data={candidate.numOfChildren}>{candidate.numOfChildren}</td>
                <td name="child_0_age" data={candidate.children[0] ? candidate.children[0].age : null}>{candidate.children[0] ? candidate.children[0].age : "---"}</td>
                <td name="child_1_age" data={candidate.children[1] ? candidate.children[1].age : null}>{candidate.children[1] ? candidate.children[1].age : "---"}</td>
                <td name="child_2_age" data={candidate.children[2] ? candidate.children[2].age : null}>{candidate.children[2] ? candidate.children[2].age : "---"}</td>
                <td name="child_3_age" data={candidate.children[3] ? candidate.children[3].age : null}>{candidate.children[3] ? candidate.children[3].age : "---"}</td>
                <td name="child_4_age" data={candidate.children[4] ? candidate.children[4].age : null}>{candidate.children[4] ? candidate.children[4].age : "---"}</td>
                <td name="spouseExists" data={candidate.spouse.exists.toString()}>{candidate.spouse.exists ? "קיים" : "לא קיים"}</td>
                <td name="spouseAge" data={candidate.spouse.exists ? candidate.spouse.age : null}>{candidate.spouse.exists ? candidate.spouse.age : "---"}</td>
                <td name="spouseProfession" data={candidate.spouse.exists ? candidate.spouse.profession.value : null}>{candidate.spouse.exists ? candidate.spouse.profession.text : "---"}</td>
                <td name="spouseActiveIncome" data={candidate.spouse.exists ? candidate.spouse.activeIncome : null}>{candidate.spouse.exists ? candidate.spouse.activeIncome : "---"}</td>
                <td name="spousePassiveIncome" data={candidate.spouse.exists ? candidate.spouse.passiveIncome : null}>{candidate.spouse.exists ? candidate.spouse.passiveIncome : "---"}</td>
                <td name="spouseSmoking" data={candidate.spouse.exists ? candidate.spouse.smoking.toString() : null}>{candidate.spouse.exists ? candidate.spouse.smoking.toString() : "---"}</td>
                <td name="totalHouseHoldIncome" data={candidate.totalHouseHoldIncome}>{candidate.totalHouseHoldIncome}</td>
                <td name="lifeInsurance" data={candidate.lifeInsurance.toString()} onClick={() => this.props.handleOnInsuranceClicked("lifeInsurance", i)} style={{backgroundColor: candidate.lifeInsurance ? "green" : "red"}}/>
                <td name="healthInsurance" data={candidate.healthInsurance.toString()} onClick={() => this.props.handleOnInsuranceClicked("healthInsurance", i)} style={{backgroundColor: candidate.healthInsurance ? "green" : "red"}}/>
                <td name="illnessInsurance" data={candidate.illnessInsurance.toString()} onClick={() => this.props.handleOnInsuranceClicked("illnessInsurance", i)} style={{backgroundColor: candidate.illnessInsurance ? "green" : "red"}}/>
                <td name="mortgageInsurance" data={candidate.mortgageInsurance.toString()} onClick={() => this.props.handleOnInsuranceClicked("mortgageInsurance", i)} style={{backgroundColor: candidate.mortgageInsurance ? "green" : "red"}}/>
                <td name="workInsurance" data={candidate.workInsurance.toString()} onClick={() => this.props.handleOnInsuranceClicked("workInsurance", i)} style={{backgroundColor: candidate.workInsurance ? "green" : "red"}}/>
            </tr>;
        });
    };

    render() {
        const tableHeaders = this.getHeaders();
        const tableRows = this.getTableRows();
        return <Table striped bordered hover responsive>
            {tableHeaders}
            <tbody>
            {tableRows}
            </tbody>
        </Table>;
    }
}

export default ChartTable;