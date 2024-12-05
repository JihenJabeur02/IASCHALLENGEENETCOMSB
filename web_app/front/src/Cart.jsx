import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";

const CartPage = () => {
  // Inline CSS styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
    },
    tableCell: {
      position: "relative", // For proper styling in a table cell
      width: "300px",
      height: "300px",
      padding: "10px",
      border: "1px solid #ddd",
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
      height: '40px',
      marginRight: '10px',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    activeLink: {
      color: '#00b300',
    },
    cartContainer: {
      padding: '20px',
      textAlign: 'center',
    },
    cartIcon: {
      backgroundColor: '#d3d3d3',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      margin: '20px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
    },
    tableContainer: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    table: {
      borderCollapse: 'collapse',
      width: '80%',
    },
    tableHeader: {
      backgroundColor: '#69A9C7',
      padding: '10px',
      border: '1px solid #dddddd',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #dddddd',
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#98da98',
      padding: '10px 20px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    cartStatusButton: {
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '15px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    indStatusButton: {
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '15px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    backButton: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      cursor: 'pointer',
      fontSize: '24px',
    },
  };
  const [data,setData]=useState([])
  const [data1,setData1]=useState([])
  
  const updat=(id,Status)=>{
    axios.put('http://localhost:5000/request/updateOne/'+id,{Status}).then(r=>
      console.log(r)
    ).catch(err=>console.log(err))
  }
  useEffect(()=>{
    axios.get('http://localhost:5000/request/getFull/'+localStorage.getItem('id'))
    .then(r=>{setData(r.data);console.log(r.data)}).catch(err=>console.log(err))
    axios.get('http://localhost:5000/request/getRequester/'+localStorage.getItem('id'))
    .then(r=>{setData1(r.data);console.log(r.data)}).catch(err=>console.log(err))
  },[])
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
    <Header/>

      {/* Back Button */}
      <div style={styles.backButton}>&larr;</div>

      {/* Cart Section */}
      <div style={styles.cartContainer}>
        <div style={styles.cartIcon}>
          <span>Cart</span>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Products</th>
                <th style={styles.tableHeader}>Road</th>
                <th style={styles.tableHeader}>DepartureDate</th>
                <th style={styles.tableHeader}>Arrival Date</th>
                <th style={styles.tableHeader}>CartStatus</th>
                <th style={styles.tableHeader}>IndStatus</th>
                <th style={styles.tableHeader}>Accept/Decline</th>
              </tr>
            </thead>
            <tbody>
              {
                  data.map(e=>(

                    <tr>
                <td style={styles.tableCell}
                onClick={()=>console.log(e.Products)}
                >First Mission</td>
                <td style={styles.tableCell}>sokra road</td>
                <td style={styles.tableCell}>{e.Date}</td>
                <td style={styles.tableCell}>{e.createdAt.slice(0,10)}</td>
                <td style={styles.tableCell}>
                  <button style={styles.cartStatusButton}>{e.Status}</button>
                </td>
                <td style={styles.tableCell}>
                  <button style={styles.indStatusButton}>FullFiller</button>
                </td>
                <td style={styles.tableCell}>
                  <div style={{display:"flex",width:'100%',justifyContent: "space-between"}}>
                  <MdOutlineDeleteOutline
                  onClick={()=>updat(e.Id,"cancel")}
                  size={25} style={{cursor:"pointer"}}/>
                  <ImCheckboxChecked
                  onClick={()=>updat(e.Id,"success")}
                  size={25} style={{cursor:"pointer"}}/>

                  </div>
                </td>
              </tr>
                ))
          }
              {
                  data1.map(e=>(

                    <tr>
                <td style={styles.tableCell}
                onClick={()=>console.log(e.Products)}
                >First Mission</td>
                <td style={styles.tableCell}>Sokra road</td>
                <td style={styles.tableCell}>{e.Date}</td>
                <td style={styles.tableCell}>{e.createdAt.slice(0,10)}</td>
                <td style={styles.tableCell}>
                  pending...
                </td>
                <td style={styles.tableCell}>
                  <button style={styles.indStatusButton}>Requester</button>
                </td>
                
                <td style={styles.tableCell}>
                  <button style={styles.cartStatusButton}>{e.Status}</button>
                </td>
                

      
                
              </tr>
                ))
          }
            </tbody>
          </table>
        </div>
      </div>

      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "#2c8f31",
          color: "white",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        <button
          style={{
            fontSize: "18px",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </footer>
    </div>
  );
};

export default CartPage;
