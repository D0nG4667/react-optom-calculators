# Contact Lens Calculator 👁️

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![MUI](https://img.shields.io/badge/MUI-v7-007FFF?logo=mui)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A React + TypeScript application for managing and calculating **contact lens prescriptions**, including support for **spherical equivalents** and **dark/light mode**. Built with Vite, Material UI, and Context API for scalability and maintainability.

---

## ✨ Features

- **Responsive UI** with Material UI Grid and Typography  
- **Dark/Light Mode** toggle with context (`ThemeContext`)  
- **Contact Lens Context** for managing OD/OS values (sphere, cylinder, axis)  
- **Spectacle Prescription Support**  
- **Spherical Equivalent** calculation toggle  
- **Reusable Components** (`Card`, `Switches`, `Footer`, etc.)  
- **TypeScript Types** for theme, context, and props with JSDoc‑style comments  
- **Google AdSense Integration** with custom hook  

---

## 📂 Project Structure

```folder
└── 📁react-optom-calculators
    ├── 📁public
    │   └── eyecontacts.png
    └── 📁src
        ├── 📁components
        │   ├── ContactPrescription.tsx
        │   ├── Footer.tsx
        │   ├── GoogleAdSense.module.css
        │   ├── GoogleAdSense.tsx
        │   ├── SameBothEyesSwitch.tsx
        │   ├── SpectaclePrescription.tsx
        │   └── SphericalEquivalentSwitch.tsx
        ├── 📁context
        │   ├── ContactContext.tsx
        │   ├── SpectacleContext.tsx
        │   └── ThemeContext.tsx
        ├── 📁hooks
        │   └── useAdSense.ts
        ├── 📁types
        │   ├── contact.d.ts
        │   ├── eye.d.ts
        │   ├── global.d.ts
        │   ├── googleAdsense.d.ts
        │   ├── powers.d.ts
        │   ├── spectacle.d.ts
        │   └── theme.d.ts
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── powers.json
        └── theme.tsx
    ├── .env
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🛠️ Tech Stack

- **React 19** with **TypeScript**
- **Vite** for fast builds
- **Material UI (MUI v7)** for styling and layout
- **Context API** for global state management
- **ESLint + Prettier** for code quality and formatting

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 24)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/D0nG4667/react-optom-calculators.git
cd react-optom-calculators

# Install dependencies
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
# or
yarn build
```

---

## 📖 Usage

- Enter **Sphere, Cylinder, and Axis** values for each eye (OD/OS).  
- Toggle **Spherical Equivalent** to calculate simplified prescriptions.  
- Switch between **Light/Dark Mode** for better accessibility.  
- Use **Spectacle Prescription** calculator for glasses.  

---

## 🧩 Type Definitions

Example: `src/types/contact.d.ts`

```ts
/**
 * Eye values for each parameter (OD = right eye, OS = left eye)
 */
export type Eye = 'OD' | 'OS';

/**
 * Shape of the contact lens context
 */
export interface ContactContextType {
  /** Sphere values for OD/OS */
  clSphere: Record<Eye, string>;
  setClSphere: (value: Record<Eye, string>) => void;

  /** Cylinder values for OD/OS */
  clCylinder: Record<Eye, string>;
  setClCylinder: (value: Record<Eye, string>) => void;

  /** Axis values for OD/OS */
  clAxis: Record<Eye, string>;
  setClAxis: (value: Record<Eye, string>) => void;

  /** Whether spherical equivalent is being used */
  sphericalEquivalent: boolean;
}
```

---

## 🌗 Dark/Light Mode

- Implemented via `ThemeContext` and `ThemeProvider`.  
- Persists user preference in `localStorage`.  
- All components adapt automatically to theme palette.  

---

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'Add amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request  

---

## 👥 Author

🕺🏻**Gabriel Okundaye**

- GitHub: [GitHub Profile](https://github.com/D0nG4667)

- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/dr-gabriel-okundaye)

## ⭐️ Show your support

If you like this project kindly show some love, give it a 🌟 **STAR** 🌟. Thank you!

## 📜 License

This project is licensed under the MIT License.  
