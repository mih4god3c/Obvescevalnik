# Načrt sistema

|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | Občinski obveščevalnik                                         |
| **Člani projektne skupine** | Miha Godec, Vid Potočnik, Lucijan Semprimožnik, Matic Conradi, Luka Kolar|
| **Kraj in datum**           | 29.4.2022                                   |

## Povzetek

V 3. delu projekta predstavljamo načrt sistema Občinski obveščevalnik, ki je razdeljen na 3 glavne dele: načrt arhitekture, načrt strukture in načrt obnašanja.

V načrtu arhitekture smo z enostavnimi bločnimi diagrami predstavili logični, procesni in razvojni pogled naše aplikacije. Uporabili smo arhitekturni vzorec MVC (model, pogled, krmilnik).

V načrtu strukture smo z diagramom predstavili vse razrede in povezave med njimi, ki jih bo naša aplikacija imela. Za vsak razred so našteti atributi in nesamoumevne metode (niso getter, setter...) in njihovi opisi. Opisane pa imamo tudi krmilnike in poglede.

V načrtu obnašanja so našteti vsi primeri uporabe aplikacijskih funkcionalnih tokov, njihovi opisi in diagrami zaporedja. 

## 1. Načrt arhitekture

## 1.1 Logični pogled
Logični pogled prikazuje komponente aplikacijske arhitekture, ki sledi vzorcu Model-Pogled-Krmilnik (Model-View-Controller).


![RD](https://teaching.lavbic.net/plantuml/png/ZLJDRjim3BxhAOZkqDFGzM_hWA60sst5a7KDaFMI6sEhYM9RD6WvNJVq4VfMVR1HajDwhfCkW6EB_4X--aYfpesjaB646QRvdAcnMKe5CTmkZDEgVl9d-WQRmltKlrnIcBajjNMGof_c3ggfTOgrXZyAEXdFEnd5JfnfZhOtnr_FJhwSYnMPwJOQPuL4gljEMamTyLadBaBwWC62pw3lncftLsaWTWlgHq_SNQ41RtLDfLPgrr45ZeIjSoJRDwnJPyYg_zH4xOQii3DjBDgbWThKJfSxW3LCaoVlTKMCCslouBX-ibyGpOLEYLKDoVXRy5vS9agbo1bSKgOBusqbPLvh04yFhO_fvnpt_JzePL8Cpgk-RymwAsWUd2y2H-HtY1oy4-bG83FYqXHIBV39kNp1Pms0PaqC8QGOxM-4MizHHzJ1HbGLsSQzZ0utulAM-B957csXoBWgbj8n1CR7XqQ8x6n45vHZQfOjpsCbaaHDnhvxcObIt50XWmj9LXehGy3eEom1c9KG4Rty4_tR-iFavP8omi33EQfrtytvtEizj6HDQSspoY6g5eqMmsK-KuP-f_fV7Vbm2Em78sog1zu_648dl30jwwDDsTPZniU36eXE5kfrDHEXxuUWdNdc3zjpcIMkQ8_rFFH1MaSnx6GeR2hzryuYUAoDm8y3FV2RgHsk_4HSpHuVv9e9uBmmwMlAT-QSzzzj5xwBFHJTMoeoSt8BmDjJV_YKFFvJB2f-ou_DVE7aVRgUIzM-UruVhrwvWBRUQXikDNKDdph59OsicygNz8TcsYuZwzt0EYodoLy0)

## 1.2 Procesni pogled
Aplikacija je v osnovi zasnovana kot strežniška (spletna ali mobilna) aplikacija, ki vključuje programsko opremo v zaledju in na odjemalčevi napravi. Procesni pogled prikazuje abstrakcijo procesov, ki sestavljajo delujoč sistem.

![RD](https://teaching.lavbic.net/plantuml/png/ZLB1Rjim3BthAuZidEE0OXWAr5q735aG0sukkJ4MuogMHOEMbwN5FcO_ibl_QxITj8Qp3hr8ukCZ7qcnALseKR22BUPb8Tm6cxDdWSE3YsIQ5x-b7RO-tjFFUEDT4IeA4N8zI4Qijg4S6u8d0wECjwECYhDOaW7xyF5hSdLtgoYAy640jruZpQzHMimZIpAA6oXJmZy5NqdVNQ1uh0bgzaUlnZH15e-U00_KS4N6UDf5Y0pYYeS8rWdbqN4mxvoAwNF2RDC637i7M2ew0snWStQjQnRS1bVsyDeOqsbWABICMKQbje8IK0ks64l-eSyjFcBFphuaOtOghdgJcqwvN6ZrJOd0jL25y8YUxFv4tlJV1p2AMB8bxthtSkfRIEMyzZ2u5rDt5eMU_mJt_5lbwgdoqCegVIjgc4ocs_3V-jdkzVBvgOFLPGSfwsM76Y_K4j5S_goMm4KrhebKJLIobLPbbl1vtjRpQssyU_QxebOtySxkTaZDxhFCuanDuHFSfDzwu1IXw0R0cBL2bWzXVfsk9klmhZd-1G00)

### 1.3 Razvojni pogled 

![RD](https://teaching.lavbic.net/plantuml/png/bLLBRjim4Dtp58Ixzh905u41fsWBeorgmCscy6OiqVPO52cGb5odo15wYDwblLU7f3wKOmN89e5cthmP3X-VRO6g0WCbtq5M78okLPvfgGq_7z49PljyBlPGI_TT_7HBYGTL2kLuHd-4IL2r5HbOmNyndZ2-JnWfhaqkJ8ozUVln_js7znG5O_Gv1dUIAjbJGWkPq-O-gOkGQy3DXWFe2ohXBfNWbPONIH_N11jtaOB3MLXT2iQShhZJDAzpcXQ0HcGEjM9CYhtp6OE7eqiJwDUnXqpmsSeMe4w2e-9xbCwW2PzRnIiZSgaFkk4WaIlTO3RZO7bNSNVNqomMAUL3PQ2Hfm2o2L4PofFiEYRW9IfjOAVmtvy2jigA4xGSCKoJR2WsNT_DMca_Xyx15RfHI7V-YEbXrlgU8jCyttQDX5mt7ajCTTkVo09BcduOSjDyoqfY0PYTw6PvKmfB-Arw16uTEBIEgWFnShto4JlDzDcKAAcQKp4KTLdBU8CqPSVrzxV2Ot_wmBlnf7tf9FdQeByjw8j95r8Na65KpACevKaqcCTh-T5zle9ngtGda3gGjA9OX_prbR1CbvLM_atFDfKKJj6fmovff3X46rxsKQAmzSvUh1FbOX6U_C3Yxx_TGH-aFYbasJZwDv1DuTh1Nq3qqdW1aqeUjwhLHbJzwghkYJ5Q4koyaytMdRh1gplkOeYHl6yj8YatM8AXugsg1YPx9DFPjMGjOY3TnEnugi1xOo_uxD0tL_CSzZIQSoCACiumAIWofY1lc1nwW2yZEdlz0JRTcuGRi_bBI6xlazO7ykQlK5dlLuPCKuH1V8Inpe_ckJwh-QAN7xjsj0um4X-xvPtp3jf6OfEWwRHBRt9ihESECs5XZFd1gSbYUDriUEVpjEyLSVZLeNpFbWpcVvbyQiMwLvE4XcUI1DdOgPF6oARiTvvsnw7LKDkw3BiodH4xwmNimoFdP8bidoVPs6KxG9HIpBQoygdEwly3)

## 2. Načrt strukture

### 2.1 Razredni diagram

![RD](https://teaching.lavbic.net/plantuml/png/hLVDZXit3BxFKmnsBss1B184BTeU0cnGD5YaiOqOtiCMGI5hQ9lp9qFpSt3HHyXRvS5A_OvcHdRMm5uI3qLIvCUFf9QNh6dIpL58jgsnI6ztE-3Rj-c_2TPjYfa_OMcoRYNM-xIpegOG3nLuCLRWVXubqbVXZw1YMARQOuj7yoDZRLTvZGDh3X-WAOMNDAnihIGJ6Sk7G7xuCJbAw47YHdssjMZQZOy9zeoYgfLMBsjSaMrRmCXQoRq0b3lHY4niSQJrNv9m3SvAGbQA_GmQAsSkuffHjBsNAYN1AP8Paiv07B59_lvYlzOb1UEEYZBlldsbmrqfM9kMec0SSpOWPq2nbxbSOrzXVeE2JsuXUkHibfiMmpYpIs5FujBcOXw8l_QZhB0aB3P7oVeoPtNEFZFUrQ9FR_cly0l_ZKBfchPd4lM1pe8K7qxqNvsR0ZiQDAs4awA18apqO2N8TKbcH8z1YH3jJT4ThzGLAosFtlIU2e6aJHu7eQMODICvmTMIupNaOj2wxriXyQJAgAGYytSxmXMYvWFFgRkiWolf6e7MLc04xgGoO_uGD0Kx8PMOrK_i3rLIyWEEsqDMZq0tz0gFH_g73QPALUnBo08RiLKv1xVCQ3c-ToDXVcqqC4FNoEt-mDpjUKdmQizYWQUEldTO4fsbaIqho96eTvWSE1GdSGJXpOhmbsbS280dKvNq4rJ4nnupuqs9hB8mZgYbGEuOX_Jfqp-VOOz4PZq4qjljM_XvnuqlNcDmg7FJnCNbLh8JS8rpApEYwLxaTX22bqviRLxMDhnLOzX3qs8f5j2PpcBVrH2RqRQ8w-WvFpv2ttqhrPCHI6o_pT0myaj0U8MmYcjRHfoXC3Isb_imUyl_MPRdLLsoqtoMMJGTBGw2VI9rMdawveYNUtd0Fe89g6xGc6pLo0eNmSX-qbA19ukcAuUUythuUw-ElmlcoTtfSPWnMcTvv3QtVVmb7GM6lbs34X6-WcCKkBKYOkM7ePYdxvDoSQlVdqG6aj5GRWeyh6XM8ZUPKBUF7nkQDItOljSrKPmd7xrrAhB-15NKO_gxCwgXeXRyzjNPw6zclaSNYa5lEk8d7M0V9a6DL1sM2ZogKiad0zcK_3aO7mrXWj765B56Wt24pVrmJEAjnEQSvdjpfXzYz9AWzNuoSVdktpH7Q6fX5S65F6GmUMCqm8l9RJKyHgHgKItfIHOkKTT84H2K-aT1ZycMIHrlGNHVi0zTjJLYoZS_NnSSyp0wQQRjc4LNhQBF660Z2n0oeGKlG8hzWPPSgLuyjEG29cXF8Heh7q7tV63-D8knneDPbwOzh2rzQNEyD65SYYy_OvBXxvcRDtTtRsvUlRfvVNVtquszCd6TCpwrZ-5akc-TrZlpuyBZDGdsqdLMTlfVPpIVV5VONtY26pYKbzVQYxyX2QREjQWysyg_ivAmbvJ-S-qkFe6doJbEHAbvBbpthhlEwboIPcc_ZDM0MH9PvrVbynsRSt7PfVv2PW47_WS0)

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/Razredni_diagram.puml))

### 2.2 Opis razredov


### Uporabnik

- Razred, ki skrbi za funkcionalnost posameznega uporabnika in hrani njegove lastnosti.

#### Atributi

- idUporabnika : int
- uporabniskoIme : String
- ime : String
- priimek : String
- email : String
- tip : int
	- določa pravice uporabnika
- datum : int
	- datum kreiranja uporabnika
- hashGesla : String
	- zgoščena vrednost gesla
- saltGesla : String
	- dodatna naključna vrednost, ki se skupaj z geslom uporablja pri zgočevanju

#### Nesamoumevne metode

- dodajUporabnika() : void 
- preveriUnikatnostUporabniskegaImena(String uporabniskoIme) : bool 
- vrniPodatkeUporabnika(int idUporabnika) : Uporabnik 
- vrniUporabnike() : []Uporabnik 
- posodobiUporabnika(String ime, String priimek, String email, String geslo, int tip) : void 


### Predlog
- Razred, ki skrbi za funkcionalnosti predlogov.

#### Atributi
- idPredloga : int
- naslovPredloga : String
- ocena : int
- idUporabnika : int
- opis : String
- slike : []String
- ključ : String
- lokacija : []float
- datum : int

#### Nesamoumevne metode
- dodajPredlog(int idUporabnik, String naslovPredloga, String opis, []String slike) : void 
- vrniPredlog(int idPredloga) : Predlog 
- vrniPredloge() : []Predlog 
- posodobiPredlog(int idPredlog, int idUporabnik, String naslovPredloga, String opis, []String slike) : void 


### Novica

- Razred, ki shranjuje lastnosti določene novice za namen prikaza podrobnosti uporabnikom.

#### Atributi

- idNovice : int
- naslov : String
- opis : String
- slike : []String
- datum : int

#### Nesamoumevne metode

- dodajNovico(int idUporabnika, int idPredloga, String naslov, String opis, []String slike) : void 
- vrniPredloge(int idNovice) : []Predlog 


### K - KrmilnikUpravljanjaRačunov
- Razred skrbi za vse operacije, ki se navezujejo na ustvarjanje in upravljanje računov uporabnikov.

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- ustvariRacun() : void
- poljaIzpolnjena() : void
- preveriUstreznostGesla() : void
- preveriUstreznostPonovljenegaGesla() : void
- prijaviUporanika() : void
- poljaPrijavaIzpolnjena() : void
- preveriBlokiranost() : void
- preveriPodatkePrijava() : void
- nastaviSejo() : void
- preveriAvtorizacijo() : void
- odjaviUporabnika() : void
- koncajUporabniskoSejo() : void
- vrniUporabnike() : void
- posodobiUporabnika() : void


### K - KrmilnikUpravljanjaPredlogov
- Razred skrbi za vse operacije, ki se navezujejo na dodajanje in upravljanje s predlogi.

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- vrniPredloge() : void
- vrniPredlog() : void
- prikaziStranZaDodajanjePredloga() : void
- preveriVeljavnostVnosa() : void
- prikaziPredogledPredloga() : void
- objaviPredlog() : void
- posodobiPredlog() : void
- prikaziStranZaUrejanjePredloga() : void
- prikaziStranZaDodajanjeNovice() : void
- prikaziPredogledNovice() : void
- objaviNovico() : void
- iskanjePoNizu() : void
- filtriranjePoOmejitvah() : void
- filtriranjePredlogov() : void
- prikaziStranPredloga() : void


### K - KrmilnikLokacije
- Razred skrbi za vse operacije, ki se navezujejo na dodajanje lokacije predlogu.

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- pridobiZemljevid() : void
- pridobiLokacijo() : void


### ZM - Registracija

- Stran za registracijo

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- pricniRegistracijo() : void
- izpolniObrazec() : void
- potrdiPogojeUporabe() : void
- potrdiRegistracijo() : void
- prikaziObrazecRegistracija() : void
- obvestiloNeustreznaRegistracija() : void
- obvestiloNeustreznoUporabniskoIme() : void
- obvestiloNeustreznoGeslo() : void
- obvestiloNeizpolnjenaPolja() : void


### ZM - Prijava

- Začetna stran za prijavo v aplikacijo

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- pricniPrijavo() : void
- izpolniObrazec() : void
- potrdiPrijavo() : void
- prikaziStranSPredlogi() : void
- prikaziObrazecPrijava() : void
- prikaziObvestiloNeveljavnoUporabniskoIme() : void
- prikaziObvestiloNeveljavnoGeslo() : void


### ZM - Odjava

- Pogled za potrditev odjave uporabnika

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- pricniOdjavo() : void
- prikaziZacetnoStran() : void


### ZM - Arhiv
- Zaslonska maska, na katerem bo UI, preko katerega bo uporabnik lahko pregledoval arhivirane predloge.

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- pricniPregled() : void
- izberiPredlog() : void


### ZM - DodajanjeNovice
- Zaslonska maska, na katerem bo UI, preko katerega bo uporabnik lahko dodal novo novico.

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- izpolniPolja() : void
- dodajSlike() : void
- izberiLokacijoNaZemljevidu() : void
- nadaljuj() : void


### ZM - Novica
- Zaslonska maska, na katerem bo UI, preko katerega bo lahko uporabnik urejal in pregledoval novice.

#### Atributi

*Ni atributov*

#### Nesamoumevne metode

- uredi() : void
- objavi() : void
- prikaziSporocilo() : void


### ZM - SeznamUporabnikov

- Pogled, kjer lahko vidimo uporabnike.

#### Atributi

- *Ni atributov*

#### Nesamoumevne metode

- pricniDodajanje() : void
- dodajanjeModeratorskihPravic() : void
- izbiraUporabnika() : void
- potrditev() : void
- pricniOdstranjevanje() : void
- odvzemModeratorskihPravic() : void
- pricniOnemogočanje() : void
- onemogačanjeUporabnika()  : void
- omogočanjeUporabnika() : void

### ZM - Predlog

- Pogled, kjer lahko vidimo posamezen predlog.

#### Atributi

- *Ni atributov*

#### Nesamoumevne metode

- izberiObjavljalca() : void
- prikaziPredlog() : void
- uredi() : void
- objavi() : void
- prikaziSporocilo() : void
- pregledPredloga() : void
- arhiviranjePredloga() : void
- potrditevArhiviranje() : void
- brisanjePredloga() : void
- potrditevBrisanja() : void
- vpisiRazlog() : void
- obvestiloUspesnoBrisanje() : void
- urediPredlog() : void
- dodajNovico() : void
- vseckanjePredloga() : void
- neVseckanjePredloga() : void
- vnosOcene() : void
- posodobiStran() : void
- prikaziSporocilo() : void
- vnosKomentarja() : void
- klikNaGumbKomentiraj() : void

### ZM - Predlogi

- Pogled, kjer lahko vidimo seznam predlogov.

#### Atributi

- *Ni atributov*

#### Nesamoumevne metode

- prikaziStranSPredlogi() : void
- izberiPredlog() : void
- dodajanjePredloga() : void
- pricniArhiviranje() : void
- pricniBrisanje() : void
- klikNaPredlog() : void
- vnosIskalnegaNiza() : void
- prikaziArhiv() : void
- vnosOcenePriPredlogu() : void
- posodobiStran() : void
- prikaziSporocilo() : void
- vnosFiltrirnihOmejitev() : void
- posodobitevStrani() : void

### ZM - DodajanjePredloga

- Pogled, kjer lahko dodamo predlog.

#### Atributi

- *Ni atributov*

#### Nesamoumevne metode

- izpolniPolja() : void
- dodajSlike() : void
- izberiLokacijoNaZemljevidu() : void
- nadaljuj() : void


## 3. Načrt obnašanja


### 3.1 Registracija

![DZ](https://teaching.lavbic.net/plantuml/png/bPBFRjD04CRl-nIhS2WSSY1A95HLaTe8K0M2A91JnM6yEqattkoOyTgjyWwy5G_6sCwVJMeaEDYoFDzytszdvz5Pr2kYcD6pKcNkGW4CMvs1oTTCLR26FB5-UdGHaxh55LG-ViVdUElTEcmnH6taXPoem4JYEsABF6jjCY--BmJ7h5bl5Z3JKzAlTL8iyMU5mU1djv8dO9hsQlBXxjtxMOzw3XoTSGM4-FyDlRWgkkXH3nQuTcLaC6u3UgYf35G7foFb0wNQu-h15onOohNVOD1LGGnPSFb0ttxJoxVwvgQLJQTA5QVKS-U1Xb8l9gAj7Jw9z4pvYRVEYwDuSvC2GLWOVl-g1APh7KcheH2Pl4U-D5YUc1hnMCHRikWRfYkXSpL455Pr_5vCb1BsuLI-hhKSpmIN0DFhDqdPxGeIlgyPmmxDMQcWoDRDQKqRx2YmftxXd62Cb13AO4uWEUmEIUa4fMql6rthgemri5k0gO8KhcGymmTBCQBzqHdDsrnFRVLeJrcDPPJVIx75NO2BX6HOYx5IZMqNAEVVm7qx1jc1HfeAzxfnmuyriblALK0CLCR3pPGvhk5-s_NA1QMuuY_3sxSeYptMevDrHoxM7x7qhTlV9NEI1MgsLi8FydvmInOsnpNgXopsCxr0L2-dVrJ-y-Z_0000)

![DZ](https://teaching.lavbic.net/plantuml/png/bP7FQjj04CRl-nIBSsXoy276XXA28J5j2IsfSUjJwM6q6ZjZhNRKqKeEVeU-LH-i8_-Jx1fA3X8By_k--MRcXLAq2-QOyAinPKQX087S9k2ofN0LKiUUnQvVA6Addk82AX-_usjyyBGCEOPedVvGEXIuoFB8ag9CjZQ9Lzz_W6EloSLU8CBhZjxQJh74NnK6XrzeeL_0RhUhqSV7znyc5-WfI2H71OJuTi75k2PIz6XxCrnI6GKShS3sBMrMc9EDdDdRdZ7RUMtl6GlHUkrN66nLi40IAElPXszsVcllxxVOU6nCqROzjUvPAErif6nDk5RqXFmiENbrL6zfka3GC09_VbU1wvrqe5B78GfxZt9kC6ypDV1GuPnJz4scTvgEQeYeMStnFHiPezdxOttTMHtF1Ue4vkkRJfas1Mk-hud01jr9gU0eAKrvoIlSfS0BzJDd3QMxQ7jdi3cOTvUcv1uRtDcgZ3K8pS1LeR5e9naOe-lPOnfq1K_Rl7gihKLR4wnHQAx-k0bSnazO-lyWKzOJD7V79HpmjlNm81ssKhq2n4PwE4gPgVOftwSPslwFb6F4zEUkPJXAJ8hdrXrqT8AUiCq6ZllafCOoakTdhFPZj4bOSrpV_0K0)

![DZ](https://teaching.lavbic.net/plantuml/png/bP7FQjj04CRl-nIBUsXooA76XXA28J5j2IsfSUjJw66q6ZjZhNRKqKeEVeU-LH-i8_-9rgcXz22no_VDDx-TUQ8SxP8vPlniJ5rGg42Wj1cuOYNSXDonPx6R9ugOw3akeV7nEpx7Mq-hK6A8rkaF9N61YontB3dAT1UJUStzo_3IQtgs5uZm9gctDX5h_DbWSFY5ble5JBkz6N-yU_zXUiOz0udag88G_x_WBAw953tQmHnNL4S1HskmLvQsQop9HYxiS63Cxhrsy82LgDxwDGRRL2oG1Ie6zlQRNRopDpSxssHYJDMtFOqUMAZjVApUbd2ZrXFdPod9Qw9cIzS5Wi88_FxL16xtfKCjTHoYiFSehmCMFLDd7gcvv1nzn_HMwQY5YCfgNixpiJ7AVZNHqxNLvxb02J1VN2OoRIjMlg-Pm1RTYLHnb9nclE8rxYdmZFugES4O6YNKmVGW1MoFdT89Qjd1DhosJHrR49g3QqANf-CvA0gwXliThovhLzLhWYqABJGIju7h-0bh_m_BZ7K5tTvn1QdzCUSOCV-nnmxO72ew3oVl6nt3HtsuxWbY5tvSMrre-drvu1sTf2kKJlPGOd9CHvVUHiRqO-IinJgIvuTJi8lBFm00)

![DZ](https://teaching.lavbic.net/plantuml/png/bP71Jjj048Rl-nGZzr0uS20eKeLG98XQgQAYKLfE5OVnUXB6tkouuxM3yWvzgpvO9wOa3kJ2OQsL_c_-_n_l8nS42v6KovDpJSMnHiKLvEYhfKeR2oz15DQFd6YW5xJ0DgIVz9Ik0o_ZYc82Rn_I0OK-YTw85gJJtYOFvli6s6LDZsQXggm7ym03iQ7VBKLFttXX9z8mxSFuoysdpzCZz0mriUSQOth_mD6wBd4A1DcSbjmaHSybmXdmfgGLGv8ABZBd-dqXkwDQJUz2IH7QMXJpo5K6rp_W_XokhdfiCd6ktiSUMcU03Sp7ndPCQqCFo5jTSJ17yzPj2aOhe_ZtJnkbUnuTsQYNc5H2e3xhewLoXuciWzlTvsFdhDFPn6wNOBLzv44HEJaToBofnNA_vueRyWTIBKaBdibIIhhlDwOZ-Yjdvsp5VNI5cnVluRymy3yskeIsIHqgpz6tSUkmNsHaRgCNp7gM-BMlQs_GMvZsgv2Kg7XuJep4Es2svPqhQEYtBoTvHqtY87UlPqvE_m40)


### 3.2 Prijava

![DZ](https://teaching.lavbic.net/plantuml/png/bLBDRjf04BxlKwpeWUJ0eHP8LHGX1TfALQiMXNAgUXYy0rcyxBZZnKIyGz-g3zQnCVOIgDeUi2nzttn_-CaQr2kYiAHdfOhC-XmOjde9QRPcsdcJaYFM-oSRCC8Dhc3dmbTy3W_EhlqMVT2fF90Z5gI1U49iaAUrpDA9xWMXzPfUzG9csaVtMaTWWJzsw5FyP5VoynYxlHgzdxnvDxt2dW47czeSVFZ_WwjnLR31eUxDs6wW13tGL7WglTM1ifvITLFT-unvJN0Rz7gN4yFIswod7-PwyLhVtzUqyLYfl3DiHNiQ2lqu4bffSI-iCz97tbedOYBBbG7u3MY6NpztakDuciXfIZumEOVyKc3HnQd8Go5loQ2hulGbc2qXeCHKxVlZI11H7OpbzKxxgDnRAWBbDxTAAIdM40HElJss8S7wKgQ3CZZOBqk60wPDuUgykxQ7dAHWGn4i4gR09XAE8YPADIv9xI8CspQj79hy5KgoMcFzeJQJ8d0kDrIdW-6TBbdQa86GuRdaK0--6Ge1pVUJTCMAZ9KoU4sr3eabifquoYo3bo7FKnxXnhTRgcDuA8AqdEEctg96eZYZqmwmA78iFBJ_G_BdIl4d877xVn-X_oyhzAzako35IoKlTrCNtz0yo6hp6QDnjBOtjxy1)

![DZ](https://teaching.lavbic.net/plantuml/png/bPB1RjD048Rl-nIZS4WhqGDL8g6gYfGMa1088a9Fm65YZzk9DpjclNQhl0DlnODrx3hnEWq23aaixpV__y-_kUEK81C9AtamfipP5UXn0ojCybilbKiJiUBX_eu3HUSfPLZPy9KUmjpohTkG2v3e5_c8mYI8lnAVahzkPLPMTPy1Uw_herxelTn7ym3HOKa_At89VUHCFuvYjnVJTrUltruVeHVe0oTSe0l_Ft0qhWaSBC5euNcDDS8PeDKo70Qk7KEGV6HCkowCFb7HKdPD3gf2FAuSvoEOB-7c5LnUjjXiPapHk-wLHu0bV9agLZFTApM0FlWDMnLJMTyOe5iZUFpzgt9IFusUwsWYBdYnbloXm4qVfu4d2cya9Tl4qLnSOo2rDyOuqITBMG39zCq5BAJCgn9IAOCKgB-GLIvFM1nQfo_v9UGCMeP3gCMk1RuxS54NjAdwEghOxznexBEPFbn0uQacp_DQI-8j9hoMarFDqn4Q9DPyqwPH8ALOJl7f3bSunor_NddSKjBLt4ZgPNG8RmlHMZj4p_gZGe9F-Mcg3JAmwLpQs0t1-tuRXsWfxGCxw_UjcMR7eTnal-Fa0chlU24fXfo6aXCu-vPA29J-s4atL6Hi1btqgdstLrPozjXSsZ3bqt7dspVL4mxBe5ikARgKACvqrmFUb0ML3W-kPTptzQS5pJZEFlvx8-D_gMHy9EXpwA2tv_-XPT3MbWjFgPLRFZbz1000)

![DZ](https://teaching.lavbic.net/plantuml/png/bLBDQjj04BxlKmpgGSd1XnWRIWY6s6qXjAGXgK-XXx4qJbPQxQYhjHpy3dshFbX7icojKuMs1ml1zytt9p_hb63Dx5VyebILQrkYmm9McEHFZZSsJTYmW-spzXJWAQrnO_mtUl7NHZ_PWgo7H1xa0XOcdjsSNKfkqSgiZEZ-GJXwBGQzq3dU1lS00LZHZmtPXBxejVmiXMxlff_cxpyk1jXtwBnET8dM___1O5pbjJS4qPtJ6TO88z2xZ0ghmNCE5v5IRLU8RgbiAIOZ2vkI7QwipYEuVe3b1LnTjRJPJAcojppAHe0Lt4-5LclQ2kk4zDaLseYOoBh606s6uF3NputbUdywbjE4hNTi3BdN0ii-JaEU2BdWb4mJ9vPWkaPF4bCTt--dWeZgQ2Qlbs23SX-uyboUdIkbf5X743YnUj-61OkbJ0_bkDDVLmvtb7I5c_F-MkzAbe8THR10cBrB0-4WubYfpcNSkWX37vis3bt-1cLPhRE-QSsa29xAJTJXO789jPCsdABFwLHo0gF7bBsdzFj1kc45nagbDAJQXgIQd9uRphL3AqEUfjp3dM-_LDnJB5PUQZvGrewnXu90qyCIkAnAgYm6tsByTgqXcTUz6hyuB1R_VQxu7_PgQ0EBdQQnienymjhouR3A-QOWDV0_gwdosl3j6oTdvxy1)

![DZ](https://teaching.lavbic.net/plantuml/png/bLBDRjf04BxlKupemSc1Gn58LHGX1VgZgbKQ9U5KzJ3OGx9usN77YubuXxvL7wnZuy0wTTNsW6Nf--RxCuys8rWnXoK_6LFcrXSek84bflc3yDPdAJiMs3tQG16UqGgtBjpJKxXozi5lo0T8zK4IiJ0DB3EMZ6JUo2oTwlv6E7hDUxrGX7VHFK04blHzIpwbptQbFq-nswl9-zcRT_CUzWrAiAajq8V_F-YDQu8DZc1m8tQD5S8Gx7vD6syXS0wZWJ5DLnXSKz5Gt9eyR0iMN7gR3-3g3XQluVAoeKsdnXGdowFi0B24sudIAaixPNL8dsHZdOgfhDG6wDS8WZz_R3rNXzEHdgRiWx1p92y55gSuDNciv0rdvEeuYGQp5GRIcERuVZjHH5M7Ktsz01-LUyjbuEBit1YZnLg2mgctXpQiMA9bJb2EU_jbARYdj2rSdv-kxRvWBTXI58k4EKWM2KSHHyQqBgF6HHdssBHsQFFNAEjghVN7naoBO5TkR9uFnXTGYRRX34DENSan3Bzc709btvwbQrPaR4n6VQfDIAf8xCnnRWMz3jbDUO1RtzDIoOdYiGnQyuxMpHW7A0eqULu25sL1fSVeMup-NAjFvcMlsY-9YoL_dolvXxrgMizYtJHUbz5FM7d-GALZq_FtggWCrl5rbtbs_Wi0)


### 3.3 Odjava

![DZ](https://teaching.lavbic.net/plantuml/png/bP3FQjj04CRl-nI3Ut1ooA76XXA28N7RImirSNrfw66yEqvMMi-egvKS-WvzgpvOH_8VoOq9v22nyFtc-xwP9-y8rY9f9S_6bBdd0YDkO8KsVunIiRCI9CBsoIVgwOxMM8NqdPxJRV2Fl25EOFL7iKUXJHBl93gAizPc5TJt1N3CcftDmXXbsvi7w8ab_Qg8BNtrQ_sO-cdl9f_lFdoQdQ7d69Etla1ERnyuMzSadmB1u9lBi4Qu0YbPQlQG91yOqouAWtdqAeUC6Af28gxOvmEuNS3oFTpSjD1qQapHfHqS1u0bt4-KgZrj5JfXliID3-gbhh7nHyuG8lxzKsc9tUX8HwrmYX82DId34uTbLwUXnqfln55ewWorcAynaTOqn_VzH1MrlPhgyngOYkDo7wLCKbnS6cDqiJsWicNVRYEjr3cDZD7L6cvq3T8G_jW7bTsdg9WBMymEOfdBWZBP4mzEKYBtSnVNsk2oBAXarARG9TIH_LmSffnEOeRGLHet4xlOyMiJUgb-iBeNBUV_vruKFCyvwdSud6LtlXn_-nzeAR4iKaI-kFm7)


### 3.4 Dodajanje moderatorja

![DZ](https://teaching.lavbic.net/plantuml/png/bL91ZjD04BpFArhc01no84eaj5f5oWQu0DAA9IV4OUpfx7OydZOz4sUrV-1NF8osbzWEiP0usBAcggkhQln03c77d79-D2QM56ehjeBS5kMzy26uWZqB71yeuGXtkBC7dxxYOrfxkWyLXWI5lb16B5iabXiMXxBfP7AlkXU4VjTcSfSLuUDe7c04Hlnnm53W9zhf4t2yxSNomytRzvi9zgsLH0NLDgJ_7vYqQn8bZv2zOsVtDkmHAbPTg_ds5cR0CN0J21ANcJ5TRiZMhg90CNMq3DPti7q3rzSTkbePKmzR8Rl3fw2E3ZMBpGELt6HW8tnPwaH3UDI1C_v7gSWhJoV4DhurPK7ihv-7S1gTwsZ18GbxZ_AtmFQqwPcyK7ARoRVEsWJKs8IwtwZfsKe_hg0MAWBr7RnwRTHUYysle950lMGB3H9perPQskAVj8LH4xDlZbD2z_rPDNQjR8TIEgaHPpd5SJXMDQC4z9IJs9vhrS3BFnccqG5qRJdq-NJjiSHRBPwAynfgZkmuftEHFluaV6RsieEQapZoV17hiegUEjZclC6Oz6mRQzI_T7Hxlm40)

![DZ](https://teaching.lavbic.net/plantuml/png/bLNHRjem57ttLrZiWVQX3qDGeAegqMwJggqgAkDfseCJtrA3iJF7IIl-ON-r3zjr4YTEID6615AuvvvxpxdNpelWG9-rjf5-8oJT2PKmm_OqOl5kOtIcUAobDlJrHLW8uXoUMIRjTtYp2oasQW_AqXX_m0Ge5bjjRhNXOEuAcaWYxn6WhdNNMuiPer-3V4g3O0g_Cb0nV1FF-5KGLlim-N8x-tpNWruoOqKi4gRi_oVqjakii1Beu9FcRClK5kXU8oz3VLj6BoYJQ8rYLkHAKAjt0q8AyNImu7kXH6eBx80kLdJzaLvV5z6R6qAIfZGTB0rmgJS3obBwD4LOBk0LKItG2WuAUyyIRLYan4xd9Nxs3huY5ILgyWxggzaBYMp8QrWkdKX6apBLLnXXRgoLDLfACF_4ODYVtvdo1FCkmGdvbuXr9ijkdRKNNkB60OuC2K5xBsvGvnLsBtRi85RelLfv5yxEtMH4pYmWYA0V3ZswehbHeW912pGYADo1Ba-0BWasVF63Qsk1_omPqs9GI-zXGHCW9iS83Y5ZeqGS8Z2-CDRjxRhRJr_JBlUeJsH7XpoaqyHnqnrurSkqzhif5JADMa-JeDMf5phrGX-ZRR50CcR8Gl0akF2yL5AFlps0ES7jSh3nITYOuCA4WkP-2klcF1LK0MRMXmb8PwGbhXOqyuBgFAS73seLv6vjyNh97_nbWbVJon9FZuWHE6oGYRQ6EsJXnypxaUXKSnrr-6iVUiCz1fJiKlVehaCjXIYu-0ohuK-wmtUc3yFzJJHU3O-uE0U8sx6oWcji66vBpOqBcgKsPqOyiJXJ3yszM-HKQpvoHBWozqMbBIZMOHpNK6UCWToDnLbYbKwjToZTmORTxylqOSSfhB45drF4QqBktWijctkIlPSk6hev9fMEzZbR1l36Pntba5hyUvqca2fTlv7Eply2)


### 3.5 Odstranjevanje moderatorja

![DZ](https://teaching.lavbic.net/plantuml/png/bLF1Rjf04BtxArRqG7lWK0fI5KMHahILehOAIiAfwc7idP01UySThqt4F_Il-c4Tsy5U1n8fIDYOUU_DUpFh1x9exfbzp8zHL6p8vI2GcHYIpKguT3RXbCLi7yXZKBTu3sNgx_3HdwUqSXawRnAze0GeI3pB1Oj5kMnaubHr3m1ThykZlK24jm7VcA1Ou9yINO8_w5w_3iDkx-RVBZv_lJo2Ne1uIYW7vzzEE6etykHJDADhMtW1jyQglfYCLHmqv1hCn73Xk79aF6z6KTI4DwDpcv6ZcgMF8tD-QvOVpUbfKpqxYwAyRsr6jxXpQglCMI1sjE5gPA0mDtDbL8HR9GpmtoMZL77A4AZIjPe28_3lR-dsrAbI4tPUE4rHdWiizvrQy4p1TQPKSUC1S25eKrwri4y1h0bA5NXKcv5ccvpfZnEJ2oMEXlDw_o7IA3LWUc8gSTIrhqkzpZHIspLizYfi5gdXoI_BtgFztQeMpGIN_G0RgG0pFuQn6Agsd_6JrJRB1dPq7GliCFd25kf9uyz---ghZqwxc0GwVUXZQv5jjSEie-fPV5ZexYXHLDYIlLWzUTLWPZaNR3cceNOtgwFbCDdOX4FMnrwwB7m5GZUGb6uOh8PDUmTwogvsUjC1kAVoi4NWHx12eMNjn3ik_DvOiS4LN6MjmDWShd6DUr8Bw2HjFVn1lcFqTdffItw-t5PkU2GM8I5OLbnXuVN_PP6ZljtTwfjblJNdQp53kSECBoSyEBg7sJheoxcUlwR_0G00)

![DZ](https://teaching.lavbic.net/plantuml/png/bLH1Rjim4Bpp5OHxS7lmeOOTsq4G84bR86Y3675zAdgWn8r3cI9LYbO2_w6_wiEwb4I9afMWDM01qixEximk-IGuq4UjRQHV2CdtGcNCi9H6BDxlZ3ue7ckf3Nr-4XQ2E8T7Tf3sExpOAobsAWLbQOmFC06AnLQRQsquc9kI9fB8Um9eQjqCrcB6wESWdz8WcCEl0wWOleb7_2i8gxsRVxbUVhuPGA-PiI8M6LFs_nC6soLMM0bqTCzpQvXAe70FcceaPoWoONH2cKH_5BEYK89QlHyHKZf0HrSy5KguL7mTqQiDtNwa5nTbzFAIaAojJqTh0rpgtOYod3ui45O8U4PK1xI1eq81XqmR5YcnrqM5Nxw2hqb5XPg_WlfgKY6H3NaDAsI28XdDgbHVOOgviLRMQ2d1_1E3ONz-7vGdMFK9tf1_XbXdikpNsNhX5MuMuCYO4BHtSeawpx5xiMT7iN5ZstWNtdzman45iu0WWduuzFIS5aQ96WGTq9IWS0SwUmDqHh3XoG-khGN-isBCoq6jlOSbJO2Odo8uX8oj4d6CmFZ2M7Umwtu_hpLzsYZIeqKUq-lYjEiUl6vcqHZUzXCoJJjlyw3NXLUwy4hlewJS81apP25u55nuLKbfvj-Tm8hWUZdOx4tOZE36X89MVWpRza2LL05cEOG9I9Ua8wuHj2m52SEQFAS7JseTrBmuGdhdhnAydPxMU7P4ZAXn2ykqDHpleg8qO-dDo7IkkOv4bxmnOJ0yeBvYbtf0T1CAUuuAo2r-tEOPv4ftxqLNelwDwyMOznV3WSRXScSQxurxNAeZnDrOrO0Z7OURr73ZyXvoMp0Z7bXyK7VjfLpcr6TWweXmdMxBIWaercESDL3dcu42Tt3h7BDAvzORcEzXnsxJAdtSCn9h9E1podX3o3LdIMSA0ydUQXSDTsb6QXtTCxWEuAtF_TbySfMhiVm5)


### 3.6 Dodajanje predloga s sliko in lokacijo
![DZ](https://teaching.lavbic.net/plantuml/png/hLLDRzim3BthLn3PPJlqE60eWWBzs2xBXW1PU-YmWsonAMr5z1J5BVBh9pl-a6lPmR0TuYJIu-FZ4qK_aq9uOdO9lmgnpyaKqieT93BDjvOFHgMisSBBCpaCzXK-oODsF_3LNMlQcXqQ1wb_e0rGCdLiRzWgjBSrJQ8zxmZGvRgDvfBMyaiG3n1ixl7t0KsAAtho7uDXjdSVlzny-dmRGQ-bTPHI8Otx-u2eNE78QOJ57IkPIPCX51QLvgs42-2zuT8GECuNGjH5ms9jAPEbpj30eM0h4qFv0gutS0_BPOsvkXAYw1DN8JKbBK3keVtZqINXYmSFi6CXTLI_70zhMCCC4yYlTaVQQ_RgRLM79vLjBYvhWWwoNAPid6MjqKxoQCvbIXaEGbUpiQ7QLkutLgXzrAxwhYoyXukhpgrBBv5oUQIDiz9iskNt7wfZeL8wxA12T1PxWbRG9PJMKBE3OLoB4A8hgKzSgvgE3L5TtbCb5pyLEuVgLwXXZqSZT-lMRQ5mWggNqjFqNipGzDMyDL2rBTGiIL_8b5UXsO_oBX8vQr-lkGlreYV8ekgxbGuUySeVTNyl0lshkW352JtYpj_KabHCyKhqtHgNV6p3OnfNGcZc0WuMXnTM0DJM1qHqBDZ7hDdVDozb3AWFPwCfn-Ws7HEqj3hTDFukkxeErI42dB6X3Qov8uK0d7EYkUHLRN4hnfgDL59dXsn6OIKGIr_P0tfZIiDxz-0VCgvJ13edP1R-fyjfmmqXnVNE2gexl-emtcfKGSl790te-rwTKDgGrMKFwKFoPgsrj0loZQQgYOT63I_t9N3Ygwtssja_gEcqssnvqFISgzkm1yQ7q_anrzo4oWypEUFE6jGn14K5WDE4ygzWJabNhHql_ite_iSP__z6_6pvRqd63ioy4SSPuo-8qJZz0m00)


### 3.7 Pregled arhiviranih predlogov

![DZ](https://teaching.lavbic.net/plantuml/png/bP5FRzf04CNl-ob6pg79WKFv8rLHX4HGSaaFg6rEKGvhxm0JhtVSyM8YFdt71e9Hd4GzO26_txptPhmcXx1aZYc_6bFb54ehje3KPlbAU1DSnfu5jckAsD4TBkt6np_u6cUULg70427J1qg7ibbakMLnAFFM9lNg-mvuovhtPbaHtdRc0JfYXNyt63ByIKlz1UocNKpkRt_SpNleXPL86PKsnFyVwArh8aMFa2m4LnwTbbvJJM83hQ4KT9vNNCC0k0fS1uB8UM9CkpyaZoMBJGFb2Sn-m-DtkBbfbUdKcFAK3CciSKt0Ll1heb1Dk5Nc35dim_RG-0FeGGhocWURKcpjNsnuiQUQ-zcXpcOSeh3tA9_6Z1GjsA5l2ZTBKMqZQaUZkmoc-kTQtIaBT3ZFvPNH1HfbU0srjEyRErJXD3uqMgA1Hfz08wFnWoV7CQ9xtZjMk0ksM1ptCGxF-E4PFtdFdrhJBaKv1cjkV-rcdRwcNnOzdBodqb4v1exR2-Psr-izDj_qMxznxOqFdBsy-WS0)

![DZ](https://teaching.lavbic.net/plantuml/png/bP4xR-D038Jx_HM4KbnIk3W_W20833X6qYI5aKTrk8BIqZQZrQwENik1Vtqe-IKZkXoki6287sU6eoLRWda8CGqVngnozYKA5f1YbYyahBtDWWi2coL7QiqjpN7juYjzn8dZXI_8HyZqGTAYC8j1xe9OacaZaphL_G8SlQQTNYWIDgrzWDPmHN_Mv3Dwuhd-FBNTBaOFTzVtqmvwXX8vun9z_F-5phWcSdG4oKneuSXgw2LNBEXv2QMGTM4HAkW1Egt8O-JACyIG9yOq9K3oLWR1r7EUmEG5tdx2xMqp6O-DAK_sa4ngwGHm1SyZXIgcZJ9do6pdk8E6Vu4UfM2dVh0k1IltZluTJrbtkttTpOAF4fmZ-TPce6WHBBawS7qKLnX9CngzfJVMFpUgpfddVKUNLqOFg2Vz6wYaUL_BaGvEwtsZ8Mfey0qqC6hV-sL3Z6H_xnHNjFLOp0xt64jdVF-C7ttbJwbvcv8SZDMtEtPzJbVIVmRTLzuHwJ0vZtwm7pPzvhZjT1gQ7_hbZrpJ-9x3owjF)


### 3.8 Arhiviranje predloga

![DZ](https://teaching.lavbic.net/plantuml/png/bPF1Zjem48RlVeeHFT0UE3GaKhLQ8R5ezz8UKDizLJquyG06uqaT4rQyGz-g3zP98CHXiz0UaaFypSp__vwij49O4FcKNeGeDjhcqiajf3BRB1tjhCh8a8FzIdiCpXKkvCxux_ZYfqOlxHQjXunVw09APfxS0pc5RbQtIGttVGMSPyrwPqddQ1_K0mI71VxQeStmYrxmOp6SzYvvUlZqEEkXvz9vdUbSMl__1RroXTVU80ocRgLBxQHT8-GEbQ6bX15GOQcq6Znj1aBKjc4mv_F2I_w-0Kh__6Rv0vX-W-UFS7zVCvE947ax-bZ2BVK0P05VO-PAZNl6-gWZbBm1VNPRRQhHkzp9qgnPicmaKtciZRWs8-iT6OFkwfWnerjIQ2hDGh27qOGLtd5BdLaTvFB-GnM0BgL71eHW6nKQtK7fh3urxLAHO2aLDBu2ZGMB6FrGv3sgdyUE1HwitCuRLq9XXuywV7oTZpgsz255rmXX7SEJZQHsl967uApVuhyul6dmT64tZVLnqLbOhsWHZ4uwXJ6xJPf2sTxigLZMSPo1dBnJ_8-KtHquHHbqM8U99KrYEHMaABsPsZMkDxbQbg7hqIK1s5gYjCJ2yxVd8aV-jRlEBaCUGklcOdk74993U7FDGt1SWJTNVGXTOyVcNMklQzfRkLpmm4VSiowXmBX2unR5fK7LBiTV)


### 3.9 Brisanje predloga

![DZ](https://teaching.lavbic.net/plantuml/png/bPF1Rjim38RlUWh2EsGxvB341eQY2D04ssKR47JhQTX1jfXKZI9wik8KUVhHZbtBZUji1mT6-97yVv9-r0fXG-HJUXQYs6cRIoVtaCfijtLqi2eZGmwEZzfZ45UuaGVZV-AplpDwQ_TeFMJyWowWPER9BSafTAkwJ6guxWNmqcirs4iwHySW7o085lZdW3R3Rth3ZyMmsxlao_BJvzK0lPREwqpdqlh_JnYKAxps1Y5QEbr8-uIGErI6jXAcG8Mbqchmj8k4g3r3z9suhUJN2Ev-mCD7kBsj8uk547dN3QBrkP2EG1Pm7pDNQZmoDaITeUGDwAlRQsFr3WwvawLvOg6o5KhbENV6kHbPxyWOTADjvepksOQfD0l17gOBLdZ39NLcTJkAznygpxgK7Zag17kekDaDbCxgfcAVcWdMKK7p4MWkMC7qboBlKVq-LopmPEL-tLeI2dlyhCV7u_oivqcVKdIj4DOnREDVN5mrqMpaglWXZaLF6cL9lOYTF0se7eg5PM8HQ4pQCN1MsYorIPESrmNBN1VwNfxQNibBB_9EyMTIDZTHfKswyAkyDh4Q1HMaABqwtZ5kSCIr84FZCqu2i5DBQOc5v_yUYXpvqmxk_68Lq5bvTSSJ2Ca9l7dm8JYlmAj7Fu6-gtFnlg_Bd6wD5wVU-OW7xYOK65TetA6uDQYwM_aB)


### 3.10 Urejanje predloga

![DZ](https://teaching.lavbic.net/plantuml/png/dLLDRzim3BthLmZPPJlaE60eWW9jjrsM3G6ozD1X1zbYKyQAwCcoM-JNJrRy8TjoklMGHBOV7n-VIUO99V178flG2sD5XZeNHXnv8j9iRwZKCYL5XZy_eONWkOH7KIhx4rxiZSAzFeAsF7LVO0AKI2sPMp8Ip9sdIPJZdG2wN7VHNC8OUWxYEGyU5l2d19t26X_THqEOxTt7hxUVljn5q1jXBAQO2st_Fo0gbrcq2lXYP-0Wz05uRa0gsWk-v5HegZHoIzc2CLypNtmdbrQuuuBVRFcEhrR-mVKrOtcVZ2ysPnvSS57mziAXAuHd1nvWFvCKm-m-ghyT3sjOmmmpo6_cY4fZnilSY4hLfABDHPKdw22hLKhQ6b8Ap2oFeaoaU811wFfYRAYsbLkRgLpKiVuT1-noCY9nl3wak-hHRCUNrvstLxmo6fkhzn_gzuMLiD016EjUWmjhHS-6jG36kghxR5xuQnazgCjwhdNvIvAr87-72fetmIJCK0GI-lY-y4XyhpuikZdN4PY9qmNj4IquDFoAb-uGKBGjk1oMvXDjhH7wGRHJra25YvhcOR5t4BUWcv0hNiGpH3tfxdJnyN8PKqHvNUTmEXddteaWFPvoSjmRSiFbgfe2P7tSAimW-XXF2HXSdyUAVeW7EAe3L2XB1tVuVXS4zgwzlvAIBj1pJmfUkvlzaCRzQoQwhYrYsPf5D6iXXJgKXmiAVMzMhh9xSCPKcWfxxxv4N2SBTCx8pDtHPhYbXX3ZUYyAwbgVzWfaq8inIGFwlbzcb0O3Dg8FoTj6RomT3fJJ0LgEPuqILotEJXaLLBT1FuppEskAZI-TVrvRcpEXQrSzky5UzMh44rGvtbbRzqT0AQgwr-Dk15iPBben0hxLXm9EMXmtxT_fsqmOaqmTmE4stRQtuqiqEXIJ7VSN)


### 3.11 Dodajanje novic

![DZ](https://teaching.lavbic.net/plantuml/png/fLP1Rjim4Bpp5OHxQGy-5YW2mq2IjfUwWG4tEQJeWHRN3YsQgzAK4lWF_LKVLegII5gcv0Gzs5R4dU7CShcR9y61RX3D6by8EUH25KopFLspBDzgB1NFKAAcpq_2GBJEOSDAQNx0YxcMOglse0pDx1VeA8fb1lKDQWxwrj6ifUKz2_1xtIRtObhZSuIdD5eymEyIL0OBiR4V1V5kxpv-lVdqvJOHlMJQY4mKJ9ct0v9oYH560fryHivsJEs0Agn4HgSK3_P92Memdn3Y7DF9KWC_66RVvnJNV_zOvHDwlQBtT3Pp8VCv8KNOj458t8e9PGVQ_M6ZAm7FDlWajYS272QyJ8DQpfX_8FAk9cKki7aSYFkczqBM3ij2iqhMcpDQDDHOERmFcSqoL4QZbA07UIJcB1CxE84kHh6ngyxMT-GWBMfV_uwOQztrmyazdSxz4LnPHo9dHx4ocgbLz_hzX_geHSKC-512_BbPWax_5Qsq4kqAnBWkWX2VWR2nKpMCZQFylesJwK-EnW3_5Mium56n_R8x7C9XW2f82JGX5oCqmKq_WUAu1jsvi2PUaQV_IDDWbYudgQtTuUHSo4u2xyLtKTDv--GBA-XEuVfA4kB4QSQlAAzRWIjkjApTPP-UMWr5_SXyxt2WT96ch7kShOmaKzBIkOEmdSVRP8UE5abVEEqSr-8Hzd87bU0fkGiI-aTQyB63fpGk29681Iqrn8sMKEeo7T68Ou4MiKJR_woGym1t62ifSaWkDvTZqNG-l6FULLdV54el9A43Ekw43KelvQ5jkio6fXDnhbanpkIkt8qeT9UXiiuUm2QcKdWm3_QBfNMIIEU0pC8-cboii2KKQRsZWlnrmwq4xciz9UY4F2hAjCvca3GD8EAEcPkGBfaTmDONhsS9ADvUucu5rzPblTIEu1ChpQA_uN5VZ6PQln7qj3GzBPw1oQReAj_TQyNYgnAJZENa11_CX9GrZQX0ZPcGjSwavTuW7BGyD33Vv7bapBtMTfyYUBhydyNPTkavUpO7_W40)


### 3.12 Iskanje predlogov

![DZ](https://teaching.lavbic.net/plantuml/png/bP91Yzim48Nl-XM3UsaFEHRA4WAxeONIKWBfdaeFOskIdLZMk6FPMVBhAtjZMvjaeJrOOEcRzzwCzCIMO2SISdasfYdPrwXOGOv5kLTflIt4YSBnYGCbvvPssBhmavx3lUEzhyW7AE92cb1O1D47KKkw7cHo5tMlWCbhVTCBLUMOr0CaXmtzQSaNz9rtyVEKkhtx-ENXq-Vr3Ng36hZW6dtu_uARSKtWu0Yohqs9_a1GAradUuG5IEEbymn1oioOeMN8Die7xDo1FBIrAEQUompkj_08o-N0h5R6rBDjNp98SWROmFWJwOxf6E5Nx3Ujs4N9AAwzJSo4OoRf1eK9MIuByK75ET9BdRFDK31wne9ABBa-e7c4nMeASnSjkCGJRuEYtuxRxp_qNNE7WIRKcAc3A31ckODEFPzFAAqR2MEctBFnssNdlSaD5h-iX43sTshQqCbZjHd7OonT2yosiyBSzwM2SI8ryCjZC00NO-gyDFrBSPxs-8DF63C3t9x8MMGZaMi7Bft0DJTck43_9JL0qlaqyTV1ahkMHgpaBvSTtSZRlm00)


### 3.13 Všečkanje/ne-všečkanje predloga

![DZ](https://teaching.lavbic.net/plantuml/png/bPB1Rjf0443l-nKZzq1xG5N1bgeeGafGUsaFg3IvH3silGFPUDbnruk9-8T-HF-b_Q-E0UDrSQ0zO0dDcvati_Ee5SA2oAVqB4IPQrj89rUGoYnVEbfRbP4X1vj7xJ68Arp8jV5VyTdV6BsqAxGUClwW2oYPUNAtv1IwwQvCQhZk2N3iDUtj9PsZJP0F40HB_Bv6c-5dlU2VnR3Rg-JZxViFqnvw9ftNcIwazV-VqAihlFO68Rh__HD__SYbVSAt5eTL-nSAXyhGKi8GgBHKMGsUyaY8tHOWkYl8oTJgF8ARETozW-lhNMGo4Q9e-qCqsnVI4SWIliJCLHetZFLHUoXv0VhaLjfmIrWNJbRcYKLb8qhLFdV4kHbPxyWOT6VRZ1bTaK9JEml1CmmdR7Z59NKkjthkdRJpnl_rctfqNKcF30d1ezJuw0egP_M1mWur4gnJG-Cpq5YmoF11aVUelkqhbhYrSZLh9XCAE_oemyVd-L5dDBrDqJKYxD4_nhzCSN68myDSbE_ZM7fmC4kExn5O7xtxec6XE91CcZrmKbLYjZlqGvhal3PgyRudpasJPba5bQGelRYmSrplqiWxfGsTtreIW2TxWzRohwCRG4WEuCNh3C5n3Lwyq05qXVV5kygdEUt6J-wodIFkUU9GCAxHk4LnQL2rp_O7)


### 3.14 Ocenjevanje arhiviranega predloga

![DZ](https://teaching.lavbic.net/plantuml/png/fPH1Zzem48Nl_XKMlUmUE5QgLWY9HUrbMnM9xgdgmOa76E9uKiU45R--aq0SBvk4hlP0IEJtPjvySRn33N93v1Dw4QBCq1RAgLmcAissZWvMfsJ8oUCEFKJh6ZRgOFmlUF4BWrkRW_KovGkuIALIJ-wHd0QtRCeaXkk-4OHUozvUoZawHdufeyKI_Xx0fl0TD_op47VxzFdRuvUlonxrIZcFAHRA-lSRUkCAZzw0dFna27ke55yu-0uhTCh2Lid2WJR4DrD9fQNAelIKJOHe6CZ9ok5ULMOFLXuASYgnc4taOYsVvMpMQEPp8OekHsrfIk94gbAs3wok48uixjF6qW7baylHS7EEuUf0F4f8JrLJ84XcivIiTsGCkB6ERSiVfC6mAw__wtd4ivpEG_O7xeEPEk6Y9dTtNxF1Ida82Y72dEnhSpp8obcyh43iQnL2XCnTloRDi3TMXRxd2QQ_DNaF-a-SeOIJLVcg9IKq39JgedHbEWGZPRffhh3XAG7N3i4p_0Uc3r0QX7IRqMKV3REv0QV77yB78r_kmuQAqFHPhyFqvCFNq1c8fL8IV-xGTdxDkg2ID2MZl8TnZxZVY_nSgJvPLZVeZx2_LQVRGX6CQo-kFP-6F4klvlocrdpuKOg6xkx_0G00)

![DZ](https://teaching.lavbic.net/plantuml/png/bLCxRzim4DxvAmxgaWmU0nI1OS0nsYKjQi3DL7IWnBDz5iLJAOeEykjxKgn74ib51ptvlUuJTII3i6SEAJyhLUNaIkrr0QdEyeFdsfcCBNiu7odWQDtWNjSs_CJdiBPqS0Mw09cSq8zGEWli7zWRz9jM9hMY-m7GUsqclRJtV1xn0KQB5VwfqMNuZVPoE1oxVRhx-l3vosO2lTK-K4QbTk7_2PDnLQ1W4P8VKi89evQJ13zI9AyT7ZIK7erbkLc0jbAJqu6Y8mYS9qgrHK2ozNJIqPxGGLsorwcZF87r3fvWkMmngvLIvH2ceRIwb82ke7iGT2Gy2_WDzj4NP4LIn7rZ8odxO1nRXHwoN6RiWcThqR_NkTYqXCxpEnkqmYgQQvDIFS5YrIUw5n_AzGkjcr9kRfk9AUg0FKAfFhtmkXpt4BsZomgEUHr2gJxpuDUccUUEKRtlwmIBNuP3GFDxdA725wUBRTUKCZWZDKGPP8OAhiWCqqo_VLTcT5m1orx3fjVk6zOp5PPSiU6qgsAonVaIhx3V3F_l6YzApVw-W6URl5xaTQ6XjN4T7zYq2_9loZWpgDVzkfF_a3EoV7Fx5m00)


### 3.15 Filtriranje predlogov

![DZ](https://teaching.lavbic.net/plantuml/png/bL9DQzj04BtlhnYKItlmiH22CIIckJGGWvjJw66a7TjZhNRKqLeE-VLPAvQqSLH83n9ezttDq-pO4cn4GYulnZGb-neLAyYnABSg1syBSQ9mt76WvDxI1Wyk_AQNSEjuwolo0Ohu8arGM0JHEr5BkknaSXTrFm46h-Ma5whACU4399SD_JsGB-Y1D_7nbBfT_RY_k_wvd42lK0CNNACF_q-OZ6i21qUGtRCBoef-Jr0hMITRX1b8uwNr347Ap9XkRCXModjitPuy76fHp3sN6TokuGdcymwpM1XJZzOdIYV96M03_KT4jqp72Fw0_QKLkoWPnVLa4pDXdqdQJc60pEU5-A3Y7Ecbpjcc8_IUaL299NSAQ9vWjXZ2t4GBBl6Lro6siEwFltq_JSqj1XgWnWmJH84-omsqwlbyGoclHnWpv1wD_qqxdmrkC7ks4WBPFwbfGwyUgrLVZx7qMM2q7HN6kIyLZ1EfOJCkX06ugAhrqfmtnlFkiQ9ztAKsXWUOhYPHMyaxliLTHqWxcIRqoIxWNva58EbZ-0yVKoOR88rOoTzN8BgHjsy0)


### 3.16 Onemogočanje/omogočanje uporabnika

![DZ](https://teaching.lavbic.net/plantuml/png/bLBDRjD04BxlKwpC0JX4Y2YHK5L5QWDS01LHSgeuZBsJTEBrZXcldIhlqBVgWp5EMl-qKIKEjbQUxs--zIqvj6lccFATCLLEeGI1mgQGvHlXEhYCFOlTtLB4mTpX6ceVV-DTlF2q2GM6Q3DzeGnGa4MMInQ7iZp8f5vrNm0wh-L9Bn3XtO1lxM1OuTyQGuRVQQrFmA7Rc_dNoqzVbYVGFq4YPLH2YFzFE1dNH8eURN8LiE0DFzn3sE87xiyJorNW9f2Dd2V675QtoGzMTz1ZOY-kxUgZFJy_J1OBOyhUr2RNk0yQg2vP80sKSvDOgEolkJ8QmfqIHlXlKf1Nd3846h_L36057kxhy4ITAZNZ48MzHtaki7foEe9d2Yuqh6-JQKHg8ABQ6yqyMUZXp9P2MQ371h9swNVlZGPinzCpsqYWJhGTzIfJes5QsEnLsCneZCcDunZH_JcgLeTULdqjhUTqX9gVHZaSAfktZqcFY-ImfwjKO8_PPtRGreVTNMr1wVtUj4z9e1E7VciTyg2E4MJenr6S_aNDgA-IAtQSqbYuw-da-FMkZZwUdwt-iguEEDWZRR2A-cryl_y0)

![DZ](https://teaching.lavbic.net/plantuml/png/bLJRRjf047tVhrZH1xSFKLK40Q8eKfAsKjHMe52UgZwixGbPM7RSzU94_4F-AX-MML_NnabR993nd3bdvipitiiO-1sY3V6HiNGhTIACsF5GHDkrmRsE8rHe-CEzjE35OxWJUsL_mgEzL7AjTw0jZ-W7Z8SIaKLpXIO6SvtJX8fuZm2rrdMlbZ067xnyphrW2d_se2FuBk_egy5NUpV-UZNzSjs3NWXZPIGJeUt_9_IMowoq2lXWhc67Qtn-4de37x5vvli4ZGYrt0f-meKYfxImCjEIMzmE6Ckzu8CVIEK8UXpmooLVVUBdvtdaueAnfAc23nO6OeNh0HSflvqGB9FmGAWMQ0a7JMtKsfWL-Eah-99K5gZnAwXlPYSLiH6l4PdQK7-29qLgfJ2at0YrDQWKc7zYCEBvQQyhWbcNu8tsJmcx8-DKLsTLDLxWHXwE1OoHlISNrESPLK-3ESYbDK8lAnVUVt1JaPcmG216VZZqy8ndHiiI12tGa57Z3dJw1kYKKS4dlsAq5kBV1MEQ3sfHUPZJU8ZnCI86dx7fH1v2C9KmwVPMtQsdhsYNUrHdEUME-d6r5QvKdzGED-G-nR3rR-mLDwbQcrIjpSDDlZ8g4iJ2QFTTU5RKNW-yRVcCqJuvsEXDs8ZHYlYTp2hVLyq9QfKwOZcpbpBfIocBd3QBreLq39buLKrP9rGwCiqTaKRKDCwGe8bwrqyBmkZyLv3YlegEC463IT2Qc2wvp4kTkTSfnXZALbhBozhoNcYFruMImhzOFFMGNYjX1gcbTtEl9wTJVe9o5yVTNGJFjVm09KXtqpmquW1HErR8EjB0NzwQcqx8FhMPCF9MH7jTN-QRlE6WF6Vk725jy4skj04jEeoZ6ZhAZr96QxzojbcDgQrSJBUm5ZUx8Ztek4aQDD4o9u_NX376OjCPzb5oPR2BTgPHSBNF-yA3DpxN8rcb2QGQFplbOYml)


### 3.17 Komentiranje predloga

![DZ](https://teaching.lavbic.net/plantuml/png/fLGxRzim4DxvAmxkaWmU2nI1OI0nsYKj8C3DL7GuIMVdB8gdKhGS-DUNaYsATIGRGGS_-Ttt8iLNpWas8YwLDwNgWas55aj8CIksLlOcpqIBXSChEuhMSzhWNhkVzEOUDMzDISP1vj_8HYZCdDWdiJdPLKUJQi_x3X2qLgDQQAqSedc0QB6cFtio6NtdZNyPYjK-VVxszENhQWITe7MSSON6VNnWrAvox3J1x5dQAjYYsH5Kbd8jMuGvI6saCGnEYfbINMwO9PPtsEWT6TXNOZ4rNCpWSGqli5XqcELIgMhGRaSwIfu1rj3_yEY6wU31OzWOEe5yjYLhB-vjsDQGTu-zUsawWW1PB38npehMPAyfzf8_92VjfyhsiysZNc2-3DuVl0uNUEIrywMj-x_lxjkIk4570QfK2Em9UaCFq5Z3vnMAvtg4Ki7y8DpPcfwDKK7t56N-AnVdAFyTUwZfQB1C-ifKJXDKWvM1PkZY2isGvg8_FgPa-n0-mrHDSSzd1Fv7NPDjtIxhVBAcIxhHqiXyC1zdFtyFqPFU-DZWfPKHT_nlzxuE8pKKtIEFTeSNguNs0Gp2Tb-c42w6NM_nOdUabbpIiNQ3nUbzkJBzqRqvCRMNKd9ZcwviqYsUuQn5PLpEdewgppAAEPzcVszAnbhkxly2)


### 3.18 Priprava statističnih podatkov

![DZ](https://teaching.lavbic.net/plantuml/png/XPBFQjj04CRl-nI3SmW41F6Vj4aWXSOajq10lOKUHjRK7kzwH-okvU3IH_13z5tSzyhA6qjA8Eb5h7xVDz_iZEGrsmeThg30cPuxMTjo9aOSR1OSIFbMB-aNhatuGS_Xk-6vNP4DC8iFSZqNEYURwI6WC36n9_c0WU2t0hXjMqrxhI8NLv9BxEJY_lRoRXff7j25z_3kM7j4VrJWO0XkOF3ek79Ouw4Z-y3xdUK5L59Yq5931kAjr9OXY1uebIusU60dDTeb0LQ6DSvuIGD03_bGvSDhAEKQk1aNTPGGjfrFsf37Jrkdk97AHobkkxQn8OEFLbf5cvTI2kvNqsinTIsIoop9OdS5JDbZbOzJzZ4iKDtcQO8jWXJx7Lk9myJlPoJ4OtyIfPxEVaBsxJ3t2B9IDhPvQw8XIpmk91tZ8FM_lxJVwSFcAaUbaJdsTKlP_onQch-9tOU6jQFbXoAw1TUV51UE_LjHdS9HZzjw_PwJXewxr4I_D7Jqtlkrv-tePOzEMdhLq4bQQ0k7vwh5STql)

Zgornji diagram stanj prikazuje načrt obnašanja za osnovni in alternativni tok, za pripravo statističnih podatkov.

