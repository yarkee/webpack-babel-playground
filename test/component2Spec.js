import { Divide } from 'src/library';

describe('component2', () => {

    it('should divide', () => {
        var result = Divide(2);

        expect(result).toBe(1);
    });
});
