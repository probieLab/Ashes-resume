import { vd } from '../virtual_dom_api/virtual_dom';
import { mask } from './mask';
import styles from '../../css/index.css';
const personal = new vd(
    'div',
    {
        'class': 'descriptionItem',
        'data-id': '1'
    }, [
        new vd('h2', null, ['个人介绍']),
        new vd('h3', null, ['姓名：杜士华']),
        new vd('h3', null, ['出生年月：1996.12']),
        new vd('h3', null, ['手机：152-4712-4825']),
        new vd('h3', null, ['邮箱：792634614@qq.com']),
        new vd('h3', null, ['个人仓库：', new vd('a', { 'href': 'https://github.com/sadofriod' }, ['https://github.com/sadofriod'])]),
        new vd('h3', null, ['教育背景：2015 - 2019 内蒙古工业大学 软件工程专业 本科']),
    ]);
const project = new vd('div',
    {
        'class': 'descriptionItem',
        'data-id': '2'
    }, [
        new vd('h2', null, ['最近的项目']),
        new vd('h3', null, ['云水族箱APP']),
        new vd('p', null, ['在项目中负责编写APP、部分node代码。使用react-native实现，即使数据通信使用MQTT协议（订阅/发布模式）数据库mysql,后端是基于node.js的express框架。']),
        new vd('p', null, ['用户可以通过APP远程监控，水族箱的水温，PH和液位。']),
        new vd('p', null, ['可以通过APP提供的功能，远程控制水族箱内置的加热棒、风扇来实现对水族箱的温度控制，通过过滤和换水功能来实现对水族箱的PH和液位控制，通过喂食功能控制喂食器。然后通过视频查看水族箱情况。视频模块使用了webrtc。']),
        new vd('p', null, ['项目仓库：', new vd('a', { 'href': 'https://github.com/sadofriod/fishbowl' }, ['https://github.com/sadofriod/fishbowl'])]),
    ]);
const skill = new vd(
    'div',
    {
        'class': 'descriptionItem',
        'data-id': '3'
    }, [
        new vd('h2', null, ['掌握技能']),
        new vd('h3', null, ['1、熟练掌握JavaScript（es5/es6），HTML（5），CSS（3）']),
        new vd('h3', null, ['2、熟悉git、github分支管理、npm']),
        new vd('h3', null, ['3、熟悉react native、ajax']),
        new vd('h3', null, ['4、了解node.js、http协议']),
    ]);
const endPage = new vd(
    'div',
    {
        'class': 'descriptionItem',
        'data-id': '4'
    }, [
        new vd('h2', null, ['了解更多  o( > _ < )o']),
        new vd('h3', null, ['Call Me:15247124825']),
        new vd('h3', null, ['E-mail:792634614@qq.com']),
        new vd('h3', null, ['谢谢观看', new vd('a', { 'href': '' }, ['->;'])])
    ]);

const mobileMeta = new vd(
    'meta',
    {
        'name': 'viewport',
        'content':"width=device-width, initial-scale=1,height = device-height"
    }
)
const descriptionGroup = new vd(
    'div', { class: 'descriptionGroup' }, [personal, project, skill, endPage]
);
document.head.appendChild(mobileMeta.render())
document.body.appendChild(mask.render());
document.body.appendChild(descriptionGroup.render());