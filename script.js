/* eslint-disable no-self-assign */
/* eslint-disable no-param-reassign */
const BODY = document.querySelector('body');
const MAIN = document.createElement('main');
const SECTION = document.createElement('section');
const TEXT_AREA = document.createElement('textarea');
const KEY_BOARD = document.createElement('div');
const TITLE = document.createElement('h1');
const INFO = document.createElement('p');

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
        {
          code: 'Backquote', keyen: '`', keyEn: '~', keyru: 'ё', keyRu: 'Ё',
        },
        {
          code: 'Digit1', keyen: '1', keyEn: '!', keyru: '1', keyRu: '!',
        },
        {
          code: 'Digit2', keyen: '2', keyEn: '@', keyru: '2', keyRu: '"',
        },
        {
          code: 'Digit3', keyen: '3', keyEn: '#', keyru: '3', keyRu: '№',
        },
        {
          code: 'Digit4', keyen: '4', keyEn: '$', keyru: '4', keyRu: ';',
        },
        {
          code: 'Digit5', keyen: '5', keyEn: '%', keyru: '5', keyRu: '%',
        },
        {
          code: 'Digit6', keyen: '6', keyEn: '^', keyru: '6', keyRu: ':',
        },
        {
          code: 'Digit7', keyen: '7', keyEn: '&', keyru: '7', keyRu: '?',
        },
        {
          code: 'Digit8', keyen: '8', keyEn: '*', keyru: '8', keyRu: '*',
        },
        {
          code: 'Digit9', keyen: '9', keyEn: '(', keyru: '9', keyRu: '(',
        },
        {
          code: 'Digit0', keyen: '0', keyEn: ')', keyru: '0', keyRu: ')',
        },
        {
          code: 'Minus', keyen: '-', keyEn: '_', keyru: '-', keyRu: '_',
        },
        {
          code: 'Equal', keyen: '=', keyEn: '+', keyru: '=', keyRu: '+',
        },
        {
          code: 'Backspace',
          keyen: 'Backspace',
          keyEn: 'Backspace',
          keyru: 'Backspace',
          keyRu: 'Backspace',
        }],
      [
        {
          code: 'Tab', keyen: 'Tab', keyEn: 'Tab', keyru: 'Tab', keyRu: 'Tab',
        },
        {
          code: 'KeyQ', keyen: 'q', keyEn: 'Q', keyru: 'й', keyRu: 'Й',
        },
        {
          code: 'KeyW', keyen: 'w', keyEn: 'W', keyru: 'ц', keyRu: 'Ц',
        },
        {
          code: 'KeyE', keyen: 'e', keyEn: 'E', keyru: 'у', keyRu: 'У',
        },
        {
          code: 'KeyR', keyen: 'r', keyEn: 'R', keyru: 'к', keyRu: 'К',
        },
        {
          code: 'KeyT', keyen: 't', keyEn: 'T', keyru: 'е', keyRu: 'Е',
        },
        {
          code: 'KeyY', keyen: 'y', keyEn: 'Y', keyru: 'н', keyRu: 'Н',
        },
        {
          code: 'KeyU', keyen: 'u', keyEn: 'U', keyru: 'г', keyRu: 'Г',
        },
        {
          code: 'KeyI', keyen: 'i', keyEn: 'I', keyru: 'ш', keyRu: 'Ш',
        },
        {
          code: 'KeyO', keyen: 'o', keyEn: 'O', keyru: 'щ', keyRu: 'Щ',
        },
        {
          code: 'KeyP', keyen: 'p', keyEn: 'P', keyru: 'з', keyRu: 'З',
        },
        {
          code: 'BracketLeft', keyen: '[', keyEn: '{', keyru: 'х', keyRu: 'Х',
        },
        {
          code: 'BracketRight', keyen: ']', keyEn: '}', keyru: 'ъ', keyRu: 'Ъ',
        },
        {
          code: 'Backslash',
          keyen: '/',
          keyEn: '|',
          keyru: '\\',
          keyRu: '/',
        },
        {
          code: 'Delete', keyen: 'Del', keyEn: 'Del', keyru: 'Del', keyRu: 'Del',
        }],
      [{
        code: 'CapsLock',
        keyen: 'CapsLock',
        keyEn: 'CapsLock',
        keyru: 'CapsLock',
        keyRu: 'CapsLock',
      },
      {
        code: 'KeyA', keyen: 'a', keyEn: 'A', keyru: 'ф', keyRu: 'Ф',
      },
      {
        code: 'KeyS', keyen: 's', keyEn: 'S', keyru: 'ы', keyRu: 'Ы',
      },
      {
        code: 'KeyD', keyen: 'd', keyEn: 'D', keyru: 'в', keyRu: 'В',
      },
      {
        code: 'KeyF', keyen: 'f', keyEn: 'F', keyru: 'а', keyRu: 'А',
      },
      {
        code: 'KeyG', keyen: 'g', keyEn: 'G', keyru: 'п', keyRu: 'П',
      },
      {
        code: 'KeyH', keyen: 'h', keyEn: 'H', keyru: 'р', keyRu: 'Р',
      },
      {
        code: 'KeyJ', keyen: 'j', keyEn: 'J', keyru: 'о', keyRu: 'О',
      },
      {
        code: 'KeyK', keyen: 'k', keyEn: 'K', keyru: 'л', keyRu: 'Л',
      },
      {
        code: 'KeyL', keyen: 'l', keyEn: 'L', keyru: 'д', keyRu: 'Д',
      },
      {
        code: 'Semicolon', keyen: ';', keyEn: ':', keyru: 'ж', keyRu: 'Ж',
      },
      {
        code: 'Quote', keyen: '\'', keyEn: '"', keyru: 'э', keyRu: 'Э',
      },
      {
        code: 'Enter',
        keyen: 'Enter',
        keyEn: 'Enter',
        keyru: 'Enter',
        keyRu: 'Enter',
      }],
      [{
        code: 'ShiftLeft',
        keyen: 'Shift',
        keyEn: 'Shift',
        keyru: 'Shift',
        keyRu: 'Shift',
      },
      {
        code: 'KeyZ', keyen: 'z', keyEn: 'Z', keyru: 'я', keyRu: 'Я',
      },
      {
        code: 'KeyX', keyen: 'x', keyEn: 'X', keyru: 'ч', keyRu: 'Ч',
      },
      {
        code: 'KeyC', keyen: 'c', keyEn: 'C', keyru: 'с', keyRu: 'С',
      },
      {
        code: 'KeyV', keyen: 'v', keyEn: 'V', keyru: 'м', keyRu: 'М',
      },
      {
        code: 'KeyB', keyen: 'b', keyEn: 'B', keyru: 'и', keyRu: 'И',
      },
      {
        code: 'KeyN', keyen: 'n', keyEn: 'N', keyru: 'т', keyRu: 'Т',
      },
      {
        code: 'KeyM', keyen: 'm', keyEn: 'M', keyru: 'ь', keyRu: 'Ь',
      },
      {
        code: 'Comma', keyen: ',', keyEn: '<', keyru: 'б', keyRu: 'Б',
      },
      {
        code: 'Period', keyen: '.', keyEn: '>', keyru: 'ю', keyRu: 'Ю',
      },
      {
        code: 'Slash', keyen: '/', keyEn: '?', keyru: '.', keyRu: ',',
      },
      {
        code: 'ArrowUp', keyen: '🡡', keyEn: '🡡', keyru: '🡡', keyRu: '🡡',
      },
      {
        code: 'ShiftRight',
        keyen: 'Shift',
        keyEn: 'Shift',
        keyru: 'Shift',
        keyRu: 'Shift',
      }],
      [
        {
          code: 'ControlLeft',
          keyen: 'Ctrl',
          keyEn: 'Ctrl',
          keyru: 'Ctrl',
          keyRu: 'Ctrl',
        },
        {
          code: 'MetaLeft',
          keyen: 'Win',
          keyEn: 'Win',
          keyru: 'Win',
          keyRu: 'Win',
        },
        {
          code: 'AltLeft', keyen: 'Alt', keyEn: 'Alt', keyru: 'Alt', keyRu: 'Alt',
        },
        {
          code: 'Space',
          keyen: 'Space',
          keyEn: 'Space',
          keyru: 'Space',
          keyRu: 'Space',
        },
        {
          code: 'AltRight', keyen: 'Alt', keyEn: 'Alt', keyru: 'Alt', keyRu: 'Alt',
        },
        {
          code: 'ArrowLeft', keyen: '🡠', keyEn: '🡠', keyru: '🡠', keyRu: '🡠',
        },
        {
          code: 'ArrowDown', keyen: '🡣', keyEn: '🡣', keyru: '🡣', keyRu: '🡣',
        },
        {
          code: 'ArrowRight', keyen: '🡢', keyEn: '🡢', keyru: '🡢', keyRu: '🡢',
        },
        {
          code: 'ControlRight',
          keyen: 'Ctrl',
          keyEn: 'Ctrl',
          keyru: 'Ctrl',
          keyRu: 'Ctrl',
        },
      ]];

    this.hotkeys = [
      'Tab',
      'Backspace',
      'CapsLock',
      'Enter',
      'ShiftRight',
      'ShiftLeft',
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'AltRight',
      'Delete',
      'ControlRight',
    ];
  }
}

const btns = new KeyButtons();
const arrOfBtns = [];
const listOfCodes = btns.keycodes.flat();
let lang = 'en';

function createLayout() {
  MAIN.classList.add('main');
  BODY.append(MAIN);
  SECTION.classList.add('section');
  MAIN.append(SECTION);
  TITLE.classList.add('section__title');
  TITLE.innerText = 'Virtual keyboard';
  TEXT_AREA.classList.add('textarea');
  SECTION.append(TITLE);
  SECTION.append(TEXT_AREA);
  KEY_BOARD.classList.add('keyboard');
  SECTION.append(KEY_BOARD);
  INFO.classList.add('info');
  INFO.innerText = 'Клавиатура создана в операционной системе Windows Для переключения языка комбинация: левыe ctrl + alt';
  SECTION.append(INFO);
}

function createKeyBoard() {
  for (let count = 0; count <= 4; count += 1) {
    const ROW = document.createElement('div');
    ROW.classList.add('keyboard__row', `row_${count + 1}`);
    KEY_BOARD.append(ROW);

    for (let i = 0; i < btns.keycodes[count].length; i += 1) {
      const BUTTON = document.createElement('div');
      BUTTON.classList.add('keyboard__btn');
      BUTTON.innerText = btns.keycodes[count][i][`key${lang}`];
      BUTTON.setAttribute('id', `${btns.keycodes[count][i].code}`);

      switch (btns.keycodes[count][i].code) {
        case 'Backspace':
          BUTTON.classList.add('backspace');
          break;
        case 'Delete':
          BUTTON.classList.add('del');
          break;
        case 'Tab':
          BUTTON.classList.add('tab');
          break;
        case 'CapsLock':
          BUTTON.classList.add('caps');
          BUTTON.classList.add('hotkey');
          break;
        case 'Enter':
          BUTTON.classList.add('enter');
          break;
        case 'ShiftLeft':
          BUTTON.classList.add('shift');
          BUTTON.classList.add('hotkey');
          break;
        case 'ShiftRight':
          BUTTON.classList.add('shift');
          BUTTON.classList.add('hotkey');
          break;
        case 'ControlLeft':
          BUTTON.classList.add('ctrl_left');
          BUTTON.classList.add('hotkey');
          break;
        case 'ControlRight':
          BUTTON.classList.add('ctrl_right');
          BUTTON.classList.add('hotkey');
          break;
        case 'MetaLeft':
          BUTTON.classList.add('win');
          BUTTON.classList.add('hotkey');
          break;
        case 'AltLeft':
          BUTTON.classList.add('alt_left');
          BUTTON.classList.add('hotkey');
          break;
        case 'AltRight':
          BUTTON.classList.add('alt_right');
          BUTTON.classList.add('hotkey');
          break;
        case 'Space':
          BUTTON.classList.add('space');
          break;
        default:
          break;
      }
      ROW.append(BUTTON);
    }
  }
}

createLayout();
createKeyBoard();

function changeLang() {
  if (lang === 'en') {
    lang = 'ru';
  } else lang = 'en';

  arrOfBtns.forEach((btn) => {
    btns.keycodes.forEach((row) => {
      row.forEach((item) => {
        if (item.code === btn.id) {
          btn.innerText = item[`key${lang}`];
        }
      });
    });
  });
}

KEY_BOARD.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('keyboard__btn') && !e.target.classList.contains('caps')) {
    e.target.classList.add('active');
    if (e.target.classList.contains('tab')) {
      TEXT_AREA.value += '    ';
    } else if (e.target.classList.contains('space')) {
      TEXT_AREA.value += ' ';
    } else if (e.target.classList.contains('backspace')) {
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.value.length - 1);
    } else if (e.target.classList.contains('del')) {
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.value.length - 1);
    } else if (e.target.classList.contains('enter')) {
      TEXT_AREA.value += '\n';
    } else if (e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
      arrOfBtns.forEach((btn) => {
        listOfCodes.forEach((item) => {
          if (item.code === btn.id) {
            btn.innerText = item[`key${lang[0].toLocaleUpperCase() + lang[1]}`];
            if (document.querySelector('.caps').classList.contains('active')) {
              if (!btns.hotkeys.includes(btn.id)) {
                btn.innerText = btn.innerText.toLowerCase();
              }
            }
          }
        });
      });
    } else if (e.target.id === 'ControlLeft' && document.querySelector('.alt_left')
      .classList.contains('active')) {
      changeLang();
    } else if (e.target.id === 'AltLeft' && document.querySelector('.ctrl_left')
      .classList.contains('active')) {
      changeLang();
    } else if (e.target.classList.contains('hotkey')) {
      TEXT_AREA.value = TEXT_AREA.value;
    } else {
      TEXT_AREA.value += `${e.target.innerText}`;
    }
  } else if (e.target.classList.contains('caps')) {
    document.querySelector('.caps').classList.toggle('active');
    if (document.querySelector('.caps').classList.contains('active')) {
      document.querySelectorAll('.keyboard__btn').forEach((btn) => {
        if (!btns.hotkeys.includes(btn.id)) {
          btn.innerText = btn.innerText.toUpperCase();
        }
        if (document.querySelector('.shift').classList.contains('active')) {
          if (!btns.hotkeys.includes(btn.id)) {
            btn.innerText = btn.innerText.toLowerCase();
          }
        }
      });
    } else {
      document.querySelectorAll('.keyboard__btn').forEach((btn) => {
        if (!btns.hotkeys.includes(btn.id)) {
          btn.innerText = btn.innerText.toLowerCase();
        }
        if (document.querySelector('.shift').classList.contains('active')) {
          if (!btns.hotkeys.includes(btn.id)) {
            btn.innerText = btn.innerText.toUpperCase();
          }
        }
      });
    }
  }
});

KEY_BOARD.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('keyboard__btn') && !e.target.classList.contains('caps')) {
    e.target.classList.remove('active');
  }
  if (e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
    arrOfBtns.forEach((btn) => {
      listOfCodes.forEach((item) => {
        if (item.code === btn.id) {
          btn.innerText = item[`key${lang}`];
          if (document.querySelector('.caps').classList.contains('active')) {
            if (!btns.hotkeys.includes(btn.id)) {
              btn.innerText = btn.innerText.toUpperCase();
            }
          }
        }
      });
    });
  }
});

document.querySelectorAll('.keyboard__row').forEach((row) => {
  arrOfBtns.push(...Array.from(row.children));
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (document.querySelector(`#${e.code}`)) {
    if (e.code !== 'CapsLock') {
      document.querySelector(`#${e.code}`).classList.add('active');
    }
    if (e.code === 'Tab') {
      TEXT_AREA.value += '    ';
    } else if (e.code === 'Space') {
      TEXT_AREA.value += ' ';
    } else if (e.code === 'Backspace') {
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.value.length - 1);
    } else if (e.code === 'Delete') {
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.value.length - 1);
    } else if (e.code === 'Enter') {
      TEXT_AREA.value += '\n';
    } else if (!document.getElementById(`${e.code}`).classList.contains('hotkey')) {
      TEXT_AREA.value += `${document.getElementById(`${e.code}`).innerText}`;
    } else if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
      arrOfBtns.forEach((btn) => {
        listOfCodes.forEach((item) => {
          if (item.code === btn.id) {
            btn.innerText = item[`key${lang[0].toLocaleUpperCase() + lang[1]}`];
            if (document.querySelector('.caps').classList.contains('active')) {
              if (!btns.hotkeys.includes(btn.id)) {
                btn.innerText = btn.innerText.toLowerCase();
              }
            }
          }
        });
      });
    } else if (e.code === 'CapsLock') {
      document.querySelector('.caps').classList.toggle('active');
      if (document.querySelector('.caps').classList.contains('active')) {
        document.querySelectorAll('.keyboard__btn').forEach((btn) => {
          if (!btns.hotkeys.includes(btn.id)) {
            btn.innerText = btn.innerText.toUpperCase();
          }
          if (document.querySelector('.shift').classList.contains('active')) {
            if (!btns.hotkeys.includes(btn.id)) {
              btn.innerText = btn.innerText.toLowerCase();
            }
          }
        });
      } else {
        document.querySelectorAll('.keyboard__btn').forEach((btn) => {
          if (!btns.hotkeys.includes(btn.id)) {
            btn.innerText = btn.innerText.toLowerCase();
          }
          if (document.querySelector('.shift').classList.contains('active')) {
            if (!btns.hotkeys.includes(btn.id)) {
              btn.innerText = btn.innerText.toUpperCase();
            }
          }
        });
      }
    } else if (e.code === 'ControlLeft' && document.querySelector('.alt_left')
      .classList.contains('active')) {
      changeLang();
    } else if (e.code === 'AltLeft' && document.querySelector('.ctrl_left')
      .classList.contains('active')) {
      changeLang();
    }
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.code !== 'CapsLock') {
    if (document.querySelector(`#${e.code}`)) {
      document.querySelector(`#${e.code}`).classList.remove('active');
    }
  }
  if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
    arrOfBtns.forEach((btn) => {
      listOfCodes.forEach((item) => {
        if (item.code === btn.id) {
          btn.innerText = item[`key${lang}`];
          if (document.querySelector('.caps').classList.contains('active')) {
            if (!btns.hotkeys.includes(btn.id)) {
              btn.innerText = btn.innerText.toUpperCase();
            }
          }
        }
      });
    });
  }
});
