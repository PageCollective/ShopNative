
import * as Paths from 'Paths'
import { parse } from 'YAML'


const { writeTextFile , readTextFile } = Deno;


async function readYaml ( path ){
    const yaml = await readTextFile(path);
    return parse(yaml)
}

const collectives = await readYaml(Paths.Collectives);
const individuals = await readYaml(Paths.Individuals);




const fromEtsy = ( name ) =>
    `https://etsy.com/shop/${ name }`

const fromPage = ( address ) =>
    `https://${ address }`
