

const a = ( content , link ) =>
    `<a href = '${ link }'>${ content }</a>`

const h3 = ( title ) =>
    `<h3>${ title }</h3>`



export default function render ( shop ){

    const { name , link , folk , tags } = shop;

    const indicators = [];

    if(shop.onEtsy)
        indicators.push(`<div class = Etsy title = 'This is an Etsy.com store'></div>`);

    const wares = tags
        .map((tag) => `<div class = '${ tag.replaceAll(' ','-') }'></div>`)
        .join('');

    const items = [
        h3(name) ,
        `<div class = Wares>${ wares }</div>` ,
        ... indicators
    ]

    const content = items
        .join('');

    return a(content,link)
}
