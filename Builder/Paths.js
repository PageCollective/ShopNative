
import { fromFileUrl , dirname , join } from 'Path'


const { url } = import.meta;

const folder =
    dirname(fromFileUrl(url));

const repository =
    join(folder,'..');


/*
 *  Data
 */

const data =
    join(repository,'Data');

export const Individuals =
    join(data,'Individuals.yaml');

export const Collectives =
    join(data,'Collectives.yaml');


/*
 *  Resources
 */

const resources =
    join(data,'Website');

export const Template =
    join(resources,'Template.html');

export const Images =
    join(resources,'Images');

export const Styles =
    join(resources,'Styles');

export const Fonts =
    join(resources,'Fonts');


/*
 *  Website
 */

export const Website =
    join(repository,'Website');

export const Index =
    join(Website,'index.html');

export const Resources =
    join(Website,'-');

export const Style =
    join(Resources,'Style.css');
