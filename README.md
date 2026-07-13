This repo reproduces the difference in behaviour between TS7 vs TS6 about updating imports following a rename in the IDE.

The issue is visible when renaming a file in a subpackage, while not having edited yet files in other subpackages. In TS6, it seems that either the extension or the language server "warms up"  the whole project (for lack of a better understanding of what goes on behind the scenes), so imports are always updated. With TS7, if I reload the IDE while the open file is the one to be renamed, and I rename it without browsing any other code, the import in the other subpackage isn't updated.

#### TS7 - no warm-up, incomplete import update

https://github.com/user-attachments/assets/f8c4d024-3649-48fa-aad3-3b457c1d4a04

.

#### TS7 - after warm-up, all imports are updated

https://github.com/user-attachments/assets/e21ba78b-0b10-408e-aaaf-705582e67148

.

#### TS6 - no warm-up, all imports are updated

With TS6, it seems that we need to emit the `.d.ts` files for renames to work across subpackages (together with the `declarationMap` compiler option). Once that's done, imports are updated across subpackages without having to "warm up" the langage server.

https://github.com/user-attachments/assets/4af10b79-5c03-4f09-9435-2b8d71c1c8dc


