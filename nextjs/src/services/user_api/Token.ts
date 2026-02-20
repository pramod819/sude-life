import { sign, verify } from 'jsonwebtoken'
import appConfig from 'src/appConfig'
import * as base64 from 'base-64'

export interface TokenType {
    host: string
}

export async function getToken(): Promise<string> {
    const privateKey = base64.decode(appConfig.TOKEN_PRIVATE)

    const token: Promise<string> = new Promise<string>(
        (resolve: (value: string) => void) => {
            sign(
                { host: appConfig.FRONTEND_HOST, salt: appConfig.TOKEN_SALT },
                privateKey,
                { algorithm: 'RS256', expiresIn: '2m' },
                (err: string, token: string) => {
                    if (err) {
                        const result: string = ''
                        resolve(result)
                    } else {
                        resolve(token)
                    }
                }
            )
        }
    )

    return await token
}

export async function checkToken(token: IHeaderToken) {
    const splitToken = token.split(' ')

    if (2 !== splitToken.length) {
        return false
    }

    if ('Bearer' !== splitToken[0]) {
        return false
    }

    const authToken = splitToken[1]
    const publicKey = base64.decode(appConfig.TOKEN_PUBLIC)

    return new Promise((resolve: (value: boolean) => void) => {
        verify(
            authToken,
            publicKey,
            { host: appConfig.FRONTEND_HOST, salt: appConfig.TOKEN_SALT },
            (err: string) => {
                resolve(!err)
            }
        )
    })
}
