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

(async () => {
    //!Generate Random Phone
    const phoneNumber = generateRandomPhoneNumber();
    const resultGetValue = await getValue();
    const value = getBetween(resultGetValue, 'name="mobile_prefix" value="', '"');
    const inputJumlahRefferal = readlineSync.question(`[?] Masukkan Jumlah Refferal : `);

    for (let i = 0; i < inputJumlahRefferal; i++) {
        const registerAcc = await getRegister(value, phoneNumber);
        console.log(registerAcc)
        // Mengurai string JSON
        const parsedResult = JSON.parse(registerAcc);
        console.log(parsedResult)
        const getStatusRegister = getBetween(parsedResult, '{"msg":"', '"')
        console.log(getStatusRegister)

        // Selanjutnya, Anda dapat menggunakan nilai "msg" sesuai kebutuhan Anda
    }
    // //!Generate Random Phone
    // const phoneNumber = generateRandomPhoneNumber();
    // const resultGetValue = await getValue();
    // const value = getBetween(resultGetValue, 'name="mobile_prefix" value="', '"');
    // const inputJumlahRefferal = readlineSync.question(`[?] Masukkan Jumlah Refferal : `);
    // for (let i = 0; i < inputJumlahRefferal; i++) {
    //     const registerAcc = await getRegister(value, phoneNumber);
    //     console.log(registerAcc)
    //     // if (registerAcc === `"{\"msg\":\"login berhasil\",\"code\":1,\"url\":\"\\\/login_index.html\"}"`) {
    //     //     console.log(`[!] ${chalk.yellow(`Refferal ke-${i + 1}`)}`)
    //     //     console.log(`[!] ${chalk.green(`Succes Registrasi`)}`)
    //     // } else {
    //     //     console.log(`[!] ${chalk.red(`Gagal Registrasi`)}`)
    //     // }
    // }
})();