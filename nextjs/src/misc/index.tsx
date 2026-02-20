import ButtonUi from './Button/Button.ui'
import TypographyUi from './Typography/Typography.ui'
import IconUi from './Icon/Icon.ui'
import styled from 'styled-components'
import { COLORS } from 'src/styles/variables'
import Typography from '@material-ui/core/Typography'

export const UI_COMPONENT = [
    {
        Component: TypographyUi,
        title: 'Typography',
    },
    {
        Component: IconUi,
        title: 'Iconography',
    },
    {
        Component: ButtonUi,
        title: 'Button',
    },
]

const Section = styled.div`
    padding: 5% 0 0 5%;

    background-color: ${COLORS.red};
    .section-title {
        margin-bottom: 40px;
    }
`
const Wrapper = styled.div`
    padding: 5%;
    background-color: ${COLORS.white};
`
export default function UiKit() {
    return (
        <>
            {UI_COMPONENT.map((item, index) => (
                <Section key={index}>
                    <Typography variant="h2" className="section-title">
                        {item.title}
                    </Typography>
                    <Wrapper>
                        <item.Component />
                    </Wrapper>
                </Section>
            ))}
        </>
    )
}
