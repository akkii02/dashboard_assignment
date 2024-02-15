import React from "react";
import classes from "./Pending.module.css";
import Orders from "../Orders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faRefresh,faPrint,faFileImport } from "@fortawesome/free-solid-svg-icons";

const Pending = () => {
  const ordersData = [
    { id: 1, channel: "Shopify", orderNo: "#ndisoi", orderDate: "2024-02-16", city: "Lucknow", customerName: "Akshay", orderValue: 100, status: "Pending" },
    { id: 2, channel: "Shopify", orderNo: "#ndisoi", orderDate: "2024-02-16", city: "Lucknow", customerName: "Akshay", orderValue: 100, status: "Pending" },
    { id: 3, channel: "Shopify", orderNo: "#ndisoi", orderDate: "2024-02-16", city: "Lucknow", customerName: "Akshay", orderValue: 100, status: "Pending" }
  ];

  return (
    <>
      <div className={classes.container}>
        <Orders />
        <div className={classes.main}>
          <div className={classes.btn}>
            <div>
              <button className={classes.primary}><FontAwesomeIcon icon={faFileImport} />Import Order</button>
              <button className={classes.secondary} disabled>
                Accept
              </button>
              <button className={classes.secondary} disabled>
                  <FontAwesomeIcon icon={faPrint}/>
               <span>Print</span> 
              </button>
            </div>
            <div className={classes.btn2}>
              <button><FontAwesomeIcon icon={faRefresh}/> Refresh</button>
            </div>
          </div>
          <div className={classes.table}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th><input type="radio" name="select-all" /></th>
                  <th>Channel</th>
                  <th>Order No</th>
                  <th>Order Date</th>
                  <th>City</th>
                  <th>Customer Name</th>
                  <th>Order Value</th>
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((order) => (
                  <tr key={order.id}>
                    <td style={{margin:"0 20px"}}>+</td>
                    <td><input type="radio" name="select-one" /></td>
                    <td style={{ color: "blue" }}>{order.channel === "Shopify" ? <FontAwesomeIcon icon={faShopify} /> : order.channel}</td>
                    <td>{order.orderNo}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.city}</td>
                    <td>{order.customerName}</td>
                    <td>{order.orderValue}</td>
                    <td><button className={classes.btns}>{order.status}</button></td>
                    <td>
                      <button>Action<FontAwesomeIcon icon="fa-solid fa-chevron-down" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            <div className={classes.tableBtn}>
                  <button className={classes.bt}>{"<"}</button>
                  <button className={classes.bt}>1</button>
                  <button className={classes.bt}>{">"}</button>
                  <button className={classes.bt}>20/ page</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Pending;
