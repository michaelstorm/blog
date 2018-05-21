import React from 'react';

const entry = {
  slug: 'start-with-static-analysis',
  title: "Start with static analysis",
  disqusIdentifier: '7c8eb4d6-1b49-40dd-9978-b060c6a00f2d',
  content: (
    <div>
      <p>
        A talented engineer I interviewed the other day told me about a project she'd built as an intern: a network
        traffic visualizer in D3. Which is pretty cool, and a perfect portfolio project for an intern. I asked why
        she'd built it, and she said, "For security." The idea was to visualize traffic so that a human could spot
        endpoints that weren't supposed to talk to each other. AWS security rules are, to put it lightly,
        <i>non-intuitive</i>, so having an external verification method helps to ensure your rules mean what you think
        they mean.
      </p>

      <p>
        I pushed back on this; we went back and forth a few times, but had to get on with the interview. (And she was
        good enough that I didn't really care if we saw eye-to-eye on philosophy.)
      </p>

      <p>
        My issue is that <i>this is not where you should start</i>. If you want to ensure that your staging web server
        can't talk to your production database, you should <i>assert</i> that a priori. This is perfectly doable by
        analyzing the content of security rules against a representation of your currently deployed resources. (Unless
        AWS security rules are undecidable with respect to which packets will be allowed to travel between two given
        endpoints, in which case we all have larger problems.) You should verify that <tt>groups.staging CANNOT
        COMMUNICATE WITH groups.production</tt> against your architecture _before_ you deploy it, <i>before</i> anyone
        attacks it, <i>before</i> you enlist a human to notice a line between two points where there shouldn't be. If
        this were code, we'd simply call it "testing".
      </p>
    </div>
  )
};

export default entry;
