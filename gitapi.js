const simpleGit = require('simple-git');
const readline = require('readline')
const git = simpleGit();
const remote = `https://gerrustalker:DCP_Foundation!1@github.com/gerrustalker/e2bd`;
var started = 0

git.init().addRemote('origin', '${remote}', started = 1);

const name = 'Andrey Stalker';

// console.warn(`Test warn, ${name}!`);

/*function onInit (err, initResult) {
    console.log(initResult);
    // setTimeout(started = 1, 1000)
}\*


/*function onRemoteAdd (err, addRemoteResult) {
    console.error(err)
}*/

/*git.silent(true)
    .clone(remote)
    .then(() => console.log('Cloned repo'))
    .catch((err) => console.error('Error ocured: ', err));*/

/*function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}*/

if(started == 1) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Node has been started')

    git.checkIsRepo()
        //.then(() => console.log('You are in repo.'))
        testCommit();

    function testCommit() {
        git.add('file.txt');
        git.commit("gitapi.js says hi!");
        git.pull(remote, 'origin', 'main');
        git.fetch(remote, 'origin')
        console.log('Test commit initiated at ', remote)
    }

    consoleInput()

    function consoleInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        initConsole()
    }

    function initConsole() {
        rl.question('> ', (answer) => {
            //console.log(`Getted command: ${answer}`);
    
            /*if(answer == 'exit') {
                console.log('Shutting down...')
                process.exit(1)
            }
            
            if(answer == 'reboot') {
                console.log('Rebooting...')
                exec("npm restart")
                consoleInput()
            }
    
            if(answer.substring(6) == 'commit') {
                console.log('Trying to commit with string ')
                consoleInput()
            }*/
        
            switch(answer) {
                case('exit'):
                    console.log('Shutting down...')
                    process.exit(1)
                break

                case('reboot'):
                    console.log('Rebooting...')
                    exec("npm restart")
                    consoleInput()
                break

                case('commit'):
                    console.log('Trying to commit with string ')
                    consoleInput()
                break
            }
            
            //consoleInput()
            rl.close();
        });
    }
}

