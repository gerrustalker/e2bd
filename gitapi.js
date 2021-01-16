const simpleGit = require('simple-git');
const readline = require('readline')
const git = simpleGit();
const remote = `https://gerrustalker:DCP_Foundation!1@github.com/gerrustalker/e2bd`;

git.init(onInit).addRemote('origin', '${remote}', started = 1);

const name = 'Andrey Stalker';

// console.warn(`Test warn, ${name}!`);

function onInit (err, initResult) {
    console.log(initResult)
    // started = 1
}
/*function onRemoteAdd (err, addRemoteResult) {
    console.error(err)
    
}*/

/*git.silent(true)
    .clone(remote)
    .then(() => console.log('Cloned repo'))
    .catch((err) => console.error('Error ocured: ', err));*/

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

if(started == 1) {
    git.checkIsRepo()
    .then(() => console.log('You are in repo.'));
    testCommit()

    function testCommit() {
        git.add('file.txt');
        git.commit("gitapi.js says hi!");
        git.pull(remote, 'origin', 'main');
        git.fetch(remote, 'origin')
        console.log('Test commit initiated')
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Command: ', (answer) => {
        //console.log(`Getted command: ${answer}`);

        if(answer == 'exit') {
            console.log('Shutting down...')
            process.exit(1)
        }
    
        rl.close();
    });
}

