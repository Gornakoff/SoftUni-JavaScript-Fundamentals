function compose([location, text]) {
    let tag = `<img src="${location}" alt="${text}">`;

    console.log(tag);
}

compose(['smiley.gif', 'Smiley Face'])