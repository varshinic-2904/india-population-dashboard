# India Population Dashboard

An interactive dashboard built with React and TypeScript to visualize population statistics across Indian states.

## Overview

This project was created to explore:

* Responsive UI development
* Data visualization using Recharts
* Component-based architecture in React
* Theme management with Light and Dark modes
* TypeScript for type safety
* CSS Modules for maintainable styling

The dashboard provides a simple way to explore population data through analytics cards, search functionality, and interactive charts.

## Features

### Population Analytics

* Total population summary
* Number of states
* Highest population state
* Average population

### Search Functionality

* Search states by name
* Dynamic chart updates based on search results

### Data Visualization

* Interactive bar chart using Recharts
* Population comparison across states
* Tooltip support for detailed values

### Theming

* Light mode
* Dark mode
* Theme persistence using localStorage

### Responsive Design

* Desktop-friendly layout
* Tablet support
* Mobile-responsive design

## Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Charts

* Recharts

### Styling

* CSS Modules
* CSS Variables

### State Management

* React Context API
* React Hooks

## Project Structure

```text
src
├── components
│   ├── PopulationChart
│   ├── SearchBar
│   ├── StatsCard
│   └── ThemeToggle
│
├── context
│   └── ThemeContext
│
├── data
│   └── populationData
│
├── pages
│   └── Dashboard
│
├── App.tsx
└── main.tsx
```

## Architecture Decisions

### Why React?

React provides a component-based architecture that promotes reusability and maintainability.

### Why TypeScript?

TypeScript improves code reliability through static typing and provides better developer tooling.

### Why Context API?

The application only requires a small amount of global state for theme management. Context API provides a lightweight solution without introducing additional dependencies.

### Why CSS Modules?

CSS Modules prevent style leakage and keep component styles isolated, making the codebase easier to maintain.

### Why Recharts?

Recharts integrates naturally with React and provides responsive, customizable chart components.

## Running the Project

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/varshinic-2904/india-population-dashboard.git
```

Navigate to the project:

```bash
cd india-population-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

## Future Improvements

* Integration with live Census data APIs
* Additional chart types and visualizations
* State comparison functionality
* Export dashboard data
* Unit and integration testing
* Accessibility improvements
* Advanced filtering and sorting
* Performance optimization for larger datasets

## Learning Outcomes

This project helped strengthen my understanding of:

* React component design
* TypeScript type safety
* Data visualization techniques
* Theme management
* CSS architecture
* Responsive design patterns
* State management with Context API

## Author

Varshini C