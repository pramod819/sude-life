import styled from 'styled-components'
import Icon, { IconNames } from './Icon'

const iconList: { name: IconNames; title: string }[] = [
    { name: IconNames.AccountIcon, title: 'Account Icon' },
    { name: IconNames.ArrowRight, title: 'ArrowRight' },
    { name: IconNames.ArrowLeft, title: 'ArrowLeft' },
    { name: IconNames.CloseIcon, title: 'Close Icon' },
    { name: IconNames.DecreaseIcon, title: 'Decrease' },
    { name: IconNames.HamburgerIcon, title: 'Hamburger Icon' },
    { name: IconNames.IncreaseIcon, title: 'Increase' },
    { name: IconNames.InstagramIcon, title: 'Instagram Icon' },
    { name: IconNames.MinusIcon, title: 'Minus Icon' },
    { name: IconNames.PlusIcon, title: 'Plus Icon' },
    { name: IconNames.PinterestIcon, title: 'Pinterest Icon' },
    { name: IconNames.StoreIcon, title: 'Store Icon' },
    { name: IconNames.SearchIcon, title: 'Search Icon' },
    { name: IconNames.YoutubeIcon, title: 'Youtube Icon' },
]

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .icon_item {
        text-align: center;
        margin: 15px;
    }
`

export default function IconSection() {
    return (
        <Wrapper>
            {iconList.map((item, index) => (
                <div key={index} className="icon_item">
                    <p>{item.title}</p>
                    <Icon width="30" height="30" name={item.name} />
                </div>
            ))}
        </Wrapper>
    )
}
