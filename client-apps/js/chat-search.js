const _0x3ca23d = _0x1455;
(function (_0x132230, _0x8db0bd) {
    const _0x21096c = _0x1455,
        _0x314dbc = _0x132230();
    while (!![]) {
        try {
            const _0x7ea337 =
                (-parseInt(_0x21096c(0xca)) / 0x1) * (parseInt(_0x21096c(0x14e)) / 0x2) +
                parseInt(_0x21096c(0x140)) / 0x3 +
                parseInt(_0x21096c(0x153)) / 0x4 +
                parseInt(_0x21096c(0x138)) / 0x5 +
                parseInt(_0x21096c(0x15c)) / 0x6 +
                (parseInt(_0x21096c(0x155)) / 0x7) * (-parseInt(_0x21096c(0xfc)) / 0x8) +
                parseInt(_0x21096c(0x15a)) / 0x9;
            if (_0x7ea337 === _0x8db0bd) break;
            else _0x314dbc['push'](_0x314dbc['shift']());
        } catch (_0x565da8) {
            _0x314dbc['push'](_0x314dbc['shift']());
        }
    }
})(_0x4e09, 0x65d06);
const clientId = '6c467620-9486-4218-bf90-020b9e2c596b',
    redirectUri = window[_0x3ca23d(0x108)][_0x3ca23d(0x14a)] + _0x3ca23d(0x11f),
    platformClient = window[_0x3ca23d(0xf1)] || require(_0x3ca23d(0xf1)),
    client = platformClient[_0x3ca23d(0x159)][_0x3ca23d(0xe2)],
    searchApi = new platformClient[_0x3ca23d(0x105)](),
    groupsApi = new platformClient[_0x3ca23d(0xf7)](),
    usersApi = new platformClient[_0x3ca23d(0xf8)](),
    chatApi = new platformClient['ChatApi'](),
    md = window[_0x3ca23d(0x160)]();
let userJid = '',
    searchResults = [],
    lastSearchTerm = '',
    currentPage = 0x1,
    totalResults = 0x0,
    totalPages = 0x0,
    isLoading = ![],
    currentDateFilter = _0x3ca23d(0xf6),
    customStartDate = null,
    customEndDate = null;
location['protocol'] !== _0x3ca23d(0x157) &&
    location['replace'](
        'https:' + location[_0x3ca23d(0xb8)]['substring'](location[_0x3ca23d(0x12c)][_0x3ca23d(0x146)])
    );
client[_0x3ca23d(0x125)](clientId, redirectUri, { state: '' })
    [_0x3ca23d(0xc2)](() => {
        const _0x1ed2de = _0x3ca23d;
        console['log'](_0x1ed2de(0x103)), bootstrap();
    })
    [_0x3ca23d(0x120)]((_0x145d0f) => {
        const _0x3c70cd = _0x3ca23d;
        console[_0x3c70cd(0xbd)]('Authentication\x20failed:', _0x145d0f), bootstrapError();
    });
function bootstrapError() {
    const _0x1f582f = _0x3ca23d;
    $(_0x1f582f(0xdb))[_0x1f582f(0x152)](_0x1f582f(0x131)),
        $(_0x1f582f(0x14f))['removeClass']('hidden')[_0x1f582f(0x148)]();
}
function bootstrap() {
    const _0x434566 = _0x3ca23d;
    console[_0x434566(0x13c)](_0x434566(0x113)),
        $('#search-input')['on'](
            _0x434566(0xd9),
            debounce((_0xec4cdb) => {
                const _0x2a0aef = _0x434566;
                console[_0x2a0aef(0x13c)]('Search\x20input\x20triggered:', _0xec4cdb['target'][_0x2a0aef(0x10b)]),
                    searchChats(_0xec4cdb[_0x2a0aef(0x110)][_0x2a0aef(0x10b)]);
            }, 0x12c)
        ),
        $(document)['on'](_0x434566(0x12d), '.date-preset', handleDatePresetClick),
        $(document)['on'](_0x434566(0xd2), '#start-date,\x20#end-date', handleCustomDateChange),
        console[_0x434566(0x13c)]('About\x20to\x20call\x20getUsersMe'),
        usersApi[_0x434566(0xf5)]()
            [_0x434566(0xc2)]((_0x35a229) => {
                const _0x57357b = _0x434566;
                console['log']('User\x20data\x20received:', _0x35a229);
                if (_0x35a229['chat']) userJid = _0x35a229['chat'][_0x57357b(0x147)];
                console[_0x57357b(0x13c)](_0x57357b(0x11c), userJid),
                    $(_0x57357b(0xdb))[_0x57357b(0x152)](_0x57357b(0x131)),
                    $(_0x57357b(0x142))[_0x57357b(0x13b)](_0x57357b(0x131)),
                    $(_0x57357b(0x14f))['addClass'](_0x57357b(0x131))['hide'](),
                    console[_0x57357b(0x13c)](_0x57357b(0x11b));
            })
            [_0x434566(0x120)]((_0x6b9681) => {
                const _0x5c9d60 = _0x434566;
                console[_0x5c9d60(0xbd)]('Failed\x20to\x20get\x20user\x20info:', _0x6b9681),
                    $(_0x5c9d60(0xdb))[_0x5c9d60(0x152)](_0x5c9d60(0x131)),
                    $(_0x5c9d60(0x14f))[_0x5c9d60(0x13b)](_0x5c9d60(0x131))[_0x5c9d60(0x148)]();
            });
}
function debounce(_0x12d647, _0x4ccfb4) {
    let _0x4bb87b;
    return function (..._0x31423c) {
        const _0x215db9 = _0x1455;
        clearTimeout(_0x4bb87b),
            (_0x4bb87b = setTimeout(() => _0x12d647[_0x215db9(0x109)](this, _0x31423c), _0x4ccfb4));
    };
}
function searchChats(_0x3fb52c, _0x24d722 = 0x1) {
    const _0x197ce0 = _0x3ca23d;
    console[_0x197ce0(0x13c)](_0x197ce0(0x143), _0x3fb52c, _0x197ce0(0x13e), _0x24d722),
        (lastSearchTerm = _0x3fb52c),
        (currentPage = _0x24d722);
    if (!_0x3fb52c || _0x3fb52c[_0x197ce0(0x146)] < 0x4) {
        console[_0x197ce0(0x13c)](_0x197ce0(0x15b)),
            $(_0x197ce0(0xb9))[_0x197ce0(0x152)]('hidden'),
            $(_0x197ce0(0x134))['addClass'](_0x197ce0(0x131)),
            $(_0x197ce0(0xdf))[_0x197ce0(0x152)](_0x197ce0(0x131)),
            $(_0x197ce0(0x128))[_0x197ce0(0x152)]('hidden'),
            (searchResults = []),
            (totalResults = 0x0),
            (totalPages = 0x0);
        return;
    }
    if (isLoading) {
        console[_0x197ce0(0x13c)](_0x197ce0(0xd6));
        return;
    }
    isLoading = !![];
    let _0x6dd654 = _0x197ce0(0x118) + _0x3fb52c + '\x27';
    if (currentDateFilter !== _0x197ce0(0xf6)) {
        const _0x354ee4 = getDateRange();
        _0x354ee4[_0x197ce0(0xe4)] &&
            _0x354ee4[_0x197ce0(0xe7)] &&
            (_0x6dd654 += '\x20(' + getDateFilterDisplayText() + ')');
    }
    _0x24d722 > 0x1 && (_0x6dd654 += _0x197ce0(0x14d) + _0x24d722 + ')');
    (_0x6dd654 += _0x197ce0(0xbc)), $('#search-meta')[_0x197ce0(0xce)](_0x6dd654)['removeClass']('hidden');
    let _0x1bc9b9 = [{ fields: [_0x197ce0(0xc8)], value: _0x3fb52c }];
    if (currentDateFilter !== _0x197ce0(0xf6)) {
        const _0x11e24a = getDateRange();
        _0x11e24a[_0x197ce0(0xe4)] &&
            _0x11e24a['endValue'] &&
            _0x1bc9b9[_0x197ce0(0xc4)]({
                type: _0x197ce0(0x123),
                fields: ['created'],
                startValue: _0x11e24a[_0x197ce0(0xe4)],
                endValue: _0x11e24a[_0x197ce0(0xe7)],
            });
    }
    let _0x36efeb = {
        pageSize: 0x32,
        pageNumber: _0x24d722,
        sortBy: _0x197ce0(0x130),
        sortOrder: 'DESC',
        expand: ['from', 'to'],
        types: [_0x197ce0(0xf0)],
        query: _0x1bc9b9,
    };
    searchApi[_0x197ce0(0x12e)](_0x36efeb, { profile: ![] })
        [_0x197ce0(0xc2)](getSearchResults)
        [_0x197ce0(0x120)](() => {
            const _0x3e3a10 = _0x197ce0;
            $('#search-results')
                [_0x3e3a10(0xd4)](
                    '<div\x20style=\x27color:#e74c3c\x27>Search\x20failed.\x20Please\x20try\x20again.</div>'
                )
                [_0x3e3a10(0x13b)](_0x3e3a10(0x131)),
                $('#search-meta')['addClass'](_0x3e3a10(0x131)),
                $(_0x3e3a10(0xdf))[_0x3e3a10(0x152)](_0x3e3a10(0x131)),
                $(_0x3e3a10(0x128))[_0x3e3a10(0x152)](_0x3e3a10(0x131)),
                (isLoading = ![]);
        });
}
function getSearchResults(_0x2d22ec) {
    const _0x4c6b03 = _0x3ca23d;
    (isLoading = ![]),
        (totalResults = _0x2d22ec[_0x4c6b03(0x141)] || 0x0),
        (totalPages = _0x2d22ec[_0x4c6b03(0x12a)] || 0x0),
        (searchResults = []);
    if (_0x2d22ec[_0x4c6b03(0x15d)](_0x4c6b03(0xb4)) && _0x2d22ec['results']['length'] > 0x0) {
        let _0x2eb31e = [];
        _0x2d22ec[_0x4c6b03(0xb4)][_0x4c6b03(0x135)]((_0x1449de) => {
            const _0x4797c9 = _0x4c6b03;
            let _0x24b87c = _0x1449de[_0x4797c9(0xd7)][_0x4797c9(0x158)] || _0x4797c9(0x10e),
                _0x1e5db7 =
                    _0x1449de[_0x4797c9(0xd7)]['images'] &&
                    _0x1449de['from']['images'][0x0] &&
                    _0x1449de[_0x4797c9(0xd7)][_0x4797c9(0xc0)][0x0][_0x4797c9(0xfb)]
                        ? _0x1449de[_0x4797c9(0xd7)][_0x4797c9(0xc0)][0x0][_0x4797c9(0xfb)]
                        : _0x4797c9(0x156) + encodeURIComponent(_0x24b87c),
                _0x377200 = _0x1449de[_0x4797c9(0xd7)][_0x4797c9(0x13a)]
                    ? _0x1449de[_0x4797c9(0xd7)]['chat'][_0x4797c9(0x147)]
                    : _0x1449de[_0x4797c9(0xd7)][_0x4797c9(0x14c)],
                _0x524427 = _0x1449de['to'][_0x4797c9(0x13a)]
                    ? _0x1449de['to'][_0x4797c9(0x13a)][_0x4797c9(0x147)]
                    : _0x1449de['to'][_0x4797c9(0x14c)],
                _0x5b9d20 = _0x524427['endsWith'](_0x4797c9(0x15f)) ? _0x4797c9(0xcf) : 'Direct',
                _0x3803a4 = _0x4797c9(0xcf),
                _0x31b569 = _0x524427;
            _0x524427[_0x4797c9(0xdd)](_0x4797c9(0x15f)) &&
                ((_0x524427 = _0x524427['replace'](/@conference$/, _0x4797c9(0x13f))),
                _0x2eb31e[_0x4797c9(0xc4)]({
                    jabberId: _0x31b569,
                    fullJabberId: _0x524427,
                    index: searchResults['length'],
                    isAdhoc: _0x31b569[_0x4797c9(0x12f)]('adhoc-'),
                }));
            let _0x36a844 = {
                fromJid: _0x377200,
                targetJid: _0x524427,
                body: _0x1449de['body'],
                created: _0x1449de[_0x4797c9(0x130)],
                userName: _0x24b87c,
                image: _0x1e5db7,
                chatType: _0x5b9d20,
                groupName: _0x3803a4,
                isPersonalGroup: _0x31b569[_0x4797c9(0x12f)]('adhoc-') && _0x5b9d20 === 'Group',
            };
            searchResults[_0x4797c9(0xc4)](_0x36a844);
        }),
            _0x2eb31e['length'] > 0x0
                ? fetchGroupDetails(_0x2eb31e)[_0x4c6b03(0xc2)](() => {
                      const _0x283f1e = _0x4c6b03;
                      searchResults[_0x283f1e(0xc6)](
                          (_0x46ff7e, _0x771820) =>
                              new Date(_0x771820[_0x283f1e(0x130)]) - new Date(_0x46ff7e[_0x283f1e(0x130)])
                      ),
                          renderSearchResults();
                  })
                : (searchResults['sort'](
                      (_0x4a6b2b, _0x5a521d) =>
                          new Date(_0x5a521d[_0x4c6b03(0x130)]) - new Date(_0x4a6b2b[_0x4c6b03(0x130)])
                  ),
                  renderSearchResults());
    } else renderSearchResults();
}
async function fetchGroupDetails(_0x3f529c) {
    const _0xbc955d = _0x3ca23d;
    try {
        const _0x22b450 = _0x3f529c[_0xbc955d(0x137)]((_0x43dc48) => !_0x43dc48[_0xbc955d(0xf4)]),
            _0x59bb4f = _0x3f529c[_0xbc955d(0x137)]((_0x3f2bde) => _0x3f2bde['isAdhoc']);
        if (_0x22b450[_0xbc955d(0x146)] > 0x0) {
            const _0x1f8cce = [...new Set(_0x22b450[_0xbc955d(0x161)]((_0x5810b5) => _0x5810b5[_0xbc955d(0x147)]))],
                _0x5349b9 = _0x1f8cce[_0xbc955d(0x161)]((_0x472f3b) => _0x472f3b[_0xbc955d(0x10d)]('@')[0x0]),
                _0x4f73dc = {},
                _0x1b7f36 = { jabberId: _0x5349b9, pageSize: 0x64 },
                _0x1db971 = await groupsApi[_0xbc955d(0x150)](_0x1b7f36);
            _0x1db971['entities'] &&
                _0x1db971[_0xbc955d(0x149)][_0xbc955d(0x146)] > 0x0 &&
                _0x1db971['entities'][_0xbc955d(0x135)]((_0x5abf0e) => {
                    const _0x140cb7 = _0xbc955d;
                    if (
                        _0x5abf0e['chat'] &&
                        _0x5abf0e[_0x140cb7(0x13a)][_0x140cb7(0x147)] &&
                        _0x5abf0e[_0x140cb7(0x158)]
                    ) {
                        const _0x495275 = _0x5abf0e[_0x140cb7(0x13a)][_0x140cb7(0x147)];
                        _0x4f73dc[_0x495275] = _0x5abf0e[_0x140cb7(0x158)];
                        const _0x7db4bd = _0x495275['replace'](/@conference\.genesys\.orgspan\.com$/, _0x140cb7(0x15f));
                        _0x4f73dc[_0x7db4bd] = _0x5abf0e[_0x140cb7(0x158)];
                    }
                }),
                _0x22b450[_0xbc955d(0x135)]((_0x18d61e) => {
                    const _0x3a7230 = _0xbc955d,
                        _0x26e20b = _0x4f73dc[_0x18d61e['jabberId']];
                    _0x26e20b && (searchResults[_0x18d61e[_0x3a7230(0x116)]][_0x3a7230(0xb7)] = _0x26e20b);
                });
        }
        if (_0x59bb4f[_0xbc955d(0x146)] > 0x0) {
            const _0x29d912 = _0x59bb4f[_0xbc955d(0x161)](async (_0x38a874) => {
                const _0x32dc86 = _0xbc955d;
                try {
                    const _0x462b71 = await chatApi[_0x32dc86(0xe1)](_0x38a874[_0x32dc86(0x136)]);
                    _0x462b71 &&
                        _0x462b71['subject'] &&
                        (searchResults[_0x38a874[_0x32dc86(0x116)]]['groupName'] = _0x462b71[_0x32dc86(0xff)]);
                } catch (_0x27c89c) {
                    console[_0x32dc86(0xc5)](_0x32dc86(0xf2) + _0x38a874[_0x32dc86(0x136)] + ':', _0x27c89c);
                }
            });
            await Promise[_0xbc955d(0xda)](_0x29d912);
        }
    } catch (_0x3f6528) {
        console[_0xbc955d(0xc5)](_0xbc955d(0x107), _0x3f6528);
    }
}
function renderSearchResults() {
    const _0x4662bb = _0x3ca23d;
    let _0x38b877 = '',
        _0x16a946 = '',
        _0x4a0cde = '';
    if (searchResults[_0x4662bb(0x146)] > 0x0) {
        const _0x279a12 = (currentPage - 0x1) * 0x32 + 0x1,
            _0x433fde = Math['min'](_0x279a12 + searchResults['length'] - 0x1, totalResults);
        (_0x4a0cde =
            _0x4662bb(0xc1) +
            totalResults +
            _0x4662bb(0xd5) +
            (totalResults > 0x1 ? 's' : '') +
            _0x4662bb(0xe3) +
            lastSearchTerm +
            '\x22'),
            currentDateFilter !== _0x4662bb(0xf6) && (_0x4a0cde += '\x20(' + getDateFilterDisplayText() + ')'),
            (_0x4a0cde += _0x4662bb(0x101) + _0x279a12 + '-' + _0x433fde + ')'),
            (_0x38b877 = _0x4662bb(0x117)),
            searchResults[_0x4662bb(0x135)]((_0x30cf7c) => {
                const _0x57f939 = _0x4662bb;
                let _0x1acd2c =
                        _0x30cf7c[_0x57f939(0x104)] == userJid ? _0x30cf7c['fromJid'] : _0x30cf7c[_0x57f939(0x104)],
                    _0xe0f399 =
                        _0x30cf7c[_0x57f939(0xe6)] === _0x57f939(0xcf)
                            ? 'https://apps.mypurecloud.com/directory/#/chat-room/' + _0x1acd2c
                            : _0x57f939(0x133) + _0x1acd2c,
                    _0x131434 =
                        _0x30cf7c[_0x57f939(0xe6)] === _0x57f939(0xcf)
                            ? _0x30cf7c['groupName']
                            : _0x30cf7c[_0x57f939(0xe6)],
                    _0x39d98e,
                    _0xc51af0;
                _0x30cf7c[_0x57f939(0xe6)] === _0x57f939(0xcf)
                    ? _0x30cf7c[_0x57f939(0xcb)]
                        ? ((_0x39d98e = _0x57f939(0xf9)), (_0xc51af0 = 'fa-lock'), (_0x131434 = '' + _0x131434))
                        : ((_0x39d98e = _0x57f939(0x11a)), (_0xc51af0 = _0x57f939(0x15e)))
                    : ((_0x39d98e = _0x57f939(0x14b)), (_0xc51af0 = _0x57f939(0xeb))),
                    (_0x38b877 +=
                        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22search-result\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22search-result-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' +
                        _0x30cf7c[_0x57f939(0xc3)] +
                        _0x57f939(0x10f) +
                        _0x30cf7c[_0x57f939(0xee)] +
                        _0x57f939(0xd3) +
                        new Date(_0x30cf7c[_0x57f939(0x130)])[_0x57f939(0x10c)]() +
                        _0x57f939(0x162) +
                        _0x39d98e +
                        _0x57f939(0x144) +
                        _0xc51af0 +
                        _0x57f939(0x106) +
                        _0x131434 +
                        _0x57f939(0xed) +
                        _0xe0f399 +
                        _0x57f939(0xfd) +
                        md[_0x57f939(0xd8)](_0x30cf7c[_0x57f939(0xc8)]) +
                        _0x57f939(0xc9));
            }),
            (_0x38b877 += '</div>'),
            totalPages > 0x1 && (_0x16a946 = generatePagination());
    } else
        lastSearchTerm &&
            lastSearchTerm[_0x4662bb(0x146)] >= 0x4 &&
            ((_0x38b877 = _0x4662bb(0x154)),
            (_0x4a0cde = 'No\x20results\x20found\x20for\x20\x22' + lastSearchTerm + '\x22'));
    $(_0x4662bb(0xb9))[_0x4662bb(0xd4)](_0x38b877)[_0x4662bb(0x13b)](_0x4662bb(0x131)),
        _0x4a0cde
            ? $(_0x4662bb(0x134))[_0x4662bb(0xd4)](_0x4a0cde)[_0x4662bb(0x13b)](_0x4662bb(0x131))
            : $(_0x4662bb(0x134))[_0x4662bb(0x152)](_0x4662bb(0x131)),
        _0x16a946
            ? ($(_0x4662bb(0xdf))['html'](_0x16a946)[_0x4662bb(0x13b)](_0x4662bb(0x131)),
              $(_0x4662bb(0x128))[_0x4662bb(0xd4)](_0x16a946)['removeClass']('hidden'))
            : ($('#pagination-top')['addClass'](_0x4662bb(0x131)),
              $(_0x4662bb(0x128))[_0x4662bb(0x152)](_0x4662bb(0x131)));
}
function generatePagination() {
    const _0x40eceb = _0x3ca23d;
    let _0x3bf84c = _0x40eceb(0xbb);
    currentPage > 0x1 &&
        (_0x3bf84c +=
            _0x40eceb(0xe0) +
            (currentPage - 0x1) +
            _0x40eceb(0xb5) +
            (isLoading ? _0x40eceb(0x122) : '') +
            _0x40eceb(0xde));
    let _0x412683 = Math['max'](0x1, currentPage - 0x2),
        _0x47bedf = Math['min'](totalPages, currentPage + 0x2);
    _0x412683 > 0x1 &&
        ((_0x3bf84c +=
            '<button\x20class=\x22pagination-btn\x20page-number\x22\x20onclick=\x22navigateToPage(1)\x22\x20' +
            (isLoading ? _0x40eceb(0x122) : '') +
            _0x40eceb(0xba)),
        _0x412683 > 0x2 && (_0x3bf84c += '<span\x20class=\x22pagination-ellipsis\x22>...</span>'));
    for (let _0x561e5c = _0x412683; _0x561e5c <= _0x47bedf; _0x561e5c++) {
        const _0x21031e = _0x561e5c === currentPage ? _0x40eceb(0xef) : '';
        _0x3bf84c +=
            _0x40eceb(0xea) +
            _0x21031e +
            _0x40eceb(0xd1) +
            _0x561e5c +
            _0x40eceb(0xb5) +
            (isLoading ? 'disabled' : '') +
            '>' +
            _0x561e5c +
            _0x40eceb(0x129);
    }
    return (
        _0x47bedf < totalPages &&
            (_0x47bedf < totalPages - 0x1 && (_0x3bf84c += _0x40eceb(0xe8)),
            (_0x3bf84c +=
                '<button\x20class=\x22pagination-btn\x20page-number\x22\x20onclick=\x22navigateToPage(' +
                totalPages +
                _0x40eceb(0xb5) +
                (isLoading ? _0x40eceb(0x122) : '') +
                '>' +
                totalPages +
                _0x40eceb(0x129))),
        currentPage < totalPages &&
            (_0x3bf84c +=
                _0x40eceb(0xe0) +
                (currentPage + 0x1) +
                _0x40eceb(0xb5) +
                (isLoading ? _0x40eceb(0x122) : '') +
                _0x40eceb(0xb6)),
        (_0x3bf84c += _0x40eceb(0x11e)),
        _0x3bf84c
    );
}
function navigateToPage(_0x499782) {
    if (isLoading || _0x499782 === currentPage) return;
    showPaginationLoading(_0x499782), searchChats(lastSearchTerm, _0x499782);
}
function showPaginationLoading(_0x3602dc) {
    const _0xf791a6 = _0x3ca23d,
        _0xc2d13b =
            '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pagination-loading\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-spinner\x20fa-spin\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Loading\x20page\x20' +
            _0x3602dc +
            _0xf791a6(0x12b);
    $(_0xf791a6(0xdf))[_0xf791a6(0xd4)](_0xc2d13b), $(_0xf791a6(0x128))[_0xf791a6(0xd4)](_0xc2d13b);
}
function _0x1455(_0x340ea3, _0x1df080) {
    const _0x4e096c = _0x4e09();
    return (
        (_0x1455 = function (_0x145572, _0x4f4af0) {
            _0x145572 = _0x145572 - 0xb4;
            let _0x3d1976 = _0x4e096c[_0x145572];
            return _0x3d1976;
        }),
        _0x1455(_0x340ea3, _0x1df080)
    );
}
function handleDatePresetClick(_0x22b3a1) {
    const _0x16fb29 = _0x3ca23d,
        _0x2558ff = $(_0x22b3a1['target'])[_0x16fb29(0xec)](_0x16fb29(0xdc));
    $(_0x16fb29(0x102))['removeClass'](_0x16fb29(0xef)),
        $(_0x22b3a1[_0x16fb29(0x110)])[_0x16fb29(0x152)]('active'),
        _0x2558ff === 'custom'
            ? $(_0x16fb29(0xbe))['removeClass'](_0x16fb29(0x131))
            : ($(_0x16fb29(0xbe))['addClass'](_0x16fb29(0x131)),
              (currentDateFilter = _0x2558ff),
              updateDateFilterSummary(),
              lastSearchTerm && lastSearchTerm[_0x16fb29(0x146)] >= 0x4 && searchChats(lastSearchTerm, 0x1));
}
function _0x4e09() {
    const _0x3f23d3 = [
        'protocol',
        'click',
        'postSearch',
        'startsWith',
        'created',
        'hidden',
        '#date-filter-summary',
        'https://apps.mypurecloud.com/directory/#/chat-room/',
        '#search-meta',
        'forEach',
        'fullJabberId',
        'filter',
        '3050765gwvotO',
        'Custom\x20Range',
        'chat',
        'removeClass',
        'log',
        'getMonth',
        'page:',
        '@conference.genesys.orgspan.com',
        '1479966PsVppN',
        'total',
        '#main-app',
        'searchChats\x20called\x20with\x20term:',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20',
        'getDay',
        'length',
        'jabberId',
        'show',
        'entities',
        'origin',
        'chat-type-direct',
        'jid',
        '\x20(Page\x20',
        '187202dsNbza',
        '#auth-failure',
        'getGroups',
        'Select\x20start\x20and\x20end\x20dates',
        'addClass',
        '1960088FCUxWY',
        '\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22no-results\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22no-results-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>No\x20results\x20found.\x20Try\x20searching\x20with\x20different\x20keywords.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:\x200.5rem;\x20font-size:\x200.9rem;\x20color:\x20#94a3b8;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Your\x20search\x20must\x20be\x20at\x20least\x204\x20characters\x20long.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>',
        '917LUptJW',
        'https://ui-avatars.com/api/?name=',
        'https:',
        'name',
        'ApiClient',
        '1462383HSXhxc',
        'Term\x20too\x20short\x20or\x20empty,\x20hiding\x20results',
        '716886tCCpSS',
        'hasOwnProperty',
        'fa-users',
        '@conference',
        'markdownit',
        'map',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-labels\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chat-type-badge\x20',
        'results',
        ')\x22\x20',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Next\x20<i\x20class=\x22fa\x20fa-chevron-right\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>',
        'groupName',
        'href',
        '#search-results',
        '>1</button>',
        '<div\x20class=\x22pagination-container\x22>',
        '...',
        'error',
        '#custom-date-inputs',
        'Last\x20Week',
        'images',
        'Found\x20',
        'then',
        'image',
        'push',
        'warn',
        'sort',
        'getDate',
        'body',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>',
        '8UoNafK',
        'isPersonalGroup',
        'toString',
        'today',
        'text',
        'Group',
        'Showing\x20conversations\x20from\x20today',
        '\x22\x20onclick=\x22navigateToPage(',
        'change',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-date\x22>',
        'html',
        '\x20result',
        'Already\x20loading,\x20skipping\x20search',
        'from',
        'render',
        'input',
        'all',
        '#loading',
        'preset',
        'endsWith',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-chevron-left\x22></i>\x20Previous\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>',
        '#pagination-top',
        '<button\x20class=\x22pagination-btn\x22\x20onclick=\x22navigateToPage(',
        'getChatsRoom',
        'instance',
        '\x20for\x20\x22',
        'startValue',
        'getFullYear',
        'chatType',
        'endValue',
        '<span\x20class=\x22pagination-ellipsis\x22>...</span>',
        '#start-date',
        '<button\x20class=\x22pagination-btn\x20page-number\x20',
        'fa-user',
        'data',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22',
        'userName',
        'active',
        'messages',
        'platformClient',
        'Failed\x20to\x20fetch\x20personal\x20group\x20details\x20for\x20',
        'yesterday',
        'isAdhoc',
        'getUsersMe',
        'anytime',
        'GroupsApi',
        'UsersApi',
        'chat-type-personal-group',
        'Showing\x20conversations\x20from\x20last\x20week',
        'imageUri',
        '43336YurpFz',
        '\x22\x20target=\x22_blank\x22\x20class=\x22open-chat-btn\x22\x20title=\x22Open\x20chat\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-external-link\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Open\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>',
        'thisMonth',
        'subject',
        'toLocaleDateString',
        '\x20(Showing\x20',
        '.date-preset',
        'Authentication\x20successful',
        'targetJid',
        'SearchApi',
        '\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'Failed\x20to\x20fetch\x20group\x20details:',
        'location',
        'apply',
        'setHours',
        'value',
        'toLocaleString',
        'split',
        'Person',
        '\x22\x20alt=\x22Avatar\x22\x20class=\x22avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-name\x22>',
        'target',
        'This\x20Week',
        'Today',
        'Bootstrap\x20function\x20called',
        '\x20-\x20',
        'lastWeek',
        'index',
        '<div\x20class=\x22results-container\x22>',
        'Searching\x20for:\x20\x27',
        'getTime',
        'chat-type-group',
        'UI\x20updated\x20-\x20loading\x20hidden,\x20main-app\x20shown',
        'User\x20JID\x20set\x20to:',
        'thisWeek',
        '</div>',
        '/client-apps/chat-search.html',
        'catch',
        'val',
        'disabled',
        'DATE_RANGE',
        'custom',
        'loginImplicitGrant',
        '#end-date',
        'Yesterday',
        '#pagination',
        '</button>',
        'pageCount',
        '...\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    ];
    _0x4e09 = function () {
        return _0x3f23d3;
    };
    return _0x4e09();
}
function handleCustomDateChange() {
    const _0x10cb8 = _0x3ca23d,
        _0x3db43d = $(_0x10cb8(0xe9))[_0x10cb8(0x121)](),
        _0x3fc515 = $(_0x10cb8(0x126))['val']();
    _0x3db43d &&
        _0x3fc515 &&
        ((customStartDate = _0x3db43d),
        (customEndDate = _0x3fc515),
        (currentDateFilter = _0x10cb8(0x124)),
        updateDateFilterSummary(),
        lastSearchTerm && lastSearchTerm[_0x10cb8(0x146)] >= 0x4 && searchChats(lastSearchTerm, 0x1));
}
function getDateRange() {
    const _0x482d93 = _0x3ca23d,
        _0xe63cc7 = new Date();
    let _0x4bbb58, _0x55101f;
    switch (currentDateFilter) {
        case _0x482d93(0xcd):
            (_0x4bbb58 = new Date(
                _0xe63cc7['getFullYear'](),
                _0xe63cc7[_0x482d93(0x13d)](),
                _0xe63cc7[_0x482d93(0xc7)]()
            )),
                (_0x55101f = new Date(
                    _0xe63cc7[_0x482d93(0xe5)](),
                    _0xe63cc7['getMonth'](),
                    _0xe63cc7[_0x482d93(0xc7)]() + 0x1
                ));
            break;
        case _0x482d93(0xf3):
            (_0x4bbb58 = new Date(
                _0xe63cc7[_0x482d93(0xe5)](),
                _0xe63cc7[_0x482d93(0x13d)](),
                _0xe63cc7[_0x482d93(0xc7)]() - 0x1
            )),
                (_0x55101f = new Date(
                    _0xe63cc7[_0x482d93(0xe5)](),
                    _0xe63cc7[_0x482d93(0x13d)](),
                    _0xe63cc7[_0x482d93(0xc7)]()
                ));
            break;
        case _0x482d93(0x11d):
            const _0x42ad15 = _0xe63cc7[_0x482d93(0x145)](),
                _0x31ee21 = new Date(
                    _0xe63cc7[_0x482d93(0xe5)](),
                    _0xe63cc7[_0x482d93(0x13d)](),
                    _0xe63cc7['getDate']() - _0x42ad15
                );
            (_0x4bbb58 = _0x31ee21),
                (_0x55101f = new Date(
                    _0xe63cc7[_0x482d93(0xe5)](),
                    _0xe63cc7[_0x482d93(0x13d)](),
                    _0xe63cc7[_0x482d93(0xc7)]() + 0x1
                ));
            break;
        case _0x482d93(0x115):
            const _0x3d0db1 = new Date(
                    _0xe63cc7[_0x482d93(0xe5)](),
                    _0xe63cc7[_0x482d93(0x13d)](),
                    _0xe63cc7[_0x482d93(0xc7)]() - _0xe63cc7['getDay']() - 0x7
                ),
                _0x4c9bea = new Date(
                    _0xe63cc7[_0x482d93(0xe5)](),
                    _0xe63cc7['getMonth'](),
                    _0xe63cc7[_0x482d93(0xc7)]() - _0xe63cc7[_0x482d93(0x145)]()
                );
            (_0x4bbb58 = _0x3d0db1), (_0x55101f = _0x4c9bea);
            break;
        case _0x482d93(0xfe):
            (_0x4bbb58 = new Date(_0xe63cc7[_0x482d93(0xe5)](), _0xe63cc7[_0x482d93(0x13d)](), 0x1)),
                (_0x55101f = new Date(_0xe63cc7[_0x482d93(0xe5)](), _0xe63cc7[_0x482d93(0x13d)]() + 0x1, 0x1));
            break;
        case _0x482d93(0x124):
            customStartDate &&
                customEndDate &&
                ((_0x4bbb58 = new Date(customStartDate)),
                (_0x55101f = new Date(customEndDate)),
                _0x55101f[_0x482d93(0x10a)](0x17, 0x3b, 0x3b, 0x3e7));
            break;
        default:
            return { startValue: null, endValue: null };
    }
    if (_0x4bbb58 && _0x55101f)
        return {
            startValue: _0x4bbb58[_0x482d93(0x119)]()[_0x482d93(0xcc)](),
            endValue: _0x55101f[_0x482d93(0x119)]()['toString'](),
        };
    return { startValue: null, endValue: null };
}
function updateDateFilterSummary() {
    const _0x2f6cc3 = _0x3ca23d;
    let _0x1470dc = '';
    switch (currentDateFilter) {
        case _0x2f6cc3(0xf6):
            _0x1470dc = 'Showing\x20conversations\x20from\x20all\x20time';
            break;
        case 'today':
            _0x1470dc = _0x2f6cc3(0xd0);
            break;
        case _0x2f6cc3(0xf3):
            _0x1470dc = 'Showing\x20conversations\x20from\x20yesterday';
            break;
        case _0x2f6cc3(0x11d):
            _0x1470dc = 'Showing\x20conversations\x20from\x20this\x20week';
            break;
        case _0x2f6cc3(0x115):
            _0x1470dc = _0x2f6cc3(0xfa);
            break;
        case _0x2f6cc3(0xfe):
            _0x1470dc = 'Showing\x20conversations\x20from\x20this\x20month';
            break;
        case _0x2f6cc3(0x124):
            if (customStartDate && customEndDate) {
                const _0x4f967f = new Date(customStartDate)[_0x2f6cc3(0x100)](),
                    _0x10e659 = new Date(customEndDate)[_0x2f6cc3(0x100)]();
                _0x1470dc = 'Showing\x20conversations\x20from\x20' + _0x4f967f + '\x20to\x20' + _0x10e659;
            } else _0x1470dc = _0x2f6cc3(0x151);
            break;
    }
    $(_0x2f6cc3(0x132))[_0x2f6cc3(0xce)](_0x1470dc);
}
function getDateFilterDisplayText() {
    const _0x404dd9 = _0x3ca23d;
    switch (currentDateFilter) {
        case 'today':
            return _0x404dd9(0x112);
        case 'yesterday':
            return _0x404dd9(0x127);
        case _0x404dd9(0x11d):
            return _0x404dd9(0x111);
        case _0x404dd9(0x115):
            return _0x404dd9(0xbf);
        case 'thisMonth':
            return 'This\x20Month';
        case _0x404dd9(0x124):
            if (customStartDate && customEndDate) {
                const _0x44cdb9 = new Date(customStartDate)[_0x404dd9(0x100)](),
                    _0x1e3e9f = new Date(customEndDate)[_0x404dd9(0x100)]();
                return _0x44cdb9 + _0x404dd9(0x114) + _0x1e3e9f;
            }
            return _0x404dd9(0x139);
        default:
            return '';
    }
}
