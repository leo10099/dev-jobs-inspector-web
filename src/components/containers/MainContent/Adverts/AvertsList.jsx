import React from 'react';
import { connect } from 'react-redux';
import ScrollToBottomListener from 'react-bottom-scroll-listener';
import AdvertsItem from './AdvertsItem';

const AvertsList = props => {
  return (
    <ScrollToBottomListener onBottom={someF} debounce={800}>
      <section id="AdvertsList">
        {props.adverts.data.map(advert => {
          return <AdvertsItem advertItem={advert} key={advert._id} />;
        })}
      </section>
    </ScrollToBottomListener>
  );
};

const mapStateToProps = state => ({
  adverts: state.adverts
});

export default connect(mapStateToProps)(AvertsList);
