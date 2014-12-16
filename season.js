function Season(name) {
  this.name = name
}

Season.prototype.importData = function importData(data, done) {
  // Your code goes here
}

Season.prototype.getConferences = function getConferences(done) {
  // Your code goes here
}

Season.prototype.getTeamsForConference = function getTeamsForConference(conferenceName, done) {
  // Your code goes here
}

module.exports = Season