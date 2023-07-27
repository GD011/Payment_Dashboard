import { OrderTable } from "../components"
import { TableData } from "../components/TableData"
import { Link } from "react-router-dom"
import '../App.css'
import { Typography,Row,Col,Statistic,Input} from "antd"
const { Title } = Typography;
export const Home = () => {
    return (
        <div>
            <div style={{padding:'5px'}}>
            <Title level={2} className="heading">Account stats</Title>
            <Row>
                <Col span={6} className="factBox"><Statistic title="Total Transactions" value="789000"></Statistic></Col>
                <Col span={6} className="factBox"><Statistic title="Total Volume" value="67990"></Statistic></Col>
                <Col span={6} className="factBox"><Statistic title="Total Volume in 24hrs" value="6789"></Statistic></Col>
                <Col span={6} className="factBox"><Statistic title="Total Transactions in 24hrs" value="8979"></Statistic></Col>
                <Col span={6} className="factBox"><Statistic title="Total SuccessFull Transactions" value="7890"></Statistic></Col>
            </Row>
            <Row className="tablecontrol">
                    <Col span={10}>
                        <div>
                            <Row className="filter">
                                <Col span={3}><Title level={4}>Filter</Title></Col>
                                <Col span={20}><Input placeholder="Basic usage" /></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div>
                            <Row className="filter">
                                <Col span={3}><Title level={4}>Sort</Title></Col>
                                <Col span={20}><Input placeholder="Basic usage" /></Col>
                            </Row>
                        </div>
                    </Col>
            </Row>
            </div>
            <div style={{marginLeft:10}}>
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Top Transactions</Title>
                </div>
                <OrderTable />
            </div>
        </div>
    )
}