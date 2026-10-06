# 👥 KeenKeeper

KeenKeeper is a friendship management web application that helps users keep track of their friends and stay connected. Users can view friend details, record calls, texts, and video interactions, and see their friendship activity through a timeline and analytics.

## 🚀 Live Demo

Coming soon

## 🛠️ Technologies Used

* Next.js
* React
* Tailwind CSS
* Recharts
* Lucide React
* React Hot Toast
* JavaScript
* JSON

## ✨ Key Features

### 👥 Friend Management

* View all friends in a responsive card layout
* View detailed information about each friend
* See contact status, tags, bio, email, and relationship goals

### ⚡ Quick Check-In

* Record Call, Text, and Video interactions
* Automatically add interactions to the Timeline
* Show toast notifications after an interaction is recorded

### 📊 Friendship Analytics

* View interaction statistics
* Display Call, Text, and Video activity using a responsive Pie Chart
* Show an empty state when there are no interactions

### 📜 Timeline

* View the history of all friend interactions
* Filter interactions by Call, Text, and Video
* Display the interaction date and friend name

### 📱 Responsive Design

* Mobile-friendly
* Tablet-friendly
* Desktop-friendly

## 📂 Project Structure

```text
src/
├── app/
│   ├── friends/
│   │   └── [id]/
│   ├── stats/
│   ├── timeline/
│   ├── not-found.jsx
│   └── loading.jsx
│
├── components/
│   ├── Friends
│   ├── Filter
│   ├── TimeLine
│   ├── QuickCheck
│   └── Footer
│
├── context/
│   └── InteractionContext
│
└── hooks/
    └── useInteractions
```

## 📌 Main Routes

| Route           | Description                |
| --------------- | -------------------------- |
| `/`             | Home page with all friends |
| `/friends/[id]` | Friend details page        |
| `/timeline`     | Interaction timeline       |
| `/stats`        | Friendship analytics       |

## 🎯 Project Goal

The goal of KeenKeeper is to provide a simple and friendly way to keep track of important relationships and maintain regular communication with friends.

## 👨‍💻 Developer

Built as a frontend development project using Next.js and React.
