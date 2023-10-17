# LUX Shop marketing site

## To run locally

Install `pnpm` [like so](https://pnpm.io/installation)

The usual scripts for a Next site, using `pnpm`
```
pnpm install
pnpm dev
```

Since "pnpm" is a finger twister, many people alias it to "pn". For example, with `bash`, put `alias pn='pnpm'` in `.bashrc`.


## From starter site based on shadcn/next-template

- React using shadcn's ui system (Next 13.4+, Tailwind)
- Restructured and cleaned up slightly
- Pulls all content from static json (`/src/content`)
- lives on GitHub [here](https://github.com/hanzoai/shadcn-boilerplate)

### Originally created using

From shadcn/next-template
A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

```
bash
npx create-next-app -e https://github.com/shadcn/next-template
```

..them improved for use as a Hanzo boilerplate

### Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

#### improvments made by us
- better tree structure and naming
- no linting or prettier

