# Migration Guide

The remaining page components need to be copied from the original project. Here's how to complete the migration:

## Remaining Pages to Copy

1. `ITHardware.tsx`
2. `SoftwareSolutions.tsx`
3. `NetworkSetup.tsx`
4. `Cybersecurity.tsx`
5. `RemoteSupport.tsx`
6. `WebDevelopment.tsx`

## Conversion Steps

For each page file:

1. Copy the file from `src/pages/` to `components/pages/`
2. Add `'use client';` at the top
3. Change `import { Link } from 'react-router-dom';` to `import Link from 'next/link';`
4. Change `import { useLocation } from 'react-router-dom';` to `import { usePathname } from 'next/navigation';`
5. Change `useLocation()` to `usePathname()`
6. Change `location.pathname` to `pathname`
7. Update ImageWithFallback import path if needed

## Quick Copy Script

You can use this to copy and convert files:

```bash
# Copy files
cp src/pages/ITHardware.tsx components/pages/ITHardware.tsx
# Then manually add 'use client' and update imports
```

All the routing structure is already set up in the `app/` directory, so once the components are copied and converted, everything should work.


