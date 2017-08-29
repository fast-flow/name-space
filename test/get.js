var assert = require('assert');
var ns = require('../index')
describe('get.js', function() {
    it('level 1', function () {
        assert.equal(
            ns.get(
                {
                    title: 'f2e'
                },
                'title'
            ),
            "f2e"
        )
    })
    it('level 1 undefined', function () {
        assert.equal(
            ns.get(
                {

                },
                'title'
            ),
            undefined
        )
    })
    it('get(obj, names) // return value', function() {
        var obj = {
            user: {
                name: 'nimo'
                // ,age: 22
            }
        }
        assert.equal(
            ns.get(obj, 'user.name'),
            'nimo'
        )
    })
    it('get(obj, names) // return undefined', function() {
        var obj = {
            user: {
                name: 'nimo'
                // ,age: 22
            }
        }
        assert.equal(
            ns.get(obj, 'user.age'),
            undefined
        )
    })
})
