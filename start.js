var Renderer = require('epam-game').Renderer,
    maps = require('epam-game').maps,
    Person = require('epam-game').Person;
    World = require('epam-game').World;

var person = new Person(maps[0], ['·', '░']),
    renderer = new Renderer(maps[0], person),
    world = new World(renderer, person);

person.position = {x: 7, y: 2};
world.run();