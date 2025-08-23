const _0x814731 = _0x1c2e;
(function (_0x255785, _0x20f867) {
    const _0x2016b3 = _0x1c2e,
        _0x230e4f = _0x255785();
    while (!![]) {
        try {
            const _0x571e76 =
                (-parseInt(_0x2016b3(0x11b)) / (0x4 * -0x97e + 0x3 * 0x370 + 0x1ba9)) *
                    (-parseInt(_0x2016b3(0x3bc)) / (0x234 * 0x1 + -0x825 + 0x5f3 * 0x1)) +
                (-parseInt(_0x2016b3(0x173)) / (-0x1f * 0x10c + -0x1 * 0x1b24 + 0x3b9b * 0x1)) *
                    (-parseInt(_0x2016b3(0x13f)) / (-0x2 * -0x15e + 0x122 * -0x2 + 0x1d * -0x4)) +
                parseInt(_0x2016b3(0x205)) / (0x638 + -0x1c82 + 0x164f * 0x1) +
                parseInt(_0x2016b3(0x3a5)) / (0x1109 + 0xd81 + -0x1e84) +
                -parseInt(_0x2016b3(0x238)) / (-0x21 + -0x272 + -0x4a * -0x9) +
                (parseInt(_0x2016b3(0x1c5)) / (0x1 * -0x3d4 + -0x1 * 0x14b1 + 0x4e9 * 0x5)) *
                    (parseInt(_0x2016b3(0x239)) / (-0x1 * 0x1751 + 0x1780 + 0x13 * -0x2)) +
                (parseInt(_0x2016b3(0x244)) / (0x2c7 + 0x26c7 + -0x2984)) *
                    (-parseInt(_0x2016b3(0x170)) / (0x1 * 0x775 + -0xda3 * -0x1 + -0x13d * 0x11));
            if (_0x571e76 === _0x20f867) break;
            else _0x230e4f['push'](_0x230e4f['shift']());
        } catch (_0x23f88c) {
            _0x230e4f['push'](_0x230e4f['shift']());
        }
    }
})(_0x1131, 0x70622 * 0x2 + -0x9716 * 0x1c + -0x1b * -0x9ea9);
const clientId = _0x814731(0x1cf) + _0x814731(0x360) + _0x814731(0x36f) + _0x814731(0x18c),
    redirectUri = window[_0x814731(0x25b)][_0x814731(0x138)] + (_0x814731(0x3a3) + _0x814731(0x143) + _0x814731(0x302)),
    platformClient = window[_0x814731(0x15e) + _0x814731(0x162)] || require(_0x814731(0x15e) + _0x814731(0x162)),
    client = platformClient[_0x814731(0x1f7)][_0x814731(0x34c)],
    searchApi = new platformClient[_0x814731(0x2b2)](),
    groupsApi = new platformClient[_0x814731(0x22c)](),
    usersApi = new platformClient[_0x814731(0x172)](),
    chatApi = new platformClient[_0x814731(0x256)](),
    md = window[_0x814731(0x3c8)]();
let userJid = '',
    searchResults = [],
    lastSearchTerm = '',
    currentPage = -0x5 * 0x2f1 + 0x1b2f + -0xc79 * 0x1,
    totalResults = -0xbe9 + -0x25e3 + 0x31cc,
    totalPages = 0x2e2 + 0x1538 + 0xa * -0x269,
    isLoading = ![],
    currentDateFilter = _0x814731(0x158),
    customStartDate = null,
    customEndDate = null,
    currentSortBy = _0x814731(0x25f),
    currentSortOrder = _0x814731(0x1a8);
location[_0x814731(0x275)] !== _0x814731(0x231) &&
    location[_0x814731(0x2a0)](
        _0x814731(0x231) + location[_0x814731(0x1fd)][_0x814731(0x2d0)](location[_0x814731(0x275)][_0x814731(0x214)])
    );
client[_0x814731(0x304) + _0x814731(0x38c)](clientId, redirectUri, { state: '' })
    [_0x814731(0x1b0)](() => {
        const _0x569a60 = _0x814731,
            _0x11da3c = {
                sXWmi: _0x569a60(0x193) + _0x569a60(0x2ef) + _0x569a60(0x206),
                ddscx: function (_0x221ee5) {
                    return _0x221ee5();
                },
            };
        console[_0x569a60(0x196)](_0x11da3c[_0x569a60(0x252)]), _0x11da3c[_0x569a60(0x2f7)](bootstrap);
    })
    [_0x814731(0x2cc)]((_0x3fdebb) => {
        const _0x44ac8b = _0x814731,
            _0x3a2cfd = {
                zEiTT: _0x44ac8b(0x193) + _0x44ac8b(0x387) + 'd:',
                mFGSk: function (_0x335fdd) {
                    return _0x335fdd();
                },
            };
        console[_0x44ac8b(0x300)](_0x3a2cfd[_0x44ac8b(0x3ce)], _0x3fdebb), _0x3a2cfd[_0x44ac8b(0x1a0)](bootstrapError);
    });
function bootstrapError() {
    const _0x5f1307 = _0x814731,
        _0x438e31 = {
            dduKd: function (_0x57075f, _0x2d5b74) {
                return _0x57075f(_0x2d5b74);
            },
            obTlr: _0x5f1307(0x32d),
            EUUML: _0x5f1307(0x254),
            tUDmX: function (_0x4a890d, _0x2984d1) {
                return _0x4a890d(_0x2984d1);
            },
            ALiBw: _0x5f1307(0x169) + _0x5f1307(0x179),
        };
    _0x438e31[_0x5f1307(0x2ca)]($, _0x438e31[_0x5f1307(0x1d2)])[_0x5f1307(0x326)](_0x438e31[_0x5f1307(0x22d)]),
        _0x438e31[_0x5f1307(0x10b)]($, _0x438e31[_0x5f1307(0x27a)])
            [_0x5f1307(0x35c) + 's'](_0x438e31[_0x5f1307(0x22d)])
            [_0x5f1307(0x329)]();
}
function bootstrap() {
    const _0x56536f = _0x814731,
        _0x3488d3 = {
            sQgIT: _0x56536f(0x3b6) + _0x56536f(0x237) + _0x56536f(0x23a),
            GyKiX: function (_0x16bf25, _0x8e4024) {
                return _0x16bf25(_0x8e4024);
            },
            ZmcTj: _0x56536f(0x24a) + _0x56536f(0x38d),
            enhgg: function (_0x3015f6, _0x507667) {
                return _0x3015f6(_0x507667);
            },
            KtogJ: _0x56536f(0x110),
            VQwsJ: _0x56536f(0x254),
            QmUqr: _0x56536f(0x32d),
            PrDKl: _0x56536f(0x12c) + _0x56536f(0x1a7),
            IoGHr: function (_0x407d4b, _0x2004e0) {
                return _0x407d4b(_0x2004e0);
            },
            NfikN: _0x56536f(0x169) + _0x56536f(0x179),
            ypkju: _0x56536f(0x152) + _0x56536f(0x31e) + _0x56536f(0x119) + _0x56536f(0x1a1) + _0x56536f(0x306),
            qvydu: _0x56536f(0x246) + _0x56536f(0x364),
            PCUDS: _0x56536f(0x361) + _0x56536f(0x336) + _0x56536f(0x129),
            GpClQ: function (_0x8919c8, _0x4bd911) {
                return _0x8919c8(_0x4bd911);
            },
            Mvwpj: _0x56536f(0x392) + _0x56536f(0x1da) + _0x56536f(0x2f9),
            qGUUA: _0x56536f(0x117) + _0x56536f(0x11a),
            tlnoe: _0x56536f(0x33b),
            uoOxD: function (_0x555b97, _0x499a34, _0x38b478) {
                return _0x555b97(_0x499a34, _0x38b478);
            },
            msfLZ: _0x56536f(0x393),
            othoS: _0x56536f(0x2a1) + 'et',
            PExPq: function (_0x45a2be, _0x281763) {
                return _0x45a2be(_0x281763);
            },
            tYUVh: _0x56536f(0x253),
            diiER: _0x56536f(0x176) + _0x56536f(0x389) + 'te',
            rxwFi: function (_0x1ff6d0, _0x20e657) {
                return _0x1ff6d0(_0x20e657);
            },
            tSgEm: _0x56536f(0x1b4) + 'ct',
            ZIqVs: _0x56536f(0x1a2) + _0x56536f(0x213) + _0x56536f(0x191),
        };
    console[_0x56536f(0x196)](_0x3488d3[_0x56536f(0x2d1)]),
        _0x3488d3[_0x56536f(0x125)]($, _0x3488d3[_0x56536f(0x177)])['on'](
            _0x3488d3[_0x56536f(0x202)],
            _0x3488d3[_0x56536f(0x188)](
                debounce,
                (_0x6b40da) => {
                    const _0x335022 = _0x56536f;
                    console[_0x335022(0x196)](
                        _0x3488d3[_0x335022(0x2c2)],
                        _0x6b40da[_0x335022(0x332)][_0x335022(0x18e)]
                    ),
                        _0x3488d3[_0x335022(0x125)](searchChats, _0x6b40da[_0x335022(0x332)][_0x335022(0x18e)]);
                },
                -0xb4e + -0x318 + 0xf92
            )
        ),
        _0x3488d3[_0x56536f(0x2db)]($, document)['on'](
            _0x3488d3[_0x56536f(0x3ae)],
            _0x3488d3[_0x56536f(0x1db)],
            handleDatePresetClick
        ),
        _0x3488d3[_0x56536f(0x243)]($, document)['on'](
            _0x3488d3[_0x56536f(0x2ac)],
            _0x3488d3[_0x56536f(0x14e)],
            handleCustomDateChange
        ),
        _0x3488d3[_0x56536f(0x25e)]($, document)['on'](
            _0x3488d3[_0x56536f(0x2ac)],
            _0x3488d3[_0x56536f(0x167)],
            handleSortChange
        ),
        console[_0x56536f(0x196)](_0x3488d3[_0x56536f(0x1c2)]),
        usersApi[_0x56536f(0x2fd)]()
            [_0x56536f(0x1b0)]((_0xbd6cbe) => {
                const _0x4a5644 = _0x56536f,
                    _0x3d2e25 = _0x3488d3[_0x4a5644(0x388)][_0x4a5644(0x3a8)]('|');
                let _0x3b6b5e = 0x1507 + -0x62 * -0xe + -0x1a63;
                while (!![]) {
                    switch (_0x3d2e25[_0x3b6b5e++]) {
                        case '0':
                            _0x3488d3[_0x4a5644(0x233)]($, _0x3488d3[_0x4a5644(0x218)])[_0x4a5644(0x35c) + 's'](
                                _0x3488d3[_0x4a5644(0x29e)]
                            );
                            continue;
                        case '1':
                            _0x3488d3[_0x4a5644(0x125)]($, _0x3488d3[_0x4a5644(0x1ca)])[_0x4a5644(0x326)](
                                _0x3488d3[_0x4a5644(0x29e)]
                            );
                            continue;
                        case '2':
                            console[_0x4a5644(0x196)](_0x3488d3[_0x4a5644(0x2ab)], _0xbd6cbe);
                            continue;
                        case '3':
                            _0x3488d3[_0x4a5644(0x2fb)]($, _0x3488d3[_0x4a5644(0x2a4)])
                                [_0x4a5644(0x326)](_0x3488d3[_0x4a5644(0x29e)])
                                [_0x4a5644(0x16a)]();
                            continue;
                        case '4':
                            console[_0x4a5644(0x196)](_0x3488d3[_0x4a5644(0x209)]);
                            continue;
                        case '5':
                            if (_0xbd6cbe[_0x4a5644(0x338)]) userJid = _0xbd6cbe[_0x4a5644(0x338)][_0x4a5644(0x3a0)];
                            continue;
                        case '6':
                            console[_0x4a5644(0x196)](_0x3488d3[_0x4a5644(0x23f)], userJid);
                            continue;
                    }
                    break;
                }
            })
            [_0x56536f(0x2cc)]((_0x58ce3f) => {
                const _0x5c593e = _0x56536f;
                console[_0x5c593e(0x300)](_0x3488d3[_0x5c593e(0x331)], _0x58ce3f),
                    _0x3488d3[_0x5c593e(0x2fb)]($, _0x3488d3[_0x5c593e(0x1ca)])[_0x5c593e(0x326)](
                        _0x3488d3[_0x5c593e(0x29e)]
                    ),
                    _0x3488d3[_0x5c593e(0x2db)]($, _0x3488d3[_0x5c593e(0x2a4)])
                        [_0x5c593e(0x35c) + 's'](_0x3488d3[_0x5c593e(0x29e)])
                        [_0x5c593e(0x329)]();
            });
}
function debounce(_0x508e4e, _0x53332c) {
    const _0x185d7b = {
        DxDgI: function (_0x2c5148, _0x4b3787) {
            return _0x2c5148(_0x4b3787);
        },
        knlGW: function (_0x3ef460, _0x255570, _0x41f607) {
            return _0x3ef460(_0x255570, _0x41f607);
        },
    };
    let _0x39ee49;
    return function (..._0x174e26) {
        const _0x2d05c5 = _0x1c2e;
        _0x185d7b[_0x2d05c5(0x2e7)](clearTimeout, _0x39ee49),
            (_0x39ee49 = _0x185d7b[_0x2d05c5(0x1d8)](
                setTimeout,
                () => _0x508e4e[_0x2d05c5(0x2be)](this, _0x174e26),
                _0x53332c
            ));
    };
}
function highlightSearchTerms(_0x4f3bd3, _0x140b20) {
    const _0x21e672 = _0x814731,
        _0x293147 = {
            ctgap: _0x21e672(0x250),
            rLwwk: _0x21e672(0x2b4) + _0x21e672(0x265) + _0x21e672(0x383) + _0x21e672(0x146),
            kWBHi: function (_0x4e0688, _0x51079d) {
                return _0x4e0688 === _0x51079d;
            },
            YaDsL: _0x21e672(0x261),
            JCmec: _0x21e672(0x181),
            YbdCv: _0x21e672(0x15a),
            mBFEv: _0x21e672(0x3b4),
            FEWNV: _0x21e672(0x1e3),
            zXvty: _0x21e672(0x24d),
            PvmQI: function (_0x1c8c06, _0x20df49) {
                return _0x1c8c06 < _0x20df49;
            },
            ZvCbV: _0x21e672(0x328),
            IuAas: function (_0x2231c7, _0xd3af26) {
                return _0x2231c7(_0xd3af26);
            },
        };
    _0x140b20 = _0x140b20 ? _0x140b20[_0x21e672(0x22b)]() : '';
    if (!_0x140b20 || _0x293147[_0x21e672(0x26c)](_0x140b20[_0x21e672(0x214)], 0x899 + 0x789 * -0x3 + 0xe04))
        return _0x4f3bd3;
    const _0x4b553f = _0x140b20[_0x21e672(0x18b) + 'e']()
        [_0x21e672(0x3a8)](/\s+/)
        [_0x21e672(0x282)](
            (_0x3564c0) => _0x3564c0[_0x21e672(0x22b)]()[_0x21e672(0x214)] >= -0x12f * 0x6 + -0x168 * -0xf + -0xdfc
        );
    if (_0x293147[_0x21e672(0x10e)](_0x4b553f[_0x21e672(0x214)], 0xae + 0x1 * 0x176d + -0x3 * 0x809)) return _0x4f3bd3;
    const _0x296673 = document[_0x21e672(0x32c) + _0x21e672(0x2fc)](_0x293147[_0x21e672(0x1b9)]);
    _0x296673[_0x21e672(0x230)] = _0x4f3bd3;
    function _0x5ec2e0(_0x3758b7) {
        const _0x3a8af2 = _0x21e672;
        if (_0x293147[_0x3a8af2(0x10e)](_0x3758b7[_0x3a8af2(0x38a)], Node[_0x3a8af2(0x1be)])) {
            let _0x5880ed = _0x3758b7[_0x3a8af2(0x2c3) + 't'],
                _0x4f4d56 = ![];
            _0x4b553f[_0x3a8af2(0x37c)]((_0x5d430d) => {
                const _0x3d2313 = _0x3a8af2,
                    _0x1b8ba5 = _0x5d430d[_0x3d2313(0x2a0)](/[.*+?^${}()|[\]\\]/g, _0x293147[_0x3d2313(0x21a)]),
                    _0x4a573a = new RegExp(_0x3d2313(0x123) + _0x1b8ba5 + _0x3d2313(0x2a6), 'gi');
                _0x4a573a[_0x3d2313(0x1e6)](_0x5880ed) &&
                    ((_0x4f4d56 = !![]),
                    (_0x5880ed = _0x5880ed[_0x3d2313(0x2a0)](_0x4a573a, _0x293147[_0x3d2313(0x307)])));
            });
            if (_0x4f4d56) {
                const _0x5485b1 = document[_0x3a8af2(0x32c) + _0x3a8af2(0x2fc)](_0x293147[_0x3a8af2(0x38f)]);
                (_0x5485b1[_0x3a8af2(0x230)] = _0x5880ed),
                    _0x3758b7[_0x3a8af2(0x2bc)][_0x3a8af2(0x281) + 'ld'](_0x5485b1, _0x3758b7);
                const _0x2a7b32 = Array[_0x3a8af2(0x37d)](_0x5485b1[_0x3a8af2(0x2f8)]);
                _0x2a7b32[_0x3a8af2(0x37c)]((_0x372462) => {
                    const _0x6954d4 = _0x3a8af2;
                    _0x5485b1[_0x6954d4(0x2bc)][_0x6954d4(0x2eb) + 're'](_0x372462, _0x5485b1);
                }),
                    _0x5485b1[_0x3a8af2(0x2bc)][_0x3a8af2(0x26d) + 'd'](_0x5485b1);
            }
        } else {
            if (_0x293147[_0x3a8af2(0x10e)](_0x3758b7[_0x3a8af2(0x38a)], Node[_0x3a8af2(0x314) + 'DE'])) {
                if (
                    ![
                        _0x293147[_0x3a8af2(0x223)],
                        _0x293147[_0x3a8af2(0x30f)],
                        _0x293147[_0x3a8af2(0x2d6)],
                        _0x293147[_0x3a8af2(0x270)],
                        _0x293147[_0x3a8af2(0x106)],
                    ][_0x3a8af2(0x267)](_0x3758b7[_0x3a8af2(0x1ac)])
                ) {
                    const _0x492da8 = Array[_0x3a8af2(0x37d)](_0x3758b7[_0x3a8af2(0x2f8)]);
                    _0x492da8[_0x3a8af2(0x37c)]((_0x11b02e) => _0x5ec2e0(_0x11b02e));
                }
            }
        }
    }
    return _0x293147[_0x21e672(0x1d5)](_0x5ec2e0, _0x296673), _0x296673[_0x21e672(0x230)];
}
function searchChats(_0x57dc07, _0x15addd = -0x26bf + 0xdf * 0x11 + 0x1 * 0x17f1) {
    const _0x3a5130 = _0x814731,
        _0x3334f8 = {
            PNuks: function (_0x264d0b, _0x5daf36) {
                return _0x264d0b(_0x5daf36);
            },
            vPpgG: _0x3a5130(0x254),
            CoWai: _0x3a5130(0x348),
            qCraI: _0x3a5130(0x24c),
            SwkVM: function (_0x3fb9ec, _0x57b5aa) {
                return _0x3fb9ec(_0x57b5aa);
            },
            rLycO: _0x3a5130(0x204) + 'ta',
            NWTPH: function (_0x24c550, _0x326a83) {
                return _0x24c550(_0x326a83);
            },
            eHNDq: _0x3a5130(0x180) + _0x3a5130(0x2d4),
            gjTnZ:
                _0x3a5130(0x184) +
                _0x3a5130(0x2a2) +
                _0x3a5130(0x3b7) +
                _0x3a5130(0x3c0) +
                _0x3a5130(0x228) +
                _0x3a5130(0x299) +
                _0x3a5130(0x2ea),
            gBGNB: _0x3a5130(0x2d7) + _0x3a5130(0x248),
            IqDDD: _0x3a5130(0x2d7) + 'n',
            OhWoZ: _0x3a5130(0x362) + _0x3a5130(0x229) + _0x3a5130(0x3b8),
            GIXKD: _0x3a5130(0x398),
            dGZRr: function (_0x1c93d0, _0x21cde3) {
                return _0x1c93d0 < _0x21cde3;
            },
            frOOX: _0x3a5130(0x186) + _0x3a5130(0xfe),
            Flnfc: _0x3a5130(0x144) + _0x3a5130(0x197) + _0x3a5130(0x1b3) + _0x3a5130(0x1fc),
            saIjS: function (_0x224b11, _0x554424) {
                return _0x224b11(_0x554424);
            },
            LntIa: function (_0x19f9d9, _0x3ffef9) {
                return _0x19f9d9(_0x3ffef9);
            },
            CGplF: _0x3a5130(0x21d) + _0x3a5130(0x211) + _0x3a5130(0x155) + 'ch',
            vvMGQ: function (_0x284926, _0x4387b4) {
                return _0x284926 !== _0x4387b4;
            },
            DXAGy: _0x3a5130(0x158),
            vjLSy: function (_0x11664b) {
                return _0x11664b();
            },
            GUwfK: function (_0x241491) {
                return _0x241491();
            },
            tzsNS: function (_0x3b02cd, _0x1d2adc) {
                return _0x3b02cd > _0x1d2adc;
            },
            gSOZi: _0x3a5130(0x272),
            QhCGr: function (_0x185c83, _0x13aefa) {
                return _0x185c83(_0x13aefa);
            },
            zFYeG: function (_0xeac9a1, _0x298664) {
                return _0xeac9a1(_0x298664);
            },
            kTgXI: _0x3a5130(0x33c) + _0x3a5130(0x29d),
            jqUhM: _0x3a5130(0x105),
            ahUrj: function (_0x498900) {
                return _0x498900();
            },
            eBHgH: _0x3a5130(0x263),
            GtYHO: _0x3a5130(0x25f),
            yKVgY: _0x3a5130(0x37d),
            MEgxG: _0x3a5130(0x1e7),
            IbhFn: function (_0x2b87b8, _0x40286e) {
                return _0x2b87b8 === _0x40286e;
            },
            IUamC: _0x3a5130(0x289),
            ghbiK: _0x3a5130(0x258),
        };
    console[_0x3a5130(0x196)](_0x3334f8[_0x3a5130(0x3c2)], _0x57dc07, _0x3334f8[_0x3a5130(0x285)], _0x15addd),
        (_0x57dc07 = _0x57dc07 ? _0x57dc07[_0x3a5130(0x22b)]() : ''),
        (lastSearchTerm = _0x57dc07),
        (currentPage = _0x15addd);
    if (!_0x57dc07 || _0x3334f8[_0x3a5130(0x2ba)](_0x57dc07[_0x3a5130(0x214)], -0x463 + -0x2381 + 0x27e7)) {
        const _0x1d2430 = _0x3334f8[_0x3a5130(0x16c)][_0x3a5130(0x3a8)]('|');
        let _0x49dd03 = 0x26 * 0x89 + -0x3a * -0x33 + -0x1fe4;
        while (!![]) {
            switch (_0x1d2430[_0x49dd03++]) {
                case '0':
                    console[_0x3a5130(0x196)](_0x3334f8[_0x3a5130(0x1d6)]);
                    continue;
                case '1':
                    _0x3334f8[_0x3a5130(0x31d)]($, _0x3334f8[_0x3a5130(0x2e6)])[_0x3a5130(0x326)](
                        _0x3334f8[_0x3a5130(0x30b)]
                    );
                    continue;
                case '2':
                    _0x3334f8[_0x3a5130(0x375)]($, _0x3334f8[_0x3a5130(0x395)])[_0x3a5130(0x326)](
                        _0x3334f8[_0x3a5130(0x30b)]
                    );
                    continue;
                case '3':
                    totalResults = 0xb63 * 0x3 + -0x1 * -0x1094 + -0x32bd;
                    continue;
                case '4':
                    searchResults = [];
                    continue;
                case '5':
                    totalPages = -0xd4e + 0x1c87 + -0xf39;
                    continue;
                case '6':
                    _0x3334f8[_0x3a5130(0x375)]($, _0x3334f8[_0x3a5130(0x108)])[_0x3a5130(0x326)](
                        _0x3334f8[_0x3a5130(0x30b)]
                    );
                    continue;
                case '7':
                    _0x3334f8[_0x3a5130(0x1aa)]($, _0x3334f8[_0x3a5130(0x35e)])[_0x3a5130(0x326)](
                        _0x3334f8[_0x3a5130(0x30b)]
                    );
                    continue;
                case '8':
                    return;
            }
            break;
        }
    }
    if (isLoading) {
        console[_0x3a5130(0x196)](_0x3334f8[_0x3a5130(0x359)]);
        return;
    }
    isLoading = !![];
    let _0x332eff = _0x3a5130(0x185) + _0x3a5130(0x35a) + _0x57dc07 + '\x27';
    if (_0x3334f8[_0x3a5130(0x1dd)](currentDateFilter, _0x3334f8[_0x3a5130(0x15d)])) {
        const _0x51bddb = _0x3334f8[_0x3a5130(0x12f)](getDateRange);
        _0x51bddb[_0x3a5130(0x1ea)] &&
            _0x51bddb[_0x3a5130(0x385)] &&
            (_0x332eff += '\x20(' + _0x3334f8[_0x3a5130(0x36b)](getDateFilterDisplayText) + ')');
    }
    _0x3334f8[_0x3a5130(0x3c5)](_0x15addd, 0x1b84 + -0x8f * -0x2f + 0x3 * -0x11ec) &&
        (_0x332eff += _0x3a5130(0x19b) + _0x15addd + ')');
    (_0x332eff += _0x3334f8[_0x3a5130(0x3c9)]),
        _0x3334f8[_0x3a5130(0x20f)]($, _0x3334f8[_0x3a5130(0x2e6)])[_0x3a5130(0x107)](
            0x1 * 0x987 + 0x2127 * 0x1 + -0x2a18,
            function () {
                const _0x228602 = _0x3a5130;
                _0x3334f8[_0x228602(0x1eb)]($, this)
                    [_0x228602(0x135)](_0x332eff)
                    [_0x228602(0x35c) + 's'](_0x3334f8[_0x228602(0x30b)])
                    [_0x228602(0x326)](_0x3334f8[_0x228602(0x2c8)])
                    [_0x228602(0x16a)]()
                    [_0x228602(0x139)](-0xf75 + -0x191 * 0x7 + 0x1 * 0x1b98);
            }
        );
    const _0x11db9f = _0x3334f8[_0x3a5130(0x192)]($, _0x3334f8[_0x3a5130(0x108)]);
    !_0x11db9f[_0x3a5130(0x33e)](_0x3334f8[_0x3a5130(0x2e3)])[_0x3a5130(0x214)] &&
        (_0x11db9f[_0x3a5130(0x1b6)](
            _0x3a5130(0x2f3) +
                _0x3a5130(0x136) +
                _0x3a5130(0x13d) +
                _0x3a5130(0x34f) +
                _0x3a5130(0x1e9) +
                _0x3a5130(0x17f) +
                _0x3a5130(0x154) +
                _0x3a5130(0x325) +
                _0x3a5130(0x386) +
                _0x3a5130(0x298) +
                _0x3a5130(0x17f) +
                _0x3a5130(0x154) +
                _0x3a5130(0x372) +
                _0x3a5130(0x18f) +
                _0x3a5130(0x308) +
                _0x3a5130(0x298) +
                _0x3a5130(0x298) +
                _0x3a5130(0x30c) +
                _0x3a5130(0x201) +
                _0x3a5130(0x3cb) +
                _0x3a5130(0x210) +
                _0x3a5130(0x298) +
                _0x3a5130(0x262) +
                _0x3a5130(0x207) +
                _0x3a5130(0x381) +
                _0x3a5130(0x280)
        ),
        _0x3334f8[_0x3a5130(0x1eb)]($, _0x3334f8[_0x3a5130(0x2e3)])[_0x3a5130(0x139)](
            -0x1776 + -0x2050 + -0xc5 * -0x4a
        ));
    let _0x3a768b = [{ fields: [_0x3334f8[_0x3a5130(0x113)]], value: _0x57dc07 }];
    if (_0x3334f8[_0x3a5130(0x1dd)](currentDateFilter, _0x3334f8[_0x3a5130(0x15d)])) {
        const _0x12df7b = _0x3334f8[_0x3a5130(0x1ce)](getDateRange);
        _0x12df7b[_0x3a5130(0x1ea)] &&
            _0x12df7b[_0x3a5130(0x385)] &&
            _0x3a768b[_0x3a5130(0x26e)]({
                type: _0x3334f8[_0x3a5130(0x36a)],
                fields: [_0x3334f8[_0x3a5130(0x1d7)]],
                startValue: _0x12df7b[_0x3a5130(0x1ea)],
                endValue: _0x12df7b[_0x3a5130(0x385)],
            });
    }
    let _0x33f446 = {
        pageSize: 0x32,
        pageNumber: _0x15addd,
        expand: [_0x3334f8[_0x3a5130(0x36d)], 'to'],
        types: [_0x3334f8[_0x3a5130(0x1f3)]],
        query: _0x3a768b,
    };
    _0x3334f8[_0x3a5130(0x21f)](currentSortBy, _0x3334f8[_0x3a5130(0x12d)])
        ? (_0x33f446[_0x3a5130(0x30a)] = _0x3334f8[_0x3a5130(0x1a5)])
        : ((_0x33f446[_0x3a5130(0x352)] = currentSortBy), (_0x33f446[_0x3a5130(0x30a)] = currentSortOrder)),
        searchApi[_0x3a5130(0x2f4)](_0x33f446, { profile: ![] })
            [_0x3a5130(0x1b0)](getSearchResults)
            [_0x3a5130(0x2cc)](() => {
                const _0x3eedd3 = _0x3a5130,
                    _0x40e95b = _0x3334f8[_0x3eedd3(0x355)][_0x3eedd3(0x3a8)]('|');
                let _0x542bbe = 0x12fe + 0x6 * 0x265 + 0x131 * -0x1c;
                while (!![]) {
                    switch (_0x40e95b[_0x542bbe++]) {
                        case '0':
                            _0x3334f8[_0x3eedd3(0x17d)]($, _0x3334f8[_0x3eedd3(0x2e6)])[_0x3eedd3(0x326)](
                                _0x3334f8[_0x3eedd3(0x30b)]
                            );
                            continue;
                        case '1':
                            _0x3334f8[_0x3eedd3(0x375)]($, _0x3334f8[_0x3eedd3(0x108)])
                                [_0x3eedd3(0x29a)](_0x3334f8[_0x3eedd3(0x200)])
                                [_0x3eedd3(0x35c) + 's'](_0x3334f8[_0x3eedd3(0x30b)]);
                            continue;
                        case '2':
                            _0x3334f8[_0x3eedd3(0x17d)]($, _0x3334f8[_0x3eedd3(0x395)])[_0x3eedd3(0x326)](
                                _0x3334f8[_0x3eedd3(0x30b)]
                            );
                            continue;
                        case '3':
                            _0x3334f8[_0x3eedd3(0x1eb)]($, _0x3334f8[_0x3eedd3(0x35e)])[_0x3eedd3(0x326)](
                                _0x3334f8[_0x3eedd3(0x30b)]
                            );
                            continue;
                        case '4':
                            isLoading = ![];
                            continue;
                    }
                    break;
                }
            });
}
function getSearchResults(_0x384c06) {
    const _0x1518e5 = _0x814731,
        _0x20fa36 = {
            CnKAc: _0x1518e5(0x1af),
            AYLAU: function (_0x1d8ce3, _0x5b9738) {
                return _0x1d8ce3 + _0x5b9738;
            },
            fdxMQ: _0x1518e5(0x3c3) + _0x1518e5(0x15b) + _0x1518e5(0x1f8) + _0x1518e5(0x2f1),
            Bsowu: function (_0x41247a, _0x2b2568) {
                return _0x41247a(_0x2b2568);
            },
            sNIbd: _0x1518e5(0x260) + 'e',
            NHDiL: _0x1518e5(0x1ef),
            vEvbj: _0x1518e5(0x1f9),
            oerKz: _0x1518e5(0x260) + _0x1518e5(0x2c9) + _0x1518e5(0x11d) + 'm',
            Ammir: _0x1518e5(0x34a),
            sBbiJ: function (_0x32b0c5, _0xd7a0bb) {
                return _0x32b0c5 === _0xd7a0bb;
            },
            CKMeM: function (_0xf21130) {
                return _0xf21130();
            },
            euyWJ: function (_0xdad2ac) {
                return _0xdad2ac();
            },
            TctKK: _0x1518e5(0x126),
            mLWzE: function (_0x51d440, _0xba7229) {
                return _0x51d440 > _0xba7229;
            },
            OJcOr: function (_0x41ab7d, _0x449061) {
                return _0x41ab7d > _0x449061;
            },
            CndMr: function (_0x3a43a8, _0x10a79b) {
                return _0x3a43a8(_0x10a79b);
            },
            QqIWv: function (_0x2afd69) {
                return _0x2afd69();
            },
        };
    (isLoading = ![]),
        (totalResults = _0x384c06[_0x1518e5(0x284)] || -0xa0 * 0x23 + 0x215a + -0x71 * 0x1a),
        (totalPages = _0x384c06[_0x1518e5(0x3ad)] || -0x337 * 0x7 + 0x148b + 0x1f6),
        (searchResults = []);
    if (
        _0x384c06[_0x1518e5(0x17b) + _0x1518e5(0x14c)](_0x20fa36[_0x1518e5(0x34b)]) &&
        _0x20fa36[_0x1518e5(0x2fe)](
            _0x384c06[_0x1518e5(0x126)][_0x1518e5(0x214)],
            0x53d + -0x7f * -0x47 + 0x2876 * -0x1
        )
    ) {
        let _0x2b1285 = [];
        _0x384c06[_0x1518e5(0x126)][_0x1518e5(0x37c)]((_0x1787a8) => {
            const _0x3171aa = _0x1518e5;
            let _0x51e305 = _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x2b7)] || _0x20fa36[_0x3171aa(0x29c)],
                _0xa58f65 =
                    _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x2b8)] &&
                    _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x2b8)][-0x225c + -0x1f * -0x27 + -0x9 * -0x34b] &&
                    _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x2b8)][-0x5 * 0x12f + -0x2114 + -0x43 * -0x95][
                        _0x3171aa(0x1bd)
                    ]
                        ? _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x2b8)][0x330 * -0x3 + 0x1ae1 + 0x1 * -0x1151][
                              _0x3171aa(0x1bd)
                          ]
                        : _0x20fa36[_0x3171aa(0x2e0)](
                              _0x20fa36[_0x3171aa(0x274)],
                              _0x20fa36[_0x3171aa(0x11f)](encodeURIComponent, _0x51e305)
                          ),
                _0x323c83 = _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x338)]
                    ? _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x338)][_0x3171aa(0x3a0)]
                    : _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x25d)],
                _0x5451a3 = _0x1787a8['to'][_0x3171aa(0x338)]
                    ? _0x1787a8['to'][_0x3171aa(0x338)][_0x3171aa(0x3a0)]
                    : _0x1787a8['to'][_0x3171aa(0x25d)],
                _0x33fa98 = _0x5451a3[_0x3171aa(0x366)](_0x20fa36[_0x3171aa(0x1ad)])
                    ? _0x20fa36[_0x3171aa(0x3bd)]
                    : _0x20fa36[_0x3171aa(0x28a)],
                _0x5c5d64 = _0x20fa36[_0x3171aa(0x3bd)],
                _0x15f48d = _0x5451a3;
            _0x5451a3[_0x3171aa(0x366)](_0x20fa36[_0x3171aa(0x1ad)]) &&
                ((_0x5451a3 = _0x5451a3[_0x3171aa(0x2a0)](/@conference$/, _0x20fa36[_0x3171aa(0x13b)])),
                _0x2b1285[_0x3171aa(0x26e)]({
                    jabberId: _0x15f48d,
                    fullJabberId: _0x5451a3,
                    index: searchResults[_0x3171aa(0x214)],
                    isAdhoc: _0x15f48d[_0x3171aa(0x330)](_0x20fa36[_0x3171aa(0x3b1)]),
                }));
            let _0x54a9f3 = {
                fromJid: _0x323c83,
                targetJid: _0x5451a3,
                body: _0x1787a8[_0x3171aa(0x105)],
                created: _0x1787a8[_0x3171aa(0x25f)],
                userName: _0x51e305,
                title: _0x1787a8[_0x3171aa(0x37d)][_0x3171aa(0x38b)] || null,
                image: _0xa58f65,
                chatType: _0x33fa98,
                groupName: _0x5c5d64,
                isPersonalGroup:
                    _0x15f48d[_0x3171aa(0x330)](_0x20fa36[_0x3171aa(0x3b1)]) &&
                    _0x20fa36[_0x3171aa(0x225)](_0x33fa98, _0x20fa36[_0x3171aa(0x3bd)]),
            };
            searchResults[_0x3171aa(0x26e)](_0x54a9f3);
        }),
            _0x20fa36[_0x1518e5(0x2d5)](_0x2b1285[_0x1518e5(0x214)], 0x1b02 * 0x1 + -0x1a0d + -0xf5)
                ? _0x20fa36[_0x1518e5(0x13c)](fetchGroupDetails, _0x2b1285)[_0x1518e5(0x1b0)](() => {
                      const _0x50cf0f = _0x1518e5;
                      _0x20fa36[_0x50cf0f(0x37a)](applySortingToResults),
                          _0x20fa36[_0x50cf0f(0x28e)](renderSearchResults);
                  })
                : (_0x20fa36[_0x1518e5(0x37a)](applySortingToResults),
                  _0x20fa36[_0x1518e5(0x3c6)](renderSearchResults));
    } else _0x20fa36[_0x1518e5(0x37a)](renderSearchResults);
}
function applySortingToResults() {
    const _0x138e3a = _0x814731,
        _0x56622e = {
            nvhbJ: function (_0x467366, _0x58ebb5) {
                return _0x467366 === _0x58ebb5;
            },
            xYOND: _0x138e3a(0x289),
            fJqtg: _0x138e3a(0x25f),
            DahDd: function (_0x4c7e82, _0x348325) {
                return _0x4c7e82 === _0x348325;
            },
            PGZZh: _0x138e3a(0x1a8),
        };
    if (_0x56622e[_0x138e3a(0x1f0)](currentSortBy, _0x56622e[_0x138e3a(0x1c9)])) return;
    else
        _0x56622e[_0x138e3a(0x1f0)](currentSortBy, _0x56622e[_0x138e3a(0xff)]) &&
            (_0x56622e[_0x138e3a(0x354)](currentSortOrder, _0x56622e[_0x138e3a(0x160)])
                ? searchResults[_0x138e3a(0x368)](
                      (_0xfda40f, _0x46e4a4) =>
                          new Date(_0x46e4a4[_0x138e3a(0x25f)]) - new Date(_0xfda40f[_0x138e3a(0x25f)])
                  )
                : searchResults[_0x138e3a(0x368)](
                      (_0x4165e2, _0xb2c6c6) =>
                          new Date(_0x4165e2[_0x138e3a(0x25f)]) - new Date(_0xb2c6c6[_0x138e3a(0x25f)])
                  ));
}
async function fetchGroupDetails(_0x3108b6) {
    const _0x5f4034 = _0x814731,
        _0x5378bd = {
            nrkzX: _0x5f4034(0x260) + 'e',
            XkvKO: function (_0x116143, _0x2ea54f) {
                return _0x116143 > _0x2ea54f;
            },
            bzrpn: _0x5f4034(0x361) + _0x5f4034(0x323) + _0x5f4034(0x321),
        };
    try {
        const _0x127746 = _0x3108b6[_0x5f4034(0x282)]((_0x4e4f7a) => !_0x4e4f7a[_0x5f4034(0x376)]),
            _0x11fb39 = _0x3108b6[_0x5f4034(0x282)]((_0x5cf366) => _0x5cf366[_0x5f4034(0x376)]);
        if (_0x5378bd[_0x5f4034(0x22f)](_0x127746[_0x5f4034(0x214)], 0x35f + -0x1705 + 0x13a6)) {
            const _0x3403a2 = [...new Set(_0x127746[_0x5f4034(0x13e)]((_0x207922) => _0x207922[_0x5f4034(0x3a0)]))],
                _0x2e8c78 = _0x3403a2[_0x5f4034(0x13e)](
                    (_0x792419) => _0x792419[_0x5f4034(0x3a8)]('@')[0xe9 * 0x1 + -0x16bc + -0x1 * -0x15d3]
                ),
                _0xfc22a1 = {},
                _0x211fb4 = { jabberId: _0x2e8c78, pageSize: 0x64 },
                _0x5739fc = await groupsApi[_0x5f4034(0x1bc)](_0x211fb4);
            _0x5739fc[_0x5f4034(0x31a)] &&
                _0x5378bd[_0x5f4034(0x22f)](
                    _0x5739fc[_0x5f4034(0x31a)][_0x5f4034(0x214)],
                    0x4 * 0xb1 + 0x176e + 0x3be * -0x7
                ) &&
                _0x5739fc[_0x5f4034(0x31a)][_0x5f4034(0x37c)]((_0x43016d) => {
                    const _0x2d8a92 = _0x5f4034;
                    if (
                        _0x43016d[_0x2d8a92(0x338)] &&
                        _0x43016d[_0x2d8a92(0x338)][_0x2d8a92(0x3a0)] &&
                        _0x43016d[_0x2d8a92(0x2b7)]
                    ) {
                        const _0x53296b = _0x43016d[_0x2d8a92(0x338)][_0x2d8a92(0x3a0)];
                        _0xfc22a1[_0x53296b] = _0x43016d[_0x2d8a92(0x2b7)];
                        const _0x5a809d = _0x53296b[_0x2d8a92(0x2a0)](
                            /@conference\.genesys\.orgspan\.com$/,
                            _0x5378bd[_0x2d8a92(0x217)]
                        );
                        _0xfc22a1[_0x5a809d] = _0x43016d[_0x2d8a92(0x2b7)];
                    }
                }),
                _0x127746[_0x5f4034(0x37c)]((_0x38f5e2) => {
                    const _0x10b6a6 = _0x5f4034,
                        _0x34ca42 = _0xfc22a1[_0x38f5e2[_0x10b6a6(0x3a0)]];
                    _0x34ca42 && (searchResults[_0x38f5e2[_0x10b6a6(0x365)]][_0x10b6a6(0x1c7)] = _0x34ca42);
                });
        }
        if (_0x5378bd[_0x5f4034(0x22f)](_0x11fb39[_0x5f4034(0x214)], -0x1 * 0x1817 + -0x1a85 + -0x194e * -0x2)) {
            const _0x237ca0 = _0x11fb39[_0x5f4034(0x13e)](async (_0x3bd9b8) => {
                const _0x5dfd1f = _0x5f4034;
                try {
                    const _0x466442 = await chatApi[_0x5dfd1f(0x350) + 'om'](_0x3bd9b8[_0x5dfd1f(0x27c) + 'Id']);
                    _0x466442 &&
                        _0x466442[_0x5dfd1f(0x2af)] &&
                        (searchResults[_0x3bd9b8[_0x5dfd1f(0x365)]][_0x5dfd1f(0x1c7)] = _0x466442[_0x5dfd1f(0x2af)]);
                } catch (_0x40a287) {
                    console[_0x5dfd1f(0x2a7)](
                        _0x5dfd1f(0x361) +
                            _0x5dfd1f(0x27d) +
                            _0x5dfd1f(0x10f) +
                            _0x5dfd1f(0x32e) +
                            _0x5dfd1f(0x1dc) +
                            _0x3bd9b8[_0x5dfd1f(0x27c) + 'Id'] +
                            ':',
                        _0x40a287
                    );
                }
            });
            await Promise[_0x5f4034(0x163)](_0x237ca0);
        }
    } catch (_0x2a6e23) {
        console[_0x5f4034(0x2a7)](_0x5378bd[_0x5f4034(0x2c5)], _0x2a6e23);
    }
}
function renderSearchResults() {
    const _0x121247 = _0x814731,
        _0x58918c = {
            JWUem: function (_0x243148, _0x5e65c5) {
                return _0x243148 == _0x5e65c5;
            },
            OGgLa: function (_0x176db9, _0x64ec7c) {
                return _0x176db9 === _0x64ec7c;
            },
            AMuHr: _0x121247(0x1ef),
            dFteA: function (_0x2e6e12, _0x4e79c2) {
                return _0x2e6e12 === _0x4e79c2;
            },
            xgQpB: _0x121247(0x2e9) + _0x121247(0x279) + _0x121247(0x164),
            yoYYE: _0x121247(0x39e),
            nBoGr: _0x121247(0x2e9) + _0x121247(0x373),
            mUrmS: _0x121247(0x13a),
            jQGzL: _0x121247(0x2e9) + _0x121247(0x14d),
            LLdwt: _0x121247(0x1cc),
            jRVTk: function (_0x264020, _0x3a37f2, _0x138f86) {
                return _0x264020(_0x3a37f2, _0x138f86);
            },
            VCgpN: _0x121247(0x254),
            Gknnp: _0x121247(0x35d) + _0x121247(0x101),
            xfIiX: function (_0x52f37d, _0x48f3a4) {
                return _0x52f37d(_0x48f3a4);
            },
            AGpJF: _0x121247(0x348),
            PCYSl: function (_0x5462a5, _0xdfb5b) {
                return _0x5462a5 > _0xdfb5b;
            },
            ftgYe: function (_0x42fa62, _0x24c926) {
                return _0x42fa62 + _0x24c926;
            },
            MsAMO: function (_0xc2865f, _0x1d2569) {
                return _0xc2865f * _0x1d2569;
            },
            ANuVy: function (_0x234c68, _0x497499) {
                return _0x234c68 - _0x497499;
            },
            cHQGw: function (_0x32aab5, _0x5c3872) {
                return _0x32aab5 - _0x5c3872;
            },
            IKyCn: function (_0x2e47c3, _0x39fb99) {
                return _0x2e47c3 + _0x39fb99;
            },
            CxtrB: function (_0x34f46f, _0x370e6c) {
                return _0x34f46f !== _0x370e6c;
            },
            IkFLJ: _0x121247(0x158),
            QLvzA: function (_0x418cc5) {
                return _0x418cc5();
            },
            nDqRm: _0x121247(0x2e8) + _0x121247(0x166) + _0x121247(0x317) + '>',
            daWtB: _0x121247(0x292),
            aWahY: function (_0x419e60, _0x14011c) {
                return _0x419e60 > _0x14011c;
            },
            keEoo: function (_0x29e24c) {
                return _0x29e24c();
            },
            DrRIt: function (_0xac7026, _0x5be814) {
                return _0xac7026 >= _0x5be814;
            },
            hQCnO: _0x121247(0x180) + _0x121247(0x2d4),
            PRhEf: _0x121247(0x204) + 'ta',
            CKCuW: function (_0x339fff, _0x597035) {
                return _0x339fff(_0x597035);
            },
            pXjjt: _0x121247(0x2d7) + _0x121247(0x248),
            ZVOum: function (_0x196add, _0x30a40b) {
                return _0x196add(_0x30a40b);
            },
            BLYae: _0x121247(0x2d7) + 'n',
            GDZCe: _0x121247(0x33c) + _0x121247(0x29d),
        };
    let _0x25605f = '',
        _0x19af2d = '',
        _0x360e56 = '';
    if (_0x58918c[_0x121247(0x1e0)](searchResults[_0x121247(0x214)], 0x24a9 + 0x22e9 + -0x4792)) {
        const _0x3d0678 = _0x58918c[_0x121247(0x18a)](
                _0x58918c[_0x121247(0x1c8)](
                    _0x58918c[_0x121247(0x2ee)](currentPage, 0x307 + -0x1 * -0x1927 + -0x1c2d),
                    -0x180 + -0x37c + 0x66 * 0xd
                ),
                -0x1f89 + 0x1492 * -0x1 + -0x536 * -0xa
            ),
            _0x5255cf = Math[_0x121247(0x327)](
                _0x58918c[_0x121247(0x1f6)](
                    _0x58918c[_0x121247(0x257)](_0x3d0678, searchResults[_0x121247(0x214)]),
                    0x2fe + 0x1bb5 + 0x2 * -0xf59
                ),
                totalResults
            );
        (_0x360e56 =
            _0x121247(0x2d8) +
            totalResults +
            _0x121247(0x1d0) +
            (_0x58918c[_0x121247(0x1e0)](totalResults, 0x9d9 * -0x1 + -0xed * -0x6 + 0x44c * 0x1) ? 's' : '') +
            _0x121247(0x14a) +
            lastSearchTerm +
            '\x22'),
            _0x58918c[_0x121247(0x1c0)](currentDateFilter, _0x58918c[_0x121247(0x102)]) &&
                (_0x360e56 += '\x20(' + _0x58918c[_0x121247(0x15f)](getDateFilterDisplayText) + ')'),
            (_0x360e56 += _0x121247(0x320) + _0x3d0678 + '-' + _0x5255cf + ')'),
            (_0x25605f = _0x58918c[_0x121247(0x104)]),
            searchResults[_0x121247(0x37c)]((_0x3c0006) => {
                const _0x43aad4 = _0x121247;
                let _0x5bb775 = _0x58918c[_0x43aad4(0x251)](_0x3c0006[_0x43aad4(0x149)], userJid)
                        ? _0x3c0006[_0x43aad4(0x2d2)]
                        : _0x3c0006[_0x43aad4(0x149)],
                    _0x16a3fb = _0x58918c[_0x43aad4(0x39b)](_0x3c0006[_0x43aad4(0x344)], _0x58918c[_0x43aad4(0x161)])
                        ? _0x43aad4(0x137) +
                          _0x43aad4(0x30d) +
                          _0x43aad4(0x1fa) +
                          _0x43aad4(0x121) +
                          _0x43aad4(0x12a) +
                          '/' +
                          _0x5bb775
                        : _0x43aad4(0x137) +
                          _0x43aad4(0x30d) +
                          _0x43aad4(0x1fa) +
                          _0x43aad4(0x121) +
                          _0x43aad4(0x12a) +
                          '/' +
                          _0x5bb775,
                    _0x5280f6 = _0x58918c[_0x43aad4(0x318)](_0x3c0006[_0x43aad4(0x344)], _0x58918c[_0x43aad4(0x161)])
                        ? _0x3c0006[_0x43aad4(0x1c7)]
                        : _0x3c0006[_0x43aad4(0x344)],
                    _0x135147,
                    _0x370ab3;
                _0x58918c[_0x43aad4(0x318)](_0x3c0006[_0x43aad4(0x344)], _0x58918c[_0x43aad4(0x161)])
                    ? _0x3c0006[_0x43aad4(0x241) + _0x43aad4(0x1ef)]
                        ? ((_0x135147 = _0x58918c[_0x43aad4(0x2ec)]),
                          (_0x370ab3 = _0x58918c[_0x43aad4(0x335)]),
                          (_0x5280f6 = '' + _0x5280f6))
                        : ((_0x135147 = _0x58918c[_0x43aad4(0x153)]), (_0x370ab3 = _0x58918c[_0x43aad4(0x2c1)]))
                    : ((_0x135147 = _0x58918c[_0x43aad4(0x1ab)]), (_0x370ab3 = _0x58918c[_0x43aad4(0x19c)])),
                    (_0x25605f +=
                        _0x43aad4(0x2d3) +
                        _0x43aad4(0x31f) +
                        _0x43aad4(0x3ca) +
                        _0x43aad4(0x195) +
                        _0x43aad4(0x115) +
                        _0x43aad4(0x2de) +
                        _0x43aad4(0x17e) +
                        _0x43aad4(0x1cd) +
                        _0x43aad4(0x1e9) +
                        _0x43aad4(0x3aa) +
                        _0x43aad4(0x148) +
                        _0x3c0006[_0x43aad4(0x313)] +
                        (_0x43aad4(0x224) +
                            _0x43aad4(0x39f) +
                            _0x43aad4(0x316) +
                            _0x43aad4(0x2f3) +
                            _0x43aad4(0x136) +
                            _0x43aad4(0x39a) +
                            _0x43aad4(0x2a8) +
                            _0x43aad4(0x298) +
                            _0x43aad4(0x2ed) +
                            _0x43aad4(0x19d) +
                            _0x43aad4(0x33f)) +
                        _0x3c0006[_0x43aad4(0x120)] +
                        (_0x43aad4(0x262) + _0x43aad4(0x298) + '\x20') +
                        (_0x3c0006[_0x43aad4(0x38b)]
                            ? _0x43aad4(0x2e8) +
                              _0x43aad4(0x311) +
                              _0x43aad4(0x16f) +
                              _0x3c0006[_0x43aad4(0x38b)] +
                              _0x43aad4(0x292)
                            : '') +
                        (_0x43aad4(0x2f3) + _0x43aad4(0x1cb) + _0x43aad4(0x131) + _0x43aad4(0x242) + '>') +
                        new Date(_0x3c0006[_0x43aad4(0x25f)])[_0x43aad4(0x286) + _0x43aad4(0x2df)]() +
                        (_0x43aad4(0x262) +
                            _0x43aad4(0x207) +
                            _0x43aad4(0x381) +
                            _0x43aad4(0x17f) +
                            _0x43aad4(0x154) +
                            _0x43aad4(0x2e1) +
                            _0x43aad4(0x1e4) +
                            _0x43aad4(0x390) +
                            _0x43aad4(0x2b0) +
                            _0x43aad4(0x1f1) +
                            _0x43aad4(0x109)) +
                        _0x135147 +
                        (_0x43aad4(0x370) + _0x43aad4(0x207) + _0x43aad4(0x397) + 'a\x20') +
                        _0x370ab3 +
                        (_0x43aad4(0x3cf) + _0x43aad4(0x298) + _0x43aad4(0x11e)) +
                        _0x5280f6 +
                        (_0x43aad4(0x2f3) + _0x43aad4(0x32a) + _0x43aad4(0x12b) + _0x43aad4(0x288) + _0x43aad4(0x382)) +
                        _0x16a3fb +
                        (_0x43aad4(0x2e2) +
                            _0x43aad4(0x36c) +
                            _0x43aad4(0x18d) +
                            _0x43aad4(0x20c) +
                            _0x43aad4(0x291) +
                            _0x43aad4(0x247) +
                            _0x43aad4(0x298) +
                            _0x43aad4(0x28b) +
                            _0x43aad4(0x296) +
                            _0x43aad4(0x25a) +
                            _0x43aad4(0x236) +
                            _0x43aad4(0x2f3) +
                            _0x43aad4(0x140) +
                            _0x43aad4(0x303) +
                            _0x43aad4(0x2c6) +
                            _0x43aad4(0x2f3) +
                            _0x43aad4(0x3a1) +
                            _0x43aad4(0x298) +
                            _0x43aad4(0x262) +
                            _0x43aad4(0x115) +
                            _0x43aad4(0x14f) +
                            _0x43aad4(0x3c4) +
                            _0x43aad4(0x1e5)) +
                        _0x58918c[_0x43aad4(0x277)](
                            highlightSearchTerms,
                            md[_0x43aad4(0x346)](_0x3c0006[_0x43aad4(0x105)]),
                            lastSearchTerm
                        ) +
                        (_0x43aad4(0x262) + _0x43aad4(0x3a9) + '>'));
            }),
            (_0x25605f += _0x58918c[_0x121247(0x294)]),
            _0x58918c[_0x121247(0x157)](totalPages, -0x3a + 0x1 * 0x161 + 0x62 * -0x3) &&
                (_0x19af2d = _0x58918c[_0x121247(0x269)](generatePagination));
    } else
        lastSearchTerm &&
            _0x58918c[_0x121247(0x227)](lastSearchTerm[_0x121247(0x214)], 0xc88 * -0x1 + -0x12bb + -0x2 * -0xfa3) &&
            ((_0x25605f =
                _0x121247(0x156) +
                _0x121247(0x1b8) +
                _0x121247(0x26f) +
                _0x121247(0x1e9) +
                _0x121247(0x2e8) +
                _0x121247(0x150) +
                _0x121247(0x134) +
                _0x121247(0x298) +
                _0x121247(0x2c0) +
                _0x121247(0x32f) +
                _0x121247(0x1fb) +
                _0x121247(0x2e4) +
                _0x121247(0x210) +
                _0x121247(0x17a) +
                _0x121247(0x130) +
                _0x121247(0x31c) +
                _0x121247(0x371) +
                _0x121247(0x235) +
                _0x121247(0x2c7) +
                _0x121247(0x380) +
                _0x121247(0x17f) +
                _0x121247(0x19e) +
                _0x121247(0x1f4) +
                _0x121247(0x3b0) +
                _0x121247(0x194) +
                _0x121247(0x37f) +
                _0x121247(0x111) +
                _0x121247(0x15c) +
                _0x121247(0x2ae) +
                _0x121247(0x222) +
                _0x121247(0x175) +
                _0x121247(0x27b) +
                _0x121247(0x20e) +
                _0x121247(0x356) +
                _0x121247(0x3a1) +
                _0x121247(0x345) +
                'v>'),
            (_0x360e56 = _0x121247(0x35f) + _0x121247(0x145) + '\x20\x22' + lastSearchTerm + '\x22'));
    const _0x4e65a5 = _0x58918c[_0x121247(0x2d9)]($, _0x58918c[_0x121247(0x1ba)]),
        _0x51ecee = _0x58918c[_0x121247(0x2d9)]($, _0x58918c[_0x121247(0x1d3)]),
        _0x2df057 = _0x58918c[_0x121247(0x3b3)]($, _0x58918c[_0x121247(0x132)]),
        _0x438495 = _0x58918c[_0x121247(0x32b)]($, _0x58918c[_0x121247(0x2bb)]);
    _0x58918c[_0x121247(0x3b3)]($, _0x58918c[_0x121247(0x2ad)])[_0x121247(0x107)](
        0x2bf * -0xb + 0x1cd3 + 0x25c,
        function () {
            const _0x14e58e = _0x121247,
                _0x482896 = { uERZm: _0x58918c[_0x14e58e(0x116)] };
            _0x58918c[_0x14e58e(0x2d9)]($, this)[_0x14e58e(0x1a3)](),
                _0x4e65a5[_0x14e58e(0x107)](-0x2289 * -0x1 + -0x1 * -0x166f + -0x37cc, function () {
                    const _0x5b5ffb = _0x14e58e;
                    _0x4e65a5[_0x5b5ffb(0x29a)](_0x25605f)
                        [_0x5b5ffb(0x35c) + 's'](_0x58918c[_0x5b5ffb(0x116)])
                        [_0x5b5ffb(0x16a)]()
                        [_0x5b5ffb(0x139)](0x1 * 0xdb7 + -0x1617 + -0x30 * -0x35);
                }),
                _0x360e56
                    ? _0x51ecee[_0x14e58e(0x107)](-0x247e + 0x1f35 * -0x1 + 0x447b, function () {
                          const _0x17030c = _0x14e58e;
                          _0x51ecee[_0x17030c(0x29a)](_0x360e56)
                              [_0x17030c(0x35c) + 's'](_0x58918c[_0x17030c(0x151)])
                              [_0x17030c(0x16a)]()
                              [_0x17030c(0x139)](0x85a + 0x195c + -0x2026);
                      })
                    : _0x51ecee[_0x14e58e(0x107)](-0x72f * 0x1 + -0x1 * 0x1c98 + -0x539 * -0x7)[_0x14e58e(0x35c) + 's'](
                          _0x58918c[_0x14e58e(0x340)]
                      ),
                _0x19af2d
                    ? (_0x2df057[_0x14e58e(0x107)](0xea7 * 0x1 + -0x1 * -0xb55 + 0x4 * -0x64d, function () {
                          const _0x1ddba8 = _0x14e58e;
                          _0x2df057[_0x1ddba8(0x29a)](_0x19af2d)
                              [_0x1ddba8(0x35c) + 's'](_0x482896[_0x1ddba8(0x273)])
                              [_0x1ddba8(0x16a)]()
                              [_0x1ddba8(0x139)](0x2665 + 0x2c * -0xdc + -0xfb * -0x1);
                      }),
                      _0x438495[_0x14e58e(0x107)](-0xde5 * -0x2 + 0x12a * -0x1d + 0x6c0, function () {
                          const _0xa00805 = _0x14e58e;
                          _0x438495[_0xa00805(0x29a)](_0x19af2d)
                              [_0xa00805(0x35c) + 's'](_0x482896[_0xa00805(0x273)])
                              [_0xa00805(0x16a)]()
                              [_0xa00805(0x139)](0x1ce6 + 0xc1 * -0xf + -0x1007);
                      }))
                    : (_0x2df057[_0x14e58e(0x107)](-0x157 * -0x11 + -0x5e5 + 0x3 * -0x55e),
                      _0x438495[_0x14e58e(0x107)](-0x1 * 0xa7b + -0x859 + -0x139c * -0x1));
        }
    );
}
function generatePagination() {
    const _0x15ffa1 = _0x814731,
        _0x1a2c75 = {
            jQyXm: _0x15ffa1(0x2e8) + _0x15ffa1(0x29b) + _0x15ffa1(0x226) + _0x15ffa1(0x24b),
            AfEPt: function (_0x4dcd05, _0xb56c04) {
                return _0x4dcd05 > _0xb56c04;
            },
            INNVj: function (_0x520aa9, _0x5e3459) {
                return _0x520aa9 - _0x5e3459;
            },
            VYIjo: _0x15ffa1(0x342),
            GiMtM: function (_0x27f5af, _0x2aa6cc) {
                return _0x27f5af + _0x2aa6cc;
            },
            fDfXY: _0x15ffa1(0x3b2) + _0x15ffa1(0x264) + _0x15ffa1(0x23c) + _0x15ffa1(0x1a4) + _0x15ffa1(0x25c),
            hFAtU: function (_0x169086, _0x383713) {
                return _0x169086 <= _0x383713;
            },
            WBLye: function (_0x2f303c, _0x17e8ee) {
                return _0x2f303c === _0x17e8ee;
            },
            rRzKs: _0x15ffa1(0x1e1),
            XmTtg: function (_0x161033, _0xd340ad) {
                return _0x161033 < _0xd340ad;
            },
            woQVF: function (_0x1fa472, _0x9e2452) {
                return _0x1fa472 < _0x9e2452;
            },
            jxPqJ: function (_0x35d22b, _0x5f4412) {
                return _0x35d22b < _0x5f4412;
            },
            JMzBg: _0x15ffa1(0x292),
        };
    let _0x59a956 = _0x1a2c75[_0x15ffa1(0x322)];
    _0x1a2c75[_0x15ffa1(0x276)](currentPage, 0xd * -0x12f + -0x151 * 0x1d + 0x3591) &&
        (_0x59a956 +=
            _0x15ffa1(0x26a) +
            _0x15ffa1(0x3af) +
            _0x15ffa1(0x3cc) +
            _0x15ffa1(0x377) +
            _0x15ffa1(0x2b9) +
            _0x15ffa1(0x1e2) +
            _0x1a2c75[_0x15ffa1(0x2b6)](currentPage, 0x29b + -0x1fef * -0x1 + 0x1a5 * -0x15) +
            _0x15ffa1(0x3b9) +
            (isLoading ? _0x1a2c75[_0x15ffa1(0x39c)] : '') +
            (_0x15ffa1(0x1e9) +
                _0x15ffa1(0x1a9) +
                _0x15ffa1(0x118) +
                _0x15ffa1(0x10d) +
                _0x15ffa1(0x20a) +
                _0x15ffa1(0x2ce) +
                _0x15ffa1(0x19a) +
                _0x15ffa1(0x337)));
    let _0x5bc9b9 = Math[_0x15ffa1(0x1a6)](
            0x688 + -0x1740 + 0x10b9 * 0x1,
            _0x1a2c75[_0x15ffa1(0x2b6)](currentPage, 0x1f93 + -0x1b73 + -0x41e)
        ),
        _0x22087f = Math[_0x15ffa1(0x327)](
            totalPages,
            _0x1a2c75[_0x15ffa1(0x1fe)](currentPage, -0x4fd * -0x4 + 0x19ef * 0x1 + -0x2de1)
        );
    _0x1a2c75[_0x15ffa1(0x276)](_0x5bc9b9, 0x962 + -0x107b + 0x71a * 0x1) &&
        ((_0x59a956 +=
            _0x15ffa1(0x26a) +
            _0x15ffa1(0x3af) +
            _0x15ffa1(0x31b) +
            _0x15ffa1(0x2dc) +
            _0x15ffa1(0x35b) +
            _0x15ffa1(0x259) +
            _0x15ffa1(0x1de) +
            '\x20' +
            (isLoading ? _0x1a2c75[_0x15ffa1(0x39c)] : '') +
            (_0x15ffa1(0x319) + '>')),
        _0x1a2c75[_0x15ffa1(0x276)](_0x5bc9b9, -0xa48 + 0x8e8 + 0x162) && (_0x59a956 += _0x1a2c75[_0x15ffa1(0x30e)]));
    for (let _0x40be58 = _0x5bc9b9; _0x1a2c75[_0x15ffa1(0x36e)](_0x40be58, _0x22087f); _0x40be58++) {
        const _0x2c2929 = _0x1a2c75[_0x15ffa1(0x182)](_0x40be58, currentPage) ? _0x1a2c75[_0x15ffa1(0x24e)] : '';
        _0x59a956 +=
            _0x15ffa1(0x26a) +
            _0x15ffa1(0x3af) +
            _0x15ffa1(0x31b) +
            _0x15ffa1(0x2dc) +
            'r\x20' +
            _0x2c2929 +
            (_0x15ffa1(0x3a2) + _0x15ffa1(0x178) + _0x15ffa1(0x245)) +
            _0x40be58 +
            _0x15ffa1(0x3b9) +
            (isLoading ? _0x1a2c75[_0x15ffa1(0x39c)] : '') +
            '>' +
            _0x40be58 +
            _0x15ffa1(0x141);
    }
    return (
        _0x1a2c75[_0x15ffa1(0x1d9)](_0x22087f, totalPages) &&
            (_0x1a2c75[_0x15ffa1(0x3c7)](
                _0x22087f,
                _0x1a2c75[_0x15ffa1(0x2b6)](totalPages, 0x40 * -0x24 + -0x61 * 0xd + 0x1 * 0xdee)
            ) && (_0x59a956 += _0x1a2c75[_0x15ffa1(0x30e)]),
            (_0x59a956 +=
                _0x15ffa1(0x26a) +
                _0x15ffa1(0x3af) +
                _0x15ffa1(0x31b) +
                _0x15ffa1(0x2dc) +
                _0x15ffa1(0x35b) +
                _0x15ffa1(0x259) +
                _0x15ffa1(0x2bf) +
                totalPages +
                _0x15ffa1(0x3b9) +
                (isLoading ? _0x1a2c75[_0x15ffa1(0x39c)] : '') +
                '>' +
                totalPages +
                _0x15ffa1(0x141))),
        _0x1a2c75[_0x15ffa1(0x3ac)](currentPage, totalPages) &&
            (_0x59a956 +=
                _0x15ffa1(0x26a) +
                _0x15ffa1(0x3af) +
                _0x15ffa1(0x3cc) +
                _0x15ffa1(0x377) +
                _0x15ffa1(0x2b9) +
                _0x15ffa1(0x1e2) +
                _0x1a2c75[_0x15ffa1(0x1fe)](currentPage, 0xf48 + -0x1225 + 0x2de) +
                _0x15ffa1(0x3b9) +
                (isLoading ? _0x1a2c75[_0x15ffa1(0x39c)] : '') +
                (_0x15ffa1(0x1e9) +
                    _0x15ffa1(0x20b) +
                    _0x15ffa1(0x397) +
                    _0x15ffa1(0x2f6) +
                    _0x15ffa1(0x278) +
                    _0x15ffa1(0x28f) +
                    _0x15ffa1(0x27e) +
                    'n>')),
        (_0x59a956 += _0x1a2c75[_0x15ffa1(0x334)]),
        _0x59a956
    );
}
function navigateToPage(_0x4add05) {
    const _0x499a66 = _0x814731,
        _0xfd2da5 = {
            OWSGA: function (_0x4164ba, _0x317acf) {
                return _0x4164ba === _0x317acf;
            },
            SzryD: function (_0x13fb20, _0x564f55) {
                return _0x13fb20(_0x564f55);
            },
            bODMC: function (_0x112242, _0x5196a9, _0x41bd3b) {
                return _0x112242(_0x5196a9, _0x41bd3b);
            },
        };
    if (isLoading || _0xfd2da5[_0x499a66(0x396)](_0x4add05, currentPage)) return;
    _0xfd2da5[_0x499a66(0x240)](showPaginationLoading, _0x4add05),
        _0xfd2da5[_0x499a66(0x203)](searchChats, lastSearchTerm, _0x4add05);
}
function showPaginationLoading(_0x5b6061) {
    const _0x47978e = _0x814731,
        _0xfc08ab = {
            dHAra: function (_0x586b9a, _0x444028) {
                return _0x586b9a(_0x444028);
            },
            FvLNM: _0x47978e(0x2d7) + _0x47978e(0x248),
            ufAgb: function (_0x20553d, _0x165cf5) {
                return _0x20553d(_0x165cf5);
            },
            tjgxY: _0x47978e(0x2d7) + 'n',
        },
        _0x345006 =
            _0x47978e(0x2d3) +
            _0x47978e(0x31f) +
            _0x47978e(0x1bf) +
            _0x47978e(0x38e) +
            _0x47978e(0x1ff) +
            _0x47978e(0x367) +
            _0x47978e(0x127) +
            _0x47978e(0x2f2) +
            _0x47978e(0x2f5) +
            _0x47978e(0x298) +
            _0x47978e(0x28b) +
            _0x47978e(0x296) +
            _0x47978e(0x255) +
            _0x47978e(0x34e) +
            _0x47978e(0x165) +
            _0x47978e(0x14b) +
            _0x47978e(0x2f0) +
            'e\x20' +
            _0x5b6061 +
            (_0x47978e(0x33d) + _0x47978e(0x345) + _0x47978e(0x1b1) + _0x47978e(0x1e8) + '\x20\x20');
    _0xfc08ab[_0x47978e(0x341)]($, _0xfc08ab[_0x47978e(0x3a7)])[_0x47978e(0x29a)](_0x345006),
        _0xfc08ab[_0x47978e(0x1bb)]($, _0xfc08ab[_0x47978e(0x2e5)])[_0x47978e(0x29a)](_0x345006);
}
function handleSortChange(_0x551e98) {
    const _0x9ff889 = _0x814731,
        _0x581721 = {
            jdkmN: function (_0x3950c1, _0x51813c) {
                return _0x3950c1(_0x51813c);
            },
            UnofB: function (_0x4356e3, _0x120ec4) {
                return _0x4356e3 === _0x120ec4;
            },
            sUrHt: _0x9ff889(0x289),
            bFEKU: _0x9ff889(0x258),
            xjcwE: function (_0xcd2021, _0x19a1b6) {
                return _0xcd2021(_0x19a1b6);
            },
            oYpcV: _0x9ff889(0x391) + 'us',
            iRlll: _0x9ff889(0x103) + _0x9ff889(0x1b5),
            BgFXD: _0x9ff889(0x34d),
            nXAnm: _0x9ff889(0x25f),
            ZULCk: _0x9ff889(0x1a8),
            yIoDM: _0x9ff889(0x324) + 'st',
            IiIgo: _0x9ff889(0x39d),
            bwKre: _0x9ff889(0x312),
            hjhYg: function (_0x1b9cab, _0x42954a) {
                return _0x1b9cab(_0x42954a);
            },
            KCRtG: _0x9ff889(0x1ec) + 'st',
            OpeJP: function (_0x59c323, _0x28073f) {
                return _0x59c323 >= _0x28073f;
            },
            lyfjn: function (_0x4f0659, _0x3af3cf, _0x3a3ba3) {
                return _0x4f0659(_0x3af3cf, _0x3a3ba3);
            },
        },
        _0x4c1ce0 = _0x581721[_0x9ff889(0x189)]($, _0x551e98[_0x9ff889(0x332)])[_0x9ff889(0x343)]();
    if (_0x581721[_0x9ff889(0x394)](_0x4c1ce0, _0x581721[_0x9ff889(0x216)]))
        (currentSortBy = _0x581721[_0x9ff889(0x216)]),
            (currentSortOrder = _0x581721[_0x9ff889(0x10c)]),
            _0x581721[_0x9ff889(0x2a5)]($, _0x581721[_0x9ff889(0x37e)])[_0x9ff889(0x135)](_0x581721[_0x9ff889(0x297)]);
    else {
        if (_0x581721[_0x9ff889(0x394)](_0x4c1ce0, _0x581721[_0x9ff889(0x23e)]))
            (currentSortBy = _0x581721[_0x9ff889(0x374)]),
                (currentSortOrder = _0x581721[_0x9ff889(0x220)]),
                _0x581721[_0x9ff889(0x2a5)]($, _0x581721[_0x9ff889(0x37e)])[_0x9ff889(0x135)](
                    _0x581721[_0x9ff889(0x268)]
                );
        else
            _0x581721[_0x9ff889(0x394)](_0x4c1ce0, _0x581721[_0x9ff889(0x339)]) &&
                ((currentSortBy = _0x581721[_0x9ff889(0x374)]),
                (currentSortOrder = _0x581721[_0x9ff889(0x1f5)]),
                _0x581721[_0x9ff889(0x3cd)]($, _0x581721[_0x9ff889(0x37e)])[_0x9ff889(0x135)](
                    _0x581721[_0x9ff889(0x2ff)]
                ));
    }
    lastSearchTerm &&
        _0x581721[_0x9ff889(0x234)](lastSearchTerm[_0x9ff889(0x214)], 0xb52 + 0x1 * -0x1de0 + 0x1291) &&
        _0x581721[_0x9ff889(0x3b5)](searchChats, lastSearchTerm, 0xbf * 0x3 + 0x2a7 + -0x3 * 0x1a1);
}
function handleDatePresetClick(_0x82ef24) {
    const _0x53bacd = _0x814731,
        _0x5330d3 = {
            WzQEG: function (_0x2b3585, _0x43b402) {
                return _0x2b3585(_0x43b402);
            },
            cStwY: _0x53bacd(0x349),
            rLCVw: function (_0x13e3c5, _0x3392d3) {
                return _0x13e3c5(_0x3392d3);
            },
            tgKsz: _0x53bacd(0x2a1) + 'et',
            lLKSC: _0x53bacd(0x1e1),
            nGzYf: function (_0x36244f, _0x5591a7) {
                return _0x36244f === _0x5591a7;
            },
            GCeZd: _0x53bacd(0x2fa),
            zMclc: _0x53bacd(0x100) + _0x53bacd(0x199),
            BqCoK: _0x53bacd(0x254),
            PvlWc: function (_0x109ee2) {
                return _0x109ee2();
            },
            fGPUM: function (_0x1162bb, _0x26d178) {
                return _0x1162bb >= _0x26d178;
            },
            iwxUA: function (_0x3db8f5, _0x213123, _0x55a843) {
                return _0x3db8f5(_0x213123, _0x55a843);
            },
        },
        _0x4c1703 = _0x5330d3[_0x53bacd(0x3c1)]($, _0x82ef24[_0x53bacd(0x332)])[_0x53bacd(0x2cd)](
            _0x5330d3[_0x53bacd(0x283)]
        );
    _0x5330d3[_0x53bacd(0x208)]($, _0x5330d3[_0x53bacd(0x271)])[_0x53bacd(0x35c) + 's'](_0x5330d3[_0x53bacd(0x168)]),
        _0x5330d3[_0x53bacd(0x3c1)]($, _0x82ef24[_0x53bacd(0x332)])[_0x53bacd(0x326)](_0x5330d3[_0x53bacd(0x168)]),
        _0x5330d3[_0x53bacd(0x310)](_0x4c1703, _0x5330d3[_0x53bacd(0x17c)])
            ? _0x5330d3[_0x53bacd(0x3c1)]($, _0x5330d3[_0x53bacd(0x2bd)])[_0x53bacd(0x35c) + 's'](
                  _0x5330d3[_0x53bacd(0x301)]
              )
            : (_0x5330d3[_0x53bacd(0x3c1)]($, _0x5330d3[_0x53bacd(0x2bd)])[_0x53bacd(0x326)](
                  _0x5330d3[_0x53bacd(0x301)]
              ),
              (currentDateFilter = _0x4c1703),
              _0x5330d3[_0x53bacd(0x3ab)](updateDateFilterSummary),
              lastSearchTerm &&
                  _0x5330d3[_0x53bacd(0x347)](lastSearchTerm[_0x53bacd(0x214)], 0x2ae + 0x1627 + -0x18d1 * 0x1) &&
                  _0x5330d3[_0x53bacd(0x295)](searchChats, lastSearchTerm, 0x17df + 0x18ec + -0x30ca));
}
function handleCustomDateChange() {
    const _0x397df8 = _0x814731,
        _0x134265 = {
            VGueH: function (_0x3879a8, _0x4c5f13) {
                return _0x3879a8(_0x4c5f13);
            },
            bpNBH: _0x397df8(0x176) + 'e',
            AxQPa: function (_0x1b00bb, _0x5948be) {
                return _0x1b00bb(_0x5948be);
            },
            PdkUy: _0x397df8(0x22e),
            QiYsA: function (_0x2fb198, _0x20b474) {
                return _0x2fb198 && _0x20b474;
            },
            ibOiS: _0x397df8(0x3ba),
            yJSKx: function (_0x5bfc05, _0x5075f3) {
                return _0x5bfc05 >= _0x5075f3;
            },
            vXIuw: function (_0x45768f, _0x30d312, _0x1a186d) {
                return _0x45768f(_0x30d312, _0x1a186d);
            },
            Gjcsn: function (_0x529a46) {
                return _0x529a46();
            },
            dvYJA: _0x397df8(0x2fa),
        },
        _0x52f9a3 = _0x134265[_0x397df8(0x232)]($, _0x134265[_0x397df8(0x379)])[_0x397df8(0x343)](),
        _0xfeb175 = _0x134265[_0x397df8(0x2b1)]($, _0x134265[_0x397df8(0x122)])[_0x397df8(0x343)]();
    if (_0x134265[_0x397df8(0x333)](_0x52f9a3, _0xfeb175)) {
        const _0x2c1f85 = _0x134265[_0x397df8(0x363)][_0x397df8(0x3a8)]('|');
        let _0x554b65 = -0x2382 + 0x2f * -0x19 + 0x2819;
        while (!![]) {
            switch (_0x2c1f85[_0x554b65++]) {
                case '0':
                    customEndDate = _0xfeb175;
                    continue;
                case '1':
                    lastSearchTerm &&
                        _0x134265[_0x397df8(0x24f)](
                            lastSearchTerm[_0x397df8(0x214)],
                            -0x42d * 0x2 + -0x1 * -0xf3f + -0x6e1
                        ) &&
                        _0x134265[_0x397df8(0x19f)](searchChats, lastSearchTerm, 0x239 * -0xa + 0x7b2 + 0x3d * 0x3d);
                    continue;
                case '2':
                    _0x134265[_0x397df8(0x26b)](updateDateFilterSummary);
                    continue;
                case '3':
                    currentDateFilter = _0x134265[_0x397df8(0x1f2)];
                    continue;
                case '4':
                    customStartDate = _0x52f9a3;
                    continue;
            }
            break;
        }
    }
}
function _0x1131() {
    const _0x2fb67a = [
        'removeClas',
        'hidden\x20sea',
        'IqDDD',
        'No\x20results',
        '486-4218-b',
        'Failed\x20to\x20',
        'searchChat',
        'ibOiS',
        'et\x20to:',
        'index',
        'endsWith',
        '\x20\x20\x20\x20\x20\x20<div',
        'sort',
        'All\x20conver',
        'eBHgH',
        'GUwfK',
        '_blank\x22\x20cl',
        'yKVgY',
        'hFAtU',
        'f90-020b9e',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'earching\x20w',
        'loading-sp',
        'group',
        'nXAnm',
        'NWTPH',
        'isAdhoc',
        '\x20onclick=\x22',
        'HlMEa',
        'bpNBH',
        'CKMeM',
        'today',
        'forEach',
        'from',
        'oYpcV',
        '\x200.9rem;\x20c',
        'ds.</div>\x0a',
        '/div>\x0a\x20\x20\x20\x20',
        'href=\x22',
        'highlight\x22',
        'XcexP',
        'endValue',
        'ntent\x22>\x0a\x20\x20',
        'tion\x20faile',
        'ZmcTj',
        'e,\x20#end-da',
        'nodeType',
        'title',
        'citGrant',
        '3|4',
        'n-containe',
        'YaDsL',
        '\x20\x20\x20\x20\x20\x20\x20\x20<s',
        '#sort-stat',
        'Bootstrap\x20',
        'click',
        'UnofB',
        'gBGNB',
        'OWSGA',
        'i\x20class=\x22f',
        'page:',
        'Today\x20only',
        'ass=\x22user-',
        'OGgLa',
        'VYIjo',
        'oldest',
        'fa-lock',
        'tar\x22\x20class',
        'jabberId',
        '\x20\x20\x20</div>\x0a',
        '\x22\x20onclick=',
        '/client-ap',
        'thisMonth',
        '3328638uTPzQu',
        'ONSOn',
        'FvLNM',
        'split',
        '\x20\x20\x20\x20\x20</div',
        '\x20\x20\x20\x20<img\x20s',
        'PvlWc',
        'jxPqJ',
        'pageCount',
        'msfLZ',
        'ass=\x22pagin',
        ':\x200.5rem;\x20',
        'Ammir',
        '<span\x20clas',
        'CKCuW',
        'SCRIPT',
        'lyfjn',
        'Search\x20inp',
        '74c3c\x27>Sea',
        'ith\x20term:',
        ')\x22\x20',
        '4|0|3|2|1',
        '#date-stat',
        '8Btilhj',
        'NHDiL',
        'sations',
        'yDKMU',
        'rch\x20failed',
        'WzQEG',
        'OhWoZ',
        'https://ui',
        'essage-con',
        'tzsNS',
        'QqIWv',
        'woQVF',
        'markdownit',
        'gSOZi',
        '\x22search-re',
        'ults...</d',
        'ation-btn\x22',
        'hjhYg',
        'zEiTT',
        '\x22></i>\x0a\x20\x20\x20',
        '4|3|5|8',
        'fJqtg',
        '#custom-da',
        'rching',
        'IkFLJ',
        'Most\x20relev',
        'nDqRm',
        'body',
        'zXvty',
        'fadeOut',
        'eHNDq',
        '-badge\x20',
        'Select\x20dat',
        'tUDmX',
        'bFEKU',
        'chevron-le',
        'kWBHi',
        'onal\x20group',
        '#main-app',
        'olor:\x20#94a',
        'SsEvJ',
        'jqUhM',
        'ZTBNm',
        '\x20\x20\x20\x20\x20\x20\x20<di',
        'VCgpN',
        '#search-in',
        'ss=\x22fa\x20fa-',
        '\x20hidden,\x20m',
        'put',
        '396399Hpbwcz',
        'yesterday',
        'orgspan.co',
        '\x20\x20\x20',
        'Bsowu',
        'userName',
        'irectory/#',
        'PdkUy',
        '\x5cb(',
        'AAGaL',
        'GyKiX',
        'results',
        '\x20class=\x22pa',
        'JmRvf',
        'nfo:',
        '/chat-room',
        'n>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'User\x20data\x20',
        'IUamC',
        'XgsSI',
        'vjLSy',
        'results\x20fo',
        'class=\x22mes',
        'pXjjt',
        'ibuAl',
        'ts-icon\x22>\x0a',
        'text',
        '\x20\x20\x20<div\x20cl',
        'https://ap',
        'origin',
        'fadeIn',
        'fa-users',
        'oerKz',
        'CndMr',
        'ass=\x22searc',
        'map',
        '2558356zqMkaA',
        '\x20\x20\x20\x20\x20\x20\x20Ope',
        '</button>',
        'bhadZ',
        'ps/chat-se',
        'Term\x20too\x20s',
        '\x20found\x20for',
        '>$1</mark>',
        'OcyGn',
        'rc=\x22',
        'targetJid',
        '\x20for\x20\x22',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20L',
        'erty',
        'direct',
        'diiER',
        'v\x20class=\x22m',
        '=\x22no-resul',
        'Gknnp',
        'UI\x20updated',
        'nBoGr',
        'iv\x20class=\x22',
        'pping\x20sear',
        '\x0a\x20\x20\x20\x20\x20\x20<di',
        'aWahY',
        'anytime',
        'Custom\x20Ran',
        'PRE',
        '-avatars.c',
        '3b8;\x22>\x0a\x20\x20\x20',
        'DXAGy',
        'platformCl',
        'QLvzA',
        'PGZZh',
        'AMuHr',
        'ient',
        'all',
        'roup',
        'i>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '=\x22results-',
        'tSgEm',
        'lLKSC',
        '#auth-fail',
        'hide',
        'vcwgs',
        'frOOX',
        'FzIAg',
        'jYbSS',
        'le\x22>',
        '21153NLDXeC',
        'sxVvv',
        'UsersApi',
        '3LDNdQf',
        'thisWeek',
        'ust\x20be\x20at\x20',
        '#start-dat',
        'qGUUA',
        '\x22navigateT',
        'ure',
        '\x20\x20<div>No\x20',
        'hasOwnProp',
        'GCeZd',
        'SwkVM',
        'earch-resu',
        '\x20\x20\x20\x20\x20\x20\x20\x20<d',
        '#search-re',
        'CODE',
        'WBLye',
        '\x20to\x20',
        '<div\x20style',
        'Searching\x20',
        '0|6|1|2|7|',
        'fykCh',
        'uoOxD',
        'jdkmN',
        'ftgYe',
        'toLowerCas',
        '2c596b',
        'ass=\x22open-',
        'value',
        'inner-smal',
        'getTime',
        'rsMe',
        'zFYeG',
        'Authentica',
        'font-size:',
        'sult\x22>\x0a\x20\x20\x20',
        'log',
        'hort\x20or\x20em',
        'LmiBS',
        'te-inputs',
        '\x20\x20\x20\x20\x20\x20</bu',
        '\x20(Page\x20',
        'LLdwt',
        's=\x22user-na',
        'iv\x20style=\x22',
        'vXIuw',
        'mFGSk',
        'ain-app\x20sh',
        'About\x20to\x20c',
        'remove',
        'is\x22>...</s',
        'ghbiK',
        'max',
        'received:',
        'DESC',
        '\x20\x20\x20\x20<i\x20cla',
        'LntIa',
        'jQGzL',
        'tagName',
        'sNIbd',
        'GlKil',
        'Person',
        'then',
        'v>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'PmgWQ',
        'pty,\x20hidin',
        '#sort-sele',
        'ant\x20first',
        'append',
        'This\x20month',
        'v\x20class=\x22n',
        'ZvCbV',
        'hQCnO',
        'ufAgb',
        'getGroups',
        'imageUri',
        'TEXT_NODE',
        '\x22paginatio',
        'CxtrB',
        'kuEqA',
        'ZIqVs',
        'riZQH',
        'tgSpB',
        '1256TiWStU',
        'toString',
        'groupName',
        'MsAMO',
        'xYOND',
        'QmUqr',
        '\x20\x20\x20\x20\x20<div\x20',
        'fa-user',
        'lt-header\x22',
        'ahUrj',
        '6c467620-9',
        '\x20result',
        'er-summary',
        'obTlr',
        'PRhEf',
        'getFullYea',
        'IuAas',
        'Flnfc',
        'GtYHO',
        'knlGW',
        'XmTtg',
        'function\x20c',
        'othoS',
        'or\x20',
        'vvMGQ',
        'ToPage(1)\x22',
        'YSbFV',
        'PCYSl',
        'active',
        'Page(',
        'STYLE',
        's\x22>\x0a\x20\x20\x20\x20\x20\x20',
        'tent\x22>',
        'test',
        'messages',
        '\x20</div>\x0a\x20\x20',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'startValue',
        'PNuks',
        'Oldest\x20fir',
        'setHours',
        'aRMXp',
        'Group',
        'nvhbJ',
        '\x22chat-type',
        'dvYJA',
        'MEgxG',
        'margin-top',
        'bwKre',
        'cHQGw',
        'ApiClient',
        'om/api/?na',
        'Direct',
        'loud.com/d',
        'ch\x22></i>\x0a\x20',
        'g\x20results',
        'href',
        'GiMtM',
        'r\x22>\x0a\x20\x20\x20\x20\x20\x20',
        'gjTnZ',
        'ng\x20new\x20res',
        'tlnoe',
        'bODMC',
        '#search-me',
        '3286120MAhPKP',
        'ssful',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20<',
        'rLCVw',
        'ypkju',
        'ft\x22></i>\x20P',
        '\x20\x20\x20\x20Next\x20<',
        'chat-btn\x22\x20',
        'zhLpz',
        'aracters\x20l',
        'QhCGr',
        'iv>\x0a\x20\x20\x20\x20\x20\x20',
        'ading,\x20ski',
        'only',
        'all\x20getUse',
        'length',
        'IihoK',
        'sUrHt',
        'nrkzX',
        'KtogJ',
        'getDay',
        'ctgap',
        'Yesterday',
        'syYEp',
        'Already\x20lo',
        'This\x20Month',
        'IbhFn',
        'ZULCk',
        'QdbAi',
        'r\x20search\x20m',
        'JCmec',
        '\x22\x20alt=\x22Ava',
        'sBbiJ',
        'on-contain',
        'DrRIt',
        '.\x20Please\x20t',
        's\x20called\x20w',
        'Last\x20Week',
        'trim',
        'GroupsApi',
        'EUUML',
        '#end-date',
        'XkvKO',
        'innerHTML',
        'https:',
        'VGueH',
        'enhgg',
        'OpeJP',
        'ith\x20differ',
        'link\x22></i>',
        'ut\x20trigger',
        '12283243wSIcMH',
        '5067gaTUWu',
        'ed:',
        'toLocaleDa',
        'ion-ellips',
        'teString',
        'BgFXD',
        'qvydu',
        'SzryD',
        'isPersonal',
        'sage-date\x22',
        'PExPq',
        '4350ZfXqDk',
        'oPage(',
        'User\x20JID\x20s',
        'n\x20chat\x22>\x0a\x20',
        'n-top',
        'getDate',
        '2|5|6|1|0|',
        'er\x22>',
        '1|0|2|3|4',
        'MARK',
        'rRzKs',
        'yJSKx',
        '\x5c$&',
        'JWUem',
        'sXWmi',
        'change',
        'hidden',
        '-spinner\x20f',
        'ChatApi',
        'IKyCn',
        'SCORE',
        '=\x22navigate',
        '-external-',
        'location',
        'pan>',
        'jid',
        'rxwFi',
        'created',
        '@conferenc',
        'span',
        '</div>\x0a\x20\x20\x20',
        'DATE_RANGE',
        's=\x22paginat',
        's=\x22search-',
        'getMonth',
        'includes',
        'yIoDM',
        'keEoo',
        '<button\x20cl',
        'Gjcsn',
        'PvmQI',
        'removeChil',
        'push',
        'o-results\x22',
        'FEWNV',
        'tgKsz',
        '...',
        'uERZm',
        'fdxMQ',
        'protocol',
        'AfEPt',
        'jRVTk',
        'on-right\x22>',
        'personal-g',
        'ALiBw',
        'least\x203\x20ch',
        'fullJabber',
        'fetch\x20pers',
        '\x20\x20\x20</butto',
        'This\x20week',
        '\x20\x20\x20\x20',
        'replaceChi',
        'filter',
        'cStwY',
        'total',
        'GIXKD',
        'toLocaleSt',
        '#date-filt',
        '\x20\x20\x20\x20\x20\x20\x20<a\x20',
        'relevance',
        'vEvbj',
        '\x20\x20\x20\x20\x20<i\x20cl',
        'LnonI',
        'NXSlD',
        'euyWJ',
        '</i>\x0a\x20\x20\x20\x20\x20',
        'e\x20range',
        'title=\x22Ope',
        '</div>',
        'SbTYx',
        'daWtB',
        'iwxUA',
        'ass=\x22fa\x20fa',
        'iRlll',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'ry\x20again.<',
        'html',
        '=\x22paginati',
        'CnKAc',
        'erlay',
        'VQwsJ',
        'nTJvE',
        'replace',
        '.date-pres',
        '=\x27color:#e',
        'CKorC',
        'NfikN',
        'xjcwE',
        ')\x5cb',
        'warn',
        'info\x22>\x0a\x20\x20\x20',
        'Today',
        'scebw',
        'PrDKl',
        'tYUVh',
        'GDZCe',
        '\x20\x20\x20\x20\x20\x20\x20You',
        'subject',
        'pan\x20class=',
        'AxQPa',
        'SearchApi',
        '\x20-\x20',
        '<mark\x20clas',
        'kZhMp',
        'INNVj',
        'name',
        'images',
        'navigateTo',
        'dGZRr',
        'BLYae',
        'parentNode',
        'zMclc',
        'apply',
        'ToPage(',
        '<i\x20class=\x22',
        'mUrmS',
        'sQgIT',
        'textConten',
        'Last\x20week',
        'bzrpn',
        '\x20\x20\x20\x20\x20\x20</a>',
        'ent\x20keywor',
        'CoWai',
        'e.genesys.',
        'dduKd',
        'NbolC',
        'catch',
        'data',
        'revious\x0a\x20\x20',
        'zduIA',
        'substring',
        'Mvwpj',
        'fromJid',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<',
        'sults',
        'OJcOr',
        'mBFEv',
        '#paginatio',
        'Found\x20',
        'xfIiX',
        'Yesterday\x20',
        'GpClQ',
        'page-numbe',
        'tyvVd',
        'v\x20class=\x22s',
        'ring',
        'AYLAU',
        'chat-label',
        '\x22\x20target=\x22',
        'kTgXI',
        '\x20\x20\x20\x20\x20\x20\x20</d',
        'tjgxY',
        'rLycO',
        'DxDgI',
        '<div\x20class',
        'chat-type-',
        '/div>',
        'insertBefo',
        'xgQpB',
        '\x20<div\x20clas',
        'ANuVy',
        'tion\x20succe',
        'oading\x20pag',
        'me=',
        'gination-l',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'postSearch',
        'oading\x22>\x0a\x20',
        'a\x20fa-chevr',
        'ddscx',
        'childNodes',
        'alled',
        'custom',
        'IoGHr',
        'ent',
        'getUsersMe',
        'mLWzE',
        'KCRtG',
        'error',
        'BqCoK',
        'arch.html',
        'n\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'loginImpli',
        'This\x20Week',
        'own',
        'rLwwk',
        'l\x22></div>\x0a',
        'daCVU',
        'sortOrder',
        'vPpgG',
        '<div>Loadi',
        'ps.mypurec',
        'fDfXY',
        'YbdCv',
        'nGzYf',
        '=\x22user-tit',
        'ASC',
        'image',
        'ELEMENT_NO',
        'lastWeek',
        '=\x22avatar\x22>',
        'container\x22',
        'dFteA',
        '>1</button',
        'entities',
        'ation-btn\x20',
        'und.\x20Try\x20s',
        'saIjS',
        '\x20-\x20loading',
        'div\x20class=',
        '\x20(Showing\x20',
        'p\x20details:',
        'jQyXm',
        'fetch\x20grou',
        'Newest\x20fir',
        'overlay-co',
        'addClass',
        'min',
        'div',
        'show',
        '\x20\x20\x20\x20\x20</spa',
        'ZVOum',
        'createElem',
        '#loading',
        '\x20details\x20f',
        'fa\x20fa-sear',
        'startsWith',
        'PCUDS',
        'target',
        'QiYsA',
        'JMzBg',
        'yoYYE',
        'get\x20user\x20i',
        'tton>',
        'chat',
        'IiIgo',
        'uMsAQ',
        'input',
        '.search-ov',
        '...\x0a\x20\x20\x20\x20\x20\x20',
        'find',
        'me\x22>',
        'AGpJF',
        'dHAra',
        'disabled',
        'val',
        'chatType',
        '\x20\x20\x20\x20\x20\x20</di',
        'render',
        'fGPUM',
        'searching',
        'preset',
        'adhoc-',
        'TctKK',
        'instance',
        'newest',
        'a-spin\x22></',
        'h-overlay\x22',
        'getChatsRo',
        'xeyjf',
        'sortBy',
        'CeHcP',
        'DahDd',
        'qCraI',
        'ong.\x0a\x20\x20\x20\x20\x20',
        'CKCVT',
        'dxPhi',
        'CGplF',
        'for:\x20\x27',
        'r\x22\x20onclick',
    ];
    _0x1131 = function () {
        return _0x2fb67a;
    };
    return _0x1131();
}
function getDateRange() {
    const _0x41fbac = _0x814731,
        _0x2dcef5 = {
            XgsSI: _0x41fbac(0x37b),
            CeHcP: function (_0x317d84, _0x4bf115) {
                return _0x317d84 + _0x4bf115;
            },
            JmRvf: _0x41fbac(0x11c),
            NbolC: function (_0x5a6b31, _0x43e688) {
                return _0x5a6b31 - _0x43e688;
            },
            YSbFV: _0x41fbac(0x174),
            IihoK: function (_0x402b10, _0x1f8d1b) {
                return _0x402b10 - _0x1f8d1b;
            },
            HlMEa: function (_0x1440a2, _0x9c7782) {
                return _0x1440a2 + _0x9c7782;
            },
            OcyGn: _0x41fbac(0x315),
            bhadZ: function (_0x1738c0, _0x16fb31) {
                return _0x1738c0 - _0x16fb31;
            },
            SsEvJ: _0x41fbac(0x3a4),
            yDKMU: function (_0x5b581b, _0xcaba75) {
                return _0x5b581b + _0xcaba75;
            },
            NXSlD: _0x41fbac(0x2fa),
            kZhMp: function (_0x1b34f4, _0x30ff02) {
                return _0x1b34f4 && _0x30ff02;
            },
        },
        _0x12c63a = new Date();
    let _0x4a7117, _0x15de0b;
    switch (currentDateFilter) {
        case _0x2dcef5[_0x41fbac(0x12e)]:
            (_0x4a7117 = new Date(
                _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                _0x12c63a[_0x41fbac(0x266)](),
                _0x12c63a[_0x41fbac(0x249)]()
            )),
                (_0x15de0b = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x12c63a[_0x41fbac(0x266)](),
                    _0x2dcef5[_0x41fbac(0x353)](_0x12c63a[_0x41fbac(0x249)](), 0x530 + -0x1f63 + 0x1a34)
                ));
            break;
        case _0x2dcef5[_0x41fbac(0x128)]:
            (_0x4a7117 = new Date(
                _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                _0x12c63a[_0x41fbac(0x266)](),
                _0x2dcef5[_0x41fbac(0x2cb)](_0x12c63a[_0x41fbac(0x249)](), 0x1e56 + -0x38a * 0x6 + -0x919)
            )),
                (_0x15de0b = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x12c63a[_0x41fbac(0x266)](),
                    _0x12c63a[_0x41fbac(0x249)]()
                ));
            break;
        case _0x2dcef5[_0x41fbac(0x1df)]:
            const _0x4aa1bf = _0x12c63a[_0x41fbac(0x219)](),
                _0x526603 = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x12c63a[_0x41fbac(0x266)](),
                    _0x2dcef5[_0x41fbac(0x215)](_0x12c63a[_0x41fbac(0x249)](), _0x4aa1bf)
                );
            (_0x4a7117 = _0x526603),
                (_0x15de0b = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x12c63a[_0x41fbac(0x266)](),
                    _0x2dcef5[_0x41fbac(0x378)](_0x12c63a[_0x41fbac(0x249)](), 0x12 * -0xd1 + 0x22be + -0x140b)
                ));
            break;
        case _0x2dcef5[_0x41fbac(0x147)]:
            const _0x119b11 = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x12c63a[_0x41fbac(0x266)](),
                    _0x2dcef5[_0x41fbac(0x2cb)](
                        _0x2dcef5[_0x41fbac(0x142)](_0x12c63a[_0x41fbac(0x249)](), _0x12c63a[_0x41fbac(0x219)]()),
                        -0x1c * 0x9e + -0x1e72 + -0x98d * -0x5
                    )
                ),
                _0x5e9487 = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x12c63a[_0x41fbac(0x266)](),
                    _0x2dcef5[_0x41fbac(0x2cb)](_0x12c63a[_0x41fbac(0x249)](), _0x12c63a[_0x41fbac(0x219)]())
                );
            (_0x4a7117 = _0x119b11), (_0x15de0b = _0x5e9487);
            break;
        case _0x2dcef5[_0x41fbac(0x112)]:
            (_0x4a7117 = new Date(
                _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                _0x12c63a[_0x41fbac(0x266)](),
                -0x25f9 + -0x4e4 + -0x6 * -0x725
            )),
                (_0x15de0b = new Date(
                    _0x12c63a[_0x41fbac(0x1d4) + 'r'](),
                    _0x2dcef5[_0x41fbac(0x3bf)](_0x12c63a[_0x41fbac(0x266)](), -0x15a7 + 0x12d3 + 0x2d5),
                    -0x1560 + -0x5 * -0x79d + 0x858 * -0x2
                ));
            break;
        case _0x2dcef5[_0x41fbac(0x28d)]:
            _0x2dcef5[_0x41fbac(0x2b5)](customStartDate, customEndDate) &&
                ((_0x4a7117 = new Date(customStartDate)),
                (_0x15de0b = new Date(customEndDate)),
                _0x15de0b[_0x41fbac(0x1ed)](
                    -0x1ddb * 0x1 + -0x1f61 + 0x1 * 0x3d53,
                    0x2383 + -0x6 * 0x59f + 0x1 * -0x18e,
                    0x1ae8 + -0x21fd + 0x48 * 0x1a,
                    -0x558 * 0x6 + -0x16e2 + 0x3ad9
                ));
            break;
        default:
            return { startValue: null, endValue: null };
    }
    if (_0x2dcef5[_0x41fbac(0x2b5)](_0x4a7117, _0x15de0b))
        return {
            startValue: _0x4a7117[_0x41fbac(0x190)]()[_0x41fbac(0x1c6)](),
            endValue: _0x15de0b[_0x41fbac(0x190)]()[_0x41fbac(0x1c6)](),
        };
    return { startValue: null, endValue: null };
}
function _0x1c2e(_0x2eb2d1, _0x33e8a5) {
    const _0x2b38b4 = _0x1131();
    return (
        (_0x1c2e = function (_0x3e441b, _0x59f6ef) {
            _0x3e441b = _0x3e441b - (0x922 + -0x15dd + 0xdb9);
            let _0x1f953c = _0x2b38b4[_0x3e441b];
            return _0x1f953c;
        }),
        _0x1c2e(_0x2eb2d1, _0x33e8a5)
    );
}
function updateDateFilterSummary() {
    const _0x28dc08 = _0x814731,
        _0x2aa353 = {
            CKCVT: _0x28dc08(0x158),
            dxPhi: _0x28dc08(0x369) + _0x28dc08(0x3be),
            tgSpB: _0x28dc08(0x37b),
            tyvVd: _0x28dc08(0x399),
            PmgWQ: _0x28dc08(0x11c),
            zduIA: _0x28dc08(0x2da) + _0x28dc08(0x212),
            XcexP: _0x28dc08(0x174),
            ibuAl: _0x28dc08(0x27f),
            vcwgs: _0x28dc08(0x315),
            LnonI: _0x28dc08(0x2c4),
            jYbSS: _0x28dc08(0x3a4),
            uMsAQ: _0x28dc08(0x1b7),
            kuEqA: _0x28dc08(0x2fa),
            riZQH: function (_0x10a231, _0x97a4fd) {
                return _0x10a231 && _0x97a4fd;
            },
            sxVvv: _0x28dc08(0x10a) + _0x28dc08(0x290),
            nTJvE: function (_0x2899ac, _0x1ab66f) {
                return _0x2899ac(_0x1ab66f);
            },
            ONSOn: _0x28dc08(0x287) + _0x28dc08(0x1d1),
            QdbAi: function (_0x5a199e, _0x1a8dc4) {
                return _0x5a199e(_0x1a8dc4);
            },
            syYEp: _0x28dc08(0x3bb) + 'us',
        };
    let _0x2cdeb7 = '';
    switch (currentDateFilter) {
        case _0x2aa353[_0x28dc08(0x357)]:
            _0x2cdeb7 = _0x2aa353[_0x28dc08(0x358)];
            break;
        case _0x2aa353[_0x28dc08(0x1c4)]:
            _0x2cdeb7 = _0x2aa353[_0x28dc08(0x2dd)];
            break;
        case _0x2aa353[_0x28dc08(0x1b2)]:
            _0x2cdeb7 = _0x2aa353[_0x28dc08(0x2cf)];
            break;
        case _0x2aa353[_0x28dc08(0x384)]:
            _0x2cdeb7 = _0x2aa353[_0x28dc08(0x133)];
            break;
        case _0x2aa353[_0x28dc08(0x16b)]:
            _0x2cdeb7 = _0x2aa353[_0x28dc08(0x28c)];
            break;
        case _0x2aa353[_0x28dc08(0x16e)]:
            _0x2cdeb7 = _0x2aa353[_0x28dc08(0x33a)];
            break;
        case _0x2aa353[_0x28dc08(0x1c1)]:
            if (_0x2aa353[_0x28dc08(0x1c3)](customStartDate, customEndDate)) {
                const _0x59144a = new Date(customStartDate)[_0x28dc08(0x23b) + _0x28dc08(0x23d)](),
                    _0x5e2431 = new Date(customEndDate)[_0x28dc08(0x23b) + _0x28dc08(0x23d)]();
                _0x2cdeb7 = _0x59144a + _0x28dc08(0x183) + _0x5e2431;
            } else _0x2cdeb7 = _0x2aa353[_0x28dc08(0x171)];
            break;
    }
    _0x2aa353[_0x28dc08(0x29f)]($, _0x2aa353[_0x28dc08(0x3a6)])[_0x28dc08(0x135)](_0x2cdeb7),
        _0x2aa353[_0x28dc08(0x221)]($, _0x2aa353[_0x28dc08(0x21c)])[_0x28dc08(0x135)](_0x2cdeb7);
}
function getDateFilterDisplayText() {
    const _0x50e7ef = _0x814731,
        _0x354e9e = {
            xeyjf: _0x50e7ef(0x37b),
            GlKil: _0x50e7ef(0x2a9),
            FzIAg: _0x50e7ef(0x11c),
            ZTBNm: _0x50e7ef(0x21b),
            zhLpz: _0x50e7ef(0x174),
            scebw: _0x50e7ef(0x305),
            LmiBS: _0x50e7ef(0x315),
            aRMXp: _0x50e7ef(0x22a),
            SbTYx: _0x50e7ef(0x3a4),
            daCVU: _0x50e7ef(0x21e),
            AAGaL: _0x50e7ef(0x2fa),
            CKorC: function (_0x180d22, _0x4b35e4) {
                return _0x180d22 && _0x4b35e4;
            },
            fykCh: _0x50e7ef(0x159) + 'ge',
        };
    switch (currentDateFilter) {
        case _0x354e9e[_0x50e7ef(0x351)]:
            return _0x354e9e[_0x50e7ef(0x1ae)];
        case _0x354e9e[_0x50e7ef(0x16d)]:
            return _0x354e9e[_0x50e7ef(0x114)];
        case _0x354e9e[_0x50e7ef(0x20d)]:
            return _0x354e9e[_0x50e7ef(0x2aa)];
        case _0x354e9e[_0x50e7ef(0x198)]:
            return _0x354e9e[_0x50e7ef(0x1ee)];
        case _0x354e9e[_0x50e7ef(0x293)]:
            return _0x354e9e[_0x50e7ef(0x309)];
        case _0x354e9e[_0x50e7ef(0x124)]:
            if (_0x354e9e[_0x50e7ef(0x2a3)](customStartDate, customEndDate)) {
                const _0x284961 = new Date(customStartDate)[_0x50e7ef(0x23b) + _0x50e7ef(0x23d)](),
                    _0x45a69d = new Date(customEndDate)[_0x50e7ef(0x23b) + _0x50e7ef(0x23d)]();
                return _0x284961 + _0x50e7ef(0x2b3) + _0x45a69d;
            }
            return _0x354e9e[_0x50e7ef(0x187)];
        default:
            return '';
    }
}
