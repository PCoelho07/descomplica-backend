import { Email } from '@/domain/value-objects/email'

describe('Test Email value object', () => {
    it('with success', () => {
        const email: Email = new Email('test@hotmail.com')
        expect(email.toString()).toBe('test@hotmail.com')
    })

    it('throw exception when email is not valid', () => {

        const addressToTest = [
            'test',
            'test@hotmail.c',
            'test@hotmail',
            'test@.com'
        ]

        const testEmailValidation = (addressUnderTest: string) => {
            new Email(addressUnderTest)
        }

        addressToTest.forEach(item => {
            expect(() => {
                testEmailValidation(item)
            }).toThrow(`E-mail ${item} is not valid!`)
        })
    })
})