# Mrigank Mouli Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, education, and achievements as a Full Stack Developer and AI/ML enthusiast.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly menu
- **Contact Form**: Functional contact form that opens default email client
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for deployment on Netlify, Vercel, or similar platforms

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mrigank-Mouli-Singh/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with dark mode toggle
│   ├── Hero.tsx        # Hero section with introduction
│   ├── About.tsx       # About me section
│   ├── Education.tsx   # Education timeline
│   ├── Skills.tsx      # Skills and technologies
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Achievements.tsx # Achievements and accomplishments
│   ├── Coursework.tsx  # Relevant coursework
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer with social links
├── data/
│   └── portfolioData.ts # Centralized data configuration
├── hooks/
│   └── useDarkMode.ts  # Dark mode functionality
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## ⚙️ Customization

### Personal Information

Update your personal information in `src/data/portfolioData.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  tagline: "Your Professional Tagline",
  bio: "Your bio description...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  // ... other fields
};
```

### Adding Projects

Add new projects to the `projects` array in `src/data/portfolioData.ts`:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com"
  },
  // ... more projects
];
```

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Fonts and typography in `src/index.css`
- Component-specific styles in individual component files

## 📱 Sections

1. **Hero**: Introduction with social links and call-to-action
2. **About**: Personal information and profile picture
3. **Education**: Educational background with timeline
4. **Skills**: Technical skills and technologies
5. **Projects**: Featured projects with links to code and demos
6. **Achievements**: Notable accomplishments and recognitions
7. **Coursework**: Relevant academic coursework
8. **Contact**: Contact form and information

## 🎨 Design Features

- **Smooth Animations**: Fade-in effects and hover animations
- **Gradient Backgrounds**: Beautiful gradient overlays and effects
- **Card-based Layout**: Clean card designs for better content organization
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 📧 Contact Form

The contact form is configured to open the user's default email client with pre-filled information. To set up a backend for form submission, you can integrate with services like:

- Formspree
- Netlify Forms
- EmailJS
- Custom backend API

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with automatic builds on push

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mrigank Mouli Singh**
- GitHub: [@Mrigank-Mouli-Singh](https://github.com/Mrigank-Mouli-Singh)
- LinkedIn: [Mrigank Mouli Singh](https://www.linkedin.com/in/mrigank-mouli-singh/)
- Email: mriganksinghofficial@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ Star this repository if you found it helpful!
