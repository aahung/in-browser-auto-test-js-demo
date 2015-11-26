var loadedSource;

var originSource = `
/* 
    
    Click "Save & Test", your code will be tested 
    with predefined test cases automatically, 
    results will be displayed on the left side.

    ENJOY

    ================================================
    Do not create new functions either 
    modify signitures of functions
    ================================================
*/

// this function accepts an integer as input parameter
// output:
//     1: the integer is a prime number
//     2: the integer is not a prime number
// for example: n = 11, isPrime(n) = 1
function isPrime(n) {
    return (n % 2 == 1);
}

// this function accept two number 
// (at most 13 decimal place) as input parameters
// output:
//     a + b
// for example: a = 0.1, b = 0.2, sum(a, b) = 0.3
function sum(a, b) {
    return a + b;
}
`;

var perfectSource = `
/* 
    
    Click "Save & Test", your code will be tested 
    with predefined test cases automatically, 
    results will be displayed on the left side.

    ENJOY

    ================================================
    Do not create new functions either 
    modify signitures of functions
    ================================================
*/

// this function accepts an integer as input parameter
// output:
//     1: the integer is a prime number
//     2: the integer is not a prime number
// for example: n = 11, isPrime(n) = 1
function isPrime(n) {
    if (n < 2) {
        return 0;
    }
    var root = parseInt(Math.sqrt(n));
    for (var i = 2; i <= root; ++i) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}

// this function accept two number 
// (at most 13 decimal place) as input parameters
// output:
//     a + b
// for example: a = 0.1, b = 0.2, sum(a, b) = 0.3
function sum(a, b) {
    return (a + b).toFixed(14)
}
`;

function loadLocalStorage() {
    loadedSource = originSource;
    if(typeof(Storage) !== "undefined") {
        var savedSource = localStorage.getItem("saved");
        if (savedSource) {
            loadedSource = savedSource;
        }
    }
}

function saveLocalStorage(source) {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("saved", source);
    }
}

function makeSourceEditor(id) {
    var sourceEditor = ace.edit(id);
    sourceEditor.setTheme("ace/theme/tomorrow");
    sourceEditor.getSession().setMode("ace/mode/javascript");
    sourceEditor.setValue(loadedSource);
    sourceEditor.clearSelection();
    document.getElementById(id).style.fontSize='16px';
    return sourceEditor;
}

function makeOutputConsole(id) {
    var outputConsole = ace.edit(id);
    outputConsole.setTheme("ace/theme/tomorrow");
    outputConsole.getSession().setMode("ace/mode/plaintext");
    outputConsole.setReadOnly(true);
    return outputConsole;
}

function unsetFunctions() {
    sum = undefined;
    isPrime = undefined;
}

function onSave() {
    var source = sourceEditor.getValue();
    saveLocalStorage(source);
    unsetFunctions();
    try {
        eval(source);
    } catch (e) {
        alert("Check syntax errors.")
        return;
    }
    if (!isPrime || !sum) {
        alert("Do not change function names");
        return;
    }
    R1 = runPrimeTests(isPrime);
    R2 = runSumTests(sum);
    r1 = R1[0];
    s1 = R1[1];
    r2 = R2[0];
    s2 = R2[1];
    outputConsole.setValue("");
    outputConsole.insert(r1);
    outputConsole.insert(r2);
    outputConsole.insert(s1);
    outputConsole.insert(s2);
}

function reset() {
    loadedSource = originSource;
    saveLocalStorage(loadedSource);
    sourceEditor.setValue(loadedSource);
}

function solve() {
    sourceEditor.setValue(perfectSource);
}

loadLocalStorage();
var sourceEditor = makeSourceEditor("source-code");
var outputConsole = makeOutputConsole("output-result");
$('#save').click(onSave);
$('#reset').click(reset);
$('#solve').click(solve);


/*
    functions run*Tests() with long bodies
*/

function runPrimeTests(isPrime) {
    var results = "- Testing isPrime()\n";
    var expecteds = [
        [1, 0],
        [2, 1],
        [3, 1],
        [6, 0],
        [7, 1],
        [10, 0],
        [14, 0],
        [15, 0],
        [16, 0],
        [17, 1],
        [25, 0],
        [26, 0],
        [28, 0],
        [40, 0],
        [46, 0],
        [47, 1],
        [49, 0],
        [59, 1],
        [62, 0],
        [78, 0],
        [96, 0],
        [109, 1],
        [115, 0],
        [118, 0],
        [135, 0],
        [152, 0],
        [173, 1],
        [182, 0],
        [207, 0],
        [220, 0],
        [248, 0],
        [270, 0],
        [295, 0],
        [309, 0],
        [323, 0],
        [339, 0],
        [373, 1],
        [400, 0],
        [416, 0],
        [421, 1],
        [454, 0],
        [461, 1],
        [503, 1],
        [546, 0],
        [555, 0],
        [590, 0],
        [601, 1],
        [615, 0],
        [624, 0],
        [627, 0],
        [643, 1],
        [667, 0],
        [700, 0],
        [752, 0],
        [779, 0],
        [811, 1],
        [829, 1],
        [837, 0],
        [881, 1],
        [914, 0],
        [947, 1],
        [982, 0],
        [1041, 0],
        [1065, 0],
        [1081, 0],
        [1097, 1],
        [1149, 0],
        [1181, 1],
        [1218, 0],
        [1251, 0],
        [1270, 0],
        [1304, 0],
        [1356, 0],
        [1380, 0],
        [1406, 0],
        [1449, 0],
        [1481, 1],
        [1556, 0],
        [1584, 0],
        [1615, 0],
        [1670, 0],
        [1734, 0],
        [1764, 0],
        [1846, 0],
        [1921, 0],
        [1972, 0],
        [1977, 0],
        [2049, 0],
        [2075, 0],
        [2087, 1],
        [2107, 0],
        [2144, 0],
        [2203, 1],
        [2251, 1],
        [7451, 1],
        [8819, 1],
        [17523, 0],
        [22773, 0],
        [28455, 0],
        [29736, 0],
        [46607, 0],
        [52081, 1],
        [66377, 1],
        [72302, 0],
        [100185, 0],
        [104736, 0],
        [112471, 0],
        [128539, 0],
        [142484, 0],
        [189105, 0],
        [210279, 0],
        [246536, 0],
        [248975, 0],
        [308480, 0],
        [354715, 0],
        [406247, 1],
        [449776, 0],
        [465136, 0],
        [520640, 0],
        [593726, 0],
        [621235, 0],
        [657598, 0],
        [681169, 0],
        [702617, 0],
        [710614, 0],
        [753215, 0],
        [796167, 0],
        [867523, 0],
        [934708, 0],
        [963267, 0],
        [1018539, 0],
        [1051024, 0],
        [1115199, 0],
        [1138816, 0],
        [1203887, 1],
        [1254548, 0],
        [1350151, 0],
        [1484442, 0],
        [1578707, 0],
        [1676137, 0],
        [1724618, 0],
        [1752271, 1],
        [1855695, 0],
        [1943822, 0],
        [2025177, 0],
        [2173320, 0],
        [2192378, 0],
        [2274235, 0],
        [2383575, 0],
        [2542782, 0],
        [2700864, 0],
        [2815017, 0],
        [2835461, 0],
        [2966907, 0],
        [3151914, 0],
        [3259960, 0],
        [3268581, 0],
        [3432244, 0],
        [3530040, 0],
        [3633434, 0],
        [3666127, 1],
        [3669640, 0],
        [3688735, 0],
        [3771628, 0],
        [3938966, 0],
        [3975538, 0],
        [4117791, 0],
        [4200948, 0],
        [4361156, 0],
        [4463641, 0],
        [4472588, 0],
        [4691528, 0],
        [4701418, 0],
        [4915294, 0],
        [5156309, 1],
        [5323741, 0],
        [5408290, 0],
        [5465690, 0],
        [5707114, 0],
        [5755857, 0],
        [5821588, 0],
        [5926114, 0],
        [6026075, 0],
        [6166359, 0],
        [6192932, 0],
        [6222533, 1],
        [6278996, 0],
        [6419622, 0],
        [6424588, 0],
        [6503365, 0],
        [6796455, 0],
        [7046045, 0],
        [7300169, 1],
        [7462017, 0],
        [7717563, 0],
        [7743492, 0],
        [8010325, 0],
        [8072197, 0],
        [8160730, 0],
        [8288246, 0],
        [8609721, 0],
        [8716307, 0],
        [8888341, 0],
        [8939881, 0],
        [9064209, 0],
        [9115430, 0],
        [9191337, 0],
        [9469827, 0],
        [9766139, 1],
        [10111567, 1],
        [10169219, 0],
        [10174677, 0],
        [10228594, 0],
        [10253935, 0],
        [10454752, 0],
        [10761038, 0],
        [11073110, 0],
        [11234005, 0],
        [11313769, 0],
        [11421275, 0],
        [11496287, 0],
        [11648967, 0],
        [11947809, 0],
        [12324419, 1],
        [12351070, 0],
        [12688919, 0],
        [12865700, 0],
        [12895052, 0],
        [13084020, 0],
        [13159673, 1],
        [13258922, 0],
        [13612378, 0],
        [13697756, 0],
        [13878605, 0],
        [13962386, 0],
        [14049302, 0],
        [14082380, 0],
        [14400069, 0],
        [14777778, 0],
        [15089550, 0],
        [15317352, 0],
        [15644460, 0],
        [15659385, 0],
        [15771567, 0],
        [16148414, 0],
        [16397643, 0],
        [16730427, 0],
        [16871051, 1],
        [17120674, 0],
        [17548423, 1],
        [17555136, 0],
        [18023609, 0],
        [18438353, 0],
        [18553022, 0],
        [18752114, 0],
        [18942116, 0],
        [19023330, 0],
        [19118765, 0],
        [19306103, 0],
        [19662734, 0],
        [19679290, 0],
        [19709845, 0],
        [19774523, 1],
        [20229851, 0],
        [20724095, 0],
        [21218895, 0],
        [21301931, 0],
        [21725664, 0],
        [21876358, 0],
        [22066067, 1],
        [22510599, 0],
        [22882407, 0],
        [22949974, 0],
        [23412538, 0],
        [23884665, 0],
        [24125535, 0],
        [24600596, 0],
        [24935135, 0],
        [25491216, 0],
        [25520586, 0],
        [25656063, 0],
        [26147824, 0],
        [26603733, 0],
        [27170193, 0],
        [27460369, 1],
        [27663711, 0],
        [27882087, 0],
        [28378169, 0],
        [28763195, 0],
        [29149065, 0],
        [29696442, 0],
        [30268976, 0],
        [30578140, 0],
        [30794887, 0],
        [31259834, 0],
        [31678479, 0],
        [31687540, 0],
        [31960034, 0],
        [32392425, 0],
        [32997700, 0],
        [33605092, 0],
        [33631281, 0],
        [33722864, 0],
        [33924719, 0],
        [34038174, 0],
        [34618281, 0],
        [34840758, 0],
        [35181166, 0],
        [35574686, 0],
        [36154422, 0],
        [36535278, 0],
        [36801318, 0],
        [36821777, 1],
        [36843704, 0],
        [36882580, 0],
        [37075251, 0],
        [37662243, 0],
        [38246052, 0],
        [38751240, 0],
        [39371985, 0],
        [39459281, 0],
        [40088621, 1],
        [40670305, 0],
        [41355639, 0],
        [41695027, 0],
        [41755828, 0],
        [42061297, 1],
        [42195508, 0],
        [42388086, 0],
        [43082784, 0],
        [43331684, 0],
        [43364899, 1],
        [43905338, 0],
        [44064744, 0],
        [44667146, 0],
        [44697621, 0],
        [44851689, 0],
        [45182003, 1],
        [45319466, 0],
        [45757175, 0],
        [45844289, 1],
        [46057658, 0],
        [46622776, 0],
        [47090761, 1],
        [47650906, 0],
        [48012973, 1],
        [48335455, 0],
        [49010240, 0],
        [49724738, 0],
        [50433571, 1],
        [51078603, 0],
        [51186346, 0],
        [51796457, 1],
        [52463232, 0],
        [52529944, 0],
        [52929669, 0],
        [53041903, 0],
        [53349472, 0],
        [53760988, 0],
        [54234636, 0],
        [54766052, 0],
        [55555965, 0],
        [56263144, 0],
        [56835650, 0],
        [57268835, 0],
        [58045904, 0],
        [58663446, 0],
        [58940239, 1],
        [59486362, 0],
        [60229148, 0],
        [60917000, 0],
        [61527398, 0],
        [62335192, 0],
        [62927571, 0],
        [63253856, 0],
        [63534754, 0],
        [64229316, 0],
        [64274780, 0],
        [64659709, 1],
        [64904594, 0],
        [65659478, 0],
        [66509758, 0],
        [67178687, 1],
        [67671286, 0],
        [68367125, 0],
        [69074086, 0],
        [69881659, 0],
        [69952930, 0],
        [70466219, 1],
        [70682274, 0],
        [71008423, 0],
        [982451653, 1],
        [12345678976541, 1]
    ];

    var countPass = 0, countFail = 0;
    for (var i = 0; i < expecteds.length; ++i) {
        var expected = expecteds[i];
        try {
            if (isPrime(expected[0]) == expected[1]) countPass++;
            else {
                results += "Failed: isPrime(" + expected[0] + ") expected " 
                        + expected[1] + ", got " + (1 - expected[1]) + ".\n" 
                countFail++;
            }
        } catch (e) {
            results += "Error " + e + ".\n" 
            countFail++;
        }
    }

    var summary = "Ran " + (countFail + countPass) + " tests on isPrime, pass " 
                + countPass + " fail " + countFail + ".\n";

    return [results, summary];
}

function runSumTests(sum) {
    var results = "- Testing sum()\n";
    var expecteds = [
        [1, 2, 3],
        [0, 0, 0],
        [0.1, 0.2, 0.3],
        [0.003038, 0.592266, 0.595304],
        [0.427206, 0.018671, 0.445877],
        [0.229861, 0.596417, 0.826278],
        [0.955550, 0.974656, 1.930206],
        [0.256407, 0.187453, 0.443860],
        [0.660557, 0.838702, 1.499259],
        [0.653631, 0.121224, 0.774855],
        [0.693400, 0.538247, 1.231647],
        [0.523823, 0.686757, 1.210580],
        [0.120089, 0.729156, 0.849245],
        [0.977191, 0.784965, 1.762156],
        [0.988916, 0.849702, 1.838618],
        [0.728099, 0.217631, 0.945730],
        [0.155077, 0.777257, 0.932334],
        [0.158241, 0.046659, 0.204900],
        [0.811393, 0.324788, 1.136181],
        [0.972250, 0.573651, 1.545901],
        [0.244093, 0.101479, 0.345572],
        [0.096145, 0.861159, 0.957304],
        [0.803140, 0.315365, 1.118505],
        [0.493453, 0.429486, 0.922939],
        [0.656627, 0.504281, 1.160908],
        [0.306075, 0.373539, 0.679614],
        [0.313488, 0.031989, 0.345477],
        [0.865375, 0.780034, 1.645409],
        [0.317459, 0.575809, 0.893268],
        [0.556927, 0.718666, 1.275593],
        [0.284233, 0.927880, 1.212113],
        [0.382625, 0.819787, 1.202412],
        [0.264989, 0.806881, 1.071870],
        [0.508273, 0.186239, 0.694512],
        [0.481506, 0.530409, 1.011915],
        [0.178686, 0.819955, 0.998641],
        [0.805048, 0.845669, 1.650717],
        [0.902712, 0.007502, 0.910214],
        [0.956009, 0.992284, 1.948293],
        [0.915104, 0.325589, 1.240693],
        [0.017195, 0.661566, 0.678761],
        [0.714557, 0.921562, 1.636119],
        [0.534202, 0.027335, 0.561537],
        [0.521502, 0.937490, 1.458992],
        [0.585517, 0.568197, 1.153714],
        [0.295405, 0.501082, 0.796487],
        [0.480242, 0.018523, 0.498765],
        [0.881080, 0.646451, 1.527531],
        [0.489051, 0.182361, 0.671412],
        [0.417673, 0.962329, 1.380002],
        [0.713203, 0.660357, 1.373560],
        [0.659034, 0.760112, 1.419146],
        [0.005461, 0.058937, 0.064398],
        [0.224524, 0.154129, 0.378653],
        [0.654563, 0.667409, 1.321972],
        [0.898134, 0.463601, 1.361735],
        [0.490350, 0.688545, 1.178895],
        [0.160670, 0.532466, 0.693136],
        [0.911903, 0.652014, 1.563917],
        [0.307637, 0.780304, 1.087941],
        [0.843340, 0.081959, 0.925299],
        [0.474257, 0.179792, 0.654049],
        [0.241359, 0.509316, 0.750675],
        [0.715306, 0.094681, 0.809987],
        [0.487604, 0.631978, 1.119582],
        [0.251136, 0.075124, 0.326260],
        [0.605206, 0.480383, 1.085589],
        [0.797523, 0.186804, 0.984327],
        [0.751537, 0.911654, 1.663191],
        [0.715982, 0.426579, 1.142561],
        [0.876493, 0.104403, 0.980896],
        [0.015528, 0.094378, 0.109906],
        [0.691043, 0.119862, 0.810905],
        [0.605147, 0.649035, 1.254182],
        [0.332136, 0.909628, 1.241764],
        [0.671753, 0.515841, 1.187594],
        [0.691229, 0.445722, 1.136951],
        [0.6665547005293, 0.5544375734459, 1.2209922739752],
        [0.5408676946898, 0.3762586569679, 0.9171263516577],
        [0.5719696428818, 0.3022509206471, 0.8742205635289],
        [0.5088526764266, 0.1294354935123, 0.6382881699389],
        [0.3143265906002, 0.9740913657803, 1.2884179563805],
        [0.1665041425068, 0.7220069203253, 0.8885110628321],
        [0.5802893649592, 0.2197415062254, 0.8000308711846],
        [0.1506619533361, 0.6027830738441, 0.7534450271802],
        [0.0271447952097, 0.7019696973365, 0.7291144925462],
        [0.6864507598647, 0.2967146818017, 0.9831654416664],
        [0.6563287648191, 0.4344852755605, 1.0908140403796],
        [0.7398283370905, 0.5560226160465, 1.2958509531370],
        [0.9634202735392, 0.5895048196551, 1.5529250931943],
        [0.1339643506614, 0.6207600209711, 0.7547243716325],
        [0.7037383093561, 0.9942812042162, 1.6980195135723],
        [0.8659975413870, 0.8558520917780, 1.7218496331650],
        [0.9722829776709, 0.8554905082907, 1.8277734859616],
        [0.8182719952887, 0.5559567561783, 1.3742287514670],
        [0.8015111331770, 0.7455499750296, 1.5470611082066],
        [0.4158766007664, 0.8377852087101, 1.2536618094765],
        [0.3564276684592, 0.9009840426333, 1.2574117110925],
        [0.8782205112655, 0.7647729051631, 1.6429934164286],
        [0.8424243261470, 0.4136161097572, 1.2560404359042],
        [0.7638731148879, 0.3031864372070, 1.0670595520949],
        [0.7283817517176, 0.7556092850405, 1.4839910367581],
        [0.5476184751079, 0.8287732713933, 1.3763917465012],
        [0.8858075256657, 0.2599775776209, 1.1457851032866],
        [0.6599478379971, 0.7069906065353, 1.3669384445324],
        [0.3214727433237, 0.7338166163719, 1.0552893596956],
        [0.5320621119904, 0.5587997487399, 1.0908618607303],
        [0.5547281793514, 0.0451887777372, 0.5999169570886],
        [0.4962871911492, 0.1996756417605, 0.6959628329097],
        [0.6515614845012, 0.1293995118669, 0.7809609963681],
        [0.1768820441909, 0.5400519600354, 0.7169340042263],
        [0.3671022162381, 0.9638895230299, 1.3309917392680],
        [0.4268334678945, 0.9086681426983, 1.3355016105928],
        [0.1178730043726, 0.7682419375303, 0.8861149419029],
        [0.9962829556855, 0.8839330952724, 1.8802160509579],
        [0.9110645690704, 0.3603825845812, 1.2714471536516],
        [0.0657552856778, 0.3743839539703, 0.4401392396481],
        [0.1049257190898, 0.6043218071384, 0.7092475262282],
        [0.9292089495272, 0.8540524122416, 1.7832613617688],
        [0.8300248760194, 0.7140597717146, 1.5440846477340],
        [0.3138327922549, 0.0051138122509, 0.3189466045058],
        [0.1873988863587, 0.3557101563807, 0.5431090427394],
        [0.5468315207413, 0.5415411041903, 1.0883726249316],
        [0.6214942239370, 0.3929931306679, 1.0144873546049],
        [0.6032905415992, 0.9237252980174, 1.5270158396166],
        [0.7349707544717, 0.2887354139693, 1.0237061684410],
        [0.5924919197169, 0.8439225827021, 1.4364145024190],
        [0.4108555728185, 0.2575410418612, 0.6683966146797],
        [0.7431150126356, 0.1564771881480, 0.8995922007836],
        [0.2820163809250, 0.3666991304591, 0.6487155113841],
        [0.9584291640285, 0.0904922999481, 1.0489214639766],
        [0.4938022220560, 0.3757819900425, 0.8695842120985],
        [0.1577062627350, 0.9153529867226, 1.0730592494576],
        [0.3082280085299, 0.2024572153584, 0.5106852238883],
        [0.8324281836642, 0.0618495648968, 0.8942777485610],
        [0.5070611664882, 0.4551738908147, 0.9622350573029],
        [0.4667210559190, 0.2087585493192, 0.6754796052382],
        [0.6074413883181, 0.5896923688059, 1.1971337571240],
        [0.3755454088854, 0.2443839685304, 0.6199293774158],
        [0.5182927511904, 0.9061538495772, 1.4244466007676],
        [0.6535892668953, 0.1896716278507, 0.8432608947460],
        [0.0276666910917, 0.0800228503904, 0.1076895414821],
        [0.6550929145168, 0.2176101498631, 0.8727030643799],
        [0.7968379746193, 0.5990556507277, 1.3958936253470],
        [0.3744977475812, 0.4686228495057, 0.8431205970869],
        [0.1921416051128, 0.1381526398668, 0.3302942449796],
        [0.1412517051424, 0.1654244952157, 0.3066762003581],
        [0.4726274945166, 0.0599705496803, 0.5325980441969],
        [0.4262836523516, 0.5802528985595, 1.0065365509111],
        [0.7895936766216, 0.3288568580409, 1.1184505346625],
        [0.1579488680450, 0.4112563170919, 0.5692051851369],
        [0.0357691497827, 0.8521229722954, 0.8878921220781],
        [0.7628174452324, 0.9829274921232, 1.7457449373556],
        [0.1369974623451, 0.0212046546643, 0.1582021170094],
        [0.2885163270415, 0.9972840262968, 1.2858003533383],
        [0.8249723265117, 0.1552728776821, 0.9802452041938],
        [0.4921262355147, 0.3292922348449, 0.8214184703596],
        [0.4589479515146, 0.1295431603728, 0.5884911118874],
        [0.7354485948191, 0.8390024839073, 1.5744510787264],
        [0.3502259454830, 0.3883061479810, 0.7385320934640],
        [0.8339723380782, 0.0401931815748, 0.8741655196530],
        [0.6162056967213, 0.9531144666542, 1.5693201633755],
        [0.6736825797225, 0.6329875659537, 1.3066701456762],
        [0.5411669974223, 0.6012676177964, 1.1424346152187],
        [0.9480126434306, 0.6404032895748, 1.5884159330054],
        [0.9557325998393, 0.9556115692224, 1.9113441690617],
        [0.0333333657181, 0.6271742950331, 0.6605076607512],
        [0.3156754672566, 0.7172125443540, 1.0328880116106],
        [0.1334362919628, 0.7396921523062, 0.8731284442690],
        [0.9815682339577, 0.5186143529729, 1.5001825869306],
        [0.2808307046616, 0.7456550905535, 1.0264857952151],
        [0.4414698004733, 0.1464653036828, 0.5879351041561],
        [0.7994702613127, 0.0528833651777, 0.8523536264904],
        [0.5753590658277, 0.6246834946559, 1.2000425604836],
        [0.2687413168836, 0.5260649656044, 0.7948062824880],
        [0.7020132653256, 0.0314591424197, 0.7334724077453],
        [0.2032219020492, 0.3853387479361, 0.5885606499853]
    ];
    var countPass = 0, countFail = 0;
    for (var i = 0; i < expecteds.length; ++i) {
        var expected = expecteds[i];
        try {
            if (sum(expected[0], expected[1]) == expected[2]) countPass++;
            else {
                results += "Failed: sum(" + expected[0] + ", " + expected[1] +
                        ") expected " + expected[2] + ", got " + 
                        sum(expected[0], expected[1]) + "\n" 
                countFail++;
            }
        } catch (e) {
            results += "Error " + e + ".\n" 
            countFail++;
        }
    }

    var summary = "Ran " + (countFail + countPass) + " tests on sum, pass " 
                + countPass + " fail " + countFail + ".\n";

    return [results, summary];
}