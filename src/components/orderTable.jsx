import React, { useEffect, useState } from "react";
import "../App.css"
import { Table,Tag } from "antd";
export const OrderTable = (props) => {
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
        filterData(data, Filter)
      } else {
        setFilteredData(data)
      }

    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const filterData = (data, filter) => {
    const filteredData = data.filter((item) =>
      item.status === filter
    );
    setFilteredData(filteredData);
  };

  return (
    <div >
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
              <td style={props.Filter==="1"?{paddingLeft:"15px",paddingRight:"15px"}:{padding:0}}>{
                Order.status === "1" ?
                  <Tag color="success">success</Tag>
                  : (Order.status === "0" ?
                    <Tag color="processing">pending</Tag>
                  : <Tag color="warning">Failed</Tag>)
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}