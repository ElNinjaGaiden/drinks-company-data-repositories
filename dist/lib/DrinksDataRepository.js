"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrinksDataRepository = /** @class */ (function () {
    function DrinksDataRepository() {
    }
    DrinksDataRepository.prototype.getDrinks = function () {
        return Promise.resolve([
            {
                name: 'Cola Cola',
            },
            {
                name: 'Fantax',
            },
            {
                name: '77Up',
            },
        ]);
    };
    return DrinksDataRepository;
}());
exports.default = DrinksDataRepository;
