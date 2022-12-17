

import { minify as minifyHTML } from 'Mini-HTML'

const HTMLConfig = {
    removeAttributeQuotes : true ,
    collapseWhitespace : true ,
    removeComments : true ,
    quoteCharacter : "'"
}

export function html ( code ){
    return minifyHTML(code,HTMLConfig)
}


import CleanCSS from 'Mini-CSS'

export function css ( code ){
    return new CleanCSS()
        .minify(code)
}


import { minify as minifyJS } from 'Mini-JS'

const JSConfig = {
    mangle : false
}

export function js ( code ){
    return minifyJS(code,JSConfig)
}
