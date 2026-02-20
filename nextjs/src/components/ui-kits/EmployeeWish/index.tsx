import React from 'react'
import { Wrapper } from './styled'
import { IApiEmployeeWish } from 'src/services/api/types'
import { Typography } from '@material-ui/core'

const EmployeeWish: React.FC<IApiEmployeeWish> = ({
    navigationId,
    title,
    shortDescription,
    labelPack,
    employeeList,
}) => {
    const ComponentType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper id={navigationId}>
            <div className="container employeeWish">
                <div className="employeeWish-leftSection">
                    {title?.text && (
                        <Typography
                            variant="h2"
                            component={ComponentType}
                            className="title"
                        >
                            {title?.text}
                        </Typography>
                    )}

                    {shortDescription && (
                        <Typography variant="body1" component="p" className="">
                            {shortDescription}
                        </Typography>
                    )}
                </div>

                <div className="employeeWish-rightSection">
                    <table className="employeeWishTable">
                        <thead>
                            <tr>
                                {labelPack?.map(({ text }, headingIndex) => (
                                    <th key={headingIndex}>{text}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList?.map(
                                (
                                    { name, date, department, designation },
                                    employeeListIndex
                                ) => (
                                    <tr key={employeeListIndex}>
                                        <td>{name}</td>
                                        <td>{date}</td>
                                        <td>{department}</td>
                                        <td>{designation}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default EmployeeWish
