// check that flickr-fetcher.js exists
// 'use strict';
// var expect = require ('chai').expect;

// describe('FlickrFetcher', function() {
//     it('should exist', function() {
//         var FlickrFetcher = require('./flickr-fetcher.js');
//         expect(FlickrFetcher).to.not.be.undefined;
//     });
// });
// Construct URL based on size of photo
var FlickrFetcher = require('./flickr-fetcher.js');

describe('#photoObjToUrl()', function() {
    it('should take a photo object from Flickr and return a string', function(){
        var input = {
            id:         '24770505034',
            owner:      '97248275@N03',
            secret:     '31a9986429',
            server:     '1577',
            farm:       2,
            title:      '20160229090898',
            ispublic:   1,
            isfriend:   0,
            isfamily:   0       
        };
        var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
        var actual = FlickrFetcher.photoObjToURL(input);
        expect(actual).to.eql(expected);
    })
})
//for the git god