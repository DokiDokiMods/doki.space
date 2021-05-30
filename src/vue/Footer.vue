<template>
    <div class="footer">
        <div class="footer-item">
              <div style="text-align: center">
                <a href="https://hosted.weblate.org/engage/doki-doki-mod-manager/?utm_source=widget"
                   target="_blank">
                    <img src="https://hosted.weblate.org/widgets/doki-doki-mod-manager/-/287x66-grey.png"
                         alt="Translation status">
                </a>
            </div>
        </div>

        <div class="footer-item">
            <h2>License</h2>

            <p>Copyright (c) 2018-2020 Doki Doki Mod Manager Developers</p>

            <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:</p>

            <p>The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.</p>

            <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        display: flex;
    }

    .footer-item {
        flex-basis: 0;
        flex-grow: 1;
        padding: 0.5em;
    }
</style>
