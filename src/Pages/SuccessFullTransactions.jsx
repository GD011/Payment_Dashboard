import { OrderTable } from "../components"
import { Typography, Row, Col, Statistic } from "antd"
const { Title } = Typography;
export const SuccessFullTransactions = () => {
    return (
        <div>
            <div></div>
            <Title level={2} className="heading">SuccessFull Transaction Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total SuccessFull Transactions" value="7890"></Statistic></Col>
                <Col span={12}><Statistic title="Total Success Transactions in 24hrs" value="67"></Statistic></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top SuccessFull Transactions</Title>
            </div>
            <OrderTable Filter="1"/>
        </div>
    )
}