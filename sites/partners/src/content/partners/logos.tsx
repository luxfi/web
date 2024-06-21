import type * as C from "@hanzo/ui/blocks"

import type PartnersLogosBlock from "@/blocks/def/partners-logos-block"

export default {
    blockType: "partners-logos",
    title: {
        blockType: "heading",
        heading: "PARTNERS",
        level: 3,
    } as C.HeadingBlock,
    partners: [
        {
            url: 'https://cdaxforex.com',
            logo: {
                blockType: 'image',
                src: '/assets/images/logo_cdax.svg',
                alt: 'CDAX',
                dim: { w: 102, h: 33 },
            } as C.ImageBlock
        },
        {
            url: 'https://mingarelliandcompany.com',
            logo: {
                blockType: 'image',
                src: '/assets/images/logo_mc_consulting.png',
                alt: 'MC Consulting',
                dim: { w: 178, h: 28 },
            } as C.ImageBlock
        },
        {
            url: 'https://gda.capital',
            logo: {
                blockType: 'image',
                src: '/assets/images/logo_gda_capital.svg',
                alt: 'GDA Capital',
                dim: { w: 142, h: 52 },
            } as C.ImageBlock
        },
        {
            url: 'https://vera.financial',
            logo: {
                blockType: 'image',
                src: '/assets/images/logo_vera.png',
                alt: 'Vera',
                dim: { w: 138, h: 37 },
            } as C.ImageBlock
        },
        {
            url: 'http://viscountmining.com',
            logo: {
                blockType: 'image',
                src: '/assets/images/logo_viscount.png',
                alt: 'Viscount Mining Corp.',
                dim: { w: 178, h: 51 },
            } as C.ImageBlock
        }
    ]
} as PartnersLogosBlock
