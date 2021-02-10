const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

//O arquivo servidor funciona para que quando faça alterações em algum dos arquivos escritos na função "servidor()", atualize o browser(isso é pela função: "monitorarArquivos()").  Se só o HTML for alterado por exemplo, ele vai ser o unico atualizado


function  monitorarArquivos() {
    return gulp.src('build') //é a pasta usada no servidor
    .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true
    }))
}

function  servidor(cb) { 
    watch('src/**/*.html', () => gulp.series('appHTML')()) //esse ultimo parenteses em vazio é pra chamar a propria função
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb() 
}

module.exports = {
    monitorarArquivos,
    servidor
}