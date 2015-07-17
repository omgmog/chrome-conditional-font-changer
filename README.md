# Conditional Font Changer for Google Chrome

## What is this?

[Seren Davies (@ninjanails)](https://github.com/ninjanails) gave an [excellent talk](https://speakerdeck.com/ninjanails/death-to-icon-fonts) about the use of icon fonts and the accessibility implications they had for her as somebody living with dyslexia.

Seren uses an extension to change the fonts on a page to a more readable font, such as Open Dyslexic.

One of the main points of contention in her talk was that icon fonts are also changed when she uses the extension, and so in many cases the icons lose their meaning.

I've created this extension to allow the changing of fonts on all elements of a page, while respecting an exclusion list, so that icon fonts (or any other fonts) can remain unchanged.


## Show us the goods!

GitHub was one of the main offenders in Seren's talk, so here are some screenshots to show my extension working on GitHub.

Before, regular fonts, regular icon fonts:

![](http://i.imgur.com/L1UmAWb.png)

Open the popup from the address bar:

![](http://i.imgur.com/sncALkQ.png)

Change the font to something else:

![](http://i.imgur.com/aogkwLt.png)

## And the technical details...

The extension saves your "Fonts to exclude" and "Font to use" in `localStorage`, so the fonts you type in these boxes will get saved.

When you go to a site that you find hard to read, you simply click the little 'F' icon in the address bar, and then click the 'Change fonts' button.

By default I've provided a couple of common icon font libraries in the "Fonts to exclude", these are:

> "FontAwesome", "Icomoon", "Fontelico", "octicons", "Entypo", "Typicons", "Sitepoint"

If you'd like to install this extension, do the following:

1. Clone the repository to your computer
2. Go to `chrome://extensions/`
3. Click "Load unpacked extension"
4. Find the folder that you cloned the repository to

## Contributing

I'm open to suggestions of ways to improve this, additional default icon font libraries to exclude, etc.

If you'd like to contribute, feel free to raise an issue or create a pull request.