const Intern = require('../lib/Intern');

const bee = new Intern ("Bee", "4", "Bee@email.com", "Northwestern");

describe('Intern Class', () => {
    it('should return the properties sent through the engineer class', () => {
        expect(bee.name).toBe("Bee");
        expect(bee.id).toBe("4");
        expect(bee.email).toBe("Bee@email.com");
        expect(bee.school).toBe("Northwestern");
    });
});

describe('Intern getSchool', () => {
    it('should return the school', () => {
        expect(bee.getSchool()).toBe(bee.school);
    });
});