This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





# 📱 ORU Phones - E-Commerce Website with User Behavior Tracking

🔗 **Live Website:** [https://oruphones-usertracking-pi.vercel.app/](https://oruphones-usertracking-pi.vercel.app/)

---

## 📄 Pages in the Website

### 🏠 Homepage  
- URL: `/`  
- Example: [https://oruphones-usertracking-pi.vercel.app/](https://oruphones-usertracking-pi.vercel.app/)  
- Features: Popular categories and best-selling phones


### 💰 Best Deals Page  
- URL: `/best-deals`  
- Example: [https://oruphones-usertracking-pi.vercel.app/best-deals](https://oruphones-usertracking-pi.vercel.app/best-deals)  
- Features: Filter section on the left and product cards on the right


### 📱 Product Info Page  
- URL: `/product/[id]`  
- Example:
  - iPhone 15: [https://oruphones-usertracking-pi.vercel.app/product/iphone15](https://oruphones-usertracking-pi.vercel.app/product/iphone15)
  - Samsung S22: [https://oruphones-usertracking-pi.vercel.app/product/samsung22](https://oruphones-usertracking-pi.vercel.app/product/samsung22)  
- Features: Product image, price, seller info, and buttons like **Buy**, **Contact Seller**, and **Save**


### 🔐 Admin Dashboard (User Tracking Data)  
- URL: `/admin`  
- Example: [https://oruphones-usertracking-pi.vercel.app/admin](https://oruphones-usertracking-pi.vercel.app/admin)  
- Features: Table showing tracked user activity from backend

---

## 📦 Tech Stack

- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Backend API:** Node.js + Express + MongoDB Atlas
- **Database:** MongoDB Atlas
- **Deployment:**
  - Frontend: Vercel
  - Backend: Render

---

## 🎯 Features

- 3 pages: Homepage, Best Deals, and Product Info
- Header and Footer on all pages
- User Behavior Tracking:
  - Time spent on page
  - Scroll depth
  - Device info (browser, OS)
  - Page visited
- Admin Dashboard:
  - Displays all tracked data in a table

---

## ⚙️ Setup Instructions

### 👉 Frontend (Next.js)

```bash
cd client
npm install
npm run dev
