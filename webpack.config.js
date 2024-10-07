const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // Dossier de sortie
    filename: 'index.js',                   // Nom du fichier de sortie
    library: 'tm-react-modal',           // Nom de la bibliothèque
    libraryTarget: 'umd',                   // Format UMD compatible avec les modules CommonJS et AMD
    globalObject: 'this',                   // Résout un problème avec l'utilisation de Webpack dans Node.js
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Fichiers JS et JSX
        exclude: /node_modules/,
        use: 'babel-loader',  // Utilisation de Babel pour la transpilation
      },
      {
        test: /\.css$/,  // Fichiers CSS
        use: ['style-loader', 'css-loader'],  // Chargeurs CSS pour l'importation de styles
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Extensions que Webpack doit traiter
  },
  externals: {
    react: 'react',  // Exclure React du bundle pour éviter les duplications dans les projets qui l'utiliseront
    'react-dom': 'react-dom',
  },
};

