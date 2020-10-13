const {
    src,
    dest,
    watch,
    series,
    parallel
} = require("gulp");

const gulpPostcss = require('gulp-postcss');
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer')
const cssDeclarationSorter = require('css-declaration-sorter');
const mmq = require('gulp-merge-media-queries');

const compileSass = () =>
    src("sass/*.scss", { sourcemaps: true, })
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
        .pipe(dest('../css', {
            sourcemaps: true,
        }));

const watchSassFiles = () => watch("sass/*.scss", compileSass);

exports.default = watchSassFiles;