
import { css as optimize } from '../Optimize.js'
import { Styles , Style } from 'Paths'
import { walk } from 'FileSystem'


const { writeTextFile , readTextFile } = Deno;


const DiscoveryOptions = {
    followSymlinks : false ,
    includeFiles : true ,
    includeDirs : false ,
    maxDepth : 1 ,
    exts : [ 'css' ]
}


export default async function build (){

    const stylesheets =
        walk(Styles,DiscoveryOptions);


    let css = '';

    for await ( const { path } of stylesheets )
        css += await readTextFile(path);


    const { styles } = optimize(css);

    await writeTextFile(Style,styles);
}
