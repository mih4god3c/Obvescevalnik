# Dokument zahtev

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Občinski obveščevalnik |
| **Člani projektne skupine** | Miha Godec, Vid Potočnik, Matic Conradi, Lucijan Semprimožnik, Luka Kolar |
| **Kraj in datum**           | Ljubljana, 30.3.2022                                   |

## Povzetek projekta

Marsikdo izmed nas je v svoji občini že kdaj opazil napake, poškodbe/ovire na prometni infrastrukturi ali se spomnil ideje, ki bi izboljšala življenje vseh občanov, ampak ni vedel kako bi to sporočil ustrezni osebi znotraj občine.
Da bi omogočili boljšo komunikacijo med občani in vodstvom občine ter z digitalizacijo optimizirali in pospešili delovanje občin, želimo razviti aplikacijo, ki bo rešila ta problem.
Spletna aplikacija bo namenjena vsem občinam in njihovim občanom, kjer bo vsak nov registriran uporabnik ob registraciji izbral občino prebivališča in mu bo tako omogočena boljša komunikacija z svojo občino.
Vsak občan bo lahko pošiljal predloge, ki se navezujejo na njegovo občino prebivališča, glasoval med več predlogi ostalih občanov, komentiral predloge drugih uporabnikov in bral opozorila ter novice, ki bodo objavljene z strani predstavnika občine.
Le-ta pa bo preveril verodostojnost, s strani občanov, prejetih predlogov ter jih nato posredoval ustrezni organizaciji znotraj občine (cestno podjetje, komunala...).

Na trgu obstajajo podobne rešitve, ki pa niso dostopne vsem občinam, oziroma niso standardizirane za vse občine ali pa so razširjenje na celo državo, kjer pa se zbirajo predlogi, ki jih občina sama ni zmožna odpraviti.

V sledečem dokumentu delovanje aplikacije opredelimo s funkcionalnimi zahtevami, ki jih podpremo z ustreznimi nefunkcionalnimi zahtevami. V 2. točki dokumenta opredelimo uporabniške vloge, v 3. pa je slovar pojmov za celoten dokument. Za jasnejšo sliko uporabe in delovanja aplikacije so v točki 7.tudi nazorne zaslonske slike in prototipi vmesnikov.

## 1. Uvod

Slovenijo sestavlja 212 občin, katerih glavna naloga je zagotoviti zadovoljstvo in kvaliteto življenja svojih
občanov. Pri tem ima ključno vlogo komunikacija med občani in upravitelji občine ter navsezadnje komunikacija med samimi občani. Nekatere občine v Sloveniji že omogočajo, da občani pošljejo predloge, vendar je v večini primerov to slabo implementirano, naš cilj pa je ustvariti enotno aplikacijo oz. portal za vseh 212 občin. S tem bi omogočili tudi manj razvitim občinam enake možnosti kot pa jih imajo velike mestne občine.

Aplikacija bo omogočala poenotenje portala za komunikacijo med občani in predstavniki po celotni Sloveniji, kar bo posledično omogočalo izmenjavo menj in sprejemanje skupnih odločitev glede potreb in želj občanov.  

Aplikacija bo neregistriranemu uporabniku omogočala pregled predlogov objavljenih iz strani drugih prijavljenih uporabnikov, za poljubno občino. Neprijavljen uporabnik bo lahko tudi pregledoval objave (novice in opozorila), ki jih bo objavljal predstavnik občine. Omogočen pa mu bo tudi pregled arhiviranih predlogov.  

Uporabnik se bo lahko odločil za registracijo in prijavo, kar pa mu bo omogočilo, da si iz seznama občin izbere občino, za katero želi objavljati ali prebirati predloge. Uporabnik bo lahko napisal svoj predlog (mu dodal lokacijo in fotografije), lahko pa bo komentiral in s tem dopolnil predlog drugega uporabnika. Na voljo mu bo tudi funkcionalnost da predloge všečka ali ne-všečka, to pa bo omogočilo razvrščanje in prikazovanje predlogov glede na število le-teh. Predlogi bodo razdeljeni na aktivne predloge (predlogi, ki še imajo možnost komentiranja), ter zaprte predloge (predlogi, ki jih je občina že uresničila). Zaprti predlogi bodo prestavljeni v arhiv. Uporabniku bodo vidne tudi novice, torej  objave predstavnika občine.

Predstavnik občine bo te predloge prebiral in jih posredoval občinski upravi, katera se bo odločila ali je predlog uresničljiv in v interesu vseh občanov, ter ga ob sprejetju predala naprej ustrezni organizaciji. Lahko bo tudi objavljal novice v zvezi z odločitvami občinske uprave glede posameznih idej in jih označil kot zaprte, ter jih arhiviral. Lahko pa bo objavil tudi splošne novice v povezavi z dano občino.

Poleg naštetih funkcionalnosti smo si zadali tudi nefunkcionalne zahteve, ki jih bomo upoštevali skozi celoten razvoj projekta in aplikacijo razvili v skladu z njimi. Za zahteve izdelka smo definirali minimalne pogoje za dobro uporabniško izkušnjo, s čimer bomo zagotovili zadovoljstvo uporabnikov. Organizacijske zahteve bodo poskrbele za implementacijo v skladu s preverjenimi postopki, zunanje zahteve pa bodo služile razvoju zakonsko sprejemljive aplikacije, kjer bodo lahko uporabniki mirne vesti aplikacijo ne le uporabljali, temveč tudi priporočili prijateljem.

## 2. Uporabniške vloge

Za uporabnike naše aplikacije so predvidene sledeče uporabniške vloge:

- **Neprijavljen uporabnik**, ki lahko preglejuje predloge podane iz strani drugih uporabnikov, ki so urejeni po času ali pa po številu všečkov. Neprijavljenemu uporabniku bo omogočeno tudi pregledovanje arhiviranih predlogov. Omogočena sta mu registracija in prijava.
- **Uporabnik**, ki lahko preglejuje predloge podane iz strani drugih uporabnikov, ki so urejeni po času ali pa po številu všečkov. Od anonimnega uporabnika se razlikuje po tem da je registriran, torej ima svoj uporabniški račun. Poleg funkcionalnosti, ki so omogočene anonimnemu uporabniku, lahko prijavljen uporabnik dodaja svoje predloge in pa komentira predloge drugih uporabnikov.
- **Predstavnik občine**, ki bo pregledoval predloge oddane s strani uporabnikov, preverjal njihovo verodostojnost in jih posredoval občinski upravi, ti pa naprej ustrezni organizaciji znotraj občine (cestno podjetje, komunala...). Predstavnik občine bo imel tudi možnost objavljanja novic, bodisi glede predlogov (lahko bo zaprl predlog in ga arhiviral), bodisi glede splošnih novic za dano občino, ki se navezujejo na dani predlog.
- **Moderator**, ki lahko preverja predloge in spremlja zlorabe, ob pojavu slednjih pa lahko začasno ali stalno
onemogoči uporabniku dostop do portala. Moderator lahko tudi odstranjuje neprimerne predloge.
- **Administrator**, ki lahko upravlja z računi moderatorjev.

## 3. Slovar pojmov

- **Predlog** - objava, ki jo ustvari ter s tem objavi uporabnik. To naj bi bil specifičen predlog upravi občine oziroma določena kritika delovanja le te.

- **Uporabnik** - uporabnik aplikacije, v vlogi običajnega prebivalca določene občine. Spremlja predloge drugih uporabnikov te občine, jih všečka ali nevšečka oziroma ustvari svoj predlog.

- **Uprava občine** - zaposleni na posamezni občini, odgovorni za sprejemanje novih projektov. Odločijo se ali se bo predlog upošteval ali ne.

- **Predstavnik občine** - uporabnik aplikacije, v vlogi povezovalca med aplikacijo in upravo občine. Verjetno nekdo, ki je na občini zaposlen za stike z javnostjo oziroma oseba s podobnim delovnim mestom. Lahko bo pregledoval in komentiral predloge uporabnikov ter jih posredoval naprej upravi.

- **Aktiven predlog** - predlog, ki je trenutno dejaven, uporabniki ga lahko všečkajo ali nevšečkajo, dodatno komentirajo, predstavnik občine ga posreduje upravi občine. 

- **Zaprt predlog** - predlog, ki ni več dejaven, uporabniki ga ne morejo več všečkati ali nevšečkati, komentrati. Predlog postane zaprt po odločitvi uprave občine če ga bodo upoštevali ali ne. Predstavnik občine je odgovoren, da pravočasno zapre predlog.

- **Všeček** - uporabnik lahko posameznemu predlogu podeli všeček, če se mu zdi predlog dober oziroma produktiven za občino. Všečki se štejejo, števec je prikazan poleg vsakega predloga. Uporabnik lahko vsakemu predlogu podeli le en všeček.

- **Nevšeček** - uporabnik lahko posameznemu predlogu podeli nevšeček, če se mu zdi predlog slab. Nevšečki se štejejo, števec je prikazan poleg vsakega predloga. Uporabnik lahko vsakemu predlogu podeli le en nevšeček.

- **Novica** - predstavnik občine lahko ustvari novico o aktualnih temah v občini. Novica se lahko navezuje na stanje predlogov, ki so bili posredovani upravi občine.

- **Komentar** - uporabniki in predstavniki občine lahko pod vsakim predlogom oddajo svoj komentar na ta predlog.

- **Stran s predlogi** - stran oziroma pogled, kjer se uporabnikom prikažejo vsi aktivni predlogi, ki jih lahko všečkajo, nevšečkajo ali komenitrajo.

- **Arhiv** - stran oziroma pogled, kjer so arhivirani in prikazani vsi že zaprti predlogi in njihova stanja (ali so bili realizirani ali ne). 

- **Začetna stran** - stran, ki se prikaže anonimnemu uporabniku, ko prvič vstopi v aplikacijo. Stran z opisom delovanja aplikacije, itd.

- **"Meni"** - funkcionalnost seznama na vrhu strani, s katerim je omogočeno navigiranje med različnimi pogledi. Omogoča tudi prijavo, registracijo in odjavo ob določenih pogojih.

  

## 4. Diagram primerov uporabe

Za vizualizacijo primerov uporabe je bil izdelan sledeči diagram primerov uporabe v jeziku UML.

![DPU](https://teaching.lavbic.net/plantuml/png/TLJDRk8m4BxxAIpsmAcxqaehhNge51fQ8PeVGSDXRoPnmIJOaMF2TbTz11wYxqBVQySs2JPb4GBFpETlVZrDoNXD9DdY9SdBbHGxNkIY4X8hINW39ieLQdfKGL_8hbBFzBSAAhRYMp3Z77weT52xXkQaeVWlmWxllU7ThvcYMYzaGQNLVVdnCFevlWSjaLBihN9PmKtqvj2IN0avSkvPo2NWgiCpw8bngbvhYcjHlLOWN1BCrMj5CTdJHcmfGXLzKLW9BDbghN319CqL4nmXPD1u4DDQiWrfgmtbU5SBIPQSbGCSp76GTQ3Cq_VgLDAYKQG50nRBum72CO0qwH2HW7G978q-wlL1iMMSDUfi2y8-f4SXLf33bjIDCJr6kBUbH2fE9IID_-muuHk66-2XM-lurnmXdIBXcc6GcA0qM2nR-l5-FD2ML2OFtLtu3eCmciH3E7Lj7uIY81jWXWYww3V4q8UHYqiA7J-7_hIVa8b63gCa7C-2vsJcyMUIMleQobU9bRsHfIvc95dp6JFoCCbMhCJnO63ViE3KaVj6diB9lkjuqjaud3y7YtWonSdeVXAFlS1IoMf9MeAXfmgAoeu7pjOmQGLHfMXjXUVfzLfnqRBSLYbs4O5SivP9DvaJLQ2PXbcQp88HH3J4rucx2k06DnKh1MOSLw8aETi8wy-BQ2hqg_OTsY9CFTpYuvqU3-MfUfosZknTMvWmhmIcex7p7ix_0pd5UK8zUTs3lRE1QTGmqjM8GfgUyyGMAOYJU1B54tokbiireolpbi2LlJQxQ2kyRslm1wZezOchdpJbbNQbtjq7LYbvjQt-WC2AW9TOd5FK0-NpcXJXouNIyv9EZ1gs8o-ruGsXCCLV2x7dD_2vWtLmotXUxGgAHc3OrJTtMNeBEvto0g7vIGNnThfE1Pvw6Cmnlh6STzQL-UrrTfK48OOZhAqeqGVOQwavP2ZJVx0W3QIx0_l15M49c8kT34_S5VMZD7ozIoYTAyD3SaMeatRRMrDNcdhImfFq4BaY1Es8gIVDV9jlX0B-0m00)

**Diagram primerov uporabe** (izvorna koda [PlantUML](../gradivo/plantuml/DPU.puml))

## 5. Funkcionalne zahteve

V tem razdelku podrobno opišite posamezne funkcionalnosti, ki jih vaša aplikacija ponuja svojim uporabnikom. Za vsako funkcionalnost navedite naslednje podatke:

### 1. Registracija

#### Povzetek funkcionalnosti

Neprijavljen uporabnik lahko ustvari nov uporabniški račun z izbranim uporabniškim imenom in geslom.

#### Osnovni tok

1. Neprijavljen uporabnik v glavnem meniju izbere funkcionalnost "Registracija".
2. Aplikacija prikaže obrazec za registracijo.
3. Neprijavljen uporabnik izpolni vsa zahtevana polja.
4. Neprijavljen uporabnik potrdi pogoje uporabe.
5. Neprijavljen uporabnik potrdi registracijo.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Izjemni tokovi

Pri funkcionalnosti so mogoči sledeči izjemni tokovi:

- **Izjemni tok 1:** Neprijavljen uporabnik je izbral že obstoječe uporabniško ime. V tem primeru se prikaže obvestilo, da uporabnik že obstaja in nov uporabniški račun ni ustvarjen.
- **Izjemni tok 2:** Neprijavljen uporabnik ni vnesel ustreznega gesla. V tem primeru se prikaže obvestilo, da vnešeno geslo ni ustrezno in nov uporabniški račun ni ustvarjen.
- **Izjemni tok 3:** Neprijavljen uporabnik ni izpolnil vseh zahtevanih polj. V tem primeru se prikaže obvestilo, da uporabnik ni izpolnil vseh zahtevanih polj in nov uporabniški račun ni ustvarjen.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, mora biti izpolnjen sledeč pogoj:

- Uporabnik še ni registriran.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je uspešno ustvarjen nov uporabniški račun z izbranim uporabniškim imenom in geslom.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj je to osnovna funkcionalnost našega sistema.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz obrazca za registracijo. | Prikazan je glavni meni. | Izberi gumb za registracijo. | Prikaže se obrazec za registracijo. |
| Uspešna registracija. | Obrazec za registracijo. | Potrdi registracijo. | Ustvarjen je nov uporabniški račun. |
| Obstoječe uporabniško ime. | Prikazan je obrazec za registracijo. | Vnesi ze obstoječe uporabniško ime. | Prikaže se obvestilo o že obstoječem uporabniškem imenu in nov uporabniški račun ni ustvarjen. |
| Neustrezno geslo. | Prikazan je obrazec za registracijo. | Vnesi neustrezno geslo. | Prikaže se obvestilo o neustreznem geslu in nov uporabniški račun ni ustvarjen. |
| Neizpolnjena zahtevana polja. | Prikazan je obrazec za registracijo. | Pusti eno ali več zahtevanih polj praznih. | Prikaže se obvestilo o neizpolnjenih poljih in nov uporabniški račun ni ustvarjen. |

### 2. Prijava

#### Povzetek funkcionalnosti

Neprijavljen uporabnik lahko izbere prijavo v aplikacijo s svojim uporabniškim računom imenom in geslom.

#### Osnovni tok

1. Neprijavljen uporabnik v glavnem meniju izbere funkcionalnost "Prijava".
2. Aplikacija prikaže obrazec za prijavo.
3. Neprijavljen uporabnik vnese svoje uporabniško ime in geslo.
4. Neprijavljen uporabnik potrdi prijavo.
5. Aplikacija prikaže pregledno ploščo aplikacije.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Neprijavljen uporabnik poskuša dostopati do funkcionalnosti, ki ni na voljo neprijavljenim uporabnikom.
2. Aplikacija prikaže obrazec za prijavo.
3. Neprijavljen uporabnik vnese svoje uporabniško ime in geslo.
4. Neprijavljen uporabnik potrdi prijavo.
5. Aplikacija prikaže pregledno ploščo aplikacije.

#### Izjemni tokovi

Pri funkcionalnosti so mogoči sledeči izjemni tokovi:

- **Izjemni tok 1:** Neprijavljen uporabnik vpiše neveljavno uporabniško ime. Prikaže se obvestilo, da je uporabniško ime neveljavno in prijava je neuspešna.
- **Izjemni tok 2:** Neprijavljen uporabnik vpiše napačno geslo. Prikaže se obvestilo, da je geslo napačno in prijava je neuspešna.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, mora biti izpolnjen sledeč pogoj:

- Uporabnik v sistem še ni prijavljen.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je uporabnik prijavljen v aplikacijo in mu je omogočenih več funkcionalnosti.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj je to osnovna funkcionalnost našega sistema, ki omogoča ločevanje med uporabniki in uporabnikom omogoča osnovne funkcionalnosti.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz obrazca za prijavo. | Prikazan je glavni meni, in uporabnik še ni prijavljen. | Izberi gumb za registracijo. | Prikaže se obrazec za prijavo. |
| Ustrezna prijava. | Prikazan je obrazec za prijavo in uporabnik še ni prijavljen. | Vnesi svoje uporabniško ime in geslo. | Prijava je uspešna. |
| Neustrezno uporabniško ime.| Prikazan je obrazec za prijavo in uporabnik še ni prijavljen. | Vnesi neustrezno uporabniško ime. | Prikaže se obvestilo o neustreznem uporabniškem imenu in prijava je neuspešna. |
| Neustrezna geslo. | Prikazan je obrazec za prijavo in uporabnik še ni prijavljen. | Vnesi ustrezno uporabniško ime in napačno geslo. | Prikaže se obvestilo o neustreznem uporabniškem imenu ali geslu in prijava je neuspešna. |

### 3. Odjava

#### Povzetek funkcionalnosti

Uporabnik lahko izbere odjavo iz sistema.

#### Osnovni tok

Predvideno se funkcionalnost izvede po sledečem osnovnem toku:

1. Uporabnik v meniju na domači strani izbere funkcionalnost "Odjava".
2. Sistem uporabnika odjavi in ga vrne na začetno stran.

#### Alternativni tok(ovi)

Ni alternativnih tokov,

#### Izjemni tokovi

Ni izjemnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, mora biti izpolnjen sledeč pogoj:

- Uporabnik je prijavljen v sistem.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je uporabnik odjavljen in vrnjen na začetno stran.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Pred prikazom obrazca za prijavo je potrebno preklopiti na zavarovan kanal. Po uspešni prijavi je potrebno ponovno generirati številko seje.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj je to osnovna funkcionalnost, ki omogoča delovanje našega sistema.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz gumba odjava.  | Domača stran aplikacije.  | Pritisk gumba meni. | Prikaže se meni kjer je gumb odjava. |
| Odjava.  | Prikazan je meni.  | Pritisk na gumb odjava. | Uporabnik je odjavljen. |

### 4. Dodajanje moderatorja

#### Povzetek funkcionalnosti

Administrator lahko status moderatorja priredi novemu uporabniškemu računu.

#### Osnovni tok

1. Administrator v glavnem meniju izbere možnost "Seznam uporabnikov".
2. Aplikacija odpre meni z seznamom uporabnikov.
3. Administrator poišče uporabnika s pomočjo iskalnega polja, ali uporabnike razvrsti oziroma filtrira.
4. Administrator v vstici, ki pripada uporabniku klikne na znak za spustni seznam.
5. Administrator v spustnem seznamu izbere možnost "Dodeli moderatorske pravice".
6. Administrator izbiro potrdi.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Administrator v glavnem meniju izbere funkcionalnost "Predlogi".
2. Aplikacija odpre meni z vsemi predlogi.
3. Administrator izbere predlog.
4. Aplikacija odpre izbran predlog.
5. Administrator na strani predloga izbere objavljalca predloga.
6. Aplikacija odpre stran "Seznam uporabnikov", in označi izbranega uporabnika.
7. Administrator v vstici, ki pripada uporabniku klikne na znak za spustni seznam.
8. Administrator v spustnem seznamu izbere možnost "Dodeli moderatorske pravice".
9. Administrator izbiro potrdi.

#### Pogoji

Da se ta funkcionalnost lahko prične izvajati, morajo biti izpolnjeni naslednji pogoji:

- Za dodeljevanje moderatorskih pravic mora biti uporabnik administrator. Če uporabnik ni administrator ta funkcionalnost ni na voljo.
- Uporabnik, kateremu se dodeljujejo moderatorske pravice ne sme imeti preteklih kršitev pogojev uporabe ali opozoril s strani moderatorjev.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti ima izbrani uporabnik dodeljene moderatorske pravice.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj je funkcionalnost ključna za delovanje aplikacije.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz seznama uporabnikov. | Prikazan je glavni meni aplikacije. | Seznam uporabnikov. | Odpre se seznam uporabnikov. |
| Prikaz spustnega seznama. | Prikazan je seznam uporabnikov. | Gumb za spustni seznam | Odpre se spustni seznam. |
| Dodajanje moderatorja. | Prikazan je spustni seznam. | Dodeli moderatorske pravice | Uporabniku so dodeljene moderatorske pravice. |

### 5. Odstranjevanje moderatorja

#### Povzetek funkcionalnosti

Administrator lahko računu odvzame status moderatorja.

#### Osnovni tok

1. Administrator v glavnem meniju izbere možnost "Seznam uporabnikov".
2. Aplikacija odpre meni z seznamom uporabnikov.
3. Administrator izbere moderatorja.
4. Administrator v vstici, ki pripada moderatorju klikne na znak za spustni seznam.
5. Administrator v spustnem seznamu izbere možnost "Odvzami moderatorske pravice".
6. Administrator izbiro potrdi.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Administrator v glavnem meniju izbere funkcionalnost "Vsi predlogi".
2. Aplikacija odpre meni z vsemi predlogi.
3. Administrator izbere predlog.
4. Aplikacija odpre izbran predlog.
5. Administrator na strani predloga izbere objavljalca predloga.
6. Aplikacija odpre stran "Seznam uporabnikov", in označi izbranega uporabnika.
7. Administrator v vstici, ki pripada moderatorju klikne na znak za spustni seznam.
8. Administrator v spustnem seznamu izbere možnost "Odvzami moderatorske pravice".
9. Administrator izbiro potrdi.

#### Pogoji

Da se ta funkcionalnost lahko prične izvajati, morajo biti izpolnjeni naslednji pogoji:

- Za odvzem moderatorskih pravic mora biti uporabnik administrator. Če uporabnik ni administrator ta funkcionalnost ni na voljo.
- Uporabnik, kateremu se dodeljujejo moderatorske pravice mora biti moderator.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti ima izbrani uporabnik odvzete moderatorske pravice.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj je funkcionalnost ključna za delovanje aplikacije.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz seznama uporabnikov. | Prikazan je glavni meni aplikacije. | Seznam uporabnikov. | Odpre se seznam uporabnikov. |
| Prikaz profila uporabnika. | Prikazan je seznam uporabnikov. | Odpre se spustni seznam.     | Odpre se spustni seznam.                    |
| Odstranjevanje moderatorja. | Prikazan je spustni seznam.         | Odvzami moderatorske pravice | Uporabniku so odvzete moderatorske pravice. |

### 6. Dodajanje predloga s sliko in lokacijo

#### Povzetek funkcionalnosti

Uporabnik lahko objavi nov predlog za popravitev napake, poškodbe ali ovire na prometni infrastrukturi, ali objavi idejo za izboljšavo. Predlog se mora nanašati le na eno napako, poškodbo/oviro ali idejo.

#### Osnovni tok

1. Uporabnik na strani "Predlogi" izbere funkcionalnost "+ Dodaj svoj predlog".
2. Aplikacija prikaže obrazec za dodajanje novega predloga.
3. Uporabnik doda vse potrebne podatke, ki vključujejo vsaj naslov, lokacijo in opis. Doda lahko tudi slike.
4. Uporabnik klikne na gumb "Nadaljuj".
5. Aplikacija prikaže predogled predloga, kjer se lahko uporabnik vrne na prejšnji korak s klikom na gumb "Uredi", ali pa objavi predlog s klikom na gumb "Objavi".
6. Aplikacija prikaže objavljen predlog.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je v aplikaciji registriran

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je nov predlog prikazan vsem ostalim uporabnikom aplikacije. O predlogu je obeščena glavna mestna organizacija. Vnos predloga je dodan v podatkovno bazo.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj je to osnovna funkcionalnost naše aplikacije.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz funkcionalnosti | Brez | Odpre aplikacijo kot neprijavljen uporabnik | Funkcionalnost ni dostopna |
| Prikaz funkcionalnosti | Stran "Predlogi" | Odpre aplikacijo in izbere "+ dodaj svoj predlog" | Prikaže se nov obrazec |
| Izpolnitev vseh podatkov | Prazen obrazec | Potrdi vnos | Prikaže se opozorilo o mankajočih podatkih, stanje pa se ne spremeni |
| Izpolnitev vseh podatkov | Prazen obrazec | Izpolne vsa potrebna polja in potrdi vnos | Prikaže se pregled predloga |
| Objava predloga | Izpolnjen obrazec na strani s predogledom | Potrdi objavo | Prikaže se objavljen predlog |

### 7. Pregled arhiviranih predlogov

#### Povzetek funkcionalnosti

Neprijavljen uporabnik lahko brska med arhiviranimi predlogi, ter poleg opisa in ostalih informacij za vsak vnešen predlog preveri trenutni status predloga in novice s strani odgovornih organizacij o njihovem napredku. To funkcionalnost lahko dostopa tudi uporabnik.

#### Osnovni tok

1. Uporabnik na strani "Arhiv" izbere enega izmed rezultatov.
2. Aplikacija prikaže stran z vsemi informacijami o predlogu.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Uporabnik prejme obvestilo o spremembi statusa predloga, ki ga je ustvaril, ali pa je preko glasovanja o njem izrazil zanimanje.
2. Uporabnik klikne na obvestilo.
3. Aplikacija se odpre in takoj prikaže stran z vsemi informacijami o predlogu.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je neprijavljen ali registriran.
- Uporabnik je registriran in je objavil predlog ali pa oddal pozitiven glas na obstoječem predlogu.

#### Posledice

Sama funkcionalnost brskanja nima posledic.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, saj funkcionalnost omogoča boljše in enostavnejše komuniciranje in prenos informacij med uporabniki in odgovornimi organizacijami, kar je glavna ideja aplikacije.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz funkcionalnosti | Odprta je stran "Arhiv" | Izbere enega izmed rezultatov | Prikaže se stran z vsemi informacijami |
| Pošiljanje obvestil | Obstaja predlog, ki še ni zaključen | Organizacija spremeni stanje predloga in ga označi kot zaključenega | Predlog se sedaj v aplikaciji prikaže kot zaključen, uporabniki pa so prejeli obvestilo |

### 8. Arhiviranje predloga

#### Povzetek funkcionalnosti

Predstavnik občine lahko predloge arhivira.

#### Osnovni tok

1. Predstavnik občine izbere predlog na strani iskanje.
2. Aplikacija prikaže stran tega predloga.
3. Predstavnik občine na strani predloga v meniju izbere gumb "Arhiviraj predlog".
4. Aplikacija odpre okno z gumbom za potrditev.
5. Predstavnik občine portdi arhiviranje predloga.
6. Aplikacija prestavi predlog med arhivirane predloge.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je v aplikaciji predstavnik občine.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti bo predlog arhiviran. Avtor predloga bo obveščen o tem da je njegov predlog arhiviran.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, in je nujno potrebna za dobro delovanje aplikacije. Brez te funkcionalnosti ne bi mogli ločevati med odprtimi in zaprtimi predlogi.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz predloga | Uporabnik ni predstanik občine | Odpre predlog kot uporabnik | Prikaže se predlog |
| Prikaz predloga | Uporabnik je predstanik občine | Odpre predlog kot predstanik občine | Prikaže se predlog |
| Odpiranje menija na strani predloga | Uporabnik ni predstanik občine | Pritisk na gumb menija | Prikaže se meni v katerem ni gumba za izbris | 
| Odpiranje menija na strani predloga | Uporabnik je predstanik občine | Pritisk na gumb menija  | Prikaže se meni v katerem je gumb za izbris | 
| Pritisk na gumb za arhiviranje | Uporabnik je predstanik občine | Pritisk na gumb za arhiviranje | Prikaže se okno z gumbom za potrditev | 
| Pritisk na gumb za potrditev | Odprto je okno za potrditev | predstanik občine pritisne na gumb za potrditev arhiviranja | Aplikacija arhivira predlog | 

### 9. Brisanje predloga

#### Povzetek funkcionalnosti

Moderator lahko predloge izbriše.

#### Osnovni tok

1. Moderator izbere predlog na strani "Predlogi".
2. Aplikacija prikaže stran tega predloga.
3. Moderator na strani predloga v spustnem seznamu izbere gumb "Izbriši predlog".
4. Aplikacija odpre okno za vnos razloga za izbris in gumbom za potrditev.
5. Moderator v okno za vnos razloga za izbris vnese razlog in potrdi izbris.
6. Aplikacija iz baze izbriše predlog in o tem obvesti avtorja predloga.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je v aplikaciji moderator aplikacije

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti bo predlog izbrisan iz baze in ne bo več dostopen uporabnikom. Izbrisani bodo tudi vsi všeči, ne-všečki in komentarji. Avtor bo obveščen o tem da je njegov predlog izbrisan in iz kakšnega razloga.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **MUST HAVE**, in je nujno potrebna za dobro delovanje aplikacije. Brez te funkcionalnosti bi lahko aplikacijo zlonamerni uporabniki preplavili s predlogi, ki so neprimerni in bi postala neuporabna za resne uporanike.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz predloga | Uporabnik ni moderator | Odpre predlog kot  uporabnik | Prikaže se predlog |
| Prikaz predloga | Uporabnik je moderator | Odpre predlog kot moderator | Prikaže se predlog |
| Odpiranje menija na strani predloga | Uporabnik ni moderator | Pritisk na gumb menija | Prikaže se meni v katerem ni gumba za izbris | 
| Odpiranje menija na strani predloga | Uporabnik je moderator | Pritisk na gumb menija  | Prikaže se meni v katerem je gumb za izbris | 
| Pritisk na gumb izbris | Uporabnik je moderator | Pritisk na gumb izbris | Prikaže se stran z vhodnim poljem in gumbom za potrditev | 
| Vnos razloga v vhodno polje in potrditev | Vhodno polje je prazno | Moderator ne vnese teksta | Ne more potrditi izbrisa | 
| Vnos razloga v vhodno polje in potrditev | Vhodno polje je prazno | Moderator vnese tekst in pritisne gumb za potrditev izpisa| Aplikacija izbriše predlog | 

### 10. Urejanje predloga

#### Povzetek funkcionalnosti

Moderator lahko predlogom ureja vsebino.

#### Osnovni tok

1. Moderator izbere predlog na strani "Predlogi".
2. Aplikacija prikaže stran tega predloga.
3. Moderator na strani predloga v spustnem seznamu izbere gumb "Uredi predlog".
4. Aplikacija prikaže obrazec za urejanje predloga.
5. Moderator uredi, doda ali izbriše podatke, kar ostane vključuje vsaj naslov, lokacijo in opis.
6. Moderator klikne na gumb "Nadaljuj".
7. Aplikacija prikaže predogled predloga, kjer se lahko uporabnik vrne na prejšnji korak s klikom na gumb "Uredi", ali pa objavi predlog s klikom na gumb "Objavi".
8. Aplikacija prikaže urejen predlog in o spremembah obvesti avtorja predloga.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je v aplikaciji moderator aplikacije

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti bo predlog v bazi in za vse uporabnike posodobljen. Avtor originalnega predloga bo obveščen o spremembah

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **SHOULD HAVE**, in ni nujno potrebna za dobro delovanje aplikacije. S to aplikacijo bodo lahko moderatorji urejali tiskovne ali druge napake v predlogih.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz predloga | Uporabnik ni moderator | Odpre predlog kot  uporabnik | Prikaže se predlog |
| Prikaz predloga | Uporabnik je moderator | Odpre predlog kot moderator | Prikaže se predlog |
| Odpiranje menija na strani predloga | Uporabnik ni moderator | Pritisk na gumb menija | Prikaže se meni v katerem ni gumba za urejanje | 
| Odpiranje menija na strani predloga | Uporabnik je moderator | Pritisk na gumb menija  | Prikaže se meni v katerem je gumb za urejanje | 
| Pritisk na gumb urejanje | Uporabnik je moderator | Pritisk na gumb urejanje | Prikaže se stran za urejanje | 
| Izpolnitev vseh podatkov | Prazen obrazec | Potrdi vnos | Prikaže se opozorilo o mankajočih podatkih, stanje pa se ne spremeni | 
| Izpolnitev vseh podatkov | Prazen obrazec | Izpolne vsa potrebna polja in potrdi vnos | Prikaže se pregled predloga |
| Objava predloga | Izpolnjen obrazec na strani s predogledom | Potrdi objavo | Prikaže se objavljen predlog |

### 11. Dodajanje novic

#### Povzetek funkcionalnosti

Predstavnik občine lahko doda odziv na podane predloge in dodajajo novice o poteku dela na tem predlogu.

#### Osnovni tok

1. Predstavnik občine v glavnem meniju izbere funkcionalnost "Odprti predlogi".
2. Aplikacija odpre meni z odprtimi predlogi.
3. Predstavnik občine izbere odprt predlog.
4. Aplikacija odpre izbran predlog.
5. Predstavnik občine izbere možnost "Dodaj novico".
6. Aplikacija odpre nov meni v katerem lahko predstavnik organizacije vpiše novico.
7. Predstavnik občine pritisne gumb "Objavi novico".
8. Aplikacija zapre izbrani predlog in odpre meni odprtih predlogov.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se ta funkcionalnost lahko prične izvajati, morajo biti izpolnjeni naslednji pogoji:

- Uporabnik mora biti potrjen s strani moderatorjev kot predstavnik občine. Če uporabnik ni predstavnik občine mu ta funkcionalnost ni na voljo.
- Uporabnik je sprejel pogoje uporabe aplikacije.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je novica o predlogu vidna vsem uporabnikom. 

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **SHOULD HAVE**, saj je funkcionalnost pomembna za reševanje predlogov, vendar ni ključna za samo delovanje aplikacije.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz odprtega problema. | Seznam odprtih predlogov. | Izberite predlog. | Odpre se izbrani predlog. |
| Prikaz menija za vpis novice. | Prikazan je meni za izbran predlog. | Vpis novice. | Odpre se meni za vpis novice. |
| Objavljanje novice. | Prikazan je meni za vpis novice. | Vpisanje novice. | Novica je objavljena in vidna vsem uporabnikom. |

### 12. Iskanje predlogov

#### Povzetek funkcionalnosti

Uporabnik lahko išče med obstoječimi predlogi glede na ključne besede iz naslovov, opisov in imena lokacij.

#### Osnovni tok

1. Uporabnik v meniju izbere funkcionalnost "Predlogi".
2. Aplikacija prikaže novo stran s praznim iskalnim poljem.
3. Uporabnik vpiše ključne besede in s pritiskom na gumb "Išči" začne iskanje.
4. Aplikacija prikaže vse relevantne rezultate.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Uporabnik na strani za iskanje ponovno klikne na iskalno polje.
2. Aplikacija prikaže iskalno polje s trenutnimi ključnimi besedami.
3. Uporabnik vpiše nove ključne besede in s pritiskom na gumb "Išči" ponovno začne iskanje.
4. Aplikacija prikaže vse relevantne rezultate.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je v aplikaciji registriran ali prijavljen kot anonimni uporabnik

#### Posledice

Sama funkcionalnost iskanja nima posledic.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **SHOULD HAVE**, saj ni pogoj za delovanje aplikacije, vendar bi uporabnikom omogočala veliko lažje navigiranje, kar je konkurenčna prednost v primerjavi z alternativami.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz funkcionalnosti | Aplikacija je odprta | Izbere "Predlogi" | Prikaže se stran za iskanje z iskalnim poljem |
| Iskanje predlogov | Prazno iskalno polje | Doda ključne besede in klikne na gumb "Išči" | Prikažejo se relevantni rezultati |
| Prikaz funkcionalnosti | Prikazani so relevantni rezultati | Izbere "Predlogi" | Prikaže se stran za iskanje z iskalnim poljem in obstoječimi klučnimi besedami |


### 13. Všečkanje/ne-všečkanje predloga

#### Povzetek funkcionalnosti

Uporabnik lahko posameznim predlogom podeli všeček ali ne všeček.

#### Osnovni tok

1. Uporabnik izbere predlog na strani "Predlogi".
2. Aplikacija prikaže stran tega predloga.
3. Uporabnik na strani predloga pritisne na ikono za všeček ali ne-všeček.
4. Aplikacija na strani predloga posodobi števec všečkov in ne-vsečkov.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Uporabnik najde predlog na strani iskanje a ga ne odpre.
2. Aplikacija prikaže števec všečkov in ne-všečkov na kartici tega predloga.
3. Uporabnik na kartici predloga pritisne na ikono za všeček ali ne-všeček.
4. Aplikacija na kartici predloga posodobi števec všečkov in ne-vsečkov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je v aplikaciji registriran

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je števec všečkov in ne-všekov posodobljen vsem ostalim uporabnikom aplikacije. V podatkovni bazi je shranjeno novo število všečkov in ne-všečkov.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **SHOULD HAVE**, ni nujno potrebna za delovanje, bo pa zelo izboljšala uporabniško izkušnjo. Uporabnikom bo omogočala glasovanje o pomembnosti predlogov, ter posledično veliko kakovostnejše izbiranje le teh s strani občine za nadaljne delo.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz predloga | Brez | Odpre predlog kot anonimni uporabnik | Prikaže se predlog in števec všečkov in ne-všečkov |
| Prikaz predloga | Uporabnik je prijavljen | Odpre predlog kot prijavljeni uporabnik | Prikaže se predlog in števec všečkov in ne-všečkov |
| Pritisk na gumb Všeček | Uporabnik je prijavljen | Všeček | Prikaže se opozorilo da uporabnik ni prijavljen, števec se ne posodobi | 
| Pritisk na gumb Všeček | Uporabnik ni prijavljen | Všeček | Števec všečkov se posodobi |
| Pritisk na gumb Ne-Všeček | Uporabnik je prijavljen | Ne-Všeček | Prikaže se opozorilo da uporabnik ni prijavljen, števec se ne posodobi | 
| Pritisk na gumb Ne-Všeček | Uporabnik ni prijavljen | Ne-Všeček | Števec ne-všečkov se posodobi |

### 14. Ocenjevanje arhiviranega predloga

#### Povzetek funkcionalnosti

Uporabnik lahko v aplikaciji oceni kakovost rešitve za dan predlog.

#### Osnovni tok

1. Uporabnik v glavnem meniju izbere funkcionalnost "Arhiv".
2. Aplikacija odpre stran z zaprtimi predlogi.
3. Uporabnik v meniju izbere zaprt predlog.
4. Aplikacija odpre izbran predlog in ga prikaže skupaj z rešitvijo za ta predlog.
6. Na strani predloga lahko uporanik poda oceno rešitve na lestvici od 1 do 5 zvezdic.
7. Uporabnik izbere oceno za rešitev in jo s tem potrdi.

#### Alternativni tok(ovi)

1. Uporabnik v glavnem meniju izbere funkcionalnost "Arhiv".
2. Aplikacija odpre stran z zaprtimi predlogi.
3. Uporabnik v meniju ne izbere predloga.
4. Na strani z vsemi predlogi lahko uporanik določenemu predlogu poda oceno rešitve na lestvici od 1 do 5 zvezdic.
5. Uporabnik izbere oceno za rešitev in jo s tem potrdi.

#### Pogoji

Da se ta funkcionalnost lahko prične izvajati, morajo biti izpolnjeni naslednji pogoji:

- Uporabnik mora biti v aplikacijo prijavljen. Če uporabnik ni prijavljen mu funkcionalnost ni na voljo.
- Uporabnik je sprejel pogoje uporabe aplikacije.
- Uporabnik mora biti registriran vsaj 1 mesec.
- Uporabnik ne sme imeti preteklih kršitev pogojev uporabe ali opozoril s strani moderatorjev.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je ocena za rešitev predloga vidna vsem uporabnikom ter možnim organizacijam, ki so ta predlog ali problem reševale.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **SHOULD HAVE**, saj je funkcionalnost pomembna za preverjanje kakovosti rešitve, ampak bi aplikacija lahko delovala tudi brez nje.

#### Sprejemni testi


| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz rešenega predloga. | Seznam rešenih predlogov. | Izberite predlog. | Odpre se izbrani predlog. |
| Podajanje ocene za rešitev predloga. | 5 neobarvanih ali delno obarvanih zvezdic. | Podajte oceno za rešitev predloga. | Pravilno število obarvanih zvezdic. |

### 15. Filtriranje predlogov

#### Povzetek funkcionalnosti

Uporabnik lahko med rezultati na strani "Iskanje" izbere razne filtre, ki omogočajo lažje nadaljno iskanje med prikazanimi rezultati. Filtri bi vključevali izbiro okvirne lokacije, število pozitivnih ali negativnih glasov, stanje predloga, itd.

#### Osnovni tok

1. Uporabnik na strani "Predlogi" izbere funkcionalnost "Filtriraj"
2. Aplikacija prikaže obrazec z možnimi filtri
3. Uporabnik izbere željene filtre
4. Aplikacija sproti spreminja prikazane rezultate glede na filtre

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik se nahaja na strani "Iskanje" in je že vpisal ključne besede v iskalno polje.

#### Posledice

Sama funkcionalnost iskanja nima posledic.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **COULD HAVE**, saj ni pogoj za delovanje aplikacije, vendar bi uporabnikom omogočala veliko boljše možnosti za iskanje v primerjavi s standardnim iskanjem.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz funkcionalnosti | Odprta je stran "Predlogi" | Izbere "Filtriraj" | Prikaže se obrazec z možnimi filtri |
| Iskanje s filtri | Prikazan je obrazecz možnimi filtri | Izberemo filter iz vsake kategorije | Prikažejo se relevantni rezultati |

### 16. Onemogočanje/omogočanje uporabnika

#### Povzetek funkcionalnosti

Moderator lahko uporabnikom onemogoči ali omogoči dostop do aplikacije ali njenih funkcionalnosti.

#### Osnovni tok

1. Moderator v glavnem meniju izbere možnost "Seznam uporabnikov",
2. Aplikacija odpre seznam uporabnikov,
3. Moderator poišče želenega uporabnika,
4. Moderator v spustnem seznamu izbere možnost "Onemogoči dostop do aplikacije" ali "Omogoči dostop do aplikacije",
5. Moderator izbiro potrdi.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Moderator v glavnem meniju izbere funkcionalnost "Predlogi",
2. Aplikacija odpre stran z vsemi odprtimi predlogi,
3. Moderator izbere predlog,
4. Aplikacija odpre izbran predlog,
5. Moderator na strani predloga izbere uporabnika, ki je predlog objavil,
6. Aplikacija odpre seznam uporabnikov, izbran uporabnik je označen,
7. Moderator v spustnem seznamu  izbere možnost "Onemogoči dostop do aplikacije" or "Omogoči dostop do aplikacije".
8. Moderator izbiro potrdi.

#### Pogoji

Da se ta funkcionalnost lahko prične izvajati, morajo biti izpolnjeni naslednji pogoji:

- Za onemogočanje dostopa do aplikacije mora biti uporabnik moderator ali administrator. Če uporabnik ni administrator ta funkcionalnost ni na voljo.
- Uporabnik, kateremu se onemogoča dostop do aplikacije, mora imeti vsaj eno kršitev pogojev uporabe ali opozorilo s strani moderatorjev.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je uporabniku onemogočen dostop do aplikacije.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **COULD HAVE**, saj bi bila ta funkcionalnost zaželena, vendar ni ključnega pomena za delovanje aplikacije.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz seznama uporabnikov. | Prikazan je glavni meni aplikacije. | Seznam uporabnikov. | Odpre se seznam uporabnikov. |
| Onemogočanje dostopa do aplikacije uporabniku. | Prikazan je seznam uporabnikov | Onemogoči dostop do aplikacije. | Uporabniku se onemogoči dostop do aplikacije. |

### 17. Komentiranje predloga

#### Povzetek funkcionalnosti

Uporabnik lahko na strani vsakega predloga odda komentar, s čimer lahko izrazi svoje mnenje, dodatne predloge, ki mogoče niso bili podani v originalnem predlogu.

#### Osnovni tok

1. Uporabnik na strani "Predlogi" izbere enega izmed rezultatov.
2. Aplikacija prikaže stran z vsemi informacijami o predlogu.
3. Uporabnik se po strani premakne do komentarjev.
4. Uporabnik v polje "Komentiraj" vpiše svoj komentar.
5. S klikom na gumb "Komentiraj" objavi komentar pod objavo predloga.

#### Alternativni tok(ovi)

Pri tej funkcionalnosti ni alternativnih tokov.

#### Pogoji

Da se funkcionalnost lahko prične izvajati, morajo biti izpolnjeni sledeči pogoji:

- Uporabnik je registriran.
- Uporabnik v preteklosti ni bil označen za škodoželjnega.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je nov predlog prikazan vsem ostalim uporabnikom aplikacije. Komentar je vnešen v podatkovno bazo.

#### Posebnosti

Pri realizaciji funkcionalnosti ni potrebne dodatne strojne opreme. Prav tako ni potrebno upoštevati posebnih standardov.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **WOULD HAVE**, saj funkcionalnost ni nujna za delovanje aplikacije, a bi jo nekoč bilo dobro dodati.

#### Sprejemni testi

Pravilnost implementacije preverimo s sledečimi sprejemnimi testi.

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Prikaz funkcionalnosti | Odprta je stran "Predlogi" | Izbere enega izmed rezultatov | Prikaže se stran z vsemi informacijami |
| Prikaz funkcionalnosti | Aplikacija je odprta na strani enega izmed rezultatov | V polje vpiše komentar in klikne "Komentiraj" | Prikaže se objavljen komentar |

### 18. Priprava statističnih podatkov

#### Povzetek funkcionalnosti

Registrirani uporabnik lahko preko API vmesnika iz aplikacije izvozi statistiko o količini in ocenah predlogov, koliko le teh je končanih ali odprtih in koliko ljudi v določeni občini aktivno sodeluje v aplikaciji, ter primerjavo statistike z ostalimi občinami in povprečjem.

#### Osnovni tok

1. Predstavnik občine klikne na gumb arhiviraj,
1. V analitični podatkovni bazi se posodobijo podatki o zaprtih predlogih, komentarij, všečkih, nevšečkih...
1. Posodobi se povprečna statistika za to občino in tudi za celotno aplikacijo.

#### Alternativni tok(ovi)

1. Uporabnik ustvari nov predlog
2. V analitični podatkovni bazi se posodobijo podatki o številu odprtih predlogov za to občino in na sploh, 
3. Posodobi se povprečna statistika za to občino in tudi za celotno aplikacijo.

#### Pogoji

Da se ta funkcionalnost lahko prične izvajati, morajo biti izpolnjeni naslednji pogoji:

- Da se funkcionalnost lahko prične izvajati, mora biti uporabnik registriran.

#### Posledice

Po izvedbi osnovnega toka funkcionalnosti je posodobljena analitična podatkovna baza.

#### Posebnosti

Pri realizaciji funkcionalnosti je potrebna analitična podatkovna baza.

#### Prioritete identificiranih funkcionalnosti

Prioriteta funkcionalnosti je **WOULD HAVE**, saj funkcionalnost omogoča občinam dober pregled nad vso statistiko in primerjavo z ostalimi.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod       | Pričakovan rezultat |
| :---------------------- | :--------------------- | :--------- | :------------------ |
| Arhiviraj | Uporabnik je predstavnik občine | Pritisk na gumb arhiviraj | Podatki so poslani v analitično podatkovno bazo, aplikacija prikaže okno o potrditvi |
| Nov predlog | Prazen obrazec predloga | Potrdi nov predlog | Podatki so poslani v analitično podatkovno bazo, aplikacija prikaže okno o potrditvi |


## 6. Nefunkcionalne zahteve

**Zahteve izdelka**:

1. **Aplikacija mora biti sposobna delovati na spletnih brskalnikih Google Chrome, Mozilla Firefox, Safari in Microsoft Edge.**  
Aplikacijo bomo razvili tako, da bo ustrezno podprta iz strani danes najpogosteje uporabljenih spletnih brskalnikov Google Chrome, Mozilla Firefox, Safari in Microsoft.
2. **Aplikacija uporabniku ne sme omogočiti dostopa do podatkov in funkcionalnosti, za katere ni irzecno pooblaščen.**  
Neprijavljen uporabnik ne sme imeti možnosti komentiranja in dodajanja novih predlogov. Prav tako ne smeta niti neprijavljen niti prijavljen uporabnik imeti dostopa do arhiviranja in brisanja predlogov, te funkcionalnosti ima namreč predstavnik občine. Prav tako imajo moderatorske in administratorske funkcionalnosti le moderatorji in administratorji.
3. **Aplikacija mora biti zmožna streči najmanj 1000 hkratnim uporabnikom.**  
Glede na populacijo Slovenije in število občin, mora aplikacija na začetku obvladovati vsaj 1000 dnevnih uporabnikov.
4. **Aplikacija mora biti dosegljiva najmanj 98% časa.**  
Prizadevamo si, da bo naša aplikacija na voljo najmanj 98,6% časa, kar pomeni, da je lahko nedostopna 5 dni v letu. Naš cilj je, da bo aplikacija zanesljiva in stabilna, ter tako dostopna 24/7, vendar lahko pride do raznih problemov/hroščev, zato si na leto lahko dovolimo 5 dni (čas petih dni je razporejen čez celotno leto), ko sistem ne bo aktiven.
5. **Hitrost izvajanja - odzivni čas dogodka in čas osveževanja zaslona mora biti pod 3 sekunde.**  
Za sistem je zelo pomembno, da je odzivna (zelo vpliva na samo uporabniško izkušnjo). Da je odzivnost učinkovita je zelo pomembno, da odzivni čas ne presega 5 sekund (Kar lahko razberemo iz različnih študij na to temo), ker pa naš sistem ni preveč zahteven se nam zdi da lahko dosežemo odzivni čas do 3eh sekund. 
6. **Enostavnost uporabe - UI mora biti tako intuitiven, da uporabnik ne bo potreboval nobenega usposabljana. Po 15 min uporabljanja sistema, je uporabnik sposoben uporabljati ključne funkcionalnosti.**  
Za dobro uporabniško izkušnjo je zelo pomembna tudi sama preprostost/enostavnost uporabniškega vmesnika. Za naš sistem bomo postavili tak grafični uporabniški vmesnik, da bo enostaven za uporabo in da ga bo sam uporabnik v kar se da hitrem času znal dobro uporabljati. Sepravi ciljamo na intuitiven UI.

**Organizacijske zahteve**:

7. **Uporabljali bomo RUP proces.**  
8. **Med implementacijo sistema, se bomo s skupino poskušali sestati vsaj enkrat dnevno.**
9. **Uporabljali bomo programski jezik JavaScript, Angular ogrodje in Node.js razvojno okolje.**  
Z razvojno ekipo projekta smo se dogovorili, da bomo za postavitev aplikacije uporabljali naslednje tehnologije: JavaScript, Angular ogrodje ter Node.js. Naštete tehnologije se nam zdijo najbolj primerne za postavitev spletne aplikacije.

**Zunanje zahteve:**  

10. **Vse osebne podatke, ki jih bo izbrisal uporabnik, bomo izbrisali iz vseh podatkovnih baz.**  
Nimamo namena hraniti podatkov o uporabnikih, ki so se odločili izbrisati profil. Z brisanjem takih podatkov tudi preprečimo morebitnim napadalcem priti, do informacij o profilih iz preteklosti (poleg seveda obstoječih profilov).

11. **Gesla bomo kodirali z BCRYPT zgoščevalno funkcijo.**  
Ker gesla posameznih uporabnikov ni pametno shranjevati obliki nizov, smo se odločili, da jih bomo kodirali z BCRYPT zgoščevalno funkcijo. To zgoščevalno funkcijo smo si izbrali zato, ker smo po krajši raziskavi področja kriptiranja podatkov spoznali, da je le ta ena bolj varnih zgoščevaljnih funkcij danes.
12. **Sistem z vsemi podatki rokuje v skladu z uredbo GDPR, kar se redno preglejuje.**
13. **Sistem mora uporabnike ustrezno opozoriti o hranjenju podaktov in piškotkov, s čimer se mora uporabnik seveda tudi strinjati.**



## 7. Prototipi vmesnikov

### Vmesniki do zunanjih naprav

Za delovanje aplikacije potrebujemo dostop do Google Maps vmesnika. Sami bomo nudili dostop do statističnih podatkov, ki jih aplikacija akumulira, v obliki API-ja. Uporabni bodo predvsem za občine. 



Funkcionalnosti, ki bodo potrebovale omenjene ali ponujale omenjene storitve:

**Dodajanje predloga**

Pri funkcionalnosti Dodajanje predloga, lahko na Mapi prikazani s pomočjo Google Maps kliknemo na površino in tako dodamo lokacijo predlogu. Lahko pa v polje "Lokacija" vpišemo naslov in lokacija se bo na zemljevidu prikazala samodejno. 

```javascript
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.5584, lng: 15.6453 },
    zoom: 7,
  });
}```
```



**Priprava statističnih podatkov**

Spletna aplikacija v ozadju na podlagi akcij uporabnikov pripravlja tudi določene statistične podatke. 
Te bodo na voljo zunanjim uporabnikom, ki bodo lahko le-te uporabili v svoje namene.

Dostop do teh podatkov bo omogočen le registriranim uporabnikom.

Primeri klicev:

 - `		GET` `[API]/statistika/obcina/[id]` - Vrne inforamacije o predlogih občine s id-jem [id].
   - Število predlogov,
   - Statistika všečkov in nevšečkov,
   - Število komentarjev,
   - "Heatmap" lokacij predlogov.
 - `GET` `[API]/statistika/uporabnik/[id]/` - Vrne informacije o uporabniku.
   - Število njegovih predlogov 
   - Statistika o všečkih in nevšečkih, število komentarjev
 - `GET` `[API]/statistika/` - Vrne informacije o aplikaciji
   - Število vseh predlogov po občinah,
   - "Heatmap" lokacij predlogov vseh občin hkrati,
   - Informacije, katera občina je najbolj aktivna pri predlaganju. 

Argument `[API]` je pot do našega strežnika, kjer bomo aplikacijo gostili. Ta bo znana in dokumentirana po objavi testne oziroma produkcijske verzije aplikacije.



### Zaslonske slike

Zaslonske slike prikazujejo sledeče funkcionalnosti (v oklepajih so funkcionalnosti uporabljene na pogledu):



- **Začetna stran aplikacije**

![](/docs/gradivo/img/zacetna_stran.png)



- **Stran za prijavo/registracijo (1, 2)**

![](/docs/gradivo/img/register_preijava.png)

- **Novica (vsi tipi uporabnikov) (7)**

![](/docs/gradivo/img/novica.png)

- **Stran s predlogi (anonimni uporabnik) (12, 15)**

![](/docs/gradivo/img/predlogi_anon.png)

- **Stran s predlogi (uporabnik, predstavnik občine, moderator, administrator) (3, 9, 12, 13, 15)**

![](/docs/gradivo/img/predlogi_uporabni.png)

- **Predlog (anonimni uporabnik) **

![](/docs/gradivo/img/predlog_anon.png)

- **Predlog (uporabnik, predstavnik občine, moderator, administrator) (3, 7, 8, 9, 13, 17)**

![](/docs/gradivo/img/predlog_uporabnik.png)

- **Arhiv (anonimni uporabnik) (12, 15)**

![](/docs/gradivo/img/arhiv_anon.png)

- **Arhiv (uporabnik, predstavnik občine, moderator, administrator) (3, 12, 14, 15)**

![](/docs/gradivo/img/arhiv_uporabnik.png)

- **Dodajanje novice (predstavnik občine, moderator, administrator) (3, 11)**

![](/docs/gradivo/img/dodajanje_novice.png)

- **Dodajanje predloga (uporabnik, moderator, administrator) (3, 6, 10)**

![](/docs/gradivo/img/dodajanje_predloga.png)

- **Seznam uporabnikov (administrator) (3, 4, 5, 16)**

![](/docs/gradivo/img/seznam_uporabnikov.png)
