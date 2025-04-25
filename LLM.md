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

## Implementation Decisions

1. For async components that need to return JSX:
   - Avoid the arrow function with parentheses syntax that immediately returns JSX
   - Use the block body syntax with an explicit return statement instead
   - Remove the React.FC type annotation and apply the type to the props parameter directly

2. For building and running the applications:
   - Ensure Node.js v18.17.0 or higher is being used
   - The project has multiple Node.js versions available through nvm

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
- network
- partners
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
