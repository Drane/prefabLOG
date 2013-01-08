prefabLOG: a *filterable* and *transparent* NodeJS logging facade
=================================================================

What's this library all about?
------------------------------
**prefabLOG** is a *filterable* and *transparent* logging library acting as a facade to other logging implementations


**Features:**
- *transparent:* uncommenting a single line will just fallback on the dafult logging
- *filterable:* by default you only see the logging you want to see:
    LOG=main,worker node app.js