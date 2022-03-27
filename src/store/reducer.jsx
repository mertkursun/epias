import { createSlice } from '@reduxjs/toolkit';
const axios = require("axios");
const CONTRACT1_URL = 'https://epias-api.herokuapp.com/contract1'
const CONTRACT2_URL = 'https://epias-api.herokuapp.com/contract2'
const initialState = {
  contract1Data: [],
  filterContract1Data: [],
  contract1Columns: [],
  contract2Data: [],
  contract2Columns: [],
  filterOption: [],
  filterColumnsOpt: [],
  filterContract1Columns: []
};

export const reducerSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getContract1Data: (state, action) => {
      state.contract1Data = action.payload

    },
    getContract1Columns: (state, action) => {
      state.contract1Columns = action.payload
      const filterColumnsOpt = action.payload.map((item, index) => {
        return { id: index, value: item.key, label: item.title, checked: true }
      })
      state.filterColumnsOpt = filterColumnsOpt
    },
    getContract2Data: (state, action) => {
      state.contract2Data = action.payload
    },
    getContract2Columns: (state, action) => {
      state.contract2Columns = action.payload
    },
    getFilterOption: (state, action) => {
      const payload = action.payload.filter((x, i, a) => a.indexOf(x) === i)
      state.filterOption = payload
    },
    filterData: (state, action) => {
      state.filterContract1Data = action.payload
    },
    filterColumn: (state, action) => {
      state.filterContract1Columns = action.payload
    }
  }
});

export const getContract2DataAsync = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(CONTRACT2_URL);
    if (response.status !== 200) return;
    const columns = response.data[0].columns
    const data = response.data[0].dataSource

    dispatch(getContract2Data(data))
    dispatch(getContract2Columns(columns))
  } catch (err) {
    throw new Error(err);
  }
};

export const getContract1DataAsync = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(CONTRACT1_URL);
    if (response.status !== 200) return;
    const columns = response.data[0].columns
    const data = response.data[0].dataSource
    const filterColumns = data.map((item) => {
      return item.contract
    })
    dispatch(getContract1Data(data))
    dispatch(getContract1Columns(columns))
    dispatch(getFilterOption(filterColumns))
    dispatch(filterData(data))
    dispatch(filterColumn(columns))
  } catch (err) {
    throw new Error(err);
  }
};

export const getFilterColumns = (arr) => async (dispatch, getState) => {
  try {
    const { store } = getState()

    let data = []
    store.contract1Columns.forEach((val) => {
      arr.forEach((item) => {
        if (val.key === item.value && item.checked) {
          data.push(val)
        }
      })
    })
    dispatch(filterColumn(data))



  } catch (err) {
    throw new Error(err);
  }
};

export const getFilterData = (value) => async (dispatch, getState) => {
  try {
    const { store } = getState()
    let filteredData = []
    const val = Number(value)
    if (val === 0) {
      filteredData = store.contract1Data
    } else {
      const data = store.contract1Data.filter((item) => {
        return item.contract === val
      })
      filteredData = data
    }
    dispatch(filterData(filteredData))
  } catch (err) {
    throw new Error(err);
  }
};

export const addContract2Row = (obj) => async (dispatch, getState) => {
  try {
    const { store } = getState()
    const addRow = {
      id: obj[0].value,
      label: obj[1].value,
      value: obj[2].value,
      data: obj[3].value
    }
    dispatch(getContract2Data([...store.contract2Data, addRow]))

  } catch (err) {
    throw new Error(err);
  }
};

export const {
  getContract1Data,
  getContract1Columns,
  getFilterOption,
  filterData,
  filterColumn,
  getContract2Data,
  getContract2Columns,
  getResourcesLog
} = reducerSlice.actions;

export default reducerSlice.reducer;
