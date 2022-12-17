
import { ensureDir , emptyDir } from 'FileSystem'
import { Resources , Website } from 'Paths'

import copyImages from './Images.js'
import copyFonts from './Fonts.js'
import buildHTML from './HTML.js'
import buildCSS from './CSS.js'


export default async function render (){

    await emptyDir(Website);
    await ensureDir(Resources);

    await copyImages();
    await copyFonts();
    await buildHTML();
    await buildCSS();

}
