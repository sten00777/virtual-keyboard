const BODY = document.querySelector('body');
const MAIN = document.createElement('main');
const SECTION = document.createElement('section');
const TEXT_AREA = document.createElement('textarea');
const KEY_BOARD = document.createElement('div');

class KeyButtons {
  constructor() {
    this.keylist = [
      'Backquote',
      'Digit1',
      'Digit2',
      'Digit3',
      'Digit4',
      'Digit5',
      'Digit6',
      'Digit7',
      'Digit8',
      'Digit9',
      'Digit0',
      'Minus',
      'Equal',
      'Backspace',
      'Tab',
      'KeyQ',
      'KeyW',
      'KeyE',
      'KeyR',
      'KeyT',
      'KeyY',
      'KeyU',
      'KeyI',
      'KeyO',
      'KeyP',
      'BracketLeft',
      'BracketRight',
      'Backslash',
      'CapsLock',
      'KeyA',
      'KeyS',
      'KeyD',
      'KeyF',
      'KeyG',
      'KeyH',
      'KeyJ',
      'KeyK',
      'KeyL',
      'Semicolon',
      'Quote',
      'Enter',
      'ShiftLeft',
      'KeyZ',
      'KeyX',
      'KeyC',
      'KeyV',
      'KeyB',
      'KeyN',
      'KeyM',
      'Comma',
      'Period',
      'Slash',
      'ShiftRight',
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'AltRight',
      'ControlRight',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ];

    this.keycodes = [
      [
        { code: '`', keyen: '~', keyEn: '~', keyru: 'ё', keyRu: 'ё' },
        { code: '1', keyen: '1', keyEn: '1', keyru: '1', keyRu: '1' },
        { code: '2', keyen: '2', keyEn: '2', keyru: '2', keyRu: '2' },
        { code: '3', keyen: '3', keyEn: '3', keyru: '3', keyRu: '3' },
        { code: '4', keyen: '4', keyEn: '4', keyru: '4', keyRu: '4' },
        { code: '5', keyen: '5', keyEn: '5', keyru: '5', keyRu: '5' },
        { code: '6', keyen: '6', keyEn: '6', keyru: '6', keyRu: '6' },
        { code: '7', keyen: '7', keyEn: '7', keyru: '7', keyRu: '7' },
        { code: '8', keyen: '8', keyEn: '8', keyru: '8', keyRu: '8' },
        { code: '9', keyen: '9', keyEn: '9', keyru: '9', keyRu: '9' },
        { code: '0', keyen: '0', keyEn: '0', keyru: '0', keyRu: '0' },
        { code: '-', keyen: '-', keyEn: '-', keyru: '-', keyRu: '-' },
        { code: '=', keyen: '=', keyEn: '=', keyru: '=', keyRu: '=' },
        {
          code: 'BACKSPACE',
          keyen: 'BACKSPACE',
          keyEn: 'BACKSPACE',
          keyru: 'BACKSPACE',
          keyRu: 'BACKSPACE',
        },],
      [
        { code: 'TAB', keyen: 'TAB', keyEn: 'TAB', keyru: 'TAB', keyRu: 'TAB' },
        { code: 'q', keyen: 'q', keyEn: 'Q', keyru: 'й', keyRu: 'Й' },
        { code: 'w', keyen: 'w', keyEn: 'W', keyru: 'ц', keyRu: 'Ц' },
        { code: 'e', keyen: 'e', keyEn: 'E', keyru: 'у', keyRu: 'У' },
        { code: 'r', keyen: 'r', keyEn: 'R', keyru: 'к', keyRu: 'К' },
        { code: 't', keyen: 't', keyEn: 'T', keyru: 'е', keyRu: 'Е' },
        { code: 'y', keyen: 'y', keyEn: 'Y', keyru: 'н', keyRu: 'Н' },
        { code: 'u', keyen: 'u', keyEn: 'U', keyru: 'г', keyRu: 'Г' },
        { code: 'i', keyen: 'i', keyEn: 'I', keyru: 'ш', keyRu: 'Ш' },
        { code: 'o', keyen: 'o', keyEn: 'O', keyru: 'щ', keyRu: 'Щ' },
        { code: 'p', keyen: 'p', keyEn: 'P', keyru: 'з', keyRu: 'З' },
        { code: '[', keyen: '[', keyEn: '[', keyru: 'х', keyRu: 'Х' },
        { code: ']', keyen: ']', keyEn: ']', keyru: 'ъ', keyRu: 'Ъ' },
        {
          code: '/'.match(/\//),
          keyen: '/'.match(/\//),
          keyEn: '/'.match(/\//),
          keyru: '/'.match(/\//),
          keyRu: '/'.match(/\//),
        },],
      [{
        code: 'CAPSLOCK',
        keyen: 'CAPSLOCK',
        keyEn: 'CAPSLOCK',
        keyru: 'CAPSLOCK',
        keyRu: 'CAPSLOCK',
      },
      { code: 'a', keyen: 'a', keyEn: 'A', keyru: 'ф', keyRu: 'Ф' },
      { code: 's', keyen: 's', keyEn: 'S', keyru: 'ы', keyRu: 'Ы' },
      { code: 'd', keyen: 'd', keyEn: 'D', keyru: 'в', keyRu: 'В' },
      { code: 'f', keyen: 'f', keyEn: 'F', keyru: 'а', keyRu: 'А' },
      { code: 'g', keyen: 'g', keyEn: 'G', keyru: 'п', keyRu: 'П' },
      { code: 'h', keyen: 'h', keyEn: 'H', keyru: 'р', keyRu: 'Р' },
      { code: 'j', keyen: 'j', keyEn: 'J', keyru: 'о', keyRu: 'О' },
      { code: 'k', keyen: 'k', keyEn: 'K', keyru: 'л', keyRu: 'Л' },
      { code: 'l', keyen: 'l', keyEn: 'L', keyru: 'д', keyRu: 'Д' },
      { code: ';', keyen: ';', keyEn: ';', keyru: 'ж', keyRu: 'Ж' },
      { code: '""', keyen: '""', keyEn: '""', keyru: 'э', keyRu: 'Э' },
      {
        code: 'ENTER',
        keyen: 'ENTER',
        keyEn: 'ENTER',
        keyru: 'ENTER',
        keyRu: 'ENTER',
      },],
      [ {
        code: 'SHIFT',
        keyen: 'SHIFT',
        keyEn: 'SHIFT',
        keyru: 'SHIFT',
        keyRu: 'SHIFT',
      },
      { code: 'z', keyen: 'z', keyEn: 'Z', keyru: 'я', keyRu: 'Я' },
      { code: 'x', keyen: 'x', keyEn: 'X', keyru: 'ч', keyRu: 'Ч' },
      { code: 'c', keyen: 'c', keyEn: 'C', keyru: 'с', keyRu: 'С' },
      { code: 'v', keyen: 'v', keyEn: 'V', keyru: 'м', keyRu: 'М' },
      { code: 'b', keyen: 'b', keyEn: 'B', keyru: 'и', keyRu: 'И' },
      { code: 'n', keyen: 'n', keyEn: 'N', keyru: 'т', keyRu: 'Т' },
      { code: 'm', keyen: 'm', keyEn: 'M', keyru: 'ь', keyRu: 'Ь' },
      { code: ',', keyen: ',', keyEn: ',', keyru: 'б', keyRu: 'Б' },
      { code: '.', keyen: '.', keyEn: '.', keyru: 'ю', keyRu: 'Ю' },
      { code: '/', keyen: '/', keyEn: '/', keyru: ',', keyRu: ',' },
      {
        code: 'SHIFT',
        keyen: 'SHIFT',
        keyEn: 'SHIFT',
        keyru: 'SHIFT',
        keyRu: 'SHIFT',
      },],
      [
        {
          code: 'CTRL',
          keyen: 'CTRL',
          keyEn: 'CTRL',
          keyru: 'CTRL',
          keyRu: 'CTRL',
        },
        {
          code: 'window',
          keyen: 'window',
          keyEn: 'window',
          keyru: 'window',
          keyRu: 'window',
        },
        { code: 'ALT', keyen: 'ALT', keyEn: 'ALT', keyru: 'ALT', keyRu: 'ALT' },
        {
          code: 'SPACE',
          keyen: 'SPACE',
          keyEn: 'SPACE',
          keyru: 'SPACE',
          keyRu: 'SPACE',
        },
        { code: 'ALT', keyen: 'ALT', keyEn: 'ALT', keyru: 'ALT', keyRu: 'ALT' },
        {
          code: 'CTRL',
          keyen: 'CTRL',
          keyEn: 'CTRL',
          keyru: 'CTRL',
          keyRu: 'CTRL',
        },
        { code: '🡡', keyen: '🡡', keyEn: '🡡', keyru: '🡡', keyRu: '🡡' },
        { code: '🡣', keyen: '🡣', keyEn: '🡣', keyru: '🡣', keyRu: '🡣' },
        { code: '🡠', keyen: '🡠', keyEn: '🡠', keyru: '🡠', keyRu: '🡠' },
        { code: '🡢', keyen: '🡢', keyEn: '🡢', keyru: '🡢', keyRu: '🡢' },
      ]];
  }


}

const btns = new KeyButtons();
console.log(btns);

function createLayout() {
  MAIN.classList.add('main');
  BODY.append(MAIN);
  SECTION.classList.add('section');
  MAIN.append(SECTION);
  TEXT_AREA.classList.add('textarea');
  SECTION.append(TEXT_AREA);
  KEY_BOARD.classList.add('keyboard');
  SECTION.append(KEY_BOARD);
}

function createKeyBoard() {
  for(let count = 0; count <= 4; count++) {
    const ROW = document.createElement('div');
    ROW.classList.add('keyboard__row', `row_${count + 1}`);
    KEY_BOARD.append(ROW);

    for (let i = 0; i < btns.keycodes[count].length; i++) {
      const BUTTON = document.createElement('div');
      BUTTON.classList.add('keyboard__btn');
      BUTTON.innerText = btns.keycodes[count][i].keyEn;
      ROW.append(BUTTON);
    }
  }
}

createLayout();
createKeyBoard();