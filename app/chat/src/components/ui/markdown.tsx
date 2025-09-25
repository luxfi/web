import React, { memo } from 'react'
import ReactMarkdown, { type Options } from 'react-markdown'

export const MemoizedReactMarkdown: React.FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)
