import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback  } from 'use-debounce';
import { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";

const Filter = ({value,setFilter}) => {

    const [searchQuery, setSearchQuery] = useState(value);
    const debounced = useDebouncedCallback(
      // function
      (value) => {
        setFilter(value);
      },
      // delay in ms
      500
    );
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(value)=>{
        setSearchQuery(value);
        debounced(value);
      }}
      value={searchQuery}
      style={{margin:20}}
    />
  );
};

const OrderSelected = ({value,setOrder}) => {
  
    return (
  
      <RNPickerSelect
          onValueChange={(value) => setOrder(value)}
          items={[
            { label: 'Latest repositories', value: 'default' },
            { label: 'Highest rated repositories', value: 'desc' },
            { label: 'Lowest rated repositories', value: 'asc' },
          ]}
          value={value}
      />
    )
  }

const HeaderComponent = ({valueOrder,setOrder,setFilter,valueFilter}) => {

    return (
        <>
            <Filter setFilter={setFilter} value={valueFilter}/>
            <OrderSelected value={valueOrder} setOrder={setOrder}/>
        </>
    )
}

export default HeaderComponent;