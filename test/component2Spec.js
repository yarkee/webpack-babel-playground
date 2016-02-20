import Divide from 'src/js/component2.js';

describe('component2', () => {

    it('should divide', () => {
        var result = Divide(2);

        expect(result).toBe(1);
    });
});
