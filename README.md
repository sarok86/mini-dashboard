Part 1 – UI Requirements (HTML + CSS):
Goal
Design and build a clean, modern, and fully responsive Task Manager interface.

Header Section
Requirements
Display a clear project title (e.g., “Task Manager Dashboard”).
Visually separated from the main content.
Full-width layout.
Proper spacing and typography.
Must work correctly on both desktop and mobile.
Optional bonus:
Sticky header behavior.

Task Creation Form
The form must include the following fields:
Title (Required)
Text input field.
Cannot be empty or whitespace-only.
Must show validation feedback when invalid.
Description (Optional)
Textarea input.
Can be left empty.
Priority
Dropdown select.
Options:
Low
Medium
High
Must have a default value.
Add Button
Submits the form.
Must not reload the page.
Should trigger task creation logic.
Expected Behavior
When submitting the form:
Validate input.
Create a new task.
Update the UI dynamically.
Persist the data.
Clear the form after successful submission.

Task List Section
Tasks must be rendered dynamically using JavaScript.
Each task must display:
Title
Description (if provided)
Priority indicator (visually distinguishable)
Completion state
Edit control
Delete control
Completion toggle (checkbox or clickable area)
Visual Requirements
Completed tasks should have clear visual distinction (e.g., strikethrough or reduced opacity).
Priority levels should be visually differentiated (e.g., color-coded badge).
Clean spacing and readable layout.

Filter Controls
Provide filter options:
All
Completed
Active
Behavior
Only one filter can be active at a time.
Active filter must be visually highlighted.
Filtering must update the list dynamically.
No page reload is allowed.

Dark Mode Toggle
Include a toggle button or switch that:
Switches between light and dark themes.
Updates background, text, and task card styles.
Uses smooth transition effects.
Does not cause flickering.
Bonus:
Persist the selected theme after page refresh.

Part 2 – JavaScript Logic Requirements
Goal
Implement a clean and structured task management system.
Core Functionalities
Add Task:
Validate title.
Prevent empty submissions.
Add task to internal state.
Update UI.
Persist data.
Delete Task:
Remove selected task.
Update state.
Update UI.
Persist changes.

Edit Task:
Allow updating title, description, and priority.
Preserve task identity.
Update state and UI correctly.
Persist changes.

Mark Task as Completed:
Toggle completion state.
Reflect changes visually.
Persist changes.

Data Persistence:
Store tasks using browser storage.
Load saved tasks when the page loads.
Handle empty or invalid stored data safely.

Filtering:
Filtering must be implemented in JavaScript logic, not only visually hidden with CSS.
The UI must re-render based on the selected filter.

Event Delegation (Required):
Instead of attaching multiple event listeners:
Use a single event listener on the task list container.
Determine user actions based on the clicked element.
Properly handle edit, delete, and toggle interactions.
Edge Case Handling
The solution must handle:
Empty titles
Rapid multiple submissions
No tasks available
Empty storage
Unique task identification

Part 3 – CSS Expectations:
Layout:
Use Flexbox or CSS Grid.
Clear spacing and alignment.
Strong visual hierarchy.
No layout breakage on small screens.

Animation:
Smooth animation when a task is added.
Should feel natural and lightweight.
Must not block user interaction.

Dark Mode Transition:
Smooth color transitions (approximately 200–300ms).
No flashing or abrupt theme changes.
Prefer structured and scalable styling approach.

Responsive Design:
Desktop:
Balanced spacing
Centered layout
Comfortable readability

Mobile:
Stacked layout
Touch-friendly buttons
No horizontal scrolling
Proper spacing between interactive elements
