'use strict';

var shippo = require('./testUtils').getSpyableShippo();
var expect = require('chai').expect;

describe('Rate Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      shippo.rate.retrieve('RateIdFoo123');
      expect(shippo.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/rates/RateIdFoo123',
        data: {}
      });

    });

  });
  
});