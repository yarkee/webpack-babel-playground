import Multiply from 'src/js/component1';

describe('component1', () => {

    it('should multiply', () => {
        var result = Multiply(2);

        expect(result).toBe(4);
    });
});
