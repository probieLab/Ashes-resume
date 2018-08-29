export const vd = function (target, props, children) {
    //只能通过new vd 调用
    if (!(this instanceof vd)) {
        return new vd(target, props, children);
    }
    this.target = target;
    this.state = {};
    this.props = props || {};
    this.children = children || [];
    this.key = props ? props : null;
    this.count = this.children.length || 0;
}
vd.prototype.render = function () {
    let el = document.createElement(this.target);
    let props = this.props;
    for (let i in props) {
        el.setAttribute(i, props[i]);
    }
    for (let i = 0; i < this.count; i++) {
        let tempElement = this.children[i] instanceof vd ? this.children[i].render() : document.createTextNode(this.children[i]);
        el.append(tempElement);
    }
    return el;
}
