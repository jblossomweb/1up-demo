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
  else if(this.imported){
  	error = new Error('data already imported');
  } else {

    var season = this;
    this.validateData(data,function(e){
      // import some data
      season.data = data;
      season.imported = true;
      error = e;
    });
  	
  }

  if (typeof(done) == "function") {
    done(error);
  }
  
}

Season.prototype.validateData = function validateData(data,done) {
  
  var error = null;

  if(data.season == null){
    error = new Error('season data invalid');
  } else if (data.season.name == null) {
    error = new Error('season has no name');
  } else if (data.season.conferences == null) {
    error = new Error('season has no conference data');
  } else if (data.season.conferences.length < 1) {
    // maybe this one's just a warning
    error = new Error('season has no conferences'); 
  } else {
    var conf = null;
    for (c=0;c<data.season.conferences.length;c++){ 
        conf = data.season.conferences[c];
        if(conf.name == null){
          error = new Error(data.season.name+' conference '+c+' has no name');
        } else if(conf.teams == null){
          error = new Error(conf.name+' has no valid team data');
        } else if(conf.teams.length < 1){
          // maybe this one's just a warning
          error = new Error(conf.name+' has no teams');
        } else {
          var team = null;
          for (t=0;t<conf.teams.length;t++){
            team = conf.teams[t];
            if(team.name == null){
              error = new Error(conf.name+' team '+t+' has no name');
            } else if(team.wins == null){
              error = new Error(team.name+' has no wins data');
            } else if(parseInt(team.wins) !== team.wins){
              error = new Error(team.name+' has non-integer wins data');
            } else if(team.losses == null){
              error = new Error(team.name+' has no losses data');
            } else if(parseInt(team.losses) !== team.losses){
              error = new Error(team.name+' has non-integer losses data');
            } else if(team.pointsScored == null){
              error = new Error(team.name+' has no pointsScored data');
            } else if(parseFloat(team.pointsScored) !== team.pointsScored){
              error = new Error(team.name+' has non-numeric pointsScored data');
            } else if(team.pointsAgainst == null){
              error = new Error(team.name+' has no pointsAgainst data');
            } else if(parseFloat(team.pointsAgainst) !== team.pointsAgainst){
              error = new Error(team.name+' has non-numeric pointsAgainst data');
            }
          }
        }
    }
  }

  if (typeof(done) == "function") {
    done(error);
  }

}

Season.prototype.getConferences = function getConferences(done) {
  
  var error = null;
  var conferences = null;

  // If importData has not yet been successfully called, getConferences should yield an Error
  if(!this.imported){
  	error = new Error('data not imported');
  } else {
	conferences = this.data.season.conferences
  }
  if (typeof(done) == "function") {
    done(error,conferences);
  }

}

Season.prototype.getTeamsForConference = function getTeamsForConference(conferenceName, done) {
    
  var error = null;
  var teams = null;

  // if importData has not yet been successfully called yield an Error 
  if(!this.imported){
  	error = new Error('data not imported');
  } else {
  	// npm install --save array.prototype.find
  	require('array.prototype.find');
  	var conference = this.data.season.conferences.find(function(c) {
  		return c.name == conferenceName;
  	});
  	if(conference == null){
  		error = new Error(conferenceName+' not in imported data');
  	} else {
  		teams = conference.teams;
  	}
  }
  if (typeof(done) == "function") {
    done(error,teams);
  }
}

module.exports = Season