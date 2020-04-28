/*
Calculate text length
Calculate number of dashes for top and bottom lines
Calculate number of spaces for top and bottom paddings
Log each line in sequence
*/

function logInBox(text) {
  var textLength = text.length;
  var horizontalBorder = '+' + repeatChars('-', textLength + 2) + '+';
  var horizontalPadding = '|' + repeatChars(' ', textLength + 2) + '|';

  console.log(horizontalBorder);
  console.log(horizontalPadding);
  console.log(`| ${text} |`);
  console.log(horizontalPadding);
  console.log(horizontalBorder);
}

function repeatChars(char, times) {
  var i;
  var repeatedChars = '';

  for (i = 1; i <= times; i += 1) {
    repeatedChars += char;
  }

  return repeatedChars;
}

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

function logInBoxTruncated(text, maxWidth) {
  var textLength = text.length;

  if (maxWidth === undefined || maxWidth >= textLength + 4) {
    logInBox(text);
  } else {
    logInBox(text.substring(0, maxWidth - 4));
  }

}

// logInBoxTruncated('To boldly go where no one has gone before.', 1);
// logInBoxTruncated('', 300);

/*
Still doesn't work with:
- Any words that are longer than maxWidth - 4
- Text with multiple consecutive newline characters
*/

function logInBoxWrapped2(text, maxWidth) {
  var linesOfText;
  var textLength = text.length;

  if (maxWidth <= 4) {
    console.log('Banner width must be at least 5!');
  } else if (maxWidth === undefined || maxWidth >= textLength + 4) {
    logInBox(text);
  } else {
    linesOfText = text.match(new RegExp(`((?<=^|\\s).{1,${maxWidth - 4}}(?=\\s|$))`, 'gm'));
    logMultilineBanner(linesOfText, maxWidth);
  }
}

// logInBoxWrapped2('To boldly go where no one has gone before.', 31);
// logInBoxWrapped2('', 5);
// logInBoxWrapped2('"Lorem" ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "labore" et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "ullamco" laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ', 100);
// logInBoxWrapped2('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 100);
// logInBoxWrapped2('abd abcdefgh abd', 7);

// --------------------------------------------------------------------------

/*
Edge cases:
- Any word in the text with length longer than (width - 4)
- Preserve new line characters within text - even if maxWidth isn't defined,
  or if the entire string length is shorter than maxWidth

Problem:
- Split lines of text

Algorithm:

Split by newlines into array of paragraphs

Split each paragraph into lines of text:
(Suppose text width is 80)
(Approach: each line must end with a whitespace char, unless entire line is a word with length longer than a line)
- Look at 80th char (index 79)
  - If whitespace, then add all previous chars to a line, break
  - Else if non-whitespace
      Find the most recent whitespace
      - If found at e.g. index 72, then break line after this whitespace char
      - If no whitespace at all, then break line after 80th char

Log each line of text
*/

function logInBoxWrapped(text, maxWidth) {
  var paragraphsOfText;
  var linesOfText = [];
  var lineWidth;
  var longestParagraphLength;

  if (maxWidth === undefined && !text.includes('\n')) {   // Degenerate case
    logInBox(text);   // Just call original logInBox function (omitted for brevity)
    return;
  }

  paragraphsOfText = text.split('\n');

  // Update value of maxWidth if necessary
  longestParagraphLength = computeLongestStringLength(paragraphsOfText);
  if (maxWidth == undefined || maxWidth > longestParagraphLength + 4) {
    maxWidth = longestParagraphLength + 4;
  }

  lineWidth = maxWidth - 4;

  if (lineWidth <= 0 && text.length > 0) {    // Zero available space for non-empty text
    console.log("Banner's maximum width must be at least 5!");
    return;
  } else {
    paragraphsOfText.forEach(function(paragraph) {
      linesOfText = linesOfText.concat(wrapParagraphIntoLines(paragraph, lineWidth));
    });

    logMultilineBanner(linesOfText, maxWidth);
  }
}

function computeLongestStringLength(strings) {
  return strings.reduce(function(maxLength, string) {
    var stringLength = string.length;
    return stringLength > maxLength ? stringLength : maxLength;
  }, 0);
}

function wrapParagraphIntoLines(paragraph, lineWidth) {
  var linesOfText = [];
  var index;

  if (paragraph.length === 0) {   // If a paragraph is just an empty line
    linesOfText.push('');    // Preserve this empty line in the banner
  } else {
    while (paragraph.length > lineWidth) {
      if (/\s/.test(paragraph[lineWidth - 1])) {    // If the last char on a line is whitespace
        linesOfText.push(paragraph.substring(0, lineWidth));    // Break line here, add the line to the lines array

        paragraph = paragraph.substring(lineWidth); // Remove the line of text from the paragraph
      } else {
        index = lineWidth - 2;
        while (!(/\s/.test(paragraph[index])) && index >= 0) {    // Look for most recent whitespace
          index -= 1;
        }

        if (index >= 0) {   // Found a whitespace
          linesOfText.push(paragraph.substring(0, index + 1));    // Break the line here, add the line to the lines array

          paragraph = paragraph.substring(index + 1);   // Remove the line of text from the paragraph
        } else {    // Couldn't find a whitespace i.e. the whole line is part of one single really long word without any whitespace
          linesOfText.push(paragraph.substring(0, lineWidth));    // Break the line anyway i.e. break up the really long word

          paragraph = paragraph.substring(lineWidth);   // Remove this part of the really long word from the paragraph
        }
      }
    }

    if (paragraph.length > 0) {   // If there's any remaining text in paragraph with length shorter than lineWidth
      linesOfText.push(paragraph);    // Put the text on a line on its own
    }
  }

  return linesOfText;
}

function logMultilineBanner(linesOfText, bannerWidth) {
  var horizontalBorder = '+' + repeatChars('-', bannerWidth - 2) + '+';
  var horizontalPadding = '|' + repeatChars(' ', bannerWidth - 2) + '|';

  console.log(horizontalBorder);
  console.log(horizontalPadding);
  linesOfText.forEach(line => console.log(`| ${line.padEnd(bannerWidth - 4, ' ')} |`));
  console.log(horizontalPadding);
  console.log(horizontalBorder);
}

// -----------------------------------------------------------------------

// Test cases:

logInBoxWrapped(''); // Empty banner
logInBoxWrapped('', 4); // Empty banner
logInBoxWrapped('', 10); // Empty banner
logInBoxWrapped('To boldly go where no one has gone before.');  // Degenerate behaviour - same as the original logInBox function
logInBoxWrapped('To boldly go where no one has gone before.', 3);  // Zero available space for any text
logInBoxWrapped('To boldly go where no one has gone before.', 5); // Extremely narrow banner width, breaking up some of the words
logInBoxWrapped('To boldly go where no one has gone before.', 10); // Narrow banner width, separating the last word from the full stop
logInBoxWrapped('To boldly go...\n\nwhere no one has gone before.'); // Short line of text with newline
logInBoxWrapped('To boldly go...\n\nwhere no one has gone before.', 80); // Short line of text with newline; max width ignored

var sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

logInBoxWrapped(sampleText, 10); // Narrow banner width, breaking up some words
logInBoxWrapped(sampleText, 80); // 1 paragraph of long text

var loremIpsum =
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ligula purus. Phasellus consequat, orci at sodales maximus, metus ante mollis eros, nec dictum metus massa nec felis. Ut iaculis vehicula dapibus. Fusce id mauris erat. Fusce nec ullamcorper ligula. Etiam nec massa vel tellus consequat molestie a ut sapien. Ut hendrerit erat in nisl vulputate, eget lacinia nisi pharetra. Sed sed nunc ipsum. Ut quam felis, pellentesque at sem varius, imperdiet lobortis mauris. Aenean consequat magna in elit suscipit euismod. Fusce viverra efficitur tellus, in commodo mi imperdiet vel. Vestibulum iaculis mi erat, eu tristique augue posuere non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n\n' +
'Ut porttitor mauris orci, a ultricies ex pulvinar sed. Nunc consequat cursus dui a ullamcorper. Sed a dapibus erat, et efficitur mi. Curabitur commodo, purus id suscipit sollicitudin, ligula ex rutrum lorem, vel faucibus felis neque non quam. Nam luctus facilisis turpis, ac semper elit eleifend non. Mauris pulvinar pellentesque nibh et fringilla. Suspendisse potenti.\n\n' +
'Aliquam in orci ut tortor molestie cursus. Sed ornare dignissim ipsum nec iaculis. Suspendisse imperdiet tempus arcu et congue. Donec nec libero mattis, interdum enim quis, sagittis nisi. Etiam vestibulum tempus eros, quis porttitor enim rhoncus eget. Sed libero turpis, aliquam quis purus vel, hendrerit elementum elit. Ut vel ligula pharetra, accumsan neque in, ullamcorper massa. Cras fermentum ipsum quis eros tincidunt, nec tempor nisl malesuada. Duis fringilla interdum lorem, quis posuere sapien accumsan quis.';

logInBoxWrapped(loremIpsum, 80); // Multiple paragraphs of long text
