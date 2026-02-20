import styled from 'styled-components'
import { IconNames } from '../Icon'
import Button from './Button'

const Wrapper = styled.div`
    margin: 10px;
`

export default function ButtonUi() {
    return (
        <>
            <Wrapper>
                <Button
                    variant="primary"
                    variantColor="primary-black"
                    animation
                >
                    Small Button
                </Button>
            </Wrapper>
            <Wrapper>
                <Button
                    variant="primary"
                    variantColor="primary-white"
                    animation
                >
                    Small Button
                </Button>
            </Wrapper>
            <Wrapper>
                <Button variant="primary" variantColor="primary-red" animation>
                    Small Button
                </Button>
            </Wrapper>
            <Wrapper style={{ width: '40%' }}>
                <Button
                    variant="primary"
                    variantColor="primary-black"
                    variantSize="primary-lg"
                    isFullWidth
                    animation
                >
                    Large Button
                </Button>
            </Wrapper>
            <Wrapper style={{ width: '40%' }}>
                <Button
                    variant="primary"
                    variantColor="primary-white"
                    variantSize="primary-lg"
                    isFullWidth
                    animation
                >
                    Large Button
                </Button>
            </Wrapper>
            <Wrapper style={{ width: '40%' }}>
                <Button
                    variant="primary"
                    variantColor="primary-red"
                    variantSize="primary-lg"
                    isFullWidth
                    animation
                >
                    Large Button
                </Button>
            </Wrapper>
            <Wrapper>
                <Button variant="link" variantColor="link-black" animation>
                    Know more
                </Button>
            </Wrapper>
            <Wrapper>
                <Button variant="link" variantColor="link-red" animation>
                    Know more
                </Button>
            </Wrapper>
            <Wrapper style={{ background: 'grey', width: '40%' }}>
                <Button
                    variant="link"
                    variantColor="link-white"
                    variantSize="link-m"
                    animation
                >
                    Know more
                </Button>
            </Wrapper>
            <Wrapper style={{ width: '40%', display: 'flex' }}>
                <Wrapper>
                    <p>Button Icon</p>
                    <Wrapper>
                        <Button
                            variant="icon"
                            icon={{ name: IconNames.IncreaseIcon }}
                        />
                        <Button
                            variant="icon"
                            icon={{ name: IconNames.DecreaseIcon }}
                        />
                    </Wrapper>
                </Wrapper>
                <Wrapper>
                    <p>Disabled Icon</p>
                    <Wrapper>
                        <Button
                            variant="icon"
                            isDisabled
                            animation
                            icon={{ name: IconNames.IncreaseIcon }}
                        />
                        <Button
                            variant="icon"
                            isDisabled
                            animation
                            icon={{ name: IconNames.DecreaseIcon }}
                        />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper style={{ width: '40%', display: 'flex' }}>
                <Wrapper>
                    <p>Link Icon</p>
                    <Wrapper>
                        <Button
                            variant="icon"
                            icon={{ name: IconNames.PlusIcon }}
                            internalLink
                            as="a"
                            href="/"
                            isNewTab
                        />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </>
    )
}
