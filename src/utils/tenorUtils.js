import {defaultTo, head, inc, max, pipe, prop, reduce, toPairs, nth} from 'rambda';

import {TENOR_KEY} from './consts';

export const createTenorCall = (desc) => `https://api.tenor.com/v1/search?q=${
    desc}&key=${TENOR_KEY}&limit=8&media_filter=minimal`;

// array of vals -> {val1: no_of_occurences1, ...}
const occurences = reduce(
    (acc, x) => ({...acc, [x]: pipe(defaultTo(0), inc)(acc[x])}),
    Object.create(null));

const largestPair = reduce(([k0, v0], [k1, v1]) => {
  const maxVal = max(v0, v1);
  const keyOfLargest = maxVal > v0 ? k1 : k0;
  return [keyOfLargest, maxVal];
}, [null, -Infinity]);

const mode = pipe(occurences, toPairs, largestPair, head);
const getDesc = pipe(prop('weather'), head, prop('description'));

export const mostCommonDescription = (days) =>
    (mode(days.map(day => getDesc(day))))


const randomFromArray = (arr) => nth(Math.floor(Math.random() * arr.length), arr);
export const getGifUrl = pipe(randomFromArray, prop('media'), head, prop('gif'), prop('url'));