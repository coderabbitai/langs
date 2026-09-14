# CMake grammar for ast-grep

This package provides the native `tree_sitter_cmake` language registration.
It parses source syntax; it does not execute CMake, resolve dependencies, or
establish which build configuration is active.

Local build/load checks pass on Linux x64/ARM64 and macOS ARM64. A cross-compiled
macOS x64 binary also passes runtime tests under Rosetta; this is not native
Intel CI qualification. Windows is not yet tested. Do not release this draft
until the complete platform matrix passes. There is no runtime download,
install script, or compiler fallback.

## Source and builds

`vendor/` contains unchanged generated C sources from the MIT-licensed
`tree-sitter-cmake` 0.7.2.post1 Python distribution. `UPSTREAM.json` records the
provenance and exact file hashes. `pnpm source` verifies every vendored file
before preparing the ignored `src/` build directory. No Python runtime or
regeneration step is involved.

`pnpm build` compiles with the maintainer machine's C compiler; `pnpm test`
loads the result through ast-grep. The native build must run and pass separately
on each release target. Place the resulting library in
`prebuilds/prebuild-<platform>-<architecture>/parser.so`, matching the existing
ast-grep language-package layout.

`pnpm pack` requires all five targets already covered by the shared grammar
packages: Linux ARM64/x64, Windows x64, and macOS ARM64/x64. Because the shared
registry initializes every grammar, shipping fewer targets could break unrelated
language parsing. Windows is missing, so packing is currently expected to fail.
File presence is only a packaging guard, not proof of successful qualification.
Published contents exclude
the build-tree `parser.so`, generated sources, and development scripts. Test the
extracted package on every target before publishing. No package is published by
the source/build/test commands.

`.github/workflows/cmake-qualification.yml` builds and tests five explicit
targets, including relocation to the installed-package layout. It does not
publish packages and has not yet run. Windows builds require the Visual Studio
x64 developer environment. The existing upstream-delegating publish workflow
is not this package's release path. Shared `@coderabbitai/ast-grep-langs`
integration is a separate dependent change.
