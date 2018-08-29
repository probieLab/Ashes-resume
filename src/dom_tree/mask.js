import { vd } from '../virtual_dom_api/virtual_dom';
export const mask = new vd(
    'div',
    {
        'class': 'startMask',
        'style': 'height: 670px; width: 1364px;'
    }, [
        new vd('div', { 'class': "waveWrapper waveAnimation" }, [
            new vd('div', { 'class': 'waveWrapperInner bgTop' }, [
                new vd('div', {
                    'class': 'wave waveTop',
                    'style': 'background-image: url("http://jq22.qiniudn.com/wave-top.png")'
                })
            ]),
            new vd('div', { 'class': 'waveWrapperInner bgMiddle' }, [
                new vd('div', {
                    'class': 'wave waveMiddle',
                    'style': 'background-image: url("http://jq22.qiniudn.com/wave-mid.png")'
                })
            ]),
            new vd('div', { 'class': 'waveWrapperInner bgBottom' }, [
                new vd('div', {
                    'class': 'wave waveBottom',
                    'style': 'background-image: url("http://jq22.qiniudn.com/wave-bot.png")'
                })
            ]),
        ]),
        new vd('div', { 'class': "chose" }, [
            new vd('div', { 'class': 'choseButton', 'id': 'autoShow' }, ['Auto play']),
            new vd('div', { 'class': 'choseButton', 'id': 'manualShow' }, ['Go Github']),
        ]),
    ]);