const simpleGit = require('simple-git');
const git = simpleGit();

git.init()
    .then(() => git.addRemote('origin', 'git@github.com:steveukx/git-js.git'));
