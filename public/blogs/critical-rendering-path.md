# What is Critical Rendering Path?

### How browser renders a web page from data packets to pixels

- Browser download's HTML data packets from network
- Downloaded data packets are tokenized
- Tokenized html file is used to construct DOM Tree
- Same Happens for CSS files. Here, CSSOM Tree is Created
- Once both DOM and CSSOM tree's created, Render tree is created
- Render Tree will contain only elements which are visible in the UI
- After Render Tree, layout calculations are carried out to know which elements are to be painted on pixels in the viewport. This process is called as Reflow.
- Once calculations are done, Layering and Compositing steps will kick in to paint the actual elements on the viewport. This process is called Repaint.
- This entire process is critical for browser to render a web page from bytes to pixels on the screen.
- Let's go deep dive on Critical Rendering Path (CRP) in this article.
