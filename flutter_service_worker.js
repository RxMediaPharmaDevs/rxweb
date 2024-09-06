'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d7f9e7baf4f89bac7e0e2f4fa81b3f93",
"index.html": "36ba72b6e519ed41946a9ea7ec7af3aa",
"/": "36ba72b6e519ed41946a9ea7ec7af3aa",
"main.dart.js": "bdcfd17f0aa93104cbbd01875bfd105b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b03141e87947a058f7b6a45b66480d2b",
"assets/AssetManifest.json": "2098111346252afd904bba6a7978cff8",
"assets/NOTICES": "b04c8d63966e81d8e8a4322d66231cd5",
"assets/FontManifest.json": "72bccdb1e5149e3fd029c210f081f782",
"assets/AssetManifest.bin.json": "bc04f8c27ac298e46dffc57a06e0554d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "157404fa4c10da04fb2b2220d3bbc43f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1731167791513e9c323307c20b411031",
"assets/fonts/MaterialIcons-Regular.otf": "c4194b3a308cf7ad821eb7bc98becbce",
"assets/assets/images/splashScreen.png": "25664686f4ee7ffc1bc16b4951b07352",
"assets/assets/images/loading.gif": "50cc7cb16cbf5dac2c56217298b9df0a",
"assets/assets/images/rx_logo_only.png": "0909534ce7b160a9e479158decd48bf4",
"assets/assets/images/hap-bul-images/kalp.png": "3455d65b821e608754b10f98d8a9c300",
"assets/assets/images/hap-bul-images/yuvarlak.png": "577beedeed10c0b2df9adc9048f7eb3a",
"assets/assets/images/hap-bul-images/baklava.png": "31d4e32a5ec91c588c588bb09bde7abb",
"assets/assets/images/hap-bul-images/mermi.png": "a3cb64a4e3bfb24ad0c3fc3ec7d3a70d",
"assets/assets/images/hap-bul-images/yonca.png": "9dd35a87afb3eda960274d868ffd33f7",
"assets/assets/images/hap-bul-images/kemik.png": "1c2bebe51a850b23509300d867f5b8bc",
"assets/assets/images/hap-bul-images/besgen.png": "c68b0df81163dba02623fa3aa5b03eef",
"assets/assets/images/hap-bul-images/disli.png": "3481030a690265dc22c6b37d717c2053",
"assets/assets/images/hap-bul-images/test0.png": "02261af23de000430c88f9965ab65d42",
"assets/assets/images/hap-bul-images/kare.png": "c7232814bc9c8155043d4ecf293e248e",
"assets/assets/images/hap-bul-images/sekizgen.png": "d6f4e48d500db0ba1723c625f03b8ee6",
"assets/assets/images/hap-bul-images/resim-yok.png": "a9f46c622d7c670b4e511744dda6139e",
"assets/assets/images/hap-bul-images/yamuk.png": "554f8d0c04bb4801a75338539664e435",
"assets/assets/images/hap-bul-images/dikdortgen.png": "ff2cc9c067f08b17e0b4c3d010dc42c6",
"assets/assets/images/hap-bul-images/kapsul.png": "74249117d98a44de2ecef0c864baebbe",
"assets/assets/images/hap-bul-images/elips.png": "db45e19712de7c46de9c8e3c3bf61cf8",
"assets/assets/images/hap-bul-images/altigen.png": "02c67de09ca7718cf4cc55ee39f00ce8",
"assets/assets/images/hap-bul-images/damla.png": "c82583f271e4770b0df65e6fe2e9c86e",
"assets/assets/images/hap-bul-images/diger.png": "5c27b26f6ef4e277c5ca281c7ffb45db",
"assets/assets/images/hap-bul-images/yarimDaire.png": "c91244bbdf4d6c46147634c81fdefe35",
"assets/assets/images/hap-bul-images/ucgen.png": "19a283501605af970e22ba98738bd768",
"assets/assets/images/rx-app-logo.png": "7e07d2966a88552bfae59bc428c585f0",
"assets/assets/webpages/index.html": "3a10a883b7fc1d5577228b935622f6be",
"assets/assets/icons/doping_maddesi_icerir.svg": "00d03f973f55b4c8f75eca0556d8dcc8",
"assets/assets/icons/antineoplastik_ve_diger_tehlikeli_ilaclar.svg": "8b4e0fc8088b22190641acc8b2d3a860",
"assets/assets/icons/kozmetik_yonetmeligine_tabi.svg": "a98d98f0fb90a18f4d79e63092ae7649",
"assets/assets/icons/isiktan_koruyunuz.svg": "36b770ef87fd0acbe792f44ff435cfd8",
"assets/assets/icons/gebelik_kategorisi_d_veya_x_icerir.svg": "15af8f775b0f56ed1a7e9b2aa1b46274",
"assets/assets/icons/depocu_fiyatli_urun.svg": "3989ac25d8b9624e71d5a1c96ec182f8",
"assets/assets/icons/sadece_kadinlar_icin.svg": "6987957f56f33bcd3ab560a69f7c4c7d",
"assets/assets/icons/ek_izleme.svg": "8fcbe78d8d00b49d7fdf83c90876c890",
"assets/assets/icons/dondurulmamalidir.svg": "2b9fa9a75fbb70a9023fc553f0130771",
"assets/assets/icons/gluten_icermez.svg": "0f217f941ec9077a1e53ad95c53687e5",
"assets/assets/icons/ce_belgeli_urun.svg": "07e8cf82fb60669b6c102cc994eb55a3",
"assets/assets/icons/dso_temel_ilac_listesi_ile_kismi_uyumlu.svg": "154ceeda8213d75efb77649531beb3d4",
"assets/assets/icons/olum_tehlikesi.svg": "e50369c0dfaa29e47be74c7b3cfb7be2",
"assets/assets/icons/ara_urun.svg": "d80746c13367e93e4fda7f438c3d706b",
"assets/assets/icons/pediyatrik_kullanim.svg": "82e56e48745aece75c16f795e1c7e6a1",
"assets/assets/icons/soguk_zincir.svg": "b0faf9dbf8d97a256d0780f9f80a0919",
"assets/assets/icons/sitotoksik.svg": "268df446049b3de02b4bd44911539276",
"assets/assets/icons/dso_cocuk_temel_ilac_listesi_ile_kismi_uyumlu.svg": "8c4c4c027d804fd827a6dafe3157c218",
"assets/assets/icons/biyobenzer_urun.svg": "64dff6face54cb5e0f867fa1ed8a352e",
"assets/assets/icons/dso_cocuk_temel_ilac_listesi_%25235B912D.svg": "9a35de56c04296919bd419c9ee65cc61",
"assets/assets/icons/sirali_dagitim.svg": "0074b424dea6fb1da0d51467a3d9cac5",
"assets/assets/icons/dso_yenidogan_temel_ilac_listesi_ile_kismi_uyumlu.svg": "5a95978d9089ee84a99616385cde3a8d",
"assets/assets/icons/etiket.svg": "b253e1b54c270084f63fcb177a4da13e",
"assets/assets/icons/geleneksel_bitkisel_tibbi_urun.svg": "a6e8c857af921def6c808cf9722a231b",
"assets/assets/icons/a_harfi.svg": "2b0ef141814f1185ebf915406efbba11",
"assets/assets/icons/dso_temel_ilac_listesi.svg": "d1a8599cbf2b375ffb2a4d7e4aa90de5",
"assets/assets/icons/nemden_koruyunuz.svg": "e1b2c54827543502b97108a6fa4884fa",
"assets/assets/icons/dso_yenidogan_temel_ilac_listesi.svg": "358adbfddd0a489ca71fc20e0fe3a266",
"assets/assets/icons/referans.svg": "1ad31e71c73effa28ee105e71fecd64b",
"assets/assets/icons/hasta_onay_formu.svg": "ebe45e3cb96290ef04b28b1ef528b171",
"assets/assets/icons/ilac_beraberi.svg": "4c80798927c76cb570a48e772778f20d",
"assets/assets/icons/ek_izlemeye_tabi_ilac.svg": "56ec47ab8169a7ee19b2e65074b44556",
"assets/assets/icons/ilac_izlem_formu.svg": "496b70a1ea0fc696aeee4b582e5d4f6b",
"assets/assets/icons/sadece_erkekler_icin.svg": "68654f45f30521987228157072935fbd",
"assets/assets/icons/biyosidal_urun.svg": "dd437a8dc1b60a419fb32b4db61ffdd8",
"assets/assets/fonts/customicon.ttf": "27c3d77223860835b958f2095956ea51",
"assets/assets/translations/tr-TR.json": "08946d5b2674d64eff7c60f11eb88cee",
"assets/assets/translations/en-US.json": "62612bf208fd767b7586d821e223dc3e",
"assets/assets/hints/v2.38_EczacilikAkademisi.gif": "51ac8e8f56629514fcac920778b11dd2",
"assets/assets/hints/currency.gif": "2e5236db7821702d4817d94cc82ecda9",
"assets/assets/hints/ImageZoom.gif": "544b33a0ce2089f262af95d380eed5d7",
"assets/assets/hints/v2.45_favoriler.gif": "be7139fad5f63f2d4161e48d19553d10",
"assets/assets/hints/v2.50_ilac_etiketleri.gif": "c69df91403afcda67c17eb8f35c81701",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
