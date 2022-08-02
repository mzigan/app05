## Описание

На этом занятии разбирается программа, где Электрон в отличии от предыдущего случая использует локальный html-файл.
В программе моделируется поведение молекул идеального газа. 
Идея взята из книги Максима Мозгового ["Занимательное программирование"](https://obuchalka.org/2011071657507/zanimatelnoe-programmirovanie-samouchitel-mozgovoi-m.html).

## Приборка

Закройте редактор, командную строку и электрон, если они открыты от предыдущего урока.  
Это необходимо, чтобы не было путанницы с каталогами. Открытый редактор может остаться в старой папке, а работать будем в новой и т.д.  
Поэтому в начале каждого нового урока закрываем все программы и начинаем каждый раз с чистого рабочего стола.

## Подготовка

Откройте командную строку и наберите последовательно следующие команды (каждую строчку заканчивайте клавишей Enter) :

```sh
git clone https://github.com/mtraining-2022/app01.git
cd app01
npm install
```

Исполнение команды **npm install** может занять какое-то время, дождитесь завершения.  
После этого запускаем редактор: 

```sh
code .
```

Обратите внимание на точку через пробел в команде, она обязательна.   
В редакторе откройте терминал (если не был открыт) через меню "Вид-Терминал" (или "View-Terminal").   
Дальнейшие команды выполняем в терминале редактора, командную строку можно закрыть.

## Запуск

Наберите в терминале команду:

```sh
npm start
```

Запустится Электрон с анимацией молекул идеального газа. 
Последовательность инициализации программы происходит поэтапно:
1. В первую очередь Электрон исполняет файл **main.js**.
2. В файле **main.js** происходит создание главного окна приложения и загрузка в него файла **index.html**.
3. Далее по цепочке файл **index.html** загружает файл стилей **style.css** и файл скрипта **app.js**, после программа начинает работать.
Обратите внимание, что все эти файлы располагаются в каталоге **src**. Разработка приложения происходит только в этом каталоге.
Изучите содержимое файлов, особенно **app.js**

## Создание дистрибутива

Выполните команду:

```sh
npm run make:win
```

Дождитесь выполнения команды. После этого в каталоге **out\release** появится файл дистрибутива **Molecules Setup 0.0.1.exe**.   
В левой панели редактора найдите этот файл, нажмите на него **правой** кнопкой мыши и в появившемся меню выберите "Показать в проводнике" (или "Reveal in File Explorer").   
Откроется проводник, указывающий на файл дистрибутива. Запустите его, программа установится на компьютер и на рабочем столе появится значок. 
Попробуйте запустить приложение через значок.
Далее, если необходимо, в панели управления Виндовс "Параметры-Приложения" вы можете удалить созданную и установленную нами программу.

## Резюме

В этом уроке мы познакомились с Электроном, а также с базовыми навыками работы в командной строке, редакторе и терминале, прошли полный цикл создания приложения от подготовки необходимого окружения до создания полноценного дистрибутива.



npm install sqlite3 --build-from-source --runtime=electron --target=19.0.9 --dist-url=https://electronjs.org/headers


    "scripts": {
        "postinstall": "install-app-deps"
     },
