# 📈 ThndrTask App

This is a React Native application that allows users to **search for stock tickers** and view them in a grid layout.  
It uses an API function (`getTickers`) to fetch ticker information and displays results in a scrollable list.

---

## 🚀 Features

- 🔍 **Search** for tickers by keyword
- 📊 **Infinite scrolling** – loads more results when reaching the end
- ⚡ **Fast rendering** with `FlatList`
- 🎛️ **Reusable components** (`SearchInput`, `TickerCard`)
- ⏳ **Loading indicators** while fetching data
- ❌ **Error handling** with alerts and messages
- 🖼️ **Custom native splash screen** implemented in both iOS and Android

---

## 📂 Project Structure

```
src/
 ├── api/
 │   └── getTickers.ts      # API function to fetch tickers
 ├── components/
 │   ├── SearchInput.tsx    # Search input component
 │   └── TickerCard.tsx     # Card component for displaying a ticker
 ├── types/
 │   └── TickerInfo.ts      # Type definition for ticker data
 └── screens/
     └── Home.tsx           # Main screen (this file)
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/aayman97/ThndrTask.git
cd ticker-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. iOS setup (Mac only)

```bash
npx pod-install
npx react-native run-ios
```

### 4. Android setup

```bash
npx react-native run-android
```

---

## 📖 Usage

1. Open the app
2. Enter a **keyword** in the search bar (e.g., `AAPL`, `TSLA`)
3. View results in a **2-column grid**
4. Scroll down to **load more tickers**

---

## 🖼️ Splash Screen

This project includes a **custom native splash screen**:

- **Android**: Implemented using a `SplashActivity` that runs before the `MainActivity` starts.
- **iOS**: Implemented using a **Launch Screen Storyboard**.

This ensures a smooth and native app startup experience on both platforms.

---

## ⚡ Technologies Used

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [FlatList](https://reactnative.dev/docs/flatlist) for optimized rendering
- [Axios / Fetch API] (depending on how `getTickers` is implemented)

---

## 🧪 Testing

This app is test-ready with `testID` props for components:

- `loader` → initial loading spinner
- `ticker-list` → list of tickers
- `ticker-card` → individual ticker card
- `end-loader` → infinite scroll loader

Use **Jest + React Native Testing Library** to write automated tests.

---

## 📌 Notes

- Make sure your API (`getTickers`) is correctly set up with valid credentials or endpoints
- If no results appear, double-check API access and network connectivity

---
