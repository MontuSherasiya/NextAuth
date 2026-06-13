# NextAuth 🔐

A next-generation authentication and authorization solution built with **Next.js**, designed to be secure, scalable, and developer-friendly.

---

## 🚀 Features

- **JWT-based Authentication** — Stateless, secure token management using `jsonwebtoken`
- **Password Hashing** — Secure password storage with `bcryptjs`
- **Email Notifications** — Transactional emails via `nodemailer` and `resend`
- **Database Integration** — MongoDB support via `mongoose`
- **Toast Notifications** — User-friendly feedback with `react-hot-toast`
- **HTTP Client** — Clean API calls using `axios`
- **TypeScript Support** — Fully typed codebase for reliability and DX
- **Tailwind CSS** — Utility-first styling for rapid UI development

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack React framework |
| TypeScript | Type safety |
| MongoDB + Mongoose | Database & ODM |
| JSON Web Tokens | Authentication tokens |
| bcryptjs | Password hashing |
| Nodemailer / Resend | Email delivery |
| Tailwind CSS v4 | Styling |
| React Hot Toast | Toast notifications |
| Axios | HTTP requests |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- A running **MongoDB** instance (local or Atlas)

### Installation

Clone the repository:

```bash
git clone https://github.com/MontuSherasiya/NextAuth.git
cd NextAuth
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root of your project and configure the following:

```env
DOMAIN=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
TOKEN_SECRET=your_jwt_secret_key

# Email (Resend - alternative)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📁 Project Structure

```
NextAuth/
├── public/            
├── src/                
│   ├── app/            
│   ├── dbConfig/     
│   ├── helpers/           
│   └── models/       
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔒 Authentication Flow

1. **Sign Up** — User registers with email and password; password is hashed with bcryptjs before storage.
2. **Sign In** — Credentials are verified; a JWT is issued on success.
3. **Protected Routes** — Middleware validates JWT on every protected request.
4. **Email Verification** — A verification email is sent on registration via Nodemailer/Resend.
5. **Password Reset** — Secure password reset flow via email link.

---

## 👤 Author

**Montu Sherasiya**  
GitHub: [@MontuSherasiya](https://github.com/MontuSherasiya)