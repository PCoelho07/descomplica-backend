
export class Email {
    protected address: string

    public constructor(address: string) {
        if (!this.validate(address)) {
            throw new Error(`E-mail ${address} is not valid!`)
        }

        this.address = address
    }

    private validate(address: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(address)
    }

    public toString(): string {
        return this.address
    }
}