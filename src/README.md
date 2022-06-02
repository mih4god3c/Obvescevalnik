# Zagon lokalnega strežnika

Aplikacija je zgrajena z [Next.js](https://nextjs.org/). Za zagon je potrebno nekaj korakov:

```bash
# premik v mapo src
cd src
# naložiti je potrebno vse uporabljene pakete
yarn install
# požene se lokalni testni strežnik z delnim dostopom do zaledja
yarn dev
```

Nato odprite [http://localhost:3000](http://localhost:3000) z brskalnikom.

## Opozorilo

Za pravilno delovanje je potreben API ključ za storitev Google Maps in kluč za Google Service Account. Ker sta to občutljiva podatka, dostop do njiju ni možen preko GitHub-a. Ključ lahko posredujemo, za kar lahko kontaktirate `mc3432@student.uni-lj.si`.

Ključ Google Service Account se mora nahajati v datoteki `/src/config/service_account.json`.

API ključ za storitev Google Maps se mora nahajati v datoteki `/src/.env` v naslednjem formatu:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=apikey
```

Brez ključa na lokalnem testnem strežniku ne bojo delovale naslednje funkcionalnosti:
- prijava
- registracija
- objavljanje predlogov
- objavljanje novic
- brisanje predlogov
- arhiviranje predlogov
- ogled lokacije na obstoječih objavah
- komentiranje
- všečkanje/nevšečkanje
- glasovanje