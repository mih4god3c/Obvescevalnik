describe("Dodajanje predlogov za testiranje vseckanja", () => {
    it("Open obvescevalnik", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Prijava").click();
  
      cy.url().should("contain", "/prijava");
      cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
      cy.get("input[id=geslo_prijavi_se]").click().type("password");
      cy.get("button[id=gumb_prijavi_se]").click();
      cy.wait(3000);
      cy.url().should("contain", "/predlogi");
      cy.contains("Dodaj nov predlog").click();
      cy.url().should("contain", "/nov");
      let stevka = Date.now();
      cy.get("input[id=naslov]").type("Testni predlog za vseckanje");
      cy.get("textarea[id=podrobnosti]").type("Testne podrobnosti" + stevka);
      cy.get("input[id=address]").type("Ljubljana");
      cy.contains("Išči").click();
      cy.contains("Nadaljuj na pregled").click();
      cy.contains("Objavi").click();
      cy.url().should("contain", "/predlog");
      cy.contains("Testni predlog za vseckanje");
      cy.contains("Ljubljana");
    });
  });

  describe("Dodajanje predlogov za testiranje komentiranja", () => {
    it("Open obvescevalnik", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Prijava").click();
  
      cy.url().should("contain", "/prijava");
      cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
      cy.get("input[id=geslo_prijavi_se]").click().type("password");
      cy.get("button[id=gumb_prijavi_se]").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("Dodaj nov predlog").click();
      cy.url().should("contain", "/nov");
      let stevka = Date.now();
      cy.get("input[id=naslov]").type("Testni predlog za komentiranje");
      cy.get("textarea[id=podrobnosti]").type("Testne podrobnosti" + stevka);
      cy.get("input[id=address]").type("Ljubljana");
      cy.contains("Išči").click();
      cy.contains("Nadaljuj na pregled").click();
      cy.contains("Objavi").click();
      cy.url().should("contain", "/predlog");
      cy.contains("Testni predlog za komentiranje");
      cy.contains("Ljubljana");
    });
  });

  describe("Dodajanje predlogov za testiranje arhiviranja", () => {
    it("Open obvescevalnik", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Prijava").click();
  
      cy.url().should("contain", "/prijava");
      cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
      cy.get("input[id=geslo_prijavi_se]").click().type("password");
      cy.get("button[id=gumb_prijavi_se]").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("Dodaj nov predlog").click();
      cy.url().should("contain", "/nov");
      let stevka = Date.now();
      cy.get("input[id=naslov]").type("Testni predlog za arhiviranje");
      cy.get("textarea[id=podrobnosti]").type("Testne podrobnosti" + stevka);
      cy.get("input[id=address]").type("Ljubljana");
      cy.contains("Išči").click();
      cy.contains("Nadaljuj na pregled").click();
      cy.contains("Objavi").click();
      cy.url().should("contain", "/predlog");
      cy.contains("Testni predlog za arhiviranje");
      cy.contains("Ljubljana");
    });
  });


describe("Prijava izjemni tok1", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("fake.mail@gmail.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("fakepassword");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.contains("Uporabnik s tem e-naslovom ne obstaja.");
  });
});

describe("Prijava izjemni tok2", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("fakepassword");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.contains("Napačno geslo.");
  });
});

describe("Prijava osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
  });
});

describe("Registracija osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Registracija").click();

    cy.url().should("contain", "/prijava?a=r");
    let stevka = Date.now();
    cy.get("input[id=uporabnisko_ime_registracija]")
      .click()
      .type("temp" + stevka);
    cy.get("select").select("Zreče");
    cy.get("input[id=email_registracija]")
      .click()
      .type(stevka + "@gmail.com");
    cy.get("input[id=geslo_registracija]").click().type("mockpassword");
    cy.get("button[id=gumb_pridruzi_se]").click();
    cy.url().should("contain", "/predlogi");
  });
});

describe("Registracija izjemni tok1", () => {
  77;
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Registracija").click();

    cy.url().should("contain", "/prijava?a=r");
    let stevka = Date.now();
    cy.get("input[id=uporabnisko_ime_registracija]")
      .click()
      .type("temp" + stevka);
    cy.get("select").select("Zreče");
    cy.get("input[id=email_registracija]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_registracija]").click().type("mockpassword");
    cy.get("button[id=gumb_pridruzi_se]").click();
    cy.contains("Račun s tem e-naslovom že obstaja.");
  });
});

describe("Registracija izjemni tok2", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Registracija").click();

    cy.url().should("contain", "/prijava?a=r");
    let stevka = Date.now();
    cy.get("input[id=uporabnisko_ime_registracija]")
      .click()
      .type("temp" + stevka);
    cy.get("select").select("Zreče");
    cy.get("input[id=email_registracija]")
      .click()
      .type("temp" + stevka + "@email.com");
    cy.get("input[id=geslo_registracija]").click().type("a");
    cy.get("button[id=gumb_pridruzi_se]").click();
    cy.contains("Geslo je prekratko.");
  });
});

describe("Odjava osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");

    cy.contains("Odjava").click();
    cy.contains("Prijava");
  });
});

describe("Pregled arhiviranih predlogov osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Arhiv").click();
    cy.url().should("contain", "/arhiv");
  });
});

describe("Vseckanje osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Testni predlog za vseckanje").click();

    cy.url().should("contain", "/predlog");
    cy.get("button[id=gumb_vsecek]").click();
    //cy.get('button[id=gumb_nevsecek]').click()
  });
});

describe("Nevseckanje osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Testni predlog za vseckanje").click();

    cy.url().should("contain", "/predlog");
    //cy.get('button[id=gumb_vsecek]').click()
    cy.get("button[id=gumb_nevsecek]").click();
  });
});

describe("Vseckanje alternativni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.get("button[id=gumb_vsecek_0]").click();
  });
});

describe("Nevseckanje alternativni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.get("button[id=gumb_nevsecek_0]").click();
  });
});

describe("Dodajanje predloga osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Dodaj nov predlog").click();
    cy.url().should("contain", "/nov");
    let stevka = Date.now();
    cy.get("input[id=naslov]").type("To je testni predlog za dodajanje");
    cy.get("textarea[id=podrobnosti]").type("Testne podrobnosti" + stevka);
    cy.get("input[id=address]").type("Zreče");
    cy.contains("Išči").click();
    cy.contains("Nadaljuj na pregled").click();
    cy.contains("Objavi").click();
    cy.url().should("contain", "/predlog");
    cy.contains("To je testni predlog za dodajanje");
    cy.contains("Zreče");
  });
});

describe("Arhiviranje predloga osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("admin@obvescevalnik.si");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Testni predlog za arhiviranje").click();
    cy.url().should("contain", "/predlog");
    cy.get("div[id=pikice]").click();
    cy.contains("Arhiviraj predlog").click();
    cy.url().should("contain", "/arhiv");
    cy.contains("Testni predlog za arhiviranje");
  });
});

describe("Ocenjevanje arhiviranega predloga osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Arhiv").click();
    cy.url().should("contain", "/arhiv");
    cy.contains("Testni predlog za arhiviranje").click();
    cy.url().should("contain", "/arhiv");
    cy.get("li[id=star5]").click();
    cy.wait(5000);
  });
});

describe("Komentiranje  predloga osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Testni predlog za komentiranje").click();
    let stevka = Date.now();
    cy.get("textarea[id=komentiraj]").type("To je testni komentar" + stevka);
    cy.contains("Dodaj komentar").click();
    cy.contains("To je testni komentar" + stevka);
  });
});

describe("Brisanje predloga osnovni tok", () => {
  it("Open obvescevalnik", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Prijava").click();

    cy.url().should("contain", "/prijava");
    cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
    cy.get("input[id=geslo_prijavi_se]").click().type("password");
    cy.get("button[id=gumb_prijavi_se]").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Dodaj nov predlog").click();
    cy.url().should("contain", "/nov");
    let stevka = Date.now();
    cy.get("input[id=naslov]").type("Predlog za brisanje");
    cy.get("textarea[id=podrobnosti]").type(
      "To je predlog za brisanje" + stevka
    );
    cy.get("input[id=address]").type("Ljubljana");
    cy.contains("Išči").click();
    cy.contains("Nadaljuj na pregled").click();
    cy.contains("Objavi").click();
    cy.url().should("contain", "/predlog");
    cy.contains("To je predlog za brisanje" + stevka);
    cy.contains("Ljubljana");
    cy.get("div[id=pikice]").click();
    cy.contains("Izbriši predlog").click();
    cy.url().should("contain", "/predlogi");
    cy.contains("Predlog za brisanje" + stevka).should("not.exist");
  });
});

describe("Brisanje predloga za vseckanje", () => {
    it("Open obvescevalnik", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Prijava").click();
  
      cy.url().should("contain", "/prijava");
      cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
      cy.get("input[id=geslo_prijavi_se]").click().type("password");
      cy.get("button[id=gumb_prijavi_se]").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("Testni predlog za vseckanje").click();
      cy.get("div[id=pikice]").click();
      cy.contains("Izbriši predlog").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("Testni predlog za vseckanje").should("not.exist");
    });
  });

  describe("Brisanje predloga za komentiranje", () => {
    it("Open obvescevalnik", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Prijava").click();
  
      cy.url().should("contain", "/prijava");
      cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
      cy.get("input[id=geslo_prijavi_se]").click().type("password");
      cy.get("button[id=gumb_prijavi_se]").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("Testni predlog za komentiranje").click();
      cy.get("div[id=pikice]").click();
      cy.contains("Izbriši predlog").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("Testni predlog za komentiranje").should("not.exist");
    });
  });

  describe("Brisanje predloga za dodajanje", () => {
    it("Open obvescevalnik", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Prijava").click();
  
      cy.url().should("contain", "/prijava");
      cy.get("input[id=email_prijavi_se]").click().type("johndoe@email.com");
      cy.get("input[id=geslo_prijavi_se]").click().type("password");
      cy.get("button[id=gumb_prijavi_se]").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("To je testni predlog za dodajanje").click();
      cy.get("div[id=pikice]").click();
      cy.contains("Izbriši predlog").click();
      cy.url().should("contain", "/predlogi");
      cy.contains("To je testni predlog za dodajanje").should("not.exist");
    });
  });


// TO BAJE NE DELA
//   describe("Brisanje predloga za arhiviranje", () => {
//     it("Open obvescevalnik", () => {
//       cy.visit("http://localhost:3000");
//       cy.contains("Prijava").click();
  
//       cy.url().should("contain", "/prijava");
//       cy.get("input[id=email_prijavi_se]").click().type("admin@obvescevalnik.si");
//       cy.get("input[id=geslo_prijavi_se]").click().type("password");
//       cy.get("button[id=gumb_prijavi_se]").click();
//       cy.url().should("contain", "/predlogi");
//       cy.contains("Arhiv").click();
//       cy.url().should("contain", "/arhiv");
//       cy.contains("Testni predlog za arhiviranje").click();
//       cy.get("div[id=pikice]").click();
//       cy.contains("Izbriši predlog").click();
//       cy.url().should("contain", "/arhiv");
//       cy.contains("Testni predlog za arhiviranje").should("not.exist");
//     });
//   });