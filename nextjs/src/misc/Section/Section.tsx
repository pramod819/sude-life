import styled from 'styled-components'

export default function Section({ children }) {
    return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.div`
    scroll-snap-align: start;
`
