/*
 * This should be pasted into the console window.
 */

regex = /(aug|sep).*/;

// Get all link elements
links = Array.from(document.getElementsByTagName('a'));

// Filter by regex
links = links.filter(el => Array.from(el.childNodes).some(sp => sp.textContent.match(regex)));

// Get link href's
links = links.map(el => el.href);

// Open each download link 
links.forEach(l => window.open(l, '_blank'));

