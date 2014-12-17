function Season(name) {
  this.name = name;
  this.imported = false;
}

Season.prototype.importData = function importData(data, done) {

  var error = null;
  // If data is null, importData should yield an Error
  // If data is undefined, importData should yield an Error
  if (data == null) { // if(typeof(data) === 'undefined' || data === null) {
  	error = new Error('data is not set');
  }

  // If the season's name in the passed data does not match the Season's name, importData should yield an Error
  else if(data.season.name !== this.name) {
  	error = new Error('season name mismatch');
  }

  // If importData has already been successfully called, it should yield an Error
  if(this.imported){
  	error = new Error('data already imported');
  }

  // import some data
  this.data = data;
  this.imported = true;
  done(error);
}

Season.prototype.getConferences = function getConferences(done) {
  
  var error = null;
  var conferences = new Array();

  // If importData has not yet been successfully called, getConferences should yield an Error
  if(!this.imported){
  	error = new Error('data not imported');
  } else {
	conferences = this.data.season.conferences
  }
  done(error,conferences);

}

Season.prototype.getTeamsForConference = function getTeamsForConference(conferenceName, done) {
    
  var error = null;
  var teams = new Array();

  // if importData has not yet been successfully called yield an Error 
  if(!this.imported){
  	error = new Error('data not imported');
  } else {
  	// teams = array of teams by conference
  }

  done(error,teams);

}

module.exports = Season