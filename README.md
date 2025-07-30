<h1 align="center" style="font-size:2.5em;">🪄 React Dropdown Menu</h1>

A React Dropdown Menu UI system in **React**/**Next.js**.  
React Dropdown Menu на **React**/**Next.js**.

![demo](./example.gif)

---

## ✨ Features / Возможности

- 🧩 **Composable**: Wrap any component with a hover-triggered panel  
  🧩 **Композиция**: Оберните любой компонент в панель, активируемую при наведении
- ⏱ **Customizable hide delay**  
  ⏱ **Настраиваемая задержка скрытия**
- 🧠 **Global state** via React Context  
  🧠 **Глобальное состояние** через React Context
- 🎬 **Smooth animations** using `framer-motion`  
  🎬 **Плавная анимация** с использованием `framer-motion`

---

## 📦 Installation / Установка

Install required dependencies:  
Установите зависимости:

```bash
npm install framer-motion clsx
```

---

## 🧠 Usage / Использование

### 1. Wrap your app in `HoverLayout`

### 1. Оберните приложение в `HoverLayout`

```tsx
import { HoverLayout } from "./hover-layout";

function App() {
  return (
    <HoverLayout hideDelay={800}>
      {/* HoverItems go here / Здесь размещаются HoverItem */}
    </HoverLayout>
  );
}
```

### 2. Add `HoverItem` components

### 2. Добавьте компоненты `HoverItem`

```tsx
import { HoverItem } from "./hover-item";

<HoverItem id="example" trigger={<button>Hover me</button>}>
  <div>Hovered content here</div>
</HoverItem>;
```

---

## 🛠 Customization / Настройка

- Add custom styles via the `className` prop  
  Добавьте стили через проп `className`
- Modify animation/timing in the component files  
  Измените анимацию и тайминги в самих файлах компонентов

---

## 📁 File Structure / Структура файлов

- `hover-layout.tsx`: Manages global hover state  
  Управляет глобальным состоянием ховера
- `hover-item.tsx`: Display logic for hover-triggered panels  
  Отображает панель при наведении

---

## 💡 Use Cases / Примеры использования

- Multi-level hover navigation menus  
  Многоуровневые меню навигации
- Tooltips and hover cards  
  Подсказки и всплывающие карточки
- Product previews on hover  
  Превью товаров при наведении

---

## 🧪 Example / Пример

```tsx
<HoverItem id="user" trigger={<span>Пользователь</span>}>
  <div className="flex gap-4">
    <img src="/avatar.png" alt="Avatar" className="w-12 h-12 rounded-full" />
    <div>
      <h4>Иван Иванов</h4>
      <p>Открыть профиль</p>
    </div>
  </div>
</HoverItem>
```
