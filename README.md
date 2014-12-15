# Sports Season

Thanks for your interest in joining the OneUp team!

This repository was created to give you the opportunity to see the sorts of problems we face and tools we use on a regular basis at OneUp, as well as to allow you to demonstrate your technical skills without the pressure of an in-person interview setting.

Please try to solve the problem as described in this document and push your changes to this repository. When you are finished, create a pull request and members of the team will review your work and ask you questions and offer comments through the pull request. Please try to respond to these questions and comments as though you were working on a real project.

Please don't worry about finishing everything. We know you're busy with other things. Try to finish as much as you can, and don't worry about it being perfect - one of the purposes of this exercise is so that your submissions and responses can be discussed with you and amongst the team as part of the interview process, so your participation is still incredibly valuable if you don't finish everything.

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

When you've finished, ```Season``` will be able to answer some useful questions about this sort of data.

