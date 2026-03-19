HTML — Complete Developer Notes (Placement + Interview Ready)
1. What is HTML?

HTML (HyperText Markup Language) is the standard language used to create the structure of web pages.

👉 HTML does NOT create logic or styling.

Technology	Role
HTML	Structure (skeleton)
CSS	Styling (design)
JavaScript	Behaviour (brain)
Key Idea

HTML describes WHAT content exists, not how it looks.

Example:

<h1>Hello</h1>

Means → This is a heading.

Why HTML is Important (Interview Point)

Every website starts with HTML.

Browser converts HTML → DOM (Document Object Model).

JavaScript interacts with DOM.

👉 Without HTML → No webpage.

2. HTML Elements

An HTML Element = Start Tag + Content + End Tag

<p>This is paragraph</p>

Structure:

<p>      → Opening tag
Content  → Text
</p>     → Closing tag
Types of Elements
1. Container Elements

Have opening & closing tags.

<p></p>
<div></div>
2. Empty (Void) Elements

No closing tag.

<img>
<br>
<hr>
3. HTML Tags

Tags are keywords enclosed in angle brackets.

<tagname>

Examples:

<h1>
<p>
<img>

Browser reads tags and renders content accordingly.

4. HTML Boilerplate (VERY IMPORTANT)

Every HTML file must follow this base structure.

<!DOCTYPE html>
<html>
<head>
   <title>My Page</title>
</head>
<body>
   Content here
</body>
</html>
Explanation
<!DOCTYPE html>

Tells browser → HTML5 document.

Prevents compatibility issues.

<html>

Root element containing entire webpage.

<head>

Contains metadata (not visible).

Includes:

title

CSS links

SEO info

<title>

Displayed in browser tab.

<title>Portfolio</title>

Interview Tip:
Title helps SEO ranking.

<body>

Contains visible content.

Anchor Tag (<a>)

Used for hyperlinks.

<a href="https://google.com">Visit</a>

Attributes:

href → destination link

Image Tag (<img>)
<img src="image.jpg" alt="profile">

Attributes:

Attribute	Purpose
src	image path
alt	alternative text
Why alt is Important?

Accessibility

Screen readers

SEO

Image load failure backup

Interview question favorite ✅

5. Indentation

Indentation improves readability.

Bad:

<body><h1>Hello</h1></body>

Good:

<body>
   <h1>Hello</h1>
</body>

👉 No effect on browser output but important for teamwork.

6. Lists in HTML
Ordered List
<ol>
  <li>Item</li>
</ol>

(Numbered)

Unordered List
<ul>
  <li>Item</li>
</ul>

(Bullets)

7. HTML Attributes

Attributes provide extra information.

Syntax:

<tag attribute="value">

Example:

<a href="google.com">
8. Height & Width Attributes

Used mainly in images/videos.

<img src="img.jpg" width="300" height="200">

⚠ Modern practice → Use CSS instead.

9. Text Formatting Tags
Tag	Meaning
<b>	Bold
<i>	Italic
<u>	Underline

Example:

<b>Text</b>
10. Big & Small Tag
<big>Large text</big>
<small>Small text</small>

⚠ Mostly replaced by CSS today.

11. Horizontal Rule
<hr>

Creates horizontal line.

Used for section separation.

12. Subscript & Superscript
H<sub>2</sub>O
x<sup>2</sup>

Output:
H₂O, x²

13. Pre Tag

Preserves spaces & formatting.

<pre>
Hello
   World
</pre>

Used for:

code display

poetry

14. Inside <main> Tag

Semantic layout element.

<main>
   <section></section>
   <article></article>
   <aside></aside>
</main>
section

Grouped content.

article

Independent content (blog/post).

aside

Sidebar or extra info.

Interview Tip:
Semantic tags improve SEO + accessibility.

15. Anchor Advanced (target)
<a href="site.com" target="_blank">

Opens link in new tab.

16. Div Tag

Generic container.

<div>
   Content
</div>

Used for layout grouping.

Block element.

17. Span Tag

Inline container.

<span>Text</span>

Used for styling small portions.

Difference
div	span
block	inline
new line	same line
18. Tables
<table>
<tr>
<th>Name</th>
<td>Shreya</td>
</tr>
</table>

Elements:

Tag	Meaning
table	table
tr	row
th	heading
td	data
19. Caption Tag
<caption>Student Data</caption>

Adds table title.

20. Colspan

Merge columns.

<td colspan="2">Merged</td>
21. Forms (VERY IMPORTANT — Interview Topic)

Forms collect user input.

<form action="/submit">
</form>
Input
<input type="text">
Placeholder
<input placeholder="Enter name">
Label
<label>Name</label>

Improves accessibility.

Radio Button
<input type="radio" name="gender">

Only one selectable.

22. Class & ID
ID

Unique element.

<p id="para1">
Class

Reusable.

<p class="text">

Interview Question:
👉 ID = unique
👉 Class = reusable

23. Checkbox
<input type="checkbox">

Multiple selections allowed.

24. Textarea
<textarea></textarea>

Multi-line input.

25. Select Dropdown
<select>
<option>India</option>
</select>
26. Iframe

Embeds another webpage.

<iframe src="https://example.com"></iframe>

Used for:

maps

videos

external pages

27. Video Tag
<video src="video.mp4" controls></video>

Attributes:

Attribute	Purpose
controls	show play buttons
loop	repeat video
autoplay	auto play
⭐ Interview Summary (Must Remember)

HTML builds webpage structure.

Elements vs Tags difference.

Semantic tags importance.

Forms & input types.

div vs span.

class vs id.

alt attribute importance.

Boilerplate structure.
