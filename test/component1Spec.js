import { Multiply } from 'src/library';

describe('component1', () => {

    it('should multiply', () => {
        var result = Multiply(2);

        expect(result).toBe(4);
    });
});
