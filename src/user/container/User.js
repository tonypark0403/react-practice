import React, { useEffect } from 'react';
import {
  PageHeader,
  Col,
  Row,
  Descriptions,
  Typography,
  Space,
  Spin,
} from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions, Types } from '../state';
import useFetchInfo from '../../common/hook/useFetchInfo';
import Department from './Department';
import History from '../../common/component/History';
import TagList from './TagList';

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */
export default function User({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name, dispatch]);

  // const { isFetched } = useFetchInfo(Types.FetchUser, name);
  const { isFetched, isSlow } = useFetchInfo(Types.FetchUser);

  return (
    <Row justify='center'>
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={history.goBack}
          title={
            <Space>
              User Information
              {isSlow && <Spin size='small' />}
            </Space>
          }
        >
          {user && (
            <Descriptions layout='vertical' bordered column={1}>
              <Descriptions.Item label='Name'>
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label='Team'>
                <Department />
              </Descriptions.Item>
              <Descriptions.Item label='Tag'>
                <TagList />
              </Descriptions.Item>
              <Descriptions.Item label='Update'>
                <History />
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
