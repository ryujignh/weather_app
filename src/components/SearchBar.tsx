import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";

import {getLocation, setLoading} from "../store/actions/locationActions";
import {Row, Col, Input, Typography} from "antd";

import {setError} from "../store/actions/errorActions";

const {Search} = Input;
const {Title} = Typography;

interface SearchProps {
  title: string;
}

const SearchBar: FC<SearchProps> = ({title}) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = () => {
    if (city.trim() === '') {
      return dispatch(setError('Please input the city name!'));
    }
    dispatch(setLoading());
    dispatch(getLocation(city));
    setCity('');
  }

  return (
    <Row justify="space-around" align="middle" className='hero'>
      <Col span={8}>
        <Title level={2} style={{color: '#FFFFFF', textAlign: 'center', marginBottom: '1.5rem'}}>{title}</Title>
        <Search
          placeholder="Search by city name"
          allowClear
          enterButton="Go"
          size="large"
          value={city}
          onChange={changeHandler}
          onSearch={submitHandler}
        >
        </Search>
      </Col>
    </Row>
  );
}

export default SearchBar;