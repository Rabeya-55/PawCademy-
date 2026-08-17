let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    let slider = document.querySelector('.slider');
    slider.appendChild(items[0]); // move the first item to the end
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    let slider = document.querySelector('.slider');
    slider.insertBefore(items[items.length - 1], items[0]); // move the last item to the beginning
});


const nameMap = {
    dolphine: "Dolphin",
    penguine: "Penguin",
    lion: "Lion",
    bear: "Bear",
    tiger: "Tiger",
    eagle: "Eagle",
    giraffe: "Giraffe",
    elephant: "Elephant",
    whale: "Whale"
};

document.querySelectorAll('.item').forEach(item => {
    const button = item.querySelector('button');
    const name = item.querySelector('.name')?.textContent?.toLowerCase();

    button.addEventListener('click', () => {
        if (name && nameMap[name]) {
            const url = `https://en.wikipedia.org/wiki/${nameMap[name]}`;
            window.open(url, '_blank');
        }
    });
});



document.querySelectorAll('.item').forEach(item => {
    const button = item.querySelector('button');
    const name = item.querySelector('.name')?.textContent?.toLowerCase();

    button.addEventListener('click', () => {
        if (name) {
            // Build the Wikipedia URL
            const url = `https://en.wikipedia.org/wiki/${name.charAt(0).toUpperCase() + name.slice(1)}`;
            window.open(url, '_blank'); // Open in a new tab
        }
    });
});

