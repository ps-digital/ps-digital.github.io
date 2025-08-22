const _0x4ab36a = _0x1f9e;
(function (_0x1dda77, _0x69e014) {
    const _0x7d6834 = _0x1f9e,
        _0x561ef7 = _0x1dda77();
    while (!![]) {
        try {
            const _0x543cb5 =
                (parseInt(_0x7d6834(0x280)) / (0x3 * -0x699 + -0x2498 + -0x4b3 * -0xc)) *
                    (-parseInt(_0x7d6834(0x187)) / (-0x451 + -0x1 * -0x217d + -0x1d2a)) +
                (-parseInt(_0x7d6834(0x174)) / (-0xb5 * -0x35 + 0xc7a * 0x3 + 0x12b9 * -0x4)) *
                    (parseInt(_0x7d6834(0x2ec)) / (-0x1a4e + -0x4 * -0x436 + 0x1 * 0x97a)) +
                parseInt(_0x7d6834(0x180)) / (0x2474 * 0x1 + -0x185b + -0x305 * 0x4) +
                -parseInt(_0x7d6834(0x10b)) / (0x2272 + 0x8eb + -0x2b57) +
                (-parseInt(_0x7d6834(0x2f3)) / (0x7 * 0x10a + 0x1362 + -0x191 * 0x11)) *
                    (parseInt(_0x7d6834(0x2a9)) / (0xc6a + 0x1e7e + -0x157 * 0x20)) +
                (-parseInt(_0x7d6834(0x11f)) / (-0x16af + -0x163d + -0x1 * -0x2cf5)) *
                    (-parseInt(_0x7d6834(0x33b)) / (0x1 * 0x50d + 0x773 * 0x1 + -0xc76)) +
                (parseInt(_0x7d6834(0x336)) / (-0xb5 * 0x9 + 0x21ad + -0xd * 0x219)) *
                    (parseInt(_0x7d6834(0x298)) / (0xe85 + -0x7f + 0x2 * -0x6fd));
            if (_0x543cb5 === _0x69e014) break;
            else _0x561ef7['push'](_0x561ef7['shift']());
        } catch (_0x1eb0bf) {
            _0x561ef7['push'](_0x561ef7['shift']());
        }
    }
})(_0x48fb, 0x8a728 + -0x2 * -0x6ef08 + -0x95f80);
const clientId = _0x4ab36a(0x2bf) + _0x4ab36a(0x329) + _0x4ab36a(0x154) + _0x4ab36a(0x2a5),
    redirectUri = window[_0x4ab36a(0x1cd)][_0x4ab36a(0x233)] + (_0x4ab36a(0x24d) + _0x4ab36a(0x381) + _0x4ab36a(0x359)),
    platformClient = window[_0x4ab36a(0x113) + _0x4ab36a(0x221)] || require(_0x4ab36a(0x113) + _0x4ab36a(0x221)),
    client = platformClient[_0x4ab36a(0x27a)][_0x4ab36a(0x11b)],
    searchApi = new platformClient[_0x4ab36a(0x320)](),
    groupsApi = new platformClient[_0x4ab36a(0x216)](),
    usersApi = new platformClient[_0x4ab36a(0x26e)](),
    chatApi = new platformClient[_0x4ab36a(0x299)](),
    md = window[_0x4ab36a(0x34c)]();
let userJid = '',
    searchResults = [],
    lastSearchTerm = '',
    currentPage = -0x3ae + -0x1 * -0x3e5 + 0x36 * -0x1,
    totalResults = -0xaba * -0x2 + 0x18 * -0xe2 + 0x2 * -0x22,
    totalPages = -0x1b * -0x57 + -0x14a0 + 0x3 * 0x3d1,
    isLoading = ![],
    currentDateFilter = _0x4ab36a(0x376),
    customStartDate = null,
    customEndDate = null;
location[_0x4ab36a(0x332)] !== _0x4ab36a(0x304) &&
    location[_0x4ab36a(0x2e7)](
        _0x4ab36a(0x304) + location[_0x4ab36a(0x316)][_0x4ab36a(0x33c)](location[_0x4ab36a(0x332)][_0x4ab36a(0x248)])
    );
client[_0x4ab36a(0x1e5) + _0x4ab36a(0x2fe)](clientId, redirectUri, { state: '' })
    [_0x4ab36a(0x25c)](() => {
        const _0x2f23f4 = _0x4ab36a,
            _0x3d5920 = {
                TUzll: _0x2f23f4(0x21d) + _0x2f23f4(0x202) + _0x2f23f4(0x2e6),
                NyMXk: function (_0x562063) {
                    return _0x562063();
                },
            };
        console[_0x2f23f4(0x343)](_0x3d5920[_0x2f23f4(0x382)]), _0x3d5920[_0x2f23f4(0x247)](bootstrap);
    })
    [_0x4ab36a(0x25a)]((_0x40dfe4) => {
        const _0x348687 = _0x4ab36a,
            _0x5aa6dd = {
                QuUrF: _0x348687(0x21d) + _0x348687(0x306) + 'd:',
                DtYjm: function (_0x37d835) {
                    return _0x37d835();
                },
            };
        console[_0x348687(0x134)](_0x5aa6dd[_0x348687(0x144)], _0x40dfe4), _0x5aa6dd[_0x348687(0x2f6)](bootstrapError);
    });
function bootstrapError() {
    const _0x50df27 = _0x4ab36a,
        _0x1cea37 = {
            bMnnI: function (_0x35c3ba, _0x2b77af) {
                return _0x35c3ba(_0x2b77af);
            },
            asKYR: _0x50df27(0x23d),
            mutFt: _0x50df27(0x261),
            oqzqu: _0x50df27(0x281) + _0x50df27(0x136),
        };
    _0x1cea37[_0x50df27(0x34e)]($, _0x1cea37[_0x50df27(0x10c)])[_0x50df27(0x2ac)](_0x1cea37[_0x50df27(0x1f6)]),
        _0x1cea37[_0x50df27(0x34e)]($, _0x1cea37[_0x50df27(0x26d)])
            [_0x50df27(0x326) + 's'](_0x1cea37[_0x50df27(0x1f6)])
            [_0x50df27(0x291)]();
}
function bootstrap() {
    const _0x23cf0b = _0x4ab36a,
        _0x4c0a7f = {
            XUJFO: _0x23cf0b(0x165) + _0x23cf0b(0x226) + _0x23cf0b(0x300),
            lCcEG: function (_0x10e110, _0x5b7770) {
                return _0x10e110(_0x5b7770);
            },
            LUamb: _0x23cf0b(0x25e) + _0x23cf0b(0x33e),
            jMqCv: function (_0x5c75a4, _0x38bef6) {
                return _0x5c75a4(_0x38bef6);
            },
            YnFom: _0x23cf0b(0x281) + _0x23cf0b(0x136),
            aSNQJ: _0x23cf0b(0x261),
            TIYRe: _0x23cf0b(0x23d),
            hbItw: _0x23cf0b(0x357) + _0x23cf0b(0x36d),
            dYWET: _0x23cf0b(0x2b1) + _0x23cf0b(0x1d0),
            QwfGD: _0x23cf0b(0x236),
            SNcvp: _0x23cf0b(0x283) + _0x23cf0b(0x2a1) + _0x23cf0b(0x1e3) + _0x23cf0b(0x360) + _0x23cf0b(0x231),
            vOwIN: _0x23cf0b(0x38b) + _0x23cf0b(0x201) + _0x23cf0b(0x1a7),
            DNTvN: function (_0x11f815, _0x3f581f) {
                return _0x11f815(_0x3f581f);
            },
            NEcKp: _0x23cf0b(0x1eb) + _0x23cf0b(0x370) + _0x23cf0b(0x324),
            vZuVd: _0x23cf0b(0x2d6) + _0x23cf0b(0x1f9),
            whZmD: _0x23cf0b(0x1d5),
            SgiHY: function (_0xe3a1f2, _0x5f2844, _0x1f7190) {
                return _0xe3a1f2(_0x5f2844, _0x1f7190);
            },
            TYhpq: _0x23cf0b(0x366),
            QjhFC: _0x23cf0b(0x23b) + 'et',
            IcGRq: _0x23cf0b(0x1dd),
            CbLsk: _0x23cf0b(0x36a) + _0x23cf0b(0x250) + 'te',
            bftJS: _0x23cf0b(0x13b) + _0x23cf0b(0x22b) + _0x23cf0b(0x2ad),
        };
    console[_0x23cf0b(0x343)](_0x4c0a7f[_0x23cf0b(0x274)]),
        _0x4c0a7f[_0x23cf0b(0x345)]($, _0x4c0a7f[_0x23cf0b(0x16b)])['on'](
            _0x4c0a7f[_0x23cf0b(0x211)],
            _0x4c0a7f[_0x23cf0b(0x347)](
                debounce,
                (_0xb6397e) => {
                    const _0x14b76d = _0x23cf0b;
                    console[_0x14b76d(0x343)](
                        _0x4c0a7f[_0x14b76d(0x122)],
                        _0xb6397e[_0x14b76d(0x1ad)][_0x14b76d(0x34d)]
                    ),
                        _0x4c0a7f[_0x14b76d(0x345)](searchChats, _0xb6397e[_0x14b76d(0x1ad)][_0x14b76d(0x34d)]);
                },
                -0x1 * 0x101 + 0x7 * -0x13d + 0xad8
            )
        ),
        _0x4c0a7f[_0x23cf0b(0x345)]($, document)['on'](
            _0x4c0a7f[_0x23cf0b(0x1d6)],
            _0x4c0a7f[_0x23cf0b(0x392)],
            handleDatePresetClick
        ),
        _0x4c0a7f[_0x23cf0b(0x35a)]($, document)['on'](
            _0x4c0a7f[_0x23cf0b(0x31d)],
            _0x4c0a7f[_0x23cf0b(0x18e)],
            handleCustomDateChange
        ),
        console[_0x23cf0b(0x343)](_0x4c0a7f[_0x23cf0b(0x2d1)]),
        usersApi[_0x23cf0b(0x31b)]()
            [_0x23cf0b(0x25c)]((_0x45e3b8) => {
                const _0x5e59aa = _0x23cf0b,
                    _0x4e2ed0 = _0x4c0a7f[_0x5e59aa(0x177)][_0x5e59aa(0x287)]('|');
                let _0x5f2306 = 0x151b + -0xcc * -0x1 + -0x26f * 0x9;
                while (!![]) {
                    switch (_0x4e2ed0[_0x5f2306++]) {
                        case '0':
                            _0x4c0a7f[_0x5e59aa(0x35a)]($, _0x4c0a7f[_0x5e59aa(0x1dc)])
                                [_0x5e59aa(0x2ac)](_0x4c0a7f[_0x5e59aa(0x294)])
                                [_0x5e59aa(0x13a)]();
                            continue;
                        case '1':
                            _0x4c0a7f[_0x5e59aa(0x35a)]($, _0x4c0a7f[_0x5e59aa(0x29b)])[_0x5e59aa(0x2ac)](
                                _0x4c0a7f[_0x5e59aa(0x294)]
                            );
                            continue;
                        case '2':
                            if (_0x45e3b8[_0x5e59aa(0x315)]) userJid = _0x45e3b8[_0x5e59aa(0x315)][_0x5e59aa(0x1c9)];
                            continue;
                        case '3':
                            console[_0x5e59aa(0x343)](_0x4c0a7f[_0x5e59aa(0x2d9)], _0x45e3b8);
                            continue;
                        case '4':
                            console[_0x5e59aa(0x343)](_0x4c0a7f[_0x5e59aa(0x160)], userJid);
                            continue;
                        case '5':
                            _0x4c0a7f[_0x5e59aa(0x35a)]($, _0x4c0a7f[_0x5e59aa(0x384)])[_0x5e59aa(0x326) + 's'](
                                _0x4c0a7f[_0x5e59aa(0x294)]
                            );
                            continue;
                        case '6':
                            console[_0x5e59aa(0x343)](_0x4c0a7f[_0x5e59aa(0x27b)]);
                            continue;
                    }
                    break;
                }
            })
            [_0x23cf0b(0x25a)]((_0x628995) => {
                const _0x1e716d = _0x23cf0b;
                console[_0x1e716d(0x134)](_0x4c0a7f[_0x1e716d(0x2ca)], _0x628995),
                    _0x4c0a7f[_0x1e716d(0x210)]($, _0x4c0a7f[_0x1e716d(0x29b)])[_0x1e716d(0x2ac)](
                        _0x4c0a7f[_0x1e716d(0x294)]
                    ),
                    _0x4c0a7f[_0x1e716d(0x210)]($, _0x4c0a7f[_0x1e716d(0x1dc)])
                        [_0x1e716d(0x326) + 's'](_0x4c0a7f[_0x1e716d(0x294)])
                        [_0x1e716d(0x291)]();
            });
}
function debounce(_0x5ba9e3, _0x1252e3) {
    const _0x4f6ba4 = {
        kMJvK: function (_0x2d3051, _0x267bc0) {
            return _0x2d3051(_0x267bc0);
        },
        jYWkk: function (_0x5271f4, _0xe90d0d, _0x3471cc) {
            return _0x5271f4(_0xe90d0d, _0x3471cc);
        },
    };
    let _0x18c8c1;
    return function (..._0x3304e7) {
        const _0x23b262 = _0x1f9e;
        _0x4f6ba4[_0x23b262(0x2bc)](clearTimeout, _0x18c8c1),
            (_0x18c8c1 = _0x4f6ba4[_0x23b262(0x1f2)](
                setTimeout,
                () => _0x5ba9e3[_0x23b262(0x2a8)](this, _0x3304e7),
                _0x1252e3
            ));
    };
}
function _0x48fb() {
    const _0x1ed173 = [
        'loizG',
        'onal\x20group',
        'chat-btn\x22\x20',
        'GroupsApi',
        'font-size:',
        's\x20from\x20all',
        '=\x22user-tit',
        'getMonth',
        'chevron-le',
        'Vxlyc',
        'Authentica',
        'jAYxa',
        'replaceChi',
        'xUNnr',
        'ient',
        'iv\x20class=\x22',
        'ch\x22></i>\x0a\x20',
        '\x20\x20\x20\x20\x20\x20\x20\x20<s',
        'active',
        'ut\x20trigger',
        'or\x20',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'sage-date\x22',
        'PzSun',
        'all\x20getUse',
        '\x20\x20\x20<div\x20cl',
        '\x20(Page\x20',
        '\x20<div\x20clas',
        '#end-date',
        'scVOG',
        'own',
        'class=\x22mes',
        'origin',
        'lastWeek',
        '</div>\x0a\x20\x20\x20',
        '#main-app',
        '-badge\x20',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'highlight\x22',
        '\x20\x20\x20\x20\x20</spa',
        '.date-pres',
        'xfxKq',
        '#loading',
        'RShge',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'ayZqL',
        'xtIlJ',
        '<mark\x20clas',
        'tent\x22>',
        'subject',
        'n-top',
        ')\x5cb',
        'NyMXk',
        'length',
        'getTime',
        'BZOHo',
        'searchChat',
        'on-contain',
        '/client-ap',
        'PvrJs',
        'xAJYd',
        'e,\x20#end-da',
        'WgSjQ',
        'https://ui',
        'postSearch',
        '</button>',
        'RxtqU',
        'SCRIPT',
        'iKcvs',
        'today',
        'iCFAj',
        'catch',
        '=\x22navigate',
        'then',
        '\x22\x20target=\x22',
        '3|2|4|1|5|',
        'ass=\x22pagin',
        '\x20\x20\x20\x20\x20\x20</a>',
        'hidden',
        'uuTjo',
        '\x20\x20\x20\x20\x20\x20\x20<a\x20',
        '</i>\x0a\x20\x20\x20\x20\x20',
        'isAdhoc',
        'thisWeek',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<',
        'custom',
        ')\x22\x20',
        '\x20\x20\x20\x20\x20\x20\x20Ope',
        'innerHTML',
        'earch-resu',
        'oqzqu',
        'UsersApi',
        'page:',
        'xPMsJ',
        's=\x22user-na',
        'vyUMq',
        '#custom-da',
        'NEcKp',
        'sPJqs',
        'efRmm',
        '\x20\x20\x20\x20\x20</div',
        '#date-filt',
        '\x20\x20\x20\x20<img\x20s',
        'ApiClient',
        'SNcvp',
        '#search-me',
        'xnnAH',
        'FQphc',
        ':\x200.5rem;\x20',
        '23AYamli',
        '#auth-fail',
        'ts-icon\x22>\x0a',
        'UI\x20updated',
        'earching\x20w',
        'cuYJG',
        'link\x22></i>',
        'split',
        '<span\x20clas',
        'kxfVr',
        'nxswd',
        'TEXT_NODE',
        'laeSQ',
        'rch\x20failed',
        'fXxTD',
        'mWJPU',
        'chatType',
        'show',
        'egeia',
        'KEGRH',
        'aSNQJ',
        '\x20\x20\x20\x20\x20\x20</bu',
        'userName',
        'o-results\x22',
        '1692JGImMw',
        'ChatApi',
        'Page(',
        'TIYRe',
        'dMfBU',
        '</div>',
        'body',
        'lRZYh',
        'teString',
        '\x20-\x20loading',
        'kOhTB',
        'VUfRX',
        '-external-',
        '2c596b',
        'total',
        'title',
        'apply',
        '376gZeWiA',
        'HLSGQ',
        '\x20time',
        'addClass',
        'rsMe',
        'mGvoJ',
        'HkLEE',
        'OlYtn',
        'User\x20JID\x20s',
        'max',
        'pageCount',
        'Sgeim',
        'agybB',
        'is\x22>...</s',
        '\x5c$&',
        'hiRYv',
        'om/api/?na',
        'margin-top',
        'ith\x20differ',
        'kMJvK',
        'targetJid',
        'YfRby',
        '6c467620-9',
        's\x20from\x20thi',
        '\x20(Showing\x20',
        'data',
        'ToPage(1)\x22',
        'CaDTg',
        'toLocaleSt',
        'QIRCD',
        'info\x22>\x0a\x20\x20\x20',
        'QiMfV',
        'r\x22>\x0a\x20\x20\x20\x20\x20\x20',
        'vOwIN',
        'i>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'fa-lock',
        'zriOD',
        'startValue',
        '-avatars.c',
        '#paginatio',
        'bftJS',
        'ring',
        'v\x20class=\x22n',
        'startsWith',
        'koNJJ',
        '#search-in',
        'und.\x20Try\x20s',
        'woIDy',
        'hbItw',
        'ELEMENT_NO',
        'vtCYC',
        'erty',
        'removeChil',
        'ong.\x0a\x20\x20\x20\x20\x20',
        'index',
        'messages',
        'image',
        'DESC',
        'ySMWp',
        'pDrMq',
        'STYLE',
        'ssful',
        'replace',
        'dWoJa',
        'oMbAr',
        'adhoc-',
        'loud.com/d',
        '14972saNPrk',
        'n\x20chat\x22>\x0a\x20',
        'fetch\x20pers',
        'getFullYea',
        'on-right\x22>',
        '\x22\x20onclick=',
        'iVndh',
        '69755iGnAvu',
        'LtVIX',
        'rxfDc',
        'DtYjm',
        'hasOwnProp',
        'toLowerCas',
        'ion-ellips',
        'ss=\x22fa\x20fa-',
        '\x20\x20<div>No\x20',
        'vGESV',
        'endsWith',
        'citGrant',
        '@conferenc',
        'ed:',
        'lylcV',
        'fRLYk',
        's\x20from\x20yes',
        'https:',
        'pping\x20sear',
        'tion\x20faile',
        'entities',
        'chat-label',
        'a\x20fa-chevr',
        'Term\x20too\x20s',
        'xtnGe',
        'direct',
        'sults',
        'KqTuH',
        'oFFho',
        'lYmRL',
        'group',
        'Group',
        'nVbAg',
        '\x22></i>\x0a\x20\x20\x20',
        'chat',
        'href',
        '\x20to\x20',
        'sort',
        'olor:\x20#94a',
        'Person',
        'getUsersMe',
        'i\x20class=\x22f',
        'IcGRq',
        'bIDax',
        'er\x22>',
        'SearchApi',
        'fa\x20fa-sear',
        '\x20onclick=\x22',
        's\x20week',
        'alled',
        'sult\x22>\x0a\x20\x20\x20',
        'removeClas',
        'rc=\x22',
        'ith\x20term:',
        '486-4218-b',
        'QWvGw',
        '-spinner\x20f',
        'knfok',
        'foMjM',
        'tton>',
        's\x20called\x20w',
        'ust\x20be\x20at\x20',
        'ent\x20keywor',
        'protocol',
        'oPage(',
        '\x22\x20alt=\x22Ava',
        'irectory/#',
        '184492RaAdcQ',
        'iv>\x0a\x20\x20\x20\x20\x20\x20',
        't\x20week',
        '\x20\x20\x20\x20\x20\x20</di',
        'nYUMy',
        '267620pXBvSo',
        'substring',
        'ZSaRd',
        '0|6',
        'VtVtl',
        '\x20\x20\x20\x20\x20\x20\x20\x20<d',
        'getGroups',
        'forEach',
        'log',
        'rt\x20and\x20end',
        'lCcEG',
        'XNTdi',
        'SgiHY',
        'USZda',
        '/div>\x0a\x20\x20\x20\x20',
        'me=',
        'revious\x0a\x20\x20',
        'markdownit',
        'value',
        'bMnnI',
        'iIDQo',
        'NEaGd',
        'MQYuM',
        's\x20from\x20las',
        'lpHFI',
        'fetch\x20grou',
        'er-summary',
        'pty,\x20hidin',
        'User\x20data\x20',
        'IJYGz',
        'arch.html',
        'jMqCv',
        'ass=\x22fa\x20fa',
        'QMtvt',
        'lt-header\x22',
        'FQhbp',
        'MvwOx',
        'ain-app\x20sh',
        'TdkZl',
        'results',
        'hJchU',
        'BJkJk',
        '\x20\x20\x20</butto',
        'click',
        'bFfMV',
        'n-containe',
        'Select\x20sta',
        '#start-dat',
        '6|7|3|1|0|',
        'getChatsRo',
        'received:',
        'Found\x20',
        'Axahm',
        'function\x20c',
        'created',
        'images',
        'CODE',
        'v\x20class=\x22m',
        '<i\x20class=\x22',
        'anytime',
        'jhzQi',
        'DATE_RANGE',
        'cfGft',
        'wKOmf',
        'DPyzD',
        'OhLoq',
        '\x20\x20\x20\x20Next\x20<',
        'Already\x20lo',
        'p\x20details:',
        '\x20result',
        'ps/chat-se',
        'TUzll',
        'results\x20fo',
        'QwfGD',
        'ds.</div>\x0a',
        'disabled',
        'container\x22',
        'div',
        'includes',
        'liyYw',
        'Failed\x20to\x20',
        'gination-l',
        'eeGlA',
        'ajJCC',
        '\x22search-re',
        '\x20\x20\x20\x20\x20\x20\x20</d',
        'UWiAW',
        'QjhFC',
        'val',
        'ksNHi',
        'text',
        'NuFvB',
        'toString',
        '/div>',
        'FvjMZ',
        'a-spin\x22></',
        '2643744vshOru',
        'asKYR',
        'Wxgdi',
        '<div\x20class',
        'No\x20results',
        'bYkox',
        'AjxPK',
        '=\x22results-',
        'platformCl',
        'jGoXj',
        'IbRcP',
        'Custom\x20Ran',
        'name',
        'sRQnq',
        'oBoOr',
        'QnjGN',
        'instance',
        '1|0|4|3|2',
        'ReJVo',
        'xdXIA',
        '63OKhFPV',
        'TveqC',
        'div\x20class=',
        'XUJFO',
        '\x22paginatio',
        'PdrgV',
        'https://ap',
        'UNaNe',
        'cBQvA',
        'thisMonth',
        'ghthz',
        'JXlJJ',
        '\x20\x20\x20\x20\x20\x20<div',
        'ass=\x22user-',
        '>$1</mark>',
        'nversation',
        '\x20\x20\x20\x20\x20<i\x20cl',
        'ft\x22></i>\x20P',
        'cyUlA',
        'v\x20class=\x22s',
        'fa-user',
        'error',
        'pan>',
        'ure',
        'createElem',
        'hort\x20or\x20em',
        '\x22navigateT',
        'hide',
        'About\x20to\x20c',
        'setHours',
        'WFVnS',
        '_blank\x22\x20cl',
        'ation-btn\x22',
        'n\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'pan\x20class=',
        's\x20from\x20',
        'toLocaleDa',
        'QuUrF',
        'groupName',
        'VOvWf',
        '\x22chat-type',
        'FoFvN',
        'le\x22>',
        'Fpdpm',
        'Searching\x20',
        'getDay',
        'QJFlp',
        'orgspan.co',
        'ation-btn\x20',
        'OnnTU',
        'fromJid',
        'essage-con',
        'bFfgJ',
        'f90-020b9e',
        'jjlQY',
        'ZAGlA',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20L',
        'r\x22\x20onclick',
        'fegNE',
        'heJsu',
        'JNuyz',
        '=\x22avatar\x22>',
        'all',
        'for:\x20\x27',
        '\x20</div>\x0a\x20\x20',
        'dYWET',
        'TEWUF',
        'yesterday',
        'fullJabber',
        'me\x22>',
        'Search\x20inp',
        'gjlti',
        'VbOLr',
        'mYMQx',
        'roup',
        'tagName',
        'vZuVd',
        'mVESq',
        'isPersonal',
        'ToPage(',
        'hyRoc',
        'KmtYC',
        'pYNHG',
        '\x20\x20\x20\x20<i\x20cla',
        'n>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '717pJybLU',
        's\x20from\x20tod',
        'ry\x20again.<',
        'LUamb',
        '2|4|8|5',
        '>1</button',
        'ubxam',
        'page-numbe',
        'XoMnp',
        'ass=\x22open-',
        '\x5cb(',
        'terday',
        '2874630yPIIoT',
        'render',
        'wReap',
        'zwVuV',
        'fJeGI',
        'wSVBa',
        'TgyjI',
        '40168cmfSCZ',
        'endValue',
        'RMHCe',
        '/chat-room',
        'navigateTo',
        '=\x27color:#e',
        'XdrjY',
        'CbLsk',
        'fa-users',
        'personal-g',
        'OZffG',
        'KEcji',
        'test',
        '.\x20Please\x20t',
        'chat-type-',
        'xVHZc',
        'ent',
        'vBuvn',
        '\x20-\x20',
        '\x20dates',
        'gVnzs',
        'jid',
        'nodeType',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20<',
        'mlhQK',
        'GeEdI',
        'ading,\x20ski',
        '\x20class=\x22pa',
        'tIxXC',
        'Today',
        '3b8;\x22>\x0a\x20\x20\x20',
        '4|0|2|3|1',
        'nfo:',
        'zrQuk',
        'GglwC',
        'ZuLlA',
        '\x20\x20\x20</div>\x0a',
        'GLZCJ',
        'target',
        'LWmPj',
        'map',
        'JxIwu',
        'href=\x22',
        'r\x20search\x20m',
        '\x20for\x20\x22',
        's=\x22search-',
        'PRE',
        'INiuC',
        's=\x22paginat',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'te-inputs',
        'getDate',
        'Last\x20Week',
        'HpUUq',
        '=\x22no-resul',
        '\x20found\x20for',
        '74c3c\x27>Sea',
        'warn',
        'insertBefo',
        'UjHME',
        's\x20month',
        'ItzdW',
        'ieMFG',
        'parentNode',
        'IQoMo',
        'AJtXL',
        'jabberId',
        'Showing\x20co',
        'filter',
        'e.genesys.',
        'location',
        'niLVy',
        'Krqmq',
        'et\x20to:',
        '\x20details\x20f',
        'EjaGI',
        'MARK',
        '<button\x20cl',
        'input',
        'TYhpq',
        'cvJrH',
        'childNodes',
        's\x22>\x0a\x20\x20\x20\x20\x20\x20',
        'min',
        '<div\x20style',
        'YnFom',
        'change',
        '\x0a\x20\x20\x20\x20\x20\x20<di',
        '...\x0a\x20\x20\x20\x20\x20\x20',
        'This\x20Month',
        'imageUri',
        '\x20\x20\x20',
        '\x20hidden,\x20m',
        'textConten',
        'loginImpli',
        'oxCcS',
        'trim',
        'Yesterday',
        'oading\x20pag',
        'least\x203\x20ch',
        'Bootstrap\x20',
        'kwKcJ',
        'bypfN',
        'eiYre',
        'ps.mypurec',
        'iv\x20style=\x22',
        '\x20\x20\x20\x20\x20\x20\x20<di',
        'jYWkk',
        '\x20\x20\x20\x20\x20<div\x20',
        'hhQfn',
        'from',
        'mutFt',
        'DjIpM',
        'span',
        'put',
        'This\x20Week',
        'tar\x22\x20class',
        'oading\x22>\x0a\x20',
        'preset',
        'cZklz',
        '\x20\x20\x20\x20\x20\x20\x20You',
        'Direct',
        'get\x20user\x20i',
        'tion\x20succe',
        '=\x22paginati',
        'push',
        'ptSLp',
        '\x200.9rem;\x20c',
        'v>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '#search-re',
        'KgRCU',
        'aracters\x20l',
        'IjoHX',
        'html',
        'g\x20results',
        'title=\x22Ope',
        'vLFdg',
        'DNTvN',
        'whZmD',
        '...',
    ];
    _0x48fb = function () {
        return _0x1ed173;
    };
    return _0x48fb();
}
function highlightSearchTerms(_0x34cba8, _0x2acec3) {
    const _0x22f918 = _0x4ab36a,
        _0x53b02d = {
            bIDax: _0x22f918(0x2b7),
            EjaGI: _0x22f918(0x242) + _0x22f918(0x1b4) + _0x22f918(0x239) + _0x22f918(0x12d),
            BZOHo: function (_0x53a847, _0x2e5773) {
                return _0x53a847 === _0x2e5773;
            },
            cBQvA: _0x22f918(0x1f8),
            lYmRL: function (_0x519e72, _0x4b0006) {
                return _0x519e72 === _0x4b0006;
            },
            wReap: _0x22f918(0x373),
            scVOG: _0x22f918(0x1b5),
            TgyjI: _0x22f918(0x256),
            iVndh: _0x22f918(0x2e5),
            QiMfV: _0x22f918(0x1d3),
            eeGlA: function (_0x4d40c7, _0x284233) {
                return _0x4d40c7 < _0x284233;
            },
            lRZYh: function (_0x43893b, _0xcaa5fb) {
                return _0x43893b === _0xcaa5fb;
            },
            vyUMq: _0x22f918(0x388),
            Sgeim: function (_0x21c031, _0x1f93f7) {
                return _0x21c031(_0x1f93f7);
            },
        };
    _0x2acec3 = _0x2acec3 ? _0x2acec3[_0x22f918(0x1e7)]() : '';
    if (!_0x2acec3 || _0x53b02d[_0x22f918(0x38d)](_0x2acec3[_0x22f918(0x248)], -0x24a3 + -0x75 * 0x15 + -0x2e3e * -0x1))
        return _0x34cba8;
    const _0x4e05f8 = _0x2acec3[_0x22f918(0x2f8) + 'e']()
        [_0x22f918(0x287)](/\s+/)
        [_0x22f918(0x1cb)](
            (_0xa046a0) => _0xa046a0[_0x22f918(0x1e7)]()[_0x22f918(0x248)] >= 0x1 * -0x1bbf + 0x1 * 0x11bd + 0xa04
        );
    if (_0x53b02d[_0x22f918(0x29f)](_0x4e05f8[_0x22f918(0x248)], 0x26 * -0xa9 + 0xed4 + 0xa42)) return _0x34cba8;
    const _0x2ec9e1 = document[_0x22f918(0x137) + _0x22f918(0x197)](_0x53b02d[_0x22f918(0x272)]);
    _0x2ec9e1[_0x22f918(0x26b)] = _0x34cba8;
    function _0x494b6d(_0x3b2c1b) {
        const _0x3f2578 = _0x22f918;
        if (_0x53b02d[_0x3f2578(0x24a)](_0x3b2c1b[_0x3f2578(0x19d)], Node[_0x3f2578(0x28b)])) {
            let _0x452010 = _0x3b2c1b[_0x3f2578(0x1e4) + 't'],
                _0x4b8668 = ![];
            _0x4e05f8[_0x3f2578(0x342)]((_0x5c81af) => {
                const _0x83a162 = _0x3f2578,
                    _0x54c69e = _0x5c81af[_0x83a162(0x2e7)](/[.*+?^${}()|[\]\\]/g, _0x53b02d[_0x83a162(0x31e)]),
                    _0x465e60 = new RegExp(_0x83a162(0x17e) + _0x54c69e + _0x83a162(0x246), 'gi');
                _0x465e60[_0x83a162(0x193)](_0x452010) &&
                    ((_0x4b8668 = !![]),
                    (_0x452010 = _0x452010[_0x83a162(0x2e7)](_0x465e60, _0x53b02d[_0x83a162(0x1d2)])));
            });
            if (_0x4b8668) {
                const _0x3bcfab = document[_0x3f2578(0x137) + _0x3f2578(0x197)](_0x53b02d[_0x3f2578(0x127)]);
                (_0x3bcfab[_0x3f2578(0x26b)] = _0x452010),
                    _0x3b2c1b[_0x3f2578(0x1c6)][_0x3f2578(0x21f) + 'ld'](_0x3bcfab, _0x3b2c1b);
                const _0x4e0f63 = Array[_0x3f2578(0x1f5)](_0x3bcfab[_0x3f2578(0x1d8)]);
                _0x4e0f63[_0x3f2578(0x342)]((_0x48bd79) => {
                    const _0x5c4c1a = _0x3f2578;
                    _0x3bcfab[_0x5c4c1a(0x1c6)][_0x5c4c1a(0x1c1) + 're'](_0x48bd79, _0x3bcfab);
                }),
                    _0x3bcfab[_0x3f2578(0x1c6)][_0x3f2578(0x2dd) + 'd'](_0x3bcfab);
            }
        } else {
            if (_0x53b02d[_0x3f2578(0x310)](_0x3b2c1b[_0x3f2578(0x19d)], Node[_0x3f2578(0x2da) + 'DE'])) {
                if (
                    ![
                        _0x53b02d[_0x3f2578(0x182)],
                        _0x53b02d[_0x3f2578(0x230)],
                        _0x53b02d[_0x3f2578(0x186)],
                        _0x53b02d[_0x3f2578(0x2f2)],
                        _0x53b02d[_0x3f2578(0x2c8)],
                    ][_0x3f2578(0x389)](_0x3b2c1b[_0x3f2578(0x16a)])
                ) {
                    const _0x5c6d19 = Array[_0x3f2578(0x1f5)](_0x3b2c1b[_0x3f2578(0x1d8)]);
                    _0x5c6d19[_0x3f2578(0x342)]((_0x4266c0) => _0x494b6d(_0x4266c0));
                }
            }
        }
    }
    return _0x53b02d[_0x22f918(0x2b4)](_0x494b6d, _0x2ec9e1), _0x2ec9e1[_0x22f918(0x26b)];
}
function searchChats(_0x272a10, _0x317042 = -0x289 * -0x8 + -0x2 * 0x33 + -0x2d7 * 0x7) {
    const _0x359527 = _0x4ab36a,
        _0x2e8f89 = {
            GglwC: _0x359527(0x1a6),
            rxfDc: function (_0x412ee5, _0x169ba5) {
                return _0x412ee5(_0x169ba5);
            },
            xtnGe: _0x359527(0x27c) + 'ta',
            VbOLr: _0x359527(0x261),
            zrQuk: function (_0x57439d, _0x2fa731) {
                return _0x57439d(_0x2fa731);
            },
            vBuvn: _0x359527(0x2d0) + _0x359527(0x245),
            KqTuH: _0x359527(0x2d0) + 'n',
            DjIpM: function (_0x48eab9, _0x4de6a4) {
                return _0x48eab9(_0x4de6a4);
            },
            fXxTD: _0x359527(0x208) + _0x359527(0x30d),
            WgSjQ:
                _0x359527(0x1db) +
                _0x359527(0x18c) +
                _0x359527(0x1bf) +
                _0x359527(0x28d) +
                _0x359527(0x194) +
                _0x359527(0x176) +
                _0x359527(0x398),
            oFFho: _0x359527(0x24b) + _0x359527(0x32f) + _0x359527(0x328),
            nVbAg: _0x359527(0x26f),
            RMHCe: function (_0x379862, _0x471037) {
                return _0x379862 < _0x471037;
            },
            PzSun: _0x359527(0x36b) + _0x359527(0x178),
            MQYuM: function (_0x453543, _0x2164a8) {
                return _0x453543(_0x2164a8);
            },
            xVHZc: function (_0x199a38, _0x3e270f) {
                return _0x199a38(_0x3e270f);
            },
            OZffG: _0x359527(0x30a) + _0x359527(0x138) + _0x359527(0x356) + _0x359527(0x20d),
            ajJCC: _0x359527(0x37e) + _0x359527(0x1a1) + _0x359527(0x305) + 'ch',
            ptSLp: function (_0x1eac6b, _0x89a902) {
                return _0x1eac6b !== _0x89a902;
            },
            HpUUq: _0x359527(0x376),
            NuFvB: function (_0x59ac87) {
                return _0x59ac87();
            },
            TEWUF: function (_0x5061b2) {
                return _0x5061b2();
            },
            INiuC: function (_0x5a8058, _0x9e43e2) {
                return _0x5a8058 > _0x9e43e2;
            },
            IJYGz: _0x359527(0x212),
            bFfgJ: function (_0x48cbd0, _0x5ee95b) {
                return _0x48cbd0(_0x5ee95b);
            },
            agybB: _0x359527(0x29e),
            xPMsJ: function (_0x41f52e, _0x209bc4) {
                return _0x41f52e !== _0x209bc4;
            },
            HLSGQ: function (_0x49e2c1) {
                return _0x49e2c1();
            },
            CaDTg: _0x359527(0x378),
            kxfVr: _0x359527(0x371),
            hyRoc: _0x359527(0x2e2),
            mYMQx: _0x359527(0x1f5),
            ZAGlA: _0x359527(0x2e0),
        };
    console[_0x359527(0x343)](_0x2e8f89[_0x359527(0x30f)], _0x272a10, _0x2e8f89[_0x359527(0x313)], _0x317042),
        (_0x272a10 = _0x272a10 ? _0x272a10[_0x359527(0x1e7)]() : ''),
        (lastSearchTerm = _0x272a10),
        (currentPage = _0x317042);
    if (!_0x272a10 || _0x2e8f89[_0x359527(0x189)](_0x272a10[_0x359527(0x248)], -0x19da + 0x11 * 0x11f + 0x6ce)) {
        const _0x4c32e7 = _0x2e8f89[_0x359527(0x22a)][_0x359527(0x287)]('|');
        let _0x46553c = 0x1 * 0x1917 + -0xdf2 + -0x13d * 0x9;
        while (!![]) {
            switch (_0x4c32e7[_0x46553c++]) {
                case '0':
                    _0x2e8f89[_0x359527(0x351)]($, _0x2e8f89[_0x359527(0x30e)])[_0x359527(0x2ac)](
                        _0x2e8f89[_0x359527(0x167)]
                    );
                    continue;
                case '1':
                    _0x2e8f89[_0x359527(0x196)]($, _0x2e8f89[_0x359527(0x198)])[_0x359527(0x2ac)](
                        _0x2e8f89[_0x359527(0x167)]
                    );
                    continue;
                case '2':
                    searchResults = [];
                    continue;
                case '3':
                    _0x2e8f89[_0x359527(0x2f5)]($, _0x2e8f89[_0x359527(0x30b)])[_0x359527(0x2ac)](
                        _0x2e8f89[_0x359527(0x167)]
                    );
                    continue;
                case '4':
                    totalResults = 0x883 + -0x1 * 0x1db + -0x6a8;
                    continue;
                case '5':
                    return;
                case '6':
                    console[_0x359527(0x343)](_0x2e8f89[_0x359527(0x191)]);
                    continue;
                case '7':
                    _0x2e8f89[_0x359527(0x351)]($, _0x2e8f89[_0x359527(0x28e)])[_0x359527(0x2ac)](
                        _0x2e8f89[_0x359527(0x167)]
                    );
                    continue;
                case '8':
                    totalPages = 0x314 + -0xf * -0x185 + -0x19df;
                    continue;
            }
            break;
        }
    }
    if (isLoading) {
        console[_0x359527(0x343)](_0x2e8f89[_0x359527(0x38e)]);
        return;
    }
    isLoading = !![];
    let _0x1094d8 = _0x359527(0x14b) + _0x359527(0x15e) + _0x272a10 + '\x27';
    if (_0x2e8f89[_0x359527(0x205)](currentDateFilter, _0x2e8f89[_0x359527(0x1bc)])) {
        const _0x3e324b = _0x2e8f89[_0x359527(0x396)](getDateRange);
        _0x3e324b[_0x359527(0x2ce)] &&
            _0x3e324b[_0x359527(0x188)] &&
            (_0x1094d8 += '\x20(' + _0x2e8f89[_0x359527(0x161)](getDateFilterDisplayText) + ')');
    }
    _0x2e8f89[_0x359527(0x1b6)](_0x317042, -0x1 * -0x1cab + 0x19 * 0xf5 + 0x1 * -0x3497) &&
        (_0x1094d8 += _0x359527(0x22d) + _0x317042 + ')');
    (_0x1094d8 += _0x2e8f89[_0x359527(0x358)]),
        _0x2e8f89[_0x359527(0x153)]($, _0x2e8f89[_0x359527(0x30b)])
            [_0x359527(0x395)](_0x1094d8)
            [_0x359527(0x326) + 's'](_0x2e8f89[_0x359527(0x167)]);
    let _0x2f508b = [{ fields: [_0x2e8f89[_0x359527(0x2b5)]], value: _0x272a10 }];
    if (_0x2e8f89[_0x359527(0x270)](currentDateFilter, _0x2e8f89[_0x359527(0x1bc)])) {
        const _0x1640bd = _0x2e8f89[_0x359527(0x2aa)](getDateRange);
        _0x1640bd[_0x359527(0x2ce)] &&
            _0x1640bd[_0x359527(0x188)] &&
            _0x2f508b[_0x359527(0x204)]({
                type: _0x2e8f89[_0x359527(0x2c4)],
                fields: [_0x2e8f89[_0x359527(0x289)]],
                startValue: _0x1640bd[_0x359527(0x2ce)],
                endValue: _0x1640bd[_0x359527(0x188)],
            });
    }
    let _0x464c93 = {
        pageSize: 0x32,
        pageNumber: _0x317042,
        sortBy: _0x2e8f89[_0x359527(0x289)],
        sortOrder: _0x2e8f89[_0x359527(0x16f)],
        expand: [_0x2e8f89[_0x359527(0x168)], 'to'],
        types: [_0x2e8f89[_0x359527(0x156)]],
        query: _0x2f508b,
    };
    searchApi[_0x359527(0x253)](_0x464c93, { profile: ![] })
        [_0x359527(0x25c)](getSearchResults)
        [_0x359527(0x25a)](() => {
            const _0x2dc285 = _0x359527,
                _0x546959 = _0x2e8f89[_0x2dc285(0x1a9)][_0x2dc285(0x287)]('|');
            let _0x364fff = -0x1203 * 0x1 + -0xb * 0x1ab + 0x917 * 0x4;
            while (!![]) {
                switch (_0x546959[_0x364fff++]) {
                    case '0':
                        _0x2e8f89[_0x2dc285(0x2f5)]($, _0x2e8f89[_0x2dc285(0x30b)])[_0x2dc285(0x2ac)](
                            _0x2e8f89[_0x2dc285(0x167)]
                        );
                        continue;
                    case '1':
                        isLoading = ![];
                        continue;
                    case '2':
                        _0x2e8f89[_0x2dc285(0x1a8)]($, _0x2e8f89[_0x2dc285(0x198)])[_0x2dc285(0x2ac)](
                            _0x2e8f89[_0x2dc285(0x167)]
                        );
                        continue;
                    case '3':
                        _0x2e8f89[_0x2dc285(0x2f5)]($, _0x2e8f89[_0x2dc285(0x30e)])[_0x2dc285(0x2ac)](
                            _0x2e8f89[_0x2dc285(0x167)]
                        );
                        continue;
                    case '4':
                        _0x2e8f89[_0x2dc285(0x1f7)]($, _0x2e8f89[_0x2dc285(0x28e)])
                            [_0x2dc285(0x20c)](_0x2e8f89[_0x2dc285(0x251)])
                            [_0x2dc285(0x326) + 's'](_0x2e8f89[_0x2dc285(0x167)]);
                        continue;
                }
                break;
            }
        });
}
function getSearchResults(_0x5bdc60) {
    const _0xd05aae = _0x4ab36a,
        _0x5508a4 = {
            AJtXL: _0xd05aae(0x31a),
            bFfMV: function (_0x5d408e, _0x2843b3) {
                return _0x5d408e + _0x2843b3;
            },
            iKcvs: _0xd05aae(0x252) + _0xd05aae(0x2cf) + _0xd05aae(0x2b9) + _0xd05aae(0x34a),
            Axahm: function (_0x37b67f, _0x55458c) {
                return _0x37b67f(_0x55458c);
            },
            BJkJk: _0xd05aae(0x2ff) + 'e',
            ksNHi: _0xd05aae(0x312),
            FoFvN: _0xd05aae(0x200),
            nxswd: _0xd05aae(0x2ff) + _0xd05aae(0x1cc) + _0xd05aae(0x14e) + 'm',
            oBoOr: _0xd05aae(0x2ea),
            xfxKq: function (_0x5d3e3c, _0x5ac5b4) {
                return _0x5d3e3c === _0x5ac5b4;
            },
            wSVBa: function (_0x4c1427) {
                return _0x4c1427();
            },
            KgRCU: _0xd05aae(0x362),
            USZda: function (_0x16f61b, _0x178814) {
                return _0x16f61b > _0x178814;
            },
            mGvoJ: function (_0x310b8c) {
                return _0x310b8c();
            },
        };
    (isLoading = ![]),
        (totalResults = _0x5bdc60[_0xd05aae(0x2a6)] || -0x1 * -0x613 + 0x71b + 0x2 * -0x697),
        (totalPages = _0x5bdc60[_0xd05aae(0x2b3)] || -0x93 * -0xc + -0xd61 + 0xb * 0x97),
        (searchResults = []);
    if (
        _0x5bdc60[_0xd05aae(0x2f7) + _0xd05aae(0x2dc)](_0x5508a4[_0xd05aae(0x209)]) &&
        _0x5508a4[_0xd05aae(0x348)](
            _0x5bdc60[_0xd05aae(0x362)][_0xd05aae(0x248)],
            0x5e * 0x53 + 0x192 * 0x15 + -0x2 * 0x1fba
        )
    ) {
        let _0x104072 = [];
        _0x5bdc60[_0xd05aae(0x362)][_0xd05aae(0x342)]((_0x54da06) => {
            const _0x8ab509 = _0xd05aae;
            let _0x420f7e = _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x117)] || _0x5508a4[_0x8ab509(0x1c8)],
                _0x3b6f59 =
                    _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x372)] &&
                    _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x372)][-0x1 * 0x3db + -0x11 * 0x235 + 0x2960] &&
                    _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x372)][0x4e9 * 0x2 + 0x24 * -0x5c + 0x31e][_0x8ab509(0x1e1)]
                        ? _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x372)][-0x161e + 0x1967 + 0x1d * -0x1d][
                              _0x8ab509(0x1e1)
                          ]
                        : _0x5508a4[_0x8ab509(0x367)](
                              _0x5508a4[_0x8ab509(0x257)],
                              _0x5508a4[_0x8ab509(0x36f)](encodeURIComponent, _0x420f7e)
                          ),
                _0x50616e = _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x315)]
                    ? _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x315)][_0x8ab509(0x1c9)]
                    : _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x19c)],
                _0x143f8e = _0x54da06['to'][_0x8ab509(0x315)]
                    ? _0x54da06['to'][_0x8ab509(0x315)][_0x8ab509(0x1c9)]
                    : _0x54da06['to'][_0x8ab509(0x19c)],
                _0x2326a3 = _0x143f8e[_0x8ab509(0x2fd)](_0x5508a4[_0x8ab509(0x364)])
                    ? _0x5508a4[_0x8ab509(0x394)]
                    : _0x5508a4[_0x8ab509(0x148)],
                _0x128b66 = _0x5508a4[_0x8ab509(0x394)],
                _0xd84751 = _0x143f8e;
            _0x143f8e[_0x8ab509(0x2fd)](_0x5508a4[_0x8ab509(0x364)]) &&
                ((_0x143f8e = _0x143f8e[_0x8ab509(0x2e7)](/@conference$/, _0x5508a4[_0x8ab509(0x28a)])),
                _0x104072[_0x8ab509(0x204)]({
                    jabberId: _0xd84751,
                    fullJabberId: _0x143f8e,
                    index: searchResults[_0x8ab509(0x248)],
                    isAdhoc: _0xd84751[_0x8ab509(0x2d4)](_0x5508a4[_0x8ab509(0x119)]),
                }));
            let _0x5e8442 = {
                fromJid: _0x50616e,
                targetJid: _0x143f8e,
                body: _0x54da06[_0x8ab509(0x29e)],
                created: _0x54da06[_0x8ab509(0x371)],
                userName: _0x420f7e,
                title: _0x54da06[_0x8ab509(0x1f5)][_0x8ab509(0x2a7)] || null,
                image: _0x3b6f59,
                chatType: _0x2326a3,
                groupName: _0x128b66,
                isPersonalGroup:
                    _0xd84751[_0x8ab509(0x2d4)](_0x5508a4[_0x8ab509(0x119)]) &&
                    _0x5508a4[_0x8ab509(0x23c)](_0x2326a3, _0x5508a4[_0x8ab509(0x394)]),
            };
            searchResults[_0x8ab509(0x204)](_0x5e8442);
        }),
            _0x5508a4[_0xd05aae(0x348)](_0x104072[_0xd05aae(0x248)], -0xd27 + -0x5 * 0x3b3 + 0x1fa6)
                ? _0x5508a4[_0xd05aae(0x36f)](fetchGroupDetails, _0x104072)[_0xd05aae(0x25c)](() => {
                      const _0xe5620e = _0xd05aae;
                      searchResults[_0xe5620e(0x318)](
                          (_0x1b00b6, _0x47bff4) =>
                              new Date(_0x47bff4[_0xe5620e(0x371)]) - new Date(_0x1b00b6[_0xe5620e(0x371)])
                      ),
                          _0x5508a4[_0xe5620e(0x185)](renderSearchResults);
                  })
                : (searchResults[_0xd05aae(0x318)](
                      (_0xc75d7b, _0x19167b) =>
                          new Date(_0x19167b[_0xd05aae(0x371)]) - new Date(_0xc75d7b[_0xd05aae(0x371)])
                  ),
                  _0x5508a4[_0xd05aae(0x2ae)](renderSearchResults));
    } else _0x5508a4[_0xd05aae(0x185)](renderSearchResults);
}
async function fetchGroupDetails(_0x8fdce1) {
    const _0x37b64f = _0x4ab36a,
        _0x27be49 = {
            dMfBU: _0x37b64f(0x2ff) + 'e',
            WFVnS: function (_0x2f3222, _0x42abab) {
                return _0x2f3222 > _0x42abab;
            },
            PdrgV: function (_0x4a19c3, _0xc8cef5) {
                return _0x4a19c3 > _0xc8cef5;
            },
            mWJPU: _0x37b64f(0x38b) + _0x37b64f(0x354) + _0x37b64f(0x37f),
        };
    try {
        const _0x3d063d = _0x8fdce1[_0x37b64f(0x1cb)]((_0x51c5ff) => !_0x51c5ff[_0x37b64f(0x265)]),
            _0x44a577 = _0x8fdce1[_0x37b64f(0x1cb)]((_0x27ad77) => _0x27ad77[_0x37b64f(0x265)]);
        if (_0x27be49[_0x37b64f(0x13d)](_0x3d063d[_0x37b64f(0x248)], -0x2e1 * 0x2 + 0x26d2 + -0x2110)) {
            const _0x34394b = [...new Set(_0x3d063d[_0x37b64f(0x1af)]((_0x6891c9) => _0x6891c9[_0x37b64f(0x1c9)]))],
                _0x50c2b6 = _0x34394b[_0x37b64f(0x1af)](
                    (_0x49667f) => _0x49667f[_0x37b64f(0x287)]('@')[-0x1d71 + -0xfd9 + 0x11 * 0x2aa]
                ),
                _0x132ca7 = {},
                _0x11d7c2 = { jabberId: _0x50c2b6, pageSize: 0x64 },
                _0x42b633 = await groupsApi[_0x37b64f(0x341)](_0x11d7c2);
            _0x42b633[_0x37b64f(0x307)] &&
                _0x27be49[_0x37b64f(0x13d)](_0x42b633[_0x37b64f(0x307)][_0x37b64f(0x248)], -0xa52 + -0x201a + 0x2a6c) &&
                _0x42b633[_0x37b64f(0x307)][_0x37b64f(0x342)]((_0xd9a8e8) => {
                    const _0x1fa4aa = _0x37b64f;
                    if (
                        _0xd9a8e8[_0x1fa4aa(0x315)] &&
                        _0xd9a8e8[_0x1fa4aa(0x315)][_0x1fa4aa(0x1c9)] &&
                        _0xd9a8e8[_0x1fa4aa(0x117)]
                    ) {
                        const _0x512ea6 = _0xd9a8e8[_0x1fa4aa(0x315)][_0x1fa4aa(0x1c9)];
                        _0x132ca7[_0x512ea6] = _0xd9a8e8[_0x1fa4aa(0x117)];
                        const _0x37fb1 = _0x512ea6[_0x1fa4aa(0x2e7)](
                            /@conference\.genesys\.orgspan\.com$/,
                            _0x27be49[_0x1fa4aa(0x29c)]
                        );
                        _0x132ca7[_0x37fb1] = _0xd9a8e8[_0x1fa4aa(0x117)];
                    }
                }),
                _0x3d063d[_0x37b64f(0x342)]((_0x2d4bde) => {
                    const _0x5f279c = _0x37b64f,
                        _0x3f60d1 = _0x132ca7[_0x2d4bde[_0x5f279c(0x1c9)]];
                    _0x3f60d1 && (searchResults[_0x2d4bde[_0x5f279c(0x2df)]][_0x5f279c(0x145)] = _0x3f60d1);
                });
        }
        if (_0x27be49[_0x37b64f(0x124)](_0x44a577[_0x37b64f(0x248)], -0xdd * 0x11 + -0x13 * -0x166 + -0xbe5)) {
            const _0x1f69a2 = _0x44a577[_0x37b64f(0x1af)](async (_0x1bf51f) => {
                const _0x105248 = _0x37b64f;
                try {
                    const _0x654f5 = await chatApi[_0x105248(0x36c) + 'om'](_0x1bf51f[_0x105248(0x163) + 'Id']);
                    _0x654f5 &&
                        _0x654f5[_0x105248(0x244)] &&
                        (searchResults[_0x1bf51f[_0x105248(0x2df)]][_0x105248(0x145)] = _0x654f5[_0x105248(0x244)]);
                } catch (_0x4f9759) {
                    console[_0x105248(0x1c0)](
                        _0x105248(0x38b) +
                            _0x105248(0x2ee) +
                            _0x105248(0x214) +
                            _0x105248(0x1d1) +
                            _0x105248(0x227) +
                            _0x1bf51f[_0x105248(0x163) + 'Id'] +
                            ':',
                        _0x4f9759
                    );
                }
            });
            await Promise[_0x37b64f(0x15d)](_0x1f69a2);
        }
    } catch (_0x21207a) {
        console[_0x37b64f(0x1c0)](_0x27be49[_0x37b64f(0x28f)], _0x21207a);
    }
}
function renderSearchResults() {
    const _0x4ca21f = _0x4ab36a,
        _0x2ae37f = {
            eiYre: function (_0x81a24f, _0x2f1255) {
                return _0x81a24f == _0x2f1255;
            },
            cZklz: function (_0x504564, _0x2993a6) {
                return _0x504564 === _0x2993a6;
            },
            pDrMq: _0x4ca21f(0x312),
            Fpdpm: function (_0x3c9ce9, _0x399b35) {
                return _0x3c9ce9 === _0x399b35;
            },
            cfGft: _0x4ca21f(0x195) + _0x4ca21f(0x190) + _0x4ca21f(0x169),
            RShge: _0x4ca21f(0x2cc),
            UNaNe: _0x4ca21f(0x195) + _0x4ca21f(0x311),
            mVESq: _0x4ca21f(0x18f),
            FQhbp: _0x4ca21f(0x195) + _0x4ca21f(0x30c),
            ayZqL: _0x4ca21f(0x133),
            ItzdW: function (_0x6c2e84, _0x2512c6, _0x36d8cf) {
                return _0x6c2e84(_0x2512c6, _0x36d8cf);
            },
            LtVIX: function (_0x2c52a6, _0x4ac66d) {
                return _0x2c52a6 > _0x4ac66d;
            },
            UWiAW: function (_0x49652d, _0x34a33e) {
                return _0x49652d + _0x34a33e;
            },
            QWvGw: function (_0x1b9517, _0x5f37b7) {
                return _0x1b9517 * _0x5f37b7;
            },
            zwVuV: function (_0x5946e0, _0x193108) {
                return _0x5946e0 - _0x193108;
            },
            koNJJ: function (_0x5df079, _0x4b8422) {
                return _0x5df079 - _0x4b8422;
            },
            niLVy: function (_0x36a0f8, _0x2cd701) {
                return _0x36a0f8 !== _0x2cd701;
            },
            bYkox: _0x4ca21f(0x376),
            IbRcP: function (_0x4ad996) {
                return _0x4ad996();
            },
            hJchU: _0x4ca21f(0x10e) + _0x4ca21f(0x112) + _0x4ca21f(0x387) + '>',
            jhzQi: _0x4ca21f(0x29d),
            vGESV: function (_0x1cd12e, _0x59d5e9) {
                return _0x1cd12e > _0x59d5e9;
            },
            KEGRH: function (_0x316f8d) {
                return _0x316f8d();
            },
            VUfRX: function (_0x2c266d, _0x4a9142) {
                return _0x2c266d >= _0x4a9142;
            },
            JXlJJ: function (_0x3f2303, _0xc8f2f) {
                return _0x3f2303(_0xc8f2f);
            },
            VOvWf: _0x4ca21f(0x208) + _0x4ca21f(0x30d),
            QIRCD: _0x4ca21f(0x261),
            ReJVo: _0x4ca21f(0x27c) + 'ta',
            laeSQ: _0x4ca21f(0x2d0) + _0x4ca21f(0x245),
            lpHFI: function (_0x245982, _0x544e0b) {
                return _0x245982(_0x544e0b);
            },
            fRLYk: _0x4ca21f(0x2d0) + 'n',
            VtVtl: function (_0x6cd88d, _0x4dd8c9) {
                return _0x6cd88d(_0x4dd8c9);
            },
        };
    let _0x55f005 = '',
        _0x4736c6 = '',
        _0x29d838 = '';
    if (_0x2ae37f[_0x4ca21f(0x2f4)](searchResults[_0x4ca21f(0x248)], 0x651 + -0x10d1 + 0xa80)) {
        const _0x505e50 = _0x2ae37f[_0x4ca21f(0x391)](
                _0x2ae37f[_0x4ca21f(0x32a)](
                    _0x2ae37f[_0x4ca21f(0x183)](currentPage, 0x12db + 0x46a + -0x1744),
                    -0x8 * 0xb6 + -0x1259 + 0x183b
                ),
                -0xd7 * -0x8 + 0x2027 + -0x26de
            ),
            _0x30e7c0 = Math[_0x4ca21f(0x1da)](
                _0x2ae37f[_0x4ca21f(0x2d5)](
                    _0x2ae37f[_0x4ca21f(0x391)](_0x505e50, searchResults[_0x4ca21f(0x248)]),
                    -0x2701 + -0xa3 * -0xc + 0x16 * 0x16d
                ),
                totalResults
            );
        (_0x29d838 =
            _0x4ca21f(0x36e) +
            totalResults +
            _0x4ca21f(0x380) +
            (_0x2ae37f[_0x4ca21f(0x2f4)](totalResults, 0x116d + -0x1e9b + 0xd2f) ? 's' : '') +
            _0x4ca21f(0x1b3) +
            lastSearchTerm +
            '\x22'),
            _0x2ae37f[_0x4ca21f(0x1ce)](currentDateFilter, _0x2ae37f[_0x4ca21f(0x110)]) &&
                (_0x29d838 += '\x20(' + _0x2ae37f[_0x4ca21f(0x115)](getDateFilterDisplayText) + ')'),
            (_0x29d838 += _0x4ca21f(0x2c1) + _0x505e50 + '-' + _0x30e7c0 + ')'),
            (_0x55f005 = _0x2ae37f[_0x4ca21f(0x363)]),
            searchResults[_0x4ca21f(0x342)]((_0x41538f) => {
                const _0x42ec92 = _0x4ca21f;
                let _0x3ed68c = _0x2ae37f[_0x42ec92(0x1ee)](_0x41538f[_0x42ec92(0x2bd)], userJid)
                        ? _0x41538f[_0x42ec92(0x151)]
                        : _0x41538f[_0x42ec92(0x2bd)],
                    _0x564a3d = _0x2ae37f[_0x42ec92(0x1fe)](_0x41538f[_0x42ec92(0x290)], _0x2ae37f[_0x42ec92(0x2e4)])
                        ? _0x42ec92(0x125) +
                          _0x42ec92(0x1ef) +
                          _0x42ec92(0x2eb) +
                          _0x42ec92(0x335) +
                          _0x42ec92(0x18a) +
                          '/' +
                          _0x3ed68c
                        : _0x42ec92(0x125) +
                          _0x42ec92(0x1ef) +
                          _0x42ec92(0x2eb) +
                          _0x42ec92(0x335) +
                          _0x42ec92(0x18a) +
                          '/' +
                          _0x3ed68c,
                    _0x404a8d = _0x2ae37f[_0x42ec92(0x1fe)](_0x41538f[_0x42ec92(0x290)], _0x2ae37f[_0x42ec92(0x2e4)])
                        ? _0x41538f[_0x42ec92(0x145)]
                        : _0x41538f[_0x42ec92(0x290)],
                    _0x122a96,
                    _0xc7bb9f;
                _0x2ae37f[_0x42ec92(0x14a)](_0x41538f[_0x42ec92(0x290)], _0x2ae37f[_0x42ec92(0x2e4)])
                    ? _0x41538f[_0x42ec92(0x16d) + _0x42ec92(0x312)]
                        ? ((_0x122a96 = _0x2ae37f[_0x42ec92(0x379)]),
                          (_0xc7bb9f = _0x2ae37f[_0x42ec92(0x23e)]),
                          (_0x404a8d = '' + _0x404a8d))
                        : ((_0x122a96 = _0x2ae37f[_0x42ec92(0x126)]), (_0xc7bb9f = _0x2ae37f[_0x42ec92(0x16c)]))
                    : ((_0x122a96 = _0x2ae37f[_0x42ec92(0x35e)]), (_0xc7bb9f = _0x2ae37f[_0x42ec92(0x240)])),
                    (_0x55f005 +=
                        _0x42ec92(0x267) +
                        _0x42ec92(0x121) +
                        _0x42ec92(0x38f) +
                        _0x42ec92(0x325) +
                        _0x42ec92(0x1f1) +
                        _0x42ec92(0x132) +
                        _0x42ec92(0x26c) +
                        _0x42ec92(0x35d) +
                        _0x42ec92(0x238) +
                        _0x42ec92(0x279) +
                        _0x42ec92(0x327) +
                        _0x41538f[_0x42ec92(0x2e1)] +
                        (_0x42ec92(0x334) +
                            _0x42ec92(0x1fb) +
                            _0x42ec92(0x15c) +
                            _0x42ec92(0x23f) +
                            _0x42ec92(0x22c) +
                            _0x42ec92(0x12c) +
                            _0x42ec92(0x2c7) +
                            _0x42ec92(0x1b8) +
                            _0x42ec92(0x22e) +
                            _0x42ec92(0x271) +
                            _0x42ec92(0x164)) +
                        _0x41538f[_0x42ec92(0x296)] +
                        (_0x42ec92(0x235) + _0x42ec92(0x1b8) + '\x20') +
                        (_0x41538f[_0x42ec92(0x2a7)]
                            ? _0x42ec92(0x10e) +
                              _0x42ec92(0x219) +
                              _0x42ec92(0x149) +
                              _0x41538f[_0x42ec92(0x2a7)] +
                              _0x42ec92(0x29d)
                            : '') +
                        (_0x42ec92(0x23f) + _0x42ec92(0x1f3) + _0x42ec92(0x232) + _0x42ec92(0x229) + '>') +
                        new Date(_0x41538f[_0x42ec92(0x371)])[_0x42ec92(0x2c5) + _0x42ec92(0x2d2)]() +
                        (_0x42ec92(0x235) +
                            _0x42ec92(0x19e) +
                            _0x42ec92(0x349) +
                            _0x42ec92(0x340) +
                            _0x42ec92(0x222) +
                            _0x42ec92(0x308) +
                            _0x42ec92(0x1d9) +
                            _0x42ec92(0x224) +
                            _0x42ec92(0x141) +
                            _0x42ec92(0x147) +
                            _0x42ec92(0x237)) +
                        _0x122a96 +
                        (_0x42ec92(0x228) + _0x42ec92(0x19e) + _0x42ec92(0x31c) + 'a\x20') +
                        _0xc7bb9f +
                        (_0x42ec92(0x314) + _0x42ec92(0x1b8) + _0x42ec92(0x1e2)) +
                        _0x404a8d +
                        (_0x42ec92(0x23f) + _0x42ec92(0x23a) + _0x42ec92(0x173) + _0x42ec92(0x263) + _0x42ec92(0x1b1)) +
                        _0x564a3d +
                        (_0x42ec92(0x25d) +
                            _0x42ec92(0x13e) +
                            _0x42ec92(0x17d) +
                            _0x42ec92(0x215) +
                            _0x42ec92(0x20e) +
                            _0x42ec92(0x2ed) +
                            _0x42ec92(0x1b8) +
                            _0x42ec92(0x12f) +
                            _0x42ec92(0x35b) +
                            _0x42ec92(0x2a4) +
                            _0x42ec92(0x286) +
                            _0x42ec92(0x23f) +
                            _0x42ec92(0x26a) +
                            _0x42ec92(0x140) +
                            _0x42ec92(0x260) +
                            _0x42ec92(0x23f) +
                            _0x42ec92(0x1ab) +
                            _0x42ec92(0x1b8) +
                            _0x42ec92(0x235) +
                            _0x42ec92(0x1f1) +
                            _0x42ec92(0x374) +
                            _0x42ec92(0x152) +
                            _0x42ec92(0x243)) +
                        _0x2ae37f[_0x42ec92(0x1c4)](
                            highlightSearchTerms,
                            md[_0x42ec92(0x181)](_0x41538f[_0x42ec92(0x29e)]),
                            lastSearchTerm
                        ) +
                        (_0x42ec92(0x235) + _0x42ec92(0x277) + '>'));
            }),
            (_0x55f005 += _0x2ae37f[_0x4ca21f(0x377)]),
            _0x2ae37f[_0x4ca21f(0x2fc)](totalPages, 0x1ae4 + 0x240e * -0x1 + 0x92b) &&
                (_0x4736c6 = _0x2ae37f[_0x4ca21f(0x293)](generatePagination));
    } else
        lastSearchTerm &&
            _0x2ae37f[_0x4ca21f(0x2a3)](lastSearchTerm[_0x4ca21f(0x248)], -0x9c * 0xc + -0x11b9 + 0xc86 * 0x2) &&
            ((_0x55f005 =
                _0x4ca21f(0x1de) +
                _0x4ca21f(0x2d3) +
                _0x4ca21f(0x297) +
                _0x4ca21f(0x238) +
                _0x4ca21f(0x10e) +
                _0x4ca21f(0x1bd) +
                _0x4ca21f(0x282) +
                _0x4ca21f(0x1b8) +
                _0x4ca21f(0x375) +
                _0x4ca21f(0x321) +
                _0x4ca21f(0x223) +
                _0x4ca21f(0x390) +
                _0x4ca21f(0x337) +
                _0x4ca21f(0x2fb) +
                _0x4ca21f(0x383) +
                _0x4ca21f(0x2d7) +
                _0x4ca21f(0x284) +
                _0x4ca21f(0x2bb) +
                _0x4ca21f(0x331) +
                _0x4ca21f(0x385) +
                _0x4ca21f(0x340) +
                _0x4ca21f(0x1f0) +
                _0x4ca21f(0x2ba) +
                _0x4ca21f(0x27f) +
                _0x4ca21f(0x217) +
                _0x4ca21f(0x206) +
                _0x4ca21f(0x319) +
                _0x4ca21f(0x1a5) +
                _0x4ca21f(0x1ff) +
                _0x4ca21f(0x1b2) +
                _0x4ca21f(0x330) +
                _0x4ca21f(0x1ea) +
                _0x4ca21f(0x20a) +
                _0x4ca21f(0x2de) +
                _0x4ca21f(0x1ab) +
                _0x4ca21f(0x339) +
                'v>'),
            (_0x29d838 = _0x4ca21f(0x10f) + _0x4ca21f(0x1be) + '\x20\x22' + lastSearchTerm + '\x22'));
    _0x2ae37f[_0x4ca21f(0x12a)]($, _0x2ae37f[_0x4ca21f(0x146)])
        [_0x4ca21f(0x20c)](_0x55f005)
        [_0x4ca21f(0x326) + 's'](_0x2ae37f[_0x4ca21f(0x2c6)]),
        _0x29d838
            ? _0x2ae37f[_0x4ca21f(0x12a)]($, _0x2ae37f[_0x4ca21f(0x11d)])
                  [_0x4ca21f(0x20c)](_0x29d838)
                  [_0x4ca21f(0x326) + 's'](_0x2ae37f[_0x4ca21f(0x2c6)])
            : _0x2ae37f[_0x4ca21f(0x12a)]($, _0x2ae37f[_0x4ca21f(0x11d)])[_0x4ca21f(0x2ac)](
                  _0x2ae37f[_0x4ca21f(0x2c6)]
              ),
        _0x4736c6
            ? (_0x2ae37f[_0x4ca21f(0x12a)]($, _0x2ae37f[_0x4ca21f(0x28c)])
                  [_0x4ca21f(0x20c)](_0x4736c6)
                  [_0x4ca21f(0x326) + 's'](_0x2ae37f[_0x4ca21f(0x2c6)]),
              _0x2ae37f[_0x4ca21f(0x353)]($, _0x2ae37f[_0x4ca21f(0x302)])
                  [_0x4ca21f(0x20c)](_0x4736c6)
                  [_0x4ca21f(0x326) + 's'](_0x2ae37f[_0x4ca21f(0x2c6)]))
            : (_0x2ae37f[_0x4ca21f(0x353)]($, _0x2ae37f[_0x4ca21f(0x28c)])[_0x4ca21f(0x2ac)](
                  _0x2ae37f[_0x4ca21f(0x2c6)]
              ),
              _0x2ae37f[_0x4ca21f(0x33f)]($, _0x2ae37f[_0x4ca21f(0x302)])[_0x4ca21f(0x2ac)](
                  _0x2ae37f[_0x4ca21f(0x2c6)]
              ));
}
function generatePagination() {
    const _0x577381 = _0x4ab36a,
        _0x4a34a2 = {
            vtCYC: _0x577381(0x10e) + _0x577381(0x203) + _0x577381(0x24c) + _0x577381(0x31f),
            Vxlyc: function (_0x5223f7, _0x3a7aa1) {
                return _0x5223f7 > _0x3a7aa1;
            },
            vLFdg: function (_0x2f2735, _0x4c3390) {
                return _0x2f2735 - _0x4c3390;
            },
            iCFAj: _0x577381(0x386),
            iIDQo: function (_0x657437, _0x165607) {
                return _0x657437 - _0x165607;
            },
            oxCcS: function (_0x58fb51, _0x2ae0c0) {
                return _0x58fb51 + _0x2ae0c0;
            },
            TveqC: _0x577381(0x288) + _0x577381(0x1b7) + _0x577381(0x2f9) + _0x577381(0x2b6) + _0x577381(0x135),
            wKOmf: function (_0x2e18ed, _0x3deba9) {
                return _0x2e18ed <= _0x3deba9;
            },
            KmtYC: function (_0x43f283, _0x202963) {
                return _0x43f283 === _0x202963;
            },
            ySMWp: _0x577381(0x225),
            sPJqs: function (_0x270ce5, _0x30600d) {
                return _0x270ce5 < _0x30600d;
            },
            nYUMy: function (_0x2d04e1, _0x35e2aa) {
                return _0x2d04e1 < _0x35e2aa;
            },
            egeia: _0x577381(0x29d),
        };
    let _0x5400cc = _0x4a34a2[_0x577381(0x2db)];
    _0x4a34a2[_0x577381(0x21c)](currentPage, -0x292 * 0xe + -0x1df7 + 0x41f4) &&
        (_0x5400cc +=
            _0x577381(0x1d4) +
            _0x577381(0x25f) +
            _0x577381(0x13f) +
            _0x577381(0x322) +
            _0x577381(0x18b) +
            _0x577381(0x29a) +
            _0x4a34a2[_0x577381(0x20f)](currentPage, 0x1516 * 0x1 + -0x1 * 0xd1e + 0x7f7 * -0x1) +
            _0x577381(0x269) +
            (isLoading ? _0x4a34a2[_0x577381(0x259)] : '') +
            (_0x577381(0x238) +
                _0x577381(0x172) +
                _0x577381(0x2fa) +
                _0x577381(0x21b) +
                _0x577381(0x130) +
                _0x577381(0x34b) +
                _0x577381(0x295) +
                _0x577381(0x32e)));
    let _0x554abc = Math[_0x577381(0x2b2)](
            0x1 * 0x1053 + -0x19ab + -0x1 * -0x959,
            _0x4a34a2[_0x577381(0x34f)](currentPage, -0x2 * 0x2b + 0x18c7 + -0x186f)
        ),
        _0x946cb9 = Math[_0x577381(0x1da)](
            totalPages,
            _0x4a34a2[_0x577381(0x1e6)](currentPage, -0x1 * -0xf0d + 0x2437 + -0x3342)
        );
    _0x4a34a2[_0x577381(0x21c)](_0x554abc, 0x1 * -0x1bf6 + 0x5 * 0x7b0 + 0x17f * -0x7) &&
        ((_0x5400cc +=
            _0x577381(0x1d4) +
            _0x577381(0x25f) +
            _0x577381(0x14f) +
            _0x577381(0x17b) +
            _0x577381(0x158) +
            _0x577381(0x25b) +
            _0x577381(0x2c3) +
            '\x20' +
            (isLoading ? _0x4a34a2[_0x577381(0x259)] : '') +
            (_0x577381(0x179) + '>')),
        _0x4a34a2[_0x577381(0x21c)](_0x554abc, -0x20fb + 0x41 * 0x35 + -0x271 * -0x8) &&
            (_0x5400cc += _0x4a34a2[_0x577381(0x120)]));
    for (let _0x38e830 = _0x554abc; _0x4a34a2[_0x577381(0x37a)](_0x38e830, _0x946cb9); _0x38e830++) {
        const _0x334841 = _0x4a34a2[_0x577381(0x170)](_0x38e830, currentPage) ? _0x4a34a2[_0x577381(0x2e3)] : '';
        _0x5400cc +=
            _0x577381(0x1d4) +
            _0x577381(0x25f) +
            _0x577381(0x14f) +
            _0x577381(0x17b) +
            'r\x20' +
            _0x334841 +
            (_0x577381(0x2f1) + _0x577381(0x139) + _0x577381(0x333)) +
            _0x38e830 +
            _0x577381(0x269) +
            (isLoading ? _0x4a34a2[_0x577381(0x259)] : '') +
            '>' +
            _0x38e830 +
            _0x577381(0x254);
    }
    return (
        _0x4a34a2[_0x577381(0x275)](_0x946cb9, totalPages) &&
            (_0x4a34a2[_0x577381(0x33a)](
                _0x946cb9,
                _0x4a34a2[_0x577381(0x34f)](totalPages, -0x7e2 + 0x533 * 0x3 + 0x2a * -0x2f)
            ) && (_0x5400cc += _0x4a34a2[_0x577381(0x120)]),
            (_0x5400cc +=
                _0x577381(0x1d4) +
                _0x577381(0x25f) +
                _0x577381(0x14f) +
                _0x577381(0x17b) +
                _0x577381(0x158) +
                _0x577381(0x25b) +
                _0x577381(0x16e) +
                totalPages +
                _0x577381(0x269) +
                (isLoading ? _0x4a34a2[_0x577381(0x259)] : '') +
                '>' +
                totalPages +
                _0x577381(0x254))),
        _0x4a34a2[_0x577381(0x275)](currentPage, totalPages) &&
            (_0x5400cc +=
                _0x577381(0x1d4) +
                _0x577381(0x25f) +
                _0x577381(0x13f) +
                _0x577381(0x322) +
                _0x577381(0x18b) +
                _0x577381(0x29a) +
                _0x4a34a2[_0x577381(0x1e6)](currentPage, -0x29 * -0xbb + 0x1357 + -0x155 * 0x25) +
                _0x577381(0x269) +
                (isLoading ? _0x4a34a2[_0x577381(0x259)] : '') +
                (_0x577381(0x238) +
                    _0x577381(0x37d) +
                    _0x577381(0x31c) +
                    _0x577381(0x309) +
                    _0x577381(0x2f0) +
                    _0x577381(0x264) +
                    _0x577381(0x365) +
                    'n>')),
        (_0x5400cc += _0x4a34a2[_0x577381(0x292)]),
        _0x5400cc
    );
}
function _0x1f9e(_0x43fa64, _0xd273f7) {
    const _0x449e1d = _0x48fb();
    return (
        (_0x1f9e = function (_0x5d2b20, _0xccec5f) {
            _0x5d2b20 = _0x5d2b20 - (-0x1 * 0x239 + 0x1 * 0xb2f + -0x7eb);
            let _0x3cb97f = _0x449e1d[_0x5d2b20];
            return _0x3cb97f;
        }),
        _0x1f9e(_0x43fa64, _0xd273f7)
    );
}
function navigateToPage(_0x3a7dee) {
    const _0xe4e2eb = _0x4ab36a,
        _0x5b741c = {
            IjoHX: function (_0x187500, _0x78a3df) {
                return _0x187500 === _0x78a3df;
            },
            XNTdi: function (_0x4adb02, _0x5abd94) {
                return _0x4adb02(_0x5abd94);
            },
            QJFlp: function (_0x1d72e0, _0x1ddfb1, _0x190de5) {
                return _0x1d72e0(_0x1ddfb1, _0x190de5);
            },
        };
    if (isLoading || _0x5b741c[_0xe4e2eb(0x20b)](_0x3a7dee, currentPage)) return;
    _0x5b741c[_0xe4e2eb(0x346)](showPaginationLoading, _0x3a7dee),
        _0x5b741c[_0xe4e2eb(0x14d)](searchChats, lastSearchTerm, _0x3a7dee);
}
function showPaginationLoading(_0x4ceec7) {
    const _0x122f85 = _0x4ab36a,
        _0x4e9642 = {
            jGoXj: function (_0x5c3a78, _0x16710f) {
                return _0x5c3a78(_0x16710f);
            },
            TdkZl: _0x122f85(0x2d0) + _0x122f85(0x245),
            ubxam: function (_0x29f98c, _0x6a4b1d) {
                return _0x29f98c(_0x6a4b1d);
            },
            heJsu: _0x122f85(0x2d0) + 'n',
        },
        _0xd955ef =
            _0x122f85(0x267) +
            _0x122f85(0x121) +
            _0x122f85(0x123) +
            _0x122f85(0x368) +
            _0x122f85(0x2c9) +
            _0x122f85(0x12b) +
            _0x122f85(0x1a2) +
            _0x122f85(0x38c) +
            _0x122f85(0x1fc) +
            _0x122f85(0x1b8) +
            _0x122f85(0x12f) +
            _0x122f85(0x35b) +
            _0x122f85(0x32b) +
            _0x122f85(0x39a) +
            _0x122f85(0x2cb) +
            _0x122f85(0x157) +
            _0x122f85(0x1e9) +
            'e\x20' +
            _0x4ceec7 +
            (_0x122f85(0x1df) + _0x122f85(0x339) + _0x122f85(0x207) + _0x122f85(0x15f) + '\x20\x20');
    _0x4e9642[_0x122f85(0x114)]($, _0x4e9642[_0x122f85(0x361)])[_0x122f85(0x20c)](_0xd955ef),
        _0x4e9642[_0x122f85(0x17a)]($, _0x4e9642[_0x122f85(0x15a)])[_0x122f85(0x20c)](_0xd955ef);
}
function handleDatePresetClick(_0x5d9073) {
    const _0x170662 = _0x4ab36a,
        _0x2c79db = {
            tIxXC: function (_0x10b5bb, _0x5a5b9f) {
                return _0x10b5bb(_0x5a5b9f);
            },
            liyYw: _0x170662(0x1fd),
            GLZCJ: _0x170662(0x23b) + 'et',
            KEcji: _0x170662(0x225),
            PvrJs: function (_0x41dff1, _0x4611cb) {
                return _0x41dff1(_0x4611cb);
            },
            kOhTB: function (_0x332bcc, _0x33557d) {
                return _0x332bcc === _0x33557d;
            },
            hiRYv: _0x170662(0x268),
            ieMFG: _0x170662(0x273) + _0x170662(0x1b9),
            JxIwu: _0x170662(0x261),
            cyUlA: function (_0x41f709, _0xb5cde1) {
                return _0x41f709(_0xb5cde1);
            },
            YfRby: function (_0x147433) {
                return _0x147433();
            },
            efRmm: function (_0x168110, _0x2aa34f) {
                return _0x168110 >= _0x2aa34f;
            },
            xdXIA: function (_0x1a4f63, _0x3a0ba2, _0x4032d5) {
                return _0x1a4f63(_0x3a0ba2, _0x4032d5);
            },
        },
        _0x4ffdb4 = _0x2c79db[_0x170662(0x1a3)]($, _0x5d9073[_0x170662(0x1ad)])[_0x170662(0x2c2)](
            _0x2c79db[_0x170662(0x38a)]
        );
    _0x2c79db[_0x170662(0x1a3)]($, _0x2c79db[_0x170662(0x1ac)])[_0x170662(0x326) + 's'](_0x2c79db[_0x170662(0x192)]),
        _0x2c79db[_0x170662(0x24e)]($, _0x5d9073[_0x170662(0x1ad)])[_0x170662(0x2ac)](_0x2c79db[_0x170662(0x192)]),
        _0x2c79db[_0x170662(0x2a2)](_0x4ffdb4, _0x2c79db[_0x170662(0x2b8)])
            ? _0x2c79db[_0x170662(0x1a3)]($, _0x2c79db[_0x170662(0x1c5)])[_0x170662(0x326) + 's'](
                  _0x2c79db[_0x170662(0x1b0)]
              )
            : (_0x2c79db[_0x170662(0x131)]($, _0x2c79db[_0x170662(0x1c5)])[_0x170662(0x2ac)](
                  _0x2c79db[_0x170662(0x1b0)]
              ),
              (currentDateFilter = _0x4ffdb4),
              _0x2c79db[_0x170662(0x2be)](updateDateFilterSummary),
              lastSearchTerm &&
                  _0x2c79db[_0x170662(0x276)](lastSearchTerm[_0x170662(0x248)], 0x3 * 0x939 + -0x198e + -0x219) &&
                  _0x2c79db[_0x170662(0x11e)](
                      searchChats,
                      lastSearchTerm,
                      -0xb * -0xc7 + 0xa93 * -0x3 + -0x1 * -0x172d
                  ));
}
function handleCustomDateChange() {
    const _0x532c32 = _0x4ab36a,
        _0x399e14 = {
            gVnzs: function (_0x5da251, _0x542c9d) {
                return _0x5da251(_0x542c9d);
            },
            cvJrH: _0x532c32(0x36a) + 'e',
            OlYtn: _0x532c32(0x22f),
            jjlQY: function (_0x1c2b24, _0x3fdecb) {
                return _0x1c2b24 && _0x3fdecb;
            },
            fJeGI: _0x532c32(0x11c),
            xAJYd: function (_0x49bee9, _0xafa7c4) {
                return _0x49bee9 >= _0xafa7c4;
            },
            bypfN: function (_0xb79c07, _0x107d09, _0x298ee5) {
                return _0xb79c07(_0x107d09, _0x298ee5);
            },
            pYNHG: function (_0x19b838) {
                return _0x19b838();
            },
            IQoMo: _0x532c32(0x268),
        },
        _0x146f84 = _0x399e14[_0x532c32(0x19b)]($, _0x399e14[_0x532c32(0x1d7)])[_0x532c32(0x393)](),
        _0x5cac67 = _0x399e14[_0x532c32(0x19b)]($, _0x399e14[_0x532c32(0x2b0)])[_0x532c32(0x393)]();
    if (_0x399e14[_0x532c32(0x155)](_0x146f84, _0x5cac67)) {
        const _0x372ef2 = _0x399e14[_0x532c32(0x184)][_0x532c32(0x287)]('|');
        let _0x1ede14 = -0x1ddc + -0x1327 + 0x3103;
        while (!![]) {
            switch (_0x372ef2[_0x1ede14++]) {
                case '0':
                    customEndDate = _0x5cac67;
                    continue;
                case '1':
                    customStartDate = _0x146f84;
                    continue;
                case '2':
                    lastSearchTerm &&
                        _0x399e14[_0x532c32(0x24f)](lastSearchTerm[_0x532c32(0x248)], -0xe0b + -0xb3 * 0x2c + 0x2cd3) &&
                        _0x399e14[_0x532c32(0x1ed)](searchChats, lastSearchTerm, 0x2f * -0xcb + 0x42c * -0x1 + 0x2972);
                    continue;
                case '3':
                    _0x399e14[_0x532c32(0x171)](updateDateFilterSummary);
                    continue;
                case '4':
                    currentDateFilter = _0x399e14[_0x532c32(0x1c7)];
                    continue;
            }
            break;
        }
    }
}
function getDateRange() {
    const _0x2c535f = _0x4ab36a,
        _0x36ca8c = {
            loizG: _0x2c535f(0x258),
            RxtqU: function (_0x22963e, _0x518186) {
                return _0x22963e + _0x518186;
            },
            knfok: _0x2c535f(0x162),
            foMjM: function (_0x240859, _0x30d54f) {
                return _0x240859 - _0x30d54f;
            },
            OhLoq: _0x2c535f(0x266),
            FvjMZ: function (_0x480425, _0x485475) {
                return _0x480425 - _0x485475;
            },
            DPyzD: _0x2c535f(0x234),
            cuYJG: function (_0xfc126d, _0x145fcd) {
                return _0xfc126d - _0x145fcd;
            },
            xtIlJ: function (_0x5a2346, _0x17e1b4) {
                return _0x5a2346 - _0x17e1b4;
            },
            mlhQK: _0x2c535f(0x128),
            fegNE: function (_0x12391b, _0x2b7952) {
                return _0x12391b + _0x2b7952;
            },
            AjxPK: _0x2c535f(0x268),
            GeEdI: function (_0x463374, _0x279d21) {
                return _0x463374 && _0x279d21;
            },
        },
        _0x2ed819 = new Date();
    let _0x6bdfa5, _0x5e978d;
    switch (currentDateFilter) {
        case _0x36ca8c[_0x2c535f(0x213)]:
            (_0x6bdfa5 = new Date(
                _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                _0x2ed819[_0x2c535f(0x21a)](),
                _0x2ed819[_0x2c535f(0x1ba)]()
            )),
                (_0x5e978d = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x2ed819[_0x2c535f(0x21a)](),
                    _0x36ca8c[_0x2c535f(0x255)](_0x2ed819[_0x2c535f(0x1ba)](), -0x1257 + -0x1a85 * 0x1 + 0x8f9 * 0x5)
                ));
            break;
        case _0x36ca8c[_0x2c535f(0x32c)]:
            (_0x6bdfa5 = new Date(
                _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                _0x2ed819[_0x2c535f(0x21a)](),
                _0x36ca8c[_0x2c535f(0x32d)](_0x2ed819[_0x2c535f(0x1ba)](), 0x103c + 0x25f * -0xd + 0x4 * 0x3a6)
            )),
                (_0x5e978d = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x2ed819[_0x2c535f(0x21a)](),
                    _0x2ed819[_0x2c535f(0x1ba)]()
                ));
            break;
        case _0x36ca8c[_0x2c535f(0x37c)]:
            const _0x48bb24 = _0x2ed819[_0x2c535f(0x14c)](),
                _0x453b92 = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x2ed819[_0x2c535f(0x21a)](),
                    _0x36ca8c[_0x2c535f(0x399)](_0x2ed819[_0x2c535f(0x1ba)](), _0x48bb24)
                );
            (_0x6bdfa5 = _0x453b92),
                (_0x5e978d = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x2ed819[_0x2c535f(0x21a)](),
                    _0x36ca8c[_0x2c535f(0x255)](_0x2ed819[_0x2c535f(0x1ba)](), 0x20ef + -0x26fd + -0x60f * -0x1)
                ));
            break;
        case _0x36ca8c[_0x2c535f(0x37b)]:
            const _0x12b5aa = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x2ed819[_0x2c535f(0x21a)](),
                    _0x36ca8c[_0x2c535f(0x285)](
                        _0x36ca8c[_0x2c535f(0x32d)](_0x2ed819[_0x2c535f(0x1ba)](), _0x2ed819[_0x2c535f(0x14c)]()),
                        -0x13d7 + 0x21f7 + -0x9 * 0x191
                    )
                ),
                _0x257987 = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x2ed819[_0x2c535f(0x21a)](),
                    _0x36ca8c[_0x2c535f(0x241)](_0x2ed819[_0x2c535f(0x1ba)](), _0x2ed819[_0x2c535f(0x14c)]())
                );
            (_0x6bdfa5 = _0x12b5aa), (_0x5e978d = _0x257987);
            break;
        case _0x36ca8c[_0x2c535f(0x19f)]:
            (_0x6bdfa5 = new Date(
                _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                _0x2ed819[_0x2c535f(0x21a)](),
                -0x15ac + 0x1 * -0x789 + 0x2 * 0xe9b
            )),
                (_0x5e978d = new Date(
                    _0x2ed819[_0x2c535f(0x2ef) + 'r'](),
                    _0x36ca8c[_0x2c535f(0x159)](_0x2ed819[_0x2c535f(0x21a)](), -0x3e4 + -0x2250 + -0x1 * -0x2635),
                    0x429 * -0x3 + 0x4 * 0x6dd + -0xef8
                ));
            break;
        case _0x36ca8c[_0x2c535f(0x111)]:
            _0x36ca8c[_0x2c535f(0x1a0)](customStartDate, customEndDate) &&
                ((_0x6bdfa5 = new Date(customStartDate)),
                (_0x5e978d = new Date(customEndDate)),
                _0x5e978d[_0x2c535f(0x13c)](
                    0x1 * -0xfd9 + -0x8eb + -0x38d * -0x7,
                    -0x17b * -0xd + 0x27c + -0x10 * 0x158,
                    -0x1d95 * -0x1 + -0x761 * -0x2 + -0xeb4 * 0x3,
                    0x36e + 0x156e * 0x1 + -0x431 * 0x5
                ));
            break;
        default:
            return { startValue: null, endValue: null };
    }
    if (_0x36ca8c[_0x2c535f(0x1a0)](_0x6bdfa5, _0x5e978d))
        return {
            startValue: _0x6bdfa5[_0x2c535f(0x249)]()[_0x2c535f(0x397)](),
            endValue: _0x5e978d[_0x2c535f(0x249)]()[_0x2c535f(0x397)](),
        };
    return { startValue: null, endValue: null };
}
function updateDateFilterSummary() {
    const _0x1e704b = _0x4ab36a,
        _0x31b660 = {
            xnnAH: _0x1e704b(0x376),
            XoMnp: _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x218) + _0x1e704b(0x2ab),
            hhQfn: _0x1e704b(0x258),
            XdrjY: _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x175) + 'ay',
            jAYxa: _0x1e704b(0x162),
            QnjGN: _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x303) + _0x1e704b(0x17f),
            UjHME: _0x1e704b(0x266),
            gjlti: _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x2c0) + _0x1e704b(0x323),
            NEaGd: _0x1e704b(0x234),
            sRQnq: _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x352) + _0x1e704b(0x338),
            Krqmq: _0x1e704b(0x128),
            Wxgdi: _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x2c0) + _0x1e704b(0x1c3),
            LWmPj: _0x1e704b(0x268),
            ZuLlA: function (_0x1b8bc2, _0x2681ae) {
                return _0x1b8bc2 && _0x2681ae;
            },
            kwKcJ: _0x1e704b(0x369) + _0x1e704b(0x344) + _0x1e704b(0x19a),
            OnnTU: function (_0xcdad85, _0x552649) {
                return _0xcdad85(_0x552649);
            },
            ZSaRd: _0x1e704b(0x278) + _0x1e704b(0x355),
        };
    let _0x1add91 = '';
    switch (currentDateFilter) {
        case _0x31b660[_0x1e704b(0x27d)]:
            _0x1add91 = _0x31b660[_0x1e704b(0x17c)];
            break;
        case _0x31b660[_0x1e704b(0x1f4)]:
            _0x1add91 = _0x31b660[_0x1e704b(0x18d)];
            break;
        case _0x31b660[_0x1e704b(0x21e)]:
            _0x1add91 = _0x31b660[_0x1e704b(0x11a)];
            break;
        case _0x31b660[_0x1e704b(0x1c2)]:
            _0x1add91 = _0x31b660[_0x1e704b(0x166)];
            break;
        case _0x31b660[_0x1e704b(0x350)]:
            _0x1add91 = _0x31b660[_0x1e704b(0x118)];
            break;
        case _0x31b660[_0x1e704b(0x1cf)]:
            _0x1add91 = _0x31b660[_0x1e704b(0x10d)];
            break;
        case _0x31b660[_0x1e704b(0x1ae)]:
            if (_0x31b660[_0x1e704b(0x1aa)](customStartDate, customEndDate)) {
                const _0x26bd8e = new Date(customStartDate)[_0x1e704b(0x143) + _0x1e704b(0x2a0)](),
                    _0x191c3a = new Date(customEndDate)[_0x1e704b(0x143) + _0x1e704b(0x2a0)]();
                _0x1add91 =
                    _0x1e704b(0x1ca) + _0x1e704b(0x12e) + _0x1e704b(0x142) + _0x26bd8e + _0x1e704b(0x317) + _0x191c3a;
            } else _0x1add91 = _0x31b660[_0x1e704b(0x1ec)];
            break;
    }
    _0x31b660[_0x1e704b(0x150)]($, _0x31b660[_0x1e704b(0x33d)])[_0x1e704b(0x395)](_0x1add91);
}
function getDateFilterDisplayText() {
    const _0x5af3d3 = _0x4ab36a,
        _0x17f4ac = {
            JNuyz: _0x5af3d3(0x258),
            FQphc: _0x5af3d3(0x1a4),
            zriOD: _0x5af3d3(0x162),
            MvwOx: _0x5af3d3(0x1e8),
            QMtvt: _0x5af3d3(0x266),
            woIDy: _0x5af3d3(0x1fa),
            lylcV: _0x5af3d3(0x234),
            uuTjo: _0x5af3d3(0x1bb),
            ghthz: _0x5af3d3(0x128),
            HkLEE: _0x5af3d3(0x1e0),
            oMbAr: _0x5af3d3(0x268),
            xUNnr: function (_0xb2aaee, _0x1bc05f) {
                return _0xb2aaee && _0x1bc05f;
            },
            dWoJa: _0x5af3d3(0x116) + 'ge',
        };
    switch (currentDateFilter) {
        case _0x17f4ac[_0x5af3d3(0x15b)]:
            return _0x17f4ac[_0x5af3d3(0x27e)];
        case _0x17f4ac[_0x5af3d3(0x2cd)]:
            return _0x17f4ac[_0x5af3d3(0x35f)];
        case _0x17f4ac[_0x5af3d3(0x35c)]:
            return _0x17f4ac[_0x5af3d3(0x2d8)];
        case _0x17f4ac[_0x5af3d3(0x301)]:
            return _0x17f4ac[_0x5af3d3(0x262)];
        case _0x17f4ac[_0x5af3d3(0x129)]:
            return _0x17f4ac[_0x5af3d3(0x2af)];
        case _0x17f4ac[_0x5af3d3(0x2e9)]:
            if (_0x17f4ac[_0x5af3d3(0x220)](customStartDate, customEndDate)) {
                const _0xef65f9 = new Date(customStartDate)[_0x5af3d3(0x143) + _0x5af3d3(0x2a0)](),
                    _0x5f158f = new Date(customEndDate)[_0x5af3d3(0x143) + _0x5af3d3(0x2a0)]();
                return _0xef65f9 + _0x5af3d3(0x199) + _0x5f158f;
            }
            return _0x17f4ac[_0x5af3d3(0x2e8)];
        default:
            return '';
    }
}
