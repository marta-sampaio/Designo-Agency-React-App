/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/* styles folder */
import { Body1 } from '../../styles';


export default function Locations(isFooter) {
    const styledBodyFooter = {
        pt: '4rem',
        color: 'primary.light',
        opacity: '0.5',
        fontSize: '1.5rem',
        lineHeight: '2.5rem',
        textAlign: { sm: 'left' }
    };


    return (
        <>
            <Body1 component='p'
                sx={{
                    ...(isFooter && { ...styledBodyFooter })
                }}
            >
                Designo Central Office
                <span css={css` display: block;`}>3886 Wellington Street </span>
                Toronto, Ontario M9C 3J5
            </Body1>
            <Body1 component='p'
                sx={{ ...(isFooter && { ...styledBodyFooter }) }}
            >
                Contact Us (Central Office)
                <span css={css` display: block;`}>P : <a href="tel:+1 253-863-8967">+1 253-863-8967</a></span>
                M : <a href="contact@designo.co">contact@designo.co</a>
            </Body1 >
        </>
    )
}
