import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";

import {getLocation, setLoading} from "../store/actions/locationActions";
import {Row, Col, Input} from "antd";
import {wait} from "@testing-library/user-event/dist/utils";

const {Search} = Input;

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
    dispatch(setLoading());
    dispatch(getLocation(city));
    // setCity('');
  }

  return (
    <Row className='hero' style={{justifyContent: 'center'}}>
      <Col span={8}>
        <h1 className="title">{title}</h1>
        <Search
          placeholder="Search by city name"
          allowClear
          enterButton="Go"
          size="large"
          onChange={changeHandler}
          onSearch={submitHandler}
        >
        </Search>
      </Col>
    </Row>
  );
}

export default SearchBar;