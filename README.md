# lux.shop
Lux NFT marketing site.

## To run locally

Install `pnpm` [like so](https://pnpm.io/installation)

The usual scripts for a Next site, using `pnpm`
```
pnpm install
pnpm dev
```

Since "pnpm" is a finger twister, many people alias it to "pn". For example, with `bash`, put `alias pn='pnpm'` in `.bashrc`.


## From Hanzo's boilerplate repo based on shadcn/next-template

- A React using shadcn's ui system (Next 13.4+, Tailwind), restructured and cleaned up.
- Pulls content from static json (in `/src/content`)
- Lives [on GitHub here](https://github.com/hanzoai/shadcn-boilerplate)

### Originally created using

From shadcn/next-template

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
- uses `pnpm`
- updated module versions

