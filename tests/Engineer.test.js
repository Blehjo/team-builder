const Engineer = require('../lib/Engineer');

const Jay = new Engineer ("Jay", "3", "Jay@email.com", "Jaygithub");

describe('Engineer Class', () => {
    it('should return the properties sent through the engineer class', () => {
        expect(Jay.name).toBe("Jay");
        expect(Jay.id).toBe("3");
        expect(Jay.email).toBe("Jay@email.com");
        expect(Jay.github).toBe("Jaygithub");
    });
});

describe('Engineer getGithub', () => {
    it('should return the github', () => {
        expect(Jay.getGithub()).toBe(Jay.github);
    });
});