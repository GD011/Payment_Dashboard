import React from 'react'
import icon from '../img/logo.png'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, TranslationOutlined, MoneyCollectOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">SaturnPay</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/SuccessFullTransaction">Success Transaction</Link>
                </Menu.Item>
                <Menu.Item icon={<TranslationOutlined />}>
                    <Link to="/Transaction">Transaction</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/Refunds">Refunds</Link>
                </Menu.Item>
            </Menu>
      </div>
  )
}

export default Navbar;