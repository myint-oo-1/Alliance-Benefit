import React, {Component} from 'react';
import BenefitPageHeader from '../BenefitPageHeader';
import BenefitMedicalTable from './BenefitMedicalTable';
import BenefitMedicalAddNew from './BenefitMedicalAddNew';

class MedicalBenefitMain extends Component {
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

                <BenefitPageHeader pageTitle="Medical" setupForm={this.setupForm}/>

                <br/>

                {
                    this.state.isTable ?
                        <BenefitMedicalTable /> :
                        <BenefitMedicalAddNew />
                }

            </div>
        )
    }
}

export default MedicalBenefitMain;