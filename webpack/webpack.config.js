//O WEBPACK DIFERENTE DO GULP, LER OS ARQUIVOS SEM TER Q FALAR TODOS ELES. VOCE FALA QUAL O PRINCIPAL E ELE VAI PESQUISANDO OS OUTROS ARQUIVOS QUE ESTÃO REFERENCIADOS DENTRO DO PRINCIPAL (UM PUXA O OUTRO)
//O WEBPACK E GULP FAZEM A MSM COISA PELO OQ ENTENDI

const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin') //isso aki é pra ele extrair o css pra um aqruivo especifico

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',//é de onde ele vai ler
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [            
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [ //ta instanciando o construtor
        new miniCssExtractPlugin({
            filename: "estilo.css" //aki ta criando um arquivo css com os arquivos sass e tbm css mandados pelo webpack
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {   //esse module foi colocado pra conseguir ler o css
        rules: [{
            test: /\.s?[ac]ss$/, //aki ta dizendo q pode pegar extensoes css scss e sass
            use: [
                miniCssExtractPlugin.loader,
               // 'style-loader', //Adiciona CSS a DOM injentando a tag <style>  //foi preciso comentar a linha para n conflitar com a linha cima. a linha acima maniupla css pela DOM e essa linha cria um arquivo separado css
                'css-loader',    //interpreta @import, url()...
                'sass-loader' //alem do css, ele tbm vai fazer com o sass
            ]
        }]
    }
}