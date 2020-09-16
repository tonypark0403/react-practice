import React, { useEffect } from 'react';
import { PageHeader, Col, Row, Descriptions, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

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
  }, [name]);

  const isFetched = true;

  return (
    <Row justify='center'>
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title='User information'>
          {user && (
            <Descriptions layout='vertical' bordered column={1}>
              <Descriptions.Item label='Name'>
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label='Team'>
                {user.department}
              </Descriptions.Item>
              <Descriptions.Item label='Tag'>{user.tag}</Descriptions.Item>
              <Descriptions.Item label='Update'>
                Update history
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
