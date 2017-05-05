import React from 'react';
import { openDialog } from 'zent-dialog';
import ZenStyle from 'zent/lib/index.css';
import Style from './style/layout.scss'
import Notify from 'zent-notify';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
    this.testSuccess = this.testSuccess.bind(this);
  }

  componentWillMount() {
    setTimeout(this.open, 3000)
  }

  onFecth() {

  }
  
  testSuccess () {
    Notify.success('连接成功，进入房间...', 2000);
  }

  open (){
    const closeDialog = openDialog({
      title: '欢迎来到SocketScreen',
      children: (
        <div>
          <input type="text" className="zent-btn-large y-zent-input" placeholder="请输入您的房间ID" />
          <input type="button" className="zent-btn zent-btn-primary zent-btn-large" onClick={()=>{closeDialog(); this.testSuccess()} } value="进入"/>
        </div>
      ),
      onClose() {
        console.log('outer dialog closed'); 
      },
      style: { width: '500px' }
    });
  };


  render() {
    return (
      <div className="open-demo">
      </div>
    );
  }
}

export default LoginForm