/**
 * Created by rakeshuvsn on 9/13/17.
 */
import React from 'react';
import styles from '../assets/css/appFooter.css';

const title = '&copy; Rakeshuvsn ';



export default class AppFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title
    }
  }

  render() {

    return (
        <div className={styles.footerContainer}>
          <h3 className={styles.footerTitle} dangerouslySetInnerHTML={{__html: this.state.title}}></h3>
        </div>
    );
  }
}