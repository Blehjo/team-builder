const Manager = require('../lib/Manager');

const joi = new Manager("Joi", "2", "Joi@email.com", "25");

describe('Manager Class', () => {
    it('should return the properties sent through the manager class', () => {
        expect(joi.name).toBe("Joi");
        expect(joi.id).toBe("2");
        expect(joi.email).toBe("Joi@email.com");
        expect(joi.officeNumber).toBe("25");
    });
});

describe('Manager getOfficeNumber', () => {
    it('should return the officeNumber', () => {
        expect(joi.getOfficeNumber()).toBe(joi.officeNumber);
    });
});