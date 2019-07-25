import React, {Component} from 'react';
import BenefitPageHeader from '../BenefitPageHeader';
import BirthdayFundTable from './BirthdayFundTable';
import BirthdayFundAddNew from './BirthdayFundAddNew';

class BirthdayFundMain extends Component {
    constructor() {
        super();
        this.state = {
            isAddNew: false,
            isTable: true
        }
    }

    setupForm = () => {
        this.setState({
            isAddNew: true,
            isTable: false
        });
    };

    render() {
        return(
            <div className="wedding-benefit border-bottom white-bg dashboard-header">

                <BenefitPageHeader pageTitle="Birthday Fund" setupForm={this.setupForm}/>

                <br/>

                {
                    this.state.isTable ?
                        <BirthdayFundTable /> :
                        <BirthdayFundAddNew />
                }

            </div>
        )
    }
}

export default BirthdayFundMain;