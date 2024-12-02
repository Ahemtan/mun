import jwt from "jsonwebtoken";

export const generateTokens = (userId) => {

    const accessToken = jwt.sign({userId}, process.env.ACESS_TOKEN_SECRECT, {
        expiresIn: "15m"
    })
    
    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRECT, {
        expiresIn: "7d"
    })

    return { accessToken, refreshToken }
} 

export const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000
    })
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}