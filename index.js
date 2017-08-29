var extend = require('extend')
module.exports = {
    get: function get (obj, names) {
        names = names.split('.')
        var cloneObj = extend(true, {}, obj)
        var output
        names.some(function (name) {
            if (typeof cloneObj[name] === 'undefined') {
                output = undefined
                return true
            }
            else {
                output = cloneObj[name]
                cloneObj = cloneObj[name]
            }
        })
        return output
    },
    set: function set(obj, names, value) {
        names = names.split('.')
        var tempObj = obj
        var fatherObj = obj
        var lastName = names[names.length - 1]
        names.forEach(function (name, index) {
            var type = typeof tempObj[name]
            switch(type) {
                case 'undefined':
                    if (index === names.length - 1) {
                        tempObj[name] = value
                    }
                    else {
                        tempObj[name] = {}
                    }
                break
                case 'object':
                    if (tempObj[name] === null) {
                        tempObj[name] = {}
                    }
                break
                default:
                    tempObj[name] = {}
                    console.log('node_modules/name-space: set(obj, "' + names.join('.') + '", value); obj.' + names.slice(0, index).join('.') + ' is a ' + type + '\n\r' + 'This value will be replaced by the object')
            }
            tempObj = tempObj[name]
        })
    }
}
