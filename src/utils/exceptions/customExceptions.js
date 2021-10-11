const { ERROR_TYPES } = require('@pedromiotti/exerror');

const CustomExceptions = {
    MISSING_INFORMATION: {
        type: ERROR_TYPES.CLIENT,
        code: "MISSING_INFORMATION",
        message: "Please, Fill all the information required.",
        statusCode: 400,
    }
};

module.exports = { CustomExceptions };