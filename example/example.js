import rainbowConsoleLog from "./node_modules/rainbow-console-log/src/index.js";
rainbowConsoleLog();
const lyrics = `Fallin' out, fallin' in
Nothing's sure in this world, no, no
Breakin' out, breakin' in
Never knowin' what lies ahead
We can really never tell it all, no, no, no
Say "Goodbye", say "Hello"
To a lover or friend
Sometimes, we never could understand
Why some things begin, then just end
We can really never tell it all, no, no, no
But, oh, can't you see
That no matter what happens, life goes on and on?
And so, oh, baby, just smile
'Cause I'm always around you
And I'll make you see how beautiful life is for you and me
Take a little time, baby
See the butterflies' colors
Listen to the birds that were sent
To sing for me and you
Can you feel me?
This is such a wonderful place to be
Even if there is pain now
Everything would be alright
For as long as the world still turns
There will be night and day
Can you hear me?
There's a rainbow always after the rain`;
lyrics.split("\n").map((line) => console.log(line));
