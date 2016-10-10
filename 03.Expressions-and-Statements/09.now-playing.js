function display([song, artist, duration]) {
    let info = `Now Playing: ${artist} - ${song} [${duration}]`;

    console.log(info);
}

display(['Number One', 'Nelly', '4:09'])