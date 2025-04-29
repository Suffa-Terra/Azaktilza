'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3416081d23e0ba48e83a73cd521d1c45",
"version.json": "8e835bcb5728dfc96082af91cdc98f39",
"index.html": "8fa34bd50740a3cdd860d61a425d04aa",
"/": "8fa34bd50740a3cdd860d61a425d04aa",
"logoOscuro3.jpeg": "a771cb7307db00586902f40ba9732fcc",
"main.dart.js": "811993f4e9a64a9618c230357462bbab",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "37d6aedb06408a2473b6bc72031f2a58",
".git/REBASE_HEAD": "7ac6dfce5dcec1aa51e253370d4c2509",
".git/ORIG_HEAD": "7ac6dfce5dcec1aa51e253370d4c2509",
".git/config": "2ca29393a9a2699b22754763becc0678",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "53e509d54b290456fd48887874ea0109",
".git/objects/57/74fda3ec847bbb149773c249fa4a29e586141b": "f9836ba979fb901fffda0c2c366820bf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/03/4e848032092eaf8ef96eac731b6ed5961987f3": "e97308e49023e9717f5ed9ffe0cc367f",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/9e/8c0187f13a15490175f2b048de0ea085f51a5d": "e6c3ac8b79765f32786ac219bfb03e5d",
".git/objects/6a/734867dea373aa263a47b0f41d1ffcb308331a": "109d43a675ac9b8298b512229c737d85",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/35/ffc86d47acbd7e8d7f5f9160b29f9ae724ea62": "048147f0bd734ef578055846fc74ad2f",
".git/objects/3d/ba40424883a333d4c694b41eb88964e4e6228f": "98969ae16c0d9e81bc9b3205f647e48c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/9c/b55643439584fcc8d60187cc430e10854c7dee": "bfd8b84cec0e2c725a1c04526cf086be",
".git/objects/a4/cf6f83ffb1dfb8e396439262d8997078be135f": "89a45b4f459bb6fbece615293da7d339",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/b3/137d7450fadfdd403050c44b40d628cbfbe61b": "74b17d3ae32bebc0bfd9b14b8cb45ad8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/e65cadb9bac07bcaea043e9918de7a29c91177": "ead8e6f58c89e4ffa38520f6bc08b0a0",
".git/objects/ab/f7be7d6bb79a668f5e058f573a906f35a321f6": "adf85bea47ac454b5a3b621cb94195e5",
".git/objects/e5/4959170b219986b99b5de14fcae53cef0f1562": "36fe434e36872753d876640229313740",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/56c18d706bfeb6ba2386016fade69c20d13648": "46a71ec18eca26ebf21caaed88d1181f",
".git/objects/c9/4776e4a0f12b80010cdf01dab14665445c5446": "01e31a78687ae4c6e7d08cd9133754c9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/9d14f81749c364c91de41ded51746447d46a8e": "88f708fb018a8db23ebf2630d6a23a7a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/cf/04a368fb23a9a0fe2639578444fa00510cb5f7": "3b59e12cad9f4edefa79a8882a564c27",
".git/objects/c1/9bf7a97a67f4ac4dff4362e95c79992e28e179": "6aa4fc47838dd33de38d34d9d46a1e13",
".git/objects/4e/47c7fecdc9ad7f4ee4f95afe4dfc98cb6e7fdb": "84cee591720277bba83fed632c4b329d",
".git/objects/27/a8391f923fafd9cd58d7c2c64814555f0432a2": "61d29926868c416f9ea4d2a83bffc4cf",
".git/objects/4b/295743bce89d7b1bca50ae96d6bed2090c21f2": "bef1be6a29a5302fbaadbe3316966895",
".git/objects/29/a3a5017f048d6d8e6a450eef64435ddee44fb7": "5e19118456cb36191b6d4968cb027c2a",
".git/objects/28/7ad60b5b9ff0eac602a89ed58c63b268d87a72": "259e84919d157ce7e6b3deda60464bae",
".git/objects/8f/b1c2e9c1440c97c7d594538538a0e82abeb8f5": "804fbb85f5ea2ea9e696c41adcbe7d10",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/776f832eeef6f54c987850d16b1d07b6383dfe": "56ea825d6e20399cce682e8e8a2677f5",
".git/objects/81/3251ecc967796a239f4bd2c489a9bc25b1f707": "9da1e5dd6f4a2072eff06aba669b4501",
".git/objects/43/29631b5b1c2c0a6f58b294f242c27c2fe47e30": "a160c1906bfbfcebd5d24714ed9ac909",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/36/ef5eb8ac3467edfd98ab64a0214c48217a1135": "f231dedf974661bc65813ad9b04169cf",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/3a/9feb229ee6a68caa2a93f6dd585b636493d4bd": "fea6905789f09cf92363d420e419167c",
".git/objects/37/97f97f1dc1eb9ed2a06cc7975c8d7d9f24cc88": "cdbab2bc3624166c15c98ca399f72dc6",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "2ccbdad9fd8db9a8b646cc79869eb0bd",
".git/objects/6d/b0d1d91bd8e3b9fcaa948ebbf5cf9ee794063c": "17558e302cfec3e7493ef3becfaf78e2",
".git/objects/01/567ca1181a9b1460a982f5c6893d6b9370df81": "fe68f138e2302ed49fbcb8374df3333c",
".git/objects/55/17203b2a386568bd6cacf3eb819b814ec7657e": "341a3fa4d1d91cd1fd0bb3f9c6a6ba86",
".git/objects/0a/550f863a27efb964ab738c5767ca62d1e33d66": "b8e3dd0b7ef0cc70306b3c931d1913ec",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "87a6c8357a675b551369a310922fc63f",
".git/objects/64/3099eceddd331433f22e74a21017b1853ce81e": "a0fe502052aee12488269bb8547569a4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b1/239406c6650665b9fc7d7fa8aeea0328d3ae26": "cd3a9ce8f334d16554c92d7423b4b232",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "32bd74a0b35702588e7b68155321149b",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/dc/f0c45a11c618c5c70d248cd6e6e493e369b6fe": "93ced3ca6e8a6f023dd26f0d557b9ad6",
".git/objects/a9/081339b65204b7f70434cb5032caba54e6ab78": "81a8f83836fc081c8afb67da4f43382a",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "a826ac8bab9ab62d170be6b714e1a207",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/a6/a5b725a325d415a804e578a6981d01760f067c": "5ce639bdd23720d511f2e2644e18d3c3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/ef/8d8c51e48a1d53c66e1fc43311ec1fefe1170d": "e7033d8c8307ea54b89ed787dbf2202c",
".git/objects/c3/41344aed6dc33917fe9d7c871f07eb794abd6c": "77e30b59fdd55b5a66c1a0ab8745abd1",
".git/objects/ea/4ec3dd0409e35f9eb0b6cd568931b191bf303a": "a158a06962c6b3c8726d253b786f1402",
".git/objects/c5/506da543e1be1f6311fa9984afc9a04e6dcbf8": "b4d95b41a664853111e31cd2ff8eb523",
".git/objects/c2/c2b8c7c843917f9eb80917bfc54afd651535cd": "6de8ecedd94b09a7dd933a08df30ffd7",
".git/objects/e9/8a1f6118c0515a7fb4ee132fd374bce80eb217": "b4b9b495556c8bb908d765c9caf3a32d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/cb/0df4fffd7359a77380eae6e3d25e06a699116c": "d5a61fe0f4dada0492c6ffaf03e7286c",
".git/objects/f8/4e65eccd60249d05a7a86d44d917165428ea38": "559b7d96f1bc459944a6cfb22909eb48",
".git/objects/ce/7dc0e7ca5f5834394393bcc8dd4083692ca9f5": "079c06c6e4a7a4cd299e157aeee97f51",
".git/objects/2d/df7c6b45dee00a1ca0c6a441d7ee4adbb7fc7a": "db98820d728a9ab18b02e93bfae2cdc5",
".git/objects/84/8ec3c2cbbe57e6c01e9bb588b29b806f8e1987": "192796eaefef4380f071462195b22373",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/15/87607f05b4b6f0ff8348a049910580ea41dfee": "a7dc8bfcbbdec8154ad15d5a3107386d",
".git/objects/15/2f24d536c533b5a2e42f29e72234067a47dfe6": "fc1a706c6b9f8e6df01a4f38be190ad4",
".git/objects/71/2febf7d013bc411a0a9ca2cd2e8702685cd5bb": "5252ee07a7a505272f20222e637dfbf1",
".git/objects/40/29ff96d0b081c9c7191f79c85265a171ef08bc": "e0cf39143e63c04d239aead77d3587cf",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/78/2f4220513e667b34c20414c447fd7bd8554db4": "7f44c0e26c88ac74fa568f64dddeafca",
".git/objects/13/75ebf2053dc4f0959bb44bf31d886e78e81102": "6de3bb6e2b0ab8075e524d86c86c0154",
".git/objects/22/28ef6812ee54588c8b2abec8874dcc55bc0ced": "5fbff17647bfaa48e310c0afc36c3c0d",
".git/objects/25/84a253764193b940e27db8f967dce8e0db609f": "4d7d367de3658275ef7253f0021ce735",
".git/objects/25/e6f03f3a2c5ce99520401c1957204ba3f17eb5": "5f16c3c714047c8d2fceb2e82434a213",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f392a5728a56af0ca1dc64a322f0158",
".git/logs/refs/heads/main": "78cb89c4e2bbcad837e51dff24d87b03",
".git/logs/refs/remotes/origin/main": "79dd11e715a947b89cc1974daa1ed603",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6180b117c4d90df287154e55f8cec6f2",
".git/refs/remotes/origin/main": "6180b117c4d90df287154e55f8cec6f2",
".git/index": "0491f24bcf035fea41c375629b87e913",
".git/COMMIT_EDITMSG": "ff26da8739e48951482be8e833dadf82",
".git/FETCH_HEAD": "e353b213ce1dc022c7e82484008185fb",
"assets/AssetManifest.json": "b614efa9a9a1893442f000cc199a7e78",
"assets/NOTICES": "567aa43c8bef2a025ff5d4a9882fdccb",
"assets/FontManifest.json": "2af02866afa2ce19b8a9269baaa9b864",
"assets/AssetManifest.bin.json": "ad19e313e5b530e032e9f159efe878d0",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e9bbe47b86548e4621c1cdea7a78d3af",
"assets/fonts/MaterialIcons-Regular.otf": "d2a93c241e7e4562293847cac38a0bed",
"assets/assets/env.txt": "d06b4f2a0d1a6ef8e5da56a0ce6334b4",
"assets/assets/images/logoOscuro2.jpeg": "1070459aeffde5c16aad87918241770f",
"assets/assets/images/Anth.png": "d192b5f7374cba4270aca5349112f4ba",
"assets/assets/images/logoOscuro3.jpeg": "a771cb7307db00586902f40ba9732fcc",
"assets/assets/images/logoBlanco1.jpeg": "e4a1142c744378d575e6aadd1b23eefa",
"assets/assets/images/logoBlanco3.jpeg": "5fb8803ff12a5e6375be57251698d132",
"assets/assets/images/logoBlanco2.jpeg": "e1c3511848f8158a14f5fc6e1d1f22c6",
"assets/assets/images/logoSemi1.jpeg": "ac3cffcae3954623d5bae259a234be7f",
"assets/assets/images/logoOscuro1.jpeg": "505549234635c9dde629b09d2b8dccac",
"SECURITY.md": "b1060e70aaff0e2baed6fc1d91ebe9b3",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
