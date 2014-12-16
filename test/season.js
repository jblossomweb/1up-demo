var should = require('should')
var Season = require('../season')

var validSeasonData = {
  season: {
    name: 'test season',
    conferences: [
      {
        name: 'test conference 1',
        teams: [
          { name: 'test team 1', wins: 1, losses: 1, pointsScored: 1, pointsAgainst: 1 },
          { name: 'test team 2', wins: 2, losses: 2, pointsScored: 2, pointsAgainst: 2 }
        ]
      },
      {
        name: 'test conference 2',
        teams: [
          { name: 'test team 3', wins: 3, losses: 3, pointsScored: 3, pointsAgainst: 3 },
          { name: 'test team 4', wins: 4, losses: 4, pointsScored: 4, pointsAgainst: 4 }
        ]
      }
    ]
  }
}

describe('season', function() {
  describe('importData', function() {
    it('should yield an Error if it has already been successfully called', function(done) {
      var season = new Season('test season')
      season.importData(validSeasonData, function(error) {
        season.importData(validSeasonData, function(error) {
          error.should.be.an.instanceOf(Error)
          done()
        })
      })
    })
    
    it('should yield an Error if it is passed null', function(done) {
      var season = new Season('test season')
      season.importData(null, function(error) {
        error.should.be.an.instanceOf(Error)
        done()
      })
    })
    
    it('should yield an Error if it is passed undefined', function(done) {
      var season = new Season('test season')
      season.importData(undefined, function(error) {
        error.should.be.an.instanceOf(Error)
        done()
      })
    })
    
    it('should yield an Error if the name property of the passed object does not match the Season\'s name', function(done) {
      var season = new Season('not the test season')
      season.importData(validSeasonData, function(error) {
        error.should.be.an.instanceOf(Error)
        done()
      })
    })
    
    it('should yield no Error if it was successful', function(done) {
      var season = new Season('test season')
      season.importData(validSeasonData, function(error) {
        should.not.exist(error)
        done()
      })
    })
  })
  
  describe('getConferences', function() {
    it('should yield an Error if importData has not yet been successfully called', function(done) {
      var season = new Season('test season')
      season.getConferences(function(error) {
        error.should.be.an.instanceOf(Error)
        done()
      })
    })
    
    it('should yield an array of conferences if importData has been successfully called', function(done) {
      var season = new Season('test season')
      season.importData(validSeasonData, function(error) {
        season.getConferences(function(error, conferences) {
          conferences.should.be.an.instanceOf(Array)
          conferences.should.containEql(validSeasonData.season.conferences[0])
          conferences.should.containEql(validSeasonData.season.conferences[1])
          done()
        })
      })
    })
  })
  
  describe('getTeamsForConference', function() {
    it('should yield an Error if importData has not yet been successfully called', function(done) {
      var season = new Season('test season')
      season.getTeamsForConference('test conference 1', function(error) {
        error.should.be.an.instanceOf(Error)
        done()
      })
    })
    
    it('should yield an Error if passed a conference name that matches the name of no imported conference', function(done) {
      var season = new Season('test season')
      season.importData(validSeasonData, function(error) {
        season.getTeamsForConference('no test conference', function(error, conferences) {
          error.should.be.an.instanceOf(Error)
          done()
        })
      })
    })
    
    it('should yield an array of teams for the conference if passed a name that matches the name of an imported conference', function(done) {
      var season = new Season('test season')
      season.importData(validSeasonData, function(error) {
        season.getTeamsForConference('test conference 2', function(error, teams) {
          teams.should.be.an.instanceOf(Array)
          teams.should.containEql(validSeasonData.season.conferences[1].teams[0])
          teams.should.containEql(validSeasonData.season.conferences[1].teams[1])
          done()
        })
      })
    })
  })
})