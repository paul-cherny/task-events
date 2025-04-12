/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);
    button.addEventListener('click', () => button.remove());
}

/*
  2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
     Функция выводит этот массив в виде маркированного списка внутри тега body.
     При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', item);
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

/*
  3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

     <a href="https://tensor.ru/">tensor</a>

     При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
     При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';
    document.body.append(link);
    let clicked = false;
    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ' ' + link.href;
            clicked = true;
        }
    });
}

/*
  4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

     <ul>
        <li>Пункт</li>
     </ul>
     <button>Добавить пункт</button>

     При клике по элементу li ему в конец текста добавляется восклицательный знак.
     При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
     Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.appendChild(li);
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.append(ul, button);
    function handleLiClick(event) {
        event.target.textContent += '!';
    }
    li.addEventListener('click', handleLiClick);
    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        newLi.addEventListener('click', handleLiClick);
        ul.appendChild(newLi);
    });
}
