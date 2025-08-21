const _0x56b5a9 = _0x5e3b;
function _0x5e3b(_0x2dca44, _0x19a0c5) {
    const _0x25c9b1 = _0x25c9();
    return (
        (_0x5e3b = function (_0x5e3bd5, _0x4b7177) {
            _0x5e3bd5 = _0x5e3bd5 - 0x104;
            let _0x36e1fa = _0x25c9b1[_0x5e3bd5];
            return _0x36e1fa;
        }),
        _0x5e3b(_0x2dca44, _0x19a0c5)
    );
}
(function (_0x80488f, _0x1715f7) {
    const _0x857cad = _0x5e3b,
        _0x319109 = _0x80488f();
    while (!![]) {
        try {
            const _0x51fe96 =
                (parseInt(_0x857cad(0x13c)) / 0x1) * (parseInt(_0x857cad(0x131)) / 0x2) +
                (-parseInt(_0x857cad(0x113)) / 0x3) * (-parseInt(_0x857cad(0x11b)) / 0x4) +
                parseInt(_0x857cad(0x11c)) / 0x5 +
                (parseInt(_0x857cad(0x13f)) / 0x6) * (-parseInt(_0x857cad(0x122)) / 0x7) +
                (-parseInt(_0x857cad(0x14b)) / 0x8) * (-parseInt(_0x857cad(0x106)) / 0x9) +
                -parseInt(_0x857cad(0x124)) / 0xa +
                parseInt(_0x857cad(0x11e)) / 0xb;
            if (_0x51fe96 === _0x1715f7) break;
            else _0x319109['push'](_0x319109['shift']());
        } catch (_0x556177) {
            _0x319109['push'](_0x319109['shift']());
        }
    }
})(_0x25c9, 0x93f65);
const clientId = _0x56b5a9(0x125),
    redirectUri = window[_0x56b5a9(0x104)][_0x56b5a9(0x150)] + _0x56b5a9(0x109),
    platformClient = window[_0x56b5a9(0x11a)] || require(_0x56b5a9(0x11a)),
    client = platformClient[_0x56b5a9(0x156)][_0x56b5a9(0x147)],
    searchApi = new platformClient[_0x56b5a9(0x152)](),
    groupsApi = new platformClient[_0x56b5a9(0x142)](),
    usersApi = new platformClient[_0x56b5a9(0x10a)](),
    md = window[_0x56b5a9(0x12d)]();
let userJid = '',
    searchResults = [],
    lastSearchTerm = '';
location[_0x56b5a9(0x130)] !== 'https:' &&
    location[_0x56b5a9(0x12e)](
        _0x56b5a9(0x155) + location[_0x56b5a9(0x163)][_0x56b5a9(0x12a)](location[_0x56b5a9(0x130)][_0x56b5a9(0x14e)])
    );
client['loginImplicitGrant'](clientId, redirectUri, { state: '' })
    [_0x56b5a9(0x10d)](() => bootstrap())
    ['catch'](() => bootstrapError());
function bootstrapError() {
    const _0xe06ea1 = _0x56b5a9;
    $('#loading')['addClass']('hidden'), $('#auth-failure')[_0xe06ea1(0x13b)](_0xe06ea1(0x14c))['show']();
}
function bootstrap() {
    const _0x4c1e34 = _0x56b5a9;
    $(_0x4c1e34(0x151))['on'](
        _0x4c1e34(0x159),
        debounce((_0x42321c) => {
            const _0x2aabf4 = _0x4c1e34;
            searchChats(_0x42321c[_0x2aabf4(0x135)][_0x2aabf4(0x14a)]);
        }, 0x12c)
    ),
        usersApi[_0x4c1e34(0x11d)]()
            ['then']((_0x397e45) => {
                const _0x168a53 = _0x4c1e34;
                if (_0x397e45[_0x168a53(0x15d)]) userJid = _0x397e45['chat'][_0x168a53(0x108)];
                $(_0x168a53(0x128))['addClass'](_0x168a53(0x14c)),
                    $(_0x168a53(0x138))[_0x168a53(0x13b)]('hidden'),
                    $(_0x168a53(0x145))[_0x168a53(0x15f)](_0x168a53(0x14c))['hide']();
            })
            [_0x4c1e34(0x168)](() => {
                const _0x4058a8 = _0x4c1e34;
                $('#loading')[_0x4058a8(0x15f)](_0x4058a8(0x14c)),
                    $(_0x4058a8(0x145))[_0x4058a8(0x13b)](_0x4058a8(0x14c))[_0x4058a8(0x12f)]();
            });
}
function debounce(_0x5c5d75, _0x3de5ad) {
    let _0x4678fd;
    return function (..._0x8972a7) {
        const _0x179ee5 = _0x5e3b;
        clearTimeout(_0x4678fd),
            (_0x4678fd = setTimeout(() => _0x5c5d75[_0x179ee5(0x144)](this, _0x8972a7), _0x3de5ad));
    };
}
function _0x25c9() {
    const _0x45a750 = [
        'show',
        'protocol',
        '2540JNQuQM',
        'chat-type-group',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>',
        'Searching\x20for:\x20\x27',
        'target',
        'results',
        '\x20result',
        '#main-app',
        'created',
        'from',
        'removeClass',
        '13GOEkpL',
        'hasOwnProperty',
        '\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '12678MRjpMj',
        'jid',
        'sort',
        'GroupsApi',
        'images',
        'apply',
        '#auth-failure',
        'imageUri',
        'instance',
        '\x27\x20...',
        'groupName',
        'value',
        '8zahjaq',
        'hidden',
        'push',
        'length',
        '@conference.genesys.orgspan.com',
        'origin',
        '#search-input',
        'SearchApi',
        'chat-type-direct',
        'Found\x20',
        'https:',
        'ApiClient',
        '<div\x20style=\x27color:#e74c3c\x27>Search\x20failed.\x20Please\x20try\x20again.</div>',
        '\x22\x20target=\x22_blank\x22\x20class=\x22open-chat-btn\x22\x20title=\x22Open\x20chat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-external-link\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Open\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>',
        'input',
        'map',
        'entities',
        '\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22no-results\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22no-results-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>No\x20results\x20found.\x20Try\x20searching\x20with\x20different\x20keywords.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:\x200.5rem;\x20font-size:\x200.9rem;\x20color:\x20#94a3b8;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Your\x20search\x20must\x20be\x20at\x20least\x204\x20characters\x20long.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>',
        'chat',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20',
        'addClass',
        '#search-results',
        'warn',
        'split',
        'href',
        '<div\x20class=\x22results-container\x22>',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22',
        '#search-meta',
        'Failed\x20to\x20fetch\x20group\x20details:',
        'catch',
        'body',
        'location',
        'https://apps.mypurecloud.com/directory/#/chat-room/',
        '2744928npsKen',
        'forEach',
        'jabberId',
        '/client-apps/chat-search.html',
        'UsersApi',
        'index',
        '</div>',
        'then',
        'Person',
        'userName',
        'fa-user',
        'toLocaleString',
        '@conference',
        '24nWNCyf',
        'messages',
        'html',
        'endsWith',
        'image',
        'chatType',
        'text',
        'platformClient',
        '301652rNFLGb',
        '1163690LwNqRE',
        'getUsersMe',
        '5498405dVIDeO',
        'render',
        'Group',
        '\x20for\x20\x22',
        '182dEsYtj',
        'targetJid',
        '9964080QcKtSJ',
        '6c467620-9486-4218-bf90-020b9e2c596b',
        'fromJid',
        'name',
        '#loading',
        'fa-users',
        'substring',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-date\x22>',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22search-result\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22search-result-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'markdownit',
        'replace',
    ];
    _0x25c9 = function () {
        return _0x45a750;
    };
    return _0x25c9();
}
function searchChats(_0x436d61) {
    const _0x3cf5e9 = _0x56b5a9;
    lastSearchTerm = _0x436d61;
    if (!_0x436d61 || _0x436d61['length'] < 0x4) {
        $(_0x3cf5e9(0x160))[_0x3cf5e9(0x15f)]('hidden'), $(_0x3cf5e9(0x166))['addClass'](_0x3cf5e9(0x14c));
        return;
    }
    $(_0x3cf5e9(0x166))
        [_0x3cf5e9(0x119)](_0x3cf5e9(0x134) + _0x436d61 + _0x3cf5e9(0x148))
        [_0x3cf5e9(0x13b)](_0x3cf5e9(0x14c));
    let _0x492d3b = {
        sortOrder: 'SCORE',
        pageSize: 0x32,
        expand: ['from', 'to'],
        types: [_0x3cf5e9(0x114)],
        query: [{ value: _0x436d61, fields: [_0x3cf5e9(0x169)], type: 'TERM' }],
    };
    searchApi['postSearch'](_0x492d3b, { profile: ![] })
        [_0x3cf5e9(0x10d)](getSearchResults)
        ['catch'](() => {
            const _0x156aca = _0x3cf5e9;
            $(_0x156aca(0x160))['html'](_0x156aca(0x157))['removeClass'](_0x156aca(0x14c)),
                $(_0x156aca(0x166))[_0x156aca(0x15f)](_0x156aca(0x14c));
        });
}
function getSearchResults(_0x224203) {
    const _0x38e524 = _0x56b5a9;
    searchResults = [];
    if (_0x224203[_0x38e524(0x13d)](_0x38e524(0x136))) {
        let _0x2229fe = [];
        _0x224203[_0x38e524(0x136)][_0x38e524(0x107)]((_0x3f6507) => {
            const _0x3fc557 = _0x38e524;
            let _0x49ce7c = _0x3f6507[_0x3fc557(0x13a)][_0x3fc557(0x127)] || _0x3fc557(0x10e),
                _0x35650d =
                    _0x3f6507[_0x3fc557(0x13a)]['images'] &&
                    _0x3f6507[_0x3fc557(0x13a)][_0x3fc557(0x143)][0x0] &&
                    _0x3f6507[_0x3fc557(0x13a)][_0x3fc557(0x143)][0x0][_0x3fc557(0x146)]
                        ? _0x3f6507[_0x3fc557(0x13a)]['images'][0x0][_0x3fc557(0x146)]
                        : 'https://ui-avatars.com/api/?name=' + encodeURIComponent(_0x49ce7c),
                _0x1a1528 = _0x3f6507[_0x3fc557(0x13a)][_0x3fc557(0x15d)]
                    ? _0x3f6507[_0x3fc557(0x13a)][_0x3fc557(0x15d)][_0x3fc557(0x108)]
                    : _0x3f6507[_0x3fc557(0x13a)][_0x3fc557(0x140)],
                _0x86d819 = _0x3f6507['to']['chat']
                    ? _0x3f6507['to'][_0x3fc557(0x15d)][_0x3fc557(0x108)]
                    : _0x3f6507['to'][_0x3fc557(0x140)],
                _0x2ddf87 = _0x86d819[_0x3fc557(0x116)]('@conference') ? _0x3fc557(0x120) : 'Direct',
                _0x3a397d = _0x3fc557(0x120),
                _0x218930 = _0x86d819;
            _0x86d819[_0x3fc557(0x116)](_0x3fc557(0x112)) &&
                ((_0x86d819 = _0x86d819[_0x3fc557(0x12e)](/@conference$/, _0x3fc557(0x14f))),
                _0x2229fe['push']({ jabberId: _0x218930, index: searchResults[_0x3fc557(0x14e)] }));
            let _0x343c55 = {
                fromJid: _0x1a1528,
                targetJid: _0x86d819,
                body: _0x3f6507[_0x3fc557(0x169)],
                created: _0x3f6507[_0x3fc557(0x139)],
                userName: _0x49ce7c,
                image: _0x35650d,
                chatType: _0x2ddf87,
                groupName: _0x3a397d,
            };
            searchResults[_0x3fc557(0x14d)](_0x343c55);
        }),
            _0x2229fe['length'] > 0x0
                ? fetchGroupDetails(_0x2229fe)[_0x38e524(0x10d)](() => {
                      const _0x1cbdee = _0x38e524;
                      searchResults[_0x1cbdee(0x141)](
                          (_0x5ecc46, _0x11657c) =>
                              new Date(_0x11657c[_0x1cbdee(0x139)]) - new Date(_0x5ecc46[_0x1cbdee(0x139)])
                      ),
                          renderSearchResults();
                  })
                : (searchResults['sort'](
                      (_0x2cc41c, _0x2af260) => new Date(_0x2af260['created']) - new Date(_0x2cc41c[_0x38e524(0x139)])
                  ),
                  renderSearchResults());
    } else renderSearchResults();
}
async function fetchGroupDetails(_0x278b7f) {
    const _0x4082b8 = _0x56b5a9;
    try {
        const _0x1a5d27 = [...new Set(_0x278b7f[_0x4082b8(0x15a)]((_0x1e1233) => _0x1e1233[_0x4082b8(0x108)]))],
            _0x39c042 = _0x1a5d27[_0x4082b8(0x15a)]((_0x2695dd) => _0x2695dd[_0x4082b8(0x162)]('@')[0x0]),
            _0x60d3b1 = {},
            _0x1826a3 = { jabberId: _0x39c042, pageSize: 0x64 },
            _0x45dfc2 = await groupsApi['getGroups'](_0x1826a3);
        _0x45dfc2[_0x4082b8(0x15b)] &&
            _0x45dfc2[_0x4082b8(0x15b)][_0x4082b8(0x14e)] > 0x0 &&
            _0x45dfc2[_0x4082b8(0x15b)][_0x4082b8(0x107)]((_0x5908b9) => {
                const _0x2259db = _0x4082b8;
                if (
                    _0x5908b9[_0x2259db(0x15d)] &&
                    _0x5908b9[_0x2259db(0x15d)][_0x2259db(0x108)] &&
                    _0x5908b9[_0x2259db(0x127)]
                ) {
                    const _0x4053ab = _0x5908b9[_0x2259db(0x15d)][_0x2259db(0x108)];
                    _0x60d3b1[_0x4053ab] = _0x5908b9[_0x2259db(0x127)];
                    const _0x474cbd = _0x4053ab[_0x2259db(0x12e)](
                        /@conference\.genesys\.orgspan\.com$/,
                        _0x2259db(0x112)
                    );
                    _0x60d3b1[_0x474cbd] = _0x5908b9['name'];
                }
            }),
            _0x278b7f[_0x4082b8(0x107)]((_0x5cfa76) => {
                const _0x4b86e4 = _0x4082b8,
                    _0x59fbbf = _0x60d3b1[_0x5cfa76[_0x4b86e4(0x108)]];
                _0x59fbbf && (searchResults[_0x5cfa76[_0x4b86e4(0x10b)]][_0x4b86e4(0x149)] = _0x59fbbf);
            });
    } catch (_0x11cde8) {
        console[_0x4082b8(0x161)](_0x4082b8(0x167), _0x11cde8);
    }
}
function renderSearchResults() {
    const _0x3385cc = _0x56b5a9;
    let _0x203c88 = '',
        _0x1d17ce = '';
    searchResults[_0x3385cc(0x14e)] > 0x0
        ? ((_0x1d17ce =
              _0x3385cc(0x154) +
              searchResults[_0x3385cc(0x14e)] +
              _0x3385cc(0x137) +
              (searchResults[_0x3385cc(0x14e)] > 0x1 ? 's' : '') +
              _0x3385cc(0x121) +
              lastSearchTerm +
              '\x22'),
          (_0x203c88 = _0x3385cc(0x164)),
          searchResults['forEach']((_0x85194f) => {
              const _0x3aeae9 = _0x3385cc;
              let _0x1a630c =
                      _0x85194f['targetJid'] == userJid ? _0x85194f[_0x3aeae9(0x126)] : _0x85194f[_0x3aeae9(0x123)],
                  _0x5972d1 =
                      _0x85194f[_0x3aeae9(0x118)] === 'Group'
                          ? _0x3aeae9(0x105) + _0x1a630c
                          : _0x3aeae9(0x105) + _0x1a630c,
                  _0xe04a6d =
                      _0x85194f[_0x3aeae9(0x118)] === _0x3aeae9(0x120)
                          ? _0x85194f['groupName']
                          : _0x85194f[_0x3aeae9(0x118)],
                  _0x554859 = _0x85194f[_0x3aeae9(0x118)] === _0x3aeae9(0x120) ? _0x3aeae9(0x132) : _0x3aeae9(0x153),
                  _0x4f99e = _0x85194f[_0x3aeae9(0x118)] === _0x3aeae9(0x120) ? _0x3aeae9(0x129) : _0x3aeae9(0x110);
              _0x203c88 +=
                  _0x3aeae9(0x12c) +
                  _0x85194f[_0x3aeae9(0x117)] +
                  '\x22\x20alt=\x22Avatar\x22\x20class=\x22avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-name\x22>' +
                  _0x85194f[_0x3aeae9(0x10f)] +
                  _0x3aeae9(0x12b) +
                  new Date(_0x85194f[_0x3aeae9(0x139)])[_0x3aeae9(0x111)]() +
                  '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-labels\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chat-type-badge\x20' +
                  _0x554859 +
                  _0x3aeae9(0x15e) +
                  _0x4f99e +
                  _0x3aeae9(0x13e) +
                  _0xe04a6d +
                  _0x3aeae9(0x165) +
                  _0x5972d1 +
                  _0x3aeae9(0x158) +
                  md[_0x3aeae9(0x11f)](_0x85194f[_0x3aeae9(0x169)]) +
                  _0x3aeae9(0x133);
          }),
          (_0x203c88 += _0x3385cc(0x10c)))
        : ((_0x203c88 = _0x3385cc(0x15c)), (_0x1d17ce = '')),
        $(_0x3385cc(0x160))[_0x3385cc(0x115)](_0x203c88)[_0x3385cc(0x13b)](_0x3385cc(0x14c)),
        _0x1d17ce
            ? $(_0x3385cc(0x166))[_0x3385cc(0x115)](_0x1d17ce)[_0x3385cc(0x13b)](_0x3385cc(0x14c))
            : $(_0x3385cc(0x166))[_0x3385cc(0x15f)]('hidden');
}
