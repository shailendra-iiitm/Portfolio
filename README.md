# 🚀 Shailendra Shukla - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Full-Stack Developer and IIITian. Built with cutting-edge technologies and premium design aesthetics.

## 🌟 Live Demo

- **Frontend**: [https://shailendra-shukla.vercel.app](https://shailendra-shukla.vercel.app)
- **Backend API**: [https://portfolio-backend-rcpd.onrender.com](https://portfolio-backend-rcpd.onrender.com)

## 🎨 Features

### ✨ Frontend Features
- **Premium Design**: Glass morphism effects, gradient backgrounds, and smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Hero Section**: 
  - Dynamic typewriter animation with multiple roles
  - Professional profile image with layered glow effects
  - Premium button designs with hover animations
- **Skills Showcase**: 
  - Categorized skills (Frontend, Backend, Programming Languages, Databases, Tools)
  - Interactive skill cards with hover effects
  - Progress indicators and technology icons
- **Project Portfolio**: 
  - Featured projects with detailed descriptions
  - Technology stack badges
  - Live demo and GitHub links
  - Responsive project cards
- **Experience Timeline**: 
  - Professional journey visualization
  - Company logos and role descriptions
  - Achievement highlights
- **Contact Form**: 
  - Real-time form validation
  - Email integration with acknowledgment system
  - Professional styling with animations
- **Resume Download**: One-click PDF download functionality
- **Smooth Navigation**: Animated scroll-to-section navigation

### 🔧 Backend Features
- **RESTful API**: Built with Node.js and Express.js
- **Database Integration**: MongoDB Atlas for contact form submissions
- **Email Service**: 
  - Nodemailer integration with Gmail
  - Automatic notification emails to portfolio owner
  - Professional acknowledgment emails to visitors
  - HTML email templates with portfolio branding
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Environment Management**: Secure configuration with environment variables
- **Error Handling**: Comprehensive error logging and user feedback
- **Data Validation**: Server-side validation for all inputs

### 🎯 Technical Features
- **Modern Stack**: React 18, Vite, Tailwind CSS, Node.js, Express, MongoDB
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support
- **Code Quality**: ESLint configuration and clean code practices
- **Version Control**: Git workflow with meaningful commits
- **Deployment**: Vercel (Frontend) + Render (Backend) setup

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library for UI elements

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Nodemailer** - Email sending capability
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variable management

### Deployment & Tools
- **Vercel** - Frontend deployment platform
- **Render** - Backend hosting service
- **MongoDB Atlas** - Cloud database service
- **Git** - Version control system
- **GitHub** - Code repository hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git
- MongoDB Atlas account (for database)
- Gmail account with App Password (for email service)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shailendra-iiitm/Portfolio.git
   cd Portfolio
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create .env file with your credentials
   cp .env.example .env
   # Edit .env with your MongoDB URI, email credentials, etc.
   
   # Start the backend server
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   
   # Create .env file for API URL
   echo "VITE_BACKEND_URL=http://localhost:7000" > .env
   
   # Start the development server
   npm run dev
   ```

4. **Environment Variables**

   **Backend (.env)**
   ```properties
   PORT=7000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/Portfolio
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

   **Frontend (.env)**
   ```properties
   VITE_BACKEND_URL=http://localhost:7000
   ```

## 📧 Email Configuration

To enable the contact form email functionality:

1. **Enable 2-Step Verification** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings → Security → App Passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
3. **Update backend .env** with your email and app password

## 🎨 Customization

### Personal Information
- Update personal details in `frontend/src/Components/Home/Home.jsx`
- Modify skills in `frontend/src/Components/Experience/Experience.jsx`
- Edit projects in `frontend/src/Components/Projects/Projects.jsx`
- Update about section in `frontend/src/Components/About/About.jsx`

### Styling
- Customize colors in Tailwind config: `frontend/tailwind.config.js`
- Modify animations in `frontend/src/index.css`
- Update component styles using Tailwind utilities

### Content
- Replace hero image: `frontend/src/assets/heroImage.png`
- Update project screenshots in `frontend/src/assets/`
- Modify resume file: `frontend/public/resume.pdf`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- Environment variable protection
- Input validation and sanitization
- CORS configuration for secure cross-origin requests
- Error handling without exposing sensitive information
- Secure email integration with app-specific passwords

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Fast Loading**: Optimized images and lazy loading
- **Smooth Animations**: 60fps animations with CSS transforms
- **Efficient Bundling**: Vite's optimized build process

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Shailendra Shukla**
- Portfolio: [https://shailendra-shukla.vercel.app](https://shailendra-shukla.vercel.app)
- GitHub: [@shailendra-iiitm](https://github.com/shailendra-iiitm)
- Email: shailendra.iiitsm@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons and Remix Icons
- Images optimized for web performance
- Email templates designed for professional communication

---

**Built with ❤️ by Shailendra Shukla | IIITian | Full-Stack Developer**
