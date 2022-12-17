
import { Collectives , Individuals } from 'Paths'
import { parse as fromYAML } from 'YAML'
import parse from './Parse.js'


const { writeTextFile , readTextFile } = Deno;


async function readYAML ( path ){

    const yaml =
        await readTextFile(path);

    return fromYAML(yaml)
}

async function readShops ( path ){

    const data =
        await readYAML(path);

    return data
        .map(parse)
}


export default async function loadShops (){

    const collectives =
        await readShops(Collectives);

    const individuals =
        await readShops(Individuals);

    return { collectives , individuals }
}
