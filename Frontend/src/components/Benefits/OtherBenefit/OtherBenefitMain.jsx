import React, {Component} from 'react';
import BenefitPageHeader from '../BenefitPageHeader';
import BenefitOtherTable from './BenefitOtherTable';
import BenefitOtherAddNew from './BenefitOtherAddNew';

class OtherBenefitMain extends Component {
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

                <BenefitPageHeader pageTitle="Other" setupForm={this.setupForm}/>

                <br/>

                {
                    this.state.isTable ?
                        <BenefitOtherTable /> :
                        <BenefitOtherAddNew />
                }

            </div>
        )
    }
}

export default OtherBenefitMain;