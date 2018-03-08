const { environment } = require('@rails/webpacker')

const vue = require('./loaders/vue')

environment.loaders.append('rails-erb-loader', {
    rules: [
        {
            test: /\.erb$/,
            enforce: 'pre',
            loader: 'rails-erb-loader'
        },
    ]
})
environment.loaders.append('vue', vue)

module.exports = environment
