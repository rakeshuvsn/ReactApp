/**
 * Created by rakeshuvsn on 9/14/17.
 */
import React from 'react';
import styles from '../assets/css/inputFieldLabel.css';


export default class InputFieldLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  render() {

    this.updateInputValue= function(evt){
      this.setState({
        inputValue: evt.target.value
      });
      console.log(this.state.inputValue);
    };

    return (
        <table className={styles.tableContainer}>
          <tbody>
           <tr>
             <td className ={styles.labelContainer}>
               <span className ={styles.inputLabel}>{this.props.inputData.label}</span>
               <br></br>
               <span className ={styles.inputCaption}>{this.props.inputData.caption}</span>
             </td>

             <td className ={styles.inputFieldContainer}>
               <input className={styles.inputField} type={this.props.inputData.type} value={this.state.inputValue} onChange={this.updateInputValue} />
             </td>
           </tr>
          </tbody>
        </table>
    );
  }
}