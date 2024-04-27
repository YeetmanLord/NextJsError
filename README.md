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
This is a "simplified" version of the setup that I am using for production development. I have a ui library on my machine that is included using a local file dependency. 
I also have a modified version of the Neode package that I am including using a file dependency as well. Both libraries yield a `Module not found` error.
