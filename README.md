# 🌙 Smart Dark Mode — Chrome Extension

A simple, effective dark mode Chrome extension that applies a global dark theme to all websites **without breaking layouts or content**. It uses intelligent CSS filters and saves your dark mode preferences per website.

---

## ⚙️ Features

- 🌓 Toggle dark mode on any website with a single click  
- 🧠 Uses `invert()` + `hue-rotate()` CSS filters to avoid layout messiness  
- 💾 Remembers which websites you enabled dark mode for using `chrome.storage.sync`  
- 📷 Preserves colors for images, videos, and canvas elements  
- ⚡ Lightweight and fast — no unnecessary overhead  
- 🧩 Built on Manifest V3 (latest Chrome Extension standard)

---

## 📸 Screenshots

| Normal Mode | Dark Mode |
|-------------|------------|
| ![Light Screenshot](./screenshot-light.png) | ![Dark Screenshot](./screenshot-dark.png) |

---

## 🛠️ How It Works

- Injects a CSS filter into the webpage when enabled  
- Stores the website domain in Chrome storage  
- Automatically re-applies dark mode when you revisit that site  
- Does not interfere with page functionality or structure

---

## 📦 Installation (Unpacked)

1. Clone or download this repository
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the extension folder

---

## 🚀 Publish on Chrome Web Store

Want to publish it yourself? Follow [this guide](https://developer.chrome.com/docs/webstore/publish/) to release your extension publicly.

---

## 🧠 Why Not Hard-Coded Themes?

Hard-coded themes can break layouts or miss dynamic content. This filter-based approach adapts to all sites **without requiring per-site fixes**, ensuring a consistent and clean dark experience.

---

## 📁 File Structure

