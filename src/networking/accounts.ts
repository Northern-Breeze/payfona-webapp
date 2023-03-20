import Axios from "./adaptor";

export class Accounts {
    static async getListedBanks(token: string) {
        return await Axios.get("/accounts/external-verified", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }
    static async createBankAccount(token: string, accountNumber: string, code: string) {
        return await Axios.post("/accounts", {
            bankCode: code,
            accountNumber: accountNumber,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
}