import React from 'react';
import { openDialog } from 'zent-dialog';
import ZenStyle from 'zent/lib/index.css';
import Style from './style/layout.scss'
import Notify from 'zent-notify';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    setTimeout(this.open, 3000)

  }

  onFecth() {
    
  }


  render() {
    return (
      <div className="open-screen">
        <textarea id="script_code">
         
        </textarea>
        <div className="on">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm