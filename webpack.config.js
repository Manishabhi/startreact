module.exports={
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer:{
        inline: true,
        port: 8080
    },
    module:{
        loader:[
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['es2015','react']
                }
            }
        ]

    }
}