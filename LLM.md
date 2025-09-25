# LUX Web Project Architecture Analysis

## Project Overview

The LUX web project is a monorepo structure containing multiple Next.js applications organized under `/Users/z/work/lux/web/app/` directory, with shared packages in the `/Users/z/work/lux/web/pkg/` directory.

### Key Architecture Patterns

1. **Monorepo Structure**:
   - Multiple Next.js applications under `/app/` directory (partners, bitcoin, cash, etc.)
   - Shared packages under `/pkg/` directory (ui, data, menu-icons)

2. **UI Architecture**:
   - Common UI components and layouts are shared via the `@luxfi/ui` package
   - The `RootLayout` component is a foundational layout used across applications

3. **Next.js App Router**:
   - Applications use Next.js App Router structure with `app/` directories
   - Layouts are defined using the App Router convention

## Technical Insights

### Async Components in Next.js

The project uses React Server Components in Next.js, which allow for async components. However, there are some important typing considerations:

1. **Async Components**:
   - When defining async components, the React.FC type cannot be used directly with async arrow functions that return JSX
   - This is because async functions return Promises, which are not assignable to ReactNode

2. **Proper Async Component Pattern**:
   ```typescript
   // Incorrect
   const Component: React.FC<Props> = async (props) => (
     <div>{/* JSX */}</div>
   )
   
   // Correct
   const Component = async (props: Props) => {
     return (
       <div>{/* JSX */}</div>
     )
   }
   ```

### Node.js Version Requirements

The project requires Node.js version >= v18.17.0 for compatibility with Next.js (as of Next.js 14).

## Recent Updates (2025-08-26)

### Dependencies Update
All dependencies have been updated to their latest versions:
- Next.js upgraded to 15.1.6
- React remains at 18.3.1 (Next.js 15 still requires React 18)
- TypeScript upgraded to 5.7.3
- Tailwind CSS upgraded to 3.4.17
- All other dependencies updated to latest compatible versions

### E2E Testing with Playwright
- Added Playwright testing framework for E2E tests
- Created comprehensive test suites for homepage and partners page
- Tests cover functionality, responsive design, and performance
- Configuration includes multiple browsers (Chrome, Firefox, Safari) and mobile viewports

### UI Fixes
1. **Hero Section**: Fixed to use full viewport height (min-h-screen)
2. **Partners Section**: Verified structure and content display
3. **Client Component Migration**: Converted page to client component to resolve Next.js 15 SSR compatibility issues

### Next.js 15 Compatibility
- Resolved `ssr: false` error with dynamic imports in Server Components
- Converted main page to Client Component with 'use client' directive
- Removed async data fetching from component to maintain client-side rendering

## Implementation Decisions

1. For async components that need to return JSX:
   - Avoid the arrow function with parentheses syntax that immediately returns JSX
   - Use the block body syntax with an explicit return statement instead
   - Remove the React.FC type annotation and apply the type to the props parameter directly

2. For building and running the applications:
   - Ensure Node.js v18.17.0 or higher is being used
   - The project has multiple Node.js versions available through nvm

3. For Next.js 15 compatibility:
   - Use Client Components when dynamic imports with `ssr: false` are needed
   - Move async data fetching to API routes or server-side data fetching patterns
   - Ensure proper hydration by avoiding server/client rendering mismatches

## Project Structure Documentation

The project consists of multiple Next.js applications:
- bitcoin
- blank
- cash
- cdn
- chat
- coin
- credit
- exchange
- finance
- fund
- id
- industries
- invest
- link
- market
- network (Main site - lux.network)
- partners (Team and partners - lux.partners)
- quest
- safe
- shop

Each application follows a similar structure with:
- `src/app/` - Next.js App Router pages
- `src/components/` - React components
- `src/content/` - Content definition files
- `public/assets/` - Static assets

Shared packages are located in `/pkg/`:
- `ui/` - Shared UI components
- `data/` - Shared data models
- `menu-icons/` - Shared icon components

## Testing Strategy

### E2E Tests
- Comprehensive test coverage for critical user paths
- Tests for responsive design across viewports
- Performance monitoring (load time < 5s requirement)
- Console error detection
- Visual regression prevention

### Test Files
- `/app/network/e2e/homepage.spec.ts` - Homepage tests
- `/app/partners/e2e/partners.spec.ts` - Partners page tests
- Playwright configuration for both apps

## Development Workflow

1. **Install dependencies**: `pnpm install`
2. **Run development server**: `pnpm dev`
3. **Run E2E tests**: `pnpm test:e2e`
4. **Build for production**: `pnpm build`
5. **Type checking**: `pnpm tc`

## Known Issues and Solutions

1. **Next.js 15 SSR Issues**: 
   - Solution: Use Client Components when dynamic imports are needed
   - Alternative: Move dynamic imports to separate client components

2. **Playwright Port Conflicts**:
   - Solution: Set `reuseExistingServer: true` in playwright.config.ts
   - Ensure dev server is running before tests

3. **Peer Dependency Warnings**:
   - Expected with monorepo setup and catalog dependencies
   - Does not affect functionality