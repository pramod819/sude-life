import { Typography, TypographyVariant } from '@material-ui/core'
import styled from 'styled-components'

const TYPO_OBJ: {
    name: string
    content: string
    variant: TypographyVariant
}[] = [
    { name: 'H1', content: 'Top Banner Heading, Big Quotes', variant: 'h1' },
    { name: 'H2', content: 'All Section Title', variant: 'h2' },
    { name: 'H3', content: 'Sub Headings', variant: 'h3' },
    { name: 'H4', content: 'Pop Ups Headings, Card Headings', variant: 'h4' },
    { name: 'H5', content: 'Large', variant: 'h5' },
    { name: 'H6', content: 'Small', variant: 'h6' },
    { name: 'B1', content: 'Description text', variant: 'body1' },
    { name: 'B2', content: 'Small', variant: 'body2' },
]

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
`

export default function TypographyUi() {
    return (
        <>
            {TYPO_OBJ.map((item, index) => (
                <Row key={index}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant={item.variant}>
                        {item.content}
                    </Typography>
                </Row>
            ))}
        </>
    )
}
