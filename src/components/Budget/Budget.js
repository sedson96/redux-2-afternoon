import React, { Component } from 'react';
import {connect} from "react-redux"
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import {requestUserData} from "../../ducks/userReducer"
import {requestBudgetData,addPurchase,removePurchase} from "../../ducks/budgetReducer"


class Budget extends Component {
  
  componentDidMount(){
    this.props.requestUserData();
    this.props.requestBudgetData();
  }

  render() {
    console.log(this.props)
    return (
      <Background>
        {this.props.budget.loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={this.props.user.firstName} lastName={this.props.user.lastName}/>
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={this.props.addPurchase}/>
              <DisplayPurchases purchases={this.props.budget.purchases} removePurchase={this.props.removePurchase}/>
            </div>
            <div className='chart-container'>
              <Chart1 purchases={this.props.budget.purchases} budgetLimit={this.props.budgetLimit}/>
              <Chart2 purchases={this.props.budget.purchases}/>
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

function mapStateToProps(reduxState) {
  return{
    budget: reduxState.budget,
    user: reduxState.user
  }
}
export default connect(mapStateToProps,{requestUserData,requestBudgetData,addPurchase,removePurchase})(Budget);
