# React_Payment

#### Тестовый проект по оплате телефона

SPA приложение, развернуть сайт на github pages затруднительно (является хостингом статики). Используется хостинг google firebase.

Ссылка на проект: https://react-66c21.web.app/


![](react-app/public/images/screenshot.png)

## Технологический стек:
- React
- Redux
- MaterialUI

## Дополнительные зависимости:
- "react-form-error": "^1.1.1"
- "react-hook-form": "^7.29.0"
- "react-input-mask": "^2.0.4"
- "react-redux": "^7.2.8"
- "react-router-dom": "^6.2.2"
- "react-scripts": "5.0.0"
- "react-text-mask": "^5.4.3"
- "redux": "^4.1.2"
- "redux-devtools-extension": "^2.13.9"

## Рефакторинг:
Исполнить качественный рефакторинг не удалось. Но есть варианты по обновлению кода, согласно стандарту ES6.

- Используем let и const, вместо var
- Обновляем функции, используя стрелочные функции

Корректный, готовый вариант решения задачи взят с интернета:

```
    function func(s, a, b)
{
    return Math.max( s.lastIndexOf(a), s.lastIndexOf(b));
}
```


