module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import',
      {
        libraryName: 'wkl-ui',
        libraryDirectory: 'components',
        style: true
      }
    ]
  ]
}
