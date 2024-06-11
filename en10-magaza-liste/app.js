import express, { response } from 'express';
/* import cors from 'cors'; */
import { firefox } from 'playwright';
import { store_infos, all_stores } from './En10Search.js';

/* import fs from 'fs';
import * as cheerio from 'cheerio'; */

const app = express();
const PORT = 3131;

app.use(express.json());

/* app.use(cors({
    origin: 'https://enonlar.com',
    optionsSuccessStatus: 200
})) */

let browser = null;
let page = null;

async function launchBrowser() {
    browser = await firefox.launch();
    page = await browser.newPage();
}

launchBrowser().then(async () => {
    console.log("Tarayıcı başladı, siteler ziyaret ediliyor.");
    const start = process.hrtime();
    //! BÜTÜN URL'LERE TEK TEK GİDİP COOKİLER TOPLANACAK
        //! amazon test edildiği için yorum satırına aldım
    await page.goto(store_infos["Hepsiburada"].store_fastest_url);
    await page.goto(store_infos["Amazon"].store_fastest_url);
    const end = process.hrtime(start);
    console.log("Tarayıcı başlangıcı ve sayfa gezmeleri tamamlandı.");
    console.log(`İşlem süresi: ${end[0]} saniye ${end[1] / 1000000} milisaniye`);
}).catch((err) => {
    console.log("Tarayıcı başlatma hatası: ", err);
})

app.post("/en10_list", async(req, res) => {
    
    console.log("1 - en10_list");
    /* console.log(req.body); */

    const {q, s, m} = req.body;

    //! q ve s cache işleminde LRU ile birlikte kullanılırsa performans artışı sağlanır.

    //if(!all_stores.includes(m)) {
    if(m == "Hepsiburada" || m == "Amazon") {
        console.log("Mağaza bulundu: 1");
        
        const st = process.hrtime();

        try {
            const response = await store_infos[m].getStoreListData(page, q, s, m);
            const en = process.hrtime(st);
            console.log(`İşlem süresi: ${en[0]} saniye ${en[1] / 1000000} milisaniye`);
            console.log("-----------------------");
            res.status(200).send(response);   
        } catch(e) {
            res.status(404).send(false);
        }
    } else {
        console.log("Mağaza bulunamadı: 2");
        res.status(404).send('Mağaza bulunamadı');
    }
})

app.post("/en10_comments", async(req, res) => {
    console.log("2 - en10_comments");
    /* console.log(req.body); */
    
    //! q ve s cache işleminde kullanılacak
    
    try {
    const { q, s, m, url, commentsUrl, commentsOptions } = req.body;
    const response = await store_infos[m].getProductCommentsOnly(page, url, commentsUrl, commentsOptions);
    res.status(200).send(response);
    } catch(e) {
        /* console.log("response: ", response); */
        res.status(404).send(false);
    }
})

app.post("/en10_specs", async(req, res) => {
    console.log("3 - en10_specs");
    /* console.log(req.body); */

    //! q ve s cache işleminde kullanılacak
    
    try {
        const { q, s, m, url } = req.body;
        const response = await store_infos[m].getProductSpecsOnly(page, url);
        /* console.log("response: ", response); */
        res.status(200).send(response);
    } catch(e) {
        res.status(404).send(false);
    }
})

app.listen(PORT, () => {
    console.log("server up on: ", PORT);
})