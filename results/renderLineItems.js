export function renderLineItems(pokePick) {
    const tr = document.createElement('tr');
     
    const nameTd = document.createElement('td');
    nameTd.textContent = pokePick.name;
   
    const seenTd = document.createElement('td');
    seenTd.textContent = pokePick.seen;
  
    const caughtTd = document.createElement('td');
    caughtTd.textContent = pokePick.caught;
  
    tr.append(nameTd);
    tr.append(seenTd);
    tr.append(caughtTd);
  
    return tr;
}

