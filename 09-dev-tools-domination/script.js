const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('hello i am a %s string with 💩 variable', '💩');

    // Styled
    console.log('%c I am console styled text', 'font-size:30px; color:#BADA55; background:red; text-shadow:10px 10px 0 blue');
    
    // warning!
    console.warn('OH NOOOOOOOO');

    // Error :|
    console.error('SHIT!');

    // Info
    console.info('Crocodiles eat 3-4 people/year');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
    	console.groupCollapsed(`${dog.name}`);
    	console.log(`This is ${dog.name}`);
    	console.log(`${dog.name} is ${dog.age} years old`);
    	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    	console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Dude');
    console.count('Dude');
    console.count('Bro');
    console.count('Dude');
    console.count('Dude');
    console.count('Bro');
    console.count('Dude');
    console.count('Bro');
    console.count('Dude');
    console.count('Dude');
    console.count('Bro');
    console.count('Dude');


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/jacobwylie')
    	.then(data => data.json())
    	.then(data => {
    		console.timeEnd('fetching data');
    		console.log(data)
    	});

    // Table
    console.table(dogs);


















