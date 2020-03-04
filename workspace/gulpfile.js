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
    src("sass/*.scss")
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

    .pipe(dest('../css'));

const watchSassFiles = () => watch("sass/*.scss", compileSass);

exports.default = watchSassFiles;