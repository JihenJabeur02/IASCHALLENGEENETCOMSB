#include <WiFi.h>
#include <Firebase_ESP_Client.h>

// Motor control pins
#define IN1 2
#define IN2 4
#define ENA 15

// Sensor pin
#define SENSOR_PIN 21

// Firebase credentials
#define API_KEY "AIzaSyCKGtYKIJ3wLNohBl4-t_enm9Q-bfFeu1k"
#define DATABASE_URL "https://esp32-9a9bc-default-rtdb.europe-west1.firebasedatabase.app/"

// Wi-Fi credentials
#define WIFI_SSID "Galaxy A31D265"
#define WIFI_PASSWORD "12345678"

// Firebase objects
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

// Counter variables
int counter = 0;
int counterLimit = 5; // Default limit in case Firebase is unreachable

// Status variable
bool limitReached = false;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);

  // Initialize motor control pins
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);

  // Initialize sensor pin
  pinMode(SENSOR_PIN, INPUT);

  // Connect to Wi-Fi
  Serial.print("Connecting to Wi-Fi");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println("\nConnected to Wi-Fi");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Configure Firebase
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  // Firebase authentication
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Connected to Firebase");
  } else {
    Serial.printf("Firebase connection failed: %s\n", config.signer.signupError.message.c_str());
  }
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Retrieve the initial counter limit from Firebase
  if (Firebase.RTDB.getInt(&firebaseData, "/counter_limit")) {
    counterLimit = firebaseData.intData();
    Serial.print("Counter limit set to: ");
    Serial.println(counterLimit);
  } else {
    Serial.println("Failed to fetch counter limit. Using default value.");
  }

  // Start the motor initially
  startMotor();
}

void loop() {
  // Reset `limitReached` to `false` in Firebase
  if (Firebase.RTDB.setBool(&firebaseData, "/limitReached", false)) {
    Serial.println("Status reset to false in Firebase.");
  } else {
    Serial.println("Failed to reset status in Firebase.");
  }

  // Stop the motor if the counter reaches the limit
  if (counter >= counterLimit && !limitReached) {
    stopMotor();
    Serial.println("Counter reached limit. Motor stopped.");

    // Update the status variable
    limitReached = true;

    // Send the updated status to Firebase
    if (Firebase.RTDB.setBool(&firebaseData, "/limitReached", limitReached)) {
      Serial.println("Status updated in Firebase: limitReached = true");
    } else {
      Serial.println("Failed to update status in Firebase.");
    }

    // Halt execution permanently
    while (true) {
      delay(1000);
    }
  }

  // Check sensor state
  if (digitalRead(SENSOR_PIN) == HIGH) {
    Serial.println("Object detected!");

    // Increment the counter
    counter++;
    Serial.print("Detection count: ");
    Serial.println(counter);

    // Wait until the object clears
    while (digitalRead(SENSOR_PIN) == HIGH) {
      delay(100);
    }
    Serial.println("Object cleared!");
  }

  // Keep the motor running
  startMotor();
  delay(100); // Short delay for stability
}

// Function to start the motor
void startMotor() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 120); // Set motor speed (adjustable, 0-255)
}

// Function to stop the motor
void stopMotor() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 0); // Stop motor
}
