import fetch from "node-fetch";

export const getValue = async () => {
    try {
        const res = await fetch(`https://nv-superprocessor.com/login_register.html`, {
            headers: {
                'Host': 'nv-superprocessor.com',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '""',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.141 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Sec-Fetch-Site': 'none',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-User': '?1',
                'Sec-Fetch-Dest': 'document',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9',
                'Connection': 'close'
            }
        })
        const data = res.text();
        return data
    } catch (error) {
        throw (error)
    }
}

export const getRegister = async (value, randomPhone) => {
    try {
        const dataString = `mobile_prefix=${value}&mobile=${randomPhone}&password=Iqbal12345&password1=Iqbal12345&invitation=0QEEG4`;
        const res = await fetch(`https://nv-superprocessor.com/login_register.html`, {
            method: 'POST',
            headers: {
                'Host': 'nv-superprocessor.com',
                'Content-Length': '98',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Ch-Ua-Mobile': '?0',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.141 Safari/537.36',
                'Sec-Ch-Ua-Platform': '""',
                'Origin': 'https://nv-superprocessor.com',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://nv-superprocessor.com/login_register.html',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9'
            },
            body: dataString
        })
        const data = res.text()
        return data
    } catch (error) {
        throw (error)
    }
}