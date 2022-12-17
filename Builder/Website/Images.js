
import { Resources , Images } from 'Paths'
import { copy } from 'FileSystem'
import { join } from 'Path'


export default async function transfer (){

    const images = join(Resources,'Images');

    await copy(Images,images);
}
