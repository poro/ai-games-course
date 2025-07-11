# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an educational course development project for "AI & Games: Creating Games with Artificial Intelligence Tools" - a 1-credit course at Arizona State University. The project contains both comprehensive course curriculum documentation and a React-based web application for presenting course materials.

## Project Structure

### Documentation Files
- `AI & Games: Complete Course Curriculum.md` - Main curriculum document with learning objectives, weekly structure, and assessment framework
- `AI & Games: Detailed Weekly Curriculum.md` - Expanded weekly lesson plans
- `AI & Games Course: Complete Video Script Collection.md` - Scripts for online course videos
- `AI Tools for Game Development Research.md` - Research on available AI tools
- `Commercial vs Open-Source AI Game Development Solutions.md` - Tool comparison analysis
- `Assessment Framework and Project Guidelines.md` - Student assessment criteria
- Various other curriculum and research documents

### React Application Components
- `App.jsx` - Main application component that imports from ./components/
- `index.html` - Entry point referencing /src/main.jsx
- Component files: `Header.jsx`, `Hero.jsx`, `CourseOverview.jsx`, `Curriculum.jsx`, `Resources.jsx`, `Community.jsx`, `InteractiveDemo.jsx`, `Footer.jsx`, etc.
- `App.css` - Styling for the application

## Technology Stack

- **Frontend**: React with JSX components
- **Build System**: Vite (inferred from /src/main.jsx reference)
- **Styling**: CSS with Tailwind classes (visible in App.jsx)
- **Documentation**: Markdown files

## Development Commands

Note: This project currently lacks package.json. To set up development environment:

```bash
# Initialize npm and install dependencies
npm init -y
npm install react react-dom
npm install -D vite @vitejs/plugin-react

# Create vite.config.js
# Add appropriate scripts to package.json

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Missing Project Setup

The project needs initial configuration:
1. Create `package.json` with React and Vite dependencies
2. Create `vite.config.js` for build configuration
3. Create `src/` directory structure and move `main.jsx` there
4. Create `components/` directory and organize component files

## Course Focus Areas

### AI Tools Covered
- **Complete Platforms**: Bitmagic, Rosebud AI
- **Music Generation**: Suno.ai
- **3D Modeling**: Meshy AI
- **Programming**: Cursor.ai, Cline, Ollama (local AI)
- **Narrative**: AI Dungeon, Talefy
- **Sound Effects**: ElevenLabs
- **Game Engines**: Godot, Unity, GDevelop

### Course Structure
- 8-week intensive or 15-week semester format
- 1 credit hour = 45 total hours of student work
- Hands-on, project-based learning
- Portfolio development focus
- Both commercial and open-source tool coverage

## Key Curriculum Components

1. **Weekly Structure**: Each week focuses on different AI tool categories
2. **Assessment**: 40% weekly projects, 20% portfolio review, 30% final project, 10% participation
3. **Final Project**: 5-10 minute playable game using multiple AI tools
4. **Ethics Focus**: Attribution, bias awareness, copyright considerations

## Development Guidelines

- Maintain consistency between curriculum documentation and web presentation
- Keep educational objectives at the forefront of all features
- Ensure accessibility for diverse learners
- Support both commercial and open-source AI tool options
- Regular updates to reflect rapidly evolving AI tool landscape

## Component Architecture

The React app follows a modular component structure:
- Each major section has its own component
- Components import from relative paths (./components/)
- Tailwind CSS classes for styling
- No current state management setup

## Documentation Standards

- Curriculum documents use clear hierarchical structure with markdown headers
- Video scripts follow consistent format for easy recording
- Research documents include executive summaries
- All documents emphasize practical, hands-on learning approaches