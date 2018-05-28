import AmazonPricehunter from './entries/AmazonPricehunter.js';
import DomainNameDoubleAuctions from './entries/DomainNameDoubleAuctions.js';
import StartWithStaticAnalysis from './entries/StartWithStaticAnalysis.js';

const orderedEntries = [
  AmazonPricehunter,
  DomainNameDoubleAuctions,
  // StartWithStaticAnalysis
];

const entries = orderedEntries.reduce((obj, entry) => {
  obj[entry.slug] = entry;
  return obj;
}, {});

export {
  orderedEntries,
  entries
};
