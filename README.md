# 📝 Todo Application

A simple, functional Todo app built with Next.js featuring unique IDs, live counts, persistence, and a single-completion constraint.

## 🎥 Demo Video

**Screen Recording (20-30 min):** [https://drive.google.com/file/d/1klqzh2jfeWNG-IrZG-rZxDflenULo62x/view?usp=sharing](https://drive.google.com/file/d/1klqzh2jfeWNG-IrZG-rZxDflenULo62x/view?usp=sharing)

> Camera ON | Screen Visible | Live Coding | No Cuts

## ✨ Features

- ✅ **Add Todo** - Create new todos with unique IDs
- ✅ **Delete Todo** - Remove todos from the list
- ✅ **Mark Complete** - Toggle completion status
- ✅ **Unique IDs** - Each todo has a timestamp-based unique identifier
- ✅ **Live Counts** - Real-time display of total, completed, and pending todos
- ✅ **Persistence** - Todos survive page refresh using localStorage
- ✅ **Single Completion Constraint** - Only ONE todo can be marked as completed at a time

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** JavaScript
- **Styling:** Inline CSS
- **Storage:** localStorage

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/Sufalthakre18/todo-app.git

# Navigate to project
cd todo-test

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Main Interface
- Three stat cards showing counts
- Input field for adding todos
- List of todos with checkboxes and delete buttons

### Key Functionality
- **Single Completion:** When you mark a todo as complete, any previously completed todo automatically becomes unchecked
- **Persistence:** All todos are saved to localStorage and restored on page reload
- **Unique IDs:** Each todo displays its unique timestamp-based ID

## 💡 Implementation Details

### State Management
```javascript
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
```

### Unique ID Generation
```javascript
id: Date.now() 
```

### Single Completion Logic
```javascript
const toggleComplete = (id) => {
  setTodos(todos.map(todo => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : false
  })));
};
```

When marking a todo as complete, all other todos are set to `completed: false`, ensuring only one can be completed at a time.

### Persistence
```javascript
// Load on mount
useEffect(() => {
  const saved = localStorage.getItem('todos');
  if (saved) setTodos(JSON.parse(saved));
}, []);

// Save on change
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

## 🎯 Assignment Requirements

| Requirement | Status |
|-------------|--------|
| Add todo | ✅ Complete |
| Delete todo | ✅ Complete |
| Mark as completed | ✅ Complete |
| Unique ID for each todo | ✅ Complete |
| Display total todos count | ✅ Complete |
| Display completed todos count | ✅ Complete |
| Display pending todos count | ✅ Complete |
| Persist after page refresh | ✅ Complete |
| Single completion constraint | ✅ Complete |
| Live counts update | ✅ Complete |

## 📝 Constraint Implementation

**Requirement:** Only one todo can be marked as completed at a time.

**Solution:** Modified the `toggleComplete` function to automatically uncheck all other todos when marking one as complete. This was implemented by mapping through the todos array and setting `completed: false` for all todos except the one being toggled.

## 👤 Author

**Name:** [Sufal Thakre]  
**Email:** [sufalthakre4@gmail.com]  
**Phone:** [7748809606]  
**GitHub:** [@Sufalthakre18](https://github.com/Sufalthakre18)

## 📅 Submission

- **Date:** February 26, 2026
- **Assignment:** Coding Junior Full Stack Internship

## 📧 Contact

For any queries regarding this submission:
- **Email:** vikas@codingjr.online
- **Submitted to:** Coding Jr

---

**Built with ❤️ for Coding Junior Internship Assignment**
```
