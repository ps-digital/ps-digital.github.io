const _0x168ceb = _0x1480;
function _0x1480(_0xea4c27, _0x5d82c5) {
    const _0x3c583b = _0x48c1();
    return (
        (_0x1480 = function (_0x1fb4b2, _0x5151b6) {
            _0x1fb4b2 = _0x1fb4b2 - (-0x1f82 * -0x1 + -0x12de + -0xbc2);
            let _0x3700d6 = _0x3c583b[_0x1fb4b2];
            return _0x3700d6;
        }),
        _0x1480(_0xea4c27, _0x5d82c5)
    );
}
(function (_0x47ae65, _0x4ab0d2) {
    const _0x1a5d88 = _0x1480,
        _0x4b36aa = _0x47ae65();
    while (!![]) {
        try {
            const _0x3bb7e8 =
                (-parseInt(_0x1a5d88(0x130)) / (0xa1 * -0x17 + 0x9 * -0x10f + 0x17ff * 0x1)) *
                    (parseInt(_0x1a5d88(0x1e5)) / (0x26 * -0xf1 + 0x1 * -0x925 + -0x1 * -0x2ced)) +
                parseInt(_0x1a5d88(0x18b)) / (0x3eb + 0x14b5 + -0x189d) +
                parseInt(_0x1a5d88(0x340)) / (-0xdb9 + 0x1d40 + -0x1 * 0xf83) +
                -parseInt(_0x1a5d88(0x30a)) / (-0x17b * 0x16 + -0x1835 + 0x5ae * 0xa) +
                (-parseInt(_0x1a5d88(0x34f)) / (0x130c + -0x811 + 0xb * -0xff)) *
                    (parseInt(_0x1a5d88(0x278)) / (-0x12af + 0x15d * 0x11 + -0x477)) +
                (parseInt(_0x1a5d88(0x24f)) / (0x27d * 0xf + -0x183f + -0xd0c)) *
                    (-parseInt(_0x1a5d88(0x124)) / (-0x7f1 + 0x25b * 0x2 + -0x1a2 * -0x2)) +
                (-parseInt(_0x1a5d88(0x14e)) / (0x52c + 0xcc * -0x24 + -0x3ed * -0x6)) *
                    (-parseInt(_0x1a5d88(0x2e7)) / (-0x298 + 0x2227 + -0x1f84));
            if (_0x3bb7e8 === _0x4ab0d2) break;
            else _0x4b36aa['push'](_0x4b36aa['shift']());
        } catch (_0x467de6) {
            _0x4b36aa['push'](_0x4b36aa['shift']());
        }
    }
})(_0x48c1, -0x44acd * 0x1 + -0xb05a + 0xf20c6);
const clientId = _0x168ceb(0x2c5) + _0x168ceb(0x16d) + _0x168ceb(0x2a9) + _0x168ceb(0x1d3),
    redirectUri = window[_0x168ceb(0x224)][_0x168ceb(0x1af)] + (_0x168ceb(0x268) + _0x168ceb(0x2f4) + _0x168ceb(0x190)),
    platformClient = window[_0x168ceb(0x1d9) + _0x168ceb(0x232)] || require(_0x168ceb(0x1d9) + _0x168ceb(0x232)),
    client = platformClient[_0x168ceb(0x13a)][_0x168ceb(0x2e3)],
    searchApi = new platformClient[_0x168ceb(0x2c3)](),
    groupsApi = new platformClient[_0x168ceb(0x1eb)](),
    usersApi = new platformClient[_0x168ceb(0x113)](),
    chatApi = new platformClient[_0x168ceb(0x2dc)](),
    md = window[_0x168ceb(0x1fd)]();
let userJid = '',
    searchResults = [],
    lastSearchTerm = '',
    currentPage = 0x1327 * -0x1 + 0x44 * 0x57 + -0x3f4,
    totalResults = 0x62f * 0x1 + -0x10c1 + 0xa92,
    totalPages = 0x63a + -0x179e + 0x1164,
    isLoading = ![],
    currentDateFilter = _0x168ceb(0x116),
    customStartDate = null,
    customEndDate = null;
location[_0x168ceb(0x2f8)] !== _0x168ceb(0x1ee) &&
    location[_0x168ceb(0x11d)](
        _0x168ceb(0x1ee) + location[_0x168ceb(0x22a)][_0x168ceb(0x207)](location[_0x168ceb(0x2f8)][_0x168ceb(0x19f)])
    );
client[_0x168ceb(0x226) + _0x168ceb(0x10c)](clientId, redirectUri, { state: '' })
    [_0x168ceb(0x1b6)](() => {
        const _0x39eb10 = _0x168ceb,
            _0x2c792a = {
                xUvYK: _0x39eb10(0x19a) + _0x39eb10(0x1a3) + _0x39eb10(0x1f7),
                yXZIs: function (_0x4c65e9) {
                    return _0x4c65e9();
                },
            };
        console[_0x39eb10(0x26a)](_0x2c792a[_0x39eb10(0x32f)]), _0x2c792a[_0x39eb10(0x277)](bootstrap);
    })
    [_0x168ceb(0x19c)]((_0x14941b) => {
        const _0x3b60a6 = _0x168ceb,
            _0x193272 = {
                WvQcs: _0x3b60a6(0x19a) + _0x3b60a6(0x1ef) + 'd:',
                gFCEz: function (_0xbfd342) {
                    return _0xbfd342();
                },
            };
        console[_0x3b60a6(0x26e)](_0x193272[_0x3b60a6(0x246)], _0x14941b), _0x193272[_0x3b60a6(0x172)](bootstrapError);
    });
function bootstrapError() {
    const _0x26323d = _0x168ceb,
        _0x38cf92 = {
            GPFEe: function (_0x561100, _0x4a17b5) {
                return _0x561100(_0x4a17b5);
            },
            CdvAB: _0x26323d(0x345),
            iZMtV: _0x26323d(0x324),
            aWmiu: _0x26323d(0xf0) + _0x26323d(0x1b4),
        };
    _0x38cf92[_0x26323d(0x2fa)]($, _0x38cf92[_0x26323d(0x2c4)])[_0x26323d(0x285)](_0x38cf92[_0x26323d(0x212)]),
        _0x38cf92[_0x26323d(0x2fa)]($, _0x38cf92[_0x26323d(0x333)])
            [_0x26323d(0x106) + 's'](_0x38cf92[_0x26323d(0x212)])
            [_0x26323d(0x27e)]();
}
function bootstrap() {
    const _0x462213 = _0x168ceb,
        _0x32193c = {
            fojyD: _0x462213(0x12e) + _0x462213(0x175) + _0x462213(0x229),
            rqNbG: function (_0x33de64, _0x51f02a) {
                return _0x33de64(_0x51f02a);
            },
            jZvuO: _0x462213(0x2d5) + _0x462213(0x1e7),
            pxysb: _0x462213(0x368) + _0x462213(0x35d),
            qHyhL: _0x462213(0x1cd) + _0x462213(0x2cb) + _0x462213(0x1fb) + _0x462213(0x179) + _0x462213(0x32c),
            sWJUU: _0x462213(0x236) + _0x462213(0x332),
            NDGzp: function (_0x35595a, _0xf0a86c) {
                return _0x35595a(_0xf0a86c);
            },
            qFAsu: _0x462213(0xf0) + _0x462213(0x1b4),
            kKLWV: _0x462213(0x324),
            sNMVb: _0x462213(0x345),
            HXnVx: function (_0x1e4189, _0x42cb08) {
                return _0x1e4189(_0x42cb08);
            },
            PuBmU: _0x462213(0x123),
            HeIIP: _0x462213(0x35f) + _0x462213(0x32b) + _0x462213(0x348),
            CHAtM: function (_0x4781f8, _0x2f3767) {
                return _0x4781f8(_0x2f3767);
            },
            xAOYc: function (_0x24c971, _0x32de63) {
                return _0x24c971(_0x32de63);
            },
            LIJEF: _0x462213(0x35c) + _0x462213(0x24d) + _0x462213(0x108),
            mXDJB: function (_0x4e8d66, _0x27a428) {
                return _0x4e8d66(_0x27a428);
            },
            ZDlPU: _0x462213(0x167) + _0x462213(0x100),
            xhMSZ: _0x462213(0x320),
            qrcqV: function (_0x272b58, _0x54967d, _0x344a4c) {
                return _0x272b58(_0x54967d, _0x344a4c);
            },
            KzaTY: _0x462213(0x279),
            lmjnh: _0x462213(0x2b3) + 'et',
            Gwirz: function (_0x33f151, _0x5a94ee) {
                return _0x33f151(_0x5a94ee);
            },
            bMNSP: _0x462213(0x2dd),
            eTizc: _0x462213(0x36c) + _0x462213(0x29c) + 'te',
            YOElh: _0x462213(0x23b) + _0x462213(0x225) + _0x462213(0x1f5),
        };
    console[_0x462213(0x26a)](_0x32193c[_0x462213(0xec)]),
        _0x32193c[_0x462213(0x2c2)]($, _0x32193c[_0x462213(0x2e1)])['on'](
            _0x32193c[_0x462213(0x169)],
            _0x32193c[_0x462213(0x200)](
                debounce,
                (_0x2295d6) => {
                    const _0x544230 = _0x462213;
                    console[_0x544230(0x26a)](
                        _0x32193c[_0x544230(0x1c5)],
                        _0x2295d6[_0x544230(0x2b4)][_0x544230(0x2bf)]
                    ),
                        _0x32193c[_0x544230(0x36b)](searchChats, _0x2295d6[_0x544230(0x2b4)][_0x544230(0x2bf)]);
                },
                -0x6 * 0x475 + 0x43e + -0x3 * -0x7e4
            )
        ),
        _0x32193c[_0x462213(0x240)]($, document)['on'](
            _0x32193c[_0x462213(0x362)],
            _0x32193c[_0x462213(0x272)],
            handleDatePresetClick
        ),
        _0x32193c[_0x462213(0x145)]($, document)['on'](
            _0x32193c[_0x462213(0x29d)],
            _0x32193c[_0x462213(0x1c4)],
            handleCustomDateChange
        ),
        console[_0x462213(0x26a)](_0x32193c[_0x462213(0x28f)]),
        usersApi[_0x462213(0x2c6)]()
            [_0x462213(0x1b6)]((_0xe22b9d) => {
                const _0x4d60ea = _0x462213,
                    _0x50fefb = _0x32193c[_0x4d60ea(0x203)][_0x4d60ea(0x157)]('|');
                let _0x7d151d = 0x3a * -0x7 + 0x674 + -0x4de * 0x1;
                while (!![]) {
                    switch (_0x50fefb[_0x7d151d++]) {
                        case '0':
                            console[_0x4d60ea(0x26a)](_0x32193c[_0x4d60ea(0x148)], _0xe22b9d);
                            continue;
                        case '1':
                            console[_0x4d60ea(0x26a)](_0x32193c[_0x4d60ea(0x2ea)]);
                            continue;
                        case '2':
                            console[_0x4d60ea(0x26a)](_0x32193c[_0x4d60ea(0x30c)], userJid);
                            continue;
                        case '3':
                            if (_0xe22b9d[_0x4d60ea(0x12a)]) userJid = _0xe22b9d[_0x4d60ea(0x12a)][_0x4d60ea(0x1a2)];
                            continue;
                        case '4':
                            _0x32193c[_0x4d60ea(0x240)]($, _0x32193c[_0x4d60ea(0x24e)])
                                [_0x4d60ea(0x285)](_0x32193c[_0x4d60ea(0x335)])
                                [_0x4d60ea(0x338)]();
                            continue;
                        case '5':
                            _0x32193c[_0x4d60ea(0x36b)]($, _0x32193c[_0x4d60ea(0x2da)])[_0x4d60ea(0x285)](
                                _0x32193c[_0x4d60ea(0x335)]
                            );
                            continue;
                        case '6':
                            _0x32193c[_0x4d60ea(0x280)]($, _0x32193c[_0x4d60ea(0x298)])[_0x4d60ea(0x106) + 's'](
                                _0x32193c[_0x4d60ea(0x335)]
                            );
                            continue;
                    }
                    break;
                }
            })
            [_0x462213(0x19c)]((_0x5ebb3b) => {
                const _0x4c815d = _0x462213;
                console[_0x4c815d(0x26e)](_0x32193c[_0x4c815d(0x15d)], _0x5ebb3b),
                    _0x32193c[_0x4c815d(0x1e9)]($, _0x32193c[_0x4c815d(0x2da)])[_0x4c815d(0x285)](
                        _0x32193c[_0x4c815d(0x335)]
                    ),
                    _0x32193c[_0x4c815d(0x1ea)]($, _0x32193c[_0x4c815d(0x24e)])
                        [_0x4c815d(0x106) + 's'](_0x32193c[_0x4c815d(0x335)])
                        [_0x4c815d(0x27e)]();
            });
}
function debounce(_0x59ed98, _0x5f5257) {
    const _0x5ec8bf = {
        cYiIX: function (_0x57774b, _0x2e44b5) {
            return _0x57774b(_0x2e44b5);
        },
        qggOh: function (_0x363b28, _0x529744, _0x9411bd) {
            return _0x363b28(_0x529744, _0x9411bd);
        },
    };
    let _0x3d7eaf;
    return function (..._0x269164) {
        const _0x1d4f56 = _0x1480;
        _0x5ec8bf[_0x1d4f56(0xe5)](clearTimeout, _0x3d7eaf),
            (_0x3d7eaf = _0x5ec8bf[_0x1d4f56(0x171)](
                setTimeout,
                () => _0x59ed98[_0x1d4f56(0x27c)](this, _0x269164),
                _0x5f5257
            ));
    };
}
function highlightSearchTerms(_0x21c64d, _0x4bb5ef) {
    const _0x4d4696 = _0x168ceb,
        _0x5dfc52 = {
            ithKX: _0x4d4696(0x142),
            MZXwc: _0x4d4696(0x1e4) + _0x4d4696(0x234) + _0x4d4696(0x343) + _0x4d4696(0x315),
            sPGvK: function (_0x502325, _0x55ab1c) {
                return _0x502325 === _0x55ab1c;
            },
            qUgRQ: _0x4d4696(0x164),
            oLcCu: function (_0x5aaaed, _0x72889e) {
                return _0x5aaaed === _0x72889e;
            },
            rJQFr: _0x4d4696(0x1b3),
            ImiCW: _0x4d4696(0x1d5),
            qTCzy: _0x4d4696(0x2ce),
            Hijtl: _0x4d4696(0x210),
            PVQWS: _0x4d4696(0x2a7),
            uEOGJ: function (_0xbca80c, _0x2ef115) {
                return _0xbca80c < _0x2ef115;
            },
            qyDgr: _0x4d4696(0x216),
            GebBK: function (_0x4ef707, _0x414ea2) {
                return _0x4ef707(_0x414ea2);
            },
        };
    _0x4bb5ef = _0x4bb5ef ? _0x4bb5ef[_0x4d4696(0x13e)]() : '';
    if (!_0x4bb5ef || _0x5dfc52[_0x4d4696(0x1f1)](_0x4bb5ef[_0x4d4696(0x19f)], 0xb7d + -0x1 * -0x238a + -0x2f05))
        return _0x21c64d;
    const _0x7becd5 = _0x4bb5ef[_0x4d4696(0xf5) + 'e']()
        [_0x4d4696(0x157)](/\s+/)
        [_0x4d4696(0x247)]((_0x5c8616) => _0x5c8616[_0x4d4696(0x13e)]()[_0x4d4696(0x19f)] >= -0x9a4 + -0x2576 + 0x2f1c);
    if (_0x5dfc52[_0x4d4696(0x109)](_0x7becd5[_0x4d4696(0x19f)], 0x55b + 0x17a7 * 0x1 + 0x1d02 * -0x1))
        return _0x21c64d;
    const _0x325a45 = document[_0x4d4696(0x1b2) + _0x4d4696(0x2bd)](_0x5dfc52[_0x4d4696(0x1a7)]);
    _0x325a45[_0x4d4696(0x2e5)] = _0x21c64d;
    function _0xe06709(_0x4b7eef) {
        const _0x1de6aa = _0x4d4696;
        if (_0x5dfc52[_0x1de6aa(0x104)](_0x4b7eef[_0x1de6aa(0x271)], Node[_0x1de6aa(0x310)])) {
            let _0x4ae208 = _0x4b7eef[_0x1de6aa(0x290) + 't'],
                _0x4aa04b = ![];
            _0x7becd5[_0x1de6aa(0x197)]((_0x13bf26) => {
                const _0x2db16c = _0x1de6aa,
                    _0x5a02bf = _0x13bf26[_0x2db16c(0x11d)](/[.*+?^${}()|[\]\\]/g, _0x5dfc52[_0x2db16c(0x261)]),
                    _0x58dccd = new RegExp(_0x2db16c(0x204) + _0x5a02bf + _0x2db16c(0x253), 'gi');
                _0x58dccd[_0x2db16c(0x32e)](_0x4ae208) &&
                    ((_0x4aa04b = !![]),
                    (_0x4ae208 = _0x4ae208[_0x2db16c(0x11d)](_0x58dccd, _0x5dfc52[_0x2db16c(0x25d)])));
            });
            if (_0x4aa04b) {
                const _0x5cd697 = document[_0x1de6aa(0x1b2) + _0x1de6aa(0x2bd)](_0x5dfc52[_0x1de6aa(0x351)]);
                (_0x5cd697[_0x1de6aa(0x2e5)] = _0x4ae208),
                    _0x4b7eef[_0x1de6aa(0x267)][_0x1de6aa(0x12b) + 'ld'](_0x5cd697, _0x4b7eef);
                const _0x9282dd = Array[_0x1de6aa(0x361)](_0x5cd697[_0x1de6aa(0x350)]);
                _0x9282dd[_0x1de6aa(0x197)]((_0x3d2fda) => {
                    const _0x2faa04 = _0x1de6aa;
                    _0x5cd697[_0x2faa04(0x267)][_0x2faa04(0x129) + 're'](_0x3d2fda, _0x5cd697);
                }),
                    _0x5cd697[_0x1de6aa(0x267)][_0x1de6aa(0x2ff) + 'd'](_0x5cd697);
            }
        } else {
            if (_0x5dfc52[_0x1de6aa(0x109)](_0x4b7eef[_0x1de6aa(0x271)], Node[_0x1de6aa(0x2d4) + 'DE'])) {
                if (
                    ![
                        _0x5dfc52[_0x1de6aa(0x2e6)],
                        _0x5dfc52[_0x1de6aa(0x255)],
                        _0x5dfc52[_0x1de6aa(0x158)],
                        _0x5dfc52[_0x1de6aa(0x1c2)],
                        _0x5dfc52[_0x1de6aa(0x173)],
                    ][_0x1de6aa(0x316)](_0x4b7eef[_0x1de6aa(0x34e)])
                ) {
                    const _0x3d547f = Array[_0x1de6aa(0x361)](_0x4b7eef[_0x1de6aa(0x350)]);
                    _0x3d547f[_0x1de6aa(0x197)]((_0x3dcdd4) => _0xe06709(_0x3dcdd4));
                }
            }
        }
    }
    return _0x5dfc52[_0x4d4696(0x219)](_0xe06709, _0x325a45), _0x325a45[_0x4d4696(0x2e5)];
}
function _0x48c1() {
    const _0xd08d76 = [
        '...',
        'DESC',
        '5130215zVfspq',
        'getDay',
        'sWJUU',
        'created',
        'qybSp',
        ')\x22\x20',
        'TEXT_NODE',
        '\x20\x20\x20\x20\x20\x20\x20You',
        '1|0|7|2',
        'This\x20Week',
        'earching\x20w',
        '>$1</mark>',
        'includes',
        'LoMVe',
        'total',
        '\x20\x20\x20',
        '\x20(Showing\x20',
        'jGupH',
        'XUjyl',
        'fa-users',
        'div\x20class=',
        't\x20week',
        'input',
        '<span\x20clas',
        'KSuNQ',
        'least\x203\x20ch',
        'hidden',
        '\x20\x20\x20\x20\x20\x20\x20Ope',
        's\x20from\x20thi',
        'rch\x20failed',
        'n\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '/div>',
        'on-right\x22>',
        'get\x20user\x20i',
        'own',
        'sult\x22>\x0a\x20\x20\x20',
        'test',
        'xUvYK',
        '\x20result',
        'terday',
        'et\x20to:',
        'aWmiu',
        'nfylG',
        'kKLWV',
        'a\x20fa-chevr',
        'custom',
        'hide',
        'pZgwq',
        'Already\x20lo',
        'kwclJ',
        'getDate',
        'chevron-le',
        '=\x27color:#e',
        '5|3|6|4|8|',
        '2084224uTVZip',
        'EWZkh',
        'map',
        'highlight\x22',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20<',
        '#loading',
        'eqASA',
        'NQXQY',
        'nfo:',
        'disabled',
        '#paginatio',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<',
        '\x20(Page\x20',
        '\x20\x20<div>No\x20',
        'tagName',
        '6200106PpdLXI',
        'childNodes',
        'qUgRQ',
        'SehGZ',
        'Mrjaz',
        '#search-re',
        '</div>',
        '=\x22avatar\x22>',
        'WBKFz',
        'ass=\x22fa\x20fa',
        'page:',
        's=\x22message',
        'warn',
        'Bootstrap\x20',
        'received:',
        'name',
        'Failed\x20to\x20',
        'pty,\x20hidin',
        'from',
        'KzaTY',
        'uoqfT',
        'ps.mypurec',
        'endsWith',
        'bpikf',
        'image',
        'User\x20data\x20',
        'Yesterday',
        'ation-btn\x22',
        'rqNbG',
        '#start-dat',
        '=\x22paginati',
        'IzCaL',
        'Ndvbh',
        'hort\x20or\x20em',
        'me\x22>',
        'PlCyW',
        '<div\x20class',
        'cYiIX',
        'LAgjl',
        'ZuEtA',
        'HVGaJ',
        'ozHKA',
        'kqBNZ',
        'PSQtM',
        'LIJEF',
        'nNjBY',
        'Select\x20sta',
        's=\x22user-na',
        '#auth-fail',
        'xVRyk',
        'DswhW',
        'uJPiH',
        '\x20\x20\x20\x20\x20\x20</bu',
        'toLowerCas',
        'nkxee',
        'Found\x20',
        'CSTpb',
        'xBhbq',
        'BJRSb',
        'HfNJq',
        'navigateTo',
        ':\x200.5rem;\x20',
        'link\x22></i>',
        '</i>\x0a\x20\x20\x20\x20\x20',
        'put',
        'https://ui',
        'getTime',
        'me=',
        'sPGvK',
        'ust\x20be\x20at\x20',
        'removeClas',
        'POIeI',
        'alled',
        'oLcCu',
        'PxXWJ',
        'ss=\x22fa\x20fa-',
        'citGrant',
        'NSuaD',
        'Lyrwd',
        '\x20\x20\x20</butto',
        'pdxme',
        'QHoQf',
        'ToPage(',
        'UsersApi',
        '-avatars.c',
        'pageCount',
        'anytime',
        'RQbUG',
        '\x20\x20\x20<div\x20cl',
        'images',
        'val',
        '\x20\x20\x20\x20<img\x20s',
        'LPrdL',
        'replace',
        '\x20\x20\x20\x20\x20\x20\x20\x20<d',
        'ith\x20term:',
        'max',
        'title=\x22Ope',
        'ass=\x22user-',
        '#main-app',
        '135qWRgsv',
        'teString',
        'roup',
        'kSzSs',
        'fetch\x20pers',
        'insertBefo',
        'chat',
        'replaceChi',
        'thrRb',
        'tWyot',
        'Search\x20inp',
        'olor:\x20#94a',
        '1TEcQhf',
        'chat-btn\x22\x20',
        'BZTkr',
        'klcan',
        'r\x22\x20onclick',
        'Custom\x20Ran',
        'iv\x20class=\x22',
        'isAdhoc',
        'sort',
        'messages',
        'ApiClient',
        'pSqLN',
        'OkkyD',
        's\x20from\x20yes',
        'trim',
        '=\x22navigate',
        'wfIOs',
        '\x22></i>\x0a\x20\x20\x20',
        '\x5c$&',
        'fromJid',
        'dAgWr',
        'Gwirz',
        'kUgOu',
        'DDbPe',
        'pxysb',
        'wjsMx',
        'today',
        '#date-filt',
        'taMdv',
        'YOyTz',
        '10WeVdTF',
        '\x20for\x20\x22',
        'r\x20search\x20m',
        's=\x22paginat',
        'YRaDu',
        'hfxsh',
        '4|2|3|0|1',
        'tar\x22\x20class',
        'is\x22>...</s',
        'split',
        'qTCzy',
        'luyLQ',
        'ZunCP',
        'toLocaleDa',
        'Abnat',
        'HeIIP',
        'lbkhi',
        '\x20\x20\x20\x20\x20\x20<div',
        'ft\x22></i>\x20P',
        '\x20\x20\x20\x20\x20\x20\x20<di',
        'WQnZa',
        '-badge\x20',
        'span',
        'preset',
        'DNfHA',
        '#search-in',
        '/chat-room',
        'xhMSZ',
        'niIIU',
        'tfSPO',
        'iv\x20style=\x22',
        '486-4218-b',
        '<div\x20style',
        'RDwCX',
        'fa\x20fa-sear',
        'qggOh',
        'gFCEz',
        'PVQWS',
        'FIFKc',
        'ut\x20trigger',
        'csNVu',
        'ynlYX',
        'chatType',
        'ain-app\x20sh',
        'userName',
        'rkFIW',
        'ion-ellips',
        '\x22search-re',
        'ts-icon\x22>\x0a',
        'tent\x22>',
        'fa-lock',
        'nversation',
        'yDxLv',
        '1|2|0|4|3',
        'rt\x20and\x20end',
        'render',
        '</button>',
        's\x20from\x20las',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        's\x20from\x20tod',
        '3878565zakRhU',
        'yesterday',
        'bYEPI',
        'p\x20details:',
        'margin-top',
        'arch.html',
        'e.genesys.',
        '\x20\x20\x20\x20\x20\x20\x20<a\x20',
        'aILvt',
        'YlYxj',
        'searchChat',
        'juNca',
        'forEach',
        'oJaHu',
        'thisMonth',
        'Authentica',
        'revious\x0a\x20\x20',
        'catch',
        '\x20\x20\x20\x20\x20</div',
        'href=\x22',
        'length',
        'yPHla',
        'aVnaS',
        'jabberId',
        'tion\x20succe',
        'Person',
        'LjWcT',
        'direct',
        'qyDgr',
        'Fzfyx',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '\x20</div>\x0a\x20\x20',
        '#custom-da',
        'FaIHX',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20L',
        's\x20month',
        'origin',
        'oading\x22>\x0a\x20',
        'endValue',
        'createElem',
        'CODE',
        'ure',
        '_blank\x22\x20cl',
        'then',
        'thisWeek',
        'group',
        'izQVH',
        'eCBSX',
        'subject',
        'jicGq',
        '\x22\x20target=\x22',
        '#end-date',
        'chat-label',
        's\x20called\x20w',
        'aracters\x20l',
        'Hijtl',
        'oPage(',
        'eTizc',
        'fojyD',
        'imageUri',
        'er\x22>',
        'getMonth',
        'for:\x20\x27',
        'snVly',
        'IMSDD',
        'g\x20results',
        'UI\x20updated',
        'PIGwZ',
        '\x20<div\x20clas',
        'Today',
        'owcbA',
        'ass=\x22pagin',
        '2c596b',
        'v\x20class=\x22s',
        'PRE',
        '\x22paginatio',
        'ds.</div>\x0a',
        '-external-',
        'platformCl',
        'vAgCT',
        'CAmHy',
        'ry\x20again.<',
        'rc=\x22',
        'WSZbO',
        'pan\x20class=',
        'irectory/#',
        'yOviR',
        '=\x22results-',
        'sfaQN',
        '<mark\x20clas',
        '2375088hXhDQF',
        'MrvMN',
        '4|1',
        'adhoc-',
        'CHAtM',
        'xAOYc',
        'GroupsApi',
        'erty',
        'personal-g',
        'https:',
        'tion\x20faile',
        'zLQeQ',
        'uEOGJ',
        'KhXLE',
        'ZrZpW',
        '\x22\x20onclick=',
        'rsMe',
        'sbqcr',
        'ssful',
        'XJccA',
        'essage-con',
        'TWaIT',
        '\x20hidden,\x20m',
        'min',
        'markdownit',
        'KhuaV',
        'Last\x20Week',
        'qrcqV',
        'getChatsRo',
        'groupName',
        'jZvuO',
        '\x5cb(',
        'No\x20results',
        'gdjdI',
        'substring',
        'lt-header\x22',
        'DATE_RANGE',
        'n-top',
        'ent\x20keywor',
        '\x20\x20\x20\x20\x20\x20\x20\x20<s',
        '74c3c\x27>Sea',
        'oQCfR',
        'all',
        'STYLE',
        'isPersonal',
        'iZMtV',
        'VIzMp',
        'fetch\x20grou',
        'PJuSs',
        'div',
        'toString',
        '</div>\x0a\x20\x20\x20',
        'GebBK',
        '\x20dates',
        'rNnRl',
        'TMGdi',
        'i>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '>1</button',
        'chat-type-',
        'qeBOb',
        'ation-btn\x20',
        'startValue',
        'pOSmM',
        'location',
        'all\x20getUse',
        'loginImpli',
        'getGroups',
        'ZzVFo',
        'ed:',
        'href',
        'OBlJq',
        'PGEnC',
        'setHours',
        'v\x20class=\x22n',
        '\x20to\x20',
        'yCFZw',
        'rNNAV',
        'ient',
        '<button\x20cl',
        's=\x22search-',
        '\x20\x20\x20</div>\x0a',
        'User\x20JID\x20s',
        '\x20\x20\x20\x20\x20\x20</a>',
        's\x20week',
        'info\x22>\x0a\x20\x20\x20',
        '\x20\x20\x20\x20\x20<i\x20cl',
        'About\x20to\x20c',
        'toLocaleSt',
        'on-contain',
        'FqYgW',
        'lsQPQ',
        'NDGzp',
        'hasOwnProp',
        'vvTFj',
        '\x20found\x20for',
        'SnwxS',
        'AIkMV',
        'WvQcs',
        'filter',
        'earch-resu',
        'tton>',
        'entities',
        '=\x22no-resul',
        '-spinner\x20f',
        'function\x20c',
        'qFAsu',
        '440712TYRPdz',
        'GVtDF',
        'text',
        '\x200.9rem;\x20c',
        ')\x5cb',
        'ouzPu',
        'ImiCW',
        'pan>',
        's\x20from\x20',
        'This\x20Month',
        'oading\x20pag',
        '\x22\x20alt=\x22Ava',
        'ong.\x0a\x20\x20\x20\x20\x20',
        'results\x20fo',
        'MZXwc',
        'yEHMc',
        'container\x22',
        'aKAXX',
        'ithKX',
        'VIeBs',
        'Group',
        'UGpgp',
        'RoWGU',
        '...\x0a\x20\x20\x20\x20\x20\x20',
        'parentNode',
        '/client-ap',
        '\x20\x20\x20\x20\x20\x20</di',
        'log',
        'push',
        'html',
        'o-results\x22',
        'error',
        'LTHxi',
        '#search-me',
        'nodeType',
        'lmjnh',
        'iv>\x0a\x20\x20\x20\x20\x20\x20',
        'bRCxS',
        'lastWeek',
        'active',
        'yXZIs',
        '7dHhLkX',
        'click',
        'rzbna',
        'ring',
        'apply',
        'rkILT',
        'show',
        'LjvuB',
        'HXnVx',
        'getFullYea',
        'ogMvC',
        'QtpZh',
        '\x20details\x20f',
        'addClass',
        'ZjyqF',
        'nYlRR',
        '\x22navigateT',
        'HUoyz',
        'YJaqI',
        'om/api/?na',
        'v\x20class=\x22m',
        'Page(',
        's\x20from\x20all',
        'YOElh',
        'textConten',
        'results',
        'startsWith',
        'MvtfJ',
        'BAlTP',
        'Bdhig',
        '\x20\x20\x20\x20\x20\x20\x20</d',
        '\x20onclick=\x22',
        'PuBmU',
        '\x22chat-type',
        'FfMhg',
        'lCKOn',
        'e,\x20#end-da',
        'bMNSP',
        'ilYOF',
        'or\x20',
        'Qbfwe',
        'te-inputs',
        's\x22>\x0a\x20\x20\x20\x20\x20\x20',
        'i\x20class=\x22f',
        'n\x20chat\x22>\x0a\x20',
        'https://ap',
        '<i\x20class=\x22',
        'MARK',
        'data',
        'f90-020b9e',
        'lseQO',
        'jid',
        'ass=\x22open-',
        'a-spin\x22></',
        'pping\x20sear',
        'MHMOo',
        'YRNgk',
        'WgCHL',
        '\x20time',
        '.date-pres',
        'target',
        'r\x22>\x0a\x20\x20\x20\x20\x20\x20',
        'loud.com/d',
        'ading,\x20ski',
        'KTOzw',
        '\x20\x20\x20\x20\x20</spa',
        'sults',
        'OVvBM',
        'font-size:',
        'ent',
        '\x0a\x20\x20\x20\x20\x20\x20<di',
        'value',
        'body',
        'onal\x20group',
        'mXDJB',
        'SearchApi',
        'CdvAB',
        '6c467620-9',
        'getUsersMe',
        'Xrvig',
        'Showing\x20co',
        'AHfAl',
        'fullJabber',
        '\x20-\x20loading',
        'RlJQo',
        '.\x20Please\x20t',
        'SCRIPT',
        'n>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'UcjsL',
        'und.\x20Try\x20s',
        '@conferenc',
        'iprgX',
        'ELEMENT_NO',
        '0|3|2|5|6|',
        'mpTez',
        'Ttaur',
        '\x20\x20\x20\x20Next\x20<',
        'fa-user',
        'sNMVb',
        'Dcwuo',
        'ChatApi',
        'change',
        'er-summary',
        'n-containe',
        '-date\x22>',
        'ZDlPU',
        'ToPage(1)\x22',
        'instance',
        'postSearch',
        'innerHTML',
        'rJQFr',
        '32167883GnnXcH',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20\x20\x20\x20<i\x20cla',
        'qHyhL',
        'Searching\x20',
        'szKKv',
        'UmqXE',
        'index',
        'XmMCW',
        'Direct',
        'orgspan.co',
        'gination-l',
        '/div>\x0a\x20\x20\x20\x20',
        'ps/chat-se',
        '3b8;\x22>\x0a\x20\x20\x20',
        'ch\x22></i>\x0a\x20',
        '\x20-\x20',
        'protocol',
        'jUaRR',
        'GPFEe',
        'Term\x20too\x20s',
        'page-numbe',
        'RMurs',
        'v>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'removeChil',
        '\x20class=\x22pa',
        'nZuGt',
        'hPdvW',
        'nKxDP',
        'targetJid',
        'pidjP',
        'ith\x20differ',
        'txdIL',
    ];
    _0x48c1 = function () {
        return _0xd08d76;
    };
    return _0x48c1();
}
function searchChats(_0x321981, _0x3851d5 = -0x36 * 0x4 + 0x1b93 + -0x1aba * 0x1) {
    const _0xa373dd = _0x168ceb,
        _0x23840d = {
            XJccA: _0xa373dd(0x183),
            YJaqI: function (_0xf9af2e, _0x543c97) {
                return _0xf9af2e(_0x543c97);
            },
            kSzSs: _0xa373dd(0x34a) + _0xa373dd(0x20a),
            NSuaD: _0xa373dd(0x324),
            LjvuB: function (_0x25d6b7, _0x444387) {
                return _0x25d6b7(_0x444387);
            },
            rkILT: _0xa373dd(0x354) + _0xa373dd(0x2ba),
            PxXWJ:
                _0xa373dd(0x16e) +
                _0xa373dd(0x33e) +
                _0xa373dd(0x20d) +
                _0xa373dd(0x327) +
                _0xa373dd(0x2cd) +
                _0xa373dd(0x1dc) +
                _0xa373dd(0x329),
            pidjP: _0xa373dd(0x270) + 'ta',
            lseQO: _0xa373dd(0x34a) + 'n',
            ilYOF: _0xa373dd(0x195) + _0xa373dd(0x1c0) + _0xa373dd(0x11f),
            RDwCX: _0xa373dd(0x359),
            iprgX: function (_0x473473, _0x5bbb73) {
                return _0x473473 < _0x5bbb73;
            },
            rNNAV: _0xa373dd(0x33f) + _0xa373dd(0x312),
            PSQtM: function (_0x49747e, _0x48ef3e) {
                return _0x49747e(_0x48ef3e);
            },
            LTHxi: function (_0x1ced89, _0x21ebbd) {
                return _0x1ced89(_0x21ebbd);
            },
            aVnaS: _0xa373dd(0x2fb) + _0xa373dd(0x370) + _0xa373dd(0x360) + _0xa373dd(0x1cc),
            bRCxS: function (_0x30f661, _0x55736c) {
                return _0x30f661(_0x55736c);
            },
            hPdvW: _0xa373dd(0x33a) + _0xa373dd(0x2b7) + _0xa373dd(0x2ae) + 'ch',
            wfIOs: function (_0x461ce8, _0x3164be) {
                return _0x461ce8 !== _0x3164be;
            },
            PJuSs: _0xa373dd(0x116),
            SehGZ: function (_0x3541a2) {
                return _0x3541a2();
            },
            VIzMp: function (_0x45e6fb) {
                return _0x45e6fb();
            },
            RlJQo: function (_0x313610, _0x2c41e5) {
                return _0x313610 > _0x2c41e5;
            },
            nYlRR: _0xa373dd(0x308),
            CSTpb: _0xa373dd(0x2c0),
            yDxLv: function (_0x54ed4b) {
                return _0x54ed4b();
            },
            MHMOo: _0xa373dd(0x209),
            UmqXE: _0xa373dd(0x30d),
            PlCyW: _0xa373dd(0x309),
            rkFIW: _0xa373dd(0x361),
            uJPiH: _0xa373dd(0x139),
        };
    console[_0xa373dd(0x26a)](_0x23840d[_0xa373dd(0x29e)], _0x321981, _0x23840d[_0xa373dd(0x16f)], _0x3851d5),
        (_0x321981 = _0x321981 ? _0x321981[_0xa373dd(0x13e)]() : ''),
        (lastSearchTerm = _0x321981),
        (currentPage = _0x3851d5);
    if (
        !_0x321981 ||
        _0x23840d[_0xa373dd(0x2d3)](_0x321981[_0xa373dd(0x19f)], -0xf06 * 0x1 + 0x41c * 0x6 + -0x3 * 0x335)
    ) {
        const _0x5be930 = _0x23840d[_0xa373dd(0x231)][_0xa373dd(0x157)]('|');
        let _0x250c9a = -0x2220 + -0x1 * 0x1d84 + -0x2 * -0x1fd2;
        while (!![]) {
            switch (_0x5be930[_0x250c9a++]) {
                case '0':
                    totalResults = -0xfbb + 0x2a * -0x13 + 0x12d9;
                    continue;
                case '1':
                    searchResults = [];
                    continue;
                case '2':
                    return;
                case '3':
                    _0x23840d[_0xa373dd(0xeb)]($, _0x23840d[_0xa373dd(0x27d)])[_0xa373dd(0x285)](
                        _0x23840d[_0xa373dd(0x10d)]
                    );
                    continue;
                case '4':
                    _0x23840d[_0xa373dd(0x26f)]($, _0x23840d[_0xa373dd(0x127)])[_0xa373dd(0x285)](
                        _0x23840d[_0xa373dd(0x10d)]
                    );
                    continue;
                case '5':
                    console[_0xa373dd(0x26a)](_0x23840d[_0xa373dd(0x1a1)]);
                    continue;
                case '6':
                    _0x23840d[_0xa373dd(0x274)]($, _0x23840d[_0xa373dd(0x305)])[_0xa373dd(0x285)](
                        _0x23840d[_0xa373dd(0x10d)]
                    );
                    continue;
                case '7':
                    totalPages = -0x3b * 0xa7 + 0x940 + -0xf * -0x1f3;
                    continue;
                case '8':
                    _0x23840d[_0xa373dd(0xeb)]($, _0x23840d[_0xa373dd(0x2aa)])[_0xa373dd(0x285)](
                        _0x23840d[_0xa373dd(0x10d)]
                    );
                    continue;
            }
            break;
        }
    }
    if (isLoading) {
        console[_0xa373dd(0x26a)](_0x23840d[_0xa373dd(0x302)]);
        return;
    }
    isLoading = !![];
    let _0xf11bf7 = _0xa373dd(0x2eb) + _0xa373dd(0x1c9) + _0x321981 + '\x27';
    if (_0x23840d[_0xa373dd(0x140)](currentDateFilter, _0x23840d[_0xa373dd(0x215)])) {
        const _0x1697d4 = _0x23840d[_0xa373dd(0x352)](getDateRange);
        _0x1697d4[_0xa373dd(0x222)] &&
            _0x1697d4[_0xa373dd(0x1b1)] &&
            (_0xf11bf7 += '\x20(' + _0x23840d[_0xa373dd(0x213)](getDateFilterDisplayText) + ')');
    }
    _0x23840d[_0xa373dd(0x2cc)](_0x3851d5, -0x260c + -0x6 * 0xbc + -0x1 * -0x2a75) &&
        (_0xf11bf7 += _0xa373dd(0x34c) + _0x3851d5 + ')');
    (_0xf11bf7 += _0x23840d[_0xa373dd(0x287)]),
        _0x23840d[_0xa373dd(0x26f)]($, _0x23840d[_0xa373dd(0x305)])
            [_0xa373dd(0x251)](_0xf11bf7)
            [_0xa373dd(0x106) + 's'](_0x23840d[_0xa373dd(0x10d)]);
    let _0x4ffe8e = [{ fields: [_0x23840d[_0xa373dd(0xf8)]], value: _0x321981 }];
    if (_0x23840d[_0xa373dd(0x140)](currentDateFilter, _0x23840d[_0xa373dd(0x215)])) {
        const _0x348c7a = _0x23840d[_0xa373dd(0x182)](getDateRange);
        _0x348c7a[_0xa373dd(0x222)] &&
            _0x348c7a[_0xa373dd(0x1b1)] &&
            _0x4ffe8e[_0xa373dd(0x26b)]({
                type: _0x23840d[_0xa373dd(0x2af)],
                fields: [_0x23840d[_0xa373dd(0x2ed)]],
                startValue: _0x348c7a[_0xa373dd(0x222)],
                endValue: _0x348c7a[_0xa373dd(0x1b1)],
            });
    }
    let _0x46e43d = {
        pageSize: 0x32,
        pageNumber: _0x3851d5,
        sortBy: _0x23840d[_0xa373dd(0x2ed)],
        sortOrder: _0x23840d[_0xa373dd(0xe3)],
        expand: [_0x23840d[_0xa373dd(0x17b)], 'to'],
        types: [_0x23840d[_0xa373dd(0xf3)]],
        query: _0x4ffe8e,
    };
    searchApi[_0xa373dd(0x2e4)](_0x46e43d, { profile: ![] })
        [_0xa373dd(0x1b6)](getSearchResults)
        [_0xa373dd(0x19c)](() => {
            const _0x58a1dc = _0xa373dd,
                _0x21db3d = _0x23840d[_0x58a1dc(0x1f8)][_0x58a1dc(0x157)]('|');
            let _0x51b779 = -0xcdb + -0x21cb + 0x2ea6 * 0x1;
            while (!![]) {
                switch (_0x21db3d[_0x51b779++]) {
                    case '0':
                        _0x23840d[_0x58a1dc(0x28a)]($, _0x23840d[_0x58a1dc(0x127)])[_0x58a1dc(0x285)](
                            _0x23840d[_0x58a1dc(0x10d)]
                        );
                        continue;
                    case '1':
                        _0x23840d[_0x58a1dc(0x27f)]($, _0x23840d[_0x58a1dc(0x27d)])
                            [_0x58a1dc(0x26c)](_0x23840d[_0x58a1dc(0x10a)])
                            [_0x58a1dc(0x106) + 's'](_0x23840d[_0x58a1dc(0x10d)]);
                        continue;
                    case '2':
                        _0x23840d[_0x58a1dc(0x27f)]($, _0x23840d[_0x58a1dc(0x305)])[_0x58a1dc(0x285)](
                            _0x23840d[_0x58a1dc(0x10d)]
                        );
                        continue;
                    case '3':
                        isLoading = ![];
                        continue;
                    case '4':
                        _0x23840d[_0x58a1dc(0x27f)]($, _0x23840d[_0x58a1dc(0x2aa)])[_0x58a1dc(0x285)](
                            _0x23840d[_0x58a1dc(0x10d)]
                        );
                        continue;
                }
                break;
            }
        });
}
function getSearchResults(_0x2475b6) {
    const _0x47f2b1 = _0x168ceb,
        _0x25d73a = {
            snVly: _0x47f2b1(0x1a4),
            YRNgk: function (_0x2c7b00, _0x3452cc) {
                return _0x2c7b00 + _0x3452cc;
            },
            BAlTP: _0x47f2b1(0x101) + _0x47f2b1(0x114) + _0x47f2b1(0x28b) + _0x47f2b1(0x103),
            izQVH: function (_0x215ddf, _0xe35c4a) {
                return _0x215ddf(_0xe35c4a);
            },
            QHoQf: _0x47f2b1(0x2d2) + 'e',
            DNfHA: _0x47f2b1(0x263),
            RoWGU: _0x47f2b1(0x2f0),
            Ttaur: _0x47f2b1(0x2d2) + _0x47f2b1(0x191) + _0x47f2b1(0x2f1) + 'm',
            GVtDF: _0x47f2b1(0x1e8),
            MvtfJ: function (_0x3e2203, _0x5e80ed) {
                return _0x3e2203 === _0x5e80ed;
            },
            WSZbO: function (_0x266e88) {
                return _0x266e88();
            },
            thrRb: _0x47f2b1(0x291),
            gdjdI: function (_0xb70a92, _0x3d182b) {
                return _0xb70a92 > _0x3d182b;
            },
            nKxDP: function (_0x38e7ca) {
                return _0x38e7ca();
            },
            hfxsh: function (_0x3c1d76) {
                return _0x3c1d76();
            },
        };
    (isLoading = ![]),
        (totalResults = _0x2475b6[_0x47f2b1(0x318)] || -0x1b03 + 0x20c6 + -0x19 * 0x3b),
        (totalPages = _0x2475b6[_0x47f2b1(0x115)] || -0x1 * -0x116 + -0x1a7e + -0x21e * -0xc),
        (searchResults = []);
    if (
        _0x2475b6[_0x47f2b1(0x241) + _0x47f2b1(0x1ec)](_0x25d73a[_0x47f2b1(0x12c)]) &&
        _0x25d73a[_0x47f2b1(0x206)](
            _0x2475b6[_0x47f2b1(0x291)][_0x47f2b1(0x19f)],
            0x1 * -0x10a7 + 0x2158 + -0x10b1 * 0x1
        )
    ) {
        let _0xd8d6dd = [];
        _0x2475b6[_0x47f2b1(0x291)][_0x47f2b1(0x197)]((_0x2d13ec) => {
            const _0x4d759a = _0x47f2b1;
            let _0x1caab8 = _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x35e)] || _0x25d73a[_0x4d759a(0x1ca)],
                _0x3dc047 =
                    _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x119)] &&
                    _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x119)][0x3e6 * 0x6 + 0xac8 + 0x1e6 * -0x12] &&
                    _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x119)][0x17f3 + -0x2 * -0x7b2 + -0x2757][_0x4d759a(0x1c6)]
                        ? _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x119)][-0xa6c + 0x755 * 0x1 + -0x1 * -0x317][
                              _0x4d759a(0x1c6)
                          ]
                        : _0x25d73a[_0x4d759a(0x2b0)](
                              _0x25d73a[_0x4d759a(0x294)],
                              _0x25d73a[_0x4d759a(0x1b9)](encodeURIComponent, _0x1caab8)
                          ),
                _0x4d3f34 = _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x12a)]
                    ? _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x12a)][_0x4d759a(0x1a2)]
                    : _0x2d13ec[_0x4d759a(0x361)][_0x4d759a(0x2ab)],
                _0x425ced = _0x2d13ec['to'][_0x4d759a(0x12a)]
                    ? _0x2d13ec['to'][_0x4d759a(0x12a)][_0x4d759a(0x1a2)]
                    : _0x2d13ec['to'][_0x4d759a(0x2ab)],
                _0x4f7b4d = _0x425ced[_0x4d759a(0x365)](_0x25d73a[_0x4d759a(0x111)])
                    ? _0x25d73a[_0x4d759a(0x166)]
                    : _0x25d73a[_0x4d759a(0x265)],
                _0x4f5ae6 = _0x25d73a[_0x4d759a(0x166)],
                _0x35bc0d = _0x425ced;
            _0x425ced[_0x4d759a(0x365)](_0x25d73a[_0x4d759a(0x111)]) &&
                ((_0x425ced = _0x425ced[_0x4d759a(0x11d)](/@conference$/, _0x25d73a[_0x4d759a(0x2d7)])),
                _0xd8d6dd[_0x4d759a(0x26b)]({
                    jabberId: _0x35bc0d,
                    fullJabberId: _0x425ced,
                    index: searchResults[_0x4d759a(0x19f)],
                    isAdhoc: _0x35bc0d[_0x4d759a(0x292)](_0x25d73a[_0x4d759a(0x250)]),
                }));
            let _0x297f2f = {
                fromJid: _0x4d3f34,
                targetJid: _0x425ced,
                body: _0x2d13ec[_0x4d759a(0x2c0)],
                created: _0x2d13ec[_0x4d759a(0x30d)],
                userName: _0x1caab8,
                image: _0x3dc047,
                chatType: _0x4f7b4d,
                groupName: _0x4f5ae6,
                isPersonalGroup:
                    _0x35bc0d[_0x4d759a(0x292)](_0x25d73a[_0x4d759a(0x250)]) &&
                    _0x25d73a[_0x4d759a(0x293)](_0x4f7b4d, _0x25d73a[_0x4d759a(0x166)]),
            };
            searchResults[_0x4d759a(0x26b)](_0x297f2f);
        }),
            _0x25d73a[_0x47f2b1(0x206)](_0xd8d6dd[_0x47f2b1(0x19f)], -0x13f2 + -0x302 * -0x3 + 0xaec)
                ? _0x25d73a[_0x47f2b1(0x1b9)](fetchGroupDetails, _0xd8d6dd)[_0x47f2b1(0x1b6)](() => {
                      const _0x1d2e0c = _0x47f2b1;
                      searchResults[_0x1d2e0c(0x138)](
                          (_0x501d87, _0x5471a0) =>
                              new Date(_0x5471a0[_0x1d2e0c(0x30d)]) - new Date(_0x501d87[_0x1d2e0c(0x30d)])
                      ),
                          _0x25d73a[_0x1d2e0c(0x1de)](renderSearchResults);
                  })
                : (searchResults[_0x47f2b1(0x138)](
                      (_0x3b1ee2, _0x24ad04) =>
                          new Date(_0x24ad04[_0x47f2b1(0x30d)]) - new Date(_0x3b1ee2[_0x47f2b1(0x30d)])
                  ),
                  _0x25d73a[_0x47f2b1(0x303)](renderSearchResults));
    } else _0x25d73a[_0x47f2b1(0x153)](renderSearchResults);
}
async function fetchGroupDetails(_0x39c5ff) {
    const _0xeccd60 = _0x168ceb,
        _0x2a2070 = {
            WBKFz: _0xeccd60(0x2d2) + 'e',
            yPHla: function (_0x282bd1, _0x5dba78) {
                return _0x282bd1 > _0x5dba78;
            },
            kUgOu: function (_0x56f02b, _0x981eca) {
                return _0x56f02b > _0x981eca;
            },
            ZrZpW: function (_0x1c3e1b, _0x3796cf) {
                return _0x1c3e1b > _0x3796cf;
            },
            yEHMc: _0xeccd60(0x35f) + _0xeccd60(0x214) + _0xeccd60(0x18e),
        };
    try {
        const _0x3f7155 = _0x39c5ff[_0xeccd60(0x247)]((_0x47c50c) => !_0x47c50c[_0xeccd60(0x137)]),
            _0x5e50d9 = _0x39c5ff[_0xeccd60(0x247)]((_0x2cab08) => _0x2cab08[_0xeccd60(0x137)]);
        if (_0x2a2070[_0xeccd60(0x1a0)](_0x3f7155[_0xeccd60(0x19f)], -0xdc3 * 0x1 + -0x1 * 0x13a4 + 0x2167)) {
            const _0x5b5f4c = [...new Set(_0x3f7155[_0xeccd60(0x342)]((_0x2f16e7) => _0x2f16e7[_0xeccd60(0x1a2)]))],
                _0x493762 = _0x5b5f4c[_0xeccd60(0x342)](
                    (_0x15562a) => _0x15562a[_0xeccd60(0x157)]('@')[-0x5d * -0x4b + 0x8 * -0x332 + 0x1 * -0x1af]
                ),
                _0x4de791 = {},
                _0x19097e = { jabberId: _0x493762, pageSize: 0x64 },
                _0x1a7c6c = await groupsApi[_0xeccd60(0x227)](_0x19097e);
            _0x1a7c6c[_0xeccd60(0x24a)] &&
                _0x2a2070[_0xeccd60(0x146)](
                    _0x1a7c6c[_0xeccd60(0x24a)][_0xeccd60(0x19f)],
                    -0x2134 + -0xc6d + -0x1 * -0x2da1
                ) &&
                _0x1a7c6c[_0xeccd60(0x24a)][_0xeccd60(0x197)]((_0x495bf8) => {
                    const _0x15fe41 = _0xeccd60;
                    if (
                        _0x495bf8[_0x15fe41(0x12a)] &&
                        _0x495bf8[_0x15fe41(0x12a)][_0x15fe41(0x1a2)] &&
                        _0x495bf8[_0x15fe41(0x35e)]
                    ) {
                        const _0x31a9af = _0x495bf8[_0x15fe41(0x12a)][_0x15fe41(0x1a2)];
                        _0x4de791[_0x31a9af] = _0x495bf8[_0x15fe41(0x35e)];
                        const _0x1b7af0 = _0x31a9af[_0x15fe41(0x11d)](
                            /@conference\.genesys\.orgspan\.com$/,
                            _0x2a2070[_0x15fe41(0x357)]
                        );
                        _0x4de791[_0x1b7af0] = _0x495bf8[_0x15fe41(0x35e)];
                    }
                }),
                _0x3f7155[_0xeccd60(0x197)]((_0x495100) => {
                    const _0x3a0cce = _0xeccd60,
                        _0x13d41a = _0x4de791[_0x495100[_0x3a0cce(0x1a2)]];
                    _0x13d41a && (searchResults[_0x495100[_0x3a0cce(0x2ee)]][_0x3a0cce(0x202)] = _0x13d41a);
                });
        }
        if (_0x2a2070[_0xeccd60(0x1f3)](_0x5e50d9[_0xeccd60(0x19f)], -0x37b + -0x1a * -0x61 + -0x65f)) {
            const _0x300b10 = _0x5e50d9[_0xeccd60(0x342)](async (_0xc998a3) => {
                const _0x327f1 = _0xeccd60;
                try {
                    const _0x1df34a = await chatApi[_0x327f1(0x201) + 'om'](_0xc998a3[_0x327f1(0x2ca) + 'Id']);
                    _0x1df34a &&
                        _0x1df34a[_0x327f1(0x1bb)] &&
                        (searchResults[_0xc998a3[_0x327f1(0x2ee)]][_0x327f1(0x202)] = _0x1df34a[_0x327f1(0x1bb)]);
                } catch (_0x90501) {
                    console[_0x327f1(0x35b)](
                        _0x327f1(0x35f) +
                            _0x327f1(0x128) +
                            _0x327f1(0x2c1) +
                            _0x327f1(0x284) +
                            _0x327f1(0x29f) +
                            _0xc998a3[_0x327f1(0x2ca) + 'Id'] +
                            ':',
                        _0x90501
                    );
                }
            });
            await Promise[_0xeccd60(0x20f)](_0x300b10);
        }
    } catch (_0x53ecbb) {
        console[_0xeccd60(0x35b)](_0x2a2070[_0xeccd60(0x25e)], _0x53ecbb);
    }
}
function renderSearchResults() {
    const _0x39a7c9 = _0x168ceb,
        _0x3b4321 = {
            XmMCW: function (_0xe9fa72, _0x1e8c37) {
                return _0xe9fa72 == _0x1e8c37;
            },
            lbkhi: function (_0x41a53c, _0x187702) {
                return _0x41a53c === _0x187702;
            },
            AIkMV: _0x39a7c9(0x263),
            LjWcT: function (_0x1cd114, _0x5d9a42) {
                return _0x1cd114 === _0x5d9a42;
            },
            kwclJ: _0x39a7c9(0x21f) + _0x39a7c9(0x1ed) + _0x39a7c9(0x126),
            LoMVe: _0x39a7c9(0x180),
            SnwxS: _0x39a7c9(0x21f) + _0x39a7c9(0x1b8),
            nfylG: _0x39a7c9(0x31d),
            RQbUG: _0x39a7c9(0x21f) + _0x39a7c9(0x1a6),
            LAgjl: _0x39a7c9(0x2d9),
            zLQeQ: function (_0x575ca2, _0x54bfc2, _0x3ca71d) {
                return _0x575ca2(_0x54bfc2, _0x3ca71d);
            },
            bpikf: function (_0x19f1cc, _0x52c412) {
                return _0x19f1cc > _0x52c412;
            },
            YOyTz: function (_0x47ebc2, _0x27ea93) {
                return _0x47ebc2 + _0x27ea93;
            },
            PIGwZ: function (_0x400557, _0x351115) {
                return _0x400557 * _0x351115;
            },
            OkkyD: function (_0x4c05aa, _0x6cb210) {
                return _0x4c05aa - _0x6cb210;
            },
            ouzPu: function (_0x1e0f44, _0x27f00c) {
                return _0x1e0f44 - _0x27f00c;
            },
            yOviR: function (_0x575c09, _0x145f29) {
                return _0x575c09 > _0x145f29;
            },
            ZzVFo: function (_0x1d13a9, _0xba00cc) {
                return _0x1d13a9 !== _0xba00cc;
            },
            qeBOb: _0x39a7c9(0x116),
            niIIU: function (_0x1aeccd) {
                return _0x1aeccd();
            },
            bYEPI: _0x39a7c9(0xe4) + _0x39a7c9(0x1e2) + _0x39a7c9(0x25f) + '>',
            YlYxj: _0x39a7c9(0x355),
            ZunCP: function (_0x5bac7e, _0x14ca16) {
                return _0x5bac7e > _0x14ca16;
            },
            Qbfwe: function (_0xb9cc6b, _0x5c942e) {
                return _0xb9cc6b >= _0x5c942e;
            },
            oQCfR: function (_0x22aa5f, _0x16b4c9) {
                return _0x22aa5f(_0x16b4c9);
            },
            DswhW: _0x39a7c9(0x354) + _0x39a7c9(0x2ba),
            EWZkh: _0x39a7c9(0x324),
            VIeBs: _0x39a7c9(0x270) + 'ta',
            ozHKA: _0x39a7c9(0x34a) + _0x39a7c9(0x20a),
            txdIL: function (_0x57f9e5, _0x153671) {
                return _0x57f9e5(_0x153671);
            },
            Abnat: _0x39a7c9(0x34a) + 'n',
            nZuGt: function (_0x424eec, _0x41d796) {
                return _0x424eec(_0x41d796);
            },
            KhuaV: function (_0x1162f5, _0x5dd467) {
                return _0x1162f5(_0x5dd467);
            },
        };
    let _0x3cc78b = '',
        _0x242a86 = '',
        _0x668b6c = '';
    if (_0x3b4321[_0x39a7c9(0x366)](searchResults[_0x39a7c9(0x19f)], -0x6f4 + 0x1 * -0xe3 + 0x7d7)) {
        const _0x4e689b = _0x3b4321[_0x39a7c9(0x14d)](
                _0x3b4321[_0x39a7c9(0x1ce)](
                    _0x3b4321[_0x39a7c9(0x13c)](currentPage, 0xcae * -0x2 + 0x74 * 0x41 + -0x3 * 0x15d),
                    0x18ad + -0x1606 + -0x275
                ),
                0x73c + -0x51 * 0xe + -0x2cd
            ),
            _0x500c0b = Math[_0x39a7c9(0x1fc)](
                _0x3b4321[_0x39a7c9(0x254)](
                    _0x3b4321[_0x39a7c9(0x14d)](_0x4e689b, searchResults[_0x39a7c9(0x19f)]),
                    0x89 * 0x39 + 0x28b + -0x210b
                ),
                totalResults
            );
        (_0x668b6c =
            _0x39a7c9(0xf7) +
            totalResults +
            _0x39a7c9(0x330) +
            (_0x3b4321[_0x39a7c9(0x1e1)](totalResults, 0x2376 + -0x11 * -0x133 + -0x37d8 * 0x1) ? 's' : '') +
            _0x39a7c9(0x14f) +
            lastSearchTerm +
            '\x22'),
            _0x3b4321[_0x39a7c9(0x228)](currentDateFilter, _0x3b4321[_0x39a7c9(0x220)]) &&
                (_0x668b6c += '\x20(' + _0x3b4321[_0x39a7c9(0x16a)](getDateFilterDisplayText) + ')'),
            (_0x668b6c += _0x39a7c9(0x31a) + _0x4e689b + '-' + _0x500c0b + ')'),
            (_0x3cc78b = _0x3b4321[_0x39a7c9(0x18d)]),
            searchResults[_0x39a7c9(0x197)]((_0x5d54bc) => {
                const _0x4816da = _0x39a7c9;
                let _0x18d27c = _0x3b4321[_0x4816da(0x2ef)](_0x5d54bc[_0x4816da(0x304)], userJid)
                        ? _0x5d54bc[_0x4816da(0x143)]
                        : _0x5d54bc[_0x4816da(0x304)],
                    _0x2cb78c = _0x3b4321[_0x4816da(0x15e)](_0x5d54bc[_0x4816da(0x178)], _0x3b4321[_0x4816da(0x245)])
                        ? _0x4816da(0x2a5) +
                          _0x4816da(0x364) +
                          _0x4816da(0x2b6) +
                          _0x4816da(0x1e0) +
                          _0x4816da(0x168) +
                          '/' +
                          _0x18d27c
                        : _0x4816da(0x2a5) +
                          _0x4816da(0x364) +
                          _0x4816da(0x2b6) +
                          _0x4816da(0x1e0) +
                          _0x4816da(0x168) +
                          '/' +
                          _0x18d27c,
                    _0x368581 = _0x3b4321[_0x4816da(0x1a5)](_0x5d54bc[_0x4816da(0x178)], _0x3b4321[_0x4816da(0x245)])
                        ? _0x5d54bc[_0x4816da(0x202)]
                        : _0x5d54bc[_0x4816da(0x178)],
                    _0x386abb,
                    _0x1925cf;
                _0x3b4321[_0x4816da(0x1a5)](_0x5d54bc[_0x4816da(0x178)], _0x3b4321[_0x4816da(0x245)])
                    ? _0x5d54bc[_0x4816da(0x211) + _0x4816da(0x263)]
                        ? ((_0x386abb = _0x3b4321[_0x4816da(0x33b)]),
                          (_0x1925cf = _0x3b4321[_0x4816da(0x317)]),
                          (_0x368581 = '' + _0x368581))
                        : ((_0x386abb = _0x3b4321[_0x4816da(0x244)]), (_0x1925cf = _0x3b4321[_0x4816da(0x334)]))
                    : ((_0x386abb = _0x3b4321[_0x4816da(0x117)]), (_0x1925cf = _0x3b4321[_0x4816da(0xe6)])),
                    (_0x3cc78b +=
                        _0x4816da(0x34b) +
                        _0x4816da(0x31e) +
                        _0x4816da(0x17d) +
                        _0x4816da(0x32d) +
                        _0x4816da(0x161) +
                        _0x4816da(0x1d4) +
                        _0x4816da(0x248) +
                        _0x4816da(0x208) +
                        _0x4816da(0x188) +
                        _0x4816da(0x11b) +
                        _0x4816da(0x1dd) +
                        _0x5d54bc[_0x4816da(0x367)] +
                        (_0x4816da(0x25a) +
                            _0x4816da(0x155) +
                            _0x4816da(0x356) +
                            _0x4816da(0x189) +
                            _0x4816da(0x118) +
                            _0x4816da(0x122) +
                            _0x4816da(0x239) +
                            _0x4816da(0x2e8) +
                            _0x4816da(0x1cf) +
                            _0x4816da(0xef) +
                            _0x4816da(0xe2)) +
                        _0x5d54bc[_0x4816da(0x17a)] +
                        (_0x4816da(0x218) + _0x4816da(0x2e8) + _0x4816da(0x1cf) + _0x4816da(0x35a) + _0x4816da(0x2e0)) +
                        new Date(_0x5d54bc[_0x4816da(0x30d)])[_0x4816da(0x23c) + _0x4816da(0x27b)]() +
                        (_0x4816da(0x218) +
                            _0x4816da(0x344) +
                            _0x4816da(0x2f3) +
                            _0x4816da(0x11e) +
                            _0x4816da(0x136) +
                            _0x4816da(0x1bf) +
                            _0x4816da(0x2a2) +
                            _0x4816da(0x20c) +
                            _0x4816da(0x1df) +
                            _0x4816da(0x299) +
                            _0x4816da(0x163)) +
                        _0x386abb +
                        (_0x4816da(0x1a9) + _0x4816da(0x344) + _0x4816da(0x2a3) + 'a\x20') +
                        _0x1925cf +
                        (_0x4816da(0x141) + _0x4816da(0x2e8) + _0x4816da(0x319)) +
                        _0x368581 +
                        (_0x4816da(0x189) + _0x4816da(0x2b9) + _0x4816da(0x2cf) + _0x4816da(0x192) + _0x4816da(0x19e)) +
                        _0x2cb78c +
                        (_0x4816da(0x1bd) +
                            _0x4816da(0x1b5) +
                            _0x4816da(0x2ac) +
                            _0x4816da(0x131) +
                            _0x4816da(0x121) +
                            _0x4816da(0x2a4) +
                            _0x4816da(0x2e8) +
                            _0x4816da(0x23a) +
                            _0x4816da(0x358) +
                            _0x4816da(0x1d8) +
                            _0x4816da(0xfe) +
                            _0x4816da(0x189) +
                            _0x4816da(0x325) +
                            _0x4816da(0x328) +
                            _0x4816da(0x237) +
                            _0x4816da(0x189) +
                            _0x4816da(0x235) +
                            _0x4816da(0x2e8) +
                            _0x4816da(0x218) +
                            _0x4816da(0x161) +
                            _0x4816da(0x28c) +
                            _0x4816da(0x1f9) +
                            _0x4816da(0x17f)) +
                        _0x3b4321[_0x4816da(0x1f0)](
                            highlightSearchTerms,
                            md[_0x4816da(0x185)](_0x5d54bc[_0x4816da(0x2c0)]),
                            lastSearchTerm
                        ) +
                        (_0x4816da(0x218) + _0x4816da(0x19d) + '>'));
            }),
            (_0x3cc78b += _0x3b4321[_0x39a7c9(0x194)]),
            _0x3b4321[_0x39a7c9(0x15a)](totalPages, 0x8d * 0x39 + -0x221d + -0x2b9 * -0x1) &&
                (_0x242a86 = _0x3b4321[_0x39a7c9(0x16a)](generatePagination));
    } else
        lastSearchTerm &&
            _0x3b4321[_0x39a7c9(0x2a0)](lastSearchTerm[_0x39a7c9(0x19f)], 0x5 * 0x6fb + 0x384 + -0x2 * 0x1334) &&
            ((_0x3cc78b =
                _0x39a7c9(0x2be) +
                _0x39a7c9(0x22e) +
                _0x39a7c9(0x26d) +
                _0x39a7c9(0x188) +
                _0x39a7c9(0xe4) +
                _0x39a7c9(0x24b) +
                _0x39a7c9(0x17e) +
                _0x39a7c9(0x2e8) +
                _0x39a7c9(0x2a6) +
                _0x39a7c9(0x170) +
                _0x39a7c9(0x2f6) +
                _0x39a7c9(0x296) +
                _0x39a7c9(0x273) +
                _0x39a7c9(0x34d) +
                _0x39a7c9(0x25c) +
                _0x39a7c9(0x2d1) +
                _0x39a7c9(0x314) +
                _0x39a7c9(0x306) +
                _0x39a7c9(0x20b) +
                _0x39a7c9(0x1d7) +
                _0x39a7c9(0x11e) +
                _0x39a7c9(0x16c) +
                _0x39a7c9(0x18f) +
                _0x39a7c9(0xfd) +
                _0x39a7c9(0x2bc) +
                _0x39a7c9(0x252) +
                _0x39a7c9(0x12f) +
                _0x39a7c9(0x2f5) +
                _0x39a7c9(0x311) +
                _0x39a7c9(0x150) +
                _0x39a7c9(0x105) +
                _0x39a7c9(0x323) +
                _0x39a7c9(0x1c1) +
                _0x39a7c9(0x25b) +
                _0x39a7c9(0x235) +
                _0x39a7c9(0x269) +
                'v>'),
            (_0x668b6c = _0x39a7c9(0x205) + _0x39a7c9(0x243) + '\x20\x22' + lastSearchTerm + '\x22'));
    _0x3b4321[_0x39a7c9(0x20e)]($, _0x3b4321[_0x39a7c9(0xf2)])
        [_0x39a7c9(0x26c)](_0x3cc78b)
        [_0x39a7c9(0x106) + 's'](_0x3b4321[_0x39a7c9(0x341)]),
        _0x668b6c
            ? _0x3b4321[_0x39a7c9(0x20e)]($, _0x3b4321[_0x39a7c9(0x262)])
                  [_0x39a7c9(0x26c)](_0x668b6c)
                  [_0x39a7c9(0x106) + 's'](_0x3b4321[_0x39a7c9(0x341)])
            : _0x3b4321[_0x39a7c9(0x20e)]($, _0x3b4321[_0x39a7c9(0x262)])[_0x39a7c9(0x285)](
                  _0x3b4321[_0x39a7c9(0x341)]
              ),
        _0x242a86
            ? (_0x3b4321[_0x39a7c9(0x20e)]($, _0x3b4321[_0x39a7c9(0xe9)])
                  [_0x39a7c9(0x26c)](_0x242a86)
                  [_0x39a7c9(0x106) + 's'](_0x3b4321[_0x39a7c9(0x341)]),
              _0x3b4321[_0x39a7c9(0x307)]($, _0x3b4321[_0x39a7c9(0x15c)])
                  [_0x39a7c9(0x26c)](_0x242a86)
                  [_0x39a7c9(0x106) + 's'](_0x3b4321[_0x39a7c9(0x341)]))
            : (_0x3b4321[_0x39a7c9(0x301)]($, _0x3b4321[_0x39a7c9(0xe9)])[_0x39a7c9(0x285)](
                  _0x3b4321[_0x39a7c9(0x341)]
              ),
              _0x3b4321[_0x39a7c9(0x1fe)]($, _0x3b4321[_0x39a7c9(0x15c)])[_0x39a7c9(0x285)](
                  _0x3b4321[_0x39a7c9(0x341)]
              ));
}
function generatePagination() {
    const _0x4304bc = _0x168ceb,
        _0x46e329 = {
            xBhbq: _0x4304bc(0xe4) + _0x4304bc(0x36d) + _0x4304bc(0x23d) + _0x4304bc(0x1c7),
            pdxme: function (_0x5018d5, _0x114d74) {
                return _0x5018d5 > _0x114d74;
            },
            ogMvC: function (_0x4afb66, _0x9e0135) {
                return _0x4afb66 - _0x9e0135;
            },
            FaIHX: _0x4304bc(0x349),
            yCFZw: function (_0x46c056, _0x3bec72) {
                return _0x46c056 - _0x3bec72;
            },
            FfMhg: function (_0x1564ae, _0x2cebd0) {
                return _0x1564ae + _0x2cebd0;
            },
            jUaRR: _0x4304bc(0x321) + _0x4304bc(0x151) + _0x4304bc(0x17c) + _0x4304bc(0x156) + _0x4304bc(0x256),
            HUoyz: function (_0x2dc3d6, _0x4cc6c8) {
                return _0x2dc3d6 <= _0x4cc6c8;
            },
            uoqfT: function (_0x1fd60c, _0x4cd068) {
                return _0x1fd60c === _0x4cd068;
            },
            pSqLN: _0x4304bc(0x276),
            dAgWr: function (_0x494b13, _0x19b937) {
                return _0x494b13 < _0x19b937;
            },
            vAgCT: function (_0x1e0644, _0x27dfe5) {
                return _0x1e0644 < _0x27dfe5;
            },
            lsQPQ: function (_0x2763b0, _0x1a8f23) {
                return _0x2763b0 - _0x1a8f23;
            },
            juNca: function (_0x3e19fa, _0x1c864a) {
                return _0x3e19fa + _0x1c864a;
            },
            UcjsL: _0x4304bc(0x355),
        };
    let _0x51ef16 = _0x46e329[_0x4304bc(0xf9)];
    _0x46e329[_0x4304bc(0x110)](currentPage, -0xe5 * -0x3 + -0x51c * -0x2 + -0xce6) &&
        (_0x51ef16 +=
            _0x4304bc(0x233) +
            _0x4304bc(0x1d2) +
            _0x4304bc(0x36a) +
            _0x4304bc(0x297) +
            _0x4304bc(0xfc) +
            _0x4304bc(0x28d) +
            _0x46e329[_0x4304bc(0x282)](currentPage, -0x27 + 0x217e + -0x2156) +
            _0x4304bc(0x30f) +
            (isLoading ? _0x46e329[_0x4304bc(0x1ac)] : '') +
            (_0x4304bc(0x188) +
                _0x4304bc(0x2e9) +
                _0x4304bc(0x10b) +
                _0x4304bc(0x33d) +
                _0x4304bc(0x160) +
                _0x4304bc(0x19b) +
                _0x4304bc(0xf4) +
                _0x4304bc(0x249)));
    let _0x456d88 = Math[_0x4304bc(0x120)](
            -0x4b2 * -0x1 + -0x1230 + 0xd7f,
            _0x46e329[_0x4304bc(0x230)](currentPage, -0x953 + 0xbc * 0xf + 0x1 * -0x1af)
        ),
        _0x1135e9 = Math[_0x4304bc(0x1fc)](
            totalPages,
            _0x46e329[_0x4304bc(0x29a)](currentPage, -0x1c1f + -0x2062 + 0x3c83)
        );
    _0x46e329[_0x4304bc(0x110)](_0x456d88, -0x35c + 0x64d + -0x2f0) &&
        ((_0x51ef16 +=
            _0x4304bc(0x233) +
            _0x4304bc(0x1d2) +
            _0x4304bc(0x221) +
            _0x4304bc(0x2fc) +
            _0x4304bc(0x134) +
            _0x4304bc(0x13f) +
            _0x4304bc(0x2e2) +
            '\x20' +
            (isLoading ? _0x46e329[_0x4304bc(0x1ac)] : '') +
            (_0x4304bc(0x21e) + '>')),
        _0x46e329[_0x4304bc(0x110)](_0x456d88, 0x1 * -0x23eb + 0x1bae + 0x83f) &&
            (_0x51ef16 += _0x46e329[_0x4304bc(0x2f9)]));
    for (let _0x3bec6d = _0x456d88; _0x46e329[_0x4304bc(0x289)](_0x3bec6d, _0x1135e9); _0x3bec6d++) {
        const _0x37b654 = _0x46e329[_0x4304bc(0x363)](_0x3bec6d, currentPage) ? _0x46e329[_0x4304bc(0x13b)] : '';
        _0x51ef16 +=
            _0x4304bc(0x233) +
            _0x4304bc(0x1d2) +
            _0x4304bc(0x221) +
            _0x4304bc(0x2fc) +
            'r\x20' +
            _0x37b654 +
            (_0x4304bc(0x1f4) + _0x4304bc(0x288) + _0x4304bc(0x1c3)) +
            _0x3bec6d +
            _0x4304bc(0x30f) +
            (isLoading ? _0x46e329[_0x4304bc(0x1ac)] : '') +
            '>' +
            _0x3bec6d +
            _0x4304bc(0x186);
    }
    return (
        _0x46e329[_0x4304bc(0x144)](_0x1135e9, totalPages) &&
            (_0x46e329[_0x4304bc(0x1da)](
                _0x1135e9,
                _0x46e329[_0x4304bc(0x23f)](totalPages, -0x91d * 0x4 + -0x2d + 0x24a2 * 0x1)
            ) && (_0x51ef16 += _0x46e329[_0x4304bc(0x2f9)]),
            (_0x51ef16 +=
                _0x4304bc(0x233) +
                _0x4304bc(0x1d2) +
                _0x4304bc(0x221) +
                _0x4304bc(0x2fc) +
                _0x4304bc(0x134) +
                _0x4304bc(0x13f) +
                _0x4304bc(0x112) +
                totalPages +
                _0x4304bc(0x30f) +
                (isLoading ? _0x46e329[_0x4304bc(0x1ac)] : '') +
                '>' +
                totalPages +
                _0x4304bc(0x186))),
        _0x46e329[_0x4304bc(0x1da)](currentPage, totalPages) &&
            (_0x51ef16 +=
                _0x4304bc(0x233) +
                _0x4304bc(0x1d2) +
                _0x4304bc(0x36a) +
                _0x4304bc(0x297) +
                _0x4304bc(0xfc) +
                _0x4304bc(0x28d) +
                _0x46e329[_0x4304bc(0x196)](currentPage, 0xa5b * -0x1 + -0x1ae9 + 0x2545) +
                _0x4304bc(0x30f) +
                (isLoading ? _0x46e329[_0x4304bc(0x1ac)] : '') +
                (_0x4304bc(0x188) +
                    _0x4304bc(0x2d8) +
                    _0x4304bc(0x2a3) +
                    _0x4304bc(0x336) +
                    _0x4304bc(0x32a) +
                    _0x4304bc(0xff) +
                    _0x4304bc(0x10f) +
                    'n>')),
        (_0x51ef16 += _0x46e329[_0x4304bc(0x2d0)]),
        _0x51ef16
    );
}
function navigateToPage(_0x55422f) {
    const _0x5776aa = _0x168ceb,
        _0x1e7a85 = {
            ZjyqF: function (_0x978b9a, _0x5d7a99) {
                return _0x978b9a === _0x5d7a99;
            },
            XUjyl: function (_0x8fb104, _0x2fcf61) {
                return _0x8fb104(_0x2fcf61);
            },
            RMurs: function (_0x2a76f8, _0x16320e, _0x3f404c) {
                return _0x2a76f8(_0x16320e, _0x3f404c);
            },
        };
    if (isLoading || _0x1e7a85[_0x5776aa(0x286)](_0x55422f, currentPage)) return;
    _0x1e7a85[_0x5776aa(0x31c)](showPaginationLoading, _0x55422f),
        _0x1e7a85[_0x5776aa(0x2fd)](searchChats, lastSearchTerm, _0x55422f);
}
function showPaginationLoading(_0x38a20e) {
    const _0x18ae92 = _0x168ceb,
        _0x4e2033 = {
            Dcwuo: function (_0x340fe1, _0xf382bc) {
                return _0x340fe1(_0xf382bc);
            },
            eqASA: _0x18ae92(0x34a) + _0x18ae92(0x20a),
            Ndvbh: function (_0x6579fd, _0x23e193) {
                return _0x6579fd(_0x23e193);
            },
            tfSPO: _0x18ae92(0x34a) + 'n',
        },
        _0x2f0c2c =
            _0x18ae92(0x34b) +
            _0x18ae92(0x31e) +
            _0x18ae92(0x1d6) +
            _0x18ae92(0x2df) +
            _0x18ae92(0x2b5) +
            _0x18ae92(0x15f) +
            _0x18ae92(0x300) +
            _0x18ae92(0x2f2) +
            _0x18ae92(0x1b0) +
            _0x18ae92(0x2e8) +
            _0x18ae92(0x23a) +
            _0x18ae92(0x358) +
            _0x18ae92(0x24c) +
            _0x18ae92(0x2ad) +
            _0x18ae92(0x21d) +
            _0x18ae92(0x1ad) +
            _0x18ae92(0x259) +
            'e\x20' +
            _0x38a20e +
            (_0x18ae92(0x266) + _0x18ae92(0x269) + _0x18ae92(0x2fe) + _0x18ae92(0x1aa) + '\x20\x20');
    _0x4e2033[_0x18ae92(0x2db)]($, _0x4e2033[_0x18ae92(0x346)])[_0x18ae92(0x26c)](_0x2f0c2c),
        _0x4e2033[_0x18ae92(0x36f)]($, _0x4e2033[_0x18ae92(0x16b)])[_0x18ae92(0x26c)](_0x2f0c2c);
}
function handleDatePresetClick(_0x125088) {
    const _0x326079 = _0x168ceb,
        _0x5cda65 = {
            aILvt: function (_0x3593ed, _0x56f2d3) {
                return _0x3593ed(_0x56f2d3);
            },
            aKAXX: _0x326079(0x165),
            HfNJq: function (_0x22cb04, _0x738191) {
                return _0x22cb04(_0x738191);
            },
            vvTFj: _0x326079(0x2b3) + 'et',
            rzbna: _0x326079(0x276),
            IMSDD: function (_0x2404ef, _0xed70a9) {
                return _0x2404ef === _0xed70a9;
            },
            KTOzw: _0x326079(0x337),
            POIeI: function (_0x115498, _0x1c23a6) {
                return _0x115498(_0x1c23a6);
            },
            FqYgW: _0x326079(0x1ab) + _0x326079(0x2a1),
            klcan: _0x326079(0x324),
            IzCaL: function (_0x195ac0, _0x51ee0a) {
                return _0x195ac0(_0x51ee0a);
            },
            csNVu: function (_0x44bfe5) {
                return _0x44bfe5();
            },
            Xrvig: function (_0x2befa8, _0x284e1b) {
                return _0x2befa8 >= _0x284e1b;
            },
            BJRSb: function (_0xb425a5, _0x308c4a, _0xd0197a) {
                return _0xb425a5(_0x308c4a, _0xd0197a);
            },
        },
        _0xf2d349 = _0x5cda65[_0x326079(0x193)]($, _0x125088[_0x326079(0x2b4)])[_0x326079(0x2a8)](
            _0x5cda65[_0x326079(0x260)]
        );
    _0x5cda65[_0x326079(0xfb)]($, _0x5cda65[_0x326079(0x242)])[_0x326079(0x106) + 's'](_0x5cda65[_0x326079(0x27a)]),
        _0x5cda65[_0x326079(0xfb)]($, _0x125088[_0x326079(0x2b4)])[_0x326079(0x285)](_0x5cda65[_0x326079(0x27a)]),
        _0x5cda65[_0x326079(0x1cb)](_0xf2d349, _0x5cda65[_0x326079(0x2b8)])
            ? _0x5cda65[_0x326079(0x107)]($, _0x5cda65[_0x326079(0x23e)])[_0x326079(0x106) + 's'](
                  _0x5cda65[_0x326079(0x133)]
              )
            : (_0x5cda65[_0x326079(0x36e)]($, _0x5cda65[_0x326079(0x23e)])[_0x326079(0x285)](
                  _0x5cda65[_0x326079(0x133)]
              ),
              (currentDateFilter = _0xf2d349),
              _0x5cda65[_0x326079(0x176)](updateDateFilterSummary),
              lastSearchTerm &&
                  _0x5cda65[_0x326079(0x2c7)](lastSearchTerm[_0x326079(0x19f)], 0x17c * -0x13 + 0x51a + 0x171e) &&
                  _0x5cda65[_0x326079(0xfa)](searchChats, lastSearchTerm, -0x655 + -0x1 * 0x1039 + 0x168f));
}
function handleCustomDateChange() {
    const _0x1c6b43 = _0x168ceb,
        _0x2c2886 = {
            PGEnC: function (_0x379748, _0x1b7ad4) {
                return _0x379748(_0x1b7ad4);
            },
            YRaDu: _0x1c6b43(0x36c) + 'e',
            szKKv: _0x1c6b43(0x1be),
            jGupH: function (_0x55dc31, _0x2c0a4c) {
                return _0x55dc31 && _0x2c0a4c;
            },
            nNjBY: _0x1c6b43(0x154),
            eCBSX: function (_0x54f20d) {
                return _0x54f20d();
            },
            Mrjaz: function (_0x209485, _0x3a1ebd) {
                return _0x209485 >= _0x3a1ebd;
            },
            AHfAl: function (_0x586a16, _0x23447f, _0x2e2e0a) {
                return _0x586a16(_0x23447f, _0x2e2e0a);
            },
            pOSmM: _0x1c6b43(0x337),
        },
        _0x31d42a = _0x2c2886[_0x1c6b43(0x22c)]($, _0x2c2886[_0x1c6b43(0x152)])[_0x1c6b43(0x11a)](),
        _0x1a7d92 = _0x2c2886[_0x1c6b43(0x22c)]($, _0x2c2886[_0x1c6b43(0x2ec)])[_0x1c6b43(0x11a)]();
    if (_0x2c2886[_0x1c6b43(0x31b)](_0x31d42a, _0x1a7d92)) {
        const _0x2e39d1 = _0x2c2886[_0x1c6b43(0xed)][_0x1c6b43(0x157)]('|');
        let _0x2116fa = -0x1a * -0xa9 + -0x1007 + -0x123;
        while (!![]) {
            switch (_0x2e39d1[_0x2116fa++]) {
                case '0':
                    _0x2c2886[_0x1c6b43(0x1ba)](updateDateFilterSummary);
                    continue;
                case '1':
                    lastSearchTerm &&
                        _0x2c2886[_0x1c6b43(0x353)](
                            lastSearchTerm[_0x1c6b43(0x19f)],
                            -0x58 * 0x18 + 0x2e2 * -0x4 + 0x13cc
                        ) &&
                        _0x2c2886[_0x1c6b43(0x2c9)](searchChats, lastSearchTerm, 0x29 * 0xce + 0xcbf + -0x2dbc);
                    continue;
                case '2':
                    customEndDate = _0x1a7d92;
                    continue;
                case '3':
                    currentDateFilter = _0x2c2886[_0x1c6b43(0x223)];
                    continue;
                case '4':
                    customStartDate = _0x31d42a;
                    continue;
            }
            break;
        }
    }
}
function getDateRange() {
    const _0x3debbf = _0x168ceb,
        _0x31bf8b = {
            TWaIT: _0x3debbf(0x14a),
            luyLQ: function (_0x3cadcd, _0x2dcd9c) {
                return _0x3cadcd + _0x2dcd9c;
            },
            jicGq: _0x3debbf(0x18c),
            Lyrwd: function (_0x1edd8e, _0x3ed538) {
                return _0x1edd8e - _0x3ed538;
            },
            BZTkr: _0x3debbf(0x1b7),
            QtpZh: function (_0x272ebc, _0x3d353f) {
                return _0x272ebc - _0x3d353f;
            },
            TMGdi: _0x3debbf(0x275),
            rNnRl: _0x3debbf(0x199),
            sfaQN: _0x3debbf(0x337),
            ynlYX: function (_0x38e7c5, _0x594a47) {
                return _0x38e7c5 && _0x594a47;
            },
        },
        _0x30ec80 = new Date();
    let _0x281bfc, _0x5d360a;
    switch (currentDateFilter) {
        case _0x31bf8b[_0x3debbf(0x1fa)]:
            (_0x281bfc = new Date(
                _0x30ec80[_0x3debbf(0x281) + 'r'](),
                _0x30ec80[_0x3debbf(0x1c8)](),
                _0x30ec80[_0x3debbf(0x33c)]()
            )),
                (_0x5d360a = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x30ec80[_0x3debbf(0x1c8)](),
                    _0x31bf8b[_0x3debbf(0x159)](_0x30ec80[_0x3debbf(0x33c)](), 0x18d + -0x3 * 0x61e + 0x9 * 0x1de)
                ));
            break;
        case _0x31bf8b[_0x3debbf(0x1bc)]:
            (_0x281bfc = new Date(
                _0x30ec80[_0x3debbf(0x281) + 'r'](),
                _0x30ec80[_0x3debbf(0x1c8)](),
                _0x31bf8b[_0x3debbf(0x10e)](_0x30ec80[_0x3debbf(0x33c)](), 0x6e5 + 0x18e7 + 0x3 * -0xa99)
            )),
                (_0x5d360a = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x30ec80[_0x3debbf(0x1c8)](),
                    _0x30ec80[_0x3debbf(0x33c)]()
                ));
            break;
        case _0x31bf8b[_0x3debbf(0x132)]:
            const _0x2ab5e7 = _0x30ec80[_0x3debbf(0x30b)](),
                _0x2571b5 = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x30ec80[_0x3debbf(0x1c8)](),
                    _0x31bf8b[_0x3debbf(0x283)](_0x30ec80[_0x3debbf(0x33c)](), _0x2ab5e7)
                );
            (_0x281bfc = _0x2571b5),
                (_0x5d360a = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x30ec80[_0x3debbf(0x1c8)](),
                    _0x31bf8b[_0x3debbf(0x159)](_0x30ec80[_0x3debbf(0x33c)](), -0x470 * -0x8 + -0x3fb * 0x3 + -0x178e)
                ));
            break;
        case _0x31bf8b[_0x3debbf(0x21c)]:
            const _0x6dddc5 = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x30ec80[_0x3debbf(0x1c8)](),
                    _0x31bf8b[_0x3debbf(0x10e)](
                        _0x31bf8b[_0x3debbf(0x10e)](_0x30ec80[_0x3debbf(0x33c)](), _0x30ec80[_0x3debbf(0x30b)]()),
                        0x983 + -0x1109 * -0x1 + -0x1a85
                    )
                ),
                _0x228a82 = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x30ec80[_0x3debbf(0x1c8)](),
                    _0x31bf8b[_0x3debbf(0x10e)](_0x30ec80[_0x3debbf(0x33c)](), _0x30ec80[_0x3debbf(0x30b)]())
                );
            (_0x281bfc = _0x6dddc5), (_0x5d360a = _0x228a82);
            break;
        case _0x31bf8b[_0x3debbf(0x21b)]:
            (_0x281bfc = new Date(
                _0x30ec80[_0x3debbf(0x281) + 'r'](),
                _0x30ec80[_0x3debbf(0x1c8)](),
                0xf * -0xe7 + -0x11bb + 0x1f45
            )),
                (_0x5d360a = new Date(
                    _0x30ec80[_0x3debbf(0x281) + 'r'](),
                    _0x31bf8b[_0x3debbf(0x159)](_0x30ec80[_0x3debbf(0x1c8)](), -0x5f9 + 0xad9 * 0x1 + -0x2b * 0x1d),
                    -0x3fa * -0x1 + -0x1 * 0x11e5 + 0x2 * 0x6f6
                ));
            break;
        case _0x31bf8b[_0x3debbf(0x1e3)]:
            _0x31bf8b[_0x3debbf(0x177)](customStartDate, customEndDate) &&
                ((_0x281bfc = new Date(customStartDate)),
                (_0x5d360a = new Date(customEndDate)),
                _0x5d360a[_0x3debbf(0x22d)](
                    -0x2 * 0x3ce + 0x4f2 + 0x2c1,
                    0x5 * 0x3d9 + -0x1 * 0x2176 + 0x39d * 0x4,
                    0x10f * -0xe + -0x1a10 + 0x5 * 0x839,
                    -0x12b9 * 0x1 + 0x1840 + -0x1a0
                ));
            break;
        default:
            return { startValue: null, endValue: null };
    }
    if (_0x31bf8b[_0x3debbf(0x177)](_0x281bfc, _0x5d360a))
        return {
            startValue: _0x281bfc[_0x3debbf(0x102)]()[_0x3debbf(0x217)](),
            endValue: _0x5d360a[_0x3debbf(0x102)]()[_0x3debbf(0x217)](),
        };
    return { startValue: null, endValue: null };
}
function updateDateFilterSummary() {
    const _0xfbeb24 = _0x168ceb,
        _0x1776a0 = {
            kqBNZ: _0xfbeb24(0x116),
            MrvMN: _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x28e) + _0xfbeb24(0x2b2),
            ZuEtA: _0xfbeb24(0x14a),
            WQnZa: _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x18a) + 'ay',
            OVvBM: _0xfbeb24(0x18c),
            xVRyk: _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x13d) + _0xfbeb24(0x331),
            nkxee: _0xfbeb24(0x1b7),
            FIFKc: _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x326) + _0xfbeb24(0x238),
            HVGaJ: _0xfbeb24(0x275),
            LPrdL: _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x187) + _0xfbeb24(0x31f),
            KhXLE: _0xfbeb24(0x199),
            qybSp: _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x326) + _0xfbeb24(0x1ae),
            Fzfyx: _0xfbeb24(0x337),
            OBlJq: function (_0x2cc02b, _0x5707a2) {
                return _0x2cc02b && _0x5707a2;
            },
            mpTez: _0xfbeb24(0xee) + _0xfbeb24(0x184) + _0xfbeb24(0x21a),
            sbqcr: function (_0x12a5ce, _0x106a6a) {
                return _0x12a5ce(_0x106a6a);
            },
            NQXQY: _0xfbeb24(0x14b) + _0xfbeb24(0x2de),
        };
    let _0x58e8e5 = '';
    switch (currentDateFilter) {
        case _0x1776a0[_0xfbeb24(0xea)]:
            _0x58e8e5 = _0x1776a0[_0xfbeb24(0x1e6)];
            break;
        case _0x1776a0[_0xfbeb24(0xe7)]:
            _0x58e8e5 = _0x1776a0[_0xfbeb24(0x162)];
            break;
        case _0x1776a0[_0xfbeb24(0x2bb)]:
            _0x58e8e5 = _0x1776a0[_0xfbeb24(0xf1)];
            break;
        case _0x1776a0[_0xfbeb24(0xf6)]:
            _0x58e8e5 = _0x1776a0[_0xfbeb24(0x174)];
            break;
        case _0x1776a0[_0xfbeb24(0xe8)]:
            _0x58e8e5 = _0x1776a0[_0xfbeb24(0x11c)];
            break;
        case _0x1776a0[_0xfbeb24(0x1f2)]:
            _0x58e8e5 = _0x1776a0[_0xfbeb24(0x30e)];
            break;
        case _0x1776a0[_0xfbeb24(0x1a8)]:
            if (_0x1776a0[_0xfbeb24(0x22b)](customStartDate, customEndDate)) {
                const _0x54038d = new Date(customStartDate)[_0xfbeb24(0x15b) + _0xfbeb24(0x125)](),
                    _0x4b8156 = new Date(customEndDate)[_0xfbeb24(0x15b) + _0xfbeb24(0x125)]();
                _0x58e8e5 =
                    _0xfbeb24(0x2c8) + _0xfbeb24(0x181) + _0xfbeb24(0x257) + _0x54038d + _0xfbeb24(0x22f) + _0x4b8156;
            } else _0x58e8e5 = _0x1776a0[_0xfbeb24(0x2d6)];
            break;
    }
    _0x1776a0[_0xfbeb24(0x1f6)]($, _0x1776a0[_0xfbeb24(0x347)])[_0xfbeb24(0x251)](_0x58e8e5);
}
function getDateFilterDisplayText() {
    const _0x47a7a9 = _0x168ceb,
        _0x2a6fd0 = {
            tWyot: _0x47a7a9(0x14a),
            owcbA: _0x47a7a9(0x1d0),
            KSuNQ: _0x47a7a9(0x18c),
            DDbPe: _0x47a7a9(0x369),
            Bdhig: _0x47a7a9(0x1b7),
            lCKOn: _0x47a7a9(0x313),
            pZgwq: _0x47a7a9(0x275),
            taMdv: _0x47a7a9(0x1ff),
            CAmHy: _0x47a7a9(0x199),
            UGpgp: _0x47a7a9(0x258),
            oJaHu: _0x47a7a9(0x337),
            WgCHL: function (_0x1a6837, _0x1341fc) {
                return _0x1a6837 && _0x1341fc;
            },
            wjsMx: _0x47a7a9(0x135) + 'ge',
        };
    switch (currentDateFilter) {
        case _0x2a6fd0[_0x47a7a9(0x12d)]:
            return _0x2a6fd0[_0x47a7a9(0x1d1)];
        case _0x2a6fd0[_0x47a7a9(0x322)]:
            return _0x2a6fd0[_0x47a7a9(0x147)];
        case _0x2a6fd0[_0x47a7a9(0x295)]:
            return _0x2a6fd0[_0x47a7a9(0x29b)];
        case _0x2a6fd0[_0x47a7a9(0x339)]:
            return _0x2a6fd0[_0x47a7a9(0x14c)];
        case _0x2a6fd0[_0x47a7a9(0x1db)]:
            return _0x2a6fd0[_0x47a7a9(0x264)];
        case _0x2a6fd0[_0x47a7a9(0x198)]:
            if (_0x2a6fd0[_0x47a7a9(0x2b1)](customStartDate, customEndDate)) {
                const _0x4f2bdb = new Date(customStartDate)[_0x47a7a9(0x15b) + _0x47a7a9(0x125)](),
                    _0x3db5f6 = new Date(customEndDate)[_0x47a7a9(0x15b) + _0x47a7a9(0x125)]();
                return _0x4f2bdb + _0x47a7a9(0x2f7) + _0x3db5f6;
            }
            return _0x2a6fd0[_0x47a7a9(0x149)];
        default:
            return '';
    }
}
