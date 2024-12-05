#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

// Firebase project configuration
#define API_KEY "AIzaSyCKGtYKIJ3wLNohBl4-t_enm9Q-bfFeu1k"
#define DATABASE_URL "https://esp32-9a9bc-default-rtdb.europe-west1.firebasedatabase.app/"

// WiFi credentials
#define WIFI_SSID "Redmi Note 11"
#define WIFI_PASSWORD "11112222"

// Sensor and motor control pins
const int c1 = 23; // Infrared sensor left
const int c2 = 22; // Infrared sensor center
const int c3 = 21; // Infrared sensor right
const int c4 = 34; // Infrared sensor far left
const int c5 = 19; // Infrared sensor far right
const int in1 = 27, in2 = 25, in3 = 33, in4 = 26; // Motor control
const int ena = 13 , enb = 32; // Motor speed

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

bool ledStatus = false;
int id = 0;

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());

  // Firebase configuration
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  config.token_status_callback = tokenStatusCallback;

  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Connected to Firebase");
  } else {
    Serial.printf("Firebase connection failed: %s\n", config.signer.signupError.message.c_str());
  }

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Set pin modes
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  pinMode(ena, OUTPUT);
  pinMode(enb, OUTPUT);
  pinMode(c1, INPUT);
  pinMode(c2, INPUT);
  pinMode(c3, INPUT);
  pinMode(c4, INPUT);
  pinMode(c5, INPUT);
}

void readSensors(int &x, int &y, int &z, int &n, int &m) {
  x = digitalRead(c1);
  y = digitalRead(c2);
  z = digitalRead(c3);
  n = digitalRead(c4);
  m = digitalRead(c5);
}

void updateFirebaseData() {
  if (Firebase.ready()) {
    if (Firebase.RTDB.getBool(&fbdo, "/limitReached")) {
      ledStatus = fbdo.boolData();
      digitalWrite(2, ledStatus ? HIGH : LOW);
      Serial.printf("Limit Reached: %s\n", ledStatus ? "ON" : "OFF");
    } else {
      Serial.printf("Firebase Error: %s\n", fbdo.errorReason().c_str());
    }

    if (Firebase.RTDB.getInt(&fbdo, "/id")) {
      id = fbdo.intData();
      Serial.printf("ID: %d\n", id);
    } else {
      Serial.printf("Firebase Error: %s\n", fbdo.errorReason().c_str());
    }
  }
}

void moveMotors(int in1State, int in2State, int in3State, int in4State, int speedA, int speedB) {
  digitalWrite(in1, in1State);
  digitalWrite(in2, in2State);
  analogWrite(ena, speedA);
  digitalWrite(in3, in3State);
  digitalWrite(in4, in4State);
  analogWrite(enb, speedB);
}

void loop() {
  int x, y, z, n, m;
  readSensors(x, y, z, n, m);
  updateFirebaseData();

  if (ledStatus) {
    if (x == 1 && y == 0 && z == 1) {
      moveMotors(HIGH, LOW, LOW, HIGH, 100, 100); // Move forward
    } else if ((x == 0 && y == 0 && z == 1) || (x == 0 && y == 1 && z == 1)) {
      moveMotors(HIGH, LOW, LOW, LOW, 100, 0); // Turn left
    } else if ((x == 1 && y == 1 && z == 0) || (x == 1 && y == 0 && z == 0)) {
      moveMotors(LOW, LOW, LOW, HIGH, 0, 100); // Turn right
    } else if (n == 0 && m == 0 && x == 0 && y == 0 && z == 0) {
      switch (id) {
        case 1: moveMotors(LOW, LOW, LOW, HIGH, 0, 120); break; // Case 1
        case 2: moveMotors(HIGH, LOW, LOW, HIGH, 120, 120); break; // Case 2
        case 3: moveMotors(HIGH, LOW, LOW, LOW, 120, 0); break; // Case 3
      }
      delay(300);
    }
  }
}
