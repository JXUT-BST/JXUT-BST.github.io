import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/dist/**/*', '**/cache/**/*', '**/.obsidian/**/*'],
    vue: true,
    typescript: true,
    markdown: true,
  },
)
