
import loadShops from './Load.js'
import render from './Render.js'


const { log } = console;


export default async function (){

    const { collectives , individuals } = await loadShops();


    for ( const shop of collectives )
        shop.collective = true;


    const shops = collectives
        .concat(individuals);


    log(`
        Shops: ${ shops.length }
        Collectives: ${ collectives.length }
        Individuals: ${ individuals.length }
    `)

    const items = shops
        .map(render)
        .join('');

    return `<div id = Shops class = Scrollbar >${ items }</div>`;
}
