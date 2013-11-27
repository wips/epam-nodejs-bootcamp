var game = {},
    Renderer = require('game').Renderer,
    maps = require('game').maps,
    map = maps[0];

game.person = {
    position: {
        x: 7,
        y: 2
    }
};

game.renderer = new Renderer(maps[0], game.person);



game.moveUp = function () {
    if (game.person.position.y === 0) {
        return;
    }
    var nextY = game.person.position.y - 1;
    if (walkable.indexOf(map[nextY][game.person.position.x]) === -1) {
        return;
    }
    game.person.position.y = nextY;
}

game.moveDown = function () {
    if (game.person.position.y === map.length - 1) {
        return;
    }
    var nextY = game.person.position.y + 1;
    if (walkable.indexOf(map[nextY][game.person.position.x]) === -1) {
        return;
    }
    game.person.position.y = nextY;
}

game.moveLeft = function () {
    if (game.person.position.x === 0) {
        return;
    }
    var nextX = game.person.position.x - 1;
    if (walkable.indexOf(map[game.person.position.y][nextX]) === -1) {
        return;
    }
    game.person.position.x = nextX;
}

game.moveRight = function () {
    if (game.person.position.x === map[0].length - 1) {
        return;
    }
    var nextX = game.person.position.x + 1;
    if (walkable.indexOf(map[game.person.position.y][nextX]) === -1) {
        return;
    }
    game.person.position.x = nextX;
}

process.stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
process.stdin.resume();

// switch from binary to something more useful
process.stdin.setEncoding('utf8');

// on any data into stdin
process.stdin.on( 'data', function(key) {
    if (key === "\u001b[A") {
        // down arrow
        game.moveUp();
        game.render();
    } else if (key === "\u001b[B") {
        game.moveDown();
        game.render();
    } else if (key === "\u001b[C") {
        game.moveRight();
        game.render();
    }  else if (key === "\u001b[D") {
        game.moveLeft();
        game.render();
    }

    if (key === "\u001b" || key === "\u0003") {
        process.exit();
    }
});

var walkable = ['·', '░'];

game.renderer.render();