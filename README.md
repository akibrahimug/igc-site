# IGC Mock App 2024

A modern web application built with Next.js and integrated with Storyblok CMS.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC)
![Storyblok](https://img.shields.io/badge/Storyblok-CMS-09B3AF)

## 🚀 Features

- Modern Next.js 14 application with App Router
- Storyblok CMS integration for content management
- Responsive design with Tailwind CSS
- Material UI components integration
- Dynamic routing and page generation
- Rich text rendering with Storyblok
- Image optimization and lazy loading
- Interactive carousels and galleries
- Social media embeds support

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:**
  - Tailwind CSS
  - Material UI
  - Emotion
- **CMS:** Storyblok
- **Development Tools:**
  - ESLint
  - Prettier
  - Husky
  - Commitlint
- **Additional Libraries:**
  - Embla Carousel
  - React Icons
  - Swiper
  - Axios

## 📦 Prerequisites

- Node.js (LTS version recommended)
- Yarn or pnpm package manager
- Storyblok account and API keys

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd igc-mock-app-2024
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   STORYBLOK_API_TOKEN=your_api_token_here
   ```

4. **Run development server**

   ```bash
   yarn dev
   # or
   pnpm dev
   ```

   The application will start on `https://localhost:3010`

5. **Build for production**
   ```bash
   yarn build
   yarn start
   ```

## 🔧 Available Scripts

- `yarn dev` - Run development server with HTTPS
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn prettier` - Format code
- `yarn create:https` - Create HTTPS certificates
- `yarn commit` - Interactive commit tool

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
│   ├── Bloks/    # Storyblok components
│   ├── Sections/ # Page sections
│   └── Templates/# Page templates
├── lib/          # Utility libraries
├── utils/        # Helper functions
└── hooks/        # Custom React hooks
```

## 🔐 HTTPS Development

The project supports HTTPS in development. To set up:

1. Run `yarn create:https` to generate certificates
2. Start the development server with `yarn dev`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes using conventional commits (`yarn commit`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Storyblok for the headless CMS
- All contributors and maintainers
