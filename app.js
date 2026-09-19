/* ==========================================================================
   Danmarks Julemarkeder - Main Application Logic
   ========================================================================== */

// Master Dataset over Julemarkeder i hele Danmark
const DANISH_MARKETS = [
  {
    id: "tivoli-cph",
    name: "Jul i Tivoli",
    region: "Hovedstaden",
    city: "København",
    address: "Vesterbrogade 3, 1630 København V",
    coords: [55.6737, 12.5683],
    category: "By & Centrum",
    entryType: "billet",
    entryPrice: "Entré fra 160 kr. (Børn 3-7 år: 70 kr.)",
    dates: "15. november – 31. december 2026",
    hours: "Søn-Tors: 11:00 – 22:00 | Fre-Lør: 11:00 – 23:00",
    rating: 4.9,
    reviewsCount: 142,
    icon: "fa-star",
    highlights: [
      "Tusindvis af glitrende julelys og dekorationer",
      "Klassiske juleboder med gløgg, æbleskiver og pandekager",
      "Julemanden i Pantomimeteatret",
      "Forlystelser og magisk sne-landskab"
    ],
    reviews: [
      { author: "Sofie M.", rating: 5, date: "2. dec 2025", text: "Den absolut mest magiske juleoplevelse i Danmark! Lysene ved søen er helt uforlignelige." },
      { author: "Christian K.", rating: 5, date: "10. dec 2025", text: "Skøn julestemning for både børn og voksne. Boderne har fremragende hvid gløgg." }
    ],
    description: "Tivoli forvandles hvert år til et eventyrligt vinterland. Oplev de smukt pyntede haveanlæg, duften af brændte mandler og karruseller under stjernerne."
  },
  {
    id: "hojbro-plads",
    name: "Julemarked Højbro Plads",
    region: "Hovedstaden",
    city: "København",
    address: "Højbro Plads, 1200 København K",
    coords: [55.6782, 12.5796],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "17. november – 21. december 2026",
    hours: "Man-Ons: 11:00–19:00 | Tors-Lør: 11:00–21:00 | Søn: 12:00–19:00",
    rating: 4.7,
    reviewsCount: 88,
    icon: "fa-tree",
    highlights: [
      "Tysk-inspirerede hyggelige træhytter",
      "Egte tysk bratwurst og Glühwein",
      "Julemandens kareter og børnevenlige aktiviteter",
      "Placeret lige ved Strøget og Christiansborg"
    ],
    reviews: [
      { author: "Lene H.", rating: 5, date: "28. nov 2025", text: "Fantastisk atmosfære midt i København! Rigtig god julestemning og gode pølser." }
    ],
    description: "Et af Københavns mest klassiske julemarkeder med traditionelle bjælkehytter, tyske specialiteter og et hav af kunsthåndværkere."
  },
  {
    id: "nyhavn-marked",
    name: "Nyhavn Julemarked",
    region: "Hovedstaden",
    city: "København",
    address: "Nyhavn, 1051 København K",
    coords: [55.6800, 12.5895],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "14. november – 22. december 2026",
    hours: "Dagligt kl. 10:00 – 19:00 (Madboder til 20:00)",
    rating: 4.6,
    reviewsCount: 104,
    icon: "fa-anchor",
    highlights: [
      "Juleboder opstillet direkte langs den historiske kanal",
      "Skibsjul og lyskæder på træskibene",
      "Traditionel dansk julemad og varm kakao",
      "Unik fotolokation ved de farverige huse"
    ],
    reviews: [
      { author: "Mikkel S.", rating: 4, date: "5. dec 2025", text: "Fantastiske kulisser ved kanalen. Kan varmt anbefale at smage den lokale æbleskive." }
    ],
    description: "Nyd den idylliske julestemning langs Nyhavns historiske kanal, hvor boderne tilbyder alt fra uldvarer til søde julegodter."
  },
  {
    id: "den-gamle-by",
    name: "Jul i Den Gamle By",
    region: "Jylland",
    city: "Aarhus",
    address: "Viborgvej 2, 8000 Aarhus C",
    coords: [56.1587, 10.1916],
    category: "Historisk",
    entryType: "billet",
    entryPrice: "Voksne: 190 kr. | Børn under 18: Gratis",
    dates: "21. november – 3. januar 2026",
    hours: "Dagligt kl. 10:00 – 17:00 (Udvalgte aftener til 18:00)",
    rating: 4.9,
    reviewsCount: 165,
    icon: "fa-scroll",
    highlights: [
      "Oplev 400 års danske juletraditioner",
      "Historisk pyntede stuer fra 1600-tallet til 1970'erne",
      "Hestevogne, lirekasser og udklædte beboere",
      "Nisseloftet og historiske bagerier med vaniljekranse"
    ],
    reviews: [
      { author: "Mette & Jens", rating: 5, date: "1. dec 2025", text: "Den mest autentiske jul i Danmark! Det føles som at træde direkte ind i et juleeventyr." }
    ],
    description: "Rejs gennem tiden og oplev, hvordan danskerne har fejret jul gennem fire århundreder i Danmarks berømte friluftsmuseum."
  },
  {
    id: "ridehuset-aarhus",
    name: "Aarhus Julemarked i Ridehuset",
    region: "Jylland",
    city: "Aarhus",
    address: "Vester Allé 1, 8000 Aarhus C",
    coords: [56.1528, 10.2030],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 20. december 2026",
    hours: "Dagligt kl. 12:00 – 18:00 (Weekender 10:00 – 17:00)",
    rating: 4.8,
    reviewsCount: 76,
    icon: "fa-palette",
    highlights: [
      "Over 85 uafhængige kunsthåndværkere og designere",
      "Indendørs varme i det smukke historiske Ridehus",
      "Unikke håndlavede julegaver, keramik og smykker",
      "Hjemmelavede kager og duftende gløgg"
    ],
    reviews: [
      { author: "Camilla R.", rating: 5, date: "6. dec 2025", text: "Aarhus' bedste indendørs julemarked. Her finder man altid de mest unikke gaver." }
    ],
    description: "Et mekka for elskere af kunsthåndværk og unika-design i varme rammer i det centrale Aarhus."
  },
  {
    id: "friheden-aarhus",
    name: "Jul i Tivoli Friheden",
    region: "Jylland",
    city: "Aarhus",
    address: "Skovbrynet 5, 8000 Aarhus C",
    coords: [56.1378, 10.1994],
    category: "By & Centrum",
    entryType: "billet",
    entryPrice: "Entré fra 150 kr.",
    dates: "14. november – 30. december 2026",
    hours: "Weekender & udvalgte hverdage kl. 13:00 – 20:00",
    rating: 4.7,
    reviewsCount: 92,
    icon: "fa-gift",
    highlights: [
      "Danmarks højeste juletræ (det 70m høje sky-tower)",
      "Over 16 km lysguirlander og magisk lystunnel",
      "Købstadsby med juleboder og skøjtebane",
      "Julemandens værksted"
    ],
    reviews: [
      { author: "Kasper T.", rating: 5, date: "14. dec 2025", text: "Lysene er helt fantastiske! Skøjtebanen midt i parken fuldender oplevelsen." }
    ],
    description: "Tivoli Friheden omdannes til et spektakulært lyslandskab med millioner af julelys, forlystelser og hyggelige julehuse."
  },
  {
    id: "hc-andersen-odense",
    name: "Eventyrligt H.C. Andersen Julemarked",
    region: "Fyn",
    city: "Odense",
    address: "Sortebrødre Torv, 5000 Odense C",
    coords: [55.3976, 10.3920],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "5.–6. dec & 12.–13. dec 2026 (Adventsweekender)",
    hours: "Lørdage 10:00 – 18:00 | Søndage 10:00 – 17:00",
    rating: 4.9,
    reviewsCount: 118,
    icon: "fa-hat-wizard",
    highlights: [
      "Eventyrlig stemning som på H.C. Andersens tid",
      "Gøglere, lirekasser, korsang og historiske figurer",
      "Boder med fynske specialiteter, uld og honningkager",
      "Prydet historisk bydel med toppede brosten"
    ],
    reviews: [
      { author: "Hanne B.", rating: 5, date: "7. dec 2025", text: "Det mest stemningsfulde julemarked! Det føles præcis som at træde ind i Svovlstikken." }
    ],
    description: "Oplev Odenses gamle bydel omdannet til et 1800-tals eventyrmarked fyldt med nostalgi, underholdning og fynsk hygge."
  },
  {
    id: "egeskov-slot",
    name: "Egeskov Slot Julemarked",
    region: "Fyn",
    city: "Kværndrup",
    address: "Egeskov Gade 18, 5750 Kværndrup",
    coords: [55.1762, 10.4895],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 110 kr. | Børn (4-12 år): 60 kr.",
    dates: "Weekender i nov. og dec. 2026 (7.-8. nov, 14.-15. nov, 21.-22. nov, 28.-29. nov, 5.-6. dec)",
    hours: "Kl. 10:00 – 17:00",
    rating: 4.9,
    reviewsCount: 130,
    icon: "fa-chess-rook",
    highlights: [
      "Fyns største julemarked med over 110 boder",
      "Udstillingsbygninger og veteransamlinger pyntet op",
      "Nisseskattejagt for børnene i haven",
      "Lækre lokale fynske delikatesser og gløgg"
    ],
    reviews: [
      { author: "Christina P.", rating: 5, date: "15. nov 2025", text: "Helt uforligneligt julemarked på slottet! Udbuddet af boder er kæmpestort." }
    ],
    description: "Det prisbelønnede Egeskov Slot slår dørene op til Fyns største julemarked i de stemningsfulde udstillingshaller og den smukke park."
  },
  {
    id: "storms-pakhus",
    name: "Storms Pakhus Julemarked",
    region: "Fyn",
    city: "Odense",
    address: "Lerchesgade 4, 5000 Odense C",
    coords: [55.4055, 10.3855],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28.–29. november & 5.–6. december 2026",
    hours: "Kl. 11:00 – 17:00 (Street food åben til sent)",
    rating: 4.6,
    reviewsCount: 64,
    icon: "fa-utensils",
    highlights: [
      "Kombination af madsmedje, street food og juleboder",
      "Kreativt håndværk fra lokale fynske iværksættere",
      "Rå og hip pakhus-julestemning",
      "Specielle jule-cocktails og specialøl"
    ],
    reviews: [
      { author: "Tobias N.", rating: 4, date: "29. nov 2025", text: "Super hyggeligt at kombinere lækker street food med julegaveindkøb!" }
    ],
    description: "Odenses rå street food-pakhus byder indenfor til et uformelt og kreativt julemarked med masser af lækker mad og lokalt design."
  },
  {
    id: "aalborg-gammeltorv",
    name: "Aalborg Julemarked på Gammeltorv",
    region: "Jylland",
    city: "Aalborg",
    address: "Gammeltorv, 9000 Aalborg",
    coords: [57.0483, 9.9194],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré (Forlystelser kræver billet)",
    dates: "17. november – 23. december 2026",
    hours: "Man-Tors: 12:00–18:00 | Fre: 12:00–19:00 | Lør-Søn: 10:00–18:00",
    rating: 4.7,
    reviewsCount: 95,
    icon: "fa-ferris-wheel",
    highlights: [
      "Stort pariserhjul med udsigt over Aalborg",
      "Det lille juletog for børnene",
      "Nordjyske julespecialiteter, churros og gløgg",
      "Over 30 hyggelige julehytter midt på torvet"
    ],
    reviews: [
      { author: "Line M.", rating: 5, date: "3. dec 2025", text: "Nordjyllands bedste julestemning! Udsigten fra pariserhjulet over byen er magisk." }
    ],
    description: "Gammeltorv midt i Aalborg forvandles til en nordjysk juleby med duft af gran, brændte mandler og forlystelser for hele familien."
  },
  {
    id: "kronborg-slot",
    name: "Kronborg Slot Julemarked",
    region: "Hovedstaden",
    city: "Helsingør",
    address: "Kronborg 2, 3000 Helsingør",
    coords: [56.0385, 12.6218],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 95 kr. | Børn: 50 kr.",
    dates: "5.–6. dec, 12.–13. dec & 19.–20. dec 2026",
    hours: "Kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 112,
    icon: "fa-crown",
    highlights: [
      "Julemarked i de historiske renæssancesale og slotsgården",
      "Kvalitetsdesign, brugskunst og lækre delikatesser",
      "Korsang i slotskirken og børneværksteder",
      "Mød Julemanden i Kronborgs smukke omgivelser"
    ],
    reviews: [
      { author: "Søren K.", rating: 5, date: "13. dec 2025", text: "Fantastisk at opleve Kronborg pyntet op til jul. En ægte kongelig oplevelse!" }
    ],
    description: "Oplev et af Danmarks mest storslåede julemarkeder i Hamlets berømte renæssanceslot ved Øresund."
  },
  {
    id: "gavnoe-slot",
    name: "Jul på Gavnø Slot",
    region: "Hovedstaden",
    city: "Næstved",
    address: "Gavnø 2, 4700 Næstved",
    coords: [55.1914, 11.7058],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 100 kr. | Børn (4-12 år): 50 kr.",
    dates: "6.–8. november & 13.–15. november 2026",
    hours: "Kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 89,
    icon: "fa-castle",
    highlights: [
      "Danmarks største julemarked med over 150 stande",
      "Baronessens smukt pyntede slotsstuer",
      "Nisseskattejagt og ponyridning for børn",
      "Stort udvalg af julepynt, delikatesser og gaver"
    ],
    reviews: [
      { author: "Anette D.", rating: 5, date: "8. nov 2025", text: "Kommer her hvert eneste år! Det sætter altid min jul i gang på den skønneste måde." }
    ],
    description: "Markedsføres som Danmarks største julemarked i de eventyrlige rammer af Gavnø Slot og park på Sjælland."
  },
  {
    id: "borglum-kloster",
    name: "Børglum Kloster Julemarked",
    region: "Jylland",
    city: "Vrå (Nordjylland)",
    address: "Børglumklostervej 255, 9480 Vrå",
    coords: [57.3688, 9.8000],
    category: "Historisk",
    entryType: "billet",
    entryPrice: "Voksne: 100 kr. | Børn: 50 kr.",
    dates: "20.-22. nov, 27.-29. nov, 5.-6. dec & 12.-13. dec 2026",
    hours: "Kl. 10:00 – 17:00 (Tirsdag aftenåbning 24. nov)",
    rating: 4.9,
    reviewsCount: 78,
    icon: "fa-church",
    highlights: [
      "Adgang til klosterets private stuer (åbnes kun til jul)",
      "Kulisser fra tv-julekalenderen 'Ludvig & Julemanden'",
      "Stemningsfulde boder i den renoverede hestestald",
      "Smuk beliggenhed i det nordjyske landskab"
    ],
    reviews: [
      { author: "Morten L.", rating: 5, date: "22. nov 2025", text: "Det er fantastisk at se de private stuer og julekalenderens kulisser. Nordjyllands perle!" }
    ],
    description: "Eksklusivt julemarked i det berømte nordjyske kloster, hvor de private stuer pyntes og åbnes for offentligheden."
  },
  {
    id: "voergaard-slot",
    name: "Voergaard Slot Julemarked",
    region: "Jylland",
    city: "Dronninglund",
    address: "Voergaard 6, 9330 Dronninglund",
    coords: [57.2435, 10.3392],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 110 kr. | Børn: 50 kr.",
    dates: "27.–29. november & 4.–6. december 2026",
    hours: "Kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 62,
    icon: "fa-gem",
    highlights: [
      "Overdådigt pyntede renæssancesaloner af Bering Flowers",
      "Juleboder i den historiske ridehal",
      "Klassisk julemusik og underholdning",
      "Lækre nordjyske juledelikatesser"
    ],
    reviews: [
      { author: "Karen V.", rating: 5, date: "28. nov 2025", text: "Blomsterdekorationerne på slottet er helt betagende! Et sandt kunstværk." }
    ],
    description: "Et af Jyllands smukkeste renæssanceslotte omdannes til en overdådig juleudstilling fyldt med blomsterkunst og boder."
  },
  {
    id: "ribe-julemarked",
    name: "Ribe Julemarked",
    region: "Jylland",
    city: "Ribe",
    address: "Torvet, 6760 Ribe",
    coords: [55.3281, 8.7617],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Fredag-Søndag kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 82,
    icon: "fa-bell",
    highlights: [
      "Danmarks ældste by svøbt i klassisk julestemning",
      "Inspireret af Peters Jul med historiske aktiviteter",
      "Juleboder på Domkirketorvet",
      "Vægtergang i de gamle gader om aftenen"
    ],
    reviews: [
      { author: "Niels P.", rating: 5, date: "5. dec 2025", text: "At gå rundt ved Domkirken med gløgg i hånden i Danmarks ældste by kan noget helt særligt." }
    ],
    description: "I Danmarks ældste by danner Domkirken og de bindingsværksbelagte gader rammen om et nostalgisk og traditionelt julemarked."
  },
  {
    id: "smedjen-bornholm",
    name: "Julemarked i Smedjen i Tejn",
    region: "Bornholm",
    city: "Tejn / Bornholm",
    address: "Havnevej 18, 3770 Allinge (Tejn Havn)",
    coords: [55.2472, 14.8361],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "5.–6. dec, 12.–13. dec & 19.–20. dec 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.9,
    reviewsCount: 45,
    icon: "fa-cookie-bite",
    highlights: [
      "Indendørs rå kystjul i gamle industrihaller på Tejn Havn",
      "Bornholmske kunsthåndværkere og glaskunst",
      "Bornholmske julespecialiteter og færge-gløgg",
      "Varme ildsteder og rå maritim stemning"
    ],
    reviews: [
      { author: "Ida R.", rating: 5, date: "12. dec 2025", text: "Den mest unikke ø-jul! Kunsthåndværket fra de bornholmske kunstnere er i særklasse." }
    ],
    description: "Bornholms mest rå og stemningsfulde indendørs julemarked beliggende i den rustikke gamle smedje på Tejn Havn."
  },
  {
    id: "nexoe-bornholm",
    name: "Bornholms Julemarked i Nexø",
    region: "Bornholm",
    city: "Nexø / Bornholm",
    address: "Nexø Havn, 3730 Nexø",
    coords: [55.0624, 15.1311],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Fredag 15:00–19:00 | Lør-Søn 11:00–17:00",
    rating: 4.7,
    reviewsCount: 52,
    icon: "fa-fish",
    highlights: [
      "Hyggelige træhuse opstillet på Nexø Havn",
      "Julemandens ankomst med båd til havnen",
      "Lokalt bornholmsk røgeri, slik og juleøl",
      "Hyggelig ø-stemning for hele familien"
    ],
    reviews: [
      { author: "Jonas T.", rating: 5, date: "6. dec 2025", text: "Når Julemanden ankommer på skibet til havnen, er ungerne helt ellevilde!" }
    ],
    description: "Nexø Havn forvandles til en hyggelig bornholmsk juleby med havneudsigt, lokale delikatesser og masser af julehygge."
  },
  {
    id: "christiania-marked",
    name: "Christiania Julemarked",
    region: "Hovedstaden",
    city: "København",
    address: "Den Grå Hal, Refshalevej 2, 1436 København K",
    coords: [55.6743, 12.5975],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "5. december – 20. december 2026",
    hours: "Dagligt kl. 12:00 – 20:00",
    rating: 4.6,
    reviewsCount: 96,
    icon: "fa-guitar",
    highlights: [
      "Boheme-basar i Den Grå Hal",
      "Unikt håndlavet kunst, smykker, uldtøj og keramik",
      "Duft af orientalske krydderier, falafel og gløgg",
      "Levende musik og eksotisk julestemning"
    ],
    reviews: [
      { author: "Freja K.", rating: 5, date: "10. dec 2025", text: "Et helt anderledes og eksotisk julemarked. Skøn musik og fantastiske uldvarer." }
    ],
    description: "Københavns mest farverige og eksotiske julemarked i Den Grå Hal på Christiania med et kæmpe udvalg af unika kunsthåndværk."
  },
  {
    id: "julebyen-tonder",
    name: "Julebyen Tønder",
    region: "Jylland",
    city: "Tønder (Sønderjylland)",
    address: "Torvet, 6270 Tønder",
    coords: [54.9367, 8.8683],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "7. november – 23. december 2026",
    hours: "Man-Fre: 10:00–17:30 | Lør: 10:00–17:00 | Søn: 11:00–17:00",
    rating: 4.9,
    reviewsCount: 154,
    icon: "fa-sleigh",
    highlights: [
      "Danmarks berømte juleby med den flyvende Julemand over Torvet",
      "Det Gamle Apotek med over 1200 m² juleudstilling",
      "Sønderjyske julespecialiteter, kaffebord og kagemænd",
      "Romantiske lyskæder over de historiske gader"
    ],
    reviews: [
      { author: "Helle & Peter", rating: 5, date: "15. nov 2025", text: "Tønder er Danmarks ubestridte julehovedstad! Den flyvende julemand er et kæmpe hit hos børnene." }
    ],
    description: "Tønder forvandles hvert år til Danmarks måske mest kendte og stemningsfulde juleby med sønderjyske traditioner og den flyvende Julemand."
  },
  {
    id: "jul-nyborg",
    name: "Jul i den Gamle Kongeby",
    region: "Fyn",
    city: "Nyborg",
    address: "Torvet 1, 5800 Nyborg",
    coords: [55.3128, 10.7892],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "5.–6. december & 12.–13. december 2026",
    hours: "Lørdage 10:00 – 18:00 | Søndage 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 87,
    icon: "fa-shield-halberd",
    highlights: [
      "Historisk julemarked i Danmarks middelalderlige hovedstad",
      "Boder ved Nyborg Slot og Borgmestergården",
      "Middelalderlige optog, vægtere og korsang",
      "Lokale fynske delikatesser og varm mjød"
    ],
    reviews: [
      { author: "Bent A.", rating: 5, date: "6. dec 2025", text: "Fantastisk historisk ramme! Borgmestergårdens julestemning er helt i særklasse." }
    ],
    description: "Nyborg inviterer til historisk jul omkring Slottet og Torvet med korsang, traditioner og hyggelige markedsboder."
  },
  {
    id: "koldinghus-marked",
    name: "Koldinghus Julemarked",
    region: "Jylland",
    city: "Kolding",
    address: "Koldinghus 1, 6000 Kolding",
    coords: [55.4914, 9.4744],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 125 kr. | Børn under 18: Gratis",
    dates: "4. december – 6. december 2026",
    hours: "Fredag til Søndag kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 93,
    icon: "fa-dungeon",
    highlights: [
      "Eksklusivt julemarked i Kongesalen og slotsgården",
      "Over 60 udvalgte kunsthåndværkere og producenter",
      "Kgl. Hofleverandører og kvalitetsfødevarer",
      "Mød Julemanden i slottets historiske tårn"
    ],
    reviews: [
      { author: "Charlotte T.", rating: 5, date: "5. dec 2025", text: "Smukkeste julemarked på det gamle kongeslot. Udbuddet af lækre lækkerier og kunst er formidabelt." }
    ],
    description: "Det majestætiske Koldinghus danner rammen om et eksklusivt julemarked fyldt med slotsromantik, brugskunst og lækre delikatesser."
  },
  {
    id: "gisselfeld-kloster",
    name: "Gisselfeld Kloster Juletorv",
    region: "Hovedstaden",
    city: "Haslev / Sjælland",
    address: "Gisselfeldvej 3, 4690 Haslev",
    coords: [55.2861, 11.9689],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 100 kr. | Børn (6-12 år): 50 kr.",
    dates: "20.–22. november & 27.–29. november 2026",
    hours: "Fredage 15:00–20:00 | Lør-Søn 10:00–18:00",
    rating: 4.9,
    reviewsCount: 110,
    icon: "fa-tree",
    highlights: [
      "Et af Danmarks mest populære juletorve i slotsomgivelser",
      "Over 100 boder fordelt i Riddersalen, Herskabsstalden og teltbyen",
      "Mød Julemanden i den stemningsfulde slotspark",
      "Ponyridning, julemusik og brændte mandler"
    ],
    reviews: [
      { author: "Kirsten E.", rating: 5, date: "21. nov 2025", text: "Juletorvet på Gisselfeld er simpelthen så smukt pyntet op! Man kommer i den helt rette julestemning." }
    ],
    description: "Det renæssanceprægede Gisselfeld Kloster slår dørene op til et af Sjællands mest elskede juletorve med boder i riddersalen og parken."
  },
  {
    id: "esrum-kloster",
    name: "Esrum Kloster Julemarked",
    region: "Hovedstaden",
    city: "Græsted / Nordsjælland",
    address: "Klostergade 11, 3230 Græsted",
    coords: [56.0476, 12.3800],
    category: "Historisk",
    entryType: "billet",
    entryPrice: "Entré: 65 kr. (Børn under 18: Gratis)",
    dates: "28.–29. november & 5.–6. december 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 17:00",
    rating: 4.7,
    reviewsCount: 68,
    icon: "fa-cross",
    highlights: [
      "Tema: 'Håndens Arbejde' med fokus på kvalitetshåndværk",
      "Franske kloster-delikatesser, oste, vine og stærk sennep",
      "Julestemning i de gamle munkeceller og klostergården",
      "Kreative værksteder for børn"
    ],
    reviews: [
      { author: "Lars V.", rating: 5, date: "29. nov 2025", text: "Det franske marked og de klosterbryggede øl er fantastiske! En dejlig fredfyldt julestemning." }
    ],
    description: "Det middelalderlige Esrum Kloster i Nordsjælland byder på et stemningsfuldt julemarked med franske lækkerier, håndværk og klosterøl."
  },
  {
    id: "bernstorff-slot",
    name: "Bernstorff Slot Julemarked",
    region: "Hovedstaden",
    city: "Gentofte / København",
    address: "Jægersborg Allé 93, 2920 Charlottenlund",
    coords: [55.7578, 12.5539],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 100 kr. | Børn (4-12 år): 50 kr.",
    dates: "13.–15. november 2026",
    hours: "Fre: 15:00–20:00 | Lør: 10:00–18:00 | Søn: 10:00–17:00",
    rating: 4.7,
    reviewsCount: 75,
    icon: "fa-building-columns",
    highlights: [
      "Over 90 boder i slottets stuer og i opvarmede telte i parken",
      "Brugskunst, eksklusiv julepynt og mode",
      "Kaffesalon i slottets stuer og lækker gløgg",
      "Mød Julemanden og oplev juleunderholdning"
    ],
    reviews: [
      { author: "Maria N.", rating: 4, date: "14. nov 2025", text: "Meget elegant og stilfuldt julemarked i smukke omgivelser tæt på København." }
    ],
    description: "Det klassiske Bernstorff Slot nord for København åbner dørene for et stilfuldt og sanseligt julemarked fyldt med luksus og hygge."
  },
  {
    id: "kragerup-gods",
    name: "Kragerup Gods Julemarked",
    region: "Hovedstaden",
    city: "Ruds Vedby / Sjælland",
    address: "Kragerupgårdsvej 33, 4291 Ruds Vedby",
    coords: [55.5528, 11.3969],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 85 kr. | Børn (4-12 år): 40 kr.",
    dates: "14.–15. november 2026",
    hours: "Kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 81,
    icon: "fa-wheat-awn",
    highlights: [
      "Over 100 juleboder fordelt på det historiske gods",
      "Aktiviteter for hele familien i aktivitetsparken Go High",
      "Godsets egne delikatesser, vildt og gløgg",
      "Julemand og hestevognskørsel"
    ],
    reviews: [
      { author: "Henrik G.", rating: 5, date: "15. nov 2025", text: "Stort og flot tilrettelagt godsområde med noget for både store og små." }
    ],
    description: "Kragerup Gods byder velkommen til et traditionsrigt julemarked med mere end 100 stande i de hyggelige avlsbygninger og parken."
  },
  {
    id: "bakken-jul",
    name: "Jul på Bakken",
    region: "Hovedstaden",
    city: "Klampenborg",
    address: "Dyrehavsbakken 114, 2930 Klampenborg",
    coords: [55.7761, 12.5892],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré (Forlystelser kræver turpas)",
    dates: "Weekender fra 21. nov til 20. dec 2026",
    hours: "Lørdage & Søndage kl. 11:30 – 20:00",
    rating: 4.7,
    reviewsCount: 115,
    icon: "fa-holly-berry",
    highlights: [
      "Verdens ældste forlystelsespark i juleklæder",
      "Julemarked i Bakkens gader med julehytter",
      "Gratis skøjtebane foran Friluftsscenen",
      "Mød Pjerrot og Julemanden"
    ],
    reviews: [
      { author: "Camilla & Børn", rating: 5, date: "28. nov 2025", text: "Super hyggeligt at Bakken holder juleåbent! Skøjtebanen var et kæmpe hit hos ungerne." }
    ],
    description: "Dyrehavsbakken i Nordsjælland forvandles til en eventyrlig juleskov med forlystelser, julemarked og Pjerrot i julehumør."
  },
  {
    id: "holmegaard-vaerk",
    name: "Holmegaard Værk Design-Julemarked",
    region: "Hovedstaden",
    city: "Fensmark / Næstved",
    address: "Glasværksvej 55, 4684 Holmegaard",
    coords: [55.2794, 11.8219],
    category: "Kunst & Design",
    entryType: "billet",
    entryPrice: "Voksne: 90 kr. | Børn under 18: Gratis",
    dates: "7.–8. november & 14.–15. november 2026",
    hours: "Kl. 10:00 – 17:00",
    rating: 4.9,
    reviewsCount: 62,
    icon: "fa-wine-glass",
    highlights: [
      "Over 100 udstillere med dansk glas, keramik og design",
      "Pust din egen julekugle i det levende glasværksted",
      "Danmarks største samling af Holmegaard glas pyntet op",
      "Lækre madboder og varm chokolade"
    ],
    reviews: [
      { author: "Signe L.", rating: 5, date: "8. nov 2025", text: "At puste sin egen julekugle i glashytten var en fantastisk oplevelse! Et exceptionelt designmarked." }
    ],
    description: "Det historiske glassværk Holmegaard Værk danner rammen om et af Danmarks smukkeste kunst- og designjulemarkeder."
  },
  {
    id: "viborg-nytorv",
    name: "Viborg Julemarked på Nytorv",
    region: "Jylland",
    city: "Viborg",
    address: "Nytorv, 8800 Viborg",
    coords: [56.4503, 9.4081],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 23. december 2026",
    hours: "Man-Tors: 11:00–18:00 | Fre: 11:00–19:00 | Lør-Søn: 10:00–17:00",
    rating: 4.7,
    reviewsCount: 71,
    icon: "fa-sparkles",
    highlights: [
      "Smukke juleboder med kig til Domkirken",
      "Det store illuminerede juletræ på Nytorv",
      "Brændte mandler, varm gløgg og karrusel for børn",
      "Skøjtebane og juleoptog"
    ],
    reviews: [
      { author: "Anders B.", rating: 5, date: "3. dec 2025", text: "Midtjyllands hyggeligste juleby! Domkirkens klokker i baggrunden giver ren julestemning." }
    ],
    description: "Viborgs historiske midtby med Nytorv i spidsen pyntes op til et stemningsfuldt julemarked tæt på Viborg Domkirke."
  },
  {
    id: "maltfabrikken-ebeltoft",
    name: "Maltfabrikkens Julemarked",
    region: "Jylland",
    city: "Ebeltoft (Mols)",
    address: "Maltvej 4, 8400 Ebeltoft",
    coords: [56.1969, 10.6764],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "12.–13. december 2026",
    hours: "Lørdag & Søndage kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 49,
    icon: "fa-beer-mug-empty",
    highlights: [
      "Design- og kunsthåndværk i den restaurerede Maltfabrik",
      "Lokale kystproducenter, mikrobryg og lækkerier",
      "Kombiner med Ebeltofts gamle bindingsværksgader",
      "Julebageri og workshops for børn"
    ],
    reviews: [
      { author: "Maja K.", rating: 5, date: "13. dec 2025", text: "Lækkert moderne designmarked i de fedeste industri-rammer midt i Ebeltoft." }
    ],
    description: "Maltfabrikken i den idylliske kystby Ebeltoft slår dørene op til et sprudlende julemarked med fokus på unika design og lokale fødevarer."
  },
  {
    id: "skagen-kappelborg",
    name: "Skagen Julemarked på Kappelborg",
    region: "Jylland",
    city: "Skagen",
    address: "Skolevej 5, 9990 Skagen",
    coords: [57.7219, 10.5894],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28.–29. november 2026",
    hours: "Lørdag kl. 10:00 – 16:00 | Søndag kl. 11:00 – 15:00",
    rating: 4.8,
    reviewsCount: 41,
    icon: "fa-snowflake",
    highlights: [
      "Danmarks nordligste julemarked i Kulturhus Kappelborg",
      "Kunsthåndværkere fra Skagen og Vendsyssel",
      "Skagens-rav, keramik, uld og julefiskedekorationer",
      "Varm gløgg og kagemænd i caféen"
    ],
    reviews: [
      { author: "Poul Erik", rating: 5, date: "28. nov 2025", text: "Danmarks nordligste julemarked er absolut et besøg værd! Fantastisk rav- og keramik-kunst." }
    ],
    description: "Oplev Danmarks nordligste julemarked i Skagens kulturhus Kappelborg med skagboernes uforlignelige kunsthåndværk."
  },
  {
    id: "jul-krusmoelle",
    name: "Jul på Krusmølle",
    region: "Jylland",
    city: "Aabenraa (Sønderjylland)",
    address: "Krusmøllevej 35, 6200 Aabenraa",
    coords: [55.0069, 9.4794],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré (Parkering kan koste)",
    dates: "3. oktober – 23. december 2026",
    hours: "Dagligt kl. 10:00 – 18:00",
    rating: 4.9,
    reviewsCount: 168,
    icon: "fa-snowflake",
    highlights: [
      "Over 2000 m² eventyrlig juleudstilling på den gamle mølle",
      "Fejrer 40-års jubilæum som et af Sønderjyllands mest elskede steder",
      "Krusmølles berømte hjemmelavede æbleskiver og gløgg",
      "Gårdbutik med vildtspecialiteter og julepynt"
    ],
    reviews: [
      { author: "Kirsten & Ole", rating: 5, date: "12. nov 2025", text: "En sønderjysk juleklassiker! Æbleskiverne i den gamle møllesal er de bedste i landet." }
    ],
    description: "Krusmølle ved Aabenraa er en af Sønderjyllands største juleattraktioner med over 2000 m² julepyntede haller og historisk møllehygge."
  },
  {
    id: "soenderborg-slot",
    name: "Sønderborg Slot Julemarked",
    region: "Jylland",
    city: "Sønderborg (Sønderjylland)",
    address: "Sønderbro 1, 6400 Sønderborg",
    coords: [54.9072, 9.7894],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 95 kr. | Børn under 18: Gratis",
    dates: "4. december – 6. december 2026",
    hours: "Fredag 13:00–17:00 | Lør-Søn 10:00–17:00",
    rating: 4.8,
    reviewsCount: 94,
    icon: "fa-chess-king",
    highlights: [
      "Julemarked i Riddersalen og den historiske slotsgård",
      "Sønderjysk håndværk, strik, træskæring og honningkager",
      "Middelalder-korsang og historiske omvisninger",
      "Flot udsigt over Sønderborg Havn"
    ],
    reviews: [
      { author: "Inge M.", rating: 5, date: "5. dec 2025", text: "Meget smukt julemarked i Riddersalen! Der er en helt særlig stemning ved Als Sund." }
    ],
    description: "Det historiske Sønderborg Slot ved Als Sund byder på slotsjul med boder i de storslåede sale og slotsgården."
  },
  {
    id: "julehjertebyen-aabenraa",
    name: "Julehjertebyen i Aabenraa",
    region: "Jylland",
    city: "Aabenraa (Sønderjylland)",
    address: "Vægterpladsen, 6200 Aabenraa",
    coords: [55.0442, 9.4183],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "21. november – 23. december 2026",
    hours: "Dagligt kl. 11:00 – 17:00",
    rating: 4.9,
    reviewsCount: 102,
    icon: "fa-heart",
    highlights: [
      "Kopi af det gamle Aabenraa fra år 1800 i miniature-huse",
      "Gratis risengrød og saft til alle børn (og voksne mod donation)",
      "100% drevet af frivillige julehjerter",
      "Hyggelig veteran-banegård med juletog"
    ],
    reviews: [
      { author: "Peter K.", rating: 5, date: "3. dec 2025", text: "Et hjertevarmt initiativ i Aabenraa! Risengrøden i de små huse var et kæmpe lyspunkt." }
    ],
    description: "Julehjertebyen i Aabenraa er et hjertevarmt juleunivers bygget som kopi af byens huse fra 1800-tallet, drevet af frivillige."
  },
  {
    id: "christiansfeld-marked",
    name: "Christiansfeld Julemarked",
    region: "Jylland",
    city: "Christiansfeld (Sønderjylland)",
    address: "Nørregade 14, 6070 Christiansfeld",
    coords: [55.3564, 9.4828],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 88,
    icon: "fa-star",
    highlights: [
      "UNESCO Verdensarvsbyen pyntet med de berømte Christiansfelder-stjerner",
      "Boder ved Søstrehuset og Lindegade",
      "Friskbagte honningkage-hjerter fra Brødremenigheden",
      "Klassisk adventsmusik i Salshuset"
    ],
    reviews: [
      { author: "Elsebeth R.", rating: 5, date: "29. nov 2025", text: "Christiansfeld til jul er magisk. Honningkagerne og papirstjernerne i vinduerne gør det helt unikt." }
    ],
    description: "UNESCO-byen Christiansfeld svøbes i julestemning med papirstjerner i alle vinduer og duften af de berømte honningkager."
  },
  {
    id: "faengslet-horsens",
    name: "Jul på FÆNGSLET",
    region: "Jylland",
    city: "Horsens (nær Aarhus)",
    address: "Fussingsvej 8, 8700 Horsens",
    coords: [55.8711, 9.8361],
    category: "By & Centrum",
    entryType: "billet",
    entryPrice: "Voksne: 60 kr. | Børn under 12: Gratis",
    dates: "13.–15. november & 20.–22. november 2026",
    hours: "Fredag 15:00–20:00 | Lør-Søn 10:00–17:00",
    rating: 4.9,
    reviewsCount: 185,
    icon: "fa-key",
    highlights: [
      "Et af Danmarks største julemarkeder med over 200 boder",
      "Rå og unikke rammer i det nedlagte statsfængsel",
      "Nissebørn, juleparade og underholdning i Fængselsgården",
      "Kæmpe udvalg af kunsthåndværk, lækkerier og juletræer"
    ],
    reviews: [
      { author: "Morten & Louise", rating: 5, date: "14. nov 2025", text: "Helt fantastisk marked! Kontrasten mellem fængselsmurene og de varme julelys er uforlignelig." }
    ],
    description: "Det tidligere Horsens Statsfængsel forvandles til et gigantisk julemarked med over 200 boder og underholdning for tusindvis af gæster."
  },
  {
    id: "clausholm-slot",
    name: "Clausholm Slot Julemarked",
    region: "Jylland",
    city: "Hadsten / Favrskov (nær Aarhus)",
    address: "Clausholmvej 308, 8370 Hadsten",
    coords: [56.3853, 10.1694],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 90 kr. | Børn (6-12 år): 40 kr.",
    dates: "14.-15. nov, 21.-22. nov & 28.-29. nov 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 79,
    icon: "fa-crown",
    highlights: [
      "Barokslottets smukke stuer og herskabsstald pyntet op",
      "Eksklusive kunsthåndværkere, julepynt og blomsterdekoratører",
      "Slotskafé med hjemmebag og varm gløgg",
      "Juletræssalg i den historiske park"
    ],
    reviews: [
      { author: "Hanne K.", rating: 5, date: "22. nov 2025", text: "Smukkeste barokslot nær Aarhus. Pyntningen i stuerne er overdådig!" }
    ],
    description: "Et stenkast fra Aarhus slår det fredede barokslot Clausholm dørene op til julemarked i de historiske stuer og den gamle stald."
  },
  {
    id: "dragoer-julemarked",
    name: "Dragør Julemarked",
    region: "Hovedstaden",
    city: "Dragør (nær København / Amager)",
    address: "Badstuevælen 1, 2791 Dragør",
    coords: [55.5947, 12.6739],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "Weekender fra 21. nov til 20. dec 2026",
    hours: "Lørdage & Søndage kl. 12:00 – 17:00",
    rating: 4.9,
    reviewsCount: 140,
    icon: "fa-house-chimney-window",
    highlights: [
      "Kåret som et af Danmarks mest idylliske julemarkeder",
      "Kendt fra TV2's julekalender 'Tidsrejsen'",
      "Boder på torvet ved Badstuevælen i den gamle stråtækte by",
      "Nisselåge-kalender og optog gennem de gule huse"
    ],
    reviews: [
      { author: "Nanna P.", rating: 5, date: "6. dec 2025", text: "Skønneste idyl på Amager! Det føles som at træde ind i en gammeldags julekalender." }
    ],
    description: "I de historiske stræder i Dragør på Amager afholdes et af Danmarks mest idylliske og fotografiske julemarkeder."
  },
  {
    id: "zoo-koebenhavn-jul",
    name: "Jul i København ZOO",
    region: "Hovedstaden",
    city: "Frederiksberg / København",
    address: "Roskildevej 38, 2000 Frederiksberg",
    coords: [55.6722, 12.5317],
    category: "By & Centrum",
    entryType: "billet",
    entryPrice: "Voksne: 239 kr. | Børn (3-11 år): 139 kr.",
    dates: "20. november – 31. december 2026",
    hours: "Dagligt kl. 10:00 – 16:00 (Aftener til 20:00 i dec)",
    rating: 4.8,
    reviewsCount: 124,
    icon: "fa-hippo",
    highlights: [
      "Over 400.000 funklende julelys i havens træer og stier",
      "Mød Julemanden og rensdyrene i Hansens Værksted",
      "Juleboder med gløgg, pandekager og brændte mandler",
      "Julestemning blandt havens 4.000 dyr"
    ],
    reviews: [
      { author: "Mikkel & Børn", rating: 5, date: "12. dec 2025", text: "Børnene elskede at se rensdyrene og den store lystunnel. Københavns hyggeligste familiejul!" }
    ],
    description: "København Zoo på Frederiksberg svøbes i hundredtusindvis af julelys, madboder, renslæder og hygge for hele familien."
  },
  {
    id: "flids-julemarked",
    name: "Flids Kunst- & Designjulemarked",
    region: "Hovedstaden",
    city: "København (Nørrebro)",
    address: "Nørrebrohallen, Nørrebrogade 208, 2200 København N",
    coords: [55.6983, 12.5414],
    category: "Kunst & Design",
    entryType: "billet",
    entryPrice: "Entré: 40 kr. (Børn under 12: Gratis)",
    dates: "4. december – 6. december 2026",
    hours: "Fredag 14:00–19:00 | Lør-Søn 11:00–17:00",
    rating: 4.7,
    reviewsCount: 78,
    icon: "fa-palette",
    highlights: [
      "Over 140 uafhængige kunstnere, designere og kunsthåndværkere",
      "Bæredygtigt design, keramik, smykker, grafik og tekstiler",
      "Hip Nørrebro-atmosfære med kaffe og økologiske julegodter",
      "Perfekt til at finde unikke julegaver"
    ],
    reviews: [
      { author: "Julie T.", rating: 5, date: "5. dec 2025", text: "Det absolut bedste designmarked i København. Så mange fantastiske dygtige kunstnere!" }
    ],
    description: "Flids populære designmarked i Nørrebrohallen samler over 140 skandinaviske kunstnere og skabere til et mekka af unika."
  },
  {
    id: "randers-raadhustorvet",
    name: "Randers Julemarked på Rådhustorvet",
    region: "Jylland",
    city: "Randers (nær Aarhus)",
    address: "Rådhustorvet, 8900 Randers C",
    coords: [56.4606, 10.0369],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Tors: 12:00–18:00 | Fre: 12:00–19:00 | Lør-Søn: 10:00–16:00",
    rating: 4.6,
    reviewsCount: 65,
    icon: "fa-glass-water",
    highlights: [
      "Stor udendørs skøjtebane midt på Rådhustorvet",
      "Hyggelige træhytter med churros, gløgg og julepynt",
      "Mød Julemanden om lørdagen",
      "Flot lysinstallation i Randers' middelaldergader"
    ],
    reviews: [
      { author: "Simon H.", rating: 4, date: "10. dec 2025", text: "Skøjtebanen foran Rådhuset giver en super god stemning i Randers midtby." }
    ],
    description: "Randers Rådhustorv forvandles til en hyggelig juleby med udendørs skøjtebane, julehytter og lyskæder."
  },
  {
    id: "gram-slot",
    name: "Gram Slot Julemarked",
    region: "Jylland",
    city: "Gram (Sønderjylland)",
    address: "Slotsvej 54, 6510 Gram",
    coords: [55.2894, 9.0476],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 85 kr. | Børn (4-12 år): 40 kr.",
    dates: "14.-15. nov, 21.-22. nov & 28.-29. nov 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 17:00",
    rating: 4.9,
    reviewsCount: 172,
    icon: "fa-chess-rook",
    highlights: [
      "Stort julemarked i de historiske avlsbygninger, riddersalen og den smukke park",
      "Gram Slots egne økologiske mel- og mejeriprodukter samt vildtspecialiteter",
      "Over 100 udstillere med brugskunst, julepynt og delikatesser",
      "Nisseskattejagt og ponyridning i slotsparken"
    ],
    reviews: [
      { author: "Mette K.", rating: 5, date: "22. nov 2025", text: "Gram Slot er et fantastisk sted til jul! Boderne i den store herregårdslade er så stemningsfulde." }
    ],
    description: "Det historiske Gram Slot i Sønderjylland åbner dørene for et af regionens største julemarkeder med slotsjul, økologiske specialiteter og boder."
  },
  {
    id: "schackenborg-slot",
    name: "Schackenborg Slot Julemarked",
    region: "Jylland",
    city: "Møgeltønder (Sønderjylland)",
    address: "Schackenborg 1, 6270 Tønder",
    coords: [54.9356, 8.8055],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 95 kr. | Børn under 18: Gratis",
    dates: "28. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 10:00 – 16:30",
    rating: 4.8,
    reviewsCount: 89,
    icon: "fa-crown",
    highlights: [
      "Kongelig jul i Møgeltønders berømte slottedyb",
      "Slotsstuerne pyntet op efter kongelige juletraditioner",
      "Boder med sønderjyske lækkerier i slotsgården",
      "Kombiner med en tur i Møgeltønders toppede brostensgader"
    ],
    reviews: [
      { author: "Jørgen N.", rating: 5, date: "29. nov 2025", text: "At se Schackenborg pyntet op til jul er en magisk oplevelse. Møgeltønder gaden er som en drøm." }
    ],
    description: "Det smukke Schackenborg Slot i Møgeltønder byder velkommen til kgl. julestemning i slottets sale og slotsgården."
  },
  {
    id: "aeroeskoebing-julemarked",
    name: "Ærøskøbing Julemarked",
    region: "Fyn",
    city: "Ærøskøbing (Ærø)",
    address: "Torvet, 5970 Ærøskøbing",
    coords: [54.8883, 10.4075],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "Four lørdage fra 20. nov til 13. dec 2026",
    hours: "Lørdage kl. 10:00 – 16:00",
    rating: 4.9,
    reviewsCount: 110,
    icon: "fa-ship",
    highlights: [
      "Danmarks måske smukkeste eventyrlige 1700-tals ø-juleby",
      "Juleboder på det toppede brostenstorv ved det gamle sprøjtehus",
      "Ærøske julebryg, hvid gløgg og nybagte fynske kager",
      "Julestjerner i alle de bevarede bindingsværkshuse"
    ],
    reviews: [
      { author: "Stine & Lars", rating: 5, date: "5. dec 2025", text: "Ærøskøbing i december er som et H.C. Andersen eventyr! Man glemmer helt tid og sted." }
    ],
    description: "Kåret som en af Europas mest romantiske småbyer – Ærøskøbing forvandles i adventstiden til en uforlignelig ø-juleby."
  },
  {
    id: "ledreborg-slot",
    name: "Ledreborg Slot Julemarked",
    region: "Hovedstaden",
    city: "Lejre / Roskilde",
    address: "Ledreborg Allé 2, 4320 Lejre",
    coords: [55.6044, 11.9542],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 95 kr. | Børn under 12: Gratis",
    dates: "27. november – 29. november 2026",
    hours: "Fredag til Søndag kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 105,
    icon: "fa-shield",
    highlights: [
      "Smukke opvarmede lader og riddersal på det sjællandske barokslot",
      "Eksklusivt brugskunst, antikviteter og julespecialiteter",
      "Julekor i slottets private kapel",
      "Karetkørsel i barokhaven"
    ],
    reviews: [
      { author: "Birgitte S.", rating: 5, date: "28. nov 2025", text: "Fantastisk smukke rammer på Ledreborg! Barokhaven svøbt i julelys er utrolig flot." }
    ],
    description: "Det historiske barokslot Ledreborg ved Lejre og Roskilde byder velkommen til et af Sjællands mest stemningsfulde slot-julemarkeder."
  },
  {
    id: "roskilde-staendertorvet",
    name: "Roskilde Julemarked på Stændertorvet",
    region: "Hovedstaden",
    city: "Roskilde",
    address: "Stændertorvet, 4000 Roskilde",
    coords: [55.6417, 12.0806],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "5. december – 6. december 2026",
    hours: "Lørdag kl. 10:00 – 17:00 | Søndag kl. 10:00 – 16:00",
    rating: 4.7,
    reviewsCount: 82,
    icon: "fa-place-of-worship",
    highlights: [
      "Over 80-90 juleboder med kig direkte til Roskilde Domkirke",
      "Lokale sjællandske producenter, æbleskiver og varm cider",
      "Underholdning og korsang på torvescenen",
      "Mød Julemanden ved det gamle Rådhus"
    ],
    reviews: [
      { author: "Torben B.", rating: 4, date: "6. dec 2025", text: "Stændertorvet foran Domkirken danner en fantastisk kulisse for et hyggeligt weekend-julemarked." }
    ],
    description: "Roskildes centrale Stændertorv forvandles i december til en sprudlende julemarkedsplads ved foden af den berømte domkirke."
  },
  {
    id: "julebyen-fredericia",
    name: "Julebyen Fredericia & Madsby",
    region: "Jylland",
    city: "Fredericia",
    address: "Madsbyvej 1, 7000 Fredericia",
    coords: [55.5658, 9.7561],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026",
    hours: "Fre: 14:00–18:00 | Lør-Søn: 10:00–16:00",
    rating: 4.8,
    reviewsCount: 91,
    icon: "fa-star-of-life",
    highlights: [
      "Fredericia kåret som Årets Juleby med aktiviteter for hele familien",
      "Julemarked og nissesti i Madsby Legepark",
      "Togtur gennem de julepyntede voldgader",
      "Lysvandring langs Danmarks ældste fæstningsvold"
    ],
    reviews: [
      { author: "Maria & Mads", rating: 5, date: "29. nov 2025", text: "Madsby Legepark til jul var et kæmpe hit for børnene! Fantastisk lysshow og gratis entré." }
    ],
    description: "Fredericia fejrer julen som Årets Juleby med et kæmpe juleunivers i Madsby Legepark og lyskæder langs historiske voldanlæg."
  },
  {
    id: "gothenborg-silkeborg",
    name: "Gothenborg Økologisk Julemarked",
    region: "Jylland",
    city: "Silkeborg / Them",
    address: "Gothenborgvej 3, 8653 Them",
    coords: [56.1264, 9.5492],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28.–29. nov & 5.–6. dec 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.9,
    reviewsCount: 58,
    icon: "fa-feather",
    highlights: [
      "Søhøjlandets mest stemningsfulde økologiske landskabsmarked",
      "Berømte økologiske juleænder, gæs og landmandsdelikatesser",
      "Kunsthåndværk i den opvarmede stald",
      "Ponyridning og halmlegeplads for børn"
    ],
    reviews: [
      { author: "Gitte F.", rating: 5, date: "29. nov 2025", text: "Den mest autentiske og økologiske julestemning i Midtjylland! Maden og atmosfæren er i top." }
    ],
    description: "Det økologiske landbrug Gothenborg ved Silkeborg inviterer til et hjertevarmt landskabsjulemarked med lokalt håndværk og øko-delikatesser."
  },
  {
    id: "museum-jorn-marked",
    name: "Museum Jorn Julemarked",
    region: "Jylland",
    city: "Silkeborg",
    address: "Gudenåvej 7, 8600 Silkeborg",
    coords: [56.1625, 9.5606],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré til markedet",
    dates: "28. november 2026",
    hours: "Lørdag kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 44,
    icon: "fa-paintbrush",
    highlights: [
      "Eksklusivt kunst- og designjulemarked ved Silkeborg Langsø",
      "Over 40 udvalgte professionelle kunstnere og grafikere",
      "Keramik, malerier, smykker og unika-julepynt",
      "Kafé med søhøjlandets kager og gløgg"
    ],
    reviews: [
      { author: "Henrik M.", rating: 5, date: "28. nov 2025", text: "Et oplagt sted at finde ægte kunstjulegaver! Høj kvalitet på alle standene." }
    ],
    description: "Museum Jorn i Silkeborg åbner dørene for et unikt kunstnerisk julemarked i de naturskønne omgivelser ved Gudenåen."
  },
  {
    id: "haughus-gods",
    name: "Haughus Gods Julemarked",
    region: "Jylland",
    city: "Jelling / Vejle",
    address: "Vejlevej 50, 7300 Jelling",
    coords: [55.7600, 9.4211],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Entré: 40 kr. (Børn under 12: Gratis)",
    dates: "14.–15. november 2026",
    hours: "Lørdag & Søndag kl. 10:00 – 16:00",
    rating: 4.7,
    reviewsCount: 67,
    icon: "fa-gifts",
    highlights: [
      "Over 100 jule- og antikboder fordelt på godsets 3000 m²",
      "Antikviteter, retro-julepynt, uldvarer og lokalt håndværk",
      "Godsets æbleskiver og varme kakaokro",
      "Placeret midt i det historiske Jelling"
    ],
    reviews: [
      { author: "Bente T.", rating: 4, date: "15. nov 2025", text: "Skønt marked hvis man elsker gammeldags retro julepynt og godsklassikere!" }
    ],
    description: "Haughus Gods tæt på Vejle og Jelling forvandles til et kæmpe antik- og julemarked fyldt med nostalgi og hygge."
  },
  {
    id: "hillerod-frederiksborg",
    name: "Hillerød Julemarked v. Frederiksborg",
    region: "Hovedstaden",
    city: "Hillerød",
    address: "Torvet, 3400 Hillerød",
    coords: [55.9286, 12.3008],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Fredag til Søndag kl. 11:00 – 17:00",
    rating: 4.8,
    reviewsCount: 96,
    icon: "fa-monument",
    highlights: [
      "Eventyrlig jul på Torvet med direkte udsigt til Frederiksborg Slot over søen",
      "Julehytter med nordsjællandske specialiteter og brugskunst",
      "Historisk juletog og lysende skulpturer",
      "Kombiner med visit i Frederiksborg Slotskirke"
    ],
    reviews: [
      { author: "Charlotte B.", rating: 5, date: "5. dec 2025", text: "Udsigten til Frederiksborg Slot fra julemarkedet på Torvet er den mest romantiske i Nordsjælland!" }
    ],
    description: "Hillerød Torv svøbes i julestemning med hyggelige julehytter og en spektakulær udsigt til Frederiksborg Slot."
  },
  {
    id: "ringkoebing-torv",
    name: "Jul i Ringkøbing",
    region: "Jylland",
    city: "Ringkøbing (Vestjylland)",
    address: "Torvet, 6950 Ringkøbing",
    coords: [56.0906, 8.2442],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Fre: 10:00–17:30 | Lør-Søn: 10:00–16:00",
    rating: 4.8,
    reviewsCount: 88,
    icon: "fa-life-ring",
    highlights: [
      "Kåret som en af Danmarks hyggeligste købstæder ved Fjorden",
      "Skøjtebane og juleby på det stemningsfulde Torv",
      "Vægtergang i de gamle rødstensgader",
      "Vestjyske julespecialiteter og varm gløgg"
    ],
    reviews: [
      { author: "Bent & Hanne", rating: 5, date: "4. dec 2025", text: "Ringkøbing i julemåneden har den mest autentiske vestjyske hygge!" }
    ],
    description: "Ringkøbing ved Fjorden forvandles til en vestjysk juleby med skøjtebane på Torvet og vægtere i de historiske gader."
  },
  {
    id: "oester-skovgaard",
    name: "Øster Skovgård Julemarked",
    region: "Jylland",
    city: "Karup / Herning",
    address: "Sdr. Resenvej 25, 7470 Karup J",
    coords: [56.2417, 9.0742],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "17. oktober – 23. december 2026",
    hours: "Dagligt kl. 10:00 – 17:00",
    rating: 4.9,
    reviewsCount: 145,
    icon: "fa-tree",
    highlights: [
      "Kæmpe indendørs nisseland på over 2000 m²",
      "Stort udvalg af juletræer, pynt og nissehytter",
      "Den hyggelige julecafé med æbleskiver",
      "Gratis aktiviteter for børn"
    ],
    reviews: [
      { author: "Camilla R.", rating: 5, date: "10. nov 2025", text: "Danmarks største og hyggeligste julegårdsbutik! Ungerne vil aldrig hjem." }
    ],
    description: "Øster Skovgård ved Karup og Herning er et af Midtjyllands mest kendte nisselande og julecentrer med over 2000 m² juleeventyr."
  },
  {
    id: "blokhus-julemarked",
    name: "Jul i Blokhus",
    region: "Jylland",
    city: "Blokhus (Nordjylland)",
    address: "Torvet, 9492 Blokhus",
    coords: [57.2514, 9.5806],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "20. november – 30. december 2026",
    hours: "Dagligt kl. 11:00 – 17:00",
    rating: 4.8,
    reviewsCount: 112,
    icon: "fa-umbrella-beach",
    highlights: [
      "Nordjyllands største lysshow og skøjtebane på Blokhus Torv",
      "Julemarked i Kulturhuset med kunst og lækkerier",
      "Vesterhavsjul med duft af gran og brændte mandler",
      "Mød Julemanden i Sandskulpturparken"
    ],
    reviews: [
      { author: "Jonas V.", rating: 5, date: "12. dec 2025", text: "Lysshowet på Torvet i Blokhus er helt spektakulært! En fantastisk oplevelse ved kysten." }
    ],
    description: "Kystbyen Blokhus omdannes til et nordjysk juleeventyr med et kæmpe lysshow på Torvet, skøjtebane og juleboder."
  },
  {
    id: "loekken-julemarked",
    name: "Løkken Julemarked",
    region: "Jylland",
    city: "Løkken (Nordjylland)",
    address: "Torvet, 9480 Løkken",
    coords: [57.3719, 9.7153],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 11:00 – 16:00",
    rating: 4.7,
    reviewsCount: 63,
    icon: "fa-fish-fins",
    highlights: [
      "Maritim julestemning ved Vesterhavets klitter og fiskerbåde",
      "Hyggelige træhytter på Løkken Torv med nordjysk håndværk",
      "Røgeridelikatesser og stærk Vesterhavs-gløgg",
      "Julemanden ankommer på stranden"
    ],
    reviews: [
      { author: "Annette S.", rating: 5, date: "28. nov 2025", text: "Gåtur ved Vesterhavet fulgt af varm gløgg på Torvet i Løkken – det kan ikke blive bedre!" }
    ],
    description: "Løkken kombinerer den vilde Vesterhavsnatur med et stemningsfuldt julemarked på Torvet fyldt med fiskespecialiteter og hygge."
  },
  {
    id: "svaneke-julemarked",
    name: "Svaneke Julemarked",
    region: "Bornholm",
    city: "Svaneke (Bornholm)",
    address: "Svaneke Torv, 3740 Svaneke",
    coords: [55.1358, 15.1417],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "Adventsweekender i dec. 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.9,
    reviewsCount: 84,
    icon: "fa-candy-cane",
    highlights: [
      "Danmarks smukkeste købstad på Bornholm svøbt i julelys",
      "Svaneke Bolsjer, Svaneke Bryghus og lokal glaskunst",
      "Juleboder på Torvet ved det gamle Rådhus",
      "Karetkørsel i de skæve bindingsværksgader"
    ],
    reviews: [
      { author: "Pia & Henrik", rating: 5, date: "6. dec 2025", text: "Svaneke om vinteren er noget helt særligt. Bolsjerne og den bornholmske øl på Torvet er et must." }
    ],
    description: "Bornholms berømte kunstnerby Svaneke inviterer til ø-jul med boder på Torvet, nylavede bolsjer og lokalt kunsthåndværk."
  },
  {
    id: "selsoe-slot",
    name: "Jul på Selsø Slot",
    region: "Hovedstaden",
    city: "Skibby / Hornsherred",
    address: "Selsøvej 30, 4050 Skibby",
    coords: [55.7419, 11.9778],
    category: "Slot & Herregård",
    entryType: "billet",
    entryPrice: "Voksne: 75 kr. | Børn under 18: Gratis",
    dates: "28.–29. november 2026",
    hours: "Lørdag & Søndag kl. 11:00 – 16:00",
    rating: 4.8,
    reviewsCount: 52,
    icon: "fa-candle-holder",
    highlights: [
      "Herregården oplyses af 100-vis af levende vokslys (ingen elektrisk strøm!)",
      "Historiske juleboder i kælderens gamle slotskøkken",
      "Gammeldags julestemning som i 1700-tallet",
      "Hjemmebagte klejner og gløgg over åben ild"
    ],
    reviews: [
      { author: "Frederik L.", rating: 5, date: "29. nov 2025", text: "At opleve slottet kun oplyst af stearinlys i kælderen og salene er en helt uforglemmelig oplevelse." }
    ],
    description: "Det fredede renæssanceslot Selsø i Hornsherred byder på et unikt julemarked oplyst udelukkende af levende vokslys."
  },
  {
    id: "kerteminde-amanda",
    name: "Kerteminde Julemarked v. Amanda",
    region: "Fyn",
    city: "Kerteminde",
    address: "Torvet, 5300 Kerteminde",
    coords: [55.4497, 10.6586],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.7,
    reviewsCount: 60,
    icon: "fa-fish",
    highlights: [
      "Fynsk kystby-jul ved Fiskerihavnen og statuen Amanda",
      "Fiskefrikadeller, fynsk rygeost og æbleskiver",
      "Juleboder i Torvegade og ved Kirken",
      "Julemandens ankomst med båd på havnen"
    ],
    reviews: [
      { author: "Marianne E.", rating: 5, date: "5. dec 2025", text: "Kertemindes idylliske fiskerikvarter pyntet op til jul er utrolig hyggeligt." }
    ],
    description: "Kerteminde på Østfyn slår dørene op for maritim julestemning med juleboder på Torvet og julemandens skibsanløb."
  },
  {
    id: "faaborg-torv",
    name: "Faaborg Julemarked",
    region: "Fyn",
    city: "Faaborg (Sydfyn)",
    address: "Torvet, 5600 Faaborg",
    coords: [55.0950, 10.2419],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Fredage 15:00–18:00 | Lør-Søn 10:00–15:00",
    rating: 4.8,
    reviewsCount: 56,
    icon: "fa-bell",
    highlights: [
      "Julestemning ved det ikoniske Faaborg Klokketårn",
      "Vægtergang gennem Sydfyns bevarede bindingsværksstræder",
      "Sydfynske specialiteter, honning og uldstrik",
      "Julestue i den gamle Arrest"
    ],
    reviews: [
      { author: "Knud & Grethe", rating: 5, date: "28. nov 2025", text: "Faaborg er en af Sydfyns perler! Vægterne der synger i gaderne giver ægte julestemning." }
    ],
    description: "Sydfynske Faaborg danner rammen om et nostalgisk julemarked ved Klokketårnet med vægtersang og lokale lækkerier."
  },
  {
    id: "jul-paa-fanoe",
    name: "Jul på Fanø",
    region: "Jylland",
    city: "Nordby (Fanø)",
    address: "Hovedgaden, 6720 Fanø",
    coords: [55.4467, 8.4056],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 11:00 – 16:00",
    rating: 4.9,
    reviewsCount: 77,
    icon: "fa-anchor",
    highlights: [
      "Vadehavsjul i Nordby og Sønderho med fanniker-traditioner",
      "Fanø-kringle, juleøl fra Fanø Bryghus og lokalt håndværk",
      "Julemanden vækkes på Fanø Færgen",
      "Søfartshistorisk julestue"
    ],
    reviews: [
      { author: "Trine H.", rating: 5, date: "12. dec 2025", text: "Det at tage færgen over til Fanø og opleve julehytterne i Nordby er ren magi." }
    ],
    description: "Øen Fanø i Vadehavet byder på en helt unik maritim juleoplevelse med fanniker-dragter, Fanø-kringle og boder."
  },
  {
    id: "samsoe-tranebjerg",
    name: "Samsø Julemarked i Tranebjerg",
    region: "Fyn",
    city: "Tranebjerg (Samsø)",
    address: "Anton Rosen Huset, 8305 Samsø",
    coords: [55.8347, 10.5914],
    category: "Kunst & Design",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28.–29. nov & 5.–6. dec 2026",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 48,
    icon: "fa-leaf",
    highlights: [
      "Kattegat-øens julemarked i det smukke Anton Rosen Hus",
      "Samsøs berømte råvarer, havtorn, jule-snaps og grøntsager",
      "Strikvarer af Samsø-uld og lokalt kunsthåndværk",
      "Varm æblegløgg fra øens frugtplantager"
    ],
    reviews: [
      { author: "Helle S.", rating: 5, date: "29. nov 2025", text: "Den bedste ø-jul! Den varme havtorn-gløgg og de lokale grøntsagsspecialiteter er skønne." }
    ],
    description: "Samsøs kulturarvshus i Tranebjerg danner rammen om et bæredygtigt ø-julemarked fyldt med lokale råvarer og kunst."
  },
  {
    id: "nykoebing-falster-torv",
    name: "Nykøbing Falster Julemarked",
    region: "Hovedstaden",
    city: "Nykøbing Falster (Guldborgsund)",
    address: "Torvet, 4800 Nykøbing F",
    coords: [54.7686, 11.8683],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Tors: 11:00–17:30 | Fre: 11:00–18:00 | Lør-Søn: 10:00–15:00",
    rating: 4.7,
    reviewsCount: 72,
    icon: "fa-holly-berry",
    highlights: [
      "Falsters største juleby med skøjtebane på Torvet",
      "Juleboder med lokale sydhavsspecialiteter og julepynt",
      "Stor lysende julekugle til børnefotos",
      "Veteran-juletog gennem gågaden"
    ],
    reviews: [
      { author: "Jan C.", rating: 4, date: "10. dec 2025", text: "Super god stemning på Torvet i Nykøbing F! Skøjtebanen midt på pladsen samler hele byen." }
    ],
    description: "Nykøbing Falsters centrale Torv omdannes til Sydhavsøernes største julemarkedsplads med udendørs skøjtebane og hytter."
  },
  {
    id: "mariager-julemarked",
    name: "Mariager Julemarked",
    region: "Jylland",
    city: "Mariager (Nordjylland)",
    address: "Mariagerhallen, Erhvervsvej 2, 9550 Mariager",
    coords: [56.6497, 9.9769],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "29. november 2026",
    hours: "Søndag kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 54,
    icon: "fa-rose",
    highlights: [
      "Stort indendørs julemarked i 'Rosernes By'",
      "Over 90 boder med lokalt kunsthåndværk og julegodter",
      "Juleveterantog fra Mariager Station",
      "Juleunderholdning og tombola"
    ],
    reviews: [
      { author: "Grethe M.", rating: 5, date: "29. nov 2025", text: "At køre med veterantoget til Mariager og gå amok i juleboderne er en fantastisk tradition." }
    ],
    description: "Mariager ved Fjordbyerne afholder et kæmpe julemarked kombineret med veterantogskørsel i den historiske bindingsværksby."
  },
  {
    id: "holbaek-sortebroedretorv",
    name: "Holbæk Julemarked på Sortebrødretorv",
    region: "Hovedstaden",
    city: "Holbæk (Sjælland)",
    address: "Sortebrødretorv, 4300 Holbæk",
    coords: [55.7172, 11.7161],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Fredage 14:00–18:00 | Lør-Søn 10:00–16:00",
    rating: 4.7,
    reviewsCount: 68,
    icon: "fa-water",
    highlights: [
      "Nordvestsjællands største fjordby-julemarked",
      "Træhytter med lokale sjællandske delikatesser og træskærerarbejde",
      "Mød Julemanden ved det gamle Kloster",
      "Hestevognskørsel og korsang på Torvet"
    ],
    reviews: [
      { author: "Carsten P.", rating: 4, date: "5. dec 2025", text: "Dejligt julemarked tæt på Holbæk Fjord. Boderne har rigtig god gløgg og pandekager." }
    ],
    description: "Sortebrødretorv i Holbæk fyldes med julestemning, duft af gran og hyggelige markedsboder tæt ved Holbæk Fjord."
  },
  {
    id: "lemvig-havn-marked",
    name: "Lemvig Julemarked v. Havnen",
    region: "Jylland",
    city: "Lemvig (Vestjylland)",
    address: "Havnen, 7600 Lemvig",
    coords: [56.5486, 8.3094],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 10:00 – 16:00",
    rating: 4.8,
    reviewsCount: 50,
    icon: "fa-fish-fins",
    highlights: [
      "Julemarked i 'Bakker og Bølger' byens maritime havnekulisse",
      "Vestjyske fiskespecialiteter, røgvarer og Vesterhavs-juleøl",
      "Boder langs promenadevejen og Kirketorvet",
      "Mød Julemanden som ankommer med skib"
    ],
    reviews: [
      { author: "Klaus H.", rating: 5, date: "29. nov 2025", text: "Lemvig Havn til jul er utrolig idyllisk. Fiskedekorationerne og boderne er i særklasse." }
    ],
    description: "Vestjyske Lemvig byder på maritim julestemning ved Havnen og Kirketorvet med lokal fisk, juleøl og underholdning."
  },
  {
    id: "herning-torv-jul",
    name: "Jul i Herning på Torvet",
    region: "Jylland",
    city: "Herning (Midtjylland)",
    address: "Torvet, 7400 Herning",
    coords: [56.1364, 8.9767],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Tors: 11:00–18:00 | Fre: 11:00–19:00 | Lør-Søn: 10:00–16:00",
    rating: 4.7,
    reviewsCount: 79,
    icon: "fa-star",
    highlights: [
      "Midtjyllands moderne juleby med stor lystunnel og skøjtebane",
      "Julehytter med churros, gløgg, pandekager og brugskunst",
      "Julemandens værksted for børn",
      "Lysopsætning i hele gågadesystemet"
    ],
    reviews: [
      { author: "Dennis & Tina", rating: 5, date: "4. dec 2025", text: "Flot lysopsætning og skøjtebane på Torvet i Herning! Oplagt til juleindkøb." }
    ],
    description: "Herning Midtby forvandles i julemåneden til et moderne juleunivers på Torvet med skøjtebane, julehytter og lyskunst."
  },
  {
    id: "torvehallerne-kbh",
    name: "Jul i Torvehallerne CPH",
    region: "Hovedstaden",
    city: "København (K)",
    address: "Frederiksborggade 21, 1360 København K",
    coords: [55.6836, 12.5694],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis adgang",
    dates: "20. november – 23. december 2026",
    hours: "Man-Fre: 10:00–19:00 | Lør-Søn: 10:00–18:00",
    rating: 4.9,
    reviewsCount: 165,
    icon: "fa-basket-shopping",
    highlights: [
      "Københavns kulinariske julehjerte ved Nørreport",
      "Luksus gløgg, nybagte vaniljekranse og franske oste",
      "Duftende juletræssalg og udendørs madboder på Israels Plads",
      "Eksklusive jule-delikatesser fra over 60 stadeholdere"
    ],
    reviews: [
      { author: "Astrid W.", rating: 5, date: "10. dec 2025", text: "Københavns absolut bedste sted at smage ægte luksusgløgg og købe juleråvarer!" }
    ],
    description: "Torvehallerne CPH ved Nørreport svøbes i julestemning med madboder, luksusgløgg og madhåndværk i særklasse."
  },
  {
    id: "vaernedamsvej-marked",
    name: "Værnedamsvej Julemarked",
    region: "Hovedstaden",
    city: "Frederiksberg / Vesterbro",
    address: "Værnedamsvej, 1800 Frederiksberg",
    coords: [55.6731, 12.5519],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "5. december 2026",
    hours: "Lørdag kl. 10:00 – 17:00",
    rating: 4.8,
    reviewsCount: 94,
    icon: "fa-wine-bottle",
    highlights: [
      "Københavns 'Lille Paris' forvandles til et sprudlende gadejulemarked",
      "Franske vine, økologiske osteboder, uld og vintage",
      "Stemningsfulde caféer og varm chokolade langs Værnedamsvej",
      "Live fransk chanzonnier-musik og børneunderholdning"
    ],
    reviews: [
      { author: "Oliver & Marie", rating: 5, date: "5. dec 2025", text: "Værnedamsvejs julemarked har den bedste parisiske julestemning i København." }
    ],
    description: "Københavns og Frederiksbergs parisiske gade Værnedamsvej lukkes af til et intimt og populært julemarked fyldt med mad og vintage."
  },
  {
    id: "skjoldnaesholm-sporvejsmuseet",
    name: "Sporvejsmuseets Julemarked",
    region: "Hovedstaden",
    city: "Jystrup / Ringsted",
    address: "Koppenbjergvej 14, 4174 Jystrup Midtsjælland",
    coords: [55.5342, 11.8419],
    category: "Historisk",
    entryType: "billet",
    entryPrice: "Voksne: 120 kr. | Børn: 60 kr.",
    dates: "12.–13. december 2026",
    hours: "Lørdag & Søndag kl. 10:00 – 16:30",
    rating: 4.9,
    reviewsCount: 88,
    icon: "fa-train-tram",
    highlights: [
      "Kør med julepyntede historiske sporvogne i den vinterklædte skov",
      "Mød Julemanden som uddeler godteposer i sporvognen",
      "Juleboder i Remisen og cafe med varme æbleskiver",
      "Køb årets juletræ bragt med veterantog"
    ],
    reviews: [
      { author: "Fam. Frederiksen", rating: 5, date: "13. dec 2025", text: "Ungerne elskede turen med den pyntede gamle sporvogn. Helt unikt og nostalgisk!" }
    ],
    description: "Sporvejsmuseet Skjoldenæsholm byder på nostalgisk jul, hvor du kører med historiske julesporvogne gennem skoven til remisen."
  },
  {
    id: "frederikshavn-juleby",
    name: "Julebyen Frederikshavn",
    region: "Jylland",
    city: "Frederikshavn (Nordjylland)",
    address: "Rådhuspladsen, 9900 Frederikshavn",
    coords: [57.4411, 10.5361],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Fre: 10:00–17:30 | Lør-Søn: 10:00–16:00",
    rating: 4.7,
    reviewsCount: 74,
    icon: "fa-anchor",
    highlights: [
      "Vendsyssels hyggeligste havne- og købstadsjul",
      "Møllecentrets Juleby med træhytter og julemandens hytte",
      "Tordenskiold-parader og julemusik i gågaden",
      "Julemandens ankomst på Kattegat-havnen"
    ],
    reviews: [
      { author: "Kirsten V.", rating: 4, date: "4. dec 2025", text: "Dejlig julestemning i Frederikshavn midtby med mange hyggelige julehytter." }
    ],
    description: "Frederikshavn omdannes til en nordjysk juleby med træhytter på Rådhuspladsen, skøjteløb og maritim jul."
  },
  {
    id: "saeby-gammelby",
    name: "Jul i Gammelby Sæby",
    region: "Jylland",
    city: "Sæby (Nordjylland)",
    address: "Sæby Torv, 9300 Sæby",
    coords: [57.3333, 10.5186],
    category: "Historisk",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "28. november – 20. december 2026 (Adventsweekender)",
    hours: "Lørdage & Søndage kl. 10:00 – 15:00",
    rating: 4.8,
    reviewsCount: 57,
    icon: "fa-water",
    highlights: [
      "Gammeldags julestemning i Sæbys bevarede bindingsværksby ved Sæby Å",
      "Juleboder på Torvet og ved den gamle Vandmølle",
      "Møllegrød, varm gløgg og kunsthåndværk",
      "Nisseløb for børn"
    ],
    reviews: [
      { author: "Poul C.", rating: 5, date: "29. nov 2025", text: "Sæby er fantastisk hyggelig til jul. Vandmøllen og Å-stien svøbt i julelys er en perle." }
    ],
    description: "Sæby i Vendsyssel byder på nostalgisk julestemning ved Sæby Å, Vandmøllen og det historiske Torv."
  },
  {
    id: "thisted-store-torv",
    name: "Thisted Julemarked på Store Torv",
    region: "Jylland",
    city: "Thisted (Thy)",
    address: "Store Torv, 7700 Thisted",
    coords: [56.9567, 8.6917],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Fre: 10:00–17:30 | Lør-Søn: 10:00–15:00",
    rating: 4.7,
    reviewsCount: 66,
    icon: "fa-compass",
    highlights: [
      "Thy-regionens hyggeligste juleby ved Limfjorden",
      "Thy Øl-gløgg, vildtdelikatesser fra Nationalpark Thy og juletræer",
      "Mød Julemanden ved det gamle Rådhus",
      "Juleboder og lyskæder i hele gågadesystemet"
    ],
    reviews: [
      { author: "Jesper & Maja", rating: 5, date: "6. dec 2025", text: "Super hyggeligt marked i Thisted! Øl-gløggen fra Thisted Bryghus på Torvet skal prøves." }
    ],
    description: "Thisted i Thy svøbes i julestemning på Store Torv med råvarer fra Nationalpark Thy og hyggelige markedsboder."
  },
  {
    id: "holstebro-gaagaden",
    name: "Jul i Holstebro",
    region: "Jylland",
    city: "Holstebro (Nordvestjylland)",
    address: "Nørregade, 7500 Holstebro",
    coords: [56.3597, 8.6186],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Tors: 10:00–17:30 | Fre: 10:00–19:00 | Lør-Søn: 10:00–16:00",
    rating: 4.8,
    reviewsCount: 83,
    icon: "fa-masks-theater",
    highlights: [
      "Kunst- og julebyen Holstebro oplyses af spektakulære lysskulpturer",
      "Kultur- og juleboder langs Storåen og Nørregade gågade",
      "Teater- og nisseoptog ved Giacometti-statuen",
      "Julehytter med churros, gløgg og kunst"
    ],
    reviews: [
      { author: "Line K.", rating: 5, date: "11. dec 2025", text: "Holstebro har Danmarks smukkeste gågade-belysning! Kultur-indslagene i gaden fuldender det." }
    ],
    description: "Holstebro byder velkommen til kulturjul med lysskulpturer langs Storåen og julehytter i Danmarks førende handelsgågade."
  },
  {
    id: "nakskov-axeltorv",
    name: "Nakskov Julemarked på Axeltorv",
    region: "Hovedstaden",
    city: "Nakskov (Lolland)",
    address: "Axeltorv, 4900 Nakskov",
    coords: [54.8322, 11.1378],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Fre: 10:00–17:30 | Lør-Søn: 10:00–15:00",
    rating: 4.6,
    reviewsCount: 55,
    icon: "fa-ship",
    highlights: [
      "Lollands største torvejulemarked ved Nakskov Fjord",
      "Lokal sukker- og juleknas fra Lolland-Falsters fødevareproducenter",
      "Veterantog og julemandens ankomst til Havnen",
      "Hyggelige træhytter med brugskunst og gløgg"
    ],
    reviews: [
      { author: "Søren P.", rating: 4, date: "8. dec 2025", text: "Dejligt lokalt julemarked på Axeltorv i Nakskov. Ungerne elskede juletoget." }
    ],
    description: "Nakskov på VEST-Lolland inviterer til torvejul på Axeltorv med lokale lollandske specialiteter og hyggelige træhuse."
  },
  {
    id: "slagelse-raadhuspladsen",
    name: "Slagelse Julemarked",
    region: "Hovedstaden",
    city: "Slagelse (Vestsjælland)",
    address: "Rådhuspladsen, 4200 Slagelse",
    coords: [55.4028, 11.3542],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 23. december 2026",
    hours: "Man-Tors: 11:00–17:30 | Fre: 11:00–19:00 | Lør-Søn: 10:00–16:00",
    rating: 4.7,
    reviewsCount: 70,
    icon: "fa-city",
    highlights: [
      "Vestsjællands juleby på Rådhuspladsen",
      "Skøjtebane og juletræ foran Rådhuset",
      "Boder med lokale delikatesser, brændte mandler og gløgg",
      "Mød Julemanden hver weekend"
    ],
    reviews: [
      { author: "Trine & Jesper", rating: 4, date: "6. dec 2025", text: "God julestemning midt i Slagelse! Skøjtebanen er et rigtig godt samlingspunkt." }
    ],
    description: "Slagelse Rådhusplads forvandles i julemåneden til Vestsjællands julemarked med udendørs skøjtebane og julehytter."
  },
  {
    id: "middelfart-torv-jul",
    name: "Jul på Middelfart Torv",
    region: "Fyn",
    city: "Middelfart (nær Lillebælt)",
    address: "Torvet, 5500 Middelfart",
    coords: [55.5056, 9.7303],
    category: "By & Centrum",
    entryType: "gratis",
    entryPrice: "Gratis entré",
    dates: "27. november – 20. december 2026 (Adventsweekender)",
    hours: "Fredage 14:00–18:00 | Lør-Søn 10:00–16:00",
    rating: 4.8,
    reviewsCount: 62,
    icon: "fa-bridge",
    highlights: [
      "Jul ved Lillebælt med direkte udsigt til de illuminerede Lillebæltsbroer",
      "Juleboder med fynske og jyske delikatesser på Torvet",
      "Marsvin-jul og udstilling på Kulturøen",
      "Mød Julemanden ved Havnen"
    ],
    reviews: [
      { author: "Helle N.", rating: 5, date: "4. dec 2025", text: "Middelfart Torv ved Lillebælt er super smukt pyntet. Oplagt stop på turen over Fyn!" }
    ],
    description: "Middelfart ved Lillebælt byder velkommen til kystjul på Torvet og Kulturøen med havneudsigt og fynske lækkerier."
  }
];

// Application State
class JulemarkederApp {
  constructor() {
    this.markets = DANISH_MARKETS;
    this.favoriteIds = new Set(JSON.parse(localStorage.getItem('julemarkeder_favs') || '[]'));
    this.activeFilters = {
      search: '',
      region: 'all',
      category: 'all',
      entry: 'all',
      favoritesOnly: false
    };

    this.map = null;
    this.markersMap = new Map();
    this.selectedMarketId = null;

    this.initUI();
    this.initMap();
    this.initSnowEffect();
    this.render();
  }

  // Initialize UI Event Listeners
  initUI() {
    // Bi-directional Search inputs (Header Search & Sidebar Search)
    const searchInput = document.getElementById('search-input');
    const sidebarSearchInput = document.getElementById('sidebar-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const mobileSearchToggle = document.getElementById('mobile-search-toggle');
    const headerSearchContainer = document.getElementById('header-search-container');

    const handleSearchChange = (query) => {
      const cleanQuery = query.toLowerCase().trim();
      this.activeFilters.search = cleanQuery;

      if (searchInput && searchInput.value !== query) searchInput.value = query;
      if (sidebarSearchInput && sidebarSearchInput.value !== query) sidebarSearchInput.value = query;
      if (clearSearchBtn) clearSearchBtn.style.display = cleanQuery ? 'block' : 'none';

      this.render();
    };

    if (searchInput) {
      searchInput.addEventListener('input', (e) => handleSearchChange(e.target.value));
    }

    if (sidebarSearchInput) {
      sidebarSearchInput.addEventListener('input', (e) => handleSearchChange(e.target.value));
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => handleSearchChange(''));
    }

    if (mobileSearchToggle && headerSearchContainer) {
      mobileSearchToggle.addEventListener('click', () => {
        headerSearchContainer.classList.toggle('mobile-active');
        if (headerSearchContainer.classList.contains('mobile-active')) {
          searchInput.focus();
        }
      });
    }

    // Region Select
    document.getElementById('region-select').addEventListener('change', (e) => {
      this.activeFilters.region = e.target.value;
      this.render();
    });

    // Category Chips
    const categoryChips = document.getElementById('category-chips');
    categoryChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      categoryChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      this.activeFilters.category = chip.dataset.category;
      this.render();
    });

    // Entry Fee Toggle
    const entryToggles = document.querySelectorAll('.entry-filter-toggle .toggle-option');
    entryToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        entryToggles.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilters.entry = btn.dataset.entry;
        this.render();
      });
    });

    // Reset Filters Button
    const resetBtn = document.getElementById('reset-filters-btn');
    const noResultsReset = document.getElementById('no-results-reset');
    [resetBtn, noResultsReset].forEach(btn => {
      if (!btn) return;
      btn.addEventListener('click', () => this.resetFilters());
    });

    // Favorites Toggle Button
    const favToggleBtn = document.getElementById('favorites-toggle-btn');
    favToggleBtn.addEventListener('click', () => {
      this.activeFilters.favoritesOnly = !this.activeFilters.favoritesOnly;
      favToggleBtn.classList.toggle('active', this.activeFilters.favoritesOnly);
      this.render();
    });

    // Recenter Map Button
    document.getElementById('recenter-map-btn').addEventListener('click', () => {
      if (this.map) {
        this.map.setView([56.0, 11.0], 7);
      }
    });

    // Mobile Sidebar Drawer Toggle & FAB
    const mobileToggle = document.getElementById('mobile-sidebar-toggle');
    const mobileMapFab = document.getElementById('mobile-map-list-fab');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');

    const toggleSidebar = () => sidebar.classList.toggle('mobile-open');
    const closeSidebar = () => sidebar.classList.remove('mobile-open');

    if (mobileToggle) mobileToggle.addEventListener('click', toggleSidebar);
    if (mobileMapFab) mobileMapFab.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);

    // Modal Close Events
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalBackdrop = document.getElementById('market-modal');

    closeModalBtn.addEventListener('click', () => this.closeModal());
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) this.closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });

    this.updateFavCounter();
  }

  resetFilters() {
    this.activeFilters = {
      search: '',
      region: 'all',
      category: 'all',
      entry: 'all',
      favoritesOnly: false
    };

    const searchInput = document.getElementById('search-input');
    const sidebarSearchInput = document.getElementById('sidebar-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    if (searchInput) searchInput.value = '';
    if (sidebarSearchInput) sidebarSearchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';

    document.getElementById('region-select').value = 'all';

    const categoryChips = document.getElementById('category-chips');
    categoryChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    categoryChips.querySelector('[data-category="all"]').classList.add('active');

    const entryToggles = document.querySelectorAll('.entry-filter-toggle .toggle-option');
    entryToggles.forEach(b => b.classList.remove('active'));
    document.querySelector('.entry-filter-toggle [data-entry="all"]').classList.add('active');

    document.getElementById('favorites-toggle-btn').classList.remove('active');

    this.render();
    if (this.map) {
      this.map.setView([56.0, 11.0], 7);
    }
  }

  // Initialize Leaflet Map (Optimized for ultra-smooth mobile touch performance)
  initMap() {
    const isMobile = window.innerWidth <= 600;

    // Center of Denmark
    this.map = L.map('map', {
      zoomControl: false,
      preferCanvas: true,
      updateWhenZooming: false,
      updateWhenIdle: true,
      bounceAtZoomLimits: false,
      touchZoom: true,
      inertia: true,
      inertiaDeceleration: 3500,
      inertiaMaxSpeed: 1400,
      wheelDebounceTime: 40
    }).setView([56.0, 11.0], isMobile ? 6 : 7);

    // Pause heavy canvas animations while panning map on mobile
    this.map.on('movestart touchstart', () => { window.isMapPanning = true; });
    this.map.on('moveend touchend', () => { 
      setTimeout(() => { window.isMapPanning = false; }, 120);
    });

    // Add Zoom Control at top right
    L.control.zoom({ position: 'topright' }).addTo(this.map);

    // Esri World Dark Gray Canvas (Fully free, sleek dark aesthetic, no watermarks)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16,
      updateWhenIdle: true,
      keepBuffer: 3
    }).addTo(this.map);

    this.updateMapMarkers();
  }

  // Helper to determine pin CSS style based on category
  getCategoryClass(category) {
    if (category.includes('Slot')) return 'castle';
    if (category.includes('By')) return 'city';
    if (category.includes('Historisk')) return 'historic';
    return 'art';
  }

  // Create custom marker icons
  createCustomIcon(market) {
    const categoryClass = this.getCategoryClass(market.category);
    return L.divIcon({
      className: 'custom-pin-wrapper',
      html: `
        <div class="custom-pin ${categoryClass}" title="${market.name}">
          <i class="fa-solid ${market.icon}"></i>
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -34]
    });
  }

  // Update map markers according to filtered markets (Persistent layer optimization)
  updateMapMarkers() {
    if (!this.map) return;

    const filtered = new Set(this.getFilteredMarkets().map(m => m.id));

    this.markets.forEach(market => {
      let marker = this.markersMap.get(market.id);

      // Create marker once and reuse
      if (!marker) {
        const icon = this.createCustomIcon(market);
        marker = L.marker(market.coords, { icon: icon, riseOnHover: true });

        const popupHtml = `
          <div class="popup-card">
            <div class="popup-title">${market.name}</div>
            <div class="popup-sub"><i class="fa-solid fa-location-dot"></i> ${market.city}</div>
            <div class="rating-stars" style="margin-bottom: 0.6rem;">
              ★ ${market.rating} <span style="font-weight:400; color:var(--text-muted);">(${market.reviewsCount} anmeldelser)</span>
            </div>
            <button class="popup-btn" onclick="window.app.openMarketModal('${market.id}')">
              <i class="fa-solid fa-circle-info"></i> Se alle detaljer
            </button>
          </div>
        `;

        marker.bindPopup(popupHtml, { autoPan: true, autoPanPadding: [20, 20] });

        marker.on('click', () => {
          this.highlightCardInSidebar(market.id);
        });

        this.markersMap.set(market.id, marker);
      }

      // Toggle marker layer visibility based on filter without re-instantiating DOM elements
      if (filtered.has(market.id)) {
        if (!this.map.hasLayer(marker)) {
          this.map.addLayer(marker);
        }
      } else {
        if (this.map.hasLayer(marker)) {
          this.map.removeLayer(marker);
        }
      }
    });
  }

  // Get current filtered list
  getFilteredMarkets() {
    return this.markets.filter(m => {
      // Search
      if (this.activeFilters.search) {
        const query = this.activeFilters.search;
        const matchName = m.name.toLowerCase().includes(query);
        const matchCity = m.city.toLowerCase().includes(query);
        const matchDesc = m.description.toLowerCase().includes(query);
        const matchAddress = m.address.toLowerCase().includes(query);
        if (!matchName && !matchCity && !matchDesc && !matchAddress) return false;
      }

      // Region
      if (this.activeFilters.region !== 'all' && m.region !== this.activeFilters.region) {
        return false;
      }

      // Category
      if (this.activeFilters.category !== 'all' && m.category !== this.activeFilters.category) {
        return false;
      }

      // Entry
      if (this.activeFilters.entry !== 'all' && m.entryType !== this.activeFilters.entry) {
        return false;
      }

      // Favorites
      if (this.activeFilters.favoritesOnly && !this.favoriteIds.has(m.id)) {
        return false;
      }

      return true;
    });
  }

  // Main Render Loop
  render() {
    const filtered = this.getFilteredMarkets();
    const listContainer = document.getElementById('markets-list');
    const noResults = document.getElementById('no-results');
    const countBadge = document.getElementById('market-count-badge');

    countBadge.textContent = `Viser ${filtered.length} af ${this.markets.length} markeder`;

    if (filtered.length === 0) {
      listContainer.style.display = 'none';
      noResults.style.display = 'block';
    } else {
      listContainer.style.display = 'flex';
      noResults.style.display = 'none';

      listContainer.innerHTML = filtered.map(market => {
        const isFav = this.favoriteIds.has(market.id);
        const isSelected = this.selectedMarketId === market.id;

        return `
          <div class="market-card ${isSelected ? 'selected' : ''}" data-id="${market.id}">
            <div class="card-header">
              <h3 class="card-title">${market.name}</h3>
              <button class="fav-btn ${isFav ? 'is-fav' : ''}" onclick="event.stopPropagation(); window.app.toggleFavorite('${market.id}')" title="${isFav ? 'Fjern fra favoritter' : 'Tilføj til favoritter'}">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>
            
            <div class="card-meta">
              <span class="meta-item"><i class="fa-solid fa-location-dot"></i> ${market.city}</span>
              <span class="meta-item"><i class="fa-solid fa-calendar-days"></i> ${market.dates.split('2026')[0]}</span>
              <span class="rating-stars">★ ${market.rating}</span>
            </div>

            <div class="card-tags">
              <span class="tag-badge tag-category">${market.category}</span>
              <span class="tag-badge tag-entry ${market.entryType}">${market.entryType === 'gratis' ? '🎁 Gratis' : '🎟️ Billet'}</span>
            </div>
          </div>
        `;
      }).join('');

      // Add Card click handlers
      listContainer.querySelectorAll('.market-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.dataset.id;
          this.selectMarket(id);
        });
      });
    }

    this.updateMapMarkers();
  }

  // Select market (center map + highlight card + open modal option)
  selectMarket(id) {
    this.selectedMarketId = id;
    const market = this.markets.find(m => m.id === id);

    if (market && this.map) {
      this.map.flyTo(market.coords, 12, { duration: 1.2 });
      const marker = this.markersMap.get(id);
      if (marker) {
        marker.openPopup();
      }
    }

    // Auto-close sidebar on mobile after choosing a market
    if (window.innerWidth <= 900) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.classList.remove('mobile-open');
    }

    // Highlight card
    document.querySelectorAll('.market-card').forEach(card => {
      card.classList.toggle('selected', card.dataset.id === id);
    });
  }

  highlightCardInSidebar(id) {
    this.selectedMarketId = id;
    const card = document.querySelector(`.market-card[data-id="${id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      document.querySelectorAll('.market-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    }
  }

  // Toggle Favorite
  toggleFavorite(id) {
    if (this.favoriteIds.has(id)) {
      this.favoriteIds.delete(id);
    } else {
      this.favoriteIds.add(id);
    }

    localStorage.setItem('julemarkeder_favs', JSON.stringify(Array.from(this.favoriteIds)));
    this.updateFavCounter();
    this.render();
  }

  updateFavCounter() {
    const counter = document.getElementById('fav-counter');
    if (counter) {
      counter.textContent = this.favoriteIds.size;
    }
  }

  // Open Detailed Market Modal
  openMarketModal(id) {
    const market = this.markets.find(m => m.id === id);
    if (!market) return;

    const modal = document.getElementById('market-modal');
    const content = document.getElementById('modal-content');
    const isFav = this.favoriteIds.has(market.id);

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(market.name + ' ' + market.address)}`;

    content.innerHTML = `
      <div class="modal-hero">
        <div class="modal-hero-badge">
          <span class="tag-badge tag-category">${market.category}</span>
          <span class="tag-badge tag-entry ${market.entryType}">${market.entryType === 'gratis' ? '🎁 Gratis Entré' : '🎟️ Billetkrævet'}</span>
        </div>
        <h2 class="modal-title">${market.name}</h2>
      </div>

      <div class="modal-body-padding">
        <!-- Main Description -->
        <p style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">
          ${market.description}
        </p>

        <!-- Information Grid -->
        <div class="info-grid">
          <div class="info-box">
            <div class="info-box-title"><i class="fa-solid fa-location-dot"></i> Adresse & Lokation</div>
            <div class="info-box-content">
              <strong>${market.city}</strong><br>
              ${market.address}
              <br>
              <a href="${mapsUrl}" target="_blank" rel="noopener" class="maps-link-btn">
                <i class="fa-solid fa-diamond-turn-right"></i> Find vej i Google Maps
              </a>
            </div>
          </div>

          <div class="info-box">
            <div class="info-box-title"><i class="fa-solid fa-clock"></i> Åbningstider & Datoer</div>
            <div class="info-box-content">
              <strong><i class="fa-solid fa-calendar"></i> Datoer:</strong> ${market.dates}<br><br>
              <strong><i class="fa-solid fa-clock"></i> Tider:</strong> ${market.hours}
            </div>
          </div>

          <div class="info-box">
            <div class="info-box-title"><i class="fa-solid fa-ticket"></i> Entré & Priser</div>
            <div class="info-box-content">
              ${market.entryPrice}
            </div>
          </div>

          <div class="info-box">
            <div class="info-box-title"><i class="fa-solid fa-star"></i> Vurdering</div>
            <div class="info-box-content">
              <div class="rating-stars" style="font-size: 1.2rem; margin-bottom: 0.3rem;">
                ★ ${market.rating} / 5.0
              </div>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Baseret på ${market.reviewsCount} verificerede anmeldelser</span>
            </div>
          </div>
        </div>

        <!-- Highlights List -->
        <div class="info-box">
          <div class="info-box-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Højdepunkter & Oplevelser</div>
          <ul class="highlights-list">
            ${market.highlights.map(h => `<li><i class="fa-solid fa-snowflake"></i> ${h}</li>`).join('')}
          </ul>
        </div>

        <!-- Reviews Section -->
        <div class="reviews-section">
          <div class="reviews-header">
            <h3>💬 Anmeldelser fra Besøgende</h3>
            <span class="count-badge">${market.reviews.length} anmeldelser vist</span>
          </div>

          <div class="reviews-list">
            ${market.reviews.map(r => `
              <div class="review-item">
                <div class="review-meta">
                  <span class="review-author">${r.author}</span>
                  <div class="rating-stars">
                    ${'★'.repeat(r.rating)}<span style="color:var(--text-dim);">${'★'.repeat(5 - r.rating)}</span>
                    <span class="review-date">(${r.date})</span>
                  </div>
                </div>
                <div class="review-text">"${r.text}"</div>
              </div>
            `).join('')}
          </div>

          <!-- Add Review Form -->
          <div class="add-review-form">
            <h4>✍️ Skriv en anmeldelse af ${market.name}</h4>
            <form id="review-form" onsubmit="window.app.handleReviewSubmit(event, '${market.id}')">
              <div class="form-row">
                <input type="text" id="review-author" class="form-input" placeholder="Dit navn" required>
                <select id="review-rating" class="form-select" required>
                  <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                  <option value="4">⭐⭐⭐⭐ (4/5)</option>
                  <option value="3">⭐⭐⭐ (3/5)</option>
                  <option value="2">⭐⭐ (2/5)</option>
                  <option value="1">⭐ (1/5)</option>
                </select>
              </div>
              <div class="form-row">
                <textarea id="review-text" class="form-textarea" rows="2" placeholder="Skriv din oplevelse af julemarkedet..." required></textarea>
              </div>
              <button type="submit" class="submit-review-btn">
                <i class="fa-solid fa-paper-plane"></i> Indsend Anmeldelse
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }

  handleReviewSubmit(event, marketId) {
    event.preventDefault();
    const author = document.getElementById('review-author').value.trim();
    const rating = parseInt(document.getElementById('review-rating').value, 10);
    const text = document.getElementById('review-text').value.trim();

    if (!author || !text) return;

    const market = this.markets.find(m => m.id === marketId);
    if (market) {
      const today = new Date().toLocaleDateString('da-DK', { day: 'numeric', month: 'short', year: 'numeric' });
      market.reviews.unshift({
        author: author,
        rating: rating,
        date: today,
        text: text
      });
      market.reviewsCount += 1;

      // Recalculate average rating
      const sum = market.reviews.reduce((acc, r) => acc + r.rating, 0);
      market.rating = (sum / market.reviews.length).toFixed(1);

      // Re-open modal to refresh
      this.openMarketModal(marketId);
      this.render();
    }
  }

  closeModal() {
    const modal = document.getElementById('market-modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  // Particle Snow Animation (Performance optimized for mobile)
  initSnowEffect() {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let snowActive = true;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Reduce particle count on mobile to keep 60fps performance
    const isMobile = window.innerWidth < 600;
    const particlesCount = isMobile ? 30 : 75;
    const particles = Array.from({ length: particlesCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: Math.random() * 0.4 - 0.2,
      opacity: Math.random() * 0.6 + 0.3
    }));

    function renderSnow() {
      // If map is currently being dragged/panned on touch, skip snow render frame to avoid lag
      if (snowActive && !window.isMapPanning) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
          ctx.fill();

          p.y += p.speedY;
          p.x += p.speedX;

          if (p.y > height) {
            p.y = -10;
            p.x = Math.random() * width;
          }
          if (p.x > width) p.x = 0;
          if (p.x < 0) p.x = width;
        });
      } else if (!snowActive) {
        ctx.clearRect(0, 0, width, height);
      }

      requestAnimationFrame(renderSnow);
    }

    renderSnow();

    // Toggle Button
    const snowToggleBtn = document.getElementById('snow-toggle-btn');
    if (snowToggleBtn) {
      snowToggleBtn.addEventListener('click', () => {
        snowActive = !snowActive;
        snowToggleBtn.classList.toggle('active', snowActive);
        if (!snowActive) {
          ctx.clearRect(0, 0, width, height);
        }
      });
    }
  }
}

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  window.app = new JulemarkederApp();
});
