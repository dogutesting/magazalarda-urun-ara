import * as cheerio from 'cheerio';

export const all_stores = ["Hepsiburada", "Amazon", "Trendyol" , "N11", "Çiçek Sepeti", "Vatan Bilgisayar",
"Teknosa", "MediaMarkt", "Koçtaş", "Pazarama", "Carrefoursa", "PTT Avm", "Çetinkaya", "Gürgençler", "Turkcell",
"Migros", "Gratis"];

export const store_infos = {
    "Hepsiburada": {
        /* store_name: "hepsiburada", */
        store_siralama: {
            "Çok Değerlendirilenler": "yorumsayisi",
            "En Düşük Fiyat": "artanfiyat",
            "En Yüksek Fiyat": "azalanfiyat",
            "Çok Satanlar": "coksatan",
            "Yüksek Puanlılar": "degerlendirmepuani",
            "İndirim Oranı": "indirimurunler",
            "Yeni Eklenen": "enyeni"
        },
        store_fastest_url: "https://www.hepsiburada.com/iletisim",
        store_query_space: "%20",
        setApiSearchUrl: (inputValue, selectValue, storeValue) => {
            const arr = inputValue.split(" ");
            const search_string = arr.join(store_infos[storeValue].store_query_space);
            const select_string = store_infos[storeValue].store_siralama[selectValue];
            const url = `https://blackgate.hepsiburada.com/moriaapi/api/product-and-facet?page=1&pageType=Search&q=${search_string}&size=10&sortType=${select_string}`;
            return url;
        },
        getStoreListData: async (page, inputValue, selectValue, storeValue) => {
            //const storeValue = "Hepsiburada";

            const url = store_infos[storeValue].setApiSearchUrl(inputValue, selectValue, storeValue);

            await page.goto(url);
            const bodyJSON = await page.evaluate(() => document.body.innerText);
                        
            const parseStringToJson = JSON.parse(bodyJSON);
            const jsonArr = parseStringToJson["products"];

            if(jsonArr.length === 0 || jsonArr == null) {
                return {
                    status: "ko",
                    error: "Aradığınız ürünü bulamadık."
                };
            }

            const parseArr = [];

            for(var i=0; i<jsonArr.length; i++) {
                if (parseArr.length === 10) {
                    break;
                }

                const productUrl = jsonArr[i].variantList[0].url;
                if(!productUrl.startsWith("/")) {
                    continue;
                }

                const sku = jsonArr[i].variantList[0].sku;
                const commentsApiUrl = `https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=${sku}&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5`;
                /* const brand = jsonArr[i].brand; */
                const customerReviewCount = jsonArr[i].customerReviewCount || 0;
                const customerReviewRating = jsonArr[i].customerReviewRating || 0;
                const name = jsonArr[i].variantList[0].name;
                const price = jsonArr[i].variantList[0].listing["priceInfo"].price;
                /* const originalPrice = jsonArr[i].variantList[0].listing["priceInfo"].originalPrice;
                const discountRate = jsonArr[i].variantList[0].listing["priceInfo"].discountRate;
                const discountType = jsonArr[i].variantList[0].listing["priceInfo"].discountType; */
                let image_size = jsonArr[i].variantList[0].images[0].link;
                const size = "500";
                const image = image_size.replace("{size}", size);

                const userCommentsArray = [];
                let specs_text = "";

                parseArr.push({
                    "url": "https://www.hepsiburada.com" + productUrl,
                    /* "brand": brand, */
                    "customerReviewCount": customerReviewCount,
                    "customerReviewRating": customerReviewRating,
                    "name": name,
                    "price": price,
                    /* "originalPrice": originalPrice,
                    "discountRate": discountRate,
                    "discountType": discountType, */
                    "image":  image,
                    "specsText": specs_text,
                    "commentsArray": userCommentsArray,
                    "commentsUrl": commentsApiUrl
                })
            }

            return parseArr;
        },
        getProductSpecsOnly: async (page, productUrl) => {
            await page.goto(productUrl);
            //const specs_text = await page.evaluate(() => document.getElementById("productDescriptionContent").innerText.replace(/\n/g, " "));
            const specs_text = await page.evaluate(() => document.getElementById("productDescriptionContent").innerText.replace(/\n/g, '<br />'));
            return {"specs_text": specs_text};
        },
        getProductCommentsOnly: async (page, productUrl, commentsUrl, commentsOptions) => {
            //! productUrl ile Cache'i kontrol et eğer yok ise alttakini çalıştır

            //* sadece görseli olan veya yıldıza göre getirmek istediğinde commentsUrl'in içerisindeki parametreleri değiştir
            //* commentsOptions bu ayarlamalarda yardımcı olabilir
            //const commentsApiUrl = `https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=${sku}&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5`;

            await page.goto(commentsUrl);
            const comments = await page.evaluate(() => document.body.innerText);
            const commentsStringToJson = await JSON.parse(comments);

            if(commentsStringToJson["data"].approvedUserContent["listCount"] == 0) {
                return [];
            }
            
            const userCommentList = commentsStringToJson["data"].approvedUserContent["approvedUserContentList"];
            const userCommentsArray = [];
            if(userCommentList.length != 0) {
                for(var i2 = 0; i2<userCommentList.length; i2++) {

                    const userCommentMedia = userCommentList[i2].media !== null ? userCommentList[i2].media : [];
                    //* geliştir
                    /*
                    let newMedia = [];

                    if(userCommentMedia.length != 0) {
                        
                        const comment_image_url = userCommentMedia.url.replace("{size}", 100);
                        const full_image_url = userCommentMedia.url.replace("{size}", 1000);
                        
                        mediaObject.comment_image_url = comment_image_url;
                        mediaObject.full_image_url = full_image_url;
                    }
                    */
                    

                    const obj = {
                        "createdAt": userCommentList[i2].createdAt,
                        "customerName": userCommentList[i2].customer["name"] + " " + userCommentList[i2].customer["surname"],
                        "star": userCommentList[i2].star,
                        "review": userCommentList[i2].review.content,
                        "mediaArray":  userCommentMedia
                    }
                    userCommentsArray.push(obj);
                }
            }
            return userCommentsArray; //Array
        }
    },
    "Amazon": {
        store_siralama: {
            "Ort. Müşteri Yorumu": "review-rank",
            "Fiyat: Düşükten Yükseğe": "price-asc-rank",
            "Fiyat: Yüksekten Düşüğe": "price-desc-rank",
            "En Son Gelenler": "price-desc-rank"
        },
        store_fastest_url: "https://www.amazon.com.tr/privacyprefs/retail?ref_=portal_banner_cpp",
        store_query_space: "+",
        setApiSearchUrl: (inputValue, selectValue, storeValue) => {
            const arr = inputValue.split(" ");
            const search_string = arr.join(store_infos[storeValue].store_query_space);
            const select_string = store_infos[storeValue].store_siralama[selectValue];
            const url = `https://www.amazon.com.tr/s?k=${search_string}&s=${select_string}`;
            return url;
        },
        getStoreListData: async (page, inputValue, selectValue, storeValue) => {
            //! productUrl ile Cache'i kontrol et eğer yok ise alttakini çalıştır

            //const storeValue = "Amazon";
            const url = store_infos[storeValue].setApiSearchUrl(inputValue, selectValue, storeValue);
            //console.log("url", url);
            
            await page.goto(url);
            //const body = await page.evaluate(() => document.getElementById("search"));
            const body = await page.evaluate(() => document.getElementById("search").innerHTML);
            const $ = cheerio.load(body);

            const arr = [];

            let item_count = 0;

            for(let i=2; i<=15; i++) {
                //item
                const item_1 = $(`div[data-index="${i}"]`);

                if(!item_1.find('h2 a.a-link-normal').attr('href') || item_1.find('h2 a.a-link-normal').attr('href') == undefined) {
                    /* console.log("hata bulundu"); */
                    continue;
                }
                else {
                    if(item_count == 10) {
                        break;
                    }
                    else {
                        item_count++;
                    }
                }
                
                
                //özellikler
                const justUrl = item_1.find('h2 a.a-link-normal').attr('href');

                const productUrl = "https://www.amazon.com.tr" + justUrl;
                const image = item_1.find('img.s-image').attr('src');
                const name = item_1.find('div[data-cy="title-recipe"] span').text();

                
                
                let customerReviewRating = "0";
                if(!item_1.find('div.a-spacing-top-micro span.a-icon-alt').text()) {
                    customerReviewRating = "0";
                }
                else {
                    customerReviewRating = item_1.find('div.a-spacing-top-micro span.a-icon-alt').text().split(" ")[3].toString().replace(",", ".");
                }

                let customerReviewCount = "0";
                if(!item_1.find('div.a-spacing-top-micro span.s-underline-text')) {
                    customerReviewCount = "0";
                }
                else {
                    const crc = item_1.find('div.a-spacing-top-micro span.s-underline-text').text()
                    if(crc !== "") {
                        customerReviewCount = crc;
                    }
                    else {
                        customerReviewCount = "0";
                    }
                }

                //const price = item_1.find('div[data-cy="price-recipe"] span.a-price span.a-offscreen').text() || "Fiyat Bilgisi Bulunamadı";
                //const price = $(`div[data-index="${i}"] [data-cy="price-recipe"] span.a-price > span.a-offscreen`).text() || "Fiyat Bilgisi Bulunamadı";
                const price = $(`div[data-index="${i}"] [data-cy="price-recipe"] span.a-price`).children().first().text() || "Fiyat Bilgisi Bulunamadı";

                const cu_1 = justUrl.split("/dp/")[0];
                const cu_2 = justUrl.split("/dp/")[1].split("/ref")[0];
                const commentsUrl = "https://www.amazon.com.tr" + cu_1 + "/product-reviews/" +  cu_2 + "/ref=cm_cr_arp_d_viewopt_sr?ie=UTF8&reviewerType=all_reviews&filterByStar=all_stars&pageNumber=1";
                
                const specs_text = "";
                const userCommentsArray = [];   

                arr.push(
                    {
                        "url": productUrl,
                        "customerReviewCount": customerReviewCount,
                        "customerReviewRating": customerReviewRating,
                        "name": name,
                        "price": price,
                        /* "originalPrice": price, */
                        "image":  image,
                        "specsText": specs_text,
                        "commentsArray": userCommentsArray,
                        "commentsUrl": commentsUrl
                    }
                )
            }
            
            return arr;
            
        },
        getProductSpecsOnly: async (page, productUrl) => {
            //! productUrl ile Cache'i kontrol et eğer yok ise alttakini çalıştır

            await page.goto(productUrl);
            const info = await page.evaluate(() => {
                    let all_infos = [];
             
                    document.querySelectorAll("#productOverview_feature_div table tr").forEach(item => {
                        const st = item.textContent.trim().split("        ");
                        all_infos.push(st[0]+": "+st[1]);
                    });

                    document.querySelectorAll("#centerCol #feature-bullets li").forEach((item) => {
                        all_infos.push(item.textContent.trim());
                    })

                    return all_infos;
                }
            );
            
            return {specs_text: info};

        },
        getProductCommentsOnly: async (page, productUrl, commentsUrl, commentsOptions) => {
            //! productUrl cache işlemine yarayacak
            //! productUrl ile Cache'i kontrol et eğer yok ise alttakini çalıştır
            
            //* commentsOptions ile commentsUrl'in parametrelerini düzenle
            //const commentsUrl = "https://www.amazon.com.tr" + cu_1 + "product-reviews" +  cu_2 + "/ref=cm_cr_arp_d_viewopt_sr?ie=UTF8&reviewerType=all_reviews&filterByStar=all_stars&pageNumber=1"
            
            await page.goto(commentsUrl);
            const body = await page.evaluate(() => {
                
                const commentsArray = [];
                document.querySelectorAll("div [data-hook='review']").forEach(function(node) {

                    const createdAt = node.querySelector("[data-hook='review-date']").textContent;
                    const customerName = node.querySelector("[data-hook='genome-widget'] span.a-profile-name").textContent;
                    const star = node.querySelector("[data-hook='review-star-rating']") ? node.querySelector("[data-hook='review-star-rating']").textContent :
                    node.querySelector("[data-hook='cmps-review-star-rating']").textContent;
                    const review = 
                    /* node.querySelector("[data-hook='review-title'] span").textContent
                    + " " + */
                    node.querySelector("[data-hook='review-body']").textContent.trim();
                    
                    const images = node.querySelectorAll(".review-image-container img");
                    const mediaArray = [];
                    if(images.length > 0) {
                        images.forEach(image => {
                            const url_ns = image.getAttribute("src");
                            const url_setted = url_ns.split(".jpg")[0].split("._")[0] + ".jpg";
                            mediaArray.push(url_setted);
                        })
                    }
                    
                    commentsArray.push({
                        "createdAt": createdAt,
                        "customerName": customerName,
                        "star": star.split("5 yıldız üzerinden ").join('').replace(",", "."),
                        "review": review,
                        "mediaArray": mediaArray
                    })

                });

                return commentsArray;

            });

            
            return body;

        }

    }
}