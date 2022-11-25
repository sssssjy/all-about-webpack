const {getOptions} = require('loader-utils');

/**
 * this有指向 不可以使用箭头函数
 * 可以使用 this.query 获取参数 但官方推荐 loader-utils
 * this.query.params == getOptions(this)
 *
 * this.callback 返回值给webpack
 */
module.exports = function (source) {
    console.log(this.query.params);
    console.log(getOptions(this));
    const result = source.replace('node', 'NODE').replace('react', 'React').replace('webpack', 'vite');
    //this.callback(null, source, sourceMaps)
    this.callback(null, result);
}
