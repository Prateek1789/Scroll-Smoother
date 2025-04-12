# Scroll-Smoother
It is smooth scrolling for webpage made in Vanilla JS
To get the smooth scrolling:
    1. We need to create a fixed wrapper with overflow hidden.
    2. Frame the content in a div inside the fixed wrapper.
    3. Set the height of the body same as the content in order to get the scrollbar.
    4. Now, using lerp we can translateY the content div to the new scroll position.