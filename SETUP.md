# Margo Group - Setup & Development Guide

## 🚀 Quick Start

### Installation

All dependencies are already installed! If you need to reinstall:

```bash
npm run install:all
```

Or manually:
```bash
# Root
npm install

# Backend
cd apps/api && npm install

# Frontend
cd ../web && npm install
```

### Running the Application

**Start both frontend and backend with one command:**

```bash
npm run dev
```

This will start:
- 🔧 **Backend API** on [http://localhost:3001](http://localhost:3001)
- 🌐 **Frontend** on [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
margo/
├── apps/
│   ├── api/                # NestJS Backend (Port 3001)
│   │   ├── src/
│   │   │   ├── main.ts           # Entry point with CORS enabled
│   │   │   ├── app.module.ts     # Root module
│   │   │   ├── app.controller.ts # API routes
│   │   │   └── app.service.ts    # Business logic
│   │   ├── nest-cli.json
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── web/                # Next.js Frontend (Port 3000)
│       ├── app/
│       │   ├── components/       # React components
│       │   │   ├── Navbar.tsx
│       │   │   ├── HeroSection.tsx
│       │   │   ├── AboutSection.tsx
│       │   │   ├── ServicesSection.tsx
│       │   │   ├── BrandsSection.tsx
│       │   │   └── ContactFooter.tsx
│       │   ├── page.tsx          # Homepage
│       │   ├── layout.tsx        # Root layout
│       │   └── globals.css       # Tailwind styles
│       ├── next.config.js
│       ├── tailwind.config.ts
│       ├── postcss.config.js
│       ├── tsconfig.json
│       └── package.json
│
├── package.json           # Root package with dev scripts
└── README.md
```

---

## 🔧 API Endpoints

### Backend (NestJS)

**Base URL:** `http://localhost:3001`

#### GET `/api/company`
Returns company information.

**Response:**
```json
{
  "name": "Margo Group",
  "description": "Distributor of high-quality beauty and personal care products headquartered in Amman, Jordan",
  "country": "Jordan"
}
```

**Example:**
```bash
curl http://localhost:3001/api/company
```

---

## 🎨 Frontend Features

### Homepage Sections

1. **Navbar** (Sticky)
   - Logo: "Margo Group"
   - Links: Home, About Us

2. **Hero Section**
   - Company name and description (fetched from API)
   - Gradient background

3. **About Section**
   - Company overview
   - Mission statement

4. **Services Section**
   - 4 business areas:
     - Pharmacies 💊
     - Beauty Shops & Salons 💄
     - Mass Retail 🏪
     - Online & Direct Sales 🛒

5. **Brands Section**
   - Grid layout for brand logos (placeholder)

6. **Contact/Footer**
   - Phone: +962 XX XXX XXXX
   - Email: info@margogroup.jo
   - Location: Amman, Jordan

### Data Fetching

The homepage fetches company data from the backend API on page load:

```typescript
const response = await fetch('http://localhost:3001/api/company');
const data = await response.json();
```

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)

### Backend
- **Framework:** NestJS
- **Language:** TypeScript
- **Runtime:** Node.js

### Development
- **Package Manager:** npm
- **Monorepo Tool:** concurrently
- **CORS:** Enabled for localhost:3000

---

## 📝 Available Scripts

### Root Level

```bash
npm run dev          # Start both frontend and backend
npm run dev:api      # Start backend only
npm run dev:web      # Start frontend only
npm run install:all  # Install all dependencies
```

### Backend (apps/api)

```bash
cd apps/api
npm run start:dev    # Development mode with watch
npm run build        # Build for production
npm run start:prod   # Run production build
```

### Frontend (apps/web)

```bash
cd apps/web
npm run dev          # Development mode
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Lint code
```

---

## 🔧 Configuration

### CORS Configuration
Located in `apps/api/src/main.ts`:
```typescript
app.enableCors({
  origin: 'http://localhost:3000',
  credentials: true,
});
```

### Ports
- Backend: `3001` (configured in `apps/api/src/main.ts`)
- Frontend: `3000` (default Next.js port)

### Tailwind Colors
Located in `apps/web/tailwind.config.ts`:
```typescript
colors: {
  primary: '#1e3a8a',   // Blue
  secondary: '#3b82f6',  // Lighter blue
}
```

---

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 or 3001 is already in use:

```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Find and kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### CORS Issues

Ensure the backend CORS configuration matches your frontend URL.
Check `apps/api/src/main.ts`.

### Module Not Found

Reinstall dependencies:
```bash
npm run install:all
```

### API Connection Failed

1. Ensure backend is running on port 3001
2. Check console for errors
3. Verify CORS is enabled
4. Test API directly: `curl http://localhost:3001/api/company`

---

## 🚀 Production Deployment

### Build Both Apps

```bash
# Backend
cd apps/api
npm run build

# Frontend
cd ../web
npm run build
```

### Environment Variables

For production, update API URLs:

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

**Backend (.env):**
```
PORT=3001
FRONTEND_URL=https://your-frontend-domain.com
```

---

## 📚 Next Steps

- Add more API endpoints as needed
- Implement authentication
- Add database integration
- Upload brand logos
- Add contact form functionality
- Integrate analytics
- Set up CI/CD pipeline

---

## 📄 License

This project is private and confidential.

---

**Happy Coding! 🎉**
