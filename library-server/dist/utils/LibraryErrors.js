"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDoesNotExistError = exports.InvalidUsernameOrPasswordError = exports.UnableToSaveUserError = exports.UserDoesNotExistError = void 0;
class UserDoesNotExistError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UserDoesNotExistError = UserDoesNotExistError;
class UnableToSaveUserError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UnableToSaveUserError = UnableToSaveUserError;
class InvalidUsernameOrPasswordError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidUsernameOrPasswordError = InvalidUsernameOrPasswordError;
class BookDoesNotExistError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.BookDoesNotExistError = BookDoesNotExistError;
