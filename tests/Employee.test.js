const Employee = require('../lib/Employee');

const bleh = new Employee("Bleh", "1", "bleh@email.com");

describe('Employee Class', () => {
    it('should return the properties sent through the employee class', () => {
        expect(bleh.name).toBe("Bleh");
        expect(bleh.id).toBe("1");
        expect(bleh.email).toBe("bleh@email.com");
    });
});

describe('Employee getName', () => {
    it('should return the properties sent through the employee class', () => {
        expect(bleh.getName()).toBe(bleh.name);
    });
});

describe('Employee getId', () => {
    it('should return the properties sent through the employee class', () => {
        expect(bleh.getId()).toBe(bleh.id);
    });
});

describe('Employee getEmail', () => {
    it('should return the properties sent through the employee class', () => {
        expect(bleh.getEmail()).toBe(bleh.email);
    });
});