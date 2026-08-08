# Portfolio - Kelvin Appiah

A modern, responsive portfolio website showcasing my work, experience, and skills as a full-stack developer. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the live site: [https://kelpyshades.com](https://kelpyshades.com)

## ✨ Features

- **Modern UI/UX**: Clean, glassmorphism-inspired design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preferences
- **Responsive Design**: Fully responsive across all device sizes
- **Project Showcase**: Display featured projects with galleries, technologies, and impact
- **GitHub Integration**: Live GitHub contribution calendar
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Performance**: Optimized images, caching, and fast page loads
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## 🛠️ Tech Stack

### Core

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

### Libraries & Tools

- **Database**: [Convex](https://convex.dev/) (Reactive Backend)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Marquee**: [react-fast-marquee](https://www.react-fast-marquee.com/)
- **GitHub Calendar**: [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

### Fonts

- **Poppins**: Headings and primary text
- **Geist Mono**: Code and technical content

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm**, **yarn**, or **pnpm**
- **Git**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/folio.git
cd folio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Convex Configuration
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here

# Site Configuration (optional)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. Set up Convex

1. Create a new project at [convex.dev](https://convex.dev/)
2. Set up the schema in the `convex` folder (already provided in the repository) and deploy/push using `pnpm convex dev` to initialize your database tables.

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
folio/
├── app/
│   ├── assets/          # Images, SVGs, and static assets
│   ├── components/      # React components
│   │   ├── Content/     # Main content sections
│   │   │   ├── About/   # About, Experience, Education, Skills
│   │   │   └── Projects/# Project showcase components
│   │   └── ProfileCard/ # Profile sidebar component
│   ├── Global/          # Global utilities and constants
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
├── convex/
│   ├── schema.ts        # Convex database schema
│   └── projects.ts      # Convex projects query functions
├── public/              # Static files (favicons, manifest, etc.)
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `app/Global/Strings.tsx` to update:

- Profile information
- About content
- Experience entries
- Education details
- Skills and technologies
- Social media links

### Styling

- Global styles: `app/globals.css`
- Theme colors: CSS custom properties in `:root` and `.dark`
- Component styles: Tailwind classes with custom utilities

### Images

- Profile image: `app/assets/images/profile2.png`
- Background texture: `app/assets/images/bg-texture.png`
- Technology icons: `app/assets/svgs/`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will be automatically deployed on every push to the main branch.

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_CONVEX_URL`
- `NEXT_PUBLIC_SITE_URL` (optional, defaults to Vercel URL)

## 🔍 SEO & Performance

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema for Person and Organization
- **Image Optimization**: Next.js Image component with automatic optimization
- **Realtime Updates**: Convex reactive queries provide instant, real-time database state sync.
- **Font Optimization**: Next.js font optimization for Poppins and Geist Mono

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- WCAG compliant color contrasts

## 📝 License

This project is private and proprietary.

## 👤 Author

**Kelvin Appiah**

- Portfolio: [https://kelpyshades.com](https://kelpyshades.com)
- GitHub: [@KelpyShades](https://github.com/KelpyShades)
- Founder: [404-Not-Null](https://404notnull.vercel.app)
- Lead: [Class-io](https://class-io.vercel.app)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Vercel](https://vercel.com/) for hosting
- [Convex](https://convex.dev/) for backend infrastructure
- [Next.js](https://nextjs.org/) team for the amazing framework

---

Built with ❤️ using Next.js and TypeScript
