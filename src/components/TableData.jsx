import React, { useEffect, useState } from "react";
import "../App.css"
import { Table, Tag } from "antd";
export const TableData = (props) => {
    const [filteredData, setFilteredData] = useState([]);
    const [Filter, setFilter] = useState(props.Filter);
    const [transaction, setTransaction] = useState({
        transactionId: '',
        orderId: '',
        email: '',
        name: '',
        phone: '',
        amount: '',
        date: '',
        status: '',
    });
    const [transactionData,setTransactionData]=useState([])
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
    const dataTransfer = () => {
        filteredData.map((Order) => {
            setTransaction({ ...transaction, transactionId: Order.transaction_id, orderId: Order.order_id, email: Order.email, name: Order.name, phone: Order.mob, amount: Order.amount, date: Order.order_date, });
        })
    }
    return (
        <div>
            data
       </div>
    );
}