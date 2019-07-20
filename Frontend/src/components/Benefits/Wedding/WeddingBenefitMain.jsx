import React, {Component} from 'react';
import BenefitPageHeader from '../BenefitPageHeader';
import BenefitWeddingTable from './BenefitWeddingTable';
import BenefitWeddingAddNew from './BenefitWeddingAddNew';

class WeddingBenefitMain extends Component {
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

                <BenefitPageHeader pageTitle="Wedding" setupForm={this.setupForm}/>

                <br/>

                {
                    this.state.isTable ?
                        <BenefitWeddingTable /> :
                            <BenefitWeddingAddNew/>
                }

            </div>
        )
    }
}

export default WeddingBenefitMain;