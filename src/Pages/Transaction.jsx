import { useState,useEffect } from "react";
import { Typography, Row, Col, Statistic,Tag} from "antd"
const { Title } = Typography;

export const Transaction = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [Filter, setFilter] = useState(props.Filter);
 useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://api.saturnproduction.com/v1/fetch_all_orders");
      const data = await response.json();
      if (Filter >= 0) {
        filterData(data,Filter)
      } else {
        setFilteredData(data)
      }

    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const filterData = (data, filter) => {
    const filteredData = data.filter((item) =>
      item.status===filter
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <Title level={2} className="heading">Transaction Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Transactions" value="7890"></Statistic></Col>
        <Col span={12}><Statistic title="Total Transactions in 24hrs" value="67"></Statistic></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Transactions</Title>
      </div>
      <table style={{textAlign:"center"}}>
        <thead >
          <tr>
            <th>Transaction ID</th>
            <th>Order ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((Order) => (
            <tr key={Order.id}>
              <td >{Order.transaction_id}</td>
              <td >{Order.order_id}</td>
              <td >{Order.email}</td>
              <td >{Order.name}</td>
              <td >{Order.mob}</td>
              <td >{Order.amount}</td>
              <td >{Order.order_date}</td>
              <td >{
                Order.status === "1" ?
                  <Tag color="success">success</Tag>
                  : (Order.status === "0" ?
                    <Tag color="processing">processing</Tag>
                    : <Tag color="warning">Failed</Tag>)
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
  );
}