var T=Object.defineProperty,O=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var $=(e,i,a)=>i in e?T(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,h=(e,i)=>{for(var a in i||(i={}))U.call(i,a)&&$(e,a,i[a]);if(q)for(var a of q(i))B.call(i,a)&&$(e,a,i[a]);return e},z=(e,i)=>O(e,P(i));function j(){}function E(e){return e()}function C(){return Object.create(null)}function d(e){e.forEach(E)}function G(e){return typeof e=="function"}function ie(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}function I(e){return Object.keys(e).length===0}function ae(e,i){e.appendChild(i)}function te(e,i,a){e.insertBefore(i,a||null)}function R(e){e.parentNode.removeChild(e)}function re(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function ne(){return D(" ")}function le(e,i,a,t){return e.addEventListener(i,a,t),()=>e.removeEventListener(i,a,t)}function oe(e,i,a){a==null?e.removeAttribute(i):e.getAttribute(i)!==a&&e.setAttribute(i,a)}function F(e){return Array.from(e.childNodes)}function se(e,i){i=""+i,e.wholeText!==i&&(e.data=i)}function ce(e,i,a,t){e.style.setProperty(i,a,t?"important":"")}let A;function g(e){A=e}const u=[],M=[],p=[],N=[],H=Promise.resolve();let f=!1;function J(){f||(f=!0,H.then(L))}function y(e){p.push(e)}let b=!1;const v=new Set;function L(){if(!b){b=!0;do{for(let e=0;e<u.length;e+=1){const i=u[e];g(i),K(i.$$)}for(g(null),u.length=0;M.length;)M.pop()();for(let e=0;e<p.length;e+=1){const i=p[e];v.has(i)||(v.add(i),i())}p.length=0}while(u.length);for(;N.length;)N.pop()();f=!1,b=!1,v.clear()}}function K(e){if(e.fragment!==null){e.update(),d(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(y)}}const Q=new Set;function V(e,i){e&&e.i&&(Q.delete(e),e.i(i))}function W(e,i,a,t){const{fragment:l,on_mount:o,on_destroy:r,after_update:m}=e.$$;l&&l.m(i,a),t||y(()=>{const c=o.map(E).filter(G);r?r.push(...c):d(c),e.$$.on_mount=[]}),m.forEach(y)}function X(e,i){const a=e.$$;a.fragment!==null&&(d(a.on_destroy),a.fragment&&a.fragment.d(i),a.on_destroy=a.fragment=null,a.ctx=[])}function Y(e,i){e.$$.dirty[0]===-1&&(u.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function ue(e,i,a,t,l,o,r,m=[-1]){const c=A;g(e);const n=e.$$={fragment:null,ctx:null,props:o,update:j,not_equal:l,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(c?c.$$.context:[])),callbacks:C(),dirty:m,skip_bound:!1,root:i.target||c.$$.root};r&&r(n.root);let w=!1;if(n.ctx=a?a(e,i.props||{},(s,k,...x)=>{const _=x.length?x[0]:k;return n.ctx&&l(n.ctx[s],n.ctx[s]=_)&&(!n.skip_bound&&n.bound[s]&&n.bound[s](_),w&&Y(e,s)),k}):[],n.update(),w=!0,d(n.before_update),n.fragment=t?t(n.ctx):!1,i.target){if(i.hydrate){const s=F(i.target);n.fragment&&n.fragment.l(s),s.forEach(R)}else n.fragment&&n.fragment.c();i.intro&&V(e.$$.fragment),W(e,i.target,i.anchor,i.customElement),L()}g(c)}class de{$destroy(){X(this,1),this.$destroy=j}$on(i,a){const t=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return t.push(a),()=>{const l=t.indexOf(a);l!==-1&&t.splice(l,1)}}$set(i){this.$$set&&!I(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}class Z{constructor(i){this.dictionaries=void 0,this.length=void 0,this.separator=void 0,this.style=void 0,this.seed=void 0;const{length:a,separator:t,dictionaries:l,style:o,seed:r}=i;this.dictionaries=l,this.separator=t,this.length=a,this.style=o,this.seed=r}generate(){if(!this.dictionaries)throw new Error('Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object');if(this.length<=0)throw new Error("Invalid length provided");if(this.length>this.dictionaries.length)throw new Error(`The length cannot be bigger than the number of dictionaries.
Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);return this.dictionaries.slice(0,this.length).reduce((i,a)=>{let t=a[Math.floor((this.seed?(l=this.seed,(o=>{o=1831565813+(o|=0)|0;let r=Math.imul(o^o>>>15,1|o);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296})(l)):Math.random())*a.length)]||"";var l;if(this.style==="lowerCase")t=t.toLowerCase();else if(this.style==="capital"){const[o,...r]=t.split("");t=o.toUpperCase()+r.join("")}else this.style==="upperCase"&&(t=t.toUpperCase());return i?`${i}${this.separator}${t}`:`${t}`},"")}}const S={separator:"_",dictionaries:[]},ge=e=>{const i=[...e&&e.dictionaries||S.dictionaries],a=z(h(h({},S),e),{length:e&&e.length||i.length,dictionaries:i});if(!e||!e.dictionaries||!e.dictionaries.length)throw new Error('A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide');return new Z(a).generate()};var pe=["able","above","absent","absolute","abstract","abundant","academic","acceptable","accepted","accessible","accurate","accused","active","actual","acute","added","additional","adequate","adjacent","administrative","adorable","advanced","adverse","advisory","aesthetic","afraid","aggregate","aggressive","agreeable","agreed","agricultural","alert","alive","alleged","allied","alone","alright","alternative","amateur","amazing","ambitious","amused","ancient","angry","annoyed","annual","anonymous","anxious","appalling","apparent","applicable","appropriate","arbitrary","architectural","armed","arrogant","artificial","artistic","ashamed","asleep","assistant","associated","atomic","attractive","automatic","autonomous","available","average","awake","aware","awful","awkward","back","bad","balanced","bare","basic","beautiful","beneficial","better","bewildered","big","binding","biological","bitter","bizarre","blank","blind","blonde","bloody","blushing","boiling","bold","bored","boring","bottom","brainy","brave","breakable","breezy","brief","bright","brilliant","broad","broken","bumpy","burning","busy","calm","capable","capitalist","careful","casual","causal","cautious","central","certain","changing","characteristic","charming","cheap","cheerful","chemical","chief","chilly","chosen","christian","chronic","chubby","circular","civic","civil","civilian","classic","classical","clean","clear","clever","clinical","close","closed","cloudy","clumsy","coastal","cognitive","coherent","cold","collective","colonial","colorful","colossal","coloured","colourful","combative","combined","comfortable","coming","commercial","common","communist","compact","comparable","comparative","compatible","competent","competitive","complete","complex","complicated","comprehensive","compulsory","conceptual","concerned","concrete","condemned","confident","confidential","confused","conscious","conservation","conservative","considerable","consistent","constant","constitutional","contemporary","content","continental","continued","continuing","continuous","controlled","controversial","convenient","conventional","convinced","convincing","cooing","cool","cooperative","corporate","correct","corresponding","costly","courageous","crazy","creative","creepy","criminal","critical","crooked","crowded","crucial","crude","cruel","cuddly","cultural","curious","curly","current","curved","cute","daily","damaged","damp","dangerous","dark","dead","deaf","deafening","dear","decent","decisive","deep","defeated","defensive","defiant","definite","deliberate","delicate","delicious","delighted","delightful","democratic","dependent","depressed","desirable","desperate","detailed","determined","developed","developing","devoted","different","difficult","digital","diplomatic","direct","dirty","disabled","disappointed","disastrous","disciplinary","disgusted","distant","distinct","distinctive","distinguished","disturbed","disturbing","diverse","divine","dizzy","domestic","dominant","double","doubtful","drab","dramatic","dreadful","driving","drunk","dry","dual","due","dull","dusty","dutch","dying","dynamic","eager","early","eastern","easy","economic","educational","eerie","effective","efficient","elaborate","elated","elderly","eldest","electoral","electric","electrical","electronic","elegant","eligible","embarrassed","embarrassing","emotional","empirical","empty","enchanting","encouraging","endless","energetic","enormous","enthusiastic","entire","entitled","envious","environmental","equal","equivalent","essential","established","estimated","ethical","ethnic","eventual","everyday","evident","evil","evolutionary","exact","excellent","exceptional","excess","excessive","excited","exciting","exclusive","existing","exotic","expected","expensive","experienced","experimental","explicit","extended","extensive","external","extra","extraordinary","extreme","exuberant","faint","fair","faithful","familiar","famous","fancy","fantastic","far","fascinating","fashionable","fast","fat","fatal","favourable","favourite","federal","fellow","female","feminist","few","fierce","filthy","final","financial","fine","firm","fiscal","fit","fixed","flaky","flat","flexible","fluffy","fluttering","flying","following","fond","foolish","foreign","formal","formidable","forthcoming","fortunate","forward","fragile","frail","frantic","free","frequent","fresh","friendly","frightened","front","frozen","full","fun","functional","fundamental","funny","furious","future","fuzzy","gastric","gay","general","generous","genetic","gentle","genuine","geographical","giant","gigantic","given","glad","glamorous","gleaming","global","glorious","golden","good","gorgeous","gothic","governing","graceful","gradual","grand","grateful","greasy","great","grieving","grim","gross","grotesque","growing","grubby","grumpy","guilty","handicapped","handsome","happy","hard","harsh","head","healthy","heavy","helpful","helpless","hidden","high","hilarious","hissing","historic","historical","hollow","holy","homeless","homely","hon","honest","horizontal","horrible","hostile","hot","huge","human","hungry","hurt","hushed","husky","icy","ideal","identical","ideological","ill","illegal","imaginative","immediate","immense","imperial","implicit","important","impossible","impressed","impressive","improved","inadequate","inappropriate","inc","inclined","increased","increasing","incredible","independent","indirect","individual","industrial","inevitable","influential","informal","inherent","initial","injured","inland","inner","innocent","innovative","inquisitive","instant","institutional","insufficient","intact","integral","integrated","intellectual","intelligent","intense","intensive","interested","interesting","interim","interior","intermediate","internal","international","intimate","invisible","involved","irrelevant","isolated","itchy","jealous","jittery","joint","jolly","joyous","judicial","juicy","junior","just","keen","key","kind","known","labour","large","late","latin","lazy","leading","left","legal","legislative","legitimate","lengthy","lesser","level","lexical","liable","liberal","light","like","likely","limited","linear","linguistic","liquid","literary","little","live","lively","living","local","logical","lonely","long","loose","lost","loud","lovely","low","loyal","ltd","lucky","mad","magic","magnetic","magnificent","main","major","male","mammoth","managerial","managing","manual","many","marginal","marine","marked","married","marvellous","marxist","mass","massive","mathematical","mature","maximum","mean","meaningful","mechanical","medical","medieval","melodic","melted","mental","mere","metropolitan","mid","middle","mighty","mild","military","miniature","minimal","minimum","ministerial","minor","miserable","misleading","missing","misty","mixed","moaning","mobile","moderate","modern","modest","molecular","monetary","monthly","moral","motionless","muddy","multiple","mushy","musical","mute","mutual","mysterious","naked","narrow","nasty","national","native","natural","naughty","naval","near","nearby","neat","necessary","negative","neighbouring","nervous","net","neutral","new","nice","noble","noisy","normal","northern","nosy","notable","novel","nuclear","numerous","nursing","nutritious","nutty","obedient","objective","obliged","obnoxious","obvious","occasional","occupational","odd","official","ok","okay","old","olympic","only","open","operational","opposite","optimistic","oral","ordinary","organic","organisational","original","orthodox","other","outdoor","outer","outrageous","outside","outstanding","overall","overseas","overwhelming","painful","pale","panicky","parallel","parental","parliamentary","partial","particular","passing","passive","past","patient","payable","peaceful","peculiar","perfect","permanent","persistent","personal","petite","philosophical","physical","plain","planned","plastic","pleasant","pleased","poised","polite","political","poor","popular","positive","possible","potential","powerful","practical","precious","precise","preferred","pregnant","preliminary","premier","prepared","present","presidential","pretty","previous","prickly","primary","prime","primitive","principal","printed","prior","private","probable","productive","professional","profitable","profound","progressive","prominent","promising","proper","proposed","prospective","protective","protestant","proud","provincial","psychiatric","psychological","public","puny","pure","purring","puzzled","quaint","qualified","quarrelsome","querulous","quick","quickest","quiet","quintessential","quixotic","racial","radical","rainy","random","rapid","rare","raspy","rational","ratty","raw","ready","real","realistic","rear","reasonable","recent","reduced","redundant","regional","registered","regular","regulatory","related","relative","relaxed","relevant","reliable","relieved","religious","reluctant","remaining","remarkable","remote","renewed","representative","repulsive","required","resident","residential","resonant","respectable","respective","responsible","resulting","retail","retired","revolutionary","rich","ridiculous","right","rigid","ripe","rising","rival","roasted","robust","rolling","romantic","rotten","rough","round","royal","rubber","rude","ruling","running","rural","sacred","sad","safe","salty","satisfactory","satisfied","scared","scary","scattered","scientific","scornful","scrawny","screeching","secondary","secret","secure","select","selected","selective","selfish","semantic","senior","sensible","sensitive","separate","serious","severe","sexual","shaggy","shaky","shallow","shared","sharp","sheer","shiny","shivering","shocked","short","shrill","shy","sick","significant","silent","silky","silly","similar","simple","single","skilled","skinny","sleepy","slight","slim","slimy","slippery","slow","small","smart","smiling","smoggy","smooth","social","socialist","soft","solar","sole","solid","sophisticated","sore","sorry","sound","sour","southern","soviet","spare","sparkling","spatial","special","specific","specified","spectacular","spicy","spiritual","splendid","spontaneous","sporting","spotless","spotty","square","squealing","stable","stale","standard","static","statistical","statutory","steady","steep","sticky","stiff","still","stingy","stormy","straight","straightforward","strange","strategic","strict","striking","striped","strong","structural","stuck","stupid","subjective","subsequent","substantial","subtle","successful","successive","sudden","sufficient","suitable","sunny","super","superb","superior","supporting","supposed","supreme","sure","surprised","surprising","surrounding","surviving","suspicious","sweet","swift","symbolic","sympathetic","systematic","tall","tame","tart","tasteless","tasty","technical","technological","teenage","temporary","tender","tense","terrible","territorial","testy","then","theoretical","thick","thin","thirsty","thorough","thoughtful","thoughtless","thundering","tight","tiny","tired","top","tory","total","tough","toxic","traditional","tragic","tremendous","tricky","tropical","troubled","typical","ugliest","ugly","ultimate","unable","unacceptable","unaware","uncertain","unchanged","uncomfortable","unconscious","underground","underlying","unemployed","uneven","unexpected","unfair","unfortunate","unhappy","uniform","uninterested","unique","united","universal","unknown","unlikely","unnecessary","unpleasant","unsightly","unusual","unwilling","upper","upset","uptight","urban","urgent","used","useful","useless","usual","vague","valid","valuable","variable","varied","various","varying","vast","verbal","vertical","very","vicarious","vicious","victorious","violent","visible","visiting","visual","vital","vitreous","vivacious","vivid","vocal","vocational","voiceless","voluminous","voluntary","vulnerable","wandering","warm","wasteful","watery","weak","wealthy","weary","wee","weekly","weird","welcome","well","western","wet","whispering","whole","wicked","wide","widespread","wild","wilful","willing","willowy","wily","wise","wispy","wittering","witty","wonderful","wooden","working","worldwide","worried","worrying","worthwhile","worthy","written","wrong","xenacious","xenial","xenogeneic","xenophobic","xeric","xerothermic","yabbering","yammering","yappiest","yappy","yawning","yearling","yearning","yeasty","yelling","yelping","yielding","yodelling","young","youngest","youthful","ytterbic","yucky","yummy","zany","zealous","zeroth","zestful","zesty","zippy","zonal","zoophagous","zygomorphic","zygotic"],me=["aardvark","aardwolf","albatross","alligator","alpaca","amphibian","anaconda","angelfish","anglerfish","ant","anteater","antelope","antlion","ape","aphid","armadillo","asp","baboon","badger","bandicoot","barnacle","barracuda","basilisk","bass","bat","bear","beaver","bedbug","bee","beetle","bird","bison","blackbird","boa","boar","bobcat","bobolink","bonobo","booby","bovid","bug","butterfly","buzzard","camel","canid","canidae","capybara","cardinal","caribou","carp","cat","caterpillar","catfish","catshark","cattle","centipede","cephalopod","chameleon","cheetah","chickadee","chicken","chimpanzee","chinchilla","chipmunk","cicada","clam","clownfish","cobra","cockroach","cod","condor","constrictor","coral","cougar","cow","coyote","crab","crane","crawdad","crayfish","cricket","crocodile","crow","cuckoo","damselfly","deer","dingo","dinosaur","dog","dolphin","donkey","dormouse","dove","dragon","dragonfly","duck","eagle","earthworm","earwig","echidna","eel","egret","elephant","elk","emu","ermine","falcon","felidae","ferret","finch","firefly","fish","flamingo","flea","fly","flyingfish","fowl","fox","frog","galliform","gamefowl","gayal","gazelle","gecko","gerbil","gibbon","giraffe","goat","goldfish","goose","gopher","gorilla","grasshopper","grouse","guan","guanaco","guineafowl","gull","guppy","haddock","halibut","hamster","hare","harrier","hawk","hedgehog","heron","herring","hippopotamus","hookworm","hornet","horse","hoverfly","hummingbird","hyena","iguana","impala","jackal","jaguar","jay","jellyfish","junglefowl","kangaroo","kingfisher","kite","kiwi","koala","koi","krill","ladybug","lamprey","landfowl","lark","leech","lemming","lemur","leopard","leopon","limpet","lion","lizard","llama","lobster","locust","loon","louse","lungfish","lynx","macaw","mackerel","magpie","mammal","manatee","mandrill","marlin","marmoset","marmot","marsupial","marten","mastodon","meadowlark","meerkat","mink","minnow","mite","mockingbird","mole","mollusk","mongoose","monkey","moose","mosquito","moth","mouse","mule","muskox","narwhal","newt","nightingale","ocelot","octopus","opossum","orangutan","orca","ostrich","otter","owl","ox","panda","panther","parakeet","parrot","parrotfish","partridge","peacock","peafowl","pelican","penguin","perch","pheasant","pig","pigeon","pike","pinniped","piranha","planarian","platypus","pony","porcupine","porpoise","possum","prawn","primate","ptarmigan","puffin","puma","python","quail","quelea","quokka","rabbit","raccoon","rat","rattlesnake","raven","reindeer","reptile","rhinoceros","roadrunner","rodent","rook","rooster","roundworm","sailfish","salamander","salmon","sawfish","scallop","scorpion","seahorse","shark","sheep","shrew","shrimp","silkworm","silverfish","skink","skunk","sloth","slug","smelt","snail","snake","snipe","sole","sparrow","spider","spoonbill","squid","squirrel","starfish","stingray","stoat","stork","sturgeon","swallow","swan","swift","swordfish","swordtail","tahr","takin","tapir","tarantula","tarsier","termite","tern","thrush","tick","tiger","tiglon","toad","tortoise","toucan","trout","tuna","turkey","turtle","tyrannosaurus","unicorn","urial","vicuna","viper","vole","vulture","wallaby","walrus","warbler","wasp","weasel","whale","whippet","whitefish","wildcat","wildebeest","wildfowl","wolf","wolverine","wombat","woodpecker","worm","wren","xerinae","yak","zebra"];export{de as S,ne as a,ce as b,oe as c,te as d,re as e,ae as f,se as g,R as h,ue as i,ge as j,pe as k,le as l,me as m,j as n,ie as s,D as t};
