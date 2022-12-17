

const a = ( content , link ) =>
    `<a href = '${ link }' target = _blank >${ content }</a>`

const h3 = ( title ) =>
    `<h3>${ title }</h3>`



export default function render ( shop ){

    const { name , link , folk , tags } = shop;

    const indicators = [];

    if(shop.onEtsy)
        indicators.push(`<div class = Etsy title = 'This is an Etsy.com store'></div>`);

    indicators.push('<div></div>');

    if(folk.length){

        const tribes = folk
            .map((tribe) => `<div>${ tribe }</div>`)
            .join('');

        indicators.push(`<div class = Tribes>${ tribes }</div>`)
    }


    const wares = tags
        .map((tag) => `<div class = '${ tag.replaceAll(' ','-') }'></div>`)
        .join('');

    const items = [
        h3(name) ,
        `<div class = Wares>${ wares }</div>` ,
        `<div>${ indicators.join('') }</div>`
    ]

    const content = items
        .join('');

    return a(content,link)
}
