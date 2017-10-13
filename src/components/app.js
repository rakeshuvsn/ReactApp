/**
 * Created by rakeshuvsn on 9/12/17.
 */
import React from 'react';
import { Button } from 'react-bootstrap';
import AppHeader from './appHeader';
import AppFooter from './appFooter';
import InputFieldLabel from './inputFieldLabel';

const todos = [
  {
    task: 'make this tutorial',
    isCompleted: true
  },
  {
    task: 'sleep to night',
    isCompleted: false
  }
];

const inputData = {
  type: 'number',
  label: 'Bill Amount',
  caption: '(before Tax)'
};

const taxInputData = {
  type: 'number',
  label: 'Tax rate',
  caption: '(in % example 7.2%)'
};

const totalBillData = {
  type: 'number',
  label: 'Total Bill',
  caption: '(after Tax)'
};


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
      inputData,
      taxInputData,
      totalBillData
    }
  }

  render() {

    return (
      <div>
        <AppHeader/>
        <h1>this is react app</h1>
        <p>{this.state.todos[0].task}</p>
        <InputFieldLabel inputData = {this.state.inputData}/>
        <InputFieldLabel inputData = {this.state.taxInputData}/>
        <InputFieldLabel inputData = {this.state.totalBillData}/>
        <Button bsStyle="success">Success</Button>
        <AppFooter/>
      </div>

    );
  }
}