import React, {Component} from 'react';
import BenefitPageHeader from '../BenefitPageHeader';
import TeamBuildingTable from './TeamBuildingTable';
import TeamBuildingAddNew from './TeamBuildingAddNew';

class TeamBuildingMain extends Component {
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
            <div className="team-building border-bottom white-bg dashboard-header">

                <BenefitPageHeader pageTitle="Team Building" setupForm={this.setupForm}/>

                <br/>

                {
                    this.state.isTable ?
                        <TeamBuildingTable /> :
                        <TeamBuildingAddNew />
                }

            </div>
        )
    }
}

export default TeamBuildingMain;