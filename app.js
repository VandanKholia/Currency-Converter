const dropdownFrom = document.getElementById("select-menu-from");
const dropdownTo = document.getElementById("select-menu-to");
const btn = document.querySelector("#btn");
const currFrom = document.querySelector(".from select");
const currTo = document.querySelector(".to select");
const API_KEY = 'my_api_key';

currency.forEach(item => {
    const option = document.createElement('option');
    option.value = item.code;
    option.text = item.name;
    if(option.value==="USD") {
        option.selected = "selected";
    }
    
    dropdownFrom.appendChild(option);
});
currency.forEach(item => {
    const option = document.createElement('option');
    option.value = item.code;
    option.text = item.name;
    if(option.value==="INR") {
        option.selected = "selected";
    }
    dropdownTo.appendChild(option);

});
currFrom.addEventListener("change", () => updateFlag(currFrom));
currTo.addEventListener("change", () => updateFlag(currTo));

const updateFlag = (element) => {
    let currCode = element.value;
    let currencyObj = currency.find(item => item.code === currCode);
    let countryCode = currencyObj.flag;
    console.log(countryCode);
    let newImgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let newImg = element.parentElement.querySelector("img");
    newImg.src = newImgSrc;
};


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amountVal === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = "1";
    }
    const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currFrom.value}`;
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    let rate = data.conversion_rates[currTo.value];
    
    let finalAmount = amountVal * rate;
    let exchangeRate = document.querySelector(".msg");
    exchangeRate.innerText = `${amountVal} ${currFrom.value}  =  ${finalAmount} ${currTo.value}`;
}
btn.addEventListener("click", async (event) => {
    event.preventDefault();
    updateExchangeRate();
})


const currency = [
    { name: "Indian Rupee", code: "INR", flag: "IN" },
    { name: "United States Dollar", code: "USD", flag: "US" },
    { name: "British Pound Sterling", code: "GBP", flag: "GB" },
    { name: "Canadian Dollar", code: "CAD", flag: "CA" },
    { name: "United Arab Emirates Dirham", code: "AED", flag: "AE" },
    { name: "Afghan Afghani", code: "AFN", flag: "AF" },
    { name: "Albanian Lek", code: "ALL", flag: "AL" },
    { name: "Armenian Dram", code: "AMD", flag: "AM" },
    { name: "Netherlands Antillean Guilder", code: "ANG", flag: "AN" },
    { name: "Angolan Kwanza", code: "AOA", flag: "AO" },
    { name: "Argentine Peso", code: "ARS", flag: "AR" },
    { name: "Australian Dollar", code: "AUD", flag: "AU" },
    { name: "Aruban Florin", code: "AWG", flag: "AW" },
    { name: "Azerbaijani Manat", code: "AZN", flag: "AZ" },
    { name: "Bahamian Dollar", code: "BSD", flag: "BS" },
    { name: "Bahraini Dinar", code: "BHD", flag: "BH" },
    { name: "Bangladeshi Taka", code: "BDT", flag: "BD" },
    { name: "Barbadian Dollar", code: "BBD", flag: "BB" },
    { name: "Belarusian Ruble", code: "BYN", flag: "BY" },
    { name: "Belize Dollar", code: "BZD", flag: "BZ" },
    { name: "Bermudian Dollar", code: "BMD", flag: "BM" },
    { name: "Bhutanese Ngultrum", code: "BTN", flag: "BT" },
    { name: "Bolivian Boliviano", code: "BOB", flag: "BO" },
    { name: "Bosnia-Herzegovina Convertible Mark", code: "BAM", flag: "BA" },
    { name: "Botswana Pula", code: "BWP", flag: "BW" },
    { name: "Brazilian Real", code: "BRL", flag: "BR" },
    { name: "Brunei Dollar", code: "BND", flag: "BN" },
    { name: "Bulgarian Lev", code: "BGN", flag: "BG" },
    { name: "Burundian Franc", code: "BIF", flag: "BI" },
    { name: "Cambodian Riel", code: "KHR", flag: "KH" },
    { name: "Cape Verdean Escudo", code: "CVE", flag: "CV" },
    { name: "Cayman Islands Dollar", code: "KYD", flag: "KY" },
    { name: "Central African CFA Franc", code: "XAF", flag: "CF" },
    { name: "Chilean Peso", code: "CLP", flag: "CL" },
    { name: "Chinese Yuan", code: "CNY", flag: "CN" },
    { name: "Colombian Peso", code: "COP", flag: "CO" },
    { name: "Comorian Franc", code: "KMF", flag: "KM" },
    { name: "Congolese Franc", code: "CDF", flag: "CG" },
    { name: "Costa Rican Colón", code: "CRC", flag: "CR" },
    { name: "Croatian Kuna", code: "HRK", flag: "HR" },
    { name: "Cuban Peso", code: "CUP", flag: "CU" },
    { name: "Czech Koruna", code: "CZK", flag: "CZ" },
    { name: "Danish Krone", code: "DKK", flag: "DK" },
    { name: "Djiboutian Franc", code: "DJF", flag: "DJ" },
    { name: "Dominican Peso", code: "DOP", flag: "DO" },
    { name: "East Caribbean Dollar", code: "XCD", flag: "VC" },
    { name: "Egyptian Pound", code: "EGP", flag: "EG" },
    { name: "Eritrean Nakfa", code: "ERN", flag: "ER" },
    { name: "Estonian Kroon", code: "EEK", flag: "EE" },
    { name: "Ethiopian Birr", code: "ETB", flag: "ET" },
    { name: "Fijian Dollar", code: "FJD", flag: "FJ" },
    { name: "Gambian Dalasi", code: "GMD", flag: "GM" },
    { name: "Georgian Lari", code: "GEL", flag: "GE" },
    { name: "Ghanaian Cedi", code: "GHS", flag: "GH" },
    { name: "Gibraltar Pound", code: "GIP", flag: "GI" },
    { name: "Guatemalan Quetzal", code: "GTQ", flag: "GT" },
    { name: "Guinean Franc", code: "GNF", flag: "GN" },
    { name: "Guyanaese Dollar", code: "GYD", flag: "GY" },
    { name: "Haitian Gourde", code: "HTG", flag: "HT" },
    { name: "Honduran Lempira", code: "HNL", flag: "HN" },
    { name: "Hong Kong Dollar", code: "HKD", flag: "HK" },
    { name: "Hungarian Forint", code: "HUF", flag: "HU" },
    { name: "Icelandic Króna", code: "ISK", flag: "IS" },
    { name: "Indonesian Rupiah", code: "IDR", flag: "ID" },
    { name: "Iranian Rial", code: "IRR", flag: "IR" },
    { name: "Iraqi Dinar", code: "IQD", flag: "IQ" },
    { name: "Israeli New Shekel", code: "ILS", flag: "IL" },
    { name: "Jamaican Dollar", code: "JMD", flag: "JM" },
    { name: "Japanese Yen", code: "JPY", flag: "JP" },
    { name: "Jordanian Dinar", code: "JOD", flag: "JO" },
    { name: "Kazakhstani Tenge", code: "KZT", flag: "KZ" },
    { name: "Kenyan Shilling", code: "KES", flag: "KE" },
    { name: "Kuwaiti Dinar", code: "KWD", flag: "KW" },
    { name: "Kyrgyzstani Som", code: "KGS", flag: "KG" },
    { name: "Lao Kip", code: "LAK", flag: "LA" },
    { name: "Latvian Lats", code: "LVL", flag: "LV" },
    { name: "Lebanese Pound", code: "LBP", flag: "LB" },
    { name: "Lesotho Loti", code: "LSL", flag: "LS" },
    { name: "Liberian Dollar", code: "LRD", flag: "LR" },
    { name: "Libyan Dinar", code: "LYD", flag: "LY" },
    { name: "Lithuanian Litas", code: "LTL", flag: "LT" },
    { name: "Macanese Pataca", code: "MOP", flag: "MO" },
    { name: "Malagasy Ariary", code: "MGA", flag: "MG" },
    { name: "Malawian Kwacha", code: "MWK", flag: "MW" },
    { name: "Malaysian Ringgit", code: "MYR", flag: "MY" },
    { name: "Maldivian Rufiyaa", code: "MVR", flag: "MV" },
    { name: "Mauritian Rupee", code: "MUR", flag: "MU" },
    { name: "Mexican Peso", code: "MXN", flag: "MX" },
    { name: "Moldovan Leu", code: "MDL", flag: "MD" },
    { name: "Mongolian Tugrik", code: "MNT", flag: "MN" },
    { name: "Moroccan Dirham", code: "MAD", flag: "MA" },
    { name: "Mozambican Metical", code: "MZN", flag: "MZ" },
    { name: "Myanmar Kyat", code: "MMK", flag: "MM" },
    { name: "Namibian Dollar", code: "NAD", flag: "NA" },
    { name: "Nauruan Dollar", code: "AUD", flag: "NR" },
    { name: "Nepalese Rupee", code: "NPR", flag: "NP" },
    { name: "Netherlands Antillean Guilder", code: "ANG", flag: "AN" },
    { name: "New Zealand Dollar", code: "NZD", flag: "NZ" },
    { name: "Nicaraguan Córdoba", code: "NIO", flag: "NI" },
    { name: "Nigerian Naira", code: "NGN", flag: "NG" },
    { name: "North Korean Won", code: "KPW", flag: "KP" },
    { name: "Norwegian Krone", code: "NOK", flag: "NO" },
    { name: "Omani Rial", code: "OMR", flag: "OM" },
    { name: "Pakistani Rupee", code: "PKR", flag: "PK" },
    { name: "Papua New Guinean Kina", code: "PGK", flag: "PG" },
    { name: "Paraguayan Guarani", code: "PYG", flag: "PY" },
    { name: "Peruvian Nuevo Sol", code: "PEN", flag: "PE" },
    { name: "Philippine Peso", code: "PHP", flag: "PH" },
    { name: "Polish Zloty", code: "PLN", flag: "PL" },
    { name: "Portuguese Escudo", code: "PTE", flag: "PT" },
    { name: "Qatari Rial", code: "QAR", flag: "QA" },
    { name: "Romanian Leu", code: "RON", flag: "RO" },
    { name: "Russian Ruble", code: "RUB", flag: "RU" },
    { name: "Rwandan Franc", code: "RWF", flag: "RW" },
    { name: "Saint Helena Pound", code: "SHP", flag: "SH" },
    { name: "Samoan Tala", code: "WST", flag: "WS" },
    { name: "San Marinese Lira", code: "SML", flag: "SM" },
    { name: "Saudi Riyal", code: "SAR", flag: "SA" },
    { name: "Scottish Pound", code: "GBP", flag: "GB" },
    { name: "Serbian Dinar", code: "RSD", flag: "RS" },
    { name: "Seychellois Rupee", code: "SCR", flag: "SC" },
    { name: "Sierra Leonean Leone", code: "SLL", flag: "SL" },
    { name: "Singapore Dollar", code: "SGD", flag: "SG" },
    { name: "Solomon Islands Dollar", code: "SBD", flag: "SB" },
    { name: "Somali Shilling", code: "SOS", flag: "SO" },
    { name: "South African Rand", code: "ZAR", flag: "ZA" },
    { name: "South Korean Won", code: "KRW", flag: "KR" },
    { name: "South Sudanese Pound", code: "SSP", flag: "SS" },
    { name: "Spanish Peseta", code: "ESP", flag: "ES" },
    { name: "Sri Lankan Rupee", code: "LKR", flag: "LK" },
    { name: "Sudanese Pound", code: "SDG", flag: "SD" },
    { name: "Surinamese Dollar", code: "SRD", flag: "SR" },
    { name: "Swedish Krona", code: "SEK", flag: "SE" },
    { name: "Swiss Franc", code: "CHF", flag: "CH" },
    { name: "Syrian Pound", code: "SYP", flag: "SY" },
    { name: "Tajikistani Somoni", code: "TJS", flag: "TJ" },
    { name: "Tanzanian Shilling", code: "TZS", flag: "TZ" },
    { name: "Thai Baht", code: "THB", flag: "TH" },
    { name: "Tongan Paʻanga", code: "TOP", flag: "TO" },
    { name: "Trinidad and Tobago Dollar", code: "TTD", flag: "TT" },
    { name: "Tunisian Dinar", code: "TND", flag: "TN" },
    { name: "Turkish Lira", code: "TRY", flag: "TR" },
    { name: "Turkmenistani Manat", code: "TMT", flag: "TM" },
    { name: "Ugandan Shilling", code: "UGX", flag: "UG" },
    { name: "Ukrainian Hryvnia", code: "UAH", flag: "UA" },
    { name: "Uruguayan Peso", code: "UYU", flag: "UY" },
    { name: "Uzbekistani Som", code: "UZS", flag: "UZ" },
    { name: "Vanuatu Vatu", code: "VUV", flag: "VU" },
    { name: "Venezuelan Bolívar", code: "VES", flag: "VE" },
    { name: "Vietnamese Dong", code: "VND", flag: "VN" },
    { name: "Yemeni Rial", code: "YER", flag: "YE" },
    { name: "Zambian Kwacha", code: "ZMW", flag: "ZM" },
    { name: "Zimbabwean Dollar", code: "ZWL", flag: "ZW" }
];



















