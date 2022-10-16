// Assume that a BscScan account with API PRO exists and an API key is retrieved from that account
// API key below is taken from documentation
const API_KEY: string = "ETKHF7C3RWQA7F"
const SWTH_TOKEN_CONTRACT: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468"

// Retrieve list of token holders
fetch(`https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress=${SWTH_TOKEN_CONTRACT}&apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data.result)
    .then(((results) => {
        // Print holder addresses & quantity
        for (const result in results) {
            console.log(`${result["TokenHolderAddress"]} ${result["TokenHolderQuantity"]}`)
        }
    }));
