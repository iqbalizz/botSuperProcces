import fetch from "node-fetch";
import chalk from "chalk";
import readlineSync from "readline-sync";
import { getValue, getRegister } from "./utils/httpRequest.js";

//!FUNCTION GET BEETWEEN
function getBetween(string, start, end) {
    string = " " + string;
    let ini = string.indexOf(start);
    if (ini === -1) return "";
    ini += start.length;
    let len = string.indexOf(end, ini) - ini;
    return string.substr(ini, len);
}
//!GENERATE RANDOM NOMER HP
function generateRandomPhoneNumber() {
    const randomPhoneNumber = `08${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`;
    return randomPhoneNumber;
}
//!FUNCTION DELAY
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    //!Generate Random Phone
    const phoneNumber = generateRandomPhoneNumber();
    const inputJumlahRefferal = readlineSync.question(`[?] Masukkan Jumlah Refferal : `);

    for (let i = 0; i < inputJumlahRefferal; i++) {
        const resultGetValue = await getValue();
        const value = getBetween(resultGetValue, 'name="mobile_prefix" value="', '"');
        const registerAcc = await getRegister(value, phoneNumber);
        // Mengurai string JSON
        const parsedResult = JSON.parse(registerAcc);
        const getStatusRegister = getBetween(parsedResult, '{"msg":"', '"')
        if (getStatusRegister === `login berhasil`) {
            console.log(`[!] ${chalk.yellow(`Refferal ke-${i + 1}`)}`)
            console.log(`[!] ${chalk.green(`Succes Registrasi`)}`)
        } else {
            console.log(`[!] ${chalk.red(`Gagal Registrasi`)}`)
        }
        await delay(2000)
    }

})();