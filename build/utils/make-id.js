module.exports = (text) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[\/\\\+\(\)'":;\.\,\!\?\<\>= _#$*&`]/g, ' ')
    .trim()
    .replace(/[ ]{2,}/g, ' ')
    .replace(/ /g, '-');
};
