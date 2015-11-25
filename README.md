# Improved Font Changer for Google Chrome

## What is this?

[Seren Davies (@ninjanails)](https://github.com/ninjanails) gave an [excellent talk](https://speakerdeck.com/ninjanails/death-to-icon-fonts) about the use of icon fonts and the accessibility implications they had for her as somebody living with dyslexia.

Seren uses an extension to change the fonts on a page to a more readable font, such as Open Dyslexic.

One of the main points of contention in her talk was that icon fonts are also changed when she uses the extension, and so in many cases the icons lose their meaning.

I've created this extension to allow the changing of fonts on all elements of a page, while respecting fallback to the existing fonts, so that icon fonts (or any fonts covering code points not included in the replacement font) can remain unchanged.


## Show us the goods!

GitHub was one of the main offenders in Seren's talk, so here are some screenshots to show my extension working on GitHub.

Before, regular fonts, regular icon fonts:

![](http://i.imgur.com/L1UmAWb.png)

After, custom fonts, but the icons still work:

![](http://i.imgur.com/aogkwLt.png)

## And the technical details...

The extension saves your "Font to use" in `localStorage`, so the font you type in the box will get saved.

When you go to a site that you find hard to read, you simply click the little 'F' icon in the address bar, and then click the 'Change fonts' button.

If you'd like to install this extension, do the following:

1. Clone the repository to your computer
2. Go to `chrome://extensions/`
3. Click "Load unpacked extension"
4. Find the folder that you cloned the repository to

## Contributing

Written by http://github.com/rjmunro, and https://github.com/omgmog

I'm open to suggestions of ways to improve this.

If you'd like to contribute, feel free to raise an issue or create a pull request.
