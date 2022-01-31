'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "4e80aa0e1a9a5d3e22b7690b0f2097ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f81fe322c7466903d59ba97965b28b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "07f90550333c607a48bb9aec6ce800f5",
".git/logs/refs/heads/main": "07f90550333c607a48bb9aec6ce800f5",
".git/logs/refs/remotes/origin/main": "ce9ffe4c2ecb64d48024d25ec4987cf9",
".git/objects/00/e92ced0a13b7bbc4889eb041e279964b6c4e42": "06de4f30ecb13ec2417b1e4f92c47830",
".git/objects/02/5b83d29482c255a0d7d435ba24a316a00070c4": "4cf6f199527408c6b687d9b264291005",
".git/objects/0a/bf1ab6fb04cf41c0252052fee29bd8837377e8": "ec6d4e01db989aec7fb8d9cd900ca004",
".git/objects/15/bda3a94e5f78df98b6fedad85ddc22c1ab66a9": "6162f24666855d2dff0b101b1e5ecc03",
".git/objects/1b/95dfb79ba56577617e6721f1753376f4a146b4": "7caa7a126568878ebbcd9350cb3d4ffb",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/ec34a63d5fddfd7e10492449dd24c1cb3b2c28": "3d762c46c499172c3885dc2f87f1611d",
".git/objects/1f/44a679f3186b1d028f6a982e7fec03dc8ac689": "153ccd0d25d801735aa9b54ac84d539e",
".git/objects/24/67d025429149aeec6aea1db0a31d8073f93d91": "27336318925518be0b57504ef35e4143",
".git/objects/24/77bd70848891d69b4ffdc7383debc67a969087": "250f4dc46b672eaece0f3d81e2cdc798",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/2e/eca31c777f19cc2077b9db17488efa3a99e7b5": "c646d155420f22b49c3e386c1426b587",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/609dda210d0013836bed2ad716314dd25efd67": "b11ae95cca89ca0a7b353d3c3c7d7a33",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3e/3a6db7e987e13d3b4678497941eaa3248d055f": "afc977e9a70c20d8e7054df0417c3619",
".git/objects/42/b1b13ae9a7464d77be7c585d430a08db301b0b": "e5f4a0c1c4696670c4e1a0dc914eb044",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/55/cfd1230ca586640780a9f8cfffb016970e4db2": "969212e6282a331d3c612e8662c48f23",
".git/objects/59/3526c00b2772374a1667b84da2b451aed60309": "dbc210caf214d13f70d4ce90e0392adf",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/35d1c0d3cc38bfce2a6683358e0b31842ff179": "50efa90ce56156d863cfb56b200f9e8c",
".git/objects/5f/f90bde5346c0d6c5ee582674f174f67b223a9d": "8f3f2061c4cca68a09d972660d68ca51",
".git/objects/67/e9fdb12ed63cd1ae8cba30c2f19963a55d76e8": "3539cf970da1f373e1528bd37441ee5e",
".git/objects/6e/df6a8b851482023133ad4a56b5825e9fd3b485": "38ca528c66550f1e4edfe1723441199f",
".git/objects/74/d7a8128b7cb670cd56e2c08daa0835190b90be": "48a5725baa82a32214ae3151e2ce89f7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/164b91bdcd5f4882d10a422b4953ce475fa7f8": "b85ee6e7d177951315d0b88bea1326d4",
".git/objects/7b/a75075dca5b1ee039a085e2702604c984f8bed": "0962a703e11000b07b358c2c7f36ca71",
".git/objects/7f/617a536d98b42f8e8f27a073f158dde9d94edb": "7432b6c59a8e36ac2f3b48bf6949d102",
".git/objects/86/82936158a4b742e6cc5d2d073dd15c6980debd": "3c1305f6afddb7bfdf813bf546e39978",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/96/8b6278b57bff24a35327c119690632bd591440": "8918c19de5249f36f8681e61bc2c109a",
".git/objects/97/0b7f9fd70885b0c49aba802997c95866ae3c9d": "901a7f1c9db7d6d6c7c31088b517cd62",
".git/objects/9a/cecb3fa47c2aa63757e4b99de6a75643764d27": "a6c04224d26113f4e0d26ec632214db4",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/af/51771db50458bd2ce7cfcf2e9f5f33d45f2b7a": "5dd1ca496276fa274d7258bd8e887722",
".git/objects/b3/8c3fbe3f0623b2ed9c390fdf7924e11ae637df": "7bb74df778413855af87d711220084b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/4221544b5a25ba6bab3228cbd99e550144e401": "2b9fb2ea5838f54f89352c5b9a019fd4",
".git/objects/d4/5ef73e0029bf7fa0289e54a64f5b668792b02f": "1b04358c477393f1c0d1a162b8d3e56b",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/d9c3ca12e25923cb89c33f0025aa6771e3c149": "3b293a2160b0d972b0479bcdbe786a75",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/6cdd97567911403aff4afce843e68707da0b45": "f61ced47ce7748a6c1009d80b79382f8",
".git/objects/eb/629f1a21a64d734d615612e953adb1e3de6bfe": "7af6cc92b024fb6c3b1b6957ab0e4a89",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/4ab55770cc587011659e8e8ac4dbbe7730f5af": "6895b2af6c9f03c69592394fb872b414",
".git/objects/f6/5e07b74a05b92fd6a1c31678f146791395fc7b": "6b6714ff67d3b1eb22a9f3a16468b8c5",
".git/objects/fd/c4b8f6527c6abb15b5ca6bae753ff1e9eb3c8f": "1a819d96d305845adaa670da7d53baca",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "5766b1f967a3148e54e16579c5be5904",
".git/refs/remotes/origin/main": "5766b1f967a3148e54e16579c5be5904",
"assets/AssetManifest.json": "23f3d61f55a2e85e7f20143db3d34acb",
"assets/assets/backend/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/backend/mongodb.png": "28ec40a4d2332648f920ff506571a7d7",
"assets/assets/backend/nodejs.png": "ed98d19237a8cf71cc61700fb555ab4a",
"assets/assets/backend/postrgres.png": "7f3c9e71663cb96f973449eff0ea1491",
"assets/assets/CV.pdf": "0e8ce7cd01874bd49961df735bf14675",
"assets/assets/download.gif": "d2e9d10950e6eda7dd5f4a7fd70d433d",
"assets/assets/frontend/css.png": "5c4e16ceb77211d7b286e351e272328d",
"assets/assets/frontend/flutter.png": "e31f1c20d27c4415bce49ca10cc44ba1",
"assets/assets/frontend/html.png": "8d87b2b36282f6830ab5e8a84b6cc227",
"assets/assets/frontend/material.png": "14926021ffecef8b53d8029bfb18d757",
"assets/assets/languages/cpp.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/languages/dart.png": "65c2aa86d62a098b21702842034e016d",
"assets/assets/languages/javascript.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/languages/python.png": "8eacb570fdccc669f09690b4c2918b00",
"assets/assets/me.png": "fcd2cea939ef69f8ee96518dc21a3c24",
"assets/assets/social/github.svg": "93fe6ba87ef59a9b7fc800398b3019ae",
"assets/assets/social/gmail.svg": "5b1cc7de4be46b120c6d302ee1d6a94c",
"assets/assets/social/instagram.svg": "380924c2a67bd5cee0da39290de2ff4b",
"assets/assets/social/linkedin.svg": "b0d148fe2073f3d2760b8ed0ca4bb0d3",
"assets/assets/social/twitter.svg": "72186e5ea671010408bd5b5b9a8b15e2",
"assets/assets/tools/figma.png": "338e06da5dc18e11f4b2199aef456cf3",
"assets/assets/tools/git.png": "9a073b4cb55995549f7dc759eb46f831",
"assets/assets/tools/vscode.png": "2e432644764658516118ceb358dce041",
"assets/assets/tools/windows.png": "61f3fd0d5c9d009522d85f3c5e1aece0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "49545eb3fdbd987b83c0d281b9d3b138",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.ico": "da83cca2454e3b8d7734ed0135b6b68b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9ce815cd14fa7d239b83354652d3cd0",
"/": "e9ce815cd14fa7d239b83354652d3cd0",
"main.dart.js": "02d4dbef812e1a749096547e0d3221df",
"manifest.json": "bc0bb31330f63d5c908c5e700737bd5a",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
