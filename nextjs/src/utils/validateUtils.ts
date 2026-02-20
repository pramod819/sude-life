export function checkEmail(email: string) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(email)
}

export const validateName = (name: string): boolean =>
    /^[A-Za-zÀ-ÿ\s]+$/.test(name)

export const validateEmail = (email: string): boolean =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/i.test(email)

export const validatePhoneNumber = (phone: string): boolean =>
    /^[+]?(\d{1,3})?[-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/.test(phone) &&
    phone.replace(/\D/g, '').length === 10

export const validateMessage = (message: string): boolean =>
    /^[^<>{}"']+$/.test(message)
