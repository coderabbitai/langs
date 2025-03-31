const { setup } = require('@ast-grep/nursery')
const languageRegistration = require('./index')
const assert = require('node:assert')

setup({
  dirname: __dirname,
  name: 'cpp',
  treeSitterPackage: 'tree-sitter-cpp',
  languageRegistration,
  testRunner: parse => {
    const sg = parse(`
      template <typename T>
      T add(T a, T b) {
        return a + b;
      }
      int main() {
        int a = 123;
        int result = add<int>(5, 10);
        return 0;
      }
      `)
    const root = sg.root()
    const node = root.find('$T $A = 123')
    assert.equal(node.kind(), 'declaration')
  },
})
