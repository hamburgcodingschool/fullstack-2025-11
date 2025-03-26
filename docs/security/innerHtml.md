# InnerHtml security considerations

Setting an elements `innerHTML` with user data is risky business. While convenient, it does also leave us vulnerable to cross-site scripting, where a malicious actor may inject code into the page as it will parse whatever HTML it is set to - even if that will result in JavaScript being executed!

To see this in action, check out [innerHTML.html](./innerHTML.html). When interacting with the page, one can change the content using the inputs value in a couple of different ways:
- The first two buttons will set the content to a `<p>` element showing the inputs value, one using innerHtml and one using textContent. Try putting some html or even html with JavaScript on e.g. an onclick attribute and observe the difference!
- The second two buttons do a similar thing, except this time the content is static and the input is only put on the elements class attribute. Can you also put additional html in these?

On the two buttons using innerHTML, we are indeed able to execute code. For example, the first button lets us simply put `<button onclick="alert('oh no!')">`.  An even more viscous option would be `<img src="x" onerror="alert('oh NO!')" />`, which would immediately execute as the img could not be found and therefore has an error.

The class version is a little more difficult: We first have to close the tag we are in before injecting code: `" style="display: none"><img src="x" onerror="alert('oh no!')" /></p><p class="`. The first part hides the original paragraph and closes its opening tag - this hides the malicious image from an unsuspecting user and escapes the opening tag. After that comes the injected code. In the end, the original tag is re-created so everything looks normal again. If we were not announcing our presence with an alert for demonstration purposes, we could easily re-write the entire page to do whatever we want and nobody would be able to tell.

Both of the versions using safe DOM APIs - in this case `textContent` and `className` are dealing with this problem by simply not being able to parse it as HTML - textContent simply shows the code on the page, and className can only set an elements class without being able to affect anything else. This way we ensure that our feature cannot be misused to introduce bad code on our page.

MDN also warns about this repeatedly on its page about innerHtml and has a section explaining it: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations
