import React, { useEffect } from 'react';
import { PageHeader, Col, Row, Descriptions, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions, Types } from '../state';
import useFetchInfo from '../../common/hook/useFetchInfo';
import Department from './Department';
import History from '../../common/component/History';
import TagList from './TagList';
import useNeedLogin from '../../common/hook/useNeedLogin';
import FetchLabel from '../component/FetchLabel';

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */
export default function User({ match }) {
  useNeedLogin();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userHistory = useSelector((state) => state.user.userHistory);

  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
    dispatch(actions.fetchUserHistory(name));
  }, [name, dispatch]);

  useEffect(() => {
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  // const { isFetched } = useFetchInfo(Types.FetchUser, name);
  const { isFetched } = useFetchInfo(Types.FetchUser);

  return (
    <Row justify='center'>
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          // onBack={history.goBack}
          onBack={() => history.push('/search')}
          title={
            <FetchLabel label='User Information' actionType={Types.FetchUser} />
          }
        >
          {user && (
            <Descriptions layout='vertical' bordered column={1}>
              <Descriptions.Item label='Name'>
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLabel
                    label='Department'
                    actionType={Types.FetchUpdateUser}
                    fetchKey='department'
                  />
                }
              >
                <Department />
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLabel
                    label='Tag'
                    actionType={Types.FetchUpdateUser}
                    fetchKey='tag'
                  />
                }
              >
                <TagList />
              </Descriptions.Item>
              <Descriptions.Item label='Update'>
                <History items={userHistory} />
              </Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>Not exsiting user!</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}
