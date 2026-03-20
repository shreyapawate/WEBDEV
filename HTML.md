✅ 1. What is HTML?
📘 Notes:

HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.

It defines what content exists on a webpage.

HTML does not handle styling or logic.

Technology	Role
HTML	Structure
CSS	Styling
JavaScript	Behaviour
🔹 Example:
<h1>Hello</h1>

Browser understands this as a heading.

🎯 Interview Answer:

HTML is a markup language used to structure web content using elements and tags. Browsers parse HTML to create the DOM, which can then be styled using CSS and manipulated using JavaScript.

✅ 2. HTML Elements
📘 Notes:

An HTML element consists of:

Opening Tag + Content + Closing Tag
Example:
<p>This is a paragraph</p>
Types of Elements:

1️⃣ Container Elements

<p></p>
<div></div>

2️⃣ Empty (Void) Elements

<img>
<br>
<hr>
🎯 Interview Answer:

HTML elements define webpage components and may contain content or be self-closing depending on their purpose.

✅ 3. HTML Tags
📘 Notes:

Tags are keywords enclosed within angle brackets.

<tagname>

Examples:

<h1>
<p>
<img>
🎯 Interview Answer:

Tags instruct the browser how to display or structure content.

✅ 4. HTML Boilerplate Structure
📘 Notes:

Every HTML page follows a base template.

<!DOCTYPE html>
<html>
<head>
   <title>My Page</title>
</head>
<body>
   Content here
</body>
</html>
Explanation:

<!DOCTYPE html> → Defines HTML5 document

<html> → Root element

<head> → Metadata section

<title> → Browser tab title

<body> → Visible webpage content

🎯 Interview Answer:

The HTML boilerplate ensures browsers correctly interpret the document as an HTML5 webpage.

✅ 5. Anchor Tag (<a>)
📘 Notes:

Used to create hyperlinks.

<a href="https://google.com">Visit Google</a>
Important Attributes:

href → destination link

target="_blank" → open in new tab

🎯 Interview Tip:

Anchor tags connect webpages and enable navigation.

✅ 6. Image Tag
📘 Notes:

Displays images.

<img src="image.jpg" alt="profile">
Attribute	Purpose
src	Image path
alt	Alternative text
Why alt is Important:

Accessibility

SEO improvement

Screen readers

Backup text if image fails

🎯 Interview Answer:

The alt attribute improves accessibility and helps search engines understand images.

✅ 7. Indentation
📘 Notes:

Indentation improves readability but does not affect output.

Bad:

<<body><h1>Hello</h1></body>

Good:

<body>
   <h1>Hello</h1>
</body>
✅ 8. Lists in HTML
Ordered List:
<ol>
  <li>Item</li>
</ol>
Unordered List:
<ul>
  <li>Item</li>
</ul>
✅ 9. HTML Attributes
📘 Notes:

Attributes provide additional information to elements.

Syntax:

<tag attribute="value">

Example:

<a href="https://example.com">
✅ 10. Height & Width Attributes
<img src="img.jpg" width="300" height="200">

⚠ Modern practice → Use CSS instead.

✅ 11. Text Formatting Tags
Tag	Purpose
<b>	Bold
<i>	Italic
<u>	Underline
<b>Bold Text</b>
✅ 12. Big & Small Tags
<big>Large Text</big>
<small>Small Text</small>

⚠ Mostly replaced by CSS today.

✅ 13. Horizontal Rule
<hr>

Creates a thematic break between sections.

✅ 14. Subscript & Superscript
H<sub>2</sub>O
x<sup>2</sup>

Output → H₂O, x²

✅ 15. Pre Tag

Preserves formatting and spaces.

<pre>
Hello
   World
</pre>

Used for code or poetry display.

✅ 16. Semantic Tags (main, section, article, aside)
<main>
   <section></section>
   <article></article>
   <aside></aside>
</main>
Meaning:

section → grouped content

article → independent content

aside → sidebar info

🎯 Interview Tip: Semantic tags improve SEO & accessibility.

✅ 17. Div vs Span
Div (Block Element)
<div>Content</div>
Span (Inline Element)
<span>Text</span>
div	span
block	inline
new line	same line
✅ 18. Tables
<table>
<tr>
<th>Name</th>
<td>Shreya</td>
</tr>
</table>
Tag	Meaning
table	table
tr	row
th	heading
td	data
✅ 19. Caption Tag
<caption>Student Data</caption>

Adds title to table.

✅ 20. Colspan
<td colspan="2">Merged</td>

Merges columns.

✅ 21. Forms in HTML
<form action="/submit">
<input type="text" placeholder="Enter name">
</form>
Common Inputs:

text

radio

checkbox

textarea

select dropdown

🎯 Interview Answer:

Forms collect user input and send data to servers using HTTP requests.

✅ 22. Class vs ID
<p id="para1"></p>
<p class="text"></p>
ID	Class
unique	reusable

🎯 Interview Question Favorite ✅

✅ 23. Checkbox
<input type="checkbox">

Allows multiple selections.

✅ 24. Textarea
<textarea></textarea>

Multi-line user input.

✅ 25. Select Dropdown
<select>
<option>India</option>
</select>
✅ 26. Iframe
<iframe src="https://example.com"></iframe>

Used to embed external webpages, maps, or videos.

✅ 27. Video Tag
<video src="video.mp4" controls></video>

Attributes:

controls

loop

autoplay

⭐ HTML Interview Revision Summary

HTML builds webpage structure.

Elements vs Tags difference.

Semantic tags improve SEO.

Forms frequently asked in interviews.

div vs span.

class vs id.

alt attribute importance.

Boilerplate structure mandatory.
