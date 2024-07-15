import type React from "react";

import type { Block, ElementBlock, ImageBlock } from "@hanzo/ui/blocks";

interface PressCardBlock extends Block {
  blockType: "press-card";
  content: React.ReactNode;
  url?: string;
  cta?: string;
  logo: ImageBlock | ElementBlock;
}

export { type PressCardBlock as default };
