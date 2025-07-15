# SpeedyShip Courier Service

## Project Overview
SpeedyShip Courier Service is a web-based application designed to streamline courier services. It provides users with features such as account creation, shipment scheduling, order tracking, and contact management. The project is built using modern web technologies and follows a modular architecture for scalability and maintainability.

## Features
1. **User Authentication**:
   - Sign Up and Login functionality.
   - Forgot Password feature for account recovery.

2. **Shipment Management**:
   - Fill out shipment forms to schedule deliveries.
   - Specify delivery times and receiver details.

3. **Order Tracking**:
   - View detailed tracking information for shipments.

4. **Contact Us**:
   - Submit inquiries or messages via the contact form.

5. **Responsive Design**:
   - Optimized for various screen sizes and devices.

## Technologies Used
- **Frontend**:
  - HTML, CSS, JavaScript
  - Bootstrap for responsive design
- **Backend**:
  - Node.js with Express.js
  - MongoDB for database management
  - Mongoose for schema modeling
- **Other Tools**:
  - Nodemon for development server monitoring

## Home Page
![](https://github.com/Sbs114/Courier-Service/blob/main/Images/HomePage.png)

## Folder Structure
```
DA - I/
├── src/
│   ├── index.html
│   ├── signup.html
│   ├── login.html
│   ├── ship.html
│   ├── track.html
│   ├── logged-in.html
│   ├── forgot-password.html
│   ├── Login-route.js
│   ├── Ship-route.js
│   ├── loginSchema.js
│   ├── shipSchema.js
├── public/
│   ├── CSS/
│   │   ├── style.css
│   │   ├── nav.css
│   │   ├── login.css
│   │   ├── signup.css
│   │   ├── ship.css
│   │   ├── track.css
│   │   ├── forgot-password.css
│   ├── index.js
│   ├── login.js
│   ├── signup.js
│   ├── ship.js
│   ├── track.js
│   ├── forgot-password.js
├── server.js
├── package.json
```

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd DA - I
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

## Usage
- Navigate to the homepage to explore the services.
- Create an account or log in to access shipment and tracking features.
- Use the contact form for inquiries or support.

## Future Enhancements
- Add payment integration for premium services.
- Implement real-time tracking updates.
- Enhance security features for user authentication.

## License
This project is licensed under the ISC License.

## Contributors
- Sanjith BS
- Astitva Gupta
