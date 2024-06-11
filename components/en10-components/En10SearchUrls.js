
export const all_stores = ["Hepsiburada", "Trendyol", "Amazon", "N11", "Çiçek Sepeti", "Vatan Bilgisayar",
"Teknosa", "MediaMarkt", "Koçtaş", "Pazarama", "Carrefoursa", "PTT Avm", "Çetinkaya", "Gürgençler", "Turkcell",
"Migros", "Gratis"];

export const store_infos = {
    "Hepsiburada": {
        store_siralama: {
            "Çok Değerlendirilenler": "yorumsayisi",
            "En Düşük Fiyat": "artanfiyat",
            "En Yüksek Fiyat": "azalanfiyat",
            "Çok Satanlar": "coksatan",
            "Yüksek Puanlılar": "degerlendirmepuani",
            "İndirim Oranı": "indirimurunler",
            "Yeni Eklenen": "enyeni"
        },
        store_query_space: "%20",
        set_store_url_syntax: (search, select) => {
            const url = `https://www.hepsiburada.com/ara?q=${search}&siralama=${select}`;
            return url;
        },
        set_store_api_url: (search, select) => {
            const url = `https://blackgate.hepsiburada.com/moriaapi/api/product-and-facet?page=1&pageType=Search&q=${search}&size=10&sortType=${select}`;
            return url;
        },
        search_item: "Burada özellikler ve yorumlar olacak"
    },
    "Amazon": {
        store_siralama: {
            "Ort. Müşteri Yorumu": "review-rank",
            "Fiyat: Düşükten Yükseğe": "price-asc-rank",
            "Fiyat: Yüksekten Düşüğe": "price-desc-rank",
            "En Son Gelenler": "price-desc-rank"
        },
        store_query_space: "+",
        set_store_url_syntax: (search, select) => {
            
            const url = `https://www.amazon.com.tr/s?k=${search}&s=${select}`;
            return url;
        },
        set_store_api_url: (search, select) => {
            
        },
        search_item: "Şimdilik eklenmedi"
    }
}

/* export const setStringToUrlSyntax = (inputValue, selectValue, storeValue) => {
    const arr = inputValue.split(" ");
    const search_string = arr.join(store_infos[storeValue].store_query_space);
    const select_string = store_infos[storeValue].store_siralama[selectValue];

    console.log(search_string, select_string);

    //const url = store_infos[storeValue].set_store_url_syntax(search_string, select_string);
    const url = store_infos[storeValue].set_store_api_url(search_string, select_string);
    return url;
} */