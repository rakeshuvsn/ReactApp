/**
 * Created by rakeshuvsn on 9/12/17.
 */
import React from 'react';
import styles from '../assets/css/appHeader.css';
const title = 'Reactive Tip Calculator';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title
    }
  }

  render() {

    return (
        <div className={styles.headerContainer}>
          <h3 className={styles.headerTitle}>{this.state.title}</h3>
        </div>
    );
  }
}