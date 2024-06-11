/* import { useAppContext } from '@/context/ContextProvider'; */
/* import Header from "@/components/Header"; */
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { all_stores, store_siralamasi } from '@/components/en10-components/storeDatas.js';
/* import dynamic from 'next/dynamic'; */
import { produce } from 'immer';
/* import Select from 'react-select'; */
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), {
    ssr: false,
  });

import { Hata, Default_StoreList_Component, Default_Comments_Component } from '@/components/en10-components/MarketComponents/StoreListData';
import ImageShow from '@/components/en10-components/ImageShow';

/* import ImageShow from '@/components/en10-components/ImageShow'; */
/* import ImageShow from '@/components/en10-components/ImageShow'; */

export default function En10() {

    

    const [activeList, setActiveList] = useState(0);
    const [activeButton, setActiveButton] = useState(1);

    const [beforeInputValue, setBeforeInputValue] = useState("araba paspası");

    const [inputValue, setInputValue] = useState("araba paspası");
    const [selectValue, setSelectValue] = useState("Çok Değerlendirilenler");
    const [storeValue, setStoreValue] = useState("Hepsiburada");
    
    const [storeInfo, setStoreInfo] = useState(store_siralamasi[storeValue].allSelects);

    const [process, setProcess] = useState(false);

    const [dataList, setDataList] = useState({
       "query": "araba paspası",
       "Hepsiburada": {
        "Çok Değerlendirilenler": [
                {
                    "url": "https://www.hepsiburada.com/kln-3d-havuzlu-oto-paspas-universal-pm-HB00000JCIH2",
                    "customerReviewCount": 2552,
                    "customerReviewRating": 3.8,
                    "name": "Kln 3D Havuzlu Oto Paspas Universal",
                    "price": 324,
                    "image": "https://productimages.hepsiburada.net/s/26/500/10161158815794.jpg",
                    "specsText": "",
                    "commentsArray": [
                        {
                            "createdAt": "2024-01-23T15:58:15.8082912+00:00",
                            "customerName": "harun t****",
                            "star": 5,
                            "review": "Honda crv aracıma önler tam uydu arkaları çok az kesmem gerekti. Sağlam malzeme. Esnek yapılı.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/1041c0c5-cc7e-49e0-8179-cff6fd737110.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/1041c0c5-cc7e-49e0-8179-cff6fd737110.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/bf3788af-b88b-4dcd-b5c2-30caee0a5b17.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/bf3788af-b88b-4dcd-b5c2-30caee0a5b17.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/9f70034d-7060-4c02-a79b-043a634ec75e.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/9f70034d-7060-4c02-a79b-043a634ec75e.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/acf786fb-f470-4038-8cca-e01efa7f34dc.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/acf786fb-f470-4038-8cca-e01efa7f34dc.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/510dfb71-ed3a-4e37-876c-658ccd8dc13e.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/510dfb71-ed3a-4e37-876c-658ccd8dc13e.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-02-23T19:02:15.5116535+00:00",
                            "customerName": "m***** e***",
                            "star": 5,
                            "review": "Ürün kaliteli... satici çok ilgili aynı gün urunu hızlı kargoladilar...çok teşekkürler...",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/371d3550-0afe-4121-a8c4-9aa7e93d4bfe.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/371d3550-0afe-4121-a8c4-9aa7e93d4bfe.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/618fdca5-2b57-433a-bd2b-b59bfa00ca08.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/618fdca5-2b57-433a-bd2b-b59bfa00ca08.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/402e1cca-756e-4cf0-9901-ca587952b77b.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/402e1cca-756e-4cf0-9901-ca587952b77b.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/a7db5eb2-596d-4e34-9d0b-6a4c2b53ef51.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/a7db5eb2-596d-4e34-9d0b-6a4c2b53ef51.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-07-22T04:08:28.2677169+00:00",
                            "customerName": "a**** t******",
                            "star": 4,
                            "review": "Daha önce almıştım.Ama bu kadar yumuşak değildi.Fiyatına göre çok iyi bir ürün.sadece arka paspasların ortasına konulan parçayı beğenmedim.yoksa 5 puan hakediyor.kango 3 araca cuk diye oturdu.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/dda9596c-f58b-4b31-8d72-aae70a394cdc.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/dda9596c-f58b-4b31-8d72-aae70a394cdc.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/93fba734-c2bc-41e3-88d8-efe924339821.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/93fba734-c2bc-41e3-88d8-efe924339821.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/dc752d95-591c-4190-84f0-d675af764d8e.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/dc752d95-591c-4190-84f0-d675af764d8e.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/4ac61c4a-b864-43aa-a28f-61a5d4131339.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/4ac61c4a-b864-43aa-a28f-61a5d4131339.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-06-15T14:49:49.1016448+00:00",
                            "customerName": "Ökkeş D****",
                            "star": 5,
                            "review": "Kargo hızlı. Ürün kalitesi fiyatına göre iyi aracım 2005 C3 falçata ile biraz kesip biçtikten sonra uyumlu hale getirdim.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/a5101a62-aa64-444e-b6d0-9da91e0ec3fe.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/a5101a62-aa64-444e-b6d0-9da91e0ec3fe.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/b45494d8-65a8-4047-8c88-01c8b0d36f0b.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/b45494d8-65a8-4047-8c88-01c8b0d36f0b.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/db837d50-f931-4670-b8eb-5ca8a52951c0.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/db837d50-f931-4670-b8eb-5ca8a52951c0.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/efc53379-1021-4344-a628-5e88342946fe.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/efc53379-1021-4344-a628-5e88342946fe.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-01-26T09:52:14.8849462+00:00",
                            "customerName": "ÖZGÜR A****",
                            "star": 5,
                            "review": "Fiyatına göre harika. 2012 aveo aracım için aldım. Önler tam oldu. Arkaları da keserek oturttum. Gayet güzel oldu. Koku hiç yok.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/e6be8481-b42c-44fe-9328-b1eb78b5a66f.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/e6be8481-b42c-44fe-9328-b1eb78b5a66f.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/7540c8cc-ef45-485a-82e5-3a8986733469.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/7540c8cc-ef45-485a-82e5-3a8986733469.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/f2d5f411-1189-4d0a-928e-621bdabee196.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/f2d5f411-1189-4d0a-928e-621bdabee196.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-12-26T14:01:46.5364275+00:00",
                            "customerName": "M**** E*******",
                            "star": 5,
                            "review": "Ürün gayet güzel çok hızlı geldi firmaya teşekkür ederim Lada samara aracıma önler tam uydu arkaların koltuk altına giren kısımlarını kestim tam oldu hiç koku yok.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/01c4ce73-0f9f-4495-bbb9-bbdc35bd1de1.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/01c4ce73-0f9f-4495-bbb9-bbdc35bd1de1.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/50fbd4b3-c6a2-47e6-9db4-e3d4bbec99d8.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/50fbd4b3-c6a2-47e6-9db4-e3d4bbec99d8.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/5bc2cb09-704d-46ab-9e0c-111fa4359a48.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/5bc2cb09-704d-46ab-9e0c-111fa4359a48.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-03-30T15:53:12.6785641+00:00",
                            "customerName": "Selman B******",
                            "star": 4,
                            "review": "Ürün 3 günde elime ulaştı hızlı kargo için teşekkürler. Ön iki paspas güzel ama arkalar güzel değil çok sert geldi yinede teşekkürler bu fiyata idare eder",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/e95bc22a-8cf3-4c5a-8e36-9e75038c518b.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/e95bc22a-8cf3-4c5a-8e36-9e75038c518b.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/2672ae94-e8ea-44da-aae1-8ee7913042cf.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/2672ae94-e8ea-44da-aae1-8ee7913042cf.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/f39cdf50-6c06-4e31-8e9d-ff039db74758.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/f39cdf50-6c06-4e31-8e9d-ff039db74758.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2021-06-11T21:08:18.6597919+00:00",
                            "customerName": "Berke K******",
                            "star": 5,
                            "review": "ürünü nissan qashqai 2008 1.6 tekna aracım için satın aldım arkalar uydu problem olmadı ön sağ yolcu tarafında belirli yerlerden kesip ancak oturdum gene olarak ürün kalitesi fiyatına göre makul ufak tefek hataları mevcut ama fiyatı göz önüne alınınca problem değil geldiği gibi araca yaydım ufaktan bir plastik kokusu vardı ama kısa sürede geçer ben tavsiye ederim memnun kaldım tam f/p ürünü",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/3583c7bb-c33c-433e-9674-5840f0740ced.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/3583c7bb-c33c-433e-9674-5840f0740ced.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/16237c19-194b-49a4-b35f-b713dc146387.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/16237c19-194b-49a4-b35f-b713dc146387.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/a6815f7b-f486-43c4-9f88-ef860b1d58b8.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/a6815f7b-f486-43c4-9f88-ef860b1d58b8.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/fd810bbb-4fee-4286-91ab-806e48ddf317.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/fd810bbb-4fee-4286-91ab-806e48ddf317.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2020-11-27T07:12:22.0652017+00:00",
                            "customerName": "r****** a***",
                            "star": 5,
                            "review": "Kardeşim yorum yaparken lütfen insanları doğru bilgilendirin. Paspas sert çok bı beklentiniz olmasın. Tabanı kayıyor. Bayağı büyük her arabaya keserek olur.ihtiyac olarak Beklentiyi karşılıyor. Kış ayında arabamın zemini bı korusun diyerek alırsanız amenna. Koku yok. Ürün bu fiyata bu kadar olur diyecek bir ürün. Eğer güzel kaliteli bişey olsun derseniz 100 TL civarı ürünlere bakın. Ama bu ekonomik dar boğaz da işinizi görür.",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2023-03-26T18:12:54.2496979+00:00",
                            "customerName": "F**** Ü****",
                            "star": 4,
                            "review": "Fiat Grande Punto aracıma kesip biçerek yerleştirdim, gayet güzel oldu fiyatına göre gayet ideal.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/4c5ddbe4-5fdf-4505-9e49-741fb60ea420.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/4c5ddbe4-5fdf-4505-9e49-741fb60ea420.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/2844bf8d-84cb-4bae-b6c4-d8d0029e1678.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/2844bf8d-84cb-4bae-b6c4-d8d0029e1678.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/8bfde3cd-a119-46fd-ad45-2b3780fef739.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/8bfde3cd-a119-46fd-ad45-2b3780fef739.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-11-16T18:03:09.5810355+00:00",
                            "customerName": "Ö**** C**",
                            "star": 5,
                            "review": "Kaliteli mağza hızlı kargo",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/c595ced9-322b-4ebd-b0ea-a9252e977d0f.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/c595ced9-322b-4ebd-b0ea-a9252e977d0f.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/7484d033-dade-4873-a6bd-513cacbb9d50.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/7484d033-dade-4873-a6bd-513cacbb9d50.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-01-03T16:25:40.2093064+00:00",
                            "customerName": "Ahmet T********",
                            "star": 3,
                            "review": "Bu fiyattaki ürün için çok birşey beklemeyin. Paspaslar sert şekil almiyor. Araç içinde koku yaparmi bilmiyorum. Güzel keser tabana yerleştirirseniz yağmur sudan camurdan korur. Clio 5 araçta kesmesi biraz uğraştırdı ama tabana yerleştirdim. Benim fikrim araç tabanını sudan camurdan tozdan korur. F/P ürünü.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/55da2fa7-1af0-4b40-9403-cbc014d729ec.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/55da2fa7-1af0-4b40-9403-cbc014d729ec.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/5348b701-2872-4515-9df5-a5f9c71c0106.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/5348b701-2872-4515-9df5-a5f9c71c0106.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/33668aba-2744-46b3-8936-a345156bd92d.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/33668aba-2744-46b3-8936-a345156bd92d.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-05-03T07:41:33.2472978+00:00",
                            "customerName": "M*********** Ç******",
                            "star": 5,
                            "review": "Yorum okunsun dıye 5 yıldız veriyorum. Urum enjeksiyon baskıları çok kötü. 2 hafta ıcındekı baskılar açıldı. Hepsi burada urınu teknık servıse gonserın diyor şaka gıbı. Bu ÜRÜNÜ ALMAYIN. AYRICA GÖRSELDEKİ ÜRÜN GELMİYOR",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/b68b496f-c7b0-43e8-a0e9-952d3f94c3db.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/b68b496f-c7b0-43e8-a0e9-952d3f94c3db.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-03-11T10:26:33.1590303+00:00",
                            "customerName": "C********* B******",
                            "star": 4,
                            "review": "Mükemmel bir ürün mü? hayır değil, iş görür, karda kışta kolay temizlik sağlar halı paspasa göre.. baktığımda fiyatlar bu ürünün 4 -5 katı kadar, ben paspasa o rakamları vermem diyorsanız düşünmeden alınır.. kargo sorunsuz ulaştı küçük daraltmalarla araca yerleştirdim..",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/7c7abc8d-7f74-432e-92f3-945f50207625.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/7c7abc8d-7f74-432e-92f3-945f50207625.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/ee8e7d05-e59c-43e3-926d-356e1307cda0.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/ee8e7d05-e59c-43e3-926d-356e1307cda0.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-01-20T10:04:57.7554662+00:00",
                            "customerName": "L***** K******",
                            "star": 5,
                            "review": "Gayet kaliteli kalın , istediğim parlak siyah renk tonu , sert malzeme sadece arka ara paspası ufak yapmışlar. Fiyat performans müthiş",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/06eb8b74-f2f9-4221-8e0d-697d5461013a.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/06eb8b74-f2f9-4221-8e0d-697d5461013a.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-04-10T12:22:30.144329+00:00",
                            "customerName": "Ö**** H*******",
                            "star": 4,
                            "review": "Fiyatına göre iyi diyebilirim, aman aman bi beklentiniz olmasın sert malzeme , arabaya uyum sağlaması için kenarlarını kesmeniz gerekiyor. İlk bir hafta kadar koku yapabilir dışarda bekletip sonra araca koydum",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/9413e6b5-58ee-4bec-810d-93968aba8cb3.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/9413e6b5-58ee-4bec-810d-93968aba8cb3.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-12-15T15:29:00.6804362+00:00",
                            "customerName": "Y**** T****",
                            "star": 5,
                            "review": "Ürün beklediğim gibi çıktı. Şaft ortası biraz daha kalın ve uzun olmalıymış gibi geldi ama bakalım genel olarak güzel bir ürün. Karlı yağışlı havalarda arabanın paspasını korusun bana yeter.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/76893d3e-4012-494d-83a6-e3012442353c.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/76893d3e-4012-494d-83a6-e3012442353c.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-12-24T07:44:03.1560406+00:00",
                            "customerName": "Ö**** B******",
                            "star": 5,
                            "review": "Fiyatına göre gayet kaliteli ürün görseldekiyle aynı ürün güvenebilirsiniz. Ben başka satıcıdan aldım dümdüz havuzsuz ince bişey geldi iade ettim bunu aldım, beklediğimden iyi geldi ürün",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/9fb9c814-3885-42fe-adb2-a3ac0aa5de92.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/9fb9c814-3885-42fe-adb2-a3ac0aa5de92.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-03-14T10:44:52.5146627+00:00",
                            "customerName": "E*** A*****",
                            "star": 5,
                            "review": "Paspaslar kenarlarını kesip oturtunca güzel duruyor teşekkürler emeği geçenlere egea için aldım",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/a4e92835-e5ab-421a-9e43-a49a2cf6b10c.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/a4e92835-e5ab-421a-9e43-a49a2cf6b10c.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-05-04T12:25:11.1064108+00:00",
                            "customerName": "Adem M******",
                            "star": 5,
                            "review": "Fiyatına göre guzel",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/6168a59b-639e-4c0a-a0c6-7642ac298acb.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/6168a59b-639e-4c0a-a0c6-7642ac298acb.jpg"
                                }
                            ]
                        }
                    ],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBV00000JCIH3&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/simsek-3d-havuzlu-oto-paspas-universal-5-parca-pm-HBC000000B1XW",
                    "customerReviewCount": 593,
                    "customerReviewRating": 3.9,
                    "name": "Şimşek 3D Havuzlu Oto Paspas Universal 5 Parça",
                    "price": 315,
                    "image": "https://productimages.hepsiburada.net/s/59/500/110000000995612.jpg",
                    "specsText": "",
                    "commentsArray": [
                        {
                            "createdAt": "2022-05-23T11:26:50.4050563+00:00",
                            "customerName": "M****** T******",
                            "star": 5,
                            "review": "Ürünü yaklaşık bir haftadır kullanıyorum, artıları ve eksileri var aslında 5 yıldız çok ama 4 yıldız da hakkı değil, siz 4.5 yıldız gibi düşünün. Öncelikle mükemmel değil, sert plastik ayağınız ıslaksa fazla kayma yapıyor keza debriyajdan ayağınızı çekerken topuğunuz havuzda ki girintilere takılabiliyor ama benim beklentimi karşıladı. 2011 fluence aracıma büyük geldi kolaylıkla kesip yerleştirdim. Şu an işimi görüyor kullanıyorum. Eğer yüksek beklentiniz yoksa sizi memnun eder.\nUmarım ürünü almak isteyenler için aydınlatıcı olmuştur.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/5431025b-c3b3-4f0e-a6b2-976101b346f1.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/5431025b-c3b3-4f0e-a6b2-976101b346f1.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/abdb4ac3-b817-4cee-aead-e47126e3a3bc.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/abdb4ac3-b817-4cee-aead-e47126e3a3bc.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/5259f012-5de5-42e0-8d90-899e8d175965.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/5259f012-5de5-42e0-8d90-899e8d175965.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2022-05-23T20:55:34.1333085+00:00",
                            "customerName": "h**** ç*****",
                            "star": 5,
                            "review": "2001 clio sedan aracım için aldım. Kesmeye, küçültmeye gerek kalmadı. Gayet güzel durdu. Biraz kokusu vardı ama abartılacak kadar değil. Bir gün dışarıda havalandırıp öyle arabaya koydum hiç koku yok. Tavsiye ederim. Bu fiyata daha ne olsun.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/03db3825-bf1b-401e-b496-a32cc706dcaf.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/03db3825-bf1b-401e-b496-a32cc706dcaf.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/85775922-fae2-482c-ab3c-7d063aa41eb5.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/85775922-fae2-482c-ab3c-7d063aa41eb5.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/a719c490-9e4f-4b71-9524-d7e6205d51eb.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/a719c490-9e4f-4b71-9524-d7e6205d51eb.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2022-02-21T14:26:14.9727409+00:00",
                            "customerName": "H**** O******",
                            "star": 4,
                            "review": "2001 cordoba aracima aldim ilk izlenimlerim sert malzemeden yapilmis az da olsa koku var biraz havalaninca gidecegini dusunuyorum kesmek icap ediyor araca gore farklilik gosterebilir",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/da8218f1-8703-4395-b2f5-6101af625739.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/da8218f1-8703-4395-b2f5-6101af625739.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/e4d3d0fb-7fa3-410f-bf92-81768d404d18.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/e4d3d0fb-7fa3-410f-bf92-81768d404d18.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/6d8c2415-19a5-474e-b314-989a42313747.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/6d8c2415-19a5-474e-b314-989a42313747.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2022-05-13T05:39:08.9068835+00:00",
                            "customerName": "F**** B****",
                            "star": 5,
                            "review": "Bu fiyata alınabilecek en iyi havuzlu paspas. 2001 polo aracım için satın aldım. Aracın tabanına oturacak şekilde kesme yerlerinden keserek tam yerleşmesini sağladım. Aynı ürünü Facebook gruplarında 2 katı fiyata satmaya çalışıyorlar. Ürün ilk geldiğinde bir kokusu var ama sonradan geçiyor. Malzeme sert ve kalın bir plastikten yapılmış",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/37d56360-b03f-41e6-9c65-0e9f2b384ca1.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/37d56360-b03f-41e6-9c65-0e9f2b384ca1.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/cb0501a9-6343-4d4a-a960-953841849b09.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/cb0501a9-6343-4d4a-a960-953841849b09.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2022-01-11T17:06:31.9883318+00:00",
                            "customerName": "E****** S*****",
                            "star": 5,
                            "review": "Çok kaliteli doblo 1 aracıma ön taraf tam geldi arka tarafı kesme yerlerinden kesip kendim ayarladım bu piyasada bu fiyata bedava almayan pişman olur",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/15a28423-8340-467e-8ee7-6adba5ebcf41.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/15a28423-8340-467e-8ee7-6adba5ebcf41.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/1f4aabd6-cd72-41c8-845a-c76cf6153f82.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/1f4aabd6-cd72-41c8-845a-c76cf6153f82.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2021-07-14T12:00:20.2711901+00:00",
                            "customerName": "h***** k***",
                            "star": 5,
                            "review": "Ürün paketleme özenli,Kargo kısa sürede sorunsuz teslim etti.Ürün fiyat olarak uygun ve memnun kaldım.Aracım Fiat Tipo önler tam oldu arkaları ise kesim yerlerinden kestim ve uyumlu oldu.Güzel ve gösterişli",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/6ee5979a-943b-46fa-944c-681250217798.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/6ee5979a-943b-46fa-944c-681250217798.jpg"
                                },
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/d4c62ca1-0d91-4929-ac9e-6f8124399dbe.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/d4c62ca1-0d91-4929-ac9e-6f8124399dbe.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2024-02-10T21:37:56.4768935+00:00",
                            "customerName": "M**** K****",
                            "star": 5,
                            "review": "Araç iç tabanı düz olan almasın her iki tarafa da yazık havuzlu ve derin olan araç sahipleri alsın ürün güzel ben ucuz da olduğu zaman aldım ama dedim gibi dikkat edin",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2023-01-10T23:50:01.2851694+00:00",
                            "customerName": "Y**** Ö******",
                            "star": 5,
                            "review": "Daha takmadım ama bu fiyata iyi",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/fc2066bc-1715-48f7-b338-3157f2c5529d.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/fc2066bc-1715-48f7-b338-3157f2c5529d.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2022-12-19T12:37:11.19922+00:00",
                            "customerName": "B**** B********",
                            "star": 5,
                            "review": "Önceki arabamda da kullanmıştım, aracımı değiştirdim yenisine de aldım. Gidip aracınıza özel üretim diye geçen paspaslara büyük miktarlar ödemeye gerek yok kesme yerlerinden kesip biçip aracınıza uygun hale getirebiliyorsunuz, hiç de sırıtmıyor. Eski aracımda uzun süre kullandım bir kusur vs. görmedim. İlk geldiğinde koku yapıyor balkonda 1-2 gün havalandırın araca öyle koyun araca koyunca da 1 hafta içinde kokusu geçiyor. Temizlemesi kolay, havuzlu olduğundan aracın içi de pislik olmuyor. Bir süre sonra parlaklığını kaybediyor eski parlaklığını kazandırmak için yıkadıktan sonra plastik tampon parlatıcı veya lastik parlatıcı gibi ürünlerle silerseniz eski parlaklığına dönüyor.",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-02-09T13:21:12.0103036+00:00",
                            "customerName": "Ö*** T*****",
                            "star": 5,
                            "review": "Parasına göre iyi daha ne olsun. Astra j aracıma uyumsuz ama iş görüyor.",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-03-05T18:15:21.472558+00:00",
                            "customerName": "m**** a****",
                            "star": 5,
                            "review": "Gayet güzel bir ürün",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-02-29T11:34:18.7636335+00:00",
                            "customerName": "a**** b*****",
                            "star": 5,
                            "review": "Ürün ve teslimat çok başarılı teşekkür ederim",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-01-26T15:36:43.8480477+00:00",
                            "customerName": "h**** k*******",
                            "star": 5,
                            "review": "Ürün gayet iyi soylenildiği gibi",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-04-06T14:37:27.8764886+00:00",
                            "customerName": "Z*** K*****",
                            "star": 4,
                            "review": "Bu fiyata iyi",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2023-08-31T05:11:34.5694932+00:00",
                            "customerName": "U*** İ****",
                            "star": 5,
                            "review": "Arka takım komple birleşik olsa daha iyi olurdu ama bu da güzel alınır",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-02-02T10:47:53.0464247+00:00",
                            "customerName": "a**** b*****",
                            "star": 5,
                            "review": "Çok iyi",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2022-02-21T19:03:24.0284716+00:00",
                            "customerName": "H************* Ö******",
                            "star": 5,
                            "review": "2004 focus aracıma aldım. Parçaları keserek tam oldu. Fiyat performans olarak değerlendirirsek gayet iyi. Koku yoktu.",
                            "mediaArray": [
                                {
                                    "fullMediaUrl": "https://images.hepsiburada.net/usercontents/usercontentimages_0/09a0cc58-ee0c-45a8-9350-9894fca07ed0.jpg:webp",
                                    "mediaText": null,
                                    "url": "https://images.hepsiburada.net/usercontents/s/0/{size}/09a0cc58-ee0c-45a8-9350-9894fca07ed0.jpg"
                                }
                            ]
                        },
                        {
                            "createdAt": "2023-07-08T20:32:22.0042298+00:00",
                            "customerName": "E** K*******",
                            "star": 5,
                            "review": "Ürün güzel kullanışli  alabilirsiniz :)",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2023-09-18T05:07:39.9084497+00:00",
                            "customerName": "U********** K*******",
                            "star": 5,
                            "review": "Kalite kallavi 5 ,🩵🩵🩵🩵🩵",
                            "mediaArray": []
                        },
                        {
                            "createdAt": "2024-04-30T11:47:41.452094+00:00",
                            "customerName": "A** T****",
                            "star": 3,
                            "review": "Ürün çok ince bazı yerleri defolu gibi",
                            "mediaArray": []
                        }
                    ],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBCV000000B1XX&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/goodyear-tum-araclara-uyumlu-universal-3d-havuzlu-oto-paspas-pm-HBC000037V2YA",
                    "customerReviewCount": 359,
                    "customerReviewRating": 4.7,
                    "name": "Goodyear Tüm Araçlara Uyumlu Universal 3D Havuzlu Oto Paspas",
                    "price": 988.99,
                    "image": "https://productimages.hepsiburada.net/s/311/500/110000304939082.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBCV000037V2YB&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/gold-tum-araclara-uyumlu-4d-havuzlu-profesyonel-siyah-paspas-pm-HB000018XLIJ",
                    "customerReviewCount": 271,
                    "customerReviewRating": 3.6,
                    "name": "Gold Tüm Araçlara Uyumlu 3D Havuzlu Zebra Siyah Oto Paspas",
                    "price": 530.1,
                    "image": "https://productimages.hepsiburada.net/s/777/500/110000700767072.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBV000018XLIK&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/sahler-opel-mokka-b-2021-oto-paspas-pm-HBC00000DGG4A",
                    "customerReviewCount": 131,
                    "customerReviewRating": 4.8,
                    "name": "Sahler Opel Mokka B 2021+ Oto Paspas",
                    "price": 1214.82,
                    "image": "https://productimages.hepsiburada.net/s/96/500/110000038827158.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBCV00000DGG4B&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/promats-hyundai-getz-uyumlu-3d-havuzlu-oto-paspas-pm-HB00000S9URR",
                    "customerReviewCount": 104,
                    "customerReviewRating": 3.9,
                    "name": "Promats Hyundai Getz Uyumlu 3D Havuzlu Oto Paspas",
                    "price": 467.1,
                    "image": "https://productimages.hepsiburada.net/s/37/500/10554440187954.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBV00000S9URS&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/sahler-volkswagen-golf-8-e-tsi-otomatik-2021-oto-paspas-pm-HBC00000U9UY6",
                    "customerReviewCount": 99,
                    "customerReviewRating": 4.5,
                    "name": "Sahler Volkswagen Golf 8 E-Tsi ( Otomatik ) 2021+ Oto Paspas",
                    "price": 1214.82,
                    "image": "https://productimages.hepsiburada.net/s/131/500/110000081481575.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBCV00000U9UY7&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/carx-renault-fluence-3d-havuzlu-oto-paspas-ve-bagaj-havuzu-2009-ve-uzeri-pm-HB00000JSXHP",
                    "customerReviewCount": 98,
                    "customerReviewRating": 4.2,
                    "name": "Carx Renault Fluence 3D Havuzlu Oto Paspas Ve Bagaj Havuzu (2009 Ve Üzeri)",
                    "price": 1500.3,
                    "image": "https://productimages.hepsiburada.net/s/27/500/10181912461362.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBV00000JSXHQ&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/promats-fiat-linea-uyumlu-3d-havuzlu-oto-paspas-pm-HB00000S9URD",
                    "customerReviewCount": 97,
                    "customerReviewRating": 3.5,
                    "name": "Promats Fiat Linea Uyumlu 3D Havuzlu Oto Paspas",
                    "price": 535.5,
                    "image": "https://productimages.hepsiburada.net/s/37/500/10554440187954.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBV00000S9URE&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                },
                {
                    "url": "https://www.hepsiburada.com/knk-oto-paspas-kokulu-5-parca-universal-eko-pvc-siyah-pm-HB000002ME3D",
                    "customerReviewCount": 86,
                    "customerReviewRating": 3.5,
                    "name": "Nettedarikcisi Oto Paspas Kokulu 5 Parça Universal Eko Pvc Siyah",
                    "price": 440.1,
                    "image": "https://productimages.hepsiburada.net/s/34/500/10447658287154.jpg",
                    "specsText": "",
                    "commentsArray": [],
                    "commentsUrl": "https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=HBV000002ME3E&showOnlyMediaAvailableReviews=false&includeSiblingVariantContents=true&from=0&size=20&selectedStars=1,2,3,4,5"
                }
        ]
       }
       
    });

    const [showImage, setShowImage] = useState(false);
    const [commentImages, setCommentImages] = useState([]);
    const [defaultCommentImage, setDefaultCommentImage] = useState(0);

    const showImageClick = (images, index) => {
        setShowImage(true);
        setCommentImages(images);
        setDefaultCommentImage(index);
    }

    const handleBeforeInputChange = (event) => {
        setBeforeInputValue(event.target.value);
        /* console.log("current value: ", event.target.value); */
    }

    //* Mağaza butonları tıklama olayı
    const handleStoreChange = async(value) => {
        console.log("handle çalıuştı");
        const currentStoreValue = value;

        if(currentStoreValue == "Hepsiburada" || currentStoreValue == "Amazon") {

            const firstOfSiralama = store_siralamasi[currentStoreValue].firstValue;
            setSelectValue(firstOfSiralama);
            setStoreValue(currentStoreValue);
            setActiveButton(1);
            setActiveList(0);
            setStoreInfo(store_siralamasi[currentStoreValue].allSelects);

            if(!dataList[currentStoreValue] || !dataList[currentStoreValue].hasOwnProperty(firstOfSiralama)) {
                await getListData(
                    {
                        "t": "list",
                        "q": inputValue,
                        "s": firstOfSiralama,
                        "m": currentStoreValue
                    }
                );
            }
        }
        else 
        {
            /* console.log("girmedi"); */
            alert("Diğer mağazaların kodları henüz hazır değil.");
        }
    }

    //* selectValue değişme olayı
    const handleSelectChange = async (value) => {
        console.log("change çalıştı");
        //! bir tür koruma eklenmeli
        const currentSelect = value;

        setSelectValue(currentSelect);
        setActiveButton(1)
        setActiveList(0);

        if(!dataList[storeValue].hasOwnProperty(currentSelect)) {
            await getListData(
                {
                    "t": "list",
                    "q": inputValue,
                    "s": currentSelect,
                    "m": storeValue
                }
            );
        }
    }

    

    //form
    const handleSearch = async (event) => {
        event.preventDefault();

        if(beforeInputValue.length < 2) {
            alert("Lütfen daha uzun bir arama giriniz.")   
            return false;
        }

        setInputValue(beforeInputValue);

        if(dataList.query == beforeInputValue) {
            if(!dataList[storeValue] && !dataList[storeValue][selectValue]) {
                /* console.log("handle search 2"); */
                await getListData(
                    {
                        "t": "list",
                        "q": beforeInputValue,
                        "s": selectValue,
                        "m": storeValue
                    }
                );
            }
        }
        else {
            /* console.log("handleSearch 3"); */
            await getListData(
                {
                    "t": "list",
                    "q": beforeInputValue,
                    "s": selectValue,
                    "m": storeValue
                },
                true
            );
        }
    }

    /* const delay = (data, ms) => new Promise(resolve => setTimeout(() => resolve(data), ms*1000)); */


    const fetchAll = async(requestDataObject) => {
        console.log("fetch all çalıştı");
        const response = await fetch("/api/route", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                req: "en10",
                data: requestDataObject
            })
          })
          .then(response => {
            if (!response.ok) {
              console.log("Hata yaşandı - fetchAll. ", requestDataObject.t);
              return false;
            }
            return response.json();
          })
          .catch(error => {
            console.error('Hata yaşandı:', error);
            return false;
        });

        return response; 
    }


    const getListData = async (queryObject, reset=false) => {
        console.log("getlistdata girildi");
        if(!process) {
            setProcess(true);
            //* //////////////////
            const response = await fetchAll(queryObject);
            if(response) {
                if(reset) {
                    console.log("reset çalıştı");
                    setDataList(() => {
                        const resetDataList = {
                            query: queryObject.q,
                            [queryObject.m]: {
                                [queryObject.s]: response
                            }
                        }

                        if(response[0].commentsArray.length == 0 && 
                        Number(resetDataList[queryObject.m][queryObject.s][0].customerReviewCount) != 0) {
                            getCommentsData(
                                {
                                    q: queryObject.q,
                                    s: queryObject.s,
                                    m: queryObject.m,
                                    url: resetDataList[queryObject.m][queryObject.s][0].url,
                                    commentsUrl: resetDataList[queryObject.m][queryObject.s][0].commentsUrl,
                                    commentsOptions: {}
                                },
                                resetDataList,
                                0
                            )
                        }
                        
                        return resetDataList;
                    })
                }
                else {
                    console.log("else çalıştı");
                    setDataList(prevData => {
                        const updatedDataList = produce(prevData, draft => {
                            draft.query = queryObject.q;
                            draft[queryObject.m] = {
                                ...draft[queryObject.m],
                                [queryObject.s] : response
                            }
                        });
                        
                        if(response[0].commentsArray.length == 0 && 
                            Number(updatedDataList[queryObject.m][queryObject.s][0].customerReviewCount) != 0) {
                            getCommentsData(
                                {
                                    q: queryObject.q,
                                    s: queryObject.s,
                                    m: queryObject.m,
                                    url: updatedDataList[queryObject.m][queryObject.s][0].url,
                                    commentsUrl: updatedDataList[queryObject.m][queryObject.s][0].commentsUrl,
                                    commentsOptions: {}
                                },
                                updatedDataList,
                                0
                            )
                        }

                        return updatedDataList;
                    });
                }
            }
            else {
                alert("Veri listesi çekilirken hata ile karşılaşışdı.");
            }   
            //* //////////////////
            setProcess(false);
        }
        else {
            alert("Önceki isteğin tamamlanmasını bekliyoruz.");
        }
        console.log("getlistdata çıkıldı");
    }


    const getCommentsData = async (queryDataObject, updatedDataList=null, activeListNum=0) => {
        if(updatedDataList && activeListNum === 0) { //ListData değişmiştir
            setProcess(true);
            const response = await fetchAll(
                {
                    t: "comments",
                    q: queryDataObject.q,
                    s: queryDataObject.s,
                    m: queryDataObject.m,
                    url: queryDataObject.url,
                    commentsUrl: queryDataObject.commentsUrl,
                    commentsOptions: queryDataObject.commentsOptions
                }
            )
            if(response) {
                setDataList(() => {
                    return produce(updatedDataList, draft => {
                        draft[queryDataObject.m][queryDataObject.s][activeListNum].commentsArray = response;
                    });
                })
            }
            else {
                alert("Yorumları getiren sistemimiz geçici süreliğine kullanılamıyor, lütfen daha sonra tekrar deneyin. Hata kodu: gcd1");
            }
            setProcess(false);
        }
        else {
            if(!process) {
                setProcess(true);

                const response = await fetchAll(
                    {
                        t: "comments",
                        q: queryDataObject.q,
                        s: queryDataObject.s,
                        m: queryDataObject.m,
                        url: queryDataObject.url,
                        commentsUrl: queryDataObject.commentsUrl,
                        commentsOptions: queryDataObject.commentsOptions
                    }
                )
                if(response) {
                    setDataList(prevData => {
                        return produce(prevData, draft => {
                            draft[queryDataObject.m][queryDataObject.s][activeListNum].commentsArray = response;
                        })
                    })
                }
                else {
                    alert("Yorumları getiren sistemimiz geçici süreliğine kullanılamıyor, lütfen daha sonra tekrar deneyin. Hata kodu: gcd2");
                }

                setProcess(false);
            }
            else {
                alert("İsteğin tamamlanmasını bekliyoruz 2")
            }
        }
    }

    const getSpecsData = async () => {

        if(!process) {
            setProcess(true);
            //* //////////////////

            const url = dataList[storeValue][selectValue][activeList].url;

            const response = await fetchAll(
                {
                    t: "specs",
                    q: inputValue,
                    s: selectValue,
                    m: storeValue,
                    url: url
                }
            )
            if(response) {
                setDataList(prevData => {
                    return produce(prevData, draft => {
                        draft[storeValue][selectValue][activeList].specsText = response.specs_text;
                    })
                })
            }
            else {
                alert("Özellikleri getiren sistemimiz geçici süreliğine kullanılamıyor, lütfen daha sonra tekrar deneyin. Hata kodu gsd1")
            }

            //* //////////////////
            setProcess(false);
        }
        else {
            alert("İsteğin tamamlanmasını bekliyoruz 3");
        }
    }

    
    //Default-StoreList içerisinde setActiveList olarak kullanılıyor 
    const activeListChangeInDefault = async(activeListNum) => {
        console.log("active list çalıştı");
        setActiveList(activeListNum)
        setActiveButton(1);
        if(dataList[storeValue][selectValue][activeListNum].commentsArray.length == 0 && 
            Number(dataList[storeValue][selectValue][activeListNum].customerReviewCount) != 0) {
            const url = dataList[storeValue][selectValue][activeListNum].url;
            const commentsUrl = dataList[storeValue][selectValue][activeListNum].commentsUrl;
            const commentsOptions = {};

            /* console.log("reviewCount: ", typeof reviewCount ); */

            await getCommentsData
            (
                {
                    t: "comments",
                    q: inputValue,
                    s: selectValue,
                    m: storeValue,
                    url: url,
                    commentsUrl: commentsUrl,
                    commentsOptions: commentsOptions
                },
                null,
                activeListNum
            )
        }
    }


   /*  useEffect(() => {
        //* sadece bakmak için var bu useEffect
        //setActiveButton(1);
        console.log("data list değişimleri");
        console.log(dataList);
    }, [dataList]) */

    

    return (
        <>
        {showImage &&  <ImageShow images={commentImages} setShowImage={setShowImage} defaultCommentImage={defaultCommentImage}/>}
        <div id='cc0'>
            <div id='cc1'>
                    {/* <div style={{textAlign: "center", marginTop: "10px"}}>Buraya card'lar gelecek...</div> */}
                    <form id='search-top' onSubmit={handleSearch}>
                        <input id="search-input" name="q" type='search' placeholder='Ürün adı ile ara'
                        /* value={"araba paspası"} */
                        defaultValue={"araba paspası"}
                        autoComplete='off' 
                        onChange={(e) => handleBeforeInputChange(e)}
                        />
                        <button id='search-button' type='submit' style={process ? {cursor: "not-allowed"} : {}} disabled={process}>Ara</button>
                    </form>
                    {/* <br></br> */}
                    
                    {/* <div id='search-bottom'>
                        <ul>
                            <li>En Çok Aranan kelime bir</li>
                            <li>En Çok Aranan kelime iki</li>
                            <li>En Çok Aranan kelime üç</li>
                            <li>En Çok Aranan kelime dört</li>
                            <li>En Çok Aranan kelime beş</li>
                        </ul>
                    </div> */}

                    <div id='store-list'>
                        <h1 style={{textAlign: "center"}}> {inputValue} </h1>
                        <div id='store-head'>
                            <Select
                                id='store-select'
                                options={all_stores.map(store => ({value: store, label: store }))}
                                value={all_stores.map(store => ({label: store, value: store})).find(option => option.value === selectValue)}
                                onChange={(e) => handleStoreChange(e.value)}
                                defaultValue={{label: storeValue, value: storeValue}}
                                isDisabled={process}
                                isSearchable={true}
                                isOptionDisabled={(option) => !["Hepsiburada", "Amazon"].includes(option.value)}
                            />

                            <Select 
                                id='select-select'
                                options={storeInfo.map(select =>  ({ value: select, label: select }))}
                                value={{label: selectValue, value: selectValue}}
                                onChange={(e) => (handleSelectChange(e.value))}
                                defaultValue={{label: selectValue, value: selectValue}}
                                isDisabled={process}
                                isSearchable={true}
                            />
                        </div>
                        <div id='two-side'>
                            <ul id='items-list'>
                                {  
                                    dataList && 
                                    dataList.hasOwnProperty && 
                                    dataList.hasOwnProperty(storeValue) &&
                                    dataList[storeValue].hasOwnProperty(selectValue) && 
                                    dataList[storeValue][selectValue].length !== 0 ?
                                        dataList[storeValue][selectValue].map((li, index) => {
                                            return (
                                                <Default_StoreList_Component
                                                    key={index} 
                                                    listeAnahtari={index} 
                                                    storeValue={storeValue}
                                                    activeList={activeList} 
                                                    setActiveList={activeListChangeInDefault} 
                                                    items={li}
                                                    process={process}
                                                />
                                            )
                                        })
                                        :
                                        (
                                            <p style={{textAlign: "center"}}><b>Yükleniyor..</b></p>
                                        )
                                }
                            </ul>
                            <div id='specs-and-comments-container'>
                                <div id='sacc-head'>
                                    <button className={['sacc', activeButton === 1 ? 'sacc-clicked' : ''].join(' ')} 
                                    disabled={process}
                                    style={process ? {cursor: "not-allowed"} : {}}
                                    onClick={() => {
                                        /* if(activeButton != 1 && dataList[storeValue][selectValue][activeList].commentsArray.length === 0) {
                                            getCommentsData();
                                        } */
                                        setActiveButton(1);
                                    }}>Yorumlar</button>

                                    <button className={['sacc', activeButton === 2 ? 'sacc-clicked' : ''].join(' ')} 
                                    disabled={process}
                                    style={process ? {cursor: "not-allowed"} : {}}
                                    onClick={async () => {
                                            if(activeButton != 2 && dataList[storeValue][selectValue][activeList].specsText.length === 0) {
                                                getSpecsData();
                                            }
                                            setActiveButton(2);
                                        }
                                    }>Özellikler</button>
                                </div>
                                <div id='sacc-body'>
                                    <div id='comments' className={[activeButton === 2 ? 'sacc-hidden' : '']}>
                                        {
                                            dataList && 
                                            dataList.hasOwnProperty && 
                                            dataList.hasOwnProperty(storeValue) &&
                                            dataList[storeValue].hasOwnProperty(selectValue) && 
                                            dataList[storeValue][selectValue].hasOwnProperty(activeList) &&
                                            dataList[storeValue][selectValue][activeList].name.length !== 0 &&
                                            (
                                                <h2 style={{borderBottom: "2px solid black", textAlign: "center", padding: "5px"}}>{dataList[storeValue][selectValue][activeList].name}</h2>
                                            )
                                        }
                                        <ul id='comments-list'>
                                            {
                                                

                                                dataList && 
                                                dataList.hasOwnProperty && 
                                                dataList.hasOwnProperty(storeValue) &&
                                                dataList[storeValue].hasOwnProperty(selectValue) &&
                                                dataList[storeValue][selectValue].hasOwnProperty(activeList) && 
                                                dataList[storeValue][selectValue][activeList].commentsArray.length !== 0 ?
                                                (
                                                    dataList[storeValue][selectValue][activeList].commentsArray.map((item, index) => {
                                                        return (
                                                            <Default_Comments_Component
                                                            key={index} 
                                                            storeValue={storeValue}
                                                            items={item}
                                                            showImageClick={showImageClick}/>
                                                        )
                                                    })
                                                ) 
                                                :
                                                (   
                                                    
                                                    process ? 
                                                        (<p style={{textAlign: "center"}}><b>Yorumlar yükleniyor...</b></p>) 
                                                            :
                                                        (<p style={{textAlign: "center"}}><b>Bu ürüne yorum yapılmamış.</b></p>)
                                                
                                                )
                                                
                                            }
                                        </ul>
                                    </div>
                                    <div id='specs' className={[activeButton === 1 ? 'sacc-hidden' : '']}>
                                        {   
                                            dataList && 
                                            dataList.hasOwnProperty && 
                                            dataList.hasOwnProperty(storeValue) &&
                                            dataList[storeValue].hasOwnProperty(selectValue) && 
                                            dataList[storeValue][selectValue].hasOwnProperty(activeList) &&
                                            dataList[storeValue][selectValue][activeList].name.length !== 0 &&
                                            (
                                                <h2 style={{borderBottom: "2px solid black", textAlign: "center"}}>{dataList[storeValue][selectValue][activeList].name}</h2>
                                            )
                                        }
                                        {   
                                            dataList && 
                                            dataList.hasOwnProperty && 
                                            dataList.hasOwnProperty(storeValue) && 
                                            dataList[storeValue].hasOwnProperty(selectValue) &&
                                            dataList[storeValue][selectValue].hasOwnProperty(activeList) &&
                                            dataList[storeValue][selectValue][activeList].specsText.length !== 0 ?
                                            (
                                                <div style={{textAlign:"center"}} dangerouslySetInnerHTML={{__html: dataList[storeValue][selectValue][activeList].specsText}}/>
                                            )
                                            : 
                                            (
                                                <p style={{textAlign: "center"}}><b>Ürün açıklaması yükleniyor..</b></p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
      </div>
        </>
    );
  }