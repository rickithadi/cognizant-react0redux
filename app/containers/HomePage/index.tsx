/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { submitForm } from './actions';
import { changeUsername, changePlace, changeDate } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const key = 'home';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  //NOTE username as NRIC
  const { repos, place, username, loading, error } = useSelector(stateSelector);
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  // Not gonna declare event types here. No need. any is fine
  const onChangeUsername = (evt: any) =>
    dispatch(changeUsername(evt.target.value));

  const onSubmitForm = (evt?: any) => {
    console.log('submitted form', evt);
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!username || !place || !startDate) {
      return;
    }

    dispatch(FORM_SUBMIT(username, place, startDate));
  };

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }, []);

  const onChangePlace = (evt: any) => dispatch(changePlace(evt.target.value));
  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  const reposListProps = {
    loading: loading,
    error: error,
    repos: repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection></CenteredSection>
        <Section>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <AtPrefix></AtPrefix>
              <Input
                id="nric"
                required
                type="text"
                placeholder="nric"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
            <label htmlFor="place">
              <AtPrefix></AtPrefix>
              <Input
                id="place"
                required
                type="text"
                placeholder="place"
                value={place}
                onChange={onChangePlace}
              />
            </label>

            <label htmlFor="date">
              <AtPrefix></AtPrefix>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </label>
          </Form>
        </Section>
      </div>
    </article>
  );
}
