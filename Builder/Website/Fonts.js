
import { Resources , Fonts } from 'Paths'
import { copy } from 'FileSystem'
import { join } from 'Path'


export default async function transfer (){

    const fonts = join(Resources,'Fonts');

    await copy(Fonts,fonts);
}
