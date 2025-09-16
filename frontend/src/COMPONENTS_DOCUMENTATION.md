# Component Development Guide

## Overview
Technical documentation for developers working on Itihaas360 components. This guide provides detailed information about each component, their props, usage patterns, and implementation details.

## Core UI Components

### BaseModal (`/components/ui/base-modal.tsx`)
Standardized modal template that provides consistent behavior and styling for all application modals.

**Props**:
```typescript
interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  customScrollbar?: boolean | 'thin' | 'visible';
  className?: string;
}
```

**Features**:
- Automatic body scroll lock when opened
- Escape key to close functionality
- Click outside to close
- Customizable scrollbar styles
- Responsive design with configurable max widths
- Glassmorphism backdrop effect
- ARIA accessibility support

**Usage**:
```typescript
<BaseModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
  description="Modal description for screen readers"
  maxWidth="lg"
  customScrollbar="thin"
>
  <div>Modal content goes here</div>
</BaseModal>
```

### ModalCloseButton (`/components/ui/modal-close-button.tsx`)
Reusable close button component with consistent styling and glassmorphism effects.

**Props**:
```typescript
interface ModalCloseButtonProps {
  onClose: () => void;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}
```

**Features**:
- Consistent styling across all modals
- Glassmorphism background effect
- Hover and focus states
- Accessible with proper ARIA labels
- Multiple size and variant options

## Modal Components

### SiteModal (`/components/SiteModal.tsx`)
Main heritage site details modal that displays comprehensive information about a heritage site with interactive options.

**Props**:
```typescript
interface SiteModalProps {
  site: HeritageSite | null;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Site image display with fallback
- Site description and details
- Interactive buttons for AR, Gallery, History, and Quiz
- Responsive layout
- Smooth animations and transitions
- Integration with other modal components

**Sub-components triggered**:
- ImageGalleryModal for photo galleries
- HistoryModal for detailed historical information
- HeritageQuizModal for interactive quizzes
- AR experience navigation

### ImageGalleryModal (`/components/ImageGalleryModal.tsx`)
Full-screen image viewing modal with grid and single view modes, navigation controls, and zoom functionality.

**Props**:
```typescript
interface ImageGalleryModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}
```

**Features**:
- Grid view showing all images as thumbnails
- Single view with large image display
- Navigation arrows (previous/next)
- Keyboard navigation (arrow keys, escape)
- Image counter display
- Responsive design for mobile and desktop
- Loading states and error handling

### HeritageQuizModal (`/components/HeritageQuizModal.tsx`)
Interactive quiz system that tests users' knowledge about heritage sites with scoring and feedback.

**Props**:
```typescript
interface HeritageQuizModalProps {
  site: HeritageSite;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Multiple choice questions specific to each site
- Real-time scoring system
- Progress indicator
- Answer feedback (correct/incorrect)
- Final score display with encouraging messages
- Restart quiz functionality
- Responsive question layout

### HistoryModal (`/components/HistoryModal.tsx`)
Detailed historical information display with scrollable content and rich formatting.

**Props**:
```typescript
interface HistoryModalProps {
  site: HeritageSite;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Formatted historical content display
- Custom scrollbar styling
- Rich text rendering
- Responsive typography
- Historical timeline information
- Cultural significance details

## Layout Components

### Logo (`/components/Logo.tsx`)
Centralized logo component for consistent branding across the application.

**Props**:
```typescript
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  showTagline?: boolean;
}
```

**Features**:
- Multiple size variants (sm, md, lg) with responsive scaling
- Customizable styling for icon, text, and container
- Optional tagline with show/hide control
- CSS variable integration for easy theme updates
- Gradient text effects using design system colors
- Accessibility support with proper alt text

**Usage**:
```typescript
// Large logo with tagline (header)
<Logo size="lg" className="space-x-3" />

// Medium logo without tagline (footer)
<Logo size="md" showTagline={false} />

// Small logo with custom styling
<Logo size="sm" className="custom-class" iconClassName="text-accent" />
```

**Updating the Logo**:
1. Edit `/components/Logo.tsx` to replace the MapPin icon and text
2. Update CSS variables in `/styles/globals.css` for colors and sizes
3. Logo automatically updates in Header, Footer, and any other components

### Header (`/components/Header.tsx`)
Fixed navigation header with glassmorphism backdrop, responsive design, and mobile menu.

**Features**:
- Fixed positioning with backdrop blur
- Responsive navigation menu
- Mobile hamburger menu with slide-in animation
- Active route highlighting
- Integrated Logo component
- Smooth transitions and animations
- Touch-friendly mobile interactions

**Navigation Links**:
- Home (`/`)
- Sites (`/sites`)
- AR Experience (`/ar`)
- Contact (scroll to footer)

### Footer (`/components/Footer.tsx`)
Multi-column site footer with links, information, and social media.

**Features**:
- Responsive multi-column layout
- External links to social media and resources
- Contact information display
- Copyright and attribution information
- Glassmorphism background effect
- Gradient border effects
- Integrated Logo component with compact styling

### Hero (`/components/Hero.tsx`)
Landing page hero section with parallax background effects and animated gradient text.

**Features**:
- Fixed parallax background with Kedarnath Temple image
- Animated gradient text effects
- Call-to-action buttons
- Responsive typography scaling
- Smooth scroll animations
- Performance optimized background handling

## Feature Components

### FeaturedSites (`/components/FeaturedSites.tsx`)
Displays a curated selection of heritage sites on the homepage with interactive cards.

**Features**:
- Grid layout of featured sites
- Interactive site cards with hover effects
- Click to open detailed site modal
- Responsive grid (1-3 columns based on screen size)
- Loading states and error handling

### Categories (`/components/Categories.tsx`)
Heritage site category filter system for the sites page.

**Features**:
- Filter buttons for different site categories
- Active category highlighting
- Smooth filtering animations
- Category-based site counting
- Responsive button layout

### Stats (`/components/Stats.tsx`)
Animated statistics section showing heritage site metrics.

**Features**:
- Animated number counting effects
- Icon integration with Lucide React
- Responsive grid layout
- Glassmorphism card effects
- Performance optimized animations

### SiteCard (`/components/SiteCard.tsx`)
Individual heritage site card component used in listings and grids.

**Props**:
```typescript
interface SiteCardProps {
  site: HeritageSite;
  onClick: () => void;
}
```

**Features**:
- Site image with fallback handling
- Site name and location display
- Category badge display
- Hover effects and animations
- Equal height card layout
- Accessibility support

### ARView (`/components/ARView.tsx`)
AR experience component that simulates augmented reality interactions.

**Props**:
```typescript
interface ARViewProps {
  siteId: string;
}
```

**Features**:
- 3D-style site presentation
- Interactive AR controls simulation
- Site-specific AR content
- Responsive AR interface
- Performance optimized rendering

## Page Components

### HomePage (`/pages/HomePage.tsx`)
Main landing page that orchestrates the entire homepage experience.

**Features**:
- Hero section with parallax effects
- Featured sites grid
- Statistics section
- Smooth scroll navigation
- Performance optimized component loading

### SitesPage (`/pages/SitesPage.tsx`)
Heritage sites listing page with search, filtering, and pagination capabilities.

**Features**:
- Search functionality across site names and descriptions
- Category-based filtering
- Responsive grid layout
- Site modal integration
- Pagination or infinite scroll
- Loading states and empty states

### ARPage (`/pages/ARPage.tsx`)
AR experience interface with site selection and AR instructions.

**Features**:
- Site selection grid
- AR instructions and tutorials
- Direct AR experience launch
- URL parameter support for specific sites
- Responsive AR interface design

## UI Components Library (`/components/ui/`)

The UI folder contains shadcn/ui components and custom utility components that provide the foundation for the application's user interface.

### shadcn/ui Components

#### Form & Input Components
- **`input.tsx`** - Text input field with consistent styling and focus states
- **`textarea.tsx`** - Multi-line text input with auto-resize capabilities
- **`checkbox.tsx`** - Customizable checkbox with indeterminate state support
- **`radio-group.tsx`** - Radio button group with keyboard navigation
- **`select.tsx`** - Dropdown select component with search functionality
- **`switch.tsx`** - Toggle switch component with smooth animations
- **`slider.tsx`** - Range slider with customizable thumb and track styling
- **`input-otp.tsx`** - One-time password input with auto-focus and validation
- **`form.tsx`** - Form wrapper with validation and error handling using React Hook Form

#### Navigation Components
- **`navigation-menu.tsx`** - Horizontal navigation menu with dropdown support
- **`menubar.tsx`** - Desktop-style menu bar with keyboard navigation
- **`breadcrumb.tsx`** - Breadcrumb navigation component
- **`pagination.tsx`** - Page navigation with previous/next and page number controls
- **`sidebar.tsx`** - Collapsible sidebar navigation component

#### Layout & Container Components
- **`card.tsx`** - Content container with header, body, and footer sections
- **`sheet.tsx`** - Slide-out panel component (drawer variant)
- **`drawer.tsx`** - Mobile-optimized drawer component
- **`resizable.tsx`** - Resizable panels with drag handles
- **`scroll-area.tsx`** - Custom scrollable area with styled scrollbars
- **`separator.tsx`** - Visual divider component (horizontal/vertical)
- **`aspect-ratio.tsx`** - Maintains consistent aspect ratios for content

#### Interactive Components
- **`button.tsx`** - Primary button component with multiple variants and sizes
- **`toggle.tsx`** - Two-state toggle button
- **`toggle-group.tsx`** - Group of toggle buttons with single/multiple selection
- **`accordion.tsx`** - Collapsible content sections with smooth animations
- **`collapsible.tsx`** - Simple expand/collapse content wrapper
- **`tabs.tsx`** - Tabbed interface with keyboard navigation
- **`carousel.tsx`** - Image/content carousel with navigation controls

#### Feedback Components
- **`alert.tsx`** - Status messages and notifications
- **`alert-dialog.tsx`** - Modal confirmation dialogs
- **`progress.tsx`** - Progress bar with determinate/indeterminate states
- **`skeleton.tsx`** - Loading placeholder components
- **`sonner.tsx`** - Toast notification system

#### Overlay Components
- **`dialog.tsx`** - Modal dialog component with backdrop
- **`popover.tsx`** - Floating content panels
- **`hover-card.tsx`** - Hover-triggered content preview
- **`tooltip.tsx`** - Contextual help text on hover
- **`context-menu.tsx`** - Right-click context menu

#### Data Display Components
- **`table.tsx`** - Data table with sorting and filtering capabilities
- **`chart.tsx`** - Chart components using Recharts library
- **`avatar.tsx`** - User profile image with fallback support
- **`badge.tsx`** - Status indicators and labels
- **`calendar.tsx`** - Date picker and calendar interface
- **`command.tsx`** - Command palette/search interface

### Custom UI Components

#### **`base-modal.tsx`**
Core modal template that provides standardized modal behavior across the application.

**Features**:
- Consistent backdrop and styling
- Body scroll lock functionality
- Configurable scrollbar styles
- Accessibility compliance (ARIA labels, focus management)
- Responsive sizing options

#### **`modal-close-button.tsx`**
Standardized close button for all modal components with consistent styling and glassmorphism effects.

#### **`global-scrollbar.tsx`**
Global scrollbar configuration and styling system that applies themed scrollbars throughout the application.

#### **`favicon-config.ts`**
Centralized favicon management system for easy branding updates across all platforms and devices.

**Features**:
- Support for all modern favicon formats (ICO, PNG, SVG)
- Platform-specific configurations (Apple, Android, Microsoft)
- Theme color integration with design system
- PWA manifest generation
- Meta tag generation utility

**Configuration**:
```typescript
export const faviconConfig = {
  favicon: '/favicon.ico',
  favicon16: '/favicon-16x16.png',
  favicon32: '/favicon-32x32.png',
  appleTouchIcon: '/apple-touch-icon.png',
  androidChrome192: '/android-chrome-192x192.png',
  androidChrome512: '/android-chrome-512x512.png',
  manifest: '/site.webmanifest',
  themeColor: '#ff6b6b',
  msApplicationTileColor: '#1a1a2e'
};
```

**Usage**:
```typescript
import { generateFaviconMetaTags } from './components/ui/favicon-config';
const faviconHTML = generateFaviconMetaTags();
```

### Utility Files

#### **`utils.ts`**
Utility functions for class name merging, conditional styling, and common operations used across components.

#### **`use-mobile.ts`**
Custom React hook for detecting mobile screen sizes and responsive behavior.

#### **`use-modal-body-lock.ts`**
Custom React hook that manages body scroll locking when modals are open, preventing background scroll.

## Figma Components (`/components/figma/`)

The figma folder contains specialized components designed for handling Figma-imported assets and maintaining compatibility with Figma design systems.

### **`ImageWithFallback.tsx`**
A specialized image component that handles Figma asset imports with graceful fallback functionality.

**Features**:
- Automatic fallback to placeholder images when Figma assets fail to load
- Optimized loading states and error handling
- Consistent sizing and aspect ratio maintenance
- Integration with Figma asset pipeline
- Performance optimizations for large image sets

**Props**:
```typescript
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}
```

**Usage**:
```typescript
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="figma:asset/heritage-site-image.png"
  alt="Heritage site"
  className="w-full h-64 object-cover"
  fallbackSrc="/placeholder-image.jpg"
/>
```

This component is essential for maintaining design consistency when importing assets from Figma designs while providing robust fallback mechanisms for production environments.

## Data Management

### Heritage Sites Data (`/data/heritage-sites.ts`)
Centralized data source for all heritage sites information.

**Data Structure**:
```typescript
interface HeritageSite {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string;
  galleryImages: string[];
  history: string;
  quiz: QuizQuestion[];
  arAvailable: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}
```

## Styling System

### CSS Custom Properties
```css
/* Primary Colors */
--primary: #ff6b6b      /* Coral - main brand color */
--secondary: #4ecdc4    /* Teal - secondary brand color */
--accent: #ffd93d       /* Gold - accent highlights */

/* Background Colors */
--background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--card: rgba(26, 26, 46, 0.95)
--popover: rgba(26, 26, 46, 0.98)

/* Text Colors */
--foreground: #ffffff
--muted-foreground: rgba(255, 255, 255, 0.7)

/* Border and Effects */
--border: rgba(255, 255, 255, 0.2)
--glass: rgba(255, 255, 255, 0.1)
```

### Animation Classes
- `.animate-gradient` - Animated background gradient (3s ease infinite)
- `.animate-spin-slow` - Slow rotation animation (3s linear infinite)
- `.animate-fade-in` - Fade in from bottom animation (1s ease-out)
- `.glass` - Glassmorphism effect with backdrop blur
- `.enhanced-card` - Enhanced card styling with glassmorphism
- `.gradient-text` - Animated gradient text effect

### Scrollbar System Classes
- `.modal-scroll` - Standard modal scrollbar (8px width)
- `.modal-scroll-thin` - Thin scrollbar variant (6px width)
- `.modal-scroll-visible` - Always visible scrollbar (12px width)
- `.site-list-scroll` - Specialized for heritage site listings

### Layout Classes
- `.rising-content` - Content that rises over fixed background
- `.fixed-background` - Fixed parallax background positioning
- `.equal-height-card` - Ensures consistent card heights in grids
- `.smooth-scroll-container` - Enhanced smooth scrolling behavior

## Development Guidelines

### Component Architecture
1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition over Inheritance**: Use composition patterns for flexibility
3. **TypeScript First**: All components must use TypeScript with proper typing
4. **Props Interface**: Always define explicit props interfaces
5. **Default Props**: Provide sensible defaults for optional props

### Styling Guidelines
1. **CSS Variables**: Use CSS custom properties for all theming
2. **Responsive Design**: All components must be mobile-first responsive
3. **Glassmorphism**: Follow established glassmorphism patterns
4. **Animation Performance**: Use CSS animations over JavaScript when possible
5. **Accessibility**: Include proper ARIA labels and keyboard navigation

### Modal Development
1. **BaseModal Pattern**: Always extend BaseModal for new modal components
2. **Body Lock**: Ensure proper body scroll locking
3. **Escape Handling**: Implement escape key and click-outside closing
4. **Scrollbar Consistency**: Use appropriate scrollbar classes
5. **Focus Management**: Handle focus trapping and restoration

### Performance Considerations
1. **Component Memoization**: Use React.memo for frequently re-rendered components
2. **Image Optimization**: Implement proper image loading and fallbacks
3. **Code Splitting**: Consider lazy loading for heavy components
4. **Event Debouncing**: Use debounced handlers for scroll and resize events
5. **CSS Containment**: Use CSS containment for complex layouts

### Testing Approach
1. **Unit Tests**: Test component logic and prop handling
2. **Integration Tests**: Test component interactions
3. **Accessibility Tests**: Verify ARIA compliance and keyboard navigation
4. **Visual Regression**: Test component appearance across breakpoints
5. **Performance Tests**: Monitor component render performance

## 🚀 Adding New Features Guide

### Feature Development Workflow

Follow this systematic approach when adding new features to Itihaas360:

#### **1. Planning Phase**
- **Identify Purpose**: Clearly define what the feature accomplishes
- **Design Integration**: Ensure it fits the coral-teal-gold theme and glassmorphism aesthetic
- **Data Requirements**: Determine if new data structures are needed in `/data/heritage-sites.ts`
- **Component Architecture**: Plan reusable components and their hierarchy

#### **2. Component Development Pattern**

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

**Step 2: Component Implementation**
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

#### **3. Component Documentation Pattern**

When creating new components, add to this documentation file:

```markdown
### ComponentName (`/components/ComponentName.tsx`)
Brief description of the component's purpose and functionality.

**Props**:
```typescript
interface ComponentNameProps {
  prop1: string;
  prop2?: boolean;
  prop3: SomeType;
}
```

**Features**:
- Feature 1 description
- Feature 2 description
- Integration with other components

**Usage**:
```typescript
<ComponentName
  prop1="value"
  prop2={true}
  prop3={someValue}
/>
```
```

#### **4. Modal Components Pattern**

For modal components, follow the BaseModal pattern:

```typescript
import { BaseModal } from './ui/base-modal';
import { ModalCloseButton } from './ui/modal-close-button';

export function FeatureModal({ isOpen, onClose, data }: FeatureModalProps) {
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

#### **5. Performance Optimization Pattern**

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

#### **6. Design System Integration**

**Color Usage Guidelines**:
- **Primary** (`var(--primary)`): Main interactive elements, CTAs
- **Secondary** (`var(--secondary)`): Supporting elements, hover states
- **Accent** (`var(--accent)`): Highlights, success states, badges

**Component Styling Pattern**:
```css
.feature-component {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-component:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--primary);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}
```

#### **7. TypeScript Integration**

Always define proper TypeScript interfaces:

```typescript
// Component props interface
interface FeatureComponentProps {
  data: FeatureData[];
  onSelect: (item: FeatureData) => void;
  isLoading?: boolean;
  className?: string;
}

// Data structure interfaces
interface FeatureData {
  id: string;
  name: string;
  category: FeatureCategory;
  metadata: FeatureMetadata;
}

// Use proper typing for event handlers
const handleFeatureClick = useCallback((feature: FeatureData) => {
  onSelect(feature);
}, [onSelect]);
```

### Example: Categories Feature Implementation

The Categories feature (planned) will follow this complete pattern:

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

// 3. Documentation in this file
### Categories (`/components/Categories.tsx`)
Heritage site category display and filtering system.

**Features**:
- Interactive category cards with hover effects
- Dynamic site counting per category
- Gradient text and glassmorphism styling
- Responsive grid layout
- Integration with site filtering

**Usage**:
```typescript
<Categories onCategorySelect={handleCategoryFilter} />
```
```

This systematic approach ensures all new features maintain consistency with the existing design system, performance standards, and architectural patterns.