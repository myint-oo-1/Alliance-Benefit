import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApplyForm from '../components/Allowance/StaffLoan/ApplyForm';
import RepaymentSchedule from '../components/Allowance/StaffLoan/RepaymentSchedule';
import StaffLoanList from './Allowance/StaffLoan/StaffLoanList';
import StaffLoanView from './Allowance/StaffLoan/StaffLoanView';
import SettlementSheet from './Allowance/StaffLoan/SettlementSheet';
import SalaryAdvanceList from './Allowance/SalaryAdvance/SalaryAdvanceList';
import SalaryAdvanceRequestForm from './Allowance/SalaryAdvance/SalaryAdvanceRequestForm';
import SalaryAdvanceApprovalForm from './Allowance/SalaryAdvance/SalaryAdvanceApprovalForm';

import WeddingBenefitMain from './Benefits/Wedding/WeddingBenefitMain';
import ChildBenefit from './Benefits/Child/ChildBenefitMain';
import FuneralBenefitMain from './Benefits/Funeral/FuneralBenefitMain';
import ExternalTrainingBenefitMain from './Benefits/ExternalTraining/ExternalTrainingBenefitMain';
import MedicalBenefitMain from './Benefits/MedicalBenefit/MedicalBenefitMain';
import BirthdayFundMain from './Benefits/BirthdayFund/BirthdayFundMain';
import OtherBenefitMain from './Benefits/OtherBenefit/OtherBenefitMain';

const Main = () => (
    <Switch>

        <Route exact path="/staff_loan" component={StaffLoanList}></Route>
        <Route path="/staff_loan_applyform" component={ApplyForm}></Route>
        <Route path="/staff_loan_view" component={StaffLoanView}></Route>
        <Route path="/staff_loan_repayment" component={RepaymentSchedule}></Route>
        <Route path="/staff_loan_settlement" component={SettlementSheet}></Route>
        <Route path="/salary_advance" component={SalaryAdvanceList}></Route>
        <Route path="/salary_advance_request_form" component={SalaryAdvanceRequestForm}></Route>
        <Route path="/salary_advance_approval_form" component={SalaryAdvanceApprovalForm}></Route>
        <Route path="/wedding_benefit" component={WeddingBenefitMain}></Route>
        <Route path="/child_benefit" component={ChildBenefit}></Route>
        <Route path="/funeral_benefit" component={FuneralBenefitMain}></Route>
        <Route path="/external_training_benefit" component={ExternalTrainingBenefitMain}></Route>
        <Route path="/medical_benefit" component={MedicalBenefitMain}></Route>
        <Route path="/birthday_fund" component={BirthdayFundMain}></Route>
        <Route path="/other_benefit" component={OtherBenefitMain}></Route>

    </Switch>
);

export default Main;