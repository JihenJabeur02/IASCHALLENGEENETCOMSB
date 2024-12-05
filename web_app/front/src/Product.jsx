import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 100px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
`;

const CircleIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
  background-color: #69a9c7;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
`;

const Footer = styled.footer`
  background-color: #2c8f31;
  color: white;
  padding: 15px 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch products from database
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/getOne/"+id)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddClick = () => {
    navigate("/add-product");
  };

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Title>
          <CircleIcon />
          <h1>Products</h1>
        </Title>
        <SearchBar>
          <SearchInput type="text" placeholder="Search..." />
          <Button>🔍</Button>
          <Button onClick={handleAddClick}>Add</Button>
        </SearchBar>
        <ProductTable>
          <thead>
            <tr>
              <TableHeader>Product Image</TableHeader>
              <TableHeader>Product Name</TableHeader>
              <TableHeader>Product Code</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Buy</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <TableData colSpan="5" style={{ textAlign: "center" }}>
                  No products found.
                </TableData>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <TableData>
                    <img
                      style={{ width: "100px" }}
                      src={item.images}
                      alt={item.ProductName}
                    />
                  </TableData>
                  <TableData>{item.ProductName}</TableData>
                  <TableData>{item.ProductCode}</TableData>
                  <TableData>{item.price}$</TableData>
                  <TableData>
                    <Button>+</Button>
                  </TableData>
                </tr>
              ))
            )}
          </tbody>
        </ProductTable>
      </ContentWrapper>
      <Footer>Contact Us</Footer>
    </Container>
  );
};

export default Product;