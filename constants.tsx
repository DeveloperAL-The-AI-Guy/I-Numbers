
import React from 'react';
import { LessonStepType } from './types';
import { NumberLineVisual } from './components/visuals/NumberLineVisual';
import { ComplexPlaneVisual } from './components/visuals/ComplexPlaneVisual';
import { RotationVisual } from './components/visuals/RotationVisual';
import { MobiusStripVisual } from './components/visuals/MobiusStripVisual';
import { ReframedVisual } from './components/visuals/ReframedVisual';

const Code: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <code className="bg-slate-100 text-indigo-600 font-mono py-1 px-1.5 rounded-md text-sm">{children}</code>
);


export const LESSON_STEPS: LessonStepType[] = [
  {
    title: "The Paradox on the Number Line",
    content: (
      <>
        <p>Let's start with a simple, solid fact: on the familiar number line, the square root of -1 (<Code>\sqrt{'{'}-1{'}'}</Code>) can't exist.</p>
        <p className="mt-4">Why? Because squaring any real number—positive or negative—always results in a positive number. A positive times a positive is positive (<Code>2 x 2 = 4</Code>), and a negative times a negative is also positive (<Code>-2 x -2 = 4</Code>).</p>
        <p className="mt-4">There is no spot on this line for a number that, when multiplied by itself, gives -1. Your confusion about this is not a mistake; it's a correct observation. The number line is simply not equipped to handle this question.</p>
      </>
    ),
    visual: NumberLineVisual,
  },
  {
    title: "The Dimensional Shift",
    content: (
      <>
        <p>So, how do mathematicians solve an impossible problem? They change the space where the problem lives.</p>
        <p className="mt-4">Instead of trying to find <Code>\sqrt{'{'}-1{'}'}</Code> on the one-dimensional number line, we add a second dimension, perpendicular to the first. We call this the "imaginary axis."</p>
        <p className="mt-4">This new, two-dimensional space is called the <span className="font-semibold text-indigo-600">Complex Plane</span>. The horizontal axis is the familiar "real" number line, and the new vertical axis is for our "imaginary" numbers. The number we were looking for, <Code>\sqrt{'{'}-1{'}'}</Code>, is given a name: <Code>i</Code>. It lives one unit up on the imaginary axis.</p>
      </>
    ),
    visual: ComplexPlaneVisual,
  },
  {
    title: "The Key Insight: Multiplication as Rotation",
    content: (
      <>
        <p>Here is the "click." On the number line, multiplying by -1 is a 180-degree flip (from 2 to -2, for example). But what if we could do half of that flip?</p>
        <p className="mt-4">In the complex plane, <span className="font-semibold text-indigo-600">multiplying by <Code>i</Code> is a 90-degree counter-clockwise rotation</span>. This is the crucial insight that makes everything work.</p>
        <p className="mt-4">Watch what happens: Start at 1. Multiply by <Code>i</Code>, you rotate 90° to <Code>i</Code>. Multiply by <Code>i</Code> again, you rotate another 90° to -1. We've performed two 90° rotations—a 180° flip. So, <Code>i * i = -1</Code>. The definition is no longer a paradox; it's a geometric action.</p>
      </>
    ),
    visual: RotationVisual,
  },
  {
    title: "A Topological Analogy: The Möbius Strip",
    content: (
      <>
        <p>This idea of resolving a paradox by adding a dimension has a beautiful physical analogy: the Möbius strip.</p>
        <p className="mt-4">Take a normal paper loop. It has two sides—an inside and an outside. You can't get from one to the other without crossing an edge. This is a paradox of separation. But if you twist the strip once before connecting the ends, you create a Möbius strip.</p>
        <p className="mt-4">Suddenly, it has only <span className="font-semibold text-indigo-600">one side</span> and one edge. The distinction between "inside" and "outside" has collapsed. By introducing a twist (a higher-dimensional manipulation), we reframed the space and resolved the paradox.</p>
      </>
    ),
    visual: MobiusStripVisual,
  },
  {
    title: "Integration: A New Perspective",
    content: (
      <>
        <p>Imaginary numbers aren't "fake" or "made up" any more than the number zero or negative numbers are. They are a logical and consistent extension of our number system. They represent a broader mathematical reality that we can't see from the limited perspective of a single line.</p>
        <p className="mt-4">The problem of <Code>\sqrt{'{'}-1{'}'}</Code> couldn't be solved by extending the rules on the number line. The solution was to realize that the number line itself was just one part of a larger, two-dimensional space.</p>
        <p className="mt-4 font-semibold text-indigo-600">Just like the Möbius strip, the complex plane doesn't break the rules; it reveals a larger space where the old paradoxes no longer exist.</p>
      </>
    ),
    visual: ReframedVisual,
  },
  {
    title: "Closing Reflection",
    content: (
      <>
        <p>You may feel like you were missing something before. You were: a dimension.</p>
        <p className="mt-4">The feeling of impossibility often arises when we are confined to a space that is too small to contain the solution.</p>
        <p className="mt-6 text-xl text-center text-slate-600 italic leading-relaxed">
          Adding an imaginary axis is to the number line what adding a twist is to a paper loop: a simple shift in perspective that unlocks a fundamentally new structure.
        </p>
      </>
    ),
    visual: () => null,
  },
];
