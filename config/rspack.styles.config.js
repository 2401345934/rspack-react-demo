module.exports = [
  
  {
    test: [/\.less$/],
    use: [
      'style-loader',
      {
        loader: 'less-loader',
      },
    ],
    type: "css",
  },
  {
    test: [/\.module\.less$/i,/\.module\.css$/i],
    type: "css/module", // this is enabled by default for module.css,   so you don't need to specify it
  },
  
]
