import React, {Component} from 'react';
import Select from 'react-select';
import '../../Benefits/Benefits.css';
import { ToastContainer, toast } from 'react-toastify';
import {main_url} from "../../../utils/CommonFunction";

const quarterOptions = [
    {value: 1, label: 'Jan to Mar'},
    {value: 2, label: 'April to Jun'},
    {value: 3, label: 'July to Sept'},
    {value: 4, label: 'Oct to Nov'}
];

class TeamBuildingAddNew extends Component {
    constructor() {
        super();
        this.state = {
            requestByBranchNames: [],
            quarter: [],
            employeeNameList: [],

            teamBuildingDataSet : {
                requestByBranchName: '',
                selectedRequestByBranchName: '',
                quarterType: '',
                selectedQuarter: '',
                employeeName: '',
                selectedEmployeeName: '',
                user_id: '',
                amount: ''
            },

            total_amount: 0,
            
            dataSource: []
        }
    }

    componentDidMount() {
        fetch(`${main_url}benefit/getEmployeeList`)
            .then(res => { if (res.ok) return res.json() })
            .then(list => {
                this.setState({
                    employeeNameList: list
                })
            })
    }

    handleRequestByBranch = (event) => {
        let data = this.state.teamBuildingDataSet;
        data.requestByBranchName = event.target.value;

        this.setState({
            teamBuildingDataSet: data
        });
    };

    handleEmployeeName = (event) => {

        let data = this.state.teamBuildingDataSet;
        data.employeeName = event.target.value;
        data.selectedEmployeeName = event;

        this.setState({
            teamBuildingDataSet: data
        });
    };

    handleQuarter = (event) => {
        let data = this.state.teamBuildingDataSet;
        data.quarterType = event.label;
        data.selectedQuarter = event;

        this.setState({
            teamBuildingDataSet: data,
        });
    };

    handleAmount = (event) => {
        let data = this.state.teamBuildingDataSet;
        data.amount = event.target.value;

        this.setState({
            teamBuildingDataSet: data
        });
    };

    save = () => {
        let data = this.state.dataSource;
        let totalAmount = 0;

        data.push(this.state.teamBuildingDataSet);

        this.setState({
            dataSource: data,

            teamBuildingDataSet: {
                requestByBranchName: '',
                quarterType: '',
                selectedQuarter: '',
                employeeName: '',
                user_id: '',
                amount: ''
            }

        });

        this.state.dataSource.map(item => totalAmount += parseInt(item.amount));
        this.state.total_amount = totalAmount;

        this.toggleTotalRow();

    };

    handleRemove = (event) => {
        let data = this.state.dataSource;

        let deletedData = data.splice(event, 1);
        let newTotalAmount = parseInt(this.state.total_amount) - deletedData[0].amount;

        this.setState({
            dataSource: data,
            total_amount: newTotalAmount
        });

        this.toggleTotalRow();
    };

    /*
    *
    *
    * Toggle The Total Field
    *
    * Show When There is Data and Hide When There is No Data
    *
    */
    toggleTotalRow = () => {
        (this.state.dataSource.length > 0) ?
            (document.querySelector('.total-amount').classList.remove('sr-only'))
            : (document.querySelector('.total-amount').classList.add('sr-only'))
    };


    render() {
        return (
            <div className="team-building team-building-add-new">
                <div className='row'>
                    <form className="form-group">
                        <div className="col-md-6">
                            <div><label htmlFor="request-by-branch" className="col-sm-12">Request By Branch</label></div>
                            <div className="col-sm-11">
                                {/*<Select*/}
                                {/*    options={this.state.requestByBranchNames}*/}
                                {/*    placeholder="Please Choose The Appropriate One"*/}
                                {/*    onChange={this.handleRequestByBranch}*/}
                                {/*    value={this.state.requestByBranchName}*/}
                                {/*/>*/}

                                <input type="text"
                                       placeholder="Please Provide Request By Branch Name"
                                       onChange={this.handleRequestByBranch}
                                       value={this.state.teamBuildingDataSet.requestByBranchName}
                                       className="form-control"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div><label htmlFor="quarter" className="col-sm-12">Quarter</label></div>
                            <div className="col-sm-11">
                                <Select
                                    options={quarterOptions}
                                    placeholder="Please Choose The Desired Quarter Range"
                                    onChange={this.handleQuarter}
                                    value={this.state.teamBuildingDataSet.selectedQuarter}
                                />
                            </div>
                        </div>

                        <div className="col-md-6" style={{marginTop: '20px'}}>
                            <div><label htmlFor="employee-name" className="col-sm-12">Employee Name</label></div>
                            <div className="col-sm-11">
                                <Select
                                    options={this.state.employeeNameList}
                                    placeholder="Please Choose The Employee Name"
                                    onChange={this.handleEmployeeName}
                                    value={this.state.teamBuildingDataSet.selectedEmployeeName}
                                />
                            </div>
                        </div>


                        <div className="col-md-6" style={{marginTop: '20px'}}>
                            <div><label htmlFor="amount" className="col-sm-12">Amount</label></div>
                            <div className="col-sm-11">
                                <input
                                    type="number"
                                    placeholder="Please Provide The Amount"
                                    className="form-control"
                                    onChange={this.handleAmount}
                                    value={this.state.teamBuildingDataSet.amount}
                                />
                            </div>
                        </div>


                    </form>

                </div>

                <div className="row save-btn" style={{marginTop: '10px'}}>
                    <div className="float-right" style={{marginRight: '-30px'}}>
                        <div>
                            <button className="btn btn-info" type="button" onClick={this.save.bind(this)}>Save</button>
                        </div>

                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="result-area col-md-12">
                        <table className="table table-bordered table-responsive">
                            <thead>
                                <tr>
                                    <th>Request By Branch</th>
                                    <th>Quarter</th>
                                    <th>Employee Name</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    (this.state.dataSource.length <= 0) ?
                                        ( <tr>
                                            <td colSpan="8" className="text-center font-weight-bold text-white bg-danger">
                                            No Data To Show
                                            </td>
                                        </tr> ) :
                                        (
                                            this.state.dataSource.map((item, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{item.requestByBranchName}</td>
                                                        <td>{item.quarterType}</td>
                                                        <td>{item.employeeName}</td>
                                                        <td>{item.amount}</td>
                                                        <td>
                                                            <button className="btn btn-danger" onClick={this.handleRemove.bind(this, index)}>Remove</button>
                                                        </td>
                                                    </tr>
                                                );

                                            })


                                        )
                                }

                                <tr className="sr-only total-amount">
                                    <th colSpan="4">Total</th>
                                    <td>{this.state.total_amount}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default TeamBuildingAddNew;