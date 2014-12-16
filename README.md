# Sports Season

Thanks for your interest in joining the OneUp team!

This repository was created to give you the opportunity to see the sorts of problems we face and tools we use on a regular basis at OneUp, as well as to allow you to demonstrate your technical skills without the pressure of an in-person interview setting.

Please try to solve the problem as described in this document and push your changes to this repository. When you are finished, create a pull request and members of the team will review your work and ask you questions and offer comments through the pull request. Please try to respond to these questions and comments as though you were working on a real project.

Don't worry about finishing everything. We know you're busy with other things. Try to finish as much as you can, and don't worry about it being perfect - one of the purposes of this exercise is so that your submissions and responses can be discussed with you and amongst the team as part of the interview process, so your participation is still incredibly valuable if you don't finish everything.

You should expect this exercise to take a total of an hour or so to complete, give or take. If you have questions or difficulty, please do not hesitate to contact us.

## The Problem

One of the problems we regularly face when building our services and APIs involves fetching data about sports games, leagues, teams, etc. from a variety of disparate sources and services. This data is rarely useful to us until it is massaged and normalized and extruded and processed into a form we can directly use to answer the questions that our applications ask.

Your task is to join in on the fun. You will create the methods of a ```Season``` class that understands some incoming data about the outcome of a season for a particular sports league. The incoming data that ```Season``` understands has the following format (for a larger example, check out ```sampleData.json``` in the root of the repo):

```
#!json
{
  "season": {
    "name": "NCAA 2014",
    "conferences": [
      {
        "name": "Patriot League",
        "teams": [
          {
            "name": "Lafayette Leopards",
            "wins": 6,
            "losses": 2,
            "pointsScored": 77.5,
            "pointsAgainst": 73
          },
          ...
        ]
      },
      ...
    ]
  }
}
```

When you've finished, the ```Season``` class will be able to answer some useful questions about this sort of data.

## A Solution

The ```Season``` class is a fairly simple creature. When created, it is passed a ```name``` which is attached to the ```Season``` as an attribute. ```Season``` has three methods, which you will implement. Since the plan is that one day ```Season``` will be backed by an asynchronous database calls someday, all of these calls take a callback as their last parameter. For the purposes of this exercise, feel free to store things in memory.

### importData

This method is used to associate data in the form described above with the ```Season```. The ```importData``` method takes two parameters, a ```data``` ```Object``` in the format described above which contains the results for the season, and a ```done``` callback to be called when the method's work is finished. The ```done``` callback expects to be passed an ```Error```. This method has the following requirements:

* If ```data``` is ```null```, it should yield an ```Error```
* If ```data``` is ```undefined```, it should yield an ```Error```
* If ```data.season.name``` does not match the ```Season```'s ```name```, it should yield an ```Error```
* If ```importData``` has already been successfully called, it should yield an ```Error```
* Otherwise, no ```Error``` should be yielded

### getConferences

This method is used to find all the imported conferences for the ```Season```. The ```getConferences``` method takes one parameter, a ```done``` callback to be called when the method's work is finished. The ```done``` callback expects to be passed an ```Error``` followed by an array of conferences, in the form of each element of the ```conferences``` array described above. This method has the following requirements:

* If ```importData``` has not yet been successfully called, ```getConferences``` should yield an ```Error```
* Otherwise, no ```Error``` should be yielded and the second parameter should contain an array of all imported conferences for the ```Season```

### getTeamsForConference

This method is used to find all the teams for an imported conference. The ```getTeamsForConference``` method takes two parameters, a ```conferenceName``` string and ```done``` callback to be called when the method's work is finished. The ```done``` callback expects to be passed an ```Error``` followed by an array of teams, in the form of each element of the ```teams``` array of each conference as described above. This method has the following requirements:

* If ```importData``` has not yet been successfully called, ```getTeamsForConference``` should yield an ```Error```
* If ```conferenceName``` does not match any imported conference's name, ```getTeamsForConference``` should yield an ```Error```
* Otherwise, no ```Error``` should be yielded and the second parameter should contain an array of all teams for the conference in the format described above

## The Rules

In order to get started, first clone the repository. Make sure that you have the latest version of [ NodeJS ](http://nodejs.org/) installed, then run the following from the root of the repository:

```
#!bash
npm install
```

Once you've done this, go ahead and start implementing the functions in ```season.js``` in the root of the project. Feel free to use any libraries you want to, but make sure to add them to the ```package.json``` for the project so that other people can clone the repository and run your code. In order to exercise your code, tests have been included which test each of the requirements outlined above. Do not modify these tests, though you may add additional ones if you would like. In order to run the tests, do one of the following from the root of the repository:

```
npm test
OR
npm run tests
```

(the difference being that ```npm run tests``` is a little more verbose than ```npm test```).

While you are working, try to think about what you would change about the project or handle differently, and why. What tests would you add or change? How would you restructure ```Season```'s functions? Would adding some new files make things easier to read or implement? Make sure to write understandable ```Error``` messages and to add comments if anything is unclear. Commit and push as often as feels natural. Don't forget to create a pull request and let us know once you're finished. 

Hopefully, you find this exercise fun and not too stressful. Don't hesitate to ask us if you run into any obstacles that you're having a hard time circumventing, and thank you again for your interest in joining the team!