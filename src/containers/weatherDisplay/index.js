import {head, pipe, prop, nth, length} from 'rambda';
import React from 'react';
import Loader from 'react-loader-spinner';
import {useSelector} from 'react-redux';

import {DayCard} from './components/dayCard';
import {dataSelector, tenorSelector} from './selectors';

export const WeatherDisplay = () => {
  const data = useSelector(dataSelector);
  const tenorGifs = useSelector(tenorSelector);
  const getUrl = pipe(nth(Math.floor(Math.random() * 8)), prop('media'), head, prop('gif'), prop('url'));
  const gif = tenorGifs === 'empty' ? undefined : getUrl(tenorGifs);
  //TODO: zaminieć empty i fetching na stałe
  if (data === 'empty' || data === 'fetching!' || data == 'ERROR WHILE FETCHING') {
    return (
      <>
        <Loader
          type='ThreeDots'
          color='#00BFFF'
          height={100}
          width={100}
          visible={data === 'fetching!'}
        />
      </>
    );
  } else {
    return (
      <>
        <Loader
          type='ThreeDots'
          color='#00BFFF'
          height={100}
          width={100}
          visible={data === 'fetching'}
        />
        <DayCard days={data} gif = {gif} />
      </>
    );
  }
};
