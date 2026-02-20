import styled from 'styled-components'
import Icon, { IconNames } from './Icon'

const iconList: { name: IconNames; title: string }[] = [
    { name: IconNames.FacebookIcon, title: 'Facebook Icon' },
    { name: IconNames.LinkedinIcon, title: 'Linkedin Icon' },
    { name: IconNames.XIcon, title: 'X Icon' },
    { name: IconNames.InstagramIcon, title: 'Instagram Icon' },
    { name: IconNames.YoutubeIcon, title: 'Youtube Icon' },
    { name: IconNames.RightArrowCircle, title: 'Right Arrow Circle Icon' },
    { name: IconNames.ShieldNumberIcon, title: 'Shield Number  Icon' },
    { name: IconNames.ShieldVeryfiledIcon, title: 'Shield Veryfiled   Icon' },
    { name: IconNames.DownloadTrailingIcon, title: 'Download Trailing Icon' },
    { name: IconNames.UsageIcon, title: 'Usage Icon' },
    { name: IconNames.MistakesIcon, title: 'Mistakes Icon' },
    { name: IconNames.TipsIcon, title: 'Tips Icon' },
    { name: IconNames.CircleLeftSlideIcon, title: 'Circle Left Slide Icon' },
    { name: IconNames.CircleRightSlideIcon, title: 'Circle Right Slide Icon' },
    { name: IconNames.ClosePopupIcon, title: 'Close Popup Icon' },
    { name: IconNames.GreenRightIcon, title: 'Green Right Icon' },
    { name: IconNames.RedRightIcon, title: 'red Right Icon' },
    { name: IconNames.BulletsIcon, title: 'Bullets Icon' },
    { name: IconNames.InclusionIcon, title: 'Inclusion Icon' },
    { name: IconNames.EllipseIcon, title: 'Ellipse Icon' },
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
