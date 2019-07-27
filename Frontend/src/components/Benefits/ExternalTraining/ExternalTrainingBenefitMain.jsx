import React, {Component} from 'react';
import BenefitPageHeader from '../BenefitPageHeader';
import BenefitExternalTrainingTable from './BenefitExternalTrainingTable';
import BenefitExternalTrainingAddNew from './BenefitExternalTrainingAddNew';

class ExternalTrainingBenefitMain extends Component {
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

                <BenefitPageHeader pageTitle="External Training" setupForm={this.setupForm}/>

                <br/>

                {
                    this.state.isTable ?
                        <BenefitExternalTrainingTable /> :
                        <BenefitExternalTrainingAddNew />
                }

            </div>
        )
    }
}

export default ExternalTrainingBenefitMain;