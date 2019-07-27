import React, {Component} from 'react';
import Select from 'react-select';
import CustomFileInput from '../CustomFileInput';
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
            requestByBranchName: '',
            quarter: [],
            employeeName: [],
            user_id:'',
            amount: '',
            total_amount: '',
            
            dataSource: [],
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

    handleEmployeeName = (event) => {
      
        this.setState({
            user_id: event.value
        });
    };

    handleRequestByBranch = (event) => {

    };

    handleQuarter = (event) => {

    };


    save = () => {
        let data = this.state.dataSource;
        data.push(this.state.funeralBenefitsData);

        this.setState({
            dataSource: data,

            funeralBenefitsData: {
                employeeName: '',
                designation: '',
                spouseName: '',
                attachment: '',
            },

            selectedSpouseCompany: ''

        });

    };

    handleRemove = (event) => {
        let data = this.state.dataSource;
        data.splice(event, 1);
        this.setState({
            dataSource: data
        });
    };


    render() {
        return (
            <div className="team-building team-building-add-new">
                <div className='row'>
                    <form className="form-group">
                        <div className="col-md-6">
                            <div><label htmlFor="request-by-branch" className="col-sm-12">Request By Branch</label></div>
                            <div className="col-sm-11">
                                <Select
                                    options={this.state.requestByBranchNames}
                                    placeholder="Please Choose The Appropriate One"
                                    onChange={this.handleRequestByBranch}
                                    value={this.state.requestByBranchName}
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
                                    value={this.state.selectedQuarter}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div><label htmlFor="employee-name" className="col-sm-12">Employee Name</label></div>
                            <div className="col-sm-11">
                                <Select
                                    options={this.state.employeeName}
                                    placeholder="Please Choose The Employee Name"
                                    onChange={this.handleEmployeeName}
                                    value={this.state.employeeName}
                                />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div><label htmlFor="amount" className="col-sm-12">Amount</label></div>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    placeholder="Please Provide The Amount"
                                    className="form-control"
                                    onChange={this.handleAmount}
                                    value={this.state.amount}
                                />
                            </div>
                        </div>


                    </form>

                </div>

                <div className="row save-btn">
                    <div className="float-right">
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
                                <th>Employee Name</th>
                                <th>Designation</th>
                                <th>Dead Person</th>
                                <th>Head Number</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                (this.state.dataSource.length <= 0) ?
                                    ( <tr><td colSpan="8" className="text-center font-weight-bold text-white bg-danger">
                                        No Data To Show
                                    </td></tr> ) :
                                    (this.state.dataSource.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{item.employeeName}</td>
                                                    <td>{item.designation}</td>
                                                    <td>{item.deadPerson}</td>
                                                    <td>{item.headNo}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={this.handleRemove.bind(this, index)}>Remove</button>
                                                    </td>
                                                </tr>
                                            );
                                        })

                                    )
                            }
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default TeamBuildingAddNew;