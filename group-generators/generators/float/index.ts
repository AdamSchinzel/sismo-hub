
import { dataOperators } from "@group-generators/helpers/data-operators";
import { Tags, ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

// Generated from factory.sismo.io

const generator: GroupGenerator = {
  
  generationFrequency: GenerationFrequency.Weekly,
  
  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
    
    const jsonListData0 = {
      "0x8d2048cfda4d91591ab8db59a4a97dc169873545": "1",
      "0x8f446fc889ef67b3d9cfa8065ea568542732ae2d": "1",
      "0xcb1cd49e8cd2b18899863593ae98165f78eb498b": "1",
      "0x54513b1c1d5d7c25ee300546029e6a85991d10a4": "1",
      "0xd4691655a3d247ee8386e9096f8438ced5968e50": "1",
      "0x1731d4d1dd9d9e688846f36b69d7650498eb03fb": "1",
      "0xf28ea36e3e68aff0e8c9bff8037ba2150312ac48": "1",
      "0xbad58e133138549936d2576ebc33251be841d3e9": "1",
      "0xf33e40c5c8cb175d248cda45922e2843245aaa52": "1",
      "0xeda57576a83f680670a4cd2842d615e6a9737918": "1",
      "0xeabe0440accf45973c56bf1e13b221fb9062434f": "1",
      "0xe24db2ac421e1645d8d1b4de295bb23b9a93da6a": "1",
      "0x4e3d9399c28c724293dd545225ec843ac4c9e953": "1",
      "0x48a7bea12a800957113662d27468fd1c9e8d42aa": "1",
      "0xf9868b3960348194371b8ca4fe87ca7de95e40b6": "1",
      "0xa407708eb293bc5a2af1e4b3330b5c9fa03a2144": "1",
      "0x8c11e3af9c1d8718c40c51d4ff0958afcf77fd71": "1",
      "0x8aac02479f8719ca9f2d9e59ac6ae576bae85c47": "1",
      "0x7b337d666ea97fedd4007745fe29404067cc9f4f": "1",
      "0xde8dcd65042db880006421dd3eca5d94117642d1": "1",
      "0x8b104344f397afc33ee55c743a0fbd7d956201cd": "1",
      "0x3967d78660bcbc95c625d58a40c42ce10bd905d6": "1",
      "0x79d5dea173f3301c1fa728d82560e206ac4894a4": "1",
      "0x166d5385157eda0b3f0a2ffa39a46859017993bc": "1",
      "0x5f952858e129dc7275de938c8bcead2dc76c7876": "1",
      "0x1b8e4cedc27b8ac61777e5816b1ee063a62b6976": "1",
      "0xdaadb4d49fb8158ddbabe0762fc29da8050fa278": "1",
      "0xefbf2b324be9a86fe345b99325139db9b0159503": "1",
      "0xccdbafdf9a80712f6349e9c8d48c597db2f1b2c1": "1",
      "0xc17f20335080cd0b7283e042c89f16605f3a085f": "1",
      "0x5b25fdc3f2dd0d69cc6e93fb3361f9725dcec14b": "1",
      "0x2452fa97117efaf917df9807f0fec48315d1f5a6": "1",
      "0x4ba065b10d9f3e4960a53efa882a940fd3999a73": "1",
      "0x27ee28301f455ad1532f78d3c075dd826f872176": "1",
      "0x3be70936fcf9d3ecaad5fb41d24613d33efe3d2a": "1",
      "0xe17b279d3891b48c36ef616a5f70a586e80b5b98": "1",
      "0x0000ce08fa224696a819877070bf378e8b131acf": "1",
      "0x79b1a32ec97537486e75d99850bd56ecfa09d643": "1",
      "0xc9805cc9eba5ccd2b7d7d7d379de89af815fb1d6": "1",
      "0x0685695541b53e2e66b7fb633d4841c31e877849": "1",
      "0xa3927ab2c80dd34610a30726f5031da55ef655dc": "1",
      "0x8f62af80062effb50566c3530d3523b6089300af": "1",
      "0x74b4b8c7cb9a594a6440965f982def10bb9570b9": "1",
      "0x3787f0457c45f7f3a3c245603ebfdbd82840fdc7": "1",
      "0x439704f19ca10fd486526697285a26963ea7bca3": "1",
      "0xf819ae20e48a140ed9bf01493a0b1174e853b937": "1",
      "0x2eb4d3d21ba9666dcf573f55a02b9574840c30f5": "1",
      "0x71345ef9cf85fff8e946e753b2be672864b4f673": "1",
      "0xb971dd7154eeb3f7d240cc1b5208ee5432ecf352": "1",
      "0x4c05cc2103bd6d336b739e54c13bf87086365e8b": "1",
      "0x7ee86e802c3dfa9499b1fe24836d7ead6e39b2bf": "1",
      "0x35001a8bdb3a224d05f086094c12fd4c9009986d": "1",
      "0x8c0e1c1b7ca56cbf74b88de1c07e0a7216ee90b6": "1",
      "0xabc508dda7517f195e416d77c822a4861961947a": "1",
      "0x506ac1d1bd4e32f4ed85d1df33d267e06533dc67": "1",
      "0x94e7e7a0107f3ad75126fa20a43cc46cc8ccd711": "1",
      "0x88d2c34c3c59069f823d9f5011662b6111862282": "1",
      "0x770569f85346b971114e11e4bb5f7ac776673469": "1",
      "0xcc669fd8e7dde2da368a40d8768ca56d0a3d57cf": "1",
      "0x4c73535655072ee70bb321d22cea67e36d947a29": "1",
      "0x01a7e44c9c8495f1fdac72298a3c0ebac9f58a55": "1",
      "0x5241aa99a776866296d1d695c02bb2e31b3ff998": "1",
      "0x7663697900dd93a6d4722bc150d8e3a03c7b4866": "1",
      "0xf7b5ce5b15c7cc3aacd15bd1937ef064a5b6d455": "1",
      "0x482abc7795ccfb657dd09c9f0b67312f4eccfd07": "1",
      "0x9c0a12dd013280e4d2503379afd5cd8bb162da21": "1",
      "0x3b5362ceb3c417148bbec31c7927c65ff7987326": "1",
      "0x6f2752bcf04ad3bd569f8523c146701088db8b2a": "1",
      "0xfdbbfb0fe2986672af97eca0e797d76a0bbf35c9": "1",
      "0x682c72e317cf93a36ace26d52f9eb9c41712e56c": "1",
      "0x7fdeebc609b8c673e782d65768e959ca6e105c60": "1",
      "0xed5a1aa5687de0f9da5bf4c662665eb7387189eb": "1",
      "0xacf2d88b01da54603f20e44ce5d96c445b3ce259": "1",
      "0x3b90c65df73b6c52bba30fc0c6e6bcfa03a05420": "1",
      "0x4dbfce0d1e297524631b6a26852572380cd56aad": "1",
      "0x5a81868992ffcf4200a85972c60151690af39006": "1",
      "0xa96f23ad631e58ca23655824373350a0029a7242": "1",
      "0x48372817715b969d284b7b64726837dad0bb591c": "1",
      "0xbcc44956d70536bed17c146a4d9e66261bb701dd": "1",
      "0x4c8067db4933e00e9b7638d3d66d2b58181887c1": "1",
      "0x9af46bec9987a7f71a60e53f846747e7ab522d8d": "1",
      "0x0f3f1d6f8e735082fe09d6b5a343de0ac030f5d3": "1",
      "0xba8421340396eb6d6be19e8b4715ae68e34ec161": "1",
      "0x93db1e5382d2e7ee2c4c5d3825713c8fa76d25a9": "1",
      "0xd512d3938c3102ca392dc5cd20d8877e28c64c6d": "1",
      "0x9194e7621d724c0a6912f90fc0f7f88df63f732e": "1",
      "0x77c2da8140693996be6bc72776cb1f04a77a4e68": "1",
      "0x457737a7cfc35a3111ebb549c18fb420fdd09eca": "1",
      "0x92cc5b8de992bb704afe270ff7d28930012248fe": "1",
      "0x33f580a02f44c9ff6a02913e2cd5468ffaee3147": "1",
      "0x692554b8b71334a9ced895e92060f6442a340b74": "1",
      "0x8720e0c1649780a332d81dc87039a7383805cd50": "1",
      "0xbe0c3d178ddd767dff41c1659cc0ecf6be8e5e93": "1",
      "0x76e0438d8da85c5e3d06bd98b22fba4222e80e79": "1",
      "0xbcca7a280f90b986820331bfbc164bb1f4d6e922": "1",
      "0x5a06806b172d1c4cc0bbd0ddbdd5a54469e8628b": "1",
      "0xd9f4985a73349dea9acb7c424e35056714ba2b35": "1",
      "0x234e63ecab550d8e600f0909544fc75f430cf1dd": "1",
      "0xa3a649628f47dc9161f079ec820c054a1e76ce56": "1",
      "0xcd79272e57a870c0b1f69a8c840244364c4a0260": "1",
      "0xec1f7a2ae8c4391ceb36c5a2dc0f8244b9c1d05f": "1",
      "0x58f2eb3e89ff08eb14451a8f5d6f268f88888888": "1",
      "0x23376527e49b3db2a1d382583c2f65400cb1f33d": "1",
      "0x10c598cf1da2a558561820d9224a7c8535eb24ce": "1",
      "0x731c34dcbc8e016944c6a5d899b4c7a32ec4414f": "1",
      "0x6d7ebcab8b24fb92c2b1eba957a661fafdc98153": "1",
      "0xfe58170be113e906d0ac983d05a638e9fd785c41": "1",
      "0x08b0ecffe930bb4fe3ecb77a693318adb3399854": "1",
      "0x1c28073c81aaf9d701787c81d755b86ece4964ff": "1",
      "0x5cdf29641ea8f779891fe6a1a33d5fbe76645bfb": "1",
      "0xfbeae97e279c1a836593d64e4990195a5e0616b5": "1",
      "0x513de3f1f1a847fd6eb50dec48ea9ed29e82a33a": "1",
      "0xb282057670ceb3ce45bf03e8826a5cd119bf9ecd": "1",
      "0x870b5c44fa881fb1a74164ffbd38234c71cfde58": "1",
      "0xd4b1a5c065c53d89fa2018f17ad6396de87a390d": "1",
      "0x9d28a4b8c6df500ea43bdd5b97b48efbb69c01a7": "1",
      "0xf2e4c723fe7ff7eed50bfda9fe5b8d0bb7d7babf": "1",
      "0x2879e1acf3468556ea3b213ac54307e42b75486c": "1",
      "0x97b5b1a5745f5d876ac2d8fcdc711f00ebaa4b29": "1",
      "0xf4760b0546255795bf1965721ae46281c649e5c1": "1",
      "0x711ac2980c8e5ef35dcd009d11c287375b168a36": "1",
      "0x194d1a94cf0227af32f561756fc7ca596c0ddeca": "1",
      "0x40ef6c2b50e1353bba5e9065e9ffc7b178f1d8b3": "1",
      "0x7706a4e0c12cf0a63db32df312a61b5b1ad0f7ee": "1",
      "0xf559470027fc23be67f693e6786d4b1e54fa09f3": "1",
      "0xd8b1d41a77f12bb972ead1b4c3503693f1cd0560": "1",
      "0xc1af4eb8f3133b5a84671beeb1d8708b1863b4e6": "1",
      "0x68b0378f8632fc04ec3f02684184e4dc3f46250a": "1",
      "0x7f072a050d67ac259f850ae90237199f6855b1f3": "1",
      "0xc72666b29c45ee931704f6fcedda8d98cb91dbd4": "1",
      "0x10c0d6840659f085581ab91ed1eb5cc174c89e9a": "1",
      "0xd2ad0a94559599ad9018d9046d2b5f7d11cc2865": "1",
      "0xfafbeb6a1859d06f0106423f24e7a79fb596d5b3": "1",
      "0x926950f73096a6da3793ec148571d287f7deefa0": "1",
      "0x5b02da8420dd9f77a33c6e2b22dc87fe22c17a30": "1",
      "0x541ffd67537185cb4abc2b028795c2bf4ac6c45f": "1",
      "0xe2a7f64ca676d3502ac575b8d16bc02458ba22e9": "1",
      "0xb257e3464bb65321ef76c23b5f8212eb88877e53": "1",
      "0xd74aec3555965b70204a2f07f5626509fd2134d7": "1",
      "0x7a6c921d164ecf49143885ffe1c5c48590cec131": "1",
      "0xed7d50222a258581c4916d8635714069fde1b21b": "1",
      "0x5da7797116cc95984a6daa47ac9f5a117cc1994a": "1",
      "0xb9051e3a6b3f0a894cf5b4d66cbc11d81b1ab0ab": "1",
      "0xe3eb72d56f25c6b57e9dc4be9e8d64151facb7c7": "1",
      "0x4d48267e36fffd8638c1ce5ba98ccf8091d98ca2": "1",
      "0x83e874e6314cddb543fe5fe500ebb05d5b7cf183": "1",
      "0x662c3dad44af853c6ef7bca34dcabbe5506c07ab": "1",
      "0x95d8bba9e5af3de140917393f4ba911718f88c38": "1",
      "0x7f7bac92aa3e28351f9e89535ca334e8a44542d0": "1",
      "0xbd33eb374c2aeb0f2b3763157e94381b6b563c0a": "1",
      "0xfc465c2e80af6de5a3f31ff337ad5cf9eabe0690": "1",
      "0x5804da1ea4d78ff668c66e3da6b4a69f2f856e1f": "1",
      "0xcaef15567fb878d558c14b49ba7d8ad44aa90a2d": "1",
      "0x95cb32be2265a0522c283d004632eb613537f49c": "1",
      "0x194b5483c6d43c4ef599ec4c5a58723c866a5912": "1",
      "0xa7057246ec3abc7dbb6e90c66ded4f0fa998a7fd": "1",
      "0x71af436ef0e586645fba6626a8db1dd2c0296428": "1",
      "0xde7b0b50cda77586348530c58c3d8f655bb2a0c7": "1",
      "0x7a9cdb033cca7d24f48ed79242986ef2ea0cf4db": "1",
      "0x352ad959092fdf913c8dedb5ad516ddddf593812": "1",
      "0xbd2a95d30761333cb573be00e4c76a0995c7d07a": "1",
      "0xdec6eac09bdecaa2b630a0656548f3e216d05e62": "1",
      "0x58d13eb4e96e6bb53cf7fe587676c4af95a51e59": "1",
      "0x38aee5584c02fd0dab4f92d6f015ec3b3849a884": "1",
      "0x943b746eda0efd73bce138fedbd547c3366a0dbe": "1",
      "0x554f229b7bdfd240d47ea5a94e41d2281b06a7e1": "1",
      "0x1fd7575684f6b3c4f415681cfa845a276e730baf": "1",
      "0x324f6886375159e9d528b5ec5baee673a75383b7": "1",
      "0xcd247e021f6ef24e75779fb8c4313120d86357e2": "1",
      "0x51ad4751da4f13974a9e18c27f845f6f3276f11d": "1",
      "0x695ed4801272fa829c5c5d9d2f52176c67d58010": "1",
      "0x57557134bc35f05e46ce333f29c70659d1fad44b": "1",
      "0x3109cdbbad1c73479bcc51cdf93e5f0d110392a0": "1",
      "0x1c030492dd6702313fd138a38f2a9d7ae1621438": "1",
      "0x551a724010ad436d200a0a7697117689627ad5e8": "1",
      "0x09d55f3b69476a7af1aa0c72598ea8850f20181f": "1",
      "0x007d09e274d04b0a84e22931939f984e7f34a1e7": "1",
      "0xd2dc3adde00faf9f89b40a71071837410e321727": "1",
      "0x03e276c6f75dfe07f081dd697510125164375ccb": "1",
      "0x95dea4b3e8a197252743f9e4e9ad3ff6ddf0feed": "1",
      "0x081fa64b6667f0abbce89bbb08d64ddc6096e759": "1",
      "0x41e983218e09e231ce2cb334c14f980353704718": "1",
      "0x75be7f29f8241f1bac65a6c5aa5ac4ba9365ba11": "1",
      "0x54cfc009d17c9d6161604a9535ddb0e2ec8ae218": "1",
      "0x4fc06231d9bb175dacf6b482ea236d5de1101317": "1",
      "0x012a39961f190d50783bdd3fc8c167d99d7363ee": "1",
      "0xb40a54ec83b4c5d0b9c69ed4eaa7be9b6f50cb96": "1",
      "0xa330f0ab6614bec1091e85f2e02288665fb13ae6": "1",
      "0x4be98192c3e2f1285c5b1a0e55c8937a67340781": "1",
      "0x8739b2aa0869536496c753a713a78fe5e38c580e": "1",
      "0x33a7a9d626d8fa71db2b107fe219245425a347fc": "1",
      "0xeaaa0b16b36ba68bab73e270b4e307e76e733bbd": "1",
      "0x9d7e5fe56b0a1293b188029f6edae3c409f8a001": "1",
      "0x7fc1f0b36170958160d26faf2deedd120a9841ae": "1",
      "0x7d59901dfca8e863a227561b2415045323d4b3c7": "1",
      "0x94d1c5eda3d768f88cce224eea50443aee4958d4": "1",
      "0xd0b7a25f0941bc15eb00f68f67bf5b48caaeabdc": "1",
      "0xab2922edf2c1b61848da3c5b089752b9b20e04b3": "1",
      "0x5f954fe936a93f595b8546479c81dc4d87a2cdb0": "1",
      "0xca4ad39f872e89ef23eabd5716363fc22513e147": "1",
      "0x513cf0283f3980bea1cbe97b46ded52cf82cb3f8": "1",
      "0x3e3dadfccc5732f58b104259da4456a9f645ff0f": "1",
      "0x7fc639b172ae7ee3aae7d5ff6c20363377d51fb9": "1",
      "0x65b83ef1f62053f625812425e401e93bc37f79d1": "1",
      "0x71f7085f9f5e7f580cb20dfd3912e70bbe980f0a": "1",
      "0x0494f503912c101bfd76b88e4f5d8a33de284d1a": "1",
      "0x3636b6d1ad424f405f0fead00ca632d80f0c8980": "1",
      "0x4e620efc058acd770b2195c611238d6fcf3b871d": "1",
      "0x837cb9b8ce24d325173a0a5323402abb94c98236": "1",
      "0x70684edecfe2954d75952a64f535e353eafd8710": "1",
      "0xe31d3aff63a2249ce1a290c30bb8c88256b807f2": "1",
      "0x008f700147d0891383c1a984e434c4e503e4a5d7": "1",
      "0x1085fafdc3d9887c37c7235f37a944a01aae23d2": "1",
      "0xee5e215174a2839f801bc0acd3e06806d0ac8855": "1",
      "0xa2154c35896ba8adfbb97a0d65155ccd52b23a16": "1",
      "0xf72105abf1325115d9464d05e05941b9b5abbfec": "1",
      "0x93f9d4d1b82a7974fc39ae1d70bf6562869a11c0": "1",
      "0xa87d9649601d38d2a0efaa290f908b33a0b5bc57": "1",
      "0x7515e6cce8ec7c0bf9753f3d75dd24e83fc99f7a": "1",
      "0x080cc932a246898ce34d8183db8aa7c66548579a": "1",
      "0x2dd7d859d54dce6346b609e5ec097ad16fdb3808": "1",
      "0xb1415a4724bdd544128cdfe66eec7c2592c0958c": "1",
      "0xa45efd2dc5deafb7871657fc5667de38d26c270b": "1",
      "0xd9dbf1f93bad5e588603d679f32b29da327b2598": "1",
      "0x2c68a7c5598614902fa7447b6829fa0282dcc059": "1",
      "0xd160ee87ade9356186664caf1142350d868ff8dc": "1",
      "0x20478ca494e53e62898677b16da88d810e469d24": "1",
      "0xb941160e7ec72ddb0a2b716f3e34b8a55295e8ea": "1",
      "0x875a7be991c336549e15630a6a3681ccef44f203": "1",
      "0x3dce2ad02fcbe2bd091ac36e783cf16668ebcb15": "1",
      "0x2c952743b3bf25fb634932a9f2dce6a07e4686af": "1",
      "0xa25243821277b10dff17a3276a51a772fd68c9de": "1",
      "0xb9acd5e633aa847b8ee43c45b74c3e63ad0af8cb": "1",
      "0x6f12d67ee70df7f1a54c607178c26ecc5f36f4f2": "1",
      "0xdcad5ad85f2164b9cfad11e4edb2010dd13eb1b3": "1",
      "0xc8d3c597a002b2472f7e36666ea4032dcdf01a3b": "1",
      "0x42374c13acf2beb2c84a2eebed199c1d3de8ea25": "1",
      "0x573c3753cc47385339fa0dfa5c3e000cd1a9b420": "1",
      "0x8c45359bf11629e066bbe67dd6d3b4c10a0e8339": "1",
      "0xe3d1182ccebc15584983a1bb6a0bcf2026fcaf1f": "1",
      "0xcf6117b21d550318f7167fd0891466eb61b9ac6e": "1",
      "0xfb60da0274d072984aac3a44adcf873cb0e0f610": "1",
      "0xc7d472749cee638ed2d9bb4329b0c59ef64506d9": "1",
      "0xac8dfc6f3c7c1e9d71bdf163d2de141b9cefb2ab": "1",
      "0xcb8d14c6eb98cdf016a38565d74e63a55205a3ae": "1",
      "0x5c528f83a55d14ac8d6c7b107a20484a5501d23f": "1",
      "0x8fd018b1fc6e7d55b4965901c99bf5338d9abb9b": "1",
      "0x36cb148e82a8ce763bc4b890704a79df362ff3be": "1",
      "0x91b71fe4dbd7593c1a8434cc8299d59c7d6a2fca": "1",
      "0x81e5da3377cfdf0eedf0da326d71fc0b378f98be": "1",
      "0x39d1b253ba95c5ec16299e981f1828e84509de59": "1",
      "0xa1e91ea16a40ed827c1e4924aaf2a0f90a6243bb": "1",
      "0x1bf786a3032f8d82a9ad9303b456724f06d5e2d4": "1",
      "0x53ea9043acb6b4d17c29076fb23dc537fcc6ce93": "1",
      "0x061ee2085ea0e60da0823caebdeece756ff5c1d1": "1",
      "0xcba561f96737463d38678bfcb5692df5bb8ebf9f": "1",
      "0xc86baec3c6c4e618511d1c0e3fa4893ac7f2d531": "1",
      "0xaf55f45b616688d2c119bb0f0d4125e713137390": "1",
      "0xe6b8348376c1b5f017d00a5999f0eb1a63d5abbf": "1",
      "0x610e08129fdfe7216b7c4dabf75e3ea2fb83f850": "1",
      "0xeabc157d1e3053ad28910d3e0640b0d4389e4d52": "1",
      "0x81f048cd2e193ccb27273fcfc81d392d42306a96": "1",
      "0xc5f98382d8006940362e139828d8ad55c4106eb3": "1",
      "0xec6d18e9b0dd933b01c14566b7ace5b028c10246": "1",
      "0x5e9bbbba2f230cc9a2dd13beda68663c665fea6d": "1",
      "0x6c58b84d627e16fdc18dc1525045f40b8171a85b": "1",
      "0x404fd37f3df9f06f35edd321b25089039272ea45": "1",
      "0xa1ed36fe9e4a32737472ea0dd632825e73cb2943": "1",
      "0x05f7f81ef8b158be44b96a3a3bd5351bdf28946c": "1",
      "0xd156658491da433e7490b224c79f8252e4318a55": "1",
      "0x98b0d3f6feb66bc315b43854657b8c74b383c1d3": "1",
      "0xe89966a24bb3961250d2f5a451b527f26c277b18": "1",
      "0x8d0a4c72586d9eb6281b91e84fd448f487ba0246": "1",
      "0x0955551eb9acc0b17e7b746ec0ebb3697b4a2c6a": "1",
      "0xe5aab0f519704d2ccc1a4e667311b188080b71c7": "1",
      "0x38c85b918f9faed34f1dd1d73414e8f950852202": "1",
      "0x82b433572e5013d4672a9b158934e35232e9459c": "1",
      "0xe50853390dd22e6d393fd24c2643d201ed559f4c": "1",
      "0x1b22a61080b0d355c0a8e274cd0adc1aa47987d4": "1",
      "0x21dba9d563a79e172b8c46a59d1d21715bce19d4": "1",
      "0x4b24b3de3bc3a598c3470dc496443e50c990e2ab": "1",
      "0x6f035094d509f17a53bf9a99a03bd05317fa7db9": "1",
      "0xda38c543596b7e1b79ad0ac2c7797adb914ea3c5": "1",
      "0x7f337af0d8304065f7d2cb6433d599343e1b7a25": "1",
      "0x66b0d121af923afd5cf66259bac0b006073495d0": "1",
      "0x9a15a0a87f7ff9775144de8ad56c3eef5644624b": "1",
      "0xb75a49306816a198ae152d2340a8f6f84bff1d03": "1",
      "0x012ef90bb25d3c36183d56c11ba24a892fdc0877": "1",
      "0xfc7bd05b80c8596093680b9147fe04ca05ad7c9d": "1",
      "0xbb4c797b01303a68cdf82ba93b96f5f284878f6b": "1",
      "0x6709a3f69e577c150e2e322c85bf4c118c15eef5": "1",
      "0xdb4d88080ed478c729b07e23f8e0ccd1f57d3f9b": "1",
      "0xc7a29121d3bd53a53a4bcf421d65f814fe5e7cc9": "1",
      "0xed6a6de0b7300d2475eb9c7b847fd3bd0fa712cd": "1",
      "0x0d1b16a968a3c7392dafb5a2c27a9e23af629039": "1",
      "0xa208e340bb5288eb65d7b748b02022e1191375cd": "1",
      "0xa2f696958a5e023014620687f1d34755c707e5d1": "1",
      "0xcacafb5b875e2dc9ca4620b112e9277973de9c69": "1",
      "0xf6c719dc30fd8a3b8f23d075ddc4e4b00fa2736d": "1",
      "0x0d7fadd685aa7818451effbd5184a5ae49044732": "1",
      "0x9c61e9becefc2535c939fbb28ec23467dda49f81": "1",
      "0xe42367065f040bca835bb1c11683e5d22881940a": "1",
      "0xde7393b6b9a6a2599eb2b03f04cbfa5ad292121e": "1",
      "0x9c66474ca32dcb1bf8ba89e0af324d0ae5fd8e8f": "1",
      "0x6e19416ff2f8ab7264759b7e1c9925eed1d18eb0": "1",
      "0xeb35779d5a7d8f28c22ede0e7dbcbf39cc9dc1b2": "1",
      "0xe1ea8b946648377a6cac4ae51ec4e6dbca536b8a": "1",
      "0x23206cfe35a70c8e3472243b03421ee2ff67cee1": "1",
      "0x88c324a6a850bce4f85f28662e4bf4e661e35e5d": "1",
      "0xdf2ea178866f15e9c532b98e35e09c402b56610f": "1",
      "0xff8b2e18c95a6e599ae42a4d6f831e8968291527": "1",
      "0xd3761e84f595669f33abc37310c4e5aed26cb377": "1",
      "0xf567a2325429ac5aac4f6fe6aa99e208baab71ff": "1",
      "0x5995fcff23f84bbb21a922658cfdcb366cf204e9": "1",
      "0x53aa991b2a2a1b6ce7b54747b9bea230c61603bf": "1",
      "0x310c58a54a13a4975ba5d27530ea8a8ff6f2fca5": "1",
      "0xee5c3df9a8556f3d693879b63457221d4a87fce3": "1",
      "0xccbe8eab6452920a02ed80482e0673e3902ceae7": "1",
      "0x5861ee962de4b66dd3aef238537c6c19c8b0e840": "1",
      "0x76dcacb4230b82c0022f38e15d0a180065c62e79": "1",
      "0xa134c53ae79368136380ac905a9321d17c68aa67": "1",
      "0x3d8fb14e54317bb79e7d0fa8095dae3141c13277": "1",
      "0x66561bc047420ef07992ea08f8dd989519a54543": "1",
      "0x002918ba9617c56cb855baa58f6937968237ae4d": "1",
      "0x4a5f34cac22ceb3ae0131bd16ef5842b6827dc22": "1",
      "0xfc6b63ed3ab5fd4ce7e92ca7600dc3e4ea24e618": "1",
      "0x31b88926d15f8b0f0d57a85070f382541dca226e": "1",
      "0x90422e1da3a90b0cd80bf9af5a59afb4e001d892": "1",
      "0x2babe76345d7eb15f6a1c0cddba04d8ee44491d5": "1",
      "0x481787bba8c56f801db8bdb336844b771c011246": "1",
      "0xc9d5d1feb2e6f0b6fc5fc87a61708164917bceda": "1",
      "0x4cb780fd3286f2d10199b61423d1c804bd2a5d2b": "1",
      "0xb9096d6db733d5971ebd4b901398e6e33bd7cc70": "1",
      "0xac3b886fa5296f0c641151589f2b1fbd0b197fa7": "1",
      "0x071cbaf5e78c029dc02d663e5a17724bf85bd10d": "1",
      "0xd589a999b7f71365939bc2a96249e2b9ea315685": "1",
      "0x6ffce76355025452bbb8b300e75bbeae3f312fd0": "1",
      "0xbe173147c005b67945b2e7348921fee227e0204f": "1",
      "0xf85e693163660ae08d6884bc2b712870ca479c60": "1",
      "0x30cb353847c13983d0576c04b2d5d762d813cc26": "1",
      "0x5fbb95db8ac0c0dce9694e4e5d534c542557119d": "1",
      "0x2274ccd6281969a25c633107a202e440bda30810": "1",
      "0x25fca08a40b765d2889c818f7e7c402b19f26e2e": "1",
      "0x3f86d16776ddf7ad163bfc4a68bac6cef70f8da3": "1",
      "0x6b581f0039fe3b255d17b4d1a4996dd991035fa5": "1",
      "0xbad48f3703946457119aa7c8453012e6c687ab02": "1",
      "0x3d19922253bceecd437c6d44d11bd4eb2e336671": "1",
      "0xd69aa51d03debf65bc056d2219e829adcfd79bb8": "1",
      "0xbb35809f90b357ee4198eb195b91de8f6be1f09b": "1",
      "0xec50e0933a7ff100ca52b1a154d6dea5057dee32": "1",
      "0x19790f6f259236cf89f237d7f074b93e4f70bd3c": "1",
      "0xba8b04b03622d56b3f64aa1d8e2e0891486e7a43": "1",
      "0x7914316ea61a4bc7179fe16ef3d0993d10b865da": "1",
      "0xab6eaa7f32a98682e2502b3500ad8d58a90e091b": "1",
      "0x50054eb2ecf822caf2724f2133ed5227a4b6f2ac": "1",
      "0xcdb1f3e47a0f58920d22e82fad9d3eb4784a466e": "1",
      "0xe5577f2db17c7a529bbd344b1ab06ab3219ec715": "1",
      "0x12227dd8c38967ffb50c1c37fcf025da45df3540": "1",
      "0xf5cd542a348f153535e9f9a1c936fef201d2c120": "1",
      "0xdb663d128a4e5ff8b9ebc5e0d4148c9f946ceff0": "1",
      "0x6e0f19c2d538c2123b73b710c0bef48bd05bb040": "1",
      "0xe08f4968a51607d857787faaa8d0e306f388bfc6": "1",
      "0x710a5237e77c2da7c6d4de66ae2c2f4d94ec88e2": "1",
      "0x30c0994b0b454ff3ba1606bce6e67d54701b24d7": "1",
      "0xc796c46ee2788d8cafaf48555314f5e7a43c147e": "1",
      "0xf4fb4c77ed823f135e6fd31b0cf09ec770e27f12": "1",
      "0xa3d9cf610e0f335e1bcc2eebfed629596b2f6059": "1",
      "0xb9274a235609be44df74d3d8c981433c999f02c4": "1",
      "0xe62b3fa7d0d807aa8abf446d2efd562058a5ebca": "1",
      "0xffb30c835f79835bf9c46354dbc73d8d6fce438f": "1",
      "0x253df0a2d8cf5ea4dc4a57d770a6c6fbe8695ac2": "1",
      "0x37d8fa18bd09ed448e93ecd47641019d91eb43a4": "1",
      "0xd11a702ec6c1d007e35d729c9d0476bbc1c4f948": "1",
      "0xcc471a9c0c10c529b409c74cb02678fa90859a4e": "1",
      "0x10d6af1820cc8b8e58771854d356e6faa0ed2e87": "1",
      "0x13dda63c28bb95fe9822fea43ad5feaa966636a9": "1",
      "0xe3c7edc292e2b9e7aa80b0812d10c86f4e166115": "1",
      "0xfd90336b84a4e475eb750c8ed5aedc27a114af67": "1",
      "0x9fa10388d2bb8b7d8a2c8586772876d6302d4cb3": "1",
      "0x3186a49932a0652f2c725bdc11f248fded8362dd": "1",
      "0xf54d6f29a19bc8317fe966e0b8a57c28844176b2": "1",
      "0x773703d93607082709e745b807161580cb72af2b": "1",
      "0xd76821034bad037baa406f8dc92a083a9b6a935b": "1",
      "0xc88fd1918a38cea1d4f21bc82286f35394670a5a": "1",
      "0x9ce7c6d8a50319a6ce62084dcf55f00044582c29": "1",
      "0x377cf7555fd49930412baae234424336b79b46a8": "1",
      "0xdec08cb92a506b88411da9ba290f3694be223c26": "1",
      "0x6ea350e876f48952c58665c450ffeb6df52aa6a0": "1",
      "0x864f36da16d545730b7e5bc7b379c6e4a3ddce9d": "1",
      "0x708796e46b7204fbbda072fe6980991f1b99c392": "1",
      "0x6a9688ed3fef9321b0aaee5d0fa4823b27c520a4": "1",
      "0x1e567b53584ec7bcb9f60f41f95998f97f752831": "1",
      "0x1e2ce012b27d0c0d3e717e943ef6e62717cec4ea": "1",
      "0xb92505a3364b7c7e333c05b44ce1e55377fc43ca": "1",
      "0x9312bd57b7a198585460e743e480548a194d53b3": "1",
      "0xec6ba66a6d19fc4b6e123fbdba59e310d6d767e0": "1",
      "0xff65189d2c8f748d721ce310c6cff775bfa374f7": "1",
      "0x343863716ac003a71c7b1e04f78266c51ec8c5ae": "1",
      "0x867df8ae5fbe11bdeb0c6ca5f116dbb8a57b51d3": "1",
      "0x05c446f4d6c3fb71f2f2949c92e0a5ee6e59853e": "1",
      "0xacd37800e67ce9a35bf6cef176be1303d73f8f29": "1",
      "0xe83ded34adbe4b52b1611dca0ea4fcf23f3ee01f": "1",
      "0x2b6091da312a3591df6a94b24dd3c34d2b01ca22": "1",
      "0x13a5e7bde7477616c953ac4d4a1a82f751053efb": "1",
      "0x205e54d648157a77efda3d4d9a031afa093194c5": "1",
      "0x4532280a66a0c1c709f7e0c40b14b4dea83253c1": "1",
      "0x489d69939b4aca357f630055e351a81f1fbb7fb6": "1",
      "0x0567314c6e66be44b5ef05fda181b9479a528f8d": "1",
      "0x7845eeabc88d67cac8398d74d2d8b9e550b93cd2": "1",
      "0x8847ebaaf29a18396e49191602f8d8d141b98aa7": "1",
      "0x0c4e0544f0ecfdf4387b45e44d2f45d26ae65d02": "1",
      "0x48a0096b26fe285138b294afe0eb1dd705071dca": "1",
      "0xed9dcd228fa818c80244e8bf8c9b45342831d3c7": "1",
      "0x737cb3474cc0bec8da82f2adab646d32c3774772": "1",
      "0x8f23d0114753290f21f334aa0f8c635b793f2b81": "1",
      "0xb24a7bdbb569ddaf6c4b5289e9201b56886b82f1": "1",
      "0xa782d8ed68bff68d60b1c7624b5ac80a8abb4274": "1",
      "0x5adf428e2fccf6cde819cbf2bc7f1f2512cfe877": "1",
      "0x12b581d51c95ad0bb8824e31ce588df0429a5c0c": "1",
      "0x63c7758b14545ff35186418729bfea18984e0d7d": "1",
      "0x74aadae2c7aa9321314a0a6f53a70eda5ebe103a": "1",
      "0x73165a7bf621f466c63f6a0c8f08e969772c2a6d": "1",
      "0x08fc9477fe3819126b941ca3fdf9fccf6c801f66": "1",
      "0x00dacfd769bc30e4f64805761707573cb710552c": "1",
      "0xa181a3c3460ad5a2650f380352e3e68111e3d60e": "1",
      "0xcac59f91e4536bc0e79ab816a5cd54e89f10433c": "1",
      "0xde96e75c7160d70a447a72afdb75ddfa1455c808": "1",
      "0x8325aff2ccc014468cdf20f2538d8534db7a100f": "1",
      "0xbd7dbb5886786af713ebb1841323c528699bd92d": "1",
      "0x001355977bf24a81143f24db9d6170f3e79dec07": "1",
      "0x49b788ab6d4e88df3315b072406feedac9fe17d9": "1",
      "0x7a76f638186fd323a9010dbe9994acec38912a07": "1",
      "0x908e8e8084d660f8f9054aa8ad1b31380d04b08f": "1",
      "0x50a0e3424dc6027ea4c0011032db3cf047606e51": "1",
      "0x7bb79ce20e464062ae265a0a9d03f3e6a9200501": "1",
      "0xe6b5ca713f16d02ff97bb6d1b7e4c412e355f306": "1",
      "0x6fd64b2555fa6d1bf8564f728da7eae8ad1397b1": "1",
      "0x0cdafc2fbd1eb267bd46a500a668ea4b7f264a23": "1",
      "0x34ecfca1dd05f10bdfb2a6ea4678388a00791aef": "1",
      "0x88b8073739f867126c96f392512ddb34ef3a350e": "1",
      "0x468025846ecf70b9ac49261b345f453f19e66b85": "1",
      "0xa44ca63136a48237b4ff4acf2aaeafcca6d775ea": "1",
      "0xfb0c57093bbc80b28820164aa148d7e84cfdf8ad": "1",
      "0x7d2e25ddb73b90400a57452d35ed6e2803d7f894": "1",
      "0x9fbf9c375c72e109604e8a72fa6b804dbb96ca66": "1",
      "0x0ba028c98e19dd6217255519645eded89d68ec63": "1",
      "0xb8763abf098d741ab755c38bbf9565838d19b501": "1",
      "0x50d5e77a1019b3bccccfdb3e0a9e145af43a9443": "1",
      "0x96c41b3d5e2b3f26f46b21022a17d72dbb3fa760": "1",
      "0x448588d0441f132c5ff677fc7fc459a91c0484dc": "1",
      "0x91a0cacb38470b50e3117f114762f605c06a1c08": "1",
      "0x0fd90b9d61af052c4328bc2fa9a1529627af0a7d": "1",
      "0xe952af3ceb8df334a0dc5919c819da95f1d439f7": "1",
      "0xb037a6640d61028769538b9221f729e7cce42bc4": "1",
      "0xab888291f4127352b655fd476f64ac2ebfb8fe76": "1",
      "0x643111d86acb17e6d9b09f34356d9150fe7bac26": "1",
      "0xa2c408956988672d64562a23bb0ed1d247a03b98": "1",
      "0x908c89e8e25e9e11bb1a3fa20ab6f2521cef2ba2": "1",
      "0x51fb007343726cc4148a8adc9b755179f41d10ba": "1",
      "0xe2665c6b02ea68e0cf3ef1a74b88155ef10243a0": "1",
      "0x41af76fc8487f49c38e6a8f59ee2f4ea644a4ffb": "1",
      "0xe18fe1fe0cbae90b9c373336bec90d3730eedd91": "1",
      "0x8aa4243ef5fe3d6ebe375fa6d47a710266cb0caf": "1",
      "0xa2a0721a5c5f0393e802ea64cc63f26551ad714d": "1",
      "0x74af1b05d3f1d4595c1e2c9dc5798fa87413e07b": "1",
      "0xc16d6c476ac65299eacbb5f4df23240dad9fe59a": "1",
      "0x4d847bea4953c82b5bfc80b9a8cce172959618f0": "1",
      "0xb08bcd3b1790a6e6c6b3d83004e738f30c00255d": "1",
      "0x6f1edb2c25b072c943662f9db3303d7697d7ea92": "1",
      "0xfc57f5df01f6937c431b6c2d1fb90694798de529": "1",
      "0xdcb67babe1893fe6339cbd5b738d16a706fae798": "1",
      "0x6e3dbb9b1862e110e22e40e63022cd6cdf345005": "1",
      "0x940f5293be23c4d06f9f561f2df79457d3782e1e": "1",
      "0x475b7441e3959c55c8e95954c6964e997b786b44": "1",
      "0x36dd77f64a2cd3605f47fde256db39062ee23420": "1",
      "0x28c6e0a61925c5f36a095c8772e60d369e5aaca1": "1",
      "0x64cb29722aef47ae5e4f3cb75685a1ffaebbc35f": "1",
      "0x808ee01a36769e106683efa3573e0ed746b09889": "1",
    };
    
    const jsonListData1 = {
      "0x9b8adcb2aA8300a84660F3EDa828Fc711BDFE8D9": "1",
    };
    
    const dataUnion = dataOperators.Union([ 
      jsonListData0,
      jsonListData1 
    ]);

    return [
      {
        name: "float",
        timestamp: context.timestamp,
        description: "Hold A.P. Morgan Sailing Club [Polygon]",
        specs: "",
        data: dataUnion,
        valueType: ValueType.Score,
        tags: [Tags.Factory],
      },
    ];
  },
};

export default generator;