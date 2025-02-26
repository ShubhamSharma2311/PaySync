


# PaySync

PaySync is a web-based payment solution inspired by PayTM, designed to offer seamless transaction management, user authentication, and real-time balance updates. Built with a modern tech stack, PaySync provides a secure, scalable, and efficient platform for handling digital payments.

---

## 🚀 Features
- 🔒 User authentication and authorization (JWT-based)
- 💵 Wallet management with real-time balance updates
- 📄 Transaction history tracking
- 📨 Secure money transfer between users
- 📊 Dashboard with user insights
- 🐳 Docker support for easy deployment

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB with mongoose ODM 
- **Authentication:** JWT  
- **Validation:** Zod  
  
  

---

## 📝 Prerequisites
- Node.js (v14 or higher)
- MongoDB


---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShubhamSharma2311/PaySync.git
   cd PaySync
   ```

2. **Frontend setup:**
   ```bash
   cd frontend
   npm install
   npm run dev  # Start the development server
   ```

3. **Backend setup:**
   ```bash
   cd ../backend
   npm install
   npm run dev  # Start the backend server
   ```

4. **Docker deployment:**
   ```bash
   docker-compose up --build
   ```

---

## 📂 Project Structure
```
PaySync/
├── frontend/      # React + Tailwind app
├── backend/       # Express + Prisma backend
├── prisma/        # Prisma schema & migrations
├── docker-compose.yml  # Docker orchestration
└── README.md      # Project documentation
```

---

## 🖥️ Usage
- Register or log in to your account.
- Add money to your wallet.
- Transfer money to other registered users.
- View transaction history on your dashboard.

---

## 🤝 Contributing
1. Fork the repository.  
2. Create your feature branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m 'Add YourFeature'`  
4. Push to the branch: `git push origin feature/YourFeature`  
5. Open a pull request.  

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments
Inspired by PayTM with enhancements for educational and demonstration purposes.

---

> Made with ❤️ by Shubham Sharma

