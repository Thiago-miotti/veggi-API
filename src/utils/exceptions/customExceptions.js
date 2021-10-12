const { ERROR_TYPES } = require('@pedromiotti/exerror');

const CustomExceptions = {
    MISSING_INFORMATION: {
        type: ERROR_TYPES.CLIENT,
        code: "MISSING_INFORMATION",
        message: "Please, Fill all the information required.",
        statusCode: 400,
    },
    USER_NOT_FOUND: {
        type: ERROR_TYPES.CLIENT,
        code: "USER_NOT_FOUND",
        message: "This user does not exist.",
        statusCode: 400,
    }
};

module.exports = { CustomExceptions };