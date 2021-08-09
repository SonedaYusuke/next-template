module.exports = {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.module.rules.push({
      enforce: "pre",
      test: /\.(js|jsx|ts|tsx)$/,
      loader: "eslint-loader",
      exclude: /(node_modules)/,
    })

    // Important: return the modified config
    return config
  },
}
