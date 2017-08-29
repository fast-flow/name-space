var assert = require('assert');
var ns = require('../index')
describe('set.js', function() {
    it('level 1', function () {
        var obj = {}
        ns.set(obj,'title', 'f2e')
        assert.equal(
            obj.title,
            "f2e"
        )
    })
    it('level 1 has string', function () {
        var obj = {
            title: 'abc'
        }
        ns.set(obj,'title', 'f2e')
        assert.equal(
            obj.title,
            "f2e"
        )
    })
    it('level 2', function () {
        var obj = {}
        ns.set(obj,'name.title', 'f2e')
        assert.equal(
            obj.name.title,
            'f2e'
        )
    })
    it('level 3', function () {
        var obj = {}
        ns.set(obj,'user.name.lastName', 'Chu')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"name":{"lastName":"Chu"}}}'
        )
    })
    it('level 3 has obj', function () {
        var obj = {
            user: {
                title: 'f2e'
            }
        }
        ns.set(obj,'user.name.lastName', 'Chu')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":"f2e","name":{"lastName":"Chu"}}}'
        )
    })
    it('level 3 has string 1', function () {
        var obj = {
            user: {
                title: 'f2e'
            }
        }
        ns.set(obj,'user.title.subTitle', 'abc')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":{"subTitle":"abc"}}}'
        )
    })
    it('level 3 has string 2', function () {
        var obj = {
            user: {
                title: 'f2e'
            }
        }
        ns.set(obj,'user.title', 'abc')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":"abc"}}'
        )
    })
    it('level 3 has number', function () {
        var obj = {
            user: {
                title: 1
            }
        }
        ns.set(obj,'user.title.subTitle', 'abc')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":{"subTitle":"abc"}}}'
        )
    })
    it('level 3 has null', function () {
        var obj = {
            user: {
                title: null
            }
        }
        ns.set(obj,'user.title.subTitle', 'abc')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":{"subTitle":"abc"}}}'
        )
    })
    it('level 3 has function', function () {
        var obj = {
            user: {
                title: function(){}
            }
        }
        ns.set(obj,'user.title.subTitle', 'abc')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":{"subTitle":"abc"}}}'
        )
    })
    it('level 3 has boolean', function () {
        var obj = {
            user: {
                title: true
            }
        }
        ns.set(obj,'user.title.subTitle', 'abc')
        assert.equal(
            JSON.stringify(obj),
            '{"user":{"title":{"subTitle":"abc"}}}'
        )
    })

})
