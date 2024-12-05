import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    images: "", // This will hold the image URL or file path
    ProductName: "",
    ProductCode: "",
    price: "",
    industryId: localStorage.getItem("id"),
  });

  // To load the image from localStorage (if available)
  useEffect(() => {
    const savedImage = localStorage.getItem("productImage");
    if (savedImage) {
      setProductData((prevData) => ({
        ...prevData,
        images: savedImage,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setProductData((prevData) => ({
        ...prevData,
        images: imageUrl, // Update the product data with the image URL
      }));

      // Optionally, upload the image to the server
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post("http://localhost:5000/upload", formData)
        .then((response) => {
          console.log("Image uploaded successfully", response.data);
          localStorage.setItem("productImage", response.data.imageUrl); // Save the image URL in localStorage
        })
        .catch((err) => {
          console.error("Error uploading image", err);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/products/add", productData)
      .then((response) => {
        console.log(response.data);
        alert("Product added successfully!");
        window.location = "/industry"; // Navigate back to products page
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App" style={styles.app}>
      <Header />
      <main style={styles.main}>
        <div style={styles.formContainer}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#2c8f31",
              marginBottom: "40px",
            }}
          >
            Add Product
          </h2>
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>
              Product Image:
              <input
                type="file"
                name="images"
                accept="image/png, image/jpeg" // Allow only image files
                onChange={handleImageChange} // Handle image selection
                style={styles.input}
              />
            </label>
            {productData.images && (
              <div>
                <h3>Image Preview:</h3>
                <img
                  src={productData.images}
                  alt="Product Preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    marginBottom: "15px",
                  }}
                />
              </div>
            )}
            <label style={styles.label}>
              Product Name:
              <input
                type="text"
                name="ProductName"
                placeholder="Enter product name"
                value={productData.ProductName}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Product Code:
              <input
                type="text"
                name="ProductCode"
                placeholder="Enter product code"
                value={productData.ProductCode}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Price:
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={productData.price}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <button type="submit" style={styles.submitBtn}>
              Add Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#ffffff",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    padding: "20px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  formContainer: {
    maxWidth: "480px",
    width: "90%",
    padding: "60px",
    borderRadius: "10px",
    backgroundColor: "#69a9c7",
    boxShadow: "0 4px 8px rgba(0,0,0,0)",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginTop: "5px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  submitBtn: {
    width: "50%",
    padding: "12px",
    boxShadow: "0 2px 4px rgba(255,255,255,255)",
    backgroundColor: "#2c8f31",
    border: "none",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default AddProduct;
