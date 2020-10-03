import React from 'react';

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import Messages from '../common/msg/Messages';

const App = props => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        {props.children}
      </div>
      <Footer />
      <Messages />
    </div>
  );
}

export default App;