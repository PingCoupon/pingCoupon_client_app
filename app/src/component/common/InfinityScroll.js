import React, {useState, useCallback, useEffect, useRef} from 'react';
import {FlatList, Alert, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import RenderFooter from './RenderFooter';

import {useAuthRedux} from '../../container/auth';

const InfinityScroll = ({
  navigation,
  api,
  renderItem,
  accessToken,
  sort,
  size,
  setPeople = null,
}) => {
  const {
    authReducer: {logout},
  } = useAuthRedux();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [empty, setEmpty] = useState(false);

  const getData = useCallback(async () => {
    const response = await api({
      accessToken,
      page,
      sort,
      size,
    });

    if (response[1] === 200) {
      if (setPeople !== null) {
        setPeople(response[0].totalElements);
      }

      if (response[0].empty) {
        setEmpty(true);
      }

      setIsRefreshing(false);
      setRefreshing(false);
      setPage(page + 1);
      setData(
        refreshing ? response[0].content : data.concat(response[0].content),
      );
    } else if (response[1] === 401) {
      Alert.alert('토큰이 만료되었습니다.');
      navigation.navigate('AuthLoading');
      setIsRefreshing(false);
      await logout();
    } else {
      setIsRefreshing(false);
      setRefreshing(false);
    }
  }, [
    api,
    accessToken,
    page,
    sort,
    size,
    setPeople,
    refreshing,
    data,
    navigation,
    logout,
  ]);

  const handleLoadMore = useCallback(() => {
    if ((data.length !== 0 || !isRefreshing) && !empty) {
      setIsRefreshing(true);
      getData();
    }
  }, [getData, data, isRefreshing, empty]);
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(0);
    getData();
  }, [getData]);

  return (
    <>
      <NavigationEvents onDidFocus={() => handleRefresh()} />
      <FlatList
        data={data.length === 0 ? ['존재하는 데이터가 없습니다.'] : data}
        renderItem={
          data.length === 0
            ? ({item}) => <Text style={{flex: 1}}>{item}</Text>
            : renderItem
        }
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={<RenderFooter loading={isRefreshing} />}
      />
    </>
  );
};

export default InfinityScroll;
