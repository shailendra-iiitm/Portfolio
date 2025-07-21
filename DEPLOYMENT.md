# 🚀 Deployment Guide

This guide walks you through deploying the portfolio to production using Vercel (Frontend) and Render (Backend).

## 🎯 Production Setup

### 1. Backend Deployment (Render)

1. **Create Render Account**: Sign up at [render.com](https://render.com)

2. **Create New Web Service**:
   - Connect your GitHub repository
   - Select "backend" folder as root directory
   - Environment: Node.js
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables** (in Render dashboard):
   ```
   PORT=7000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/Portfolio
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

4. **Deploy**: Click "Create Web Service"

### 2. Frontend Deployment (Vercel)

1. **Create Vercel Account**: Sign up at [vercel.com](https://vercel.com)

2. **Import Project**:
   - Connect GitHub repository
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Environment Variables** (in Vercel dashboard):
   ```
   VITE_BACKEND_URL=https://your-backend-url.onrender.com
   ```

4. **Deploy**: Click "Deploy"

## 🔧 Environment Variables Setup

### Backend (Render)
- `PORT`: Server port (usually 7000)
- `MONGO_URI`: MongoDB Atlas connection string
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Gmail App Password (16 characters)

### Frontend (Vercel)
- `VITE_BACKEND_URL`: Your Render backend URL

## 📧 Gmail App Password Setup

1. Enable 2-Step Verification on Gmail
2. Go to Google Account → Security → App Passwords
3. Select "Mail" → "Other (Custom name)" → "Portfolio Backend"
4. Copy the 16-character password
5. Use this password in `EMAIL_PASS` environment variable

## 🔄 Updating Production

### Backend Updates
1. Push changes to GitHub
2. Render automatically redeploys from the main branch

### Frontend Updates
1. Push changes to GitHub
2. Vercel automatically redeploys from the main branch

## 🌐 Custom Domain (Optional)

### Vercel Custom Domain
1. Go to Vercel project settings
2. Add your custom domain
3. Update DNS records as instructed

### Render Custom Domain
1. Go to Render service settings
2. Add custom domain
3. Update DNS records as instructed

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Check that your Vercel domain is in backend CORS configuration
   - Verify VITE_BACKEND_URL is correct

2. **Email Not Working**:
   - Verify Gmail App Password is correct
   - Check that 2-Step Verification is enabled
   - Ensure EMAIL_USER and EMAIL_PASS are set in Render

3. **Database Connection**:
   - Verify MongoDB Atlas IP whitelist includes 0.0.0.0/0
   - Check MONGO_URI format and credentials

4. **Build Failures**:
   - Check that all dependencies are in package.json
   - Verify Node.js version compatibility

## 📊 Monitoring

### Render Monitoring
- View logs in Render dashboard
- Monitor CPU and memory usage
- Check deployment history

### Vercel Analytics
- View deployment logs
- Monitor function execution
- Check build performance

## 🔒 Security Checklist

- [ ] Environment variables are properly set
- [ ] Gmail App Password is used (not regular password)
- [ ] MongoDB Atlas has proper IP restrictions
- [ ] CORS is configured with specific domains
- [ ] No sensitive data in code repository
- [ ] HTTPS is enforced on both domains

---

**Need help?** Contact [shailendra.iiitsm@gmail.com](mailto:shailendra.iiitsm@gmail.com)
