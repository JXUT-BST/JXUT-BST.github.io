import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignorePatterns: ['**/dist/**/*', '**/cache/**/*', '**/.obsidian/**/*'],
    vue: true,
    typescript: true,
    markdown: true,
  },
)
