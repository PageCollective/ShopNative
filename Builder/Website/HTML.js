
import { html as optimize } from '../Optimize.js'
import { Template , Index } from 'Paths'


const { writeTextFile , readTextFile } = Deno;


export default async function build (){

    let content = '';


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
