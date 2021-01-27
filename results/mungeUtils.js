export function pokeSeenArray(arrayOfPoke) {
    const seenArray = [];

    for (let item of arrayOfPoke) {
        seenArray.push(item.seen);
    }
    return seenArray;
}

export function pokeCaughtArray(arrayOfPoke) {
    const caughtArray = [];

    for (let item of arrayOfPoke) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}  



export function pokeNameArray(arrayOfPoke) {
    const nameArray = [];

    for (let item of arrayOfPoke) {
        nameArray.push(item.name);
    }
    return nameArray;
}

  
