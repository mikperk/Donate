### Atgimusi Lineage 2 serverių donate sistema
![Donate](http://asmanavicius.lt/donate/intro.png)

##### Apie
Ši sistema nėra perkurta senoji sistema, tai visiškai nauja, tobulesnė ir saugesnė, turinti daugiau galimybių sistema. Šios sistemos autorius, kaip ir senosios, esu aš - [Justas Ašmanavičius](http://justas.asmanavicius.lt).

##### Sistemos įdiegimas
Norėdami įdiegti sistemą atsisiųskite visus failus, išskleiskite juos ten kur norite, kad veiktų sistema. Po to vadovaukitės įdiegimo vedliu. Po sėkmingo sistemos įdiegimo nepamirškite ištrinti **install** aplanką.

##### Nustatymai
* **app/config/app.php** - visi pagrindiniai nustatymai
* **app/config/database.php** - duomenų bazės nustatymai
* **app/config/server.php** - serverių nustatymai
* **app/config/sql.php** - serverių duom. bazių stulpelių pavadinimai
* **app/config/xml/languages** - kalbų failai
* **app/config/xml/paysera-sms.xml** - paysera.com sms raktažodžiai
* **app/config/xml/shop.xml** - parduotuvės daiktai

##### Reikalavimai
* Minimali PHP versija: **5.4**
* Įjungtas mod_rewrite modulis

##### Šiuo metu sistemoje veikiantys balanso pildymo būdai
* Paypal
* Mokejimai.lt (Paysera.com) SMS, bei bankiniai apmokėjimai
* Paygol

##### Mokejimai / Paysera SMS nustatymai
Kelias iki callback failo mokejimai.lt sistemoje: http://manopuslapis.lt/paysera-sms/notify (p.s vietoje manopuslapis.lt nurodykite savo donate sistemos puslapį).

##### Paygol SMS nustatymai
Kelias iki "Url Background (IPN)" paygol sistemoje: http://manopuslapis.lt/paygol/notify (p.s vietoje manopuslapis.lt nurodykite savo donate sistemos puslapį). Kitų URL (accept ir cancel) nurodyti nereikia.

##### Pagrindiniai dalykai esantys sistemoje šiuo metu
* Daugybė nustatymų
* Galimybė naudoti sistemą su daugiau, nei 1 serveriu
* Galima naudoti atskirus Login ir Game serverius
* Daiktų parduotuvė (galima pirkti tiek pavienius daiktus, tiek visą jų grupę)
* Balanso pildymas įvairiais būdais (paypal, sms, banku ir kt.)
* Veiksmų istorija
* Vartotojo nustatymai (kaip kad slaptažodžio ar el. pašto keitimas)
* Slaptažodžio keitimas jį pamiršus
* Captcha apsaugos kodai
* Kalbų keitimas
* Slaptažodžio užkodavimas pagal nurodytą serverį
* Veikia su bet kuria Lineage 2 kronika (yra galimybė nurodyti duom. bazės stulpelių pavadinimus kiekvienam serveriui)
* Paprastas išvaizdos keitimas
* Galimybė siųsti laiškus per SMTP

##### Kontaktai
Jei sistemoje radote klaidų, turite pasiūlymų ar norite tiesiog pasibėdavoti apie gyvenimą rašykite el. paštu justas.asmanavicius@gmail.com
