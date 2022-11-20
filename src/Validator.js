const { readMoving } = require("./InputView");

const Validator = {
  validateInput(number) {
    const check = /^[0-9]+$/;
    console.log(number);
    if (3 > number || number > 20 || !check.test(number)) {
      throw "[ERROR] 3 이상 20 이하의 숫자만 입력 가능합니다.";
    }
  },

  validateMoveInput(move) {
    if (move !== "U" && move !== "D") {
      throw "[ERROR] 입력값은 U 또는 D 만 가능합니다.";
    }
  },

  validateRetryInput(retryInput) {
    if (retryInput !== "R" && retryInput !== "Q") {
      throw "[ERROR] 입력값은 R 또는 Q 만 가능합니다.";
    }
  },

  isRepeat(moveInput, mainBridge, bridgeGame) {
    try {
      Validator.validateMoveInput(moveInput);
    } catch (error) {
      Console.print(error);
      readMoving(mainBridge, bridgeGame);
      return;
    }
  },
};

module.exports = Validator;
