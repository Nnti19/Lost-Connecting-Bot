module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`bot online`)
        console.log(`Logged in as ${client.user.tag}!`);
    },
};