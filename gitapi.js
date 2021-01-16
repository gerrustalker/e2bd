const simpleGit = require('simple-git');
const git = simpleGit();
const remote = `https://gerrustalker:DCP_Foundation!1@github.com/gerrustalker/e2bd`;

git.init(onInit).addRemote('origin', '${remote}', onRemoteAdd);

const name = 'Andrey Stalker';

// console.warn(`Test warn, ${name}!`);

function onInit (err, initResult) {
	console.log(initResult)
}
function onRemoteAdd (err, addRemoteResult) {
    console.error(err)
}

/*git.silent(true)
    .clone(remote)
    .then(() => console.log('Cloned repo'))
    .catch((err) => console.error('Error ocured: ', err));*/

git.checkIsRepo()
    .then(() => console.log('You are in repo.'));
    testCommit()

function testCommit() {
    git.add('file.txt');
    git.commit("js commit test");
    git.pull(remote, 'origin', 'main');
    git.fetch(remote, 'main')
    console.log('Test commit initiated')
}

