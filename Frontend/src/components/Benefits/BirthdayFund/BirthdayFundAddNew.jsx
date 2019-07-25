import React, {Component} from 'react';
import Select from 'react-select';
import CustomFileInput from '../CustomFileInput';
import '../../Benefits/Benefits.css';
import { ToastContainer, toast } from 'react-toastify';
import {main_url} from "../../../utils/CommonFunction";

const requestByBranchOptions = [
    {value: 1, label: 'BM1'},
    {value: 2, label: 'BM2'},
    {value: 3, label: 'BM3'},
    {value: 4, label: 'BM4'},
];

class BirthdayFundAddNew extends Component {
    constructor() {
        super();
        this.state = {
            user_id:'',

            requestByBranch: '',
            month: '',
            amount: ''
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
        this.setState({
            requestByBranch: event.label
        });
    };

    handleMonth = (event) => {
        this.setState({
            month: event.target.value
        });
    };

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    };


    // save = () => {
    //     let data = this.state.dataSource;
    //     data.push(this.state.funeralBenefitsData);

    //     this.setState({
    //         dataSource: data,

    //         funeralBenefitsData: {
    //             employeeName: '',
    //             designation: '',
    //             spouseName: '',
    //             attachment: '',
    //         },

    //         selectedSpouseCompany: ''

    //     });

    // };

    save() {

        console.log(this.state);

        var data = {
            user_id:this.state.user_id,
            funeral_type:this.state.deadPerson,
            head_no:this.state.headNo
        }

        const formdata = new FormData();

        var obj = document.querySelector("#attach_file").files.length;
        for (var i = 0; i < obj; i++) {
            var imagedata = document.querySelector("#attach_file").files[i];
            formdata.append('uploadfile', imagedata);
        }

        formdata.append('funeral_benefit', JSON.stringify(data))
        alert(JSON.stringify(data,2,undefined))

        let status = 0;
        fetch(`${main_url}funeral_benefit/saveFuneralBenefit`, {
            method: "POST",
            body: formdata
        })
            .then(res => {
                status = res.status;
                return res.text()
            })
            .then(text => {
                if (status === 200) toast.success(text);

                else toast.error(text);


            })
    }


    render() {
        return (
            <div className="benefits benefits-birthday-fund">
                <div className='row'>
                    <form className="form-group">
                        <div className="col-md-6">
                            <div><label htmlFor="training-type" className="col-sm-12">Request By Branch/HO </label></div>
                            <div className="col-sm-10">
                                <Select
                                    options={requestByBranchOptions}
                                    placeholder="Please Choose The BM"
                                    onChange={this.handleRequestByBranch}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div><label htmlFor="month" className="col-sm-12">Please Enter The Month </label></div>
                            <div className="col-sm-10">
                                <input type="month"
                                       className="form-control"
                                       placeholder="Enter The Month"
                                       onChange={this.handleMonth}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div><label htmlFor="amount" className="col-sm-12">Please Enter The Amount</label></div>
                            <div className="col-sm-10">
                                <input type="number"
                                       className="form-control"
                                       placeholder="Enter The Amount"
                                       onChange={this.handleAmount}
                                />
                            </div>
                        </div>

                        {/*<div className="form-group col-12 col-sm-6 col-lg-3 col-xl-3">*/}
                        {/*    <label className='col-sm-12'>Attachment</label>*/}
                        {/*    /!*<input className="full_width col-sm-10" type="file" id="attach_file" multiple onChange={this.checkFiles.bind(this)}></input>*!/*/}
                        {/*    <div className="col-sm-12">*/}
                        {/*        <CustomFileInput*/}
                        {/*            className="form-control"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}


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

                {/* <div className="row">
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
                 */}

            </div>
        )
    }
}

export default BirthdayFundAddNew;