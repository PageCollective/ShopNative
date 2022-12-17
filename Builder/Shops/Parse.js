


function linkFrom ( data ){

    if( 'Etsy' in data )
        return `https://etsy.com/shop/${ data.Etsy }`

    if( 'Page' in data )
        return `https://${ data.Page }`

    return '#'
}


const { isArray } = Array;

export default function parse ( data ){

    let { Folk } = data;

    if( ! isArray(Folk) )
        Folk = [ Folk ];

    Folk ??= [];


    const link = linkFrom(data);


    const { Name , Tags } = data;

    Name ??= 'Missing Name';
    Tags ??= [];

    return {
        name : Name ,
        folk : Folk ,
        tags : Tags ,
        link
    }
}
