const {
    src,
    dest,
    watch
} = require("gulp");
const sass = require("gulp-sass");
const gulpPostcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer')
const cssDeclarationSorter = require('css-declaration-sorter');
const mmq = require('gulp-merge-media-queries');

const compileSass = () =>
    src("bootstrap-styles/bootstrap.scss")
    .pipe(
        sass({
            outputStyle: "expanded"
        })
    )
    .pipe(gulpPostcss([cssDeclarationSorter({
        order: 'smacss'
    })]))
    .pipe(autoprefixer({

    }))
    .pipe(mmq({
        log: true
    }))

    .pipe(dest("bootstrap-styles"));

const watchSassFiles = () => watch("bootstrap-styles/bootstrap.scss", compileSass);

exports.default = watchSassFiles;