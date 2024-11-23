const postcss = require("postcss/lib/postcss");

module.exports = {
    style: {
        postcss: {
            plugins:[
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        }
    }
}