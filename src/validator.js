export default class Validator {
    static phoneTransform(phone) {
      let resultPhone = phone;
      if (phone[0] === '8') {
        resultPhone = resultPhone.replace(/8/, '+7');
      }
      return resultPhone.replace(/[()\s\-_]/g, '');
    }
  }