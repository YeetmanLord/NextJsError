Essentially, the issue boils down to this: While using Webpack, "local" dependencies (those included either using a local file or through `npm link <package>`) are resolved correctly.

However, once one starts using Turbopack through `next dev --turbo`, that module resolution no longer functions properly. Instead we receive an error along the lines of this:

```typescript
 ⨯ ModuleBuildError: ./src/app/page.tsx:3:1
Module not found: Can't resolve 'ui-library'
  1 | import Image from "next/image";
  2 | import styles from "./page.module.css";
> 3 | import TestComponent from "ui-library";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  4 |
  5 | export default function Home() {
  6 |   return (
```
