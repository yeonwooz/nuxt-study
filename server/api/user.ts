export default eventHandler((event) => {
    console.log('event', event);
    return {
        username: 'SEAN',
    };
});
