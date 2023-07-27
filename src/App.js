import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';
import Navbar from './components/Navbar';
import { Home, SuccessFullTransactions,Transaction,Refunds } from './Pages';
import './App.css'
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/SuccessFullTransaction" element={<SuccessFullTransactions/>} />
              <Route exact path="/Transaction" element={<Transaction />} />
              <Route exact path="/Refunds" element={<Refunds />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{color:'#ffff',textAlign:'center'}}>
            SaturnPay <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/Transactions">Transactions</Link>
            <Link to="/Refund">Refund</Link>
          </Space>
      </div>
    </div>
    </div>
  );
}

export default App;
