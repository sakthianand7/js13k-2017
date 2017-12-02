import { h, render, Component } from 'preact'

import { Image as Image_ } from '../Image'
import { Link } from '../Link'

import styled from 'styled-components'

const generateImage = url => [
    {
        dimension: [6, 6],
        url:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAABr3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjapVRtcsQgCP3vKXoE+Yia42SNzvQGPX4fRLfJzm63M4VRCSAPQRPa12cPH0ZJYtAll7SmFEG66sobhBIPMvmGwUM2U4qTKK4+OwV3OtQXw9QTP+jHSttDIB3odLsapp7LcwAxAMikI9A6gQTqJ8hpLTnqz/c2NvYRcIFHLhyDEDdRjMVQJApJlg1zPGY2rUBm1y/mF71OQM2W+shIzJEFFVrpbPDEZVT8pHcoM6BI12Lfz3413JsgL/STkken4Kh0Uj7pyF8aEp6i2bFOBdYp8VUvPztxNOtA30vvzT1004SLmcbNmv2j4YfrqeLNEoQ0FshYA6bFOaGkFXc6D+640zfkW4liJwbbaiSUqFLGqrTR4roSYC/43MHdWSgzszJTY8WGBl2750IDNjtwA3CJDT4aEE2p/Z/DO4feq5WI/CGzD+TFLpFVUWzuPVRryXIq7WvKCGreO80O54euXUiO5pPay1BeaGzX36FGoOlM7/OyS2D/puqQxwFxPASSjjdAe7ztPWmpte6ZOxIZp+n7Gr4BW1kSmAosaxMAAAADc0JJVAgICNvhT+AAAAAWSURBVAhbY7S1tZWXl2fm4eFhZWUFAAzcAUwjL+s+AAAAAElFTkSuQmCC',
    },
    {
        dimension: [400, 400],
        url: url,
    },
]

const Image = ({ src, alt }) => (
    <Image_
        style={{ width: '400px', height: '400px' }}
        width={400}
        height={400}
        alt={alt}
        image={generateImage(src)}
    />
)

const component = {
    text: styled.p`
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
        font-size: 20px;
        line-height: 1.3em;
    `,
    bold: styled.span`
        font-weight: bold;
    `,
    italic: styled.span`
        font-style: italic;
    `,
    textBlock: styled.div`
        margin: 20px 0;
    `,
    codeBlock: styled.pre`
        padding: 10px 0;
        margin: 20px 0;
        background-color: #eee;
    `,
    quoteBlock: styled.div`
        margin: 20px 0;
        margin-left: 20px;
        padding-left: 10px;
        border-left: solid 2px #888;
        background-color: #eee;
    `,
    link: Link,
    heading: styled.h1`
        margin: 0;
        p {
            font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans',
                Geneva, Arial, sans-serif;
            font-size: ${props =>
                (props.importance == 1 && '26px') ||
                (props.importance == 2 && '24px') ||
                '22px'};
            font-weight: ${props => (props.importance < 2 ? 'bold' : 'normal')};
        }
    `,
    image: Image,
}

const Tree = ({ type, children, title, meta, ...rest }) => {
    const C = component[type] || 'div'

    return (
        <C {...rest}>
            {rest.text ||
                children.map((c, i) => <Tree key={i} {...rest} {...c} />)}
        </C>
    )
}

export const Article = ({ content, ...props }) => (
    <Body>
        <Tree {...props} {...content} />
    </Body>
)

const Body = styled.div``
