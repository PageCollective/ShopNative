
import { html as optimize } from '../Optimize.js'
import { Template , Index } from 'Paths'
import renderShops from '../Shops/mod.js'


const { writeTextFile , readTextFile } = Deno;


export default async function build (){

    const content =
        await renderShops();

    await buildTemplate(content);
}


async function buildTemplate ( body ){

    const template =
        await readTextFile(Template);

    const index = template
        .replace('<!-- Body -->',body);

    const minified =
        optimize(index);

    await writeTextFile(Index,minified);
}
