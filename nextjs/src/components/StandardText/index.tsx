import React from 'react'
import { IApiStandardTextComponent } from 'src/services/api/types'
import Link from 'src/theme/Link'

const StandardText: React.FunctionComponent<IApiStandardTextComponent> = ({
    title,
    cta,
}: IApiStandardTextComponent) => {
    return (
        <div>
            <h1>{title}</h1>
            {cta && (
                <Link href={cta.link} className="cta">
                    <span>{cta.text}</span>
                </Link>
            )}
        </div>
    )
}
export default StandardText
