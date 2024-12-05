import React, { useEffect, useState } from "react";
import axios from 'axios'
import { ImCheckboxChecked } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import Header from './Header';
const RequestForm = () => {
  const [products, setProducts] = useState([{ productId: "", quantity: 1 }]);
  const[IndustryCode,setIndustryCode]=useState("")
  const[roads,setRoads]=useState("");
  const [formData, setFormData] = useState({
    Date: "",
    Requester: parseInt(localStorage.getItem('id')),
    Fulfiller: "",
    Price: 0,
    products,
    PaymentType:"",
    Status:"pending"
    
  });
  const [load,setLoad]=useState(false)
  const [productOptions,setProductsOptions]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/industries/getOneByName/'+IndustryCode,)
    .then(r=>{
      setFormData((prev)=>{return{ 
        ...prev,
        Fulfiller:r.data.Id
      }})
      console.log(r.data.Id)
      setLoad(true)
      axios.get('http://localhost:5000/products/getOne/'+r.data.Id).then(r=>{
        setProductsOptions(r.data)
      })
      .catch(err=>console.log(err))
      console.log(r.data)
      
    }).catch(err=>{
      setLoad(false)
    })
  },[IndustryCode])


  useEffect(()=>{
    axios.get('http://localhost:5000/road')
    .then(r=>{
      console.log(r.data);
      setRoads([...r.data]);
      console.log(roads);
      
    }).catch(err=>{
      setLoad(false)
    })
  },[])
  
  // const productOptions = [
  //   { id: "product1", name: "Product 1", price: 10 },
  //   { id: "product2", name: "Product 2", price: 20 },
  //   { id: "product3", name: "Product 3", price: 30 },
  // ];

  // Handle form changes
  const handleFormChange = (e) => {
    console.log(formData)
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle product changes
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    console.log(value)
    setProducts(updatedProducts);
    const obj=JSON.stringify(products)
    setFormData((prev)=>{return{...prev,products:obj}})
  };

  // Add a new product
  const addProduct = () => {
    setProducts((prev) => [...prev, { productId: "", quantity: 1 }]);
    const obj =JSON.stringify(products)
    setFormData((prev)=>{return{...prev,products:obj}})
    // setFormData((prev)=>{return{...prev,products}})
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const selectedProduct = productOptions.find((p) => p.Id == product.productId);
      return total + (selectedProduct ? selectedProduct.price * product.quantity : 0);
    }, 0);
  };

  const handleSubmit = () => {
   axios.post('http://localhost:5000/request/add',formData).then(r=>console.log(r))
   .catch(err=>console.log(err))
  };
  const styles = {
    formGroup: {
      marginBottom: "20px",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "10px",
      paddingRight: "40px", // Space for the icon
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    icon: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "24px",
      height: "24px",
    },
  };
  useEffect(() => {
    const totalPrice = calculateTotalPrice(); // Calculate the total price
    setFormData((prev) => ({ ...prev, Price:totalPrice })); // Update the formData state
  }, [products, productOptions]); 
  return (
    <div>
      <Header />
    <div className="request-form-container">
      
      
      <form className="request-form">
        {/* Industry Details */}
        <div style={styles.formGroup}>
      <label>Industry Code (Requester):</label>
      <div style={styles.inputContainer}>
        <input
          type="text"
          name="IndustryCode"
          value={IndustryCode}
          onChange={(e)=>{setIndustryCode(e.target.value)
           
          }}
          placeholder="Enter industry code"
          style={styles.input}
        />
        {IndustryCode && (
          load?<ImCheckboxChecked style={styles.input}/>
          :
          <MdCancel style={styles.input}/>

        )}
      </div>
    </div>
      

        {/* Products */}
        <div className="products-section">
          <h3>Products</h3>
          {products.map((product, index) => (
            <div key={index} className="product-row">
              {console.log('prod',products)}
              <select
                value={product.productId}
                onChange={(e) => {handleProductChange(index, "productId", e.target.value)
                  
                }}
              >
                <option value="">Select Product</option>
                {productOptions.map((option) => (
                  <option key={option.Id} value={option.Id}>
                    
                 
                  <h1>{option.ProductName} - {option.price}$</h1>

                  
                    
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={product.quantity}

                min="1"
                onChange={(e) =>{
                  const obj=JSON.stringify(products)
                  setFormData((prev)=>{return{...prev,products:obj}})
                  handleProductChange(index, "quantity", parseInt(e.target.value))
                  formData.Price=calculateTotalPrice()
                
                }
                } 
              />
            </div>
          ))}
          <button type="button" onClick={addProduct} className="add-product-btn">
            + Add Another Product
          </button>
        </div>

        {/* Command Date */}
        <div className="form-group">
          <label>Command Date:</label>
          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={handleFormChange}
          />
        </div>

        {/* Total Price */}
        <div className="form-group">
          <label>Total Price:</label>
          <input
            type="text"
            value={`$${calculateTotalPrice()}`}
            readOnly
            className="readonly"
          />
        </div>

        {/* Payment Type */}
        <div className="form-group">
          <label>Payment Type:</label>
          <div className="payment-types">
            {["Credit", "Debit", "Cash"].map((type) => (
              <button
                key={type}
                type="button"
                className={`payment-btn ${formData.PaymentType === type.toLowerCase() ? "selected" : ""}`}
                onClick={() => setFormData({ ...formData, PaymentType: type.toLowerCase() })}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button type="button" onClick={()=>{handleSubmit()
            console.log(formData)
          }}>Send Request</button>
          <button type="button">Archived Request</button>
          <button type="button">Register Request</button>
        </div>
      </form>
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

      <style>
        {`
          .request-form-container {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 150px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #4caf50;
            margin-bottom: 20px;
            padding-bottom: 10px;
          }

          .form-header h2 {
            color: #4caf50;
            margin: 0;
          }

          .form-group {
            margin-bottom: 20px;
          }

          label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }

          input,
          select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 5px;
          }

          input.readonly {
            background-color: #eaeaea;
            cursor: not-allowed;
          }

          .products-section {
            margin-bottom: 20px;
          }

          .product-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
          }

          .add-product-btn {
            display: inline-block;
            background-color: #2c8f31;
            color: white;
            padding: 1px 4px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }

          .add-product-btn:hover {
            background-color: #2c8f31;
          }

          .order-info {
            display: flex;
            gap: 20px;
          }

          .form-group-inline {
            display: flex;
            flex-direction: column;
          }

          .form-group-inline input {
            width: 200px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-top: 5px;
          }

          .payment-types {
            display: flex;
            gap: 10px;
          }

          .payment-btn {
            width: 150px;
            height: 50px;
            flex: 1;
            padding: 10px;
            border: 1px solid #ffffff;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            font-weight: bold;
          }

          .payment-btn:hover {
            background-color: #ffffff;
          }

          .payment-btn.selected {
            background-color: #4caf50;
            color: rgb(255, 255, 255);
            border-color: #4caf50;
          }

          .form-actions {
            text-align: center;
          }

          .buttons {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
          }

          footer {
            margin-top: 20px;
            text-align: center;
          }

          .contact-button {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }

          .contact-button:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
};

export default RequestForm;
