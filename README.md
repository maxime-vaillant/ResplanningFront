# Resplanning Front

## Introduction

This is the front app of resplanning. Resplanning is a tool to generate a planning depending on constraints.

Constraints are decomposed in three parts :
* Rules by slot
* Rules by person 
* Availability

## Setup

### Installation

`yarn install`

Then you need to fill `Config.js` 

### Run

To run the app, you need to use one of these commands. It depends on the config file.

Start with local API : 

`yarn run start-local`

Start with dev API :

`yarn run start-dev`

Start in prod :

`yarn run start`

### Deployment

To deploy the app, you need to use one of these commands. It depends on the config file.

Deploy in dev :

`yarn run build-dev`

Deploy in prod :

`yarn run build`

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
