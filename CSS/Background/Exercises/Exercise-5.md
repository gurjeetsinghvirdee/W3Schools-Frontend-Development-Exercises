#### (Q) Use the correct background property to make the background image NOT scroll with the rest of the page.

<h5>Solution</h5>

###### Code

```HTML

<style>
    body {
        background-image: url('/Assets/background-image.jpg');
        background-attachment: fixed;
    }
</style>

```