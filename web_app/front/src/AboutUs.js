import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from './Header';

const AboutUsPage = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  width: 100%;
  padding-top: 0px;
`;

const PageContent = styled.main`
  padding: 20px;
  text-align: center;
  background-color: #fffffff;
  margin-top: 50px;
`;

const Section = styled.section`
  padding: 100px;
  text-align: center;
  color: #000000;
  background-color: #69a9c7;
  border-radius: 30px;
  box-shadow: 0 3px 3px rgba(192, 235, 192);
  margin-bottom: 80px;
  font-size: 1.8rem;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #00000;
  max-width: 1500px;
  margin: 3px auto;
  padding: 15px;
  text-align: left;
  background-color: #00000;
  border-radius: 20px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style-type: circle;
  text-align: left;
  margin: auto;
  max-width: 400px;
  padding: 10px;
  font-size: 1.1rem;
`;

const Button = styled.button`
  background-color: #2c8f31;
  color: #2c8f31;
  border: none;
  padding: 12px 25px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2c8f31;
  }
`;

const App = () => {
  // States for the counters
  const [industrialZones, setIndustrialZones] = useState(0);
  const [numIndustries, setNumIndustries] = useState(0);
  const [subscribers, setSubscribers] = useState(0);

  // Function to start counting from 0 to the target number
  const countUp = (target, setState) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setState(count);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed of counting by modifying this value
  };

  // Trigger the counting when component mounts
  useEffect(() => {
    countUp(4, setIndustrialZones);
    countUp(10, setNumIndustries);
    countUp(20, setSubscribers);
  }, []);

  return (
    <AboutUsPage>
      <Header />
      <PageContent>
        {/* About Us */}
        <Section>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2c8f31", marginBottom: "40px" }}>About Us</h2>
          
          <Paragraph>
            Welcome to our platform, where innovation meets sustainability! We are committed to transforming Tunisia's industrial sector by creating connected, efficient, and eco-friendly industrial zones. Our goal is to help industries optimize their operations, reduce their environmental impact, and foster a collaborative and sustainable ecosystem for the future.
          </Paragraph>
        </Section>

        {/* Statistics Section */}
        <Section style={{ padding: "40px 20px", textAlign: "center" }}>
          {/* Main Title for the Statistics Section */}
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2c8f31", marginBottom: "40px" }}>
            Statistics
          </h2>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {/* Industrial Zones Box */}
            <div style={{ backgroundColor: "#fff", color: "#000", borderRadius: "20px", padding: "20px", width: "250px", textAlign: "center", boxShadow: "0 3px 3px rgba(192, 235, 192)" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#38f241" }}>
                
              </h3>
              <div style={{ backgroundColor: "#2c8f31", borderRadius: "50%", width: "60px", height: "60px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                  <path d="M3 1a1 1 0 0 0-1 1v11h6v-3h4v3h3V8l-4 3V6l-4 3V2a1 1 0 0 0-1-1H3z" />
                </svg>
              </div>
              <h2 style={{ margin: "10px 0" }}>{industrialZones}</h2>
              <p>Number of Industrial Zones</p>
            </div>

            {/* Number of Industries Box */}
            <div style={{ backgroundColor: "#fff", color: "#000", borderRadius: "20px", padding: "20px", width: "250px", textAlign: "center", boxShadow: "0 3px 3px rgba(192, 235, 192)" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#38f241" }}>
                
              </h3>
              <div style={{ backgroundColor: "#2c8f31", borderRadius: "50%", width: "60px", height: "60px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                  <path d="M3 1a1 1 0 0 0-1 1v11h6v-3h4v3h3V8l-4 3V6l-4 3V2a1 1 0 0 0-1-1H3z" />
                </svg>
              </div>
              <h2 style={{ margin: "10px 0" }}>{numIndustries}</h2>
              <p>Number of Industries</p>
            </div>

            {/* Subscribers Box */}
            <div style={{ backgroundColor: "#fff", color: "#000", borderRadius: "20px", padding: "20px", width: "250px", textAlign: "center", boxShadow: "0 3px 3px rgba(192, 235, 192)" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#38f241" }}>
                
              </h3>
              <div style={{ backgroundColor: "#2c8f31", borderRadius: "50%", width: "60px", height: "60px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                  <path d="M8 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2 1H6a2 2 0 0 0-2 2v5h8V8a2 2 0 0 0-2-2z" />
                </svg>
              </div>
              <h2 style={{ margin: "10px 0" }}>{subscribers}</h2>
              <p>Subscribers</p>
            </div>
          </div>
        </Section>

        {/* Vision */}
        <Section>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2c8f31", marginBottom: "40px" }}>Our Vision</h2>
          <Paragraph>
            We envision a future where industrial zones operate as interconnected systems, reducing the reliance on traditional transportation, minimizing carbon emissions, and using energy in the most efficient way. Our aim is to contribute to a greener and more sustainable Tunisia.
          </Paragraph>
        </Section>

         {/* What We Do */}
         <Section>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2c8f31", marginBottom: "40px" }}>What We Do</h2>
          
            <Paragraph>
              <li><strong>Optimized Transportation:</strong> Autonomous carts for product exchange within industrial zones.</li>
              <li><strong>Energy Management:</strong> AI-driven system for dynamic energy use and real-time power requests.</li>
              <li><strong>Collaboration:</strong> A platform that brings industries together, facilitating real-time transactions and ensuring optimal resource allocation.</li>
            </Paragraph>
          
        </Section>

        {/* Mission */}
        <Section>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2c8f31", marginBottom: "40px" }}>Our Mission</h2>
         
            <Paragraph>
              Our mission is to empower industries to adopt sustainable practices through technology. By implementing intelligent systems for both transportation and energy management, we aim to reduce operational costs, minimize environmental impact, and enhance industrial collaboration. We believe that sustainability and innovation go hand-in-hand, and our platform is here to make that vision a reality.
            </Paragraph>
          
        </Section>

        {/* Why Choose Us */}
        <Section>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2c8f31", marginBottom: "40px" }}>Why Choose Us?</h2>
          
            <Paragraph>
              <li><strong>Sustainability:</strong> Our solutions prioritize eco-friendly practices, reducing CO₂ emissions and energy waste.</li>
              <li><strong>Efficiency:</strong> We streamline industrial operations, making product transfers faster and energy management smarter.</li>
              <li><strong>Innovation:</strong> Our platform leverages the latest advancements in AI, autonomous systems, and renewable energy to drive industrial progress.</li>
              <li><strong>Collaboration:</strong> By connecting industries, we foster a collaborative environment that promotes shared growth and mutual success.</li>
            </Paragraph>
          
        </Section>
      </PageContent>

      {/* Contact Section */}
<footer style={{ marginTop: "15px", textAlign: "center" }}>
  <button
    style={{
      padding: "15px 0",
      fontSize: "18px",
      backgroundColor: "#2c8f31",
      color: "white",
      border: "none",
      cursor: "pointer",
      width: "100%", // Full width button
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    Contact Us
  </button>
</footer>
    </AboutUsPage>
  );
};

export default App;