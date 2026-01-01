#!/bin/bash
# Remove 'use server' directives from packages for static export

echo "Removing server actions for static export..."

# Find all instances of these packages in node_modules
find node_modules -path "*/@hanzo/commerce/util/square-payment.ts" -exec sed -i '' "s/'use server'/\/\/ removed for static export/g" {} \;
find node_modules -path "*/@hanzo/commerce/util/promo-codes.ts" -exec sed -i '' "s/'use server'/\/\/ removed for static export/g" {} \;
find node_modules -path "*/@luxfi/ui/server-actions/store-contact.ts" -exec sed -i '' "s/'use server'/\/\/ removed for static export/g" {} \;

# Also check parent node_modules (pnpm hoisting)
if [ -d "../../node_modules" ]; then
  find ../../node_modules -path "*/@hanzo/commerce/util/square-payment.ts" -exec sed -i '' "s/'use server'/\/\/ removed for static export/g" {} \;
  find ../../node_modules -path "*/@hanzo/commerce/util/promo-codes.ts" -exec sed -i '' "s/'use server'/\/\/ removed for static export/g" {} \;
  find ../../node_modules -path "*/@luxfi/ui/server-actions/store-contact.ts" -exec sed -i '' "s/'use server'/\/\/ removed for static export/g" {} \;
fi

echo "Server actions removed."
