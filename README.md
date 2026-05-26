<div align="center">

<img src="https://img.shields.io/badge/HealthSync-Hospital%20Management%20System-blue?style=for-the-badge&logo=heart&logoColor=white" alt="HealthSync Banner" />

# HealthSync — Hospital Management System

A full-stack, role-based Hospital Management System built with the **MERN Stack**, designed to streamline hospital operations including appointments, prescriptions, medical reports, and payments.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [User Roles](#user-roles)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Folder Structure](#folder-structure)
- [Backend Modules](#backend-modules)
- [Frontend Modules](#frontend-modules)
- [Third-Party Integrations](#third-party-integrations)
- [Installation Guide](#installation-guide)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Security Features](#security-features)
- [Branch Strategy](#branch-strategy)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## Overview

**HealthSync** is a comprehensive digital healthcare platform that bridges the gap between patients, doctors, and hospital administrators. It enables patients to register, discover doctors, book appointments, upload medical documents, process payments, and access prescriptions — all from a single interface.

Doctors can manage their appointment queues, review patient records, and issue digital prescriptions. Administrators maintain full oversight of users, analytics, and system operations through a dedicated dashboard.

The system follows a **modular MERN architecture** with clearly separated frontend and backend applications, making it suitable for academic projects, portfolio showcases, and real-world healthcare appointment management.

---

## Key Features

### Authentication & Authorization
- Secure user registration and login
- JWT-based stateless authentication
- Password hashing with **bcrypt**
- Role-based access control (RBAC)
- Protected routes on both frontend and backend

### Admin Dashboard
- Manage doctors, patients, and appointments
- Monitor payment records and system analytics
- Full visibility into hospital operations and activity logs

### Doctor Portal
- View and manage assigned appointments
- Accept or reject appointment requests
- Access patient profiles and uploaded medical reports
- Create and manage digital prescriptions
- Track consultation history

### Patient Portal
- Search and browse doctor profiles
- Book, reschedule, or cancel appointments
- Upload medical reports (images & PDFs)
- Make online appointment payments
- View prescriptions and appointment history

### Appointment Management
- Intelligent doctor and time-slot selection
- Appointment lifecycle management (pending → confirmed → completed)
- Payment status tracking
- Online consultation link integration

### Medical Reports
- Secure file upload (images and PDFs)
- Report access by authorized doctors
- Patient-side report history

### Payments
- Mock payment flow with status tracking
- Appointment confirmation upon payment
- Full payment history for patients and admins

---

## User Roles

| Role | Description |
|---|---|
| `admin` | Full system control — manages users, doctors, appointments, and analytics |
| `doctor` | Manages own appointments, patient data, and prescriptions |
| `patient` | Books appointments, uploads reports, and manages personal health records |
| `receptionist` | Assists with appointment scheduling and front-desk operations |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, React Router, Axios, Tailwind CSS / CSS Modules |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **File Uploads** | Multer, Cloudinary (or local storage) |
| **State Management** | React Context API / Redux |
| **API Testing** | Postman / Thunder Client |

---

## System Architecture

```
Client (React)
    │
    │  HTTP / REST API
    ▼
Express.js Server
    │
    ├── Auth Middleware (JWT Verification)
    ├── Role Guard Middleware (RBAC)
    │
    ├── Controllers (Business Logic)
    │       ├── Auth
    │       ├── Users / Doctors / Patients
    │       ├── Appointments
    │       ├── Prescriptions
    │       ├── Medical Reports
    │       └── Payments
    │
    └── MongoDB (via Mongoose)
```

---

## Folder Structure

```
healthsync/
├── client/                        # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/            # Reusable UI components
│       ├── context/               # Auth & global state
│       ├── pages/
│       │   ├── Admin/
│       │   ├── Doctor/
│       │   ├── Patient/
│       │   └── Auth/
│       ├── routes/                # Protected & public routes
│       ├── services/              # Axios API service layer
│       └── App.jsx
│
├── server/                        # Express backend
│   ├── config/                    # DB & environment config
│   ├── controllers/               # Route handler logic
│   ├── middleware/                # Auth, error handling, RBAC
│   ├── models/                    # Mongoose schemas
│   ├── routes/                    # API route definitions
│   ├── utils/                     # Helpers and utilities
│   └── server.js
│
├── .env.example
├── .gitignore
└── README.md
```

---

## Backend Modules

| Module | Description |
|---|---|
| `auth` | Registration, login, JWT issuance and verification |
| `users` | User profile management |
| `doctors` | Doctor listings, profiles, and availability |
| `patients` | Patient records and history |
| `appointments` | Full appointment lifecycle management |
| `prescriptions` | Create and retrieve prescriptions |
| `reports` | Medical report uploads and retrieval |
| `payments` | Payment processing and status tracking |
| `admin` | Administrative operations and analytics |

---

## Frontend Modules

| Module | Description |
|---|---|
| `Auth Pages` | Login and registration with form validation |
| `Admin Dashboard` | System overview, user and data management |
| `Doctor Dashboard` | Appointment queue, prescriptions, patient records |
| `Patient Dashboard` | Appointment booking, reports, prescription history |
| `Doctor Search` | Filter and browse available doctors |
| `Appointment Flow` | Multi-step booking with time-slot selection |
| `Payment Flow` | Mock payment interface with confirmation |

---

## Third-Party Integrations

| Service | Purpose |
|---|---|
| **Cloudinary** *(optional)* | Cloud storage for medical report uploads |
| **JWT** | Stateless session authentication |
| **bcrypt** | Secure password hashing |
| **Multer** | File upload handling middleware |

---

## Installation Guide

### Prerequisites

- Node.js `v18+`
- MongoDB (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/healthsync.git
cd healthsync
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the `server/` directory based on `.env.example`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 5. Start the Development Servers

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:5000`.

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `PORT` | Port for the Express server | ✅ |
| `MONGO_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET` | Secret key for signing JWTs | ✅ |
| `JWT_EXPIRES_IN` | Token expiry duration (e.g. `7d`) | ✅ |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | ⚠️ Optional |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ⚠️ Optional |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ⚠️ Optional |

---

## API Endpoints

### Auth
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login and receive JWT | Public |

### Doctors
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/doctors` | List all doctors | Public |
| `GET` | `/api/doctors/:id` | Get doctor profile | Public |
| `PUT` | `/api/doctors/:id` | Update doctor profile | Doctor, Admin |
| `DELETE` | `/api/doctors/:id` | Remove a doctor | Admin |

### Appointments
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/appointments` | Create an appointment | Patient |
| `GET` | `/api/appointments` | List all appointments | Admin |
| `GET` | `/api/appointments/my` | Get user's appointments | Patient, Doctor |
| `PUT` | `/api/appointments/:id/status` | Update appointment status | Doctor, Admin |
| `DELETE` | `/api/appointments/:id` | Cancel an appointment | Patient, Admin |

### Medical Reports
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/reports` | Upload a medical report | Patient |
| `GET` | `/api/reports/my` | View own reports | Patient |
| `GET` | `/api/reports/patient/:id` | View patient's reports | Doctor, Admin |

### Payments
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/payments` | Initiate a payment | Patient |
| `PUT` | `/api/payments/:id` | Update payment status | Admin |
| `GET` | `/api/payments/my` | View payment history | Patient |

---

## Authentication Flow

```
User submits credentials
        │
        ▼
Server validates credentials
        │
        ▼
bcrypt compares hashed password
        │
        ▼
JWT token issued (contains userId + role)
        │
        ▼
Client stores token (localStorage / httpOnly cookie)
        │
        ▼
Protected API requests include token in Authorization header
        │
        ▼
JWT middleware verifies token + role on each request
```

---

## Security Features

- **JWT Authentication** — stateless, expiring tokens for all protected routes
- **bcrypt Password Hashing** — industry-standard one-way hashing with salt rounds
- **Role-Based Access Control** — middleware enforces permissions per route
- **Input Validation** — server-side validation on all incoming request data
- **CORS Configuration** — restricted to trusted origins
- **Environment Variables** — all secrets managed via `.env` and excluded from version control

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable production-ready code |
| `develop` | Integration branch for active development |
| `feature/*` | Individual feature branches (e.g. `feature/payment-flow`) |
| `fix/*` | Bug fix branches (e.g. `fix/auth-token-expiry`) |

> Pull requests should target `develop`. Only tested, stable code is merged into `main`.

---

## Future Enhancements

- [ ] Real-time notifications via WebSockets
- [ ] Video consultation integration (WebRTC or third-party)
- [ ] SMS and email appointment reminders
- [ ] Live payment gateway integration (Stripe / PayPal)
- [ ] Admin analytics with interactive charts
- [ ] Mobile application (React Native)
- [ ] Two-factor authentication (2FA)
- [ ] Multi-language / internationalization (i18n) support

---

## Author

**Your Name**
Full-Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-your--username-181717?style=flat-square&logo=github)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-your--profile-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/your-profile)
[![Portfolio](https://img.shields.io/badge/Portfolio-your--site-FF5722?style=flat-square&logo=firefox)](https://your-portfolio.com)

---

<div align="center">

Made with ❤️ for better healthcare management

</div>
