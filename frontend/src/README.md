# Itihaas360 - Indian Heritage Sites Explorer

A vibrant, interactive web application for exploring India's rich heritage sites including temples, forts, palaces, monuments, and cultural sites with AR visualization capabilities.

## 🛠️ Technology Stack

- **React 18** with TypeScript for type-safe development
- **React Router v6** for client-side routing
- **Tailwind CSS v4** with custom design tokens
- **shadcn/ui** component library
- **Lucide React** for icons
- **Sonner** for toast notifications

## 📦 Installation & Dependencies

### Prerequisites
Ensure you have Node.js (v18 or higher) and npm installed on your system.

### Required Dependencies
Install the core dependencies:

```bash
# Core React and routing
npm install react@^18.0.0 react-dom@^18.0.0
npm install react-router-dom@^6.0.0

# TypeScript support
npm install typescript @types/react @types/react-dom @types/node

# Tailwind CSS v4
npm install tailwindcss@next @tailwindcss/vite@next

# UI components and icons
npm install lucide-react
npm install sonner@2.0.3

# Build tools
npm install vite @vitejs/plugin-react
npm install @types/react @types/react-dom
```

### shadcn/ui Components
The project uses shadcn/ui components which are already included in the `/components/ui/` directory. No additional installation required.

### Development Dependencies
```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin
npm install --save-dev postcss autoprefixer
```

### Verify Installation
After installation, ensure all dependencies are properly installed:
```bash
npm list react react-dom react-router-dom tailwindcss lucide-react sonner
```

## 📁 Project Structure

```
/
├── App.tsx                     # Main application with routing setup
├── data/
│   └── heritage-sites.ts       # Centralized heritage sites data
├── pages/                      # Page components (route-level)
│   ├── HomePage.tsx            # Landing page with hero and categories
│   ├── SitesPage.tsx           # Heritage sites listing page
│   └── ARPage.tsx              # AR experience page
├── components/                 # Reusable UI components
│   ├── Header.tsx              # Navigation header with routing
│   ├── Footer.tsx              # Site footer with links
│   ├── Hero.tsx                # Landing page hero section
│   ├── Categories.tsx          # Heritage site categories display
│   ├── FeaturedSites.tsx       # Heritage sites grid with search/filter
│   ├── ARView.tsx              # AR experience interface
│   ├── SiteCard.tsx            # Individual site card component
│   ├── SiteModal.tsx           # Site details modal
│   ├── HistoryModal.tsx        # Historical information modal
│   ├── ImageGalleryModal.tsx   # Image gallery modal
│   ├── HeritageQuizModal.tsx   # Interactive heritage quiz
│   ├── ScrollToTop.tsx         # Route change scroll behavior
│   └── ui/                     # shadcn/ui component library
│       ├── base-modal.tsx          # Reusable modal template
│       ├── modal-close-button.tsx  # Standardized close button
│       └── ... (other UI components)
└── styles/
    └── globals.css             # Global styles, design system, animations
```

## 🎨 Design System

### Color Palette
- **Primary**: `#ff6b6b` (Coral) - Main accent color
- **Secondary**: `#4ecdc4` (Teal) - Secondary accent color  
- **Accent**: `#ffd93d` (Gold) - Highlight color
- **Background**: Gradient overlays with glassmorphism effects
- **Cards**: `rgba(26, 26, 46, 0.95)` - Dark semi-transparent

### Key Features
- **Glass morphism**: Backdrop blur effects for modern UI
- **Gradient animations**: Moving gradient backgrounds with theme colors
- **Custom scrollbars**: Beautiful gradient scrollbars with coral-teal-gold theme
- **Responsive design**: Mobile-first approach with touch-friendly interactions
- **Parallax effects**: Fixed background with smooth scrolling content

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📝 Application Architecture

### Routing System
- **HomePage** (`/`) - Landing page with hero and featured sites
- **SitesPage** (`/sites`) - Complete heritage sites listing
- **ARPage** (`/ar`) - AR experience selection and viewing

### Data Management
All heritage site data is centralized in `/data/heritage-sites.ts` with TypeScript interfaces for type safety.

### Component Architecture
- **Page Components**: Handle routing and page-level logic
- **Feature Components**: Business logic (Hero, FeaturedSites, ARView)
- **UI Components**: Reusable presentational components (shadcn/ui)
- **Modal System**: Standardized modal components with consistent styling

## 🎨 Modal System

The application uses a standardized modal system for consistency:

### **BaseModal** Component
Provides template for all modals with:
- Consistent styling and backdrop effects
- Configurable scrollbar options (`true`, `"thin"`, `"visible"`)
- Accessibility support with proper ARIA labels
- Responsive design with configurable max widths

### **Modal Components**
- **SiteModal** - Heritage site details and options
- **ImageGalleryModal** - Photo gallery with grid/single view
- **HeritageQuizModal** - Interactive heritage knowledge quiz
- **HistoryModal** - Detailed historical information

### **ModalCloseButton** Component
Standardized close button with consistent hover effects and styling.

## 🎨 Logo and Favicon Management

### Centralized Logo System

The application uses a centralized logo system for easy branding updates:

#### **Logo Component** (`/components/Logo.tsx`)
A flexible logo component that supports:
- **Multiple sizes**: `sm`, `md`, `lg` with responsive scaling
- **Customizable styling**: Icon, text, and container classes
- **Optional tagline**: Can be shown or hidden
- **Consistent theming**: Uses CSS variables for colors

```typescript
import { Logo } from './components/Logo';

// Usage examples
<Logo size="lg" />                           // Large logo with tagline
<Logo size="md" showTagline={false} />      // Medium logo without tagline
<Logo size="sm" className="custom-class" /> // Small logo with custom styling
```

#### **Updating the Logo**
To update the logo across the entire site:

1. **Edit `/components/Logo.tsx`**:
   - Replace the `MapPin` icon with your custom logo icon/image
   - Update the text "Itihaas360" with your brand name
   - Modify the tagline "Discover India's Legacy" if needed

2. **Update CSS variables in `/styles/globals.css`**:
   ```css
   :root {
     --logo-primary-color: var(--primary);
     --logo-secondary-color: var(--secondary);
     --logo-text-size-sm: var(--text-lg);
     --logo-text-size-md: var(--text-xl);
     --logo-text-size-lg: var(--text-2xl);
     --logo-icon-size-sm: 1.5rem;
     --logo-icon-size-md: 2rem;
     --logo-icon-size-lg: 2.5rem;
   }
   ```

3. **Logo Usage**: The logo is automatically used in:
   - Header navigation (desktop and mobile)
   - Footer branding
   - Any future branded components

### Favicon Management System

#### **Favicon Configuration** (`/components/ui/favicon-config.ts`)
Centralized favicon management system that supports:
- **Multiple formats**: ICO, PNG, SVG for all browsers
- **All device sizes**: From 16x16 to 512x512 pixels
- **Platform-specific icons**: Apple touch icons, Android chrome icons
- **Theme integration**: Colors match the application's design system

#### **Web Manifest** (`/public/site.webmanifest`) 
PWA-ready manifest file with:
- Application metadata and descriptions
- Icon specifications for various screen densities
- Theme colors matching the design system
- Display and orientation preferences

#### **Updating Favicons**
To update favicons across all platforms:

1. **Generate favicon files** in multiple sizes and place them in `/public/`:
   ```
   /public/
   ├── favicon.ico
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png
   ├── android-chrome-192x192.png
   ├── android-chrome-512x512.png
   └── safari-pinned-tab.svg
   ```

2. **Update `/components/ui/favicon-config.ts`**:
   - Modify file paths if using different naming
   - Update theme colors to match your brand
   - Adjust any platform-specific settings

3. **Update `/public/site.webmanifest`**:
   - Change name and description
   - Update theme and background colors
   - Verify icon paths match your files

4. **Generate meta tags** using the provided function:
   ```typescript
   import { generateFaviconMetaTags } from './components/ui/favicon-config';
   
   // Use in your HTML head section
   const faviconHTML = generateFaviconMetaTags();
   ```

#### **Platform Coverage**
The favicon system supports:
- **Standard browsers**: ICO and PNG formats
- **Apple devices**: Touch icons for iPhone, iPad, Apple Watch
- **Android devices**: Chrome icons and theme colors  
- **Microsoft platforms**: Tile icons and theme colors
- **Safari**: Pinned tab SVG with theme color
- **PWA**: Web manifest for app-like experience

## 🔧 Development Guide

### Adding New Heritage Sites

Update the data source in `/data/heritage-sites.ts`:
```typescript
export const heritageSites: HeritageSite[] = [
  // ... existing sites
  {
    id: "new-site-id",
    name: "New Heritage Site",
    location: "City, State",
    type: "temple", // or fort, palace, monument, museum
    description: "Brief description",
    images: ["image-url-1", "image-url-2"],
    // ... other properties
  }
];
```
The data automatically appears in both Sites page and AR view.

### Creating New Modal Components

Use the BaseModal template for consistency:
```typescript
import { BaseModal } from './ui/base-modal';

export function NewModal({ isOpen, onClose }: ModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Modal Title"
      maxWidth="4xl"
      customScrollbar={true}
    >
      <div className="p-6">
        {/* Your content */}
      </div>
    </BaseModal>
  );
}
```

### Styling Guidelines

1. **Use CSS Variables**: Defined in `globals.css` for consistent theming
2. **Tailwind Classes**: Use utility classes for component styling
3. **Custom Classes**: Add to `globals.css` for complex animations or effects
4. **Responsive Design**: Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)

### Scrollbar System

The application includes custom scrollbars with theme colors:
- **Modal scrollbars**: Use `.modal-scroll`, `.modal-scroll-thin`, or `.modal-scroll-visible`
- **Global scrollbars**: Automatically styled with coral-teal-gold gradient
- **Features**: Smooth animations, transparent backgrounds, responsive design

## 🚀 Adding New Features Guide

### Feature Development Workflow

Follow this systematic approach when adding new features to Itihaas360:

#### **1. Planning Phase**
- **Identify Purpose**: Clearly define what the feature accomplishes
- **Design Integration**: Ensure it fits the coral-teal-gold theme and glassmorphism aesthetic
- **Data Requirements**: Determine if new data structures are needed in `/data/heritage-sites.ts`
- **Component Architecture**: Plan reusable components and their hierarchy

#### **2. Implementation Steps**

**Step 1: Data Layer (if needed)**
```typescript
// Example: Adding categories feature
// Update /data/heritage-sites.ts
export interface HeritageCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export const heritageCategories: HeritageCategory[] = [
  {
    id: "temples",
    name: "Temples",
    description: "Sacred temples and religious sites",
    icon: "Temple",
    color: "primary",
    count: 12
  },
  // ... more categories
];
```

**Step 2: Component Creation**
```typescript
// Example: /components/Categories.tsx
import { heritageCategories } from '../data/heritage-sites';
import { Card } from './ui/card';

export function Categories() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="gradient-text mb-12">Explore by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heritageCategories.map((category) => (
            <Card 
              key={category.id}
              className="enhanced-card hover:scale-105 transition-all duration-300"
            >
              {/* Category content */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Styling Integration**
```css
/* Add to /styles/globals.css */
.category-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--primary);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}
```

**Step 4: Page Integration**
```typescript
// Update relevant page (e.g., HomePage.tsx)
import { Categories } from '../components/Categories';

export function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />  {/* Add the new feature */}
      <FeaturedSites />
      <Stats />
    </div>
  );
}
```

#### **3. Design System Compliance**

**Color Usage:**
- **Primary** (`#ff6b6b`): Main interactive elements, CTA buttons
- **Secondary** (`#4ecdc4`): Supporting elements, hover states
- **Accent** (`#ffd93d`): Highlights, success states, special badges

**Component Patterns:**
- Use `enhanced-card` class for consistent card styling
- Apply `gradient-text` for headings and emphasis
- Implement hover effects with `transition-all duration-300`
- Use `backdrop-filter: blur()` for glassmorphism effects

**Responsive Design:**
```typescript
// Mobile-first approach
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {/* Responsive grid items */}
</div>
```

#### **4. Performance Considerations**

**React Optimization:**
```typescript
import { memo, useMemo, useCallback } from 'react';

export const OptimizedComponent = memo(function ComponentName({ data }) {
  const processedData = useMemo(() => {
    return data.filter(item => item.isVisible);
  }, [data]);

  const handleClick = useCallback((id: string) => {
    // Event handler logic
  }, []);

  return (
    // Component JSX
  );
});
```

**Image Optimization:**
```typescript
import { ImageWithFallback } from './figma/ImageWithFallback';

// Use ImageWithFallback for new images
<ImageWithFallback 
  src={imageSrc}
  alt={altText}
  className="w-full h-64 object-cover"
  fallback="/placeholder-image.jpg"
/>
```

#### **5. Modal Integration (if needed)**

```typescript
// Follow BaseModal pattern for consistency
import { BaseModal } from './ui/base-modal';
import { ModalCloseButton } from './ui/modal-close-button';

export function FeatureModal({ isOpen, onClose }) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Feature Title"
      maxWidth="4xl"
      customScrollbar="thin"
    >
      <div className="modal-content-background p-6">
        {/* Modal content */}
      </div>
    </BaseModal>
  );
}
```

#### **6. State Management**

For complex features requiring state management:
```typescript
import { useState, useEffect } from 'react';

// Local state for simple features
const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);

// Custom hooks for reusable logic
function useFeatureData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Data fetching logic
  }, []);

  return { data, loading };
}
```

#### **7. Testing Checklist**

- ✅ **Responsive Design**: Test on mobile, tablet, and desktop
- ✅ **Theme Consistency**: Verify colors match design system
- ✅ **Performance**: Check for smooth animations and interactions
- ✅ **Accessibility**: Ensure keyboard navigation and screen reader support
- ✅ **Integration**: Test with existing components and routing
- ✅ **Cross-browser**: Verify compatibility across modern browsers

#### **8. Documentation Updates**

After implementing a feature:
1. **Update this README**: Add feature to the project structure and architecture sections
2. **Update COMPONENTS_DOCUMENTATION.md**: Document new components with props and usage
3. **Add JSDoc comments**: Document component interfaces and complex logic
4. **Update TypeScript interfaces**: Add type definitions for new data structures

### Example: Categories Feature Implementation

The Categories feature (planned) will follow this pattern:

```typescript
// 1. Data structure in heritage-sites.ts
export interface HeritageCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  siteCount: number;
}

// 2. Component implementation
export function Categories() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="gradient-text text-center mb-12">
          Explore Heritage by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Category card with consistent styling
function CategoryCard({ category }: { category: HeritageCategory }) {
  return (
    <Card className="category-card group cursor-pointer">
      <div className="p-6 text-center">
        <category.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="font-semibold mb-2">{category.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {category.description}
        </p>
        <Badge variant="secondary">{category.siteCount} sites</Badge>
      </div>
    </Card>
  );
}
```

This systematic approach ensures all new features maintain consistency with the existing design system, performance standards, and architectural patterns.

## 🚀 Future Enhancements

- **Search & Filtering**: Advanced site search and category filtering
- **User Features**: Favorites, reviews, and personal visit tracking
- **Enhanced AR**: 3D models, interactive hotspots, and audio guides
- **Performance**: Image lazy loading, virtual scrolling, code splitting
- **PWA Features**: Offline functionality and mobile app experience

## 📚 Resources

- [React Router Documentation](https://reactrouter.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## 📸 Attributions

This project includes components and resources from the following sources:

- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- **Images**: Photos from [Unsplash](https://unsplash.com) used under [Unsplash License](https://unsplash.com/license)
- **Icons**: [Lucide React](https://lucide.dev/) for iconography
- **Typography**: Custom CSS variables and Tailwind CSS for styling


---

**Note**: This project focuses on Indian heritage preservation and cultural education. Ensure historical accuracy and cultural sensitivity when adding new content.