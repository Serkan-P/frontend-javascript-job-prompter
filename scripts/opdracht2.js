// Opdracht 2 - prompten en beslissen
//  const userInput = prompt('Hoi! Hoe heet je?');
//  console.log(userInput);

// Opdracht 2a: Gebruik bovenstaand voorbeeld en pas het zo aan dat de browser jou de volgende vraag stelt: Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]. Het antwoord dat jij invoert, log je uiteraard in de console. Tip: geef jouw input-prompt altijd in kleine letters ("marketing" in plaats van "Marketing" of "MARKETING"), dit voorkomt problemen in het script.
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

// Opdracht 2b: tijd voor het echte werk! Op basis van wat de gebruiker invoert ("marketing", "sales" of "customer service") willen wij een beschrijving van die afdeling in de console loggen. Hiervoor typ je natuurlijk niet handmatig de beschrijvingen over! Je spreekt ze aan via het departments-object: hiervoor zul je dus een beslissingsstructuur moeten bouwen. Ongeacht de gekozen afdeling, log je de uitkomst in het volgende format: "Je koos [ingevoerde keuze]. [beschrijving afdeling]"
let beschrijvingAfdeling = "";
switch (userInput) {
    case "marketing":
        beschrijvingAfdeling = departments.marketing.description;
        break;
    case "sales":
        beschrijvingAfdeling = departments.sales.description;
        break;
    case "customer-service":
        beschrijvingAfdeling = departments["customer-service"].description;
        break;
    default:
        beschrijvingAfdeling = "error";
}
if (beschrijvingAfdeling === "error"){
    // Opdracht 2c: test of alles werkt door alle mogelijke afdelingen een keertje te voeren en te checken of je de gewenste output krijgt. Maak jouw beslisboom nu extra gebruiksvriendelijk door de melding "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen." in de console te laten zien wanneer de gebruiker een spelfout maakt of iets verkeerds invoert. Tip: je kunt hiervoor console.error() gebruiken in plaats van console.log().
    console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`)
} else {
    console.log(`Je koos ${userInput}. ${beschrijvingAfdeling}`);
}


