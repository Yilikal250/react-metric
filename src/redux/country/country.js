const initialState = [];

const countryAPI = 'https://holidayapi.com/v1/countries?pretty&key=6e6df07b-9728-47ef-ad8d-7c4416b8fe01';

export const addCountry = (country) => ({
  type: 'ADD_COUNTRY',
  country,
});

export const FetchCountry = () => (async (dispatch) => {
  const response = await fetch(countryAPI);
  const info = await response.json();
  const countryArray = [];
  info.countries.forEach((e) => {
    const country = {
      countryCode: e.code,
      countryName: e.name,
    };
    countryArray.push(country);
  });
  dispatch(addCountry(countryArray));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      return action.country;

    default:
      return state;
  }
};

export default reducer;
