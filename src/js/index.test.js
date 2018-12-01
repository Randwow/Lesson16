var calcObj = require('./index');

describe('pow', function () {
    var x, n;

    describe('calculatepow', function () {
        describe('n more than 0', function () {
            test('should return 16 when x = 2, n = 4', function () {
                x = 2;
                n = 4;
                expect(calcObj.calculatepow(x, n)).toEqual(16);
            });

            test('should return 9 when x = 3, n = 2', function () {
                x = 3;
                n = 2;

                expect(calcObj.calculatepow(x, n)).toEqual(9);
            });
        });

        describe('pow equals 0', function () {
            test('should return 0 when x = 0, n = 5', function () {
                x = 0;
                n = 5;

                expect(calcObj.calculatepow(x, n)).toEqual(0);
            });
        });

        describe('pow equals 1', function () {
            test('should return 1 when x = 0, n = 0', function () {
                x = 0;
                n = 0;

                expect(calcObj.calculatepow(x, n)).toEqual(1);
            });
        });

        describe('pow less than 0', function () {
            test('should return 0.5 when x = 2, n = -1', function () {
                x = 2;
                n = -1;

                expect(calcObj.calculatepow(x, n)).toEqual(1);
            });
        });
    });
}); 