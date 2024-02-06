const helloToLotsOfPeople = function() {
    const people = arguments;

    for(const person of people) {
        console.log(`Hello, ${person}`);
    }
};

helloToLotsOfPeople('Dustin', 'David', 'Roderick', 'Mako', 'Ryan', 'Dhaarani');
