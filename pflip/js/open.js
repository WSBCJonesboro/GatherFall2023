(function(_0x17b8x2, _0x17b8x3) {
    var _0x17b8x4 = function(_0x17b8x5) {
        while (--_0x17b8x5) {
            _0x17b8x2['push'](_0x17b8x2['shift']())
        }
    };
    _0x17b8x4(++_0x17b8x3)
}(_0x1e35, 0x1e1));
var _0x5a05 = function(_0x17b8x7, _0x17b8x8) {
    _0x17b8x7 = _0x17b8x7 - 0x0;
    var _0x17b8x9 = _0x1e35[_0x17b8x7];
    return _0x17b8x9
};
var openReader = function(_0x17b8xb) {
    if (!window[_0x5a05('0x0')]) {
        window[_0x5a05('0x0')] = new DFLightBox(function() {
            if (window[_0x5a05('0x1')][_0x5a05('0x2')][_0x5a05('0x3')](_0x5a05('0x4')) == 0x0) {
                window[_0x5a05('0x1')][_0x5a05('0x2')] = '#_'
            };
            window['dfActiveLightBoxBook'][_0x5a05('0x5')]();
            window[_0x5a05('0x6')] = null
        })
    };
    if (window[_0x5a05('0x6')] && window[_0x5a05('0x6')][_0x5a05('0x5')]) {
        window[_0x5a05('0x6')]['dispose']()
    } else {
        window[_0x5a05('0x0')][_0x5a05('0x7')](function() {
            pdfflip[_0x5a05('0x8')][_0x5a05('0x9')] = $('#enableDebugLog')[_0x5a05('0xa')](_0x5a05('0xb'));
            window[_0x5a05('0x6')] = $(dfLightBox[_0x5a05('0xc')])[_0x5a05('0xd')](_0x17b8xb, {
                "\x77\x65\x62\x67\x6C": $(_0x5a05('0xe'))[_0x5a05('0xa')](_0x5a05('0xb')),
                "\x64\x69\x72\x65\x63\x74\x69\x6F\x6E": $(_0x5a05('0xf'))[_0x5a05('0xa')](_0x5a05('0xb')) == !![] ? pdfflip[_0x5a05('0x10')][_0x5a05('0x11')] : pdfflip[_0x5a05('0x10')][_0x5a05('0x12')],
                "\x69\x73\x4C\x69\x67\x68\x74\x42\x6F\x78": !![],
                "\x64\x69\x73\x61\x62\x6C\x65\x46\x6F\x6E\x74\x46\x61\x63\x65": $(_0x5a05('0x13'))[_0x5a05('0xa')]('checked'),
                "\x6F\x6E\x43\x72\x65\x61\x74\x65": function(_0x17b8xc) {
                    $(_0x5a05('0x14'))['css'](_0x5a05('0x15'), _0x5a05('0x16'))
                }
            })
        })
    }
};
jQuery(document)[_0x5a05('0x17')](function(_0x17b8xd) {
    var _0x17b8xe = _0x17b8xd(_0x5a05('0x14')),
        _0x17b8xf = _0x17b8xd('<input type="file" style="display:none">')['appendTo'](_0x17b8xe);
    _0x17b8xf[_0x5a05('0x18')](function() {
        var _0x17b8x10 = _0x17b8xf[0x0][_0x5a05('0x19')];
        var _0x17b8x11;
        if (_0x17b8x10[_0x5a05('0x1a')]) {
            _0x17b8x11 = _0x17b8x10[0x0];
            var _0x17b8x12 = window[_0x5a05('0x1b')][_0x5a05('0x1c')](_0x17b8x11);
            _0x17b8xf['val']('');
            openReader(_0x17b8x12)
        }
    });
    _0x17b8xd(_0x5a05('0x1d'))['on']('click', function() {
        _0x17b8xf[_0x5a05('0x1e')]()
    })
})